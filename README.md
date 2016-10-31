# electron-tabs

> Simple tabs for Electron applications

**WARNING: this module is in development and is not stable yet. Don't use it in your app.**

## Exemple

HTML:

```html
<section class="main">
	<div class="tabs"></div>
	<div class="views"></div>
</section>
```

Javascript:

```javascript
const TabGroup = require("electron-tabs");

let tabGroup = new TabGroup({
    tabContainerSelector: ".tabs",
    viewContainerSelector: ".views"
});

let tab = tabGroup.addTab({
    title: "Electron",
    src: "http://electron.atom.io"
});
```

## License

The MIT License (MIT) - Copyright (c) 2016 Thomas Brouard