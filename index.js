// TODO: move into a CSS file
// We need a bundler here :-/
const css = `
.etabs-tabgroup {
  width: 100%;
  height: 32px;
  background-color: #ccc;
  cursor: default;
  font: caption;
  font-size: 14px;
  -webkit-user-select: none;
  user-select: none;
  display: none;
}

.etabs-tabgroup.visible {
	display: block;
}

.etabs-tabs {
}

.etabs-tab {
  display: none;
  position: relative;
  color: #333;
  height: 22px;
  padding: 6px 8px 4px;
  border: 1px solid #aaa;
  border-bottom: none;
  border-left: none;
  background: linear-gradient(to bottom, rgba(234,234,234,1) 0%,rgba(204,204,204,1) 100%);
  font: caption;
  font-size: 14px;
  background-color: #ccc;
  cursor: default;
}

/* Dragula */
.etabs-tab.gu-mirror {
  padding-bottom: 0;
}

.etabs-tab:first-child {
  border-left: none;
}

.etabs-tab.visible {
  display: inline-block;
  float: left;
}

.etabs-tab.active {
  background: #fff;
}

.etabs-tab.flash {
  background: linear-gradient(to bottom, rgba(255,243,170,1) 0%,rgba(255,227,37,1) 100%);
}

.etabs-buttons {
  float: left;
}

.etabs-buttons button {
  float: left;
  color: #333;
  background: none;
  border: none;
  font-size: 12px;
  margin-top: 6px;
  border-radius: 2px;
  margin-left: 4px;
  width: 20px;
  text-align: center;
  padding: 4px 0;
}

.etabs-buttons button:hover {
  color: #eee;
  background-color: #aaa;
}

.etabs-tab-badge {
  position: absolute;
  right: 0;
  top: -7px;
  background: red;
  border-radius: 100%;
  text-align: center;
  font-size: 10px;
  padding: 0 5px;
}

.etabs-tab-badge.hidden {
  display: none;
}

.etabs-tab-icon {
  display: inline-block;
  height: 16px;
}

.etabs-tab-icon img {
  max-width: 16px;
  max-height: 16px;
}

.etabs-tab-title {
  display: inline-block;
  margin-left: 10px;
}

.etabs-tab-buttons {
  display: inline-block;
  margin-left: 10px;
}

.etabs-tab-buttons button {
  display: inline-block;
  color: #333;
  background: none;
  border: none;
  width: 20px;
  text-align: center;
  border-radius: 2px;
}

.etabs-tab-buttons button:hover {
  color: #eee;
  background-color: #aaa;
}

.etabs-views {
  position: relative;
  border-top: 1px solid #aaa;
  height: calc(100vh - 33px);
}

.etab-view {
  position: relative;
}

webview {
  position: absolute;
  visibility: hidden;
  width: 100%;
  height: 100%;
}
webview.visible {
  visibility: visible;
}
`

if (!document) {
  throw Error("electron-tabs module must be called in renderer process");
}

class TabGroup extends HTMLElement {
  constructor () {
    super();

    // Options
    this.options = {
      closeButtonText: this.getAttribute("close-button-text") || "&#215;",
      newTabButtonText: this.getAttribute("new-tab-button-text") || "&#65291;",
      visibilityThreshold: this.getAttribute("visibility-threshold") || 0,
      tabClass: this.getAttribute("tab-class") || "etabs-tab",
      viewClass: this.getAttribute("view-class") || "etabs-view"
      // TODO: replace this callback
      // ready: args.ready
    };

    // Create custom element
    const shadow = this.attachShadow({mode: "open"});

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

    // const style = document.createElement("link");
    // style.setAttribute("rel", "stylesheet");
    // style.setAttribute("href", "style.css");

    const style = document.createElement("style");
    style.textContent = css;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);

    this.tabs = [];
    this.newTabId = 0;
    TabGroupPrivate.initNewTabButton.bind(this)();
    TabGroupPrivate.initVisibility.bind(this)();
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
    let button = this.buttonContainer.appendChild(document.createElement("button"));
    button.classList.add(`${this.options.tabClass}-button-new`);
    button.innerHTML = this.options.newTabButtonText;
    button.addEventListener("click", this.addTab.bind(this, undefined), false);
  },

  initVisibility: function () {
    function toggleTabsVisibility(tab, tabGroup) {
      var visibilityThreshold = this.options.visibilityThreshold;
      var el = tabGroup.tabContainer.parentNode;
      if (this.tabs.length >= visibilityThreshold) {
        el.classList.add("visible");
      } else {
        el.classList.remove("visible");
      }
    }

    this.on("tab-added", toggleTabsVisibility);
    this.on("tab-removed", toggleTabsVisibility);
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

class Tab extends EventTarget {
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
    span.title = title;
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
      activeTab.emit("inactive", activeTab);
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

  hasClass (classname) {
    return this.tab.classList.contains(classname);
  }

  close (force) {
    const abortController = new AbortController();
    const abort = () => abortController.abort();
    this.emit("closing", this, abort);

    const abortSignal = abortController.signal;
    if (this.isClosed || (!this.closable && !force) || abortSignal.aborted) return;

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
    const webview = this.webview = document.createElement("webview");

    const tabWebviewDidFinishLoadHandler = function (e) {
      this.emit("webview-ready", this);
    };

    this.webview.addEventListener("did-finish-load", tabWebviewDidFinishLoadHandler.bind(this), false);

    const tabWebviewDomReadyHandler = function (e) {
      // Remove this once https://github.com/electron/electron/issues/14474 is fixed
      webview.blur();
      webview.focus();
      this.emit("webview-dom-ready", this);
    };

    this.webview.addEventListener("dom-ready", tabWebviewDomReadyHandler.bind(this), false);

    this.webview.classList.add(this.tabGroup.options.viewClass);
    if (this.webviewAttributes) {
      let attrs = this.webviewAttributes;
      for (let key in attrs) {
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
 */
 const eventEmitterMixin = {
  emit (type, ...args) {
    this.dispatchEvent(new CustomEvent(type, { detail: args }));
  },

  on (type, fn) {
    this.addEventListener(type, ({ detail }) => fn.apply(this, detail));
  },

  once (type, fn) {
    this.addEventListener(type, ({ detail }) => fn.apply(this, detail), { once: true });
  }
};

Object.assign(TabGroup.prototype, eventEmitterMixin);
Object.assign(Tab.prototype, eventEmitterMixin);

customElements.define("tab-group", TabGroup);
