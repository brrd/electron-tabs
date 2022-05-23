var $5580883c37846f86$export$2e2bcd8739ae039 = ".etabs-tabgroup {\n  width: 100%;\n  height: 32px;\n  background-color: #ccc;\n  cursor: default;\n  font: caption;\n  font-size: 14px;\n  -webkit-user-select: none;\n  user-select: none;\n  display: none;\n}\n\n.etabs-tabgroup.visible {\n\tdisplay: block;\n}\n\n.etabs-tabs {\n}\n\n.etabs-tab {\n  display: none;\n  position: relative;\n  color: #333;\n  height: 22px;\n  padding: 6px 8px 4px;\n  border: 1px solid #aaa;\n  border-bottom: none;\n  border-left: none;\n  background: linear-gradient(to bottom, rgba(234,234,234,1) 0%,rgba(204,204,204,1) 100%);\n  font: caption;\n  font-size: 14px;\n  background-color: #ccc;\n  cursor: default;\n}\n\n/* Dragula */\n.etabs-tab.gu-mirror {\n  padding-bottom: 0;\n}\n\n.etabs-tab:first-child {\n  border-left: none;\n}\n\n.etabs-tab.visible {\n  display: inline-block;\n  float: left;\n}\n\n.etabs-tab.active {\n  background: #fff;\n}\n\n.etabs-tab.flash {\n  background: linear-gradient(to bottom, rgba(255,243,170,1) 0%,rgba(255,227,37,1) 100%);\n}\n\n.etabs-buttons {\n  float: left;\n}\n\n.etabs-buttons button {\n  float: left;\n  color: #333;\n  background: none;\n  border: none;\n  font-size: 12px;\n  margin-top: 6px;\n  border-radius: 2px;\n  margin-left: 4px;\n  width: 20px;\n  text-align: center;\n  padding: 4px 0;\n}\n\n.etabs-buttons button:hover {\n  color: #eee;\n  background-color: #aaa;\n}\n\n.etabs-tab-badge {\n  position: absolute;\n  right: 0;\n  top: -7px;\n  background: red;\n  border-radius: 100%;\n  text-align: center;\n  font-size: 10px;\n  padding: 0 5px;\n}\n\n.etabs-tab-badge.hidden {\n  display: none;\n}\n\n.etabs-tab-icon {\n  display: inline-block;\n  height: 16px;\n}\n\n.etabs-tab-icon img {\n  max-width: 16px;\n  max-height: 16px;\n}\n\n.etabs-tab-title {\n  display: inline-block;\n  margin-left: 10px;\n}\n\n.etabs-tab-buttons {\n  display: inline-block;\n  margin-left: 10px;\n}\n\n.etabs-tab-buttons button {\n  display: inline-block;\n  color: #333;\n  background: none;\n  border: none;\n  width: 20px;\n  text-align: center;\n  border-radius: 2px;\n}\n\n.etabs-tab-buttons button:hover {\n  color: #eee;\n  background-color: #aaa;\n}\n\n.etabs-views {\n  position: relative;\n  border-top: 1px solid #aaa;\n  height: calc(100vh - 33px);\n}\n\n.etab-view {\n  position: relative;\n}\n\nwebview {\n  position: absolute;\n  visibility: hidden;\n  width: 100%;\n  height: 100%;\n}\nwebview.visible {\n  visibility: visible;\n}\n";


if (!document) throw Error("electron-tabs module must be called in renderer process");
class $4fa36e821943b400$var$TabGroup extends HTMLElement {
    constructor(){
        super();
        // Options
        this.options = {
            closeButtonText: this.getAttribute("close-button-text") || "&#215;",
            newTabButtonText: this.getAttribute("new-tab-button-text") || "&#65291;",
            visibilityThreshold: this.getAttribute("visibility-threshold") || 0,
            tabClass: this.getAttribute("tab-class") || "etabs-tab",
            viewClass: this.getAttribute("view-class") || "etabs-view"
        };
        // Create custom element
        const shadow = this.attachShadow({
            mode: "open"
        });
        const wrapper = document.createElement("div");
        wrapper.setAttribute("class", "etabs");
        const tabgroup = document.createElement("div");
        tabgroup.setAttribute("class", "etabs-tabgroup");
        wrapper.appendChild(tabgroup);
        const tabContainer = document.createElement("div");
        tabContainer.setAttribute("class", "etabs-tabs");
        tabgroup.appendChild(tabContainer);
        this.tabContainer = tabContainer;
        const buttonContainer = document.createElement("div");
        buttonContainer.setAttribute("class", "etabs-buttons");
        tabgroup.appendChild(buttonContainer);
        this.buttonContainer = buttonContainer;
        const viewContainer = document.createElement("div");
        viewContainer.setAttribute("class", "etabs-views");
        wrapper.appendChild(viewContainer);
        this.viewContainer = viewContainer;
        const style = document.createElement("style");
        style.textContent = $5580883c37846f86$export$2e2bcd8739ae039;
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        this.tabs = [];
        this.newTabId = 0;
        $4fa36e821943b400$var$TabGroupPrivate.initNewTabButton.bind(this)();
        $4fa36e821943b400$var$TabGroupPrivate.initVisibility.bind(this)();
        if (typeof this.options.ready === "function") this.options.ready(this);
    }
    addTab(args = this.options.newTab) {
        if (typeof args === "function") args = args(this);
        let id = this.newTabId;
        this.newTabId++;
        let tab = new $4fa36e821943b400$var$Tab(this, id, args);
        this.tabs.push(tab);
        // Don't call tab.activate() before a tab is referenced in this.tabs
        if (args.active === true) tab.activate();
        this.emit("tab-added", tab, this);
        return tab;
    }
    getTab(id) {
        for(let i in this.tabs){
            if (this.tabs[i].id === id) return this.tabs[i];
        }
        return null;
    }
    getTabByPosition(position) {
        let fromRight = position < 0;
        for(let i in this.tabs){
            if (this.tabs[i].getPosition(fromRight) === position) return this.tabs[i];
        }
        return null;
    }
    getTabByRelPosition(position) {
        position = this.getActiveTab().getPosition() + position;
        if (position <= 0) return null;
        return this.getTabByPosition(position);
    }
    getNextTab() {
        return this.getTabByRelPosition(1);
    }
    getPreviousTab() {
        return this.getTabByRelPosition(-1);
    }
    getTabs() {
        return this.tabs.slice();
    }
    eachTab(fn) {
        this.getTabs().forEach(fn);
        return this;
    }
    getActiveTab() {
        if (this.tabs.length === 0) return null;
        return this.tabs[0];
    }
}
const $4fa36e821943b400$var$TabGroupPrivate = {
    initNewTabButton: function() {
        if (!this.options.newTab) return;
        let button = this.buttonContainer.appendChild(document.createElement("button"));
        button.classList.add(`${this.options.tabClass}-button-new`);
        button.innerHTML = this.options.newTabButtonText;
        button.addEventListener("click", this.addTab.bind(this, undefined), false);
    },
    initVisibility: function() {
        function toggleTabsVisibility(tab, tabGroup) {
            var visibilityThreshold = this.options.visibilityThreshold;
            var el = tabGroup.tabContainer.parentNode;
            if (this.tabs.length >= visibilityThreshold) el.classList.add("visible");
            else el.classList.remove("visible");
        }
        this.on("tab-added", toggleTabsVisibility);
        this.on("tab-removed", toggleTabsVisibility);
    },
    removeTab: function(tab, triggerEvent) {
        let id = tab.id;
        for(let i in this.tabs)if (this.tabs[i].id === id) {
            this.tabs.splice(i, 1);
            break;
        }
        if (triggerEvent) this.emit("tab-removed", tab, this);
        return this;
    },
    setActiveTab: function(tab) {
        $4fa36e821943b400$var$TabGroupPrivate.removeTab.bind(this)(tab);
        this.tabs.unshift(tab);
        this.emit("tab-active", tab, this);
        return this;
    },
    activateRecentTab: function(tab) {
        if (this.tabs.length > 0) this.tabs[0].activate();
        return this;
    }
};
class $4fa36e821943b400$var$Tab extends EventTarget {
    constructor(tabGroup, id, args){
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
        $4fa36e821943b400$var$TabPrivate.initTab.bind(this)();
        $4fa36e821943b400$var$TabPrivate.initWebview.bind(this)();
        if (args.visible !== false) this.show();
        if (typeof args.ready === "function") args.ready(this);
    }
    setTitle(title) {
        if (this.isClosed) return;
        let span = this.tabElements.title;
        span.innerHTML = title;
        span.title = title;
        this.title = title;
        this.emit("title-changed", title, this);
        return this;
    }
    getTitle() {
        if (this.isClosed) return;
        return this.title;
    }
    setBadge(badge) {
        if (this.isClosed) return;
        let span = this.tabElements.badge;
        this.badge = badge;
        if (badge) {
            span.innerHTML = badge;
            span.classList.remove('hidden');
        } else span.classList.add('hidden');
        this.emit("badge-changed", badge, this);
    }
    getBadge() {
        if (this.isClosed) return;
        return this.badge;
    }
    setIcon(iconURL, icon) {
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
    getIcon() {
        if (this.isClosed) return;
        if (this.iconURL) return this.iconURL;
        return this.icon;
    }
    setPosition(newPosition) {
        let tabContainer = this.tabGroup.tabContainer;
        let tabs = tabContainer.children;
        let oldPosition = this.getPosition() - 1;
        if (newPosition < 0) {
            newPosition += tabContainer.childElementCount;
            if (newPosition < 0) newPosition = 0;
        } else {
            if (newPosition > tabContainer.childElementCount) newPosition = tabContainer.childElementCount;
            // Make 1 be leftmost position
            newPosition--;
        }
        if (newPosition > oldPosition) newPosition++;
        tabContainer.insertBefore(tabs[oldPosition], tabs[newPosition]);
        return this;
    }
    getPosition(fromRight) {
        let position = 0;
        let tab = this.tab;
        while((tab = tab.previousSibling) != null)position++;
        if (fromRight === true) position -= this.tabGroup.tabContainer.childElementCount;
        if (position >= 0) position++;
        return position;
    }
    activate() {
        if (this.isClosed) return;
        let activeTab = this.tabGroup.getActiveTab();
        if (activeTab) {
            activeTab.tab.classList.remove("active");
            activeTab.webview.classList.remove("visible");
            activeTab.emit("inactive", activeTab);
        }
        $4fa36e821943b400$var$TabGroupPrivate.setActiveTab.bind(this.tabGroup)(this);
        this.tab.classList.add("active");
        this.webview.classList.add("visible");
        this.webview.focus();
        this.emit("active", this);
        return this;
    }
    show(flag) {
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
    hide() {
        return this.show(false);
    }
    flash(flag) {
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
    unflash() {
        return this.flash(false);
    }
    hasClass(classname) {
        return this.tab.classList.contains(classname);
    }
    close(force) {
        const abortController = new AbortController();
        const abort = ()=>abortController.abort()
        ;
        this.emit("closing", this, abort);
        const abortSignal = abortController.signal;
        if (this.isClosed || !this.closable && !force || abortSignal.aborted) return;
        this.isClosed = true;
        let tabGroup = this.tabGroup;
        tabGroup.tabContainer.removeChild(this.tab);
        tabGroup.viewContainer.removeChild(this.webview);
        let activeTab = this.tabGroup.getActiveTab();
        $4fa36e821943b400$var$TabGroupPrivate.removeTab.bind(tabGroup)(this, true);
        this.emit("close", this);
        if (activeTab.id === this.id) $4fa36e821943b400$var$TabGroupPrivate.activateRecentTab.bind(tabGroup)();
    }
}
const $4fa36e821943b400$var$TabPrivate = {
    initTab: function() {
        let tabClass = this.tabGroup.options.tabClass;
        // Create tab element
        let tab = this.tab = document.createElement("div");
        tab.classList.add(tabClass);
        for (let el of [
            "icon",
            "title",
            "buttons",
            "badge"
        ]){
            let span = tab.appendChild(document.createElement("span"));
            span.classList.add(`${tabClass}-${el}`);
            this.tabElements[el] = span;
        }
        this.setTitle(this.title);
        this.setBadge(this.badge);
        this.setIcon(this.iconURL, this.icon);
        $4fa36e821943b400$var$TabPrivate.initTabButtons.bind(this)();
        $4fa36e821943b400$var$TabPrivate.initTabClickHandler.bind(this)();
        this.tabGroup.tabContainer.appendChild(this.tab);
    },
    initTabButtons: function() {
        let container = this.tabElements.buttons;
        let tabClass = this.tabGroup.options.tabClass;
        if (this.closable) {
            let button = container.appendChild(document.createElement("button"));
            button.classList.add(`${tabClass}-button-close`);
            button.innerHTML = this.tabGroup.options.closeButtonText;
            button.addEventListener("click", this.close.bind(this, false), false);
        }
    },
    initTabClickHandler: function() {
        // Mouse up
        const tabClickHandler = function(e) {
            if (this.isClosed) return;
            if (e.which === 2) this.close();
        };
        this.tab.addEventListener("mouseup", tabClickHandler.bind(this), false);
        // Mouse down
        const tabMouseDownHandler = function(e) {
            if (this.isClosed) return;
            if (e.which === 1) {
                if (e.target.matches("button")) return;
                this.activate();
            }
        };
        this.tab.addEventListener("mousedown", tabMouseDownHandler.bind(this), false);
    },
    initWebview: function() {
        const webview = this.webview = document.createElement("webview");
        const tabWebviewDidFinishLoadHandler = function(e) {
            this.emit("webview-ready", this);
        };
        this.webview.addEventListener("did-finish-load", tabWebviewDidFinishLoadHandler.bind(this), false);
        const tabWebviewDomReadyHandler = function(e) {
            // Remove this once https://github.com/electron/electron/issues/14474 is fixed
            webview.blur();
            webview.focus();
            this.emit("webview-dom-ready", this);
        };
        this.webview.addEventListener("dom-ready", tabWebviewDomReadyHandler.bind(this), false);
        this.webview.classList.add(this.tabGroup.options.viewClass);
        if (this.webviewAttributes) {
            let attrs = this.webviewAttributes;
            for(let key in attrs){
                const attr = attrs[key];
                if (attr === false) continue;
                this.webview.setAttribute(key, attr);
            }
        }
        this.tabGroup.viewContainer.appendChild(this.webview);
    }
};
/**
 * This makes the browser EventTarget API work similar to EventEmitter
 */ const $4fa36e821943b400$var$eventEmitterMixin = {
    emit (type, ...args) {
        this.dispatchEvent(new CustomEvent(type, {
            detail: args
        }));
    },
    on (type, fn) {
        this.addEventListener(type, ({ detail: detail  })=>fn.apply(this, detail)
        );
    },
    once (type, fn) {
        this.addEventListener(type, ({ detail: detail  })=>fn.apply(this, detail)
        , {
            once: true
        });
    }
};
Object.assign($4fa36e821943b400$var$TabGroup.prototype, $4fa36e821943b400$var$eventEmitterMixin);
Object.assign($4fa36e821943b400$var$Tab.prototype, $4fa36e821943b400$var$eventEmitterMixin);
customElements.define("tab-group", $4fa36e821943b400$var$TabGroup);


//# sourceMappingURL=electron-tabs.js.map
