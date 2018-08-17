const EventEmitter = require("events");

if (!document) {
    throw Error("electron-tabs module must be called in renderer process");
}

// Inject styles
(function () {
    const styles = `
        webview {
            width: 0px;
            height: 0px;
        }
        webview.visible {
            width: 100%;
            height: 100%;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
        }
    `;
    let styleTag = document.createElement("style");
    styleTag.innerHTML = styles;
    document.getElementsByTagName("head")[0].appendChild(styleTag);
})();

class TabGroup extends EventEmitter {
    constructor (args = {}) {
        super();
        let options = this.options = {
            tabContainerSelector: args.tabContainerSelector || ".etabs-tabs",
            buttonsContainerSelector: args.buttonsContainerSelector || ".etabs-buttons",
            viewContainerSelector: args.viewContainerSelector || ".etabs-views",
            tabClass: args.tabClass || "etabs-tab",
            viewClass: args.viewClass || "etabs-view",
            closeButtonText: args.closeButtonText || "&#10006;",
            newTab: args.newTab,
            newTabButtonText: args.newTabButtonText || "&#65291;",
            ready: args.ready
        };
        this.tabContainer = document.querySelector(options.tabContainerSelector);
        this.viewContainer = document.querySelector(options.viewContainerSelector);
        this.tabs = [];
        this.newTabId = 0;
        TabGroupPrivate.initNewTabButton.bind(this)();
        if (typeof this.options.ready === "function") {
            this.options.ready(this);
        }
    }

    addTab (args = this.options.newTab) {
        if (typeof args === "function") {
            args = args(this);
        }
        let id = this.newTabId;
        this.newTabId++;
        let tab = new Tab(this, id, args);
        this.tabs.push(tab);
        // Don't call tab.activate() before a tab is referenced in this.tabs
        if (args.active === true) {
            tab.activate();
        }
        this.emit("tab-added", tab, this);
        return tab;
    }

    getTab (id) {
        for (let i in this.tabs) {
            if (this.tabs[i].id === id) {
                return this.tabs[i];
            }
        }
        return null;
    }

    getTabByPosition (position) {
        let fromRight = position < 0;
        for (let i in this.tabs) {
            if (this.tabs[i].getPosition(fromRight) === position) {
                return this.tabs[i];
            }
        }
        return null;
    }

    getTabByRelPosition (position) {
        position = this.getActiveTab().getPosition() + position;
        if (position <= 0) {
            return null;
        }
        return this.getTabByPosition(position);
    }

    getNextTab () {
        return this.getTabByRelPosition(1);
    }

    getPreviousTab () {
        return this.getTabByRelPosition(-1);
    }

    getTabs () {
      return this.tabs.slice();
    }

    eachTab (fn) {
      this.getTabs().forEach(fn);
      return this;
    }

    getActiveTab () {
        if (this.tabs.length === 0) return null;
        return this.tabs[0];
    }
}

const TabGroupPrivate = {
    initNewTabButton: function () {
        if (!this.options.newTab) return;
        let container = document.querySelector(this.options.buttonsContainerSelector);
        let button = container.appendChild(document.createElement("button"));
        button.classList.add(`${this.options.tabClass}-button-new`);
        button.innerHTML = this.options.newTabButtonText;
        button.addEventListener("click", this.addTab.bind(this, undefined), false);
    },

    removeTab: function (tab, triggerEvent) {
        let id = tab.id;
        for (let i in this.tabs) {
            if (this.tabs[i].id === id) {
                this.tabs.splice(i, 1);
                break;
            }
        }
        if (triggerEvent) {
            this.emit("tab-removed", tab, this);
        }
        return this;
    },

    setActiveTab: function (tab) {
        TabGroupPrivate.removeTab.bind(this)(tab);
        this.tabs.unshift(tab);
        this.emit("tab-active", tab, this);
        return this;
    },

    activateRecentTab: function (tab) {
        if (this.tabs.length > 0) {
            this.tabs[0].activate();
        }
        return this;
    }
};

class Tab extends EventEmitter {
    constructor (tabGroup, id, args) {
        super();
        this.tabGroup = tabGroup;
        this.id = id;
        this.title = args.title;
        this.badge = args.badge;
        this.iconURL = args.iconURL;
        this.icon = args.icon;
        this.closable = args.closable === false ? false : true;
        this.webviewAttributes = args.webviewAttributes || {};
        this.webviewAttributes.src = args.src;
        this.tabElements = {};
        TabPrivate.initTab.bind(this)();
        TabPrivate.initWebview.bind(this)();
        if (args.visible !== false) {
            this.show();
        }
        if (typeof args.ready === "function") {
            args.ready(this);
        }
    }

    setTitle (title) {
        if (this.isClosed) return;
        let span = this.tabElements.title;
        span.innerHTML = title;
        this.title = title;
        this.emit("title-changed", title, this);
        return this;
    }

    getTitle () {
        if (this.isClosed) return;
        return this.title;
    }

    setBadge (badge) {
        if (this.isClosed) return;
        let span = this.tabElements.badge;
        this.badge = badge;

        if (badge) {
            span.innerHTML = badge;
            span.classList.remove('hidden');
        } else {
            span.classList.add('hidden');
        }

        this.emit("badge-changed", badge, this);
    }

    getBadge () {
      if (this.isClosed) return;
      return this.badge;
    }

    setIcon (iconURL, icon) {
        if (this.isClosed) return;
        this.iconURL = iconURL;
        this.icon = icon;
        let span = this.tabElements.icon;
        if (iconURL) {
            span.innerHTML = `<img src="${iconURL}" />`;
            this.emit("icon-changed", iconURL, this);
        } else if (icon) {
            span.innerHTML = `<i class="${icon}"></i>`;
            this.emit("icon-changed", icon, this);
        }

        return this;
    }

    getIcon () {
        if (this.isClosed) return;
        if (this.iconURL) return this.iconURL;
        return this.icon;
    }

    setPosition (newPosition) {
        let tabContainer = this.tabGroup.tabContainer;
        let tabs = tabContainer.children;
        let oldPosition = this.getPosition() - 1;

        if (newPosition < 0) {
            newPosition += tabContainer.childElementCount;

            if (newPosition < 0) {
                newPosition = 0;
            }
        } else {
            if (newPosition > tabContainer.childElementCount) {
                newPosition = tabContainer.childElementCount;
            }

            // Make 1 be leftmost position
            newPosition--;
        }

        if (newPosition > oldPosition) {
            newPosition++;
        }

        tabContainer.insertBefore(tabs[oldPosition], tabs[newPosition]);

        return this;
    }

    getPosition (fromRight) {
        let position = 0;
        let tab = this.tab;
        while ((tab = tab.previousSibling) != null) position++;

        if (fromRight === true) {
            position -= this.tabGroup.tabContainer.childElementCount;
        }

        if (position >= 0) {
            position++;
        }

        return position;
    }

    activate () {
        if (this.isClosed) return;
        let activeTab = this.tabGroup.getActiveTab();
        if (activeTab) {
            activeTab.tab.classList.remove("active");
            activeTab.webview.classList.remove("visible");
        }
        TabGroupPrivate.setActiveTab.bind(this.tabGroup)(this);
        this.tab.classList.add("active");
        this.webview.classList.add("visible");
        this.webview.focus();
        this.emit("active", this);
        return this;
    }

    show (flag) {
        if (this.isClosed) return;
        if (flag !== false) {
            this.tab.classList.add("visible");
            this.emit("visible", this);
        } else {
            this.tab.classList.remove("visible");
            this.emit("hidden", this);
        }
        return this;
    }

    hide () {
        return this.show(false);
    }

    flash (flag) {
        if (this.isClosed) return;
        if (flag !== false) {
            this.tab.classList.add("flash");
            this.emit("flash", this);
        } else {
            this.tab.classList.remove("flash");
            this.emit("unflash", this);
        }
        return this;
    }

    unflash () {
        return this.flash(false);
    }

    close (force) {
        this.emit("closing", this);
        if (this.isClosed || (!this.closable && !force)) return;
        this.isClosed = true;
        let tabGroup = this.tabGroup;
        tabGroup.tabContainer.removeChild(this.tab);
        tabGroup.viewContainer.removeChild(this.webview);
        let activeTab = this.tabGroup.getActiveTab();
        TabGroupPrivate.removeTab.bind(tabGroup)(this, true);
        this.emit("close", this);

        if (activeTab.id === this.id) {
            TabGroupPrivate.activateRecentTab.bind(tabGroup)();
        }
    }
}

const TabPrivate = {
    initTab: function () {
        let tabClass = this.tabGroup.options.tabClass;

        // Create tab element
        let tab = this.tab = document.createElement("div");
        tab.classList.add(tabClass);
        for (let el of ["icon", "title", "buttons", "badge"]) {
            let span = tab.appendChild(document.createElement("span"));
            span.classList.add(`${tabClass}-${el}`);
            this.tabElements[el] = span;
        }

        this.setTitle(this.title);
        this.setBadge(this.badge);
        this.setIcon(this.iconURL, this.icon);
        TabPrivate.initTabButtons.bind(this)();
        TabPrivate.initTabClickHandler.bind(this)();

        this.tabGroup.tabContainer.appendChild(this.tab);
    },

    initTabButtons: function () {
        let container = this.tabElements.buttons;
        let tabClass = this.tabGroup.options.tabClass;
        if (this.closable) {
            let button = container.appendChild(document.createElement("button"));
            button.classList.add(`${tabClass}-button-close`);
            button.innerHTML = this.tabGroup.options.closeButtonText;
            button.addEventListener("click", this.close.bind(this, false), false);
        }
    },

    initTabClickHandler: function () {
        // Mouse up
        const tabClickHandler = function (e) {
            if (this.isClosed) return;
            if (e.which === 2) {
                this.close();
            }
        };
        this.tab.addEventListener("mouseup", tabClickHandler.bind(this), false);
        // Mouse down
        const tabMouseDownHandler = function (e) {
            if (this.isClosed) return;
            if (e.which === 1) {
                if (e.target.matches("button")) return;
                this.activate();
            }
        };
        this.tab.addEventListener("mousedown", tabMouseDownHandler.bind(this), false);
    },

    initWebview: function () {
        this.webview = document.createElement("webview");

        const tabWebviewDidFinishLoadHandler = function (e) {
            this.emit("webview-ready", this);
        };

        this.webview.addEventListener("did-finish-load", tabWebviewDidFinishLoadHandler.bind(this), false);

        this.webview.classList.add(this.tabGroup.options.viewClass);
        if (this.webviewAttributes) {
            let attrs = this.webviewAttributes;
            for (let key in attrs) {
                this.webview.setAttribute(key, attrs[key]);
            }
        }

        this.tabGroup.viewContainer.appendChild(this.webview);
    }
};

module.exports = TabGroup;
