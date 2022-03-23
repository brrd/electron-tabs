declare class EventEmitter extends EventTarget {

  emit(event: string, ...args: any[]): boolean;
  emit(event: "tab-added", tab: ElectronTabs.Tab, tabGroup: ElectronTabs): boolean;
  emit(event: "tab-removed", tab: ElectronTabs.Tab, tabGroup: ElectronTabs): boolean;
  emit(event: "tab-active", tab: ElectronTabs.Tab, tabGroup: ElectronTabs): boolean;

  emit(event: "webview-ready", tab: ElectronTabs.Tab): boolean;
  emit(event: "webview-dom-ready", tab: ElectronTabs.Tab): boolean;
  emit(event: "title-changed", title: string, tab: ElectronTabs.Tab): boolean;
  emit(event: "badge-changed", badge: string, tab: ElectronTabs.Tab): boolean;
  emit(event: "icon-changed", icon: string, tab: ElectronTabs.Tab): boolean;
  emit(event: "active", tab: ElectronTabs.Tab): boolean;
  emit(event: "inactive", tab: ElectronTabs.Tab): boolean;
  emit(event: "visible", tab: ElectronTabs.Tab): boolean;
  emit(event: "hidden", tab: ElectronTabs.Tab): boolean;
  emit(event: "flash", tab: ElectronTabs.Tab): boolean;
  emit(event: "unflash", tab: ElectronTabs.Tab): boolean;
  emit(event: "close", tab: ElectronTabs.Tab, abort: () => void): boolean;
  emit(event: "closing", tab: ElectronTabs.Tab, abort: () => void): boolean;

  on(event: string, listener: (...args: any[]) => void): this;
  on(event: "tab-added", listener: (tab: ElectronTabs.Tab, tabGroup: ElectronTabs) => void): this;
  on(event: "tab-removed", listener: (tab: ElectronTabs.Tab, tabGroup: ElectronTabs) => void): this;
  on(event: "tab-active", listener: (tab: ElectronTabs.Tab, tabGroup: ElectronTabs) => void): this;

  on(event: "webview-ready", listener: (tab: ElectronTabs.Tab) => void): this;
  on(event: "webview-dom-ready", listener: (tab: ElectronTabs.Tab) => void): this;
  on(event: "title-changed", listener: (title: string, tab: ElectronTabs.Tab) => void): this;
  on(event: "badge-changed", listener: (badge: string, tab: ElectronTabs.Tab) => void): this;
  on(event: "icon-changed", listener: (icon: string, tab: ElectronTabs.Tab) => void): this;
  on(event: "active", listener: (tab: ElectronTabs.Tab) => void): this;
  on(event: "inactive", listener: (tab: ElectronTabs.Tab) => void): this;
  on(event: "visible", listener: (tab: ElectronTabs.Tab) => void): this;
  on(event: "hidden", listener: (tab: ElectronTabs.Tab) => void): this;
  on(event: "flash", listener: (tab: ElectronTabs.Tab) => void): this;
  on(event: "unflash", listener: (tab: ElectronTabs.Tab) => void): this;
  on(event: "close", listener: (tab: ElectronTabs.Tab, abort: () => void) => void): this;
  on(event: "closing", listener: (tab: ElectronTabs.Tab, abort: () => void) => void): this;

  once(event: "webview-ready", listener: (tab: ElectronTabs.Tab) => void): this;
  once(event: "webview-dom-ready", listener: (tab: ElectronTabs.Tab) => void): this;
  once(event: "title-changed", listener: (title: string, tab: ElectronTabs.Tab) => void): this;
  once(event: "badge-changed", listener: (badge: string, tab: ElectronTabs.Tab) => void): this;
  once(event: "icon-changed", listener: (icon: string, tab: ElectronTabs.Tab) => void): this;
  once(event: "active", listener: (tab: ElectronTabs.Tab) => void): this;
  once(event: "inactive", listener: (tab: ElectronTabs.Tab) => void): this;
  once(event: "visible", listener: (tab: ElectronTabs.Tab) => void): this;
  once(event: "hidden", listener: (tab: ElectronTabs.Tab) => void): this;
  once(event: "flash", listener: (tab: ElectronTabs.Tab) => void): this;
  once(event: "unflash", listener: (tab: ElectronTabs.Tab) => void): this;
  once(event: "close", listener: (tab: ElectronTabs.Tab, abort: () => void) => void): this;
  once(event: "closing", listener: (tab: ElectronTabs.Tab, abort: () => void) => void): this;
}

declare class ElectronTabs extends EventEmitter {
  constructor(options?: ElectronTabs.TabGroupOptions);
  addTab(options?: ElectronTabs.TabOptions): ElectronTabs.Tab;
  getTab(id: number): ElectronTabs.Tab | null;
  getTabByPosition(position: number): ElectronTabs.Tab | null;
  getTabByRelPosition(position: number): ElectronTabs.Tab | null;
  getActiveTab(): ElectronTabs.Tab | null;
  getTabs(): ElectronTabs.Tab[];
  eachTab<T extends object>(
    fn: (this: T, currentTab: ElectronTabs.Tab, index: number, tabs: ElectronTabs.Tab[]) => void,
    thisArg?: T,
  ): void;
  tabContainer: HTMLElement;
}

declare namespace ElectronTabs {
  export interface TabGroupOptions {
    tabContainerSelector?: string;
    buttonsContainerSelector?: string;
    viewContainerSelector?: string;
    tabClass?: string;
    viewClass?: string;
    closeButtonText?: string;
    newTabButtonText?: string;
    newTab?: TabOptions | (() => TabOptions);
    ready?: (tabGroup: ElectronTabs) => void;
  }

  export interface TabOptions {
    title?: string;
    src?: string;
    badge?: string;
    iconURL?: string;
    icon?: string;
    closable?: boolean;
    webviewAttributes?: {[key: string]: any};
    visible?: boolean;
    active?: boolean;
    ready?: (tab: Tab) => void;
  }

  export interface Tab extends EventEmitter {
    id: number;
    setTitle(title: string): void;
    getTitle(): string;
    setBadge(badge: string): void;
    getBadge(): string;
    setIcon(iconURL?: string, icon?: undefined | null): void;
    setIcon(iconURL: undefined | null, icon: string): void;
    getIcon(): string;
    setPosition(position: number): Tab | null;
    getPosition(fromRight?: boolean): number;
    activate(): void;
    show(shown?: boolean): void;
    hide(): void;
    flash(shown?: boolean): void;
    unflash(): void;
    close(force?: boolean): void;
    webview: Electron.WebviewTag;
  }
}

export = ElectronTabs;
