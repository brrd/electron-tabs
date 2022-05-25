import Sortable from "sortablejs";
interface TabGroupOptions {
    closeButtonText: string;
    defaultTab: TabOptions | ((tabGroup: TabGroup) => TabOptions);
    newTabButton: boolean;
    newTabButtonText: string;
    sortable: boolean;
    sortableOptions?: Sortable.Options;
    visibilityThreshold: number;
}
interface TabOptions {
    active?: boolean;
    badge?: Badge;
    closable?: boolean;
    icon?: string;
    iconURL?: string;
    ready?: ((tab: Tab) => void);
    src?: string;
    title?: string;
    visible?: boolean;
    webviewAttributes?: {
        [key: string]: any;
    };
}
interface Badge {
    text: string;
    classname: string;
}
export class TabGroup extends HTMLElement {
    buttonContainer: HTMLDivElement;
    isReady: boolean;
    newTabId: number;
    options: TabGroupOptions;
    shadow: ShadowRoot;
    tabContainer: HTMLDivElement;
    tabs: Array<Tab>;
    viewContainer: HTMLDivElement;
    constructor();
    emit(type: string, ...args: any[]): void;
    on(type: string, fn: (...detail: any[]) => void): void;
    once(type: string, fn: (detail: string) => void): void;
    connectedCallback(): void;
    initSortable(): void;
    setDefaultTab(tab: TabOptions): void;
    addTab(args?: TabOptions | ((tabGroup: TabGroup) => TabOptions)): Tab;
    getTab(id: number): Tab;
    getTabByPosition(position: number): Tab;
    getTabByRelPosition(position: number): Tab;
    getNextTab(): Tab;
    getPreviousTab(): Tab;
    getTabs(): Tab[];
    eachTab(fn: (tab: Tab) => void): void;
    getActiveTab(): Tab;
    setActiveTab(tab: Tab): void;
    removeTab(tab: Tab, triggerEvent?: boolean): void;
    activateRecentTab(): void;
}
export class Tab extends EventTarget {
    badge: Badge;
    closable: boolean;
    element: HTMLDivElement;
    icon: string;
    iconURL: string;
    id: number;
    isClosed: boolean;
    isReady: boolean;
    spans: {
        [key: string]: HTMLSpanElement;
    };
    tabGroup: TabGroup;
    title: string;
    webview: HTMLElement;
    webviewAttributes: {
        [key: string]: any;
    };
    constructor(tabGroup: TabGroup, id: number, args: TabOptions);
    emit(type: string, ...args: any[]): void;
    on(type: string, fn: (...detail: any[]) => void): void;
    once(type: string, fn: (detail: string) => void): void;
    initWebview(): void;
    setTitle(title: string): this;
    getTitle(): string;
    setBadge(badge?: Badge): void;
    getBadge(): Badge;
    setIcon(iconURL: string, icon: string): this;
    getIcon(): string;
    setPosition(newPosition: number): this;
    getPosition(fromRight?: boolean): number;
    activate(): this;
    show(flag?: boolean): this;
    hide(): this;
    hasClass(classname: string): boolean;
    close(force: boolean): void;
}

//# sourceMappingURL=electron-tabs.d.ts.map
