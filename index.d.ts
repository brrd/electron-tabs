import {EventEmitter} from 'events';
import {WebviewTag} from 'electron';

class ElectronTabs extends EventEmitter {
  constructor(options?: ElectronTabs.TabGroupOptions);
  addTab(options?: ElectronTabs.TabOptions): ElectronTabs.Tab;
  getTab(id: string): ElectronTabs.Tab | null;
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

namespace ElectronTabs {
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
    webview: WebviewTag;
  }
}

export = ElectronTabs;
