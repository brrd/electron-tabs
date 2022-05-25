import Sortable from "sortablejs";
// @ts-ignore
import styles from "bundle-text:./style.css";

if (!document) {
  throw Error("electron-tabs module must be called in renderer process");
}

interface TabGroupOptions {
  closeButtonText: string,
  defaultTab: TabOptions | ((tabGroup: TabGroup) => TabOptions),
  newTabButton: boolean,
  newTabButtonText: string,
  sortable: boolean,
  sortableOptions?: Sortable.Options
  tabClass: string,
  viewClass: string,
  visibilityThreshold: number,
}

interface TabOptions {
  active?: boolean;
  badge?: string;
  closable?: boolean;
  icon?: string;
  iconURL?: string;
  ready?: ((tab: Tab) => void);
  src?: string;
  title?: string;
  visible?: boolean;
  webviewAttributes?: { [key: string]: any };
}

function emit(emitter: TabGroup | Tab, type: string, args: any[]) {
  if (type === "ready") {
    emitter.isReady = true;
  }
  emitter.dispatchEvent(new CustomEvent(type, { detail: args }));
}

function on(emitter: TabGroup | Tab, type: string, fn: (detail: string) => void, options?: { [key: string]: any }) {
  if (type === "ready" && emitter.isReady === true) {
    fn.apply(emitter, [emitter]);
  }
  emitter.addEventListener(type, ((e: CustomEvent) => fn.apply(emitter, e.detail)) as EventListener, options);
}

class TabGroup extends HTMLElement {
  buttonContainer: HTMLDivElement;
  isReady: boolean;
  newTabId: number;
  options: TabGroupOptions;
  shadow: ShadowRoot;
  tabContainer: HTMLDivElement;
  tabs: Array<Tab>;
  viewContainer: HTMLDivElement;

  constructor() {
    super();

    this.isReady = false;

    // Options
    this.options = {
      closeButtonText: this.getAttribute("close-button-text") || "&#215;",
      defaultTab: { title: "New Tab", active: true },
      newTabButton: !!this.getAttribute("new-tab-button") === true || false,
      newTabButtonText: this.getAttribute("new-tab-button-text") || "&#65291;",
      sortable: !!this.getAttribute("sortable") === true || false,
      tabClass: this.getAttribute("tab-class") || "etabs-tab",
      viewClass: this.getAttribute("view-class") || "etabs-view",
      visibilityThreshold: Number(this.getAttribute("visibility-threshold")) || 0
    };

    // Create custom element
    const shadow = this.attachShadow({mode: "open"});
    this.shadow = shadow;

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
    style.textContent = styles;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);

    this.tabs = [];
    this.newTabId = 0;
    this.initNewTabButton();
    this.initVisibility();

    // Init sortable tabs
    if (this.options.sortable) {
      const initSortable = () => {
        const options = Object.assign({
          direction: "horizontal",
          animation: 150,
          swapThreshold: 0.20
        }, this.options.sortableOptions);
        new Sortable(this.tabContainer, options);
      };

      if (Sortable) {
        initSortable();
      } else {
        document.addEventListener("DOMContentLoaded", initSortable);
      }
    }

    this.emit("ready", this);
  }

  emit(type: string, ...args: any[]) {
    return emit(this, type, args);
  }

  on(type: string, fn: (...detail: any[]) => void) {
    return on(this, type, fn);
  }

  once(type: string, fn: (detail: string) => void) {
    return on(this, type, fn, { once: true });
  }

  connectedCallback() {
    const style = this.querySelector("style");
    if (style) {
      const clone = style.cloneNode(true);
      this.shadow.appendChild(clone);
    }
  }

  private initNewTabButton() {
    if (!this.options.newTabButton) return;
    const button = this.buttonContainer.appendChild(document.createElement("button"));
    button.classList.add(`${this.options.tabClass}-button-new`);
    button.innerHTML = this.options.newTabButtonText;
    button.addEventListener("click", this.addTab.bind(this, undefined), false);
  }

  private initVisibility() {
    function toggleTabsVisibility(tab: Tab, tabGroup: TabGroup) {
      const visibilityThreshold = this.options.visibilityThreshold;
      const el = tabGroup.tabContainer.parentElement;
      if (this.tabs.length >= visibilityThreshold) {
        el.classList.add("visible");
      } else {
        el.classList.remove("visible");
      }
    }

    this.on("tab-added", toggleTabsVisibility);
    this.on("tab-removed", toggleTabsVisibility);
  }

  setDefaultTab(tab: TabOptions) {
    this.options.defaultTab = tab;
  }

  addTab(args = this.options.defaultTab) {
    if (typeof args === "function") {
      args = args(this);
    }
    const id = this.newTabId;
    this.newTabId++;
    const tab = new Tab(this, id, args);
    this.tabs.push(tab);
    // Don't call tab.activate() before a tab is referenced in this.tabs
    if (args.active === true) {
      tab.activate();
    }
    this.emit("tab-added", tab, this);
    return tab;
  }

  getTab(id: number) {
    for (let i in this.tabs) {
      if (this.tabs[i].id === id) {
        return this.tabs[i];
      }
    }
    return null;
  }

  getTabByPosition(position: number) {
    const fromRight = position < 0;
    for (let i in this.tabs) {
      if (this.tabs[i].getPosition(fromRight) === position) {
        return this.tabs[i];
      }
    }
    return null;
  }

  getTabByRelPosition(position: number) {
    position = this.getActiveTab().getPosition() + position;
    if (position <= 0) {
      return null;
    }
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

  eachTab(fn: (tab: Tab) => void) {
    this.getTabs().forEach(fn);
  }

  getActiveTab() {
    if (this.tabs.length === 0) return null;
    return this.tabs[0];
  }

  setActiveTab(tab: Tab) {
    this.removeTab(tab);
    this.tabs.unshift(tab);
    this.emit("tab-active", tab, this);
  }

  removeTab(tab: Tab, triggerEvent = false) {
    const id = tab.id;
    const index = this.tabs.findIndex((t: Tab) => t.id === id);
    this.tabs.splice(index, 1);
    if (triggerEvent) {
      this.emit("tab-removed", tab, this);
    }
  }

  activateRecentTab() {
    if (this.tabs.length > 0) {
      this.tabs[0].activate();
    }
  }
}

class Tab extends EventTarget {
  badge: string;
  closable: boolean;
  icon: string;
  iconURL: string;
  id: number;
  isClosed: boolean;
  isReady: boolean;
  tab: HTMLDivElement;
  tabElements: { [key: string]: HTMLSpanElement };
  tabGroup: TabGroup;
  title: string;
  webview: HTMLElement;
  webviewAttributes: { [key: string]: any };

  constructor(tabGroup: TabGroup, id: number, args: TabOptions) {
    super();
    this.badge = args.badge;
    this.closable = args.closable === false ? false : true;
    this.icon = args.icon;
    this.iconURL = args.iconURL;
    this.id = id;
    this.isClosed = false;
    this.isReady = false;
    this.tabElements = {};
    this.tabGroup = tabGroup;
    this.title = args.title;
    this.webviewAttributes = args.webviewAttributes || {};
    this.webviewAttributes.src = args.src;

    this.initTab();
    this.initWebview();

    if (args.visible !== false) {
      this.show();
    }
    if (typeof args.ready === "function") {
      args.ready(this);
    } else {
      this.emit("ready", this);
    }
  }

  emit(type: string, ...args: any[]) {
    return emit(this, type, args);
  }

  on(type: string, fn: (...detail: any[]) => void) {
    return on(this, type, fn);
  }

  once(type: string, fn: (detail: string) => void) {
    return on(this, type, fn, { once: true });
  }

  private initTab() {
    const tabClass = this.tabGroup.options.tabClass;

    // Create tab element
    const tab = this.tab = document.createElement("div");
    tab.classList.add(tabClass);
    for (let el of ["icon", "title", "buttons", "badge"]) {
      const span = tab.appendChild(document.createElement("span"));
      span.classList.add(`${tabClass}-${el}`);
      this.tabElements[el] = span;
    }

    this.setTitle(this.title);
    this.setBadge(this.badge);
    this.setIcon(this.iconURL, this.icon);
    this.initTabButtons();
    this.initTabClickHandler();

    this.tabGroup.tabContainer.appendChild(this.tab);
  }

  private initTabButtons() {
    const container = this.tabElements.buttons;
    const tabClass = this.tabGroup.options.tabClass;
    if (this.closable) {
      const button = container.appendChild(document.createElement("button"));
      button.classList.add(`${tabClass}-button-close`);
      button.innerHTML = this.tabGroup.options.closeButtonText;
      button.addEventListener("click", this.close.bind(this, false), false);
    }
  }

  private initTabClickHandler() {
    // Mouse up
    const tabClickHandler = function(e: KeyboardEvent) {
      if (this.isClosed) return;
      if (e.which === 2) {
        this.close();
      }
    };
    this.tab.addEventListener("mouseup", tabClickHandler.bind(this), false);
    // Mouse down
    const tabMouseDownHandler = function(e: KeyboardEvent) {
      if (this.isClosed) return;
      if (e.which === 1) {
        if ((e.target as HTMLElement).matches("button")) return;
        this.activate();
      }
    };
    this.tab.addEventListener("mousedown", tabMouseDownHandler.bind(this), false);
  }

  initWebview() {
    const webview = this.webview = document.createElement("webview");

    const tabWebviewDidFinishLoadHandler = function(e: Event) {
      this.emit("webview-ready", this);
    };

    this.webview.addEventListener("did-finish-load", tabWebviewDidFinishLoadHandler.bind(this), false);

    const tabWebviewDomReadyHandler = function(e: Event) {
      // Remove this once https://github.com/electron/electron/issues/14474 is fixed
      webview.blur();
      webview.focus();
      this.emit("webview-dom-ready", this);
    };

    this.webview.addEventListener("dom-ready", tabWebviewDomReadyHandler.bind(this), false);

    this.webview.classList.add(this.tabGroup.options.viewClass);
    if (this.webviewAttributes) {
      const attrs = this.webviewAttributes;
      for (let key in attrs) {
        const attr = attrs[key];
        if (attr === false) continue;
        this.webview.setAttribute(key, attr);
      }
    }

    this.tabGroup.viewContainer.appendChild(this.webview);
  }

  setTitle(title: string) {
    if (this.isClosed) return;
    const span = this.tabElements.title;
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

  setBadge(badge: string) {
    if (this.isClosed) return;
    const span = this.tabElements.badge;
    this.badge = badge;

    if (badge) {
      span.innerHTML = badge;
      span.classList.remove("hidden");
    } else {
      span.classList.add("hidden");
    }

    this.emit("badge-changed", badge, this);
  }

  getBadge() {
    if (this.isClosed) return;
    return this.badge;
  }

  setIcon(iconURL: string, icon: string) {
    if (this.isClosed) return;
    this.iconURL = iconURL;
    this.icon = icon;
    const span = this.tabElements.icon;
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

  setPosition(newPosition: number) {
    const tabContainer = this.tabGroup.tabContainer;
    const length = tabContainer.childElementCount;
    const thisPosition = this.getPosition();
    const tabs = Array.from(tabContainer.children)
    tabs.splice(thisPosition, 1);

    if (newPosition < 0) {
      newPosition += length;
      if (newPosition < 0) {
        newPosition = 0;
      }
    }

    if (newPosition < length) {
      tabContainer.insertBefore(this.tab, tabs[newPosition]);
    } else {
      tabContainer.appendChild(this.tab);
    }

    return this;
  }

  getPosition(fromRight = false) {
    let position = 0;
    let tab = this.tab;
    while ((tab = tab.previousSibling as HTMLDivElement) != null) position++;

    if (fromRight === true) {
      position -= this.tabGroup.tabContainer.childElementCount;
    }

    return position;
  }

  activate() {
    if (this.isClosed) return;
    const activeTab = this.tabGroup.getActiveTab();
    if (activeTab) {
      activeTab.tab.classList.remove("active");
      activeTab.webview.classList.remove("visible");
      activeTab.emit("inactive", activeTab);
    }
    this.tabGroup.setActiveTab(this);
    this.tab.classList.add("active");
    this.webview.classList.add("visible");
    this.webview.focus();
    this.emit("active", this);
    return this;
  }

  show(flag = true) {
    if (this.isClosed) return;
    if (flag) {
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

  flash(flag = true) {
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

  hasClass(classname: string) {
    return this.tab.classList.contains(classname);
  }

  close(force: boolean) {
    const abortController = new AbortController();
    const abort = () => abortController.abort();
    this.emit("closing", this, abort);

    const abortSignal = abortController.signal;
    if (this.isClosed || (!this.closable && !force) || abortSignal.aborted) return;

    this.isClosed = true;
    const tabGroup = this.tabGroup;
    tabGroup.tabContainer.removeChild(this.tab);
    tabGroup.viewContainer.removeChild(this.webview);
    const activeTab = this.tabGroup.getActiveTab();
    tabGroup.removeTab(this, true);

    this.emit("close", this);

    if (activeTab.id === this.id) {
      tabGroup.activateRecentTab();
    }
  }
}

customElements.define("tab-group", TabGroup);

export type { TabGroup, Tab };
