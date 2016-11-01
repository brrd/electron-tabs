# electron-tabs

> Simple tabs for Electron applications

**WARNING: this module is in development and is not stable yet. Don't use it in your app.**

## Installation

```
$ npm install --save electron-tabs
```

## Usage

Add the following elements in the page HTML:

```html
<div class="tabs-tabcontainer"></div>
<div class="tabs-buttonscontainer"></div>
<div class="tabs-viewcontainer"></div>
```

And call the module in the renderer process:

```javascript
const TabGroup = require("electron-tabs");
```

Then you can initialize a tab group and add tabs to it:

```javascript
let tabGroup = new TabGroup();
let tab = tabGroup.addTab({
    title: "Electron",
    src: "http://electron.atom.io",
    visible: true
});
```

## API

### Tab Group

Represents the main tab container.

#### `new TabGroup(options)`

`options` must be an object. The following options are available:

* `tabContainerSelector` (default: `".tabs-tabcontainer"`): CSS selector to target the element where tabs are inserted.
* `buttonsContainerSelector` (default: `".tabs-buttonscontainer"`): CSS selector to target the element where the "New Tab" button are inserted.
* `viewContainerSelector` (default: `".tabs-viewcontainer"`): CSS selector to target the element where the view are inserted.
* `tabClass` (default: `"tabs-tab"`): class to add to tab elements.
* `viewClass` (default: `"tabs-view"`): class to add to webview elements.
* `closeButtonText` (default: `"&#x274c;"`): "close tab" button text.
* `newTabButtonText` (default: `"+"`): "New Tab" button text.
* `newTab` (default: `undefined`): arguments to use when `.addTab()` is called without parameters. It can be an object or a function which returns an object. It determines the options to use when the "New Tab" button is triggered. If you leave it undefined then the "New Tab" button won't be displayed.
* `ready` (default: `undefined`): a callback function to call once the tab group is ready. The `TabGroup` instance is passed as the only parameter.

#### `tabGroup.addTab(options)`

Add a new tab to the tab group and returns a `Tab` instance.

* `title`: tab title.
* `src`: URL to the page which will be loaded into the view. This is actually the same than `options.webview.src`.
* `iconURL`: optional URL to the tab icon.
* `closable` (default: `true`): if set to `true` the close button won't be displayed and the user won't be able to close the tab. See also `tab.close()`.
* `webviewAttributes`: attributes to add to the webview tag. See [webview documentation](http://electron.atom.io/docs/api/web-view-tag/#tag-attributes).
* `visible` (default: `false`): set this to `true` if you want to display the tab once it is loaded. Otherwise you will need to call `tab.show()`.
* `ready`: a callback function to call once the tab is ready. The `Tab` instance is passed as the only parameter.

#### `tabGroup.getTab(id)`

Retrieve an instance of `Tab` from its `id` (return `null` if not found).

#### `tabGroup.getActiveTab()`

Return the currently active tab (otherwise return `null`).

### Tab

Instances of `Tab` are returned by the `tabGroup.addTab()` method.

#### `tab.setTitle(title)`

Set tab title.

#### `tab.getTitle()`

Get current tab title.

#### `tab.setIcon(iconURL)`

Set tab icon (an URL must be given).

#### `tab.getIcon()`

Get current tab icon URL.

#### `tab.activate()`

Activate this tab. The class "active" is added to the active tab.

#### `tab.show(flag)`

Toggle the "visible" class on the tab. `tab.hide()` is an alias to `tab.show(false)`.

#### `tab.flash(flag)`

Toggle the "flash" class on the tab. `tab.unflash()` is an alias to `tab.flash(false)`.

#### `tab.close(force)`

Close the tab (and activate another tab if relevant). When `force` is set to `true` the tab will be closed even if it is not `closable`.

### Access webview element

You can access the webview element and use its methods with through the `Tab.webview` attribute. See [webview documentation](http://electron.atom.io/docs/api/web-view-tag/#methods).

```javascript
let webview = tab.webview;
webview.loadURL("file://path/to/new/page.html");
```

### Events

The following events are available:

* `tabGroup.on("tab-added", (tab, tabGroup) => { ... });`
* `tabGroup.on("tab-removed", (tab, tabGroup) => { ... });`
* `tabGroup.on("tab-active", (tab, tabGroup) => { ... });`
* `tab.on("title-changed", (title, tab) => { ... });`
* `tab.on("icon-changed", (iconURL, tab) => { ... });`
* `tab.on("active", (tab) => { ... });`
* `tab.on("visible", (tab) => { ... });`
* `tab.on("hidden", (tab) => { ... });`
* `tab.on("flash", (tab) => { ... });`
* `tab.on("unflash", (tab) => { ... });`
* `tab.on("close", (tab) => { ... });`


## License

The MIT License (MIT) - Copyright (c) 2016 Thomas Brouard