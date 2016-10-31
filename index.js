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

class TabGroup {
    constructor (args) {
        let options = this.options = {
            tabContainerSelector: args.tabContainerSelector || ".tabs-tabcontainer",
            viewContainerSelector: args.viewContainerSelector || ".tabs-viewcontainer",
            tabClass: args.tabClass || "tabs-tab",
            viewClass: args.viewClass || "tabs-view",
            closeButtonText: args.closeButtonText || "&#x274c;"
        };
        this.tabContainer = document.querySelector(options.tabContainerSelector);
        this.viewContainer = document.querySelector(options.viewContainerSelector);
        this.tabs = [];
        this.newTabId = 0;
    }

    addTab (args) {
        let id = this.newTabId;
        this.newTabId++;
        let tab = new Tab(this, id, args);
        this.pushTab(tab);
        return tab;
    }

    pushTab (tab) {
        this.tabs.push(tab);
    }

    removeTab (tab) {
        let id = tab.id;
        for (let i in this.tabs) {
            if (this.tabs[i].id === id) {
                this.tabs.splice(i, 1);
                break;
            }
        }
    }

    setActiveTab (tab) {
        this.removeTab(tab);
        this.pushTab(tab);
    }

    getActiveTab () {
        if (this.tabs.length < 1) return null;
        return this.tabs[this.tabs.length - 1];
    }

    activateRecentTab (tab) {
        let recentTab = this.tabs[this.tabs.length - 1];
        if (!recentTab) return;
        recentTab.activate();
    }
}

class Tab {
    constructor (tabGroup, id, args) {
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
        let span = this.tabElements.title;
        span.innerHTML = title;
        this.title = title;
    }

    getTitle () {
        return this.title;
    }

    setIcon (iconURL) {
        this.iconURL = iconURL;
        let span = this.tabElements.icon;
        if (iconURL) {
            span.innerHTML = `<img src="${iconURL}" />`;
        }
    }

    getIcon () {
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
        if (e.which === 1) {
            this.activate();
        } else if (e.which === 2) {
            this.close();
        }
    }

    activate () {
        let activeTab = this.tabGroup.getActiveTab();
        if (activeTab) {
            activeTab.tab.classList.remove("active");
            activeTab.webview.classList.remove("visible");
        }
        this.tabGroup.setActiveTab(this);
        this.tab.classList.add("active");
        this.webview.classList.add("visible");
    }

    flash (flag) {
        if (flag !== false) {
            this.tab.classList.add("flash");
        } else {
            this.tab.classList.remove("flash");
        }
    }

    move (index) {
        // TODO: move
    }

    close (force) {
        if (!this.closable && !force) return;
        let tabGroup = this.tabGroup;
        tabGroup.tabContainer.removeChild(this.tab);
        tabGroup.viewContainer.removeChild(this.webview);
        tabGroup.removeTab(this);
        tabGroup.activateRecentTab();
    }
}

module.exports = TabGroup;
