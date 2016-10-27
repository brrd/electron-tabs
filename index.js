// New tab(title, url, icon, webviewArgs)
// .webview.methodeDeWebview()
// .close X
// .activate
// .move(index)
// .blink
// .unblink
// .setTitle X
// .getTitle X
// .setIcon X
// .getIcon X

// TODO: à revoir. Il faut plutôt créer un objet Tabs qui possède des methodes pour crer et manipuler des tabs. + faire remonter les méthodes importantes des webview (url) mais laisser acces pour usage avancé.

// const Tab = require("electron-tabs")(config);

module.exports = (config) => {
    class Tab {
        constructor (args) {
            this.title = args.title;
            this.iconURL = args.iconURL;
            this.webviewAttributes = args.webviewAttributes;
            this.tabContainerSelector = args.tabContainerSelector || config.tabContainerSelector;
            this.tabContainer = document.querySelector(this.tabContainerSelector);
            this.webviewContainerSelector = args.webviewContainerSelector || config.webviewContainerSelector;
            this.webviewContainer = document.querySelector(this.webviewContainerSelector);
            this.initTab();
        }

        init () {
            // Create the tab
            this.tab = document.createElement("div");
            this.setTitle(this.title);
            this.tabContainer.appendChild(this.tab);

            // Create the webview
            this.webview = document.createElement("webview");
            if (this.webviewAttributes) {
                let attrs = this.webviewAttributes;
                for (let key in attrs) {
                    this.webview.setAttribute(key, attrs[key]);
                }
            }
            this.webviewContainer.appendChild(this.webview);
        }

        setTitle (title) {
            this.title = title;
            this.tab.innerHTML = title;
        }

        getTitle () {
            return this.tab.innerHTML;
        }

        setIcon (iconURL) {
            this.iconURL = iconURL;
            this.tab.setAttribute("data-icon", iconURL);
        }

        activate () {
            // TODO
        }

        close () {
            this.tabContainer.removeChild(this.tab);
            this.webviewContainer.removeChild(this.webview);
        }
    }

    return Tab;
};
