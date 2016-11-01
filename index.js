const EventEmitter = require("events");

if (!document) {
    throw Error("electron-tabs module must be called in renderer process");
}

// Inject styles
(function () {
    const styles = `
        webview {
            display: flex;
            flex: 0 1;
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
            tabContainerSelector: args.tabContainerSelector || ".tabs-tabcontainer",
            buttonsContainerSelector: args.buttonsContainerSelector || ".tabs-buttonscontainer",
            viewContainerSelector: args.viewContainerSelector || ".tabs-viewcontainer",
            tabClass: args.tabClass || "tabs-tab",
            viewClass: args.viewClass || "tabs-view",
            closeButtonText: args.closeButtonText || "&#x274c;",
            newTab: args.newTab,
            newTabButtonText: args.newTabButton || "+"
        };
        this.tabContainer = document.querySelector(options.tabContainerSelector);
        this.viewContainer = document.querySelector(options.viewContainerSelector);
        this.tabs = [];
        this.newTabId = 0;
        this.initNewTabButton();
    }

    initNewTabButton () {
        if (!this.options.newTab) return;
        let container = document.querySelector(this.options.buttonsContainerSelector);
        let button = container.appendChild(document.createElement("button"));
        button.classList.add(`${this.options.tabClass}-button-new`);
        button.innerHTML = this.options.newTabButtonText;
        button.addEventListener("click", this.addTab.bind(this, undefined), false);
    }

    addTab (args = this.options.newTab) {
        let id = this.newTabId;
        this.newTabId++;
        let tab = new Tab(this, id, args);
        this.tabs.push(tab);
        this.emit("tab-added", tab, this);
        return tab;
    }

    removeTab (tab, triggerEvent) {
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
    }

    setActiveTab (tab) {
        this.removeTab(tab);
        this.tabs.unshift(tab);
        this.emit("tab-active", tab, this);
        return this;
    }

    getActiveTab () {
        if (this.tabs.length === 0) return null;
        return this.tabs[0];
    }

    activateRecentTab (tab) {
        if (this.tabs.length > 0) {
            this.tabs[0].activate();
        }
        return this;
    }
}

class Tab extends EventEmitter {
    constructor (tabGroup, id, args) {
        super();
        this.tabGroup = tabGroup;
        this.id = id;
        this.title = args.title;
        this.iconURL = args.iconURL;
        this.closable = args.closable === false ? false : true;
        this.webviewAttributes = args.webviewAttributes || {};
        this.webviewAttributes.src = args.src;
        this.tabElements = {};
        this.initTab();
        this.initWebview();
    }

    initTab () {
        let tabClass = this.tabGroup.options.tabClass;

        // Create tab element
        let tab = this.tab = document.createElement("div");
        tab.classList.add(tabClass);
        for (let el of ["icon", "title", "buttons"]) {
            let span = tab.appendChild(document.createElement("span"));
            span.classList.add(`${tabClass}-${el}`);
            this.tabElements[el] = span;
        }

        this.setTitle(this.title);
        this.setIcon(this.iconURL);
        this.setButtons();

        tab.addEventListener("click", this.tabClickHandler.bind(this), false);
        this.tabGroup.tabContainer.appendChild(this.tab);
    }

    initWebview () {
        this.webview = document.createElement("webview");
        this.webview.classList.add(this.tabGroup.options.viewClass);
        if (this.webviewAttributes) {
            let attrs = this.webviewAttributes;
            for (let key in attrs) {
                this.webview.setAttribute(key, attrs[key]);
            }
        }
        this.tabGroup.viewContainer.appendChild(this.webview);
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

    setIcon (iconURL) {
        if (this.isClosed) return;
        this.iconURL = iconURL;
        let span = this.tabElements.icon;
        if (iconURL) {
            span.innerHTML = `<img src="${iconURL}" />`;
        }
        this.emit("icon-changed", iconURL, this);
        return this;
    }

    getIcon () {
        if (this.isClosed) return;
        return this.iconURL;
    }

    setButtons () {
        let container = this.tabElements.buttons;
        let tabClass = this.tabGroup.options.tabClass;
        if (this.closable) {
            let button = container.appendChild(document.createElement("button"));
            button.classList.add(`${tabClass}-button-close`);
            button.innerHTML = this.tabGroup.options.closeButtonText;
            button.addEventListener("click", this.close.bind(this), false);
        }
    }

    tabClickHandler (e) {
        if (this.isClosed) return;
        if (e.which === 1) {
            this.activate();
        } else if (e.which === 2) {
            this.close();
        }
    }

    activate () {
        if (this.isClosed) return;
        let activeTab = this.tabGroup.getActiveTab();
        if (activeTab) {
            activeTab.tab.classList.remove("active");
            activeTab.webview.classList.remove("visible");
        }
        this.tabGroup.setActiveTab(this);
        this.tab.classList.add("active");
        this.webview.classList.add("visible");
        this.emit("active", this);
        return this;
    }

    show () {
        if (this.isClosed) return;
        this.tab.classList.add("visible");
        return this;
    }

    hide () {
        if (this.isClosed) return;
        this.tab.classList.remove("visible");
        return this;
    }

    flash (flag) {
        if (this.isClosed) return;
        if (flag !== false) {
            this.tab.classList.add("flash");
            this.emit("flash-start", this);
        } else {
            this.tab.classList.remove("flash");
            this.emit("flash-end", this);
        }
        return this;
    }

    move (index) {
        // TODO: move
    }

    close (force) {
        if (this.isClosed || (!this.closable && !force)) return;
        this.isClosed = true;
        let tabGroup = this.tabGroup;
        tabGroup.tabContainer.removeChild(this.tab);
        tabGroup.viewContainer.removeChild(this.webview);
        tabGroup.removeTab(this, true);
        this.emit("close", this);
        tabGroup.activateRecentTab();
    }
}

module.exports = TabGroup;
