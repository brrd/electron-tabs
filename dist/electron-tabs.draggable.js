// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6X8JM":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2f45e28c8a3d245e";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1qqD7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _dragula = require("dragula");
var _dragulaDefault = parcelHelpers.interopDefault(_dragula);
var _indexJs = require("./index.js");
var _dragulaCss = require("dragula/dist/dragula.css");
var _dragulaCssDefault = parcelHelpers.interopDefault(_dragulaCss);
window.dragula = _dragulaDefault.default;
// Inject styles
(function() {
    let styleTag = document.createElement("style");
    styleTag.innerHTML = _dragulaCssDefault.default;
    document.getElementsByTagName("head")[0].appendChild(styleTag);
})();

},{"dragula":"1Ls2r","./index.js":"8lqZg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","dragula/dist/dragula.css":"giGox"}],"1Ls2r":[function(require,module,exports) {
'use strict';
var global = arguments[3];
var emitter = require('contra/emitter');
var crossvent = require('crossvent');
var classes = require('./classes');
var doc = document;
var documentElement = doc.documentElement;
function dragula(initialContainers, options) {
    var len1 = arguments.length;
    if (len1 === 1 && Array.isArray(initialContainers) === false) {
        options = initialContainers;
        initialContainers = [];
    }
    var _mirror; // mirror image
    var _source; // source container
    var _item; // item being dragged
    var _offsetX; // reference x
    var _offsetY; // reference y
    var _moveX; // reference move x
    var _moveY; // reference move y
    var _initialSibling; // reference sibling when grabbed
    var _currentSibling; // reference sibling now
    var _copy; // item used for copying
    var _renderTimer; // timer for setTimeout renderMirrorImage
    var _lastDropTarget = null; // last container item was over
    var _grabbed; // holds mousedown context until first mousemove
    var o = options || {};
    if (o.moves === void 0) o.moves = always;
    if (o.accepts === void 0) o.accepts = always;
    if (o.invalid === void 0) o.invalid = invalidTarget;
    if (o.containers === void 0) o.containers = initialContainers || [];
    if (o.isContainer === void 0) o.isContainer = never;
    if (o.copy === void 0) o.copy = false;
    if (o.copySortSource === void 0) o.copySortSource = false;
    if (o.revertOnSpill === void 0) o.revertOnSpill = false;
    if (o.removeOnSpill === void 0) o.removeOnSpill = false;
    if (o.direction === void 0) o.direction = 'vertical';
    if (o.ignoreInputTextSelection === void 0) o.ignoreInputTextSelection = true;
    if (o.mirrorContainer === void 0) o.mirrorContainer = doc.body;
    var drake = emitter({
        containers: o.containers,
        start: manualStart,
        end: end,
        cancel: cancel,
        remove: remove1,
        destroy: destroy,
        canMove: canMove,
        dragging: false
    });
    if (o.removeOnSpill === true) drake.on('over', spillOver).on('out', spillOut);
    events();
    return drake;
    function isContainer(el) {
        return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
    }
    function events(remove) {
        var op = remove ? 'remove' : 'add';
        touchy(documentElement, op, 'mousedown', grab);
        touchy(documentElement, op, 'mouseup', release);
    }
    function eventualMovements(remove) {
        var op = remove ? 'remove' : 'add';
        touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
    }
    function movements(remove) {
        var op = remove ? 'remove' : 'add';
        crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
        crossvent[op](documentElement, 'click', preventGrabbed);
    }
    function destroy() {
        events(true);
        release({});
    }
    function preventGrabbed(e) {
        if (_grabbed) {
            e.preventDefault();
        }
    }
    function grab(e) {
        _moveX = e.clientX;
        _moveY = e.clientY;
        var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
        if (ignore) {
            return; // we only care about honest-to-god left clicks and touch events
        }
        var item = e.target;
        var context = canStart(item);
        if (!context) {
            return;
        }
        _grabbed = context;
        eventualMovements();
        if (e.type === 'mousedown') {
            if (isInput(item)) {
                item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
            } else {
                e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
            }
        }
    }
    function startBecauseMouseMoved(e) {
        if (!_grabbed) {
            return;
        }
        if (whichMouseButton(e) === 0) {
            release({});
            return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
        }
        // truthy check fixes #239, equality fixes #207, fixes #501
        if (e.clientX !== void 0 && Math.abs(e.clientX - _moveX) <= (o.slideFactorX || 0) && e.clientY !== void 0 && Math.abs(e.clientY - _moveY) <= (o.slideFactorY || 0)) {
            return;
        }
        if (o.ignoreInputTextSelection) {
            var clientX = getCoord('clientX', e) || 0;
            var clientY = getCoord('clientY', e) || 0;
            var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
            if (isInput(elementBehindCursor)) {
                return;
            }
        }
        var grabbed = _grabbed; // call to end() unsets _grabbed
        eventualMovements(true);
        movements();
        end();
        start(grabbed);
        var offset = getOffset(_item);
        _offsetX = getCoord('pageX', e) - offset.left;
        _offsetY = getCoord('pageY', e) - offset.top;
        classes.add(_copy || _item, 'gu-transit');
        renderMirrorImage();
        drag(e);
    }
    function canStart(item) {
        if (drake.dragging && _mirror) {
            return;
        }
        if (isContainer(item)) {
            return; // don't drag container itself
        }
        var handle = item;
        while(getParent(item) && isContainer(getParent(item)) === false){
            if (o.invalid(item, handle)) {
                return;
            }
            item = getParent(item); // drag target should be a top element
            if (!item) {
                return;
            }
        }
        var source = getParent(item);
        if (!source) {
            return;
        }
        if (o.invalid(item, handle)) {
            return;
        }
        var movable = o.moves(item, source, handle, nextEl(item));
        if (!movable) {
            return;
        }
        return {
            item: item,
            source: source
        };
    }
    function canMove(item) {
        return !!canStart(item);
    }
    function manualStart(item) {
        var context = canStart(item);
        if (context) {
            start(context);
        }
    }
    function start(context) {
        if (isCopy(context.item, context.source)) {
            _copy = context.item.cloneNode(true);
            drake.emit('cloned', _copy, context.item, 'copy');
        }
        _source = context.source;
        _item = context.item;
        _initialSibling = _currentSibling = nextEl(context.item);
        drake.dragging = true;
        drake.emit('drag', _item, _source);
    }
    function invalidTarget() {
        return false;
    }
    function end() {
        if (!drake.dragging) {
            return;
        }
        var item = _copy || _item;
        drop(item, getParent(item));
    }
    function ungrab() {
        _grabbed = false;
        eventualMovements(true);
        movements(true);
    }
    function release(e) {
        ungrab();
        if (!drake.dragging) {
            return;
        }
        var item = _copy || _item;
        var clientX = getCoord('clientX', e) || 0;
        var clientY = getCoord('clientY', e) || 0;
        var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
        var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
        if (dropTarget && (_copy && o.copySortSource || !_copy || dropTarget !== _source)) {
            drop(item, dropTarget);
        } else if (o.removeOnSpill) {
            remove1();
        } else {
            cancel();
        }
    }
    function drop(item, target) {
        var parent = getParent(item);
        if (_copy && o.copySortSource && target === _source) {
            parent.removeChild(_item);
        }
        if (isInitialPlacement(target)) {
            drake.emit('cancel', item, _source, _source);
        } else {
            drake.emit('drop', item, target, _source, _currentSibling);
        }
        cleanup();
    }
    function remove1() {
        if (!drake.dragging) {
            return;
        }
        var item = _copy || _item;
        var parent = getParent(item);
        if (parent) {
            parent.removeChild(item);
        }
        drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
        cleanup();
    }
    function cancel(revert) {
        if (!drake.dragging) {
            return;
        }
        var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
        var item = _copy || _item;
        var parent = getParent(item);
        var initial = isInitialPlacement(parent);
        if (initial === false && reverts) {
            if (_copy) {
                if (parent) {
                    parent.removeChild(_copy);
                }
            } else {
                _source.insertBefore(item, _initialSibling);
            }
        }
        if (initial || reverts) {
            drake.emit('cancel', item, _source, _source);
        } else {
            drake.emit('drop', item, parent, _source, _currentSibling);
        }
        cleanup();
    }
    function cleanup() {
        var item = _copy || _item;
        ungrab();
        removeMirrorImage();
        if (item) {
            classes.rm(item, 'gu-transit');
        }
        if (_renderTimer) {
            clearTimeout(_renderTimer);
        }
        drake.dragging = false;
        if (_lastDropTarget) {
            drake.emit('out', item, _lastDropTarget, _source);
        }
        drake.emit('dragend', item);
        _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
    }
    function isInitialPlacement(target, s) {
        var sibling;
        if (s !== void 0) {
            sibling = s;
        } else if (_mirror) {
            sibling = _currentSibling;
        } else {
            sibling = nextEl(_copy || _item);
        }
        return target === _source && sibling === _initialSibling;
    }
    function findDropTarget(elementBehindCursor, clientX, clientY) {
        var target = elementBehindCursor;
        while(target && !accepted()){
            target = getParent(target);
        }
        return target;
        function accepted() {
            var droppable = isContainer(target);
            if (droppable === false) {
                return false;
            }
            var immediate = getImmediateChild(target, elementBehindCursor);
            var reference = getReference(target, immediate, clientX, clientY);
            var initial = isInitialPlacement(target, reference);
            if (initial) {
                return true; // should always be able to drop it right back where it was
            }
            return o.accepts(_item, target, _source, reference);
        }
    }
    function drag(e) {
        if (!_mirror) {
            return;
        }
        e.preventDefault();
        var clientX = getCoord('clientX', e) || 0;
        var clientY = getCoord('clientY', e) || 0;
        var x = clientX - _offsetX;
        var y = clientY - _offsetY;
        _mirror.style.left = x + 'px';
        _mirror.style.top = y + 'px';
        var item = _copy || _item;
        var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
        var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
        var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
        if (changed || dropTarget === null) {
            out();
            _lastDropTarget = dropTarget;
            over();
        }
        var parent = getParent(item);
        if (dropTarget === _source && _copy && !o.copySortSource) {
            if (parent) {
                parent.removeChild(item);
            }
            return;
        }
        var reference;
        var immediate = getImmediateChild(dropTarget, elementBehindCursor);
        if (immediate !== null) {
            reference = getReference(dropTarget, immediate, clientX, clientY);
        } else if (o.revertOnSpill === true && !_copy) {
            reference = _initialSibling;
            dropTarget = _source;
        } else {
            if (_copy && parent) {
                parent.removeChild(item);
            }
            return;
        }
        if (reference === null && changed || reference !== item && reference !== nextEl(item)) {
            _currentSibling = reference;
            dropTarget.insertBefore(item, reference);
            drake.emit('shadow', item, dropTarget, _source);
        }
        function moved(type) {
            drake.emit(type, item, _lastDropTarget, _source);
        }
        function over() {
            if (changed) {
                moved('over');
            }
        }
        function out() {
            if (_lastDropTarget) {
                moved('out');
            }
        }
    }
    function spillOver(el) {
        classes.rm(el, 'gu-hide');
    }
    function spillOut(el) {
        if (drake.dragging) {
            classes.add(el, 'gu-hide');
        }
    }
    function renderMirrorImage() {
        if (_mirror) {
            return;
        }
        var rect = _item.getBoundingClientRect();
        _mirror = _item.cloneNode(true);
        _mirror.style.width = getRectWidth(rect) + 'px';
        _mirror.style.height = getRectHeight(rect) + 'px';
        classes.rm(_mirror, 'gu-transit');
        classes.add(_mirror, 'gu-mirror');
        o.mirrorContainer.appendChild(_mirror);
        touchy(documentElement, 'add', 'mousemove', drag);
        classes.add(o.mirrorContainer, 'gu-unselectable');
        drake.emit('cloned', _mirror, _item, 'mirror');
    }
    function removeMirrorImage() {
        if (_mirror) {
            classes.rm(o.mirrorContainer, 'gu-unselectable');
            touchy(documentElement, 'remove', 'mousemove', drag);
            getParent(_mirror).removeChild(_mirror);
            _mirror = null;
        }
    }
    function getImmediateChild(dropTarget, target) {
        var immediate = target;
        while(immediate !== dropTarget && getParent(immediate) !== dropTarget){
            immediate = getParent(immediate);
        }
        if (immediate === documentElement) {
            return null;
        }
        return immediate;
    }
    function getReference(dropTarget, target, x, y) {
        var horizontal = o.direction === 'horizontal';
        var reference = target !== dropTarget ? inside() : outside();
        return reference;
        function outside() {
            var len = dropTarget.children.length;
            var i;
            var el;
            var rect;
            for(i = 0; i < len; i++){
                el = dropTarget.children[i];
                rect = el.getBoundingClientRect();
                if (horizontal && rect.left + rect.width / 2 > x) {
                    return el;
                }
                if (!horizontal && rect.top + rect.height / 2 > y) {
                    return el;
                }
            }
            return null;
        }
        function inside() {
            var rect = target.getBoundingClientRect();
            if (horizontal) {
                return resolve(x > rect.left + getRectWidth(rect) / 2);
            }
            return resolve(y > rect.top + getRectHeight(rect) / 2);
        }
        function resolve(after) {
            return after ? nextEl(target) : target;
        }
    }
    function isCopy(item, container) {
        return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
    }
}
function touchy(el, op, type, fn) {
    var touch = {
        mouseup: 'touchend',
        mousedown: 'touchstart',
        mousemove: 'touchmove'
    };
    var pointers = {
        mouseup: 'pointerup',
        mousedown: 'pointerdown',
        mousemove: 'pointermove'
    };
    var microsoft = {
        mouseup: 'MSPointerUp',
        mousedown: 'MSPointerDown',
        mousemove: 'MSPointerMove'
    };
    if (global.navigator.pointerEnabled) crossvent[op](el, pointers[type], fn);
    else if (global.navigator.msPointerEnabled) crossvent[op](el, microsoft[type], fn);
    else {
        crossvent[op](el, touch[type], fn);
        crossvent[op](el, type, fn);
    }
}
function whichMouseButton(e) {
    if (e.touches !== void 0) return e.touches.length;
    if (e.which !== void 0 && e.which !== 0) return e.which;
     // see https://github.com/bevacqua/dragula/issues/261
    if (e.buttons !== void 0) return e.buttons;
    var button = e.button;
    if (button !== void 0) return button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
}
function getOffset(el) {
    var rect = el.getBoundingClientRect();
    return {
        left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
        top: rect.top + getScroll('scrollTop', 'pageYOffset')
    };
}
function getScroll(scrollProp, offsetProp) {
    if (typeof global[offsetProp] !== 'undefined') return global[offsetProp];
    if (documentElement.clientHeight) return documentElement[scrollProp];
    return doc.body[scrollProp];
}
function getElementBehindPoint(point, x, y) {
    point = point || {};
    var state = point.className || '';
    var el;
    point.className += ' gu-hide';
    el = doc.elementFromPoint(x, y);
    point.className = state;
    return el;
}
function never() {
    return false;
}
function always() {
    return true;
}
function getRectWidth(rect) {
    return rect.width || rect.right - rect.left;
}
function getRectHeight(rect) {
    return rect.height || rect.bottom - rect.top;
}
function getParent(el) {
    return el.parentNode === doc ? null : el.parentNode;
}
function isInput(el) {
    return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el);
}
function isEditable(el) {
    if (!el) return false;
     // no parents were editable
    if (el.contentEditable === 'false') return false;
     // stop the lookup
    if (el.contentEditable === 'true') return true;
     // found a contentEditable element in the chain
    return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}
function nextEl(el) {
    return el.nextElementSibling || manually();
    function manually() {
        var sibling = el;
        do {
            sibling = sibling.nextSibling;
        }while (sibling && sibling.nodeType !== 1)
        return sibling;
    }
}
function getEventHost(e) {
    // on touchend event, we have to use `e.changedTouches`
    // see http://stackoverflow.com/questions/7192563/touchend-event-properties
    // see https://github.com/bevacqua/dragula/issues/34
    if (e.targetTouches && e.targetTouches.length) return e.targetTouches[0];
    if (e.changedTouches && e.changedTouches.length) return e.changedTouches[0];
    return e;
}
function getCoord(coord, e) {
    var host = getEventHost(e);
    var missMap = {
        pageX: 'clientX',
        pageY: 'clientY' // IE8
    };
    if (coord in missMap && !(coord in host) && missMap[coord] in host) coord = missMap[coord];
    return host[coord];
}
module.exports = dragula;

},{"contra/emitter":"5LDWz","crossvent":"lbeRj","./classes":"ii4qi"}],"5LDWz":[function(require,module,exports) {
'use strict';
var atoa = require('atoa');
var debounce = require('./debounce');
module.exports = function emitter(thing, options) {
    var opts = options || {};
    var evt = {};
    if (thing === undefined) thing = {};
    thing.on = function(type, fn) {
        if (!evt[type]) evt[type] = [
            fn
        ];
        else evt[type].push(fn);
        return thing;
    };
    thing.once = function(type, fn) {
        fn._once = true; // thing.off(fn) still works!
        thing.on(type, fn);
        return thing;
    };
    thing.off = function(type, fn) {
        var c = arguments.length;
        if (c === 1) delete evt[type];
        else if (c === 0) evt = {};
        else {
            var et = evt[type];
            if (!et) return thing;
            et.splice(et.indexOf(fn), 1);
        }
        return thing;
    };
    thing.emit = function() {
        var args = atoa(arguments);
        return thing.emitterSnapshot(args.shift()).apply(this, args);
    };
    thing.emitterSnapshot = function(type) {
        var et = (evt[type] || []).slice(0);
        return function() {
            var args = atoa(arguments);
            var ctx = this || thing;
            if (type === 'error' && opts.throws !== false && !et.length) throw args.length === 1 ? args[0] : args;
            et.forEach(function emitter(listen) {
                if (opts.async) debounce(listen, args, ctx);
                else listen.apply(ctx, args);
                if (listen._once) thing.off(type, listen);
            });
            return thing;
        };
    };
    return thing;
};

},{"atoa":"66ZjW","./debounce":"A9uP7"}],"66ZjW":[function(require,module,exports) {
module.exports = function atoa(a, n) {
    return Array.prototype.slice.call(a, n);
};

},{}],"A9uP7":[function(require,module,exports) {
'use strict';
var ticky = require('ticky');
module.exports = function debounce(fn, args, ctx) {
    if (!fn) return;
    ticky(function run() {
        fn.apply(ctx || null, args || []);
    });
};

},{"ticky":"faOTF"}],"faOTF":[function(require,module,exports) {
var si = typeof setImmediate === 'function', tick;
if (si) tick = function(fn) {
    setImmediate(fn);
};
else tick = function(fn) {
    setTimeout(fn, 0);
};
module.exports = tick;

},{}],"lbeRj":[function(require,module,exports) {
'use strict';
var global = arguments[3];
var customEvent = require('custom-event');
var eventmap = require('./eventmap');
var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];
if (!global.addEventListener) {
    addEvent = addEventHard;
    removeEvent = removeEventHard;
}
module.exports = {
    add: addEvent,
    remove: removeEvent,
    fabricate: fabricateEvent
};
function addEventEasy(el, type, fn, capturing) {
    return el.addEventListener(type, fn, capturing);
}
function addEventHard(el, type, fn) {
    return el.attachEvent('on' + type, wrap(el, type, fn));
}
function removeEventEasy(el, type, fn, capturing) {
    return el.removeEventListener(type, fn, capturing);
}
function removeEventHard(el, type, fn) {
    var listener = unwrap(el, type, fn);
    if (listener) return el.detachEvent('on' + type, listener);
}
function fabricateEvent(el, type, model) {
    var e1 = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
    if (el.dispatchEvent) el.dispatchEvent(e1);
    else el.fireEvent('on' + type, e1);
    function makeClassicEvent() {
        var e;
        if (doc.createEvent) {
            e = doc.createEvent('Event');
            e.initEvent(type, true, true);
        } else if (doc.createEventObject) e = doc.createEventObject();
        return e;
    }
    function makeCustomEvent() {
        return new customEvent(type, {
            detail: model
        });
    }
}
function wrapperFactory(el, type, fn) {
    return function wrapper(originalEvent) {
        var e = originalEvent || global.event;
        e.target = e.target || e.srcElement;
        e.preventDefault = e.preventDefault || function preventDefault() {
            e.returnValue = false;
        };
        e.stopPropagation = e.stopPropagation || function stopPropagation() {
            e.cancelBubble = true;
        };
        e.which = e.which || e.keyCode;
        fn.call(el, e);
    };
}
function wrap(el, type, fn) {
    var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
    hardCache.push({
        wrapper: wrapper,
        element: el,
        type: type,
        fn: fn
    });
    return wrapper;
}
function unwrap(el, type, fn) {
    var i = find(el, type, fn);
    if (i) {
        var wrapper = hardCache[i].wrapper;
        hardCache.splice(i, 1); // free up a tad of memory
        return wrapper;
    }
}
function find(el, type, fn) {
    var i, item;
    for(i = 0; i < hardCache.length; i++){
        item = hardCache[i];
        if (item.element === el && item.type === type && item.fn === fn) return i;
    }
}

},{"custom-event":"36pCm","./eventmap":"80VLb"}],"36pCm":[function(require,module,exports) {
var global = arguments[3];
var NativeCustomEvent = global.CustomEvent;
function useNative() {
    try {
        var p = new NativeCustomEvent('cat', {
            detail: {
                foo: 'bar'
            }
        });
        return 'cat' === p.type && 'bar' === p.detail.foo;
    } catch (e) {}
    return false;
}
/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */ module.exports = useNative() ? NativeCustomEvent : // IE >= 9
'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent(type, params) {
    var e = document.createEvent('CustomEvent');
    if (params) e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
    else e.initCustomEvent(type, false, false, void 0);
    return e;
} : // IE <= 8
function CustomEvent(type, params) {
    var e = document.createEventObject();
    e.type = type;
    if (params) {
        e.bubbles = Boolean(params.bubbles);
        e.cancelable = Boolean(params.cancelable);
        e.detail = params.detail;
    } else {
        e.bubbles = false;
        e.cancelable = false;
        e.detail = void 0;
    }
    return e;
};

},{}],"80VLb":[function(require,module,exports) {
'use strict';
var global = arguments[3];
var eventmap = [];
var eventname = '';
var ron = /^on/;
for(eventname in global)if (ron.test(eventname)) eventmap.push(eventname.slice(2));
module.exports = eventmap;

},{}],"ii4qi":[function(require,module,exports) {
'use strict';
var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';
function lookupClass(className) {
    var cached = cache[className];
    if (cached) cached.lastIndex = 0;
    else cache[className] = cached = new RegExp(start + className + end, 'g');
    return cached;
}
function addClass(el, className) {
    var current = el.className;
    if (!current.length) el.className = className;
    else if (!lookupClass(className).test(current)) el.className += ' ' + className;
}
function rmClass(el, className) {
    el.className = el.className.replace(lookupClass(className), ' ').trim();
}
module.exports = {
    add: addClass,
    rm: rmClass
};

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _styleCss = require("./style.css");
var _styleCssDefault = parcelHelpers.interopDefault(_styleCss);
if (!document) throw Error("electron-tabs module must be called in renderer process");
class TabGroup extends HTMLElement {
    constructor(){
        super();
        // Options
        this.options = {
            closeButtonText: this.getAttribute("close-button-text") || "&#215;",
            newTabButtonText: this.getAttribute("new-tab-button-text") || "&#65291;",
            visibilityThreshold: this.getAttribute("visibility-threshold") || 0,
            tabClass: this.getAttribute("tab-class") || "etabs-tab",
            viewClass: this.getAttribute("view-class") || "etabs-view",
            newTabButton: this.getAttribute("new-tab-button") || false,
            defaultTab: {
                title: "New Tab",
                active: true
            },
            draggable: this.getAttribute("draggable") || false
        };
        // Create custom element
        const shadow = this.attachShadow({
            mode: "open"
        });
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
        style.textContent = _styleCssDefault.default;
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        this.tabs = [];
        this.newTabId = 0;
        TabGroupPrivate.initNewTabButton.bind(this)();
        TabGroupPrivate.initVisibility.bind(this)();
        // Init draggable tabs
        if (this.options.draggable) {
            const initDragula = ()=>{
                // FIXME: dragula doesnt support shadow dom :-(
                console.log(this.tabContainer);
                const d = window.dragula([
                    this.tabContainer
                ], {
                    direction: "horizontal"
                });
                console.log(d);
            };
            if (window.dragula) initDragula();
            else document.addEventListener("DOMContentLoaded", initDragula);
        }
    }
    setDefaultTab(tab) {
        this.options.defaultTab = tab;
    }
    addTab(args = this.options.defaultTab) {
        if (typeof args === "function") args = args(this);
        let id = this.newTabId;
        this.newTabId++;
        let tab = new Tab(this, id, args);
        this.tabs.push(tab);
        // Don't call tab.activate() before a tab is referenced in this.tabs
        if (args.active === true) tab.activate();
        this.emit("tab-added", tab, this);
        return tab;
    }
    getTab(id) {
        for(let i in this.tabs){
            if (this.tabs[i].id === id) return this.tabs[i];
        }
        return null;
    }
    getTabByPosition(position) {
        let fromRight = position < 0;
        for(let i in this.tabs){
            if (this.tabs[i].getPosition(fromRight) === position) return this.tabs[i];
        }
        return null;
    }
    getTabByRelPosition(position) {
        position = this.getActiveTab().getPosition() + position;
        if (position <= 0) return null;
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
    eachTab(fn) {
        this.getTabs().forEach(fn);
        return this;
    }
    getActiveTab() {
        if (this.tabs.length === 0) return null;
        return this.tabs[0];
    }
}
const TabGroupPrivate = {
    initNewTabButton: function() {
        if (!this.options.newTabButton) return;
        let button = this.buttonContainer.appendChild(document.createElement("button"));
        button.classList.add(`${this.options.tabClass}-button-new`);
        button.innerHTML = this.options.newTabButtonText;
        button.addEventListener("click", this.addTab.bind(this, undefined), false);
    },
    initVisibility: function() {
        function toggleTabsVisibility(tab, tabGroup) {
            var visibilityThreshold = this.options.visibilityThreshold;
            var el = tabGroup.tabContainer.parentNode;
            if (this.tabs.length >= visibilityThreshold) el.classList.add("visible");
            else el.classList.remove("visible");
        }
        this.on("tab-added", toggleTabsVisibility);
        this.on("tab-removed", toggleTabsVisibility);
    },
    removeTab: function(tab, triggerEvent) {
        let id = tab.id;
        for(let i in this.tabs)if (this.tabs[i].id === id) {
            this.tabs.splice(i, 1);
            break;
        }
        if (triggerEvent) this.emit("tab-removed", tab, this);
        return this;
    },
    setActiveTab: function(tab) {
        TabGroupPrivate.removeTab.bind(this)(tab);
        this.tabs.unshift(tab);
        this.emit("tab-active", tab, this);
        return this;
    },
    activateRecentTab: function(tab) {
        if (this.tabs.length > 0) this.tabs[0].activate();
        return this;
    }
};
class Tab extends EventTarget {
    constructor(tabGroup, id, args){
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
        if (args.visible !== false) this.show();
        if (typeof args.ready === "function") args.ready(this);
    }
    setTitle(title) {
        if (this.isClosed) return;
        let span = this.tabElements.title;
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
    setBadge(badge) {
        if (this.isClosed) return;
        let span = this.tabElements.badge;
        this.badge = badge;
        if (badge) {
            span.innerHTML = badge;
            span.classList.remove("hidden");
        } else span.classList.add("hidden");
        this.emit("badge-changed", badge, this);
    }
    getBadge() {
        if (this.isClosed) return;
        return this.badge;
    }
    setIcon(iconURL, icon) {
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
    getIcon() {
        if (this.isClosed) return;
        if (this.iconURL) return this.iconURL;
        return this.icon;
    }
    setPosition(newPosition) {
        let tabContainer = this.tabGroup.tabContainer;
        let tabs = tabContainer.children;
        let oldPosition = this.getPosition() - 1;
        if (newPosition < 0) {
            newPosition += tabContainer.childElementCount;
            if (newPosition < 0) newPosition = 0;
        } else {
            if (newPosition > tabContainer.childElementCount) newPosition = tabContainer.childElementCount;
            // Make 1 be leftmost position
            newPosition--;
        }
        if (newPosition > oldPosition) newPosition++;
        tabContainer.insertBefore(tabs[oldPosition], tabs[newPosition]);
        return this;
    }
    getPosition(fromRight) {
        let position = 0;
        let tab = this.tab;
        while((tab = tab.previousSibling) != null)position++;
        if (fromRight === true) position -= this.tabGroup.tabContainer.childElementCount;
        if (position >= 0) position++;
        return position;
    }
    activate() {
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
    show(flag) {
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
    hide() {
        return this.show(false);
    }
    flash(flag) {
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
    hasClass(classname) {
        return this.tab.classList.contains(classname);
    }
    close(force) {
        const abortController = new AbortController();
        const abort = ()=>abortController.abort()
        ;
        this.emit("closing", this, abort);
        const abortSignal = abortController.signal;
        if (this.isClosed || !this.closable && !force || abortSignal.aborted) return;
        this.isClosed = true;
        let tabGroup = this.tabGroup;
        tabGroup.tabContainer.removeChild(this.tab);
        tabGroup.viewContainer.removeChild(this.webview);
        let activeTab = this.tabGroup.getActiveTab();
        TabGroupPrivate.removeTab.bind(tabGroup)(this, true);
        this.emit("close", this);
        if (activeTab.id === this.id) TabGroupPrivate.activateRecentTab.bind(tabGroup)();
    }
}
const TabPrivate = {
    initTab: function() {
        let tabClass = this.tabGroup.options.tabClass;
        // Create tab element
        let tab = this.tab = document.createElement("div");
        tab.classList.add(tabClass);
        for (let el of [
            "icon",
            "title",
            "buttons",
            "badge"
        ]){
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
    initTabButtons: function() {
        let container = this.tabElements.buttons;
        let tabClass = this.tabGroup.options.tabClass;
        if (this.closable) {
            let button = container.appendChild(document.createElement("button"));
            button.classList.add(`${tabClass}-button-close`);
            button.innerHTML = this.tabGroup.options.closeButtonText;
            button.addEventListener("click", this.close.bind(this, false), false);
        }
    },
    initTabClickHandler: function() {
        // Mouse up
        const tabClickHandler = function(e) {
            if (this.isClosed) return;
            if (e.which === 2) this.close();
        };
        this.tab.addEventListener("mouseup", tabClickHandler.bind(this), false);
        // Mouse down
        const tabMouseDownHandler = function(e) {
            if (this.isClosed) return;
            if (e.which === 1) {
                if (e.target.matches("button")) return;
                this.activate();
            }
        };
        this.tab.addEventListener("mousedown", tabMouseDownHandler.bind(this), false);
    },
    initWebview: function() {
        const webview = this.webview = document.createElement("webview");
        const tabWebviewDidFinishLoadHandler = function(e) {
            this.emit("webview-ready", this);
        };
        this.webview.addEventListener("did-finish-load", tabWebviewDidFinishLoadHandler.bind(this), false);
        const tabWebviewDomReadyHandler = function(e) {
            // Remove this once https://github.com/electron/electron/issues/14474 is fixed
            webview.blur();
            webview.focus();
            this.emit("webview-dom-ready", this);
        };
        this.webview.addEventListener("dom-ready", tabWebviewDomReadyHandler.bind(this), false);
        this.webview.classList.add(this.tabGroup.options.viewClass);
        if (this.webviewAttributes) {
            let attrs = this.webviewAttributes;
            for(let key in attrs){
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
 */ const eventEmitterMixin = {
    emit (type, ...args) {
        this.dispatchEvent(new CustomEvent(type, {
            detail: args
        }));
    },
    on (type, fn) {
        this.addEventListener(type, ({ detail  })=>fn.apply(this, detail)
        );
    },
    once (type, fn) {
        this.addEventListener(type, ({ detail  })=>fn.apply(this, detail)
        , {
            once: true
        });
    }
};
Object.assign(TabGroup.prototype, eventEmitterMixin);
Object.assign(Tab.prototype, eventEmitterMixin);
customElements.define("tab-group", TabGroup);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./style.css":"e9qgF"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"e9qgF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = "/* TODO: use custom properties */\n\nwebview {\n  position: absolute;\n  visibility: hidden;\n  width: 100%;\n  height: 100%;\n}\n\nwebview.visible {\n  visibility: visible;\n}\n\n.etabs {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  text-rendering: optimizeLegibility;\n  font-feature-settings: 'liga', 'clig', 'kern';\n}\n\n.etabs-tabgroup {\n  width: 100%;\n  height: 32px;\n  cursor: default;\n  font: caption;\n  font-size: 14px;\n  -webkit-user-select: none;\n  user-select: none;\n  display: none;\n  background: #E7EAED;\n  box-shadow: inset 0 -1px #DADCE0;\n  border-top: 1px solid #DADCE0;\n}\n\n.etabs-tabgroup.visible {\n  display: flex;\n}\n\n.etabs-tabs {\n  height: 100%;\n}\n\n.etabs-tab {\n  display: none;\n  position: relative;\n  height: 100%;\n  background: #E7EAED;\n  color: #696A6C;\n  padding: 5px 9px;\n  transition: background-color 150ms ease-out;\n  box-shadow: inset 0 -1px #DADCE0;\n  font: caption;\n  font-size: 13px;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n\n/* Dragula */\n.etabs-tab.gu-mirror {\n  padding-bottom: 0;\n  cursor: grab;\n\tborder: none;\n}\n\n.etabs-tab:first-child {\n  border-left: none;\n}\n\n.etabs-tab.visible {\n  display: inline-block;\n}\n\n.etabs-tab.active {\n  background: #fff;\n  box-shadow: none;\n\tborder-left: 1px solid #DADCE0;\n\tborder-right: 1px solid #DADCE0;\n\tpadding-left: 8px;\n\tpadding-right: 8px;\n}\n\n.etabs-tab.flash {\n  background: linear-gradient(to bottom, rgba(255,243,170,1) 0%,rgba(255,227,37,1) 100%);\n}\n\n.etabs-tab.visible:not(.active)+.etabs-tab.visible:not(.active) {\n\tborder-left: 1px solid #B4B6B8;\n\tpadding-left: 8px;\n}\n\n.etabs-tab:not(.active):hover {\n\tbackground: #F1F3F4;\n}\n\n.etabs-buttons {\n  border-left: 1px solid #B4B6B8;\n}\n\n.etabs-buttons button {\n  display: block;\n  color: #777;\n  background: none;\n  border: none;\n  font-size: 16px;\n  font-family: inherit;\n  margin-top: 5px;\n  border-radius: 50%;\n  margin-left: 4px;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  line-height: 14px;\n  padding: 1px 0 0 0;\n\tcursor: pointer;\n}\n\n.etabs-buttons button:hover {\n  color: #333;\n  background-color: #bbb;\n}\n\n.etabs-tab-badge {\n  position: absolute;\n  right: 0;\n  top: -7px;\n  background: red;\n  border-radius: 100%;\n  text-align: center;\n  font-size: 10px;\n  padding: 0 5px;\n}\n\n.etabs-tab-badge.hidden {\n  display: none;\n}\n\n.etabs-tab-icon {\n  display: inline-block;\n  height: 16px;\n}\n\n.etabs-tab-icon img {\n  max-width: 16px;\n  max-height: 16px;\n}\n\n.etabs-tab-title {\n  display: inline-block;\n  margin-left: 10px;\n}\n\n.etabs-tab-buttons {\n  display: inline-block;\n  margin-left: 10px;\n}\n\n.etabs-tab-buttons button {\n  display: inline-block;\n  color: #777;\n  background: none;\n  border: none;\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  border-radius: 50%;\n  cursor: pointer;\n  padding: 1px 0 0 0;\n  font-size: 16px;\n}\n\n.etabs-tab-buttons button:hover {\n  color: #333;\n  background-color: #bbb;\n}\n\n.etabs-views {\n  position: relative;\n  height: calc(100vh - 33px);\n}\n\n.etab-view {\n  position: relative;\n}\n";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"giGox":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = ".gu-mirror {\n  position: fixed !important;\n  margin: 0 !important;\n  z-index: 9999 !important;\n  opacity: 0.8;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)\";\n  filter: alpha(opacity=80);\n}\n.gu-hide {\n  display: none !important;\n}\n.gu-unselectable {\n  -webkit-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n}\n.gu-transit {\n  opacity: 0.2;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=20)\";\n  filter: alpha(opacity=20);\n}\n";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6X8JM","1qqD7"], "1qqD7", "parcelRequire22a0")

//# sourceMappingURL=electron-tabs.draggable.js.map
