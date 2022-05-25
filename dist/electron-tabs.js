function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */ function $64afbd09cd65a300$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function $64afbd09cd65a300$var$_objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) $64afbd09cd65a300$var$ownKeys(Object(source), true).forEach(function(key) {
            $64afbd09cd65a300$var$_defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else $64afbd09cd65a300$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $64afbd09cd65a300$var$_typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") $64afbd09cd65a300$var$_typeof = function(obj) {
        return typeof obj;
    };
    else $64afbd09cd65a300$var$_typeof = function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return $64afbd09cd65a300$var$_typeof(obj1);
}
function $64afbd09cd65a300$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $64afbd09cd65a300$var$_extends() {
    $64afbd09cd65a300$var$_extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return $64afbd09cd65a300$var$_extends.apply(this, arguments);
}
function $64afbd09cd65a300$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function $64afbd09cd65a300$var$_objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = $64afbd09cd65a300$var$_objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function $64afbd09cd65a300$var$_toConsumableArray(arr) {
    return $64afbd09cd65a300$var$_arrayWithoutHoles(arr) || $64afbd09cd65a300$var$_iterableToArray(arr) || $64afbd09cd65a300$var$_unsupportedIterableToArray(arr) || $64afbd09cd65a300$var$_nonIterableSpread();
}
function $64afbd09cd65a300$var$_arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return $64afbd09cd65a300$var$_arrayLikeToArray(arr);
}
function $64afbd09cd65a300$var$_iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function $64afbd09cd65a300$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $64afbd09cd65a300$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $64afbd09cd65a300$var$_arrayLikeToArray(o, minLen);
}
function $64afbd09cd65a300$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $64afbd09cd65a300$var$_nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var $64afbd09cd65a300$var$version = "1.15.0";
function $64afbd09cd65a300$var$userAgent(pattern) {
    if (typeof window !== 'undefined' && window.navigator) return !!/*@__PURE__*/ navigator.userAgent.match(pattern);
}
var $64afbd09cd65a300$var$IE11OrLess = $64afbd09cd65a300$var$userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var $64afbd09cd65a300$var$Edge = $64afbd09cd65a300$var$userAgent(/Edge/i);
var $64afbd09cd65a300$var$FireFox = $64afbd09cd65a300$var$userAgent(/firefox/i);
var $64afbd09cd65a300$var$Safari = $64afbd09cd65a300$var$userAgent(/safari/i) && !$64afbd09cd65a300$var$userAgent(/chrome/i) && !$64afbd09cd65a300$var$userAgent(/android/i);
var $64afbd09cd65a300$var$IOS = $64afbd09cd65a300$var$userAgent(/iP(ad|od|hone)/i);
var $64afbd09cd65a300$var$ChromeForAndroid = $64afbd09cd65a300$var$userAgent(/chrome/i) && $64afbd09cd65a300$var$userAgent(/android/i);
var $64afbd09cd65a300$var$captureMode = {
    capture: false,
    passive: false
};
function $64afbd09cd65a300$var$on(el, event, fn) {
    el.addEventListener(event, fn, !$64afbd09cd65a300$var$IE11OrLess && $64afbd09cd65a300$var$captureMode);
}
function $64afbd09cd65a300$var$off(el, event, fn) {
    el.removeEventListener(event, fn, !$64afbd09cd65a300$var$IE11OrLess && $64afbd09cd65a300$var$captureMode);
}
function $64afbd09cd65a300$var$matches(/**HTMLElement*/ el, /**String*/ selector) {
    if (!selector) return;
    selector[0] === '>' && (selector = selector.substring(1));
    if (el) try {
        if (el.matches) return el.matches(selector);
        else if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    } catch (_) {
        return false;
    }
    return false;
}
function $64afbd09cd65a300$var$getParentOrHost(el) {
    return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function $64afbd09cd65a300$var$closest(/**HTMLElement*/ el, /**String*/ selector, /**HTMLElement*/ ctx, includeCTX) {
    if (el) {
        ctx = ctx || document;
        do {
            if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && $64afbd09cd65a300$var$matches(el, selector) : $64afbd09cd65a300$var$matches(el, selector)) || includeCTX && el === ctx) return el;
            if (el === ctx) break;
        /* jshint boss:true */ }while (el = $64afbd09cd65a300$var$getParentOrHost(el))
    }
    return null;
}
var $64afbd09cd65a300$var$R_SPACE = /\s+/g;
function $64afbd09cd65a300$var$toggleClass(el, name, state) {
    if (el && name) {
        if (el.classList) el.classList[state ? 'add' : 'remove'](name);
        else {
            var className = (' ' + el.className + ' ').replace($64afbd09cd65a300$var$R_SPACE, ' ').replace(' ' + name + ' ', ' ');
            el.className = (className + (state ? ' ' + name : '')).replace($64afbd09cd65a300$var$R_SPACE, ' ');
        }
    }
}
function $64afbd09cd65a300$var$css(el, prop, val) {
    var style = el && el.style;
    if (style) {
        if (val === void 0) {
            if (document.defaultView && document.defaultView.getComputedStyle) val = document.defaultView.getComputedStyle(el, '');
            else if (el.currentStyle) val = el.currentStyle;
            return prop === void 0 ? val : val[prop];
        } else {
            if (!(prop in style) && prop.indexOf('webkit') === -1) prop = '-webkit-' + prop;
            style[prop] = val + (typeof val === 'string' ? '' : 'px');
        }
    }
}
function $64afbd09cd65a300$var$matrix(el, selfOnly) {
    var appliedTransforms = '';
    if (typeof el === 'string') appliedTransforms = el;
    else do {
        var transform = $64afbd09cd65a300$var$css(el, 'transform');
        if (transform && transform !== 'none') appliedTransforms = transform + ' ' + appliedTransforms;
    /* jshint boss:true */ }while (!selfOnly && (el = el.parentNode))
    var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    /*jshint -W056 */ return matrixFn && new matrixFn(appliedTransforms);
}
function $64afbd09cd65a300$var$find(ctx, tagName, iterator) {
    if (ctx) {
        var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;
        if (iterator) for(; i < n; i++)iterator(list[i], i);
        return list;
    }
    return [];
}
function $64afbd09cd65a300$var$getWindowScrollingElement() {
    var scrollingElement = document.scrollingElement;
    if (scrollingElement) return scrollingElement;
    else return document.documentElement;
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */ function $64afbd09cd65a300$var$getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
    if (!el.getBoundingClientRect && el !== window) return;
    var elRect, top, left, bottom, right, height, width;
    if (el !== window && el.parentNode && el !== $64afbd09cd65a300$var$getWindowScrollingElement()) {
        elRect = el.getBoundingClientRect();
        top = elRect.top;
        left = elRect.left;
        bottom = elRect.bottom;
        right = elRect.right;
        height = elRect.height;
        width = elRect.width;
    } else {
        top = 0;
        left = 0;
        bottom = window.innerHeight;
        right = window.innerWidth;
        height = window.innerHeight;
        width = window.innerWidth;
    }
    if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
        // Adjust for translate()
        container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
        // Not needed on <= IE11
        if (!$64afbd09cd65a300$var$IE11OrLess) {
            do if (container && container.getBoundingClientRect && ($64afbd09cd65a300$var$css(container, 'transform') !== 'none' || relativeToNonStaticParent && $64afbd09cd65a300$var$css(container, 'position') !== 'static')) {
                var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container
                top -= containerRect.top + parseInt($64afbd09cd65a300$var$css(container, 'border-top-width'));
                left -= containerRect.left + parseInt($64afbd09cd65a300$var$css(container, 'border-left-width'));
                bottom = top + elRect.height;
                right = left + elRect.width;
                break;
            }
            while (container = container.parentNode)
        }
    }
    if (undoScale && el !== window) {
        // Adjust for scale()
        var elMatrix = $64afbd09cd65a300$var$matrix(container || el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
        if (elMatrix) {
            top /= scaleY;
            left /= scaleX;
            width /= scaleX;
            height /= scaleY;
            bottom = top + height;
            right = left + width;
        }
    }
    return {
        top: top,
        left: left,
        bottom: bottom,
        right: right,
        width: width,
        height: height
    };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */ function $64afbd09cd65a300$var$isScrolledPast(el, elSide, parentSide) {
    var parent = $64afbd09cd65a300$var$getParentAutoScrollElement(el, true), elSideVal = $64afbd09cd65a300$var$getRect(el)[elSide];
    /* jshint boss:true */ while(parent){
        var parentSideVal = $64afbd09cd65a300$var$getRect(parent)[parentSide], visible = void 0;
        if (parentSide === 'top' || parentSide === 'left') visible = elSideVal >= parentSideVal;
        else visible = elSideVal <= parentSideVal;
        if (!visible) return parent;
        if (parent === $64afbd09cd65a300$var$getWindowScrollingElement()) break;
        parent = $64afbd09cd65a300$var$getParentAutoScrollElement(parent, false);
    }
    return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */ function $64afbd09cd65a300$var$getChild(el, childNum, options, includeDragEl) {
    var currentChild = 0, i = 0, children = el.children;
    while(i < children.length){
        if (children[i].style.display !== 'none' && children[i] !== $64afbd09cd65a300$export$31b3ca70d8f57423.ghost && (includeDragEl || children[i] !== $64afbd09cd65a300$export$31b3ca70d8f57423.dragged) && $64afbd09cd65a300$var$closest(children[i], options.draggable, el, false)) {
            if (currentChild === childNum) return children[i];
            currentChild++;
        }
        i++;
    }
    return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */ function $64afbd09cd65a300$var$lastChild(el, selector) {
    var last = el.lastElementChild;
    while(last && (last === $64afbd09cd65a300$export$31b3ca70d8f57423.ghost || $64afbd09cd65a300$var$css(last, 'display') === 'none' || selector && !$64afbd09cd65a300$var$matches(last, selector)))last = last.previousElementSibling;
    return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */ function $64afbd09cd65a300$var$index(el, selector) {
    var index = 0;
    if (!el || !el.parentNode) return -1;
    /* jshint boss:true */ while(el = el.previousElementSibling)if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== $64afbd09cd65a300$export$31b3ca70d8f57423.clone && (!selector || $64afbd09cd65a300$var$matches(el, selector))) index++;
    return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */ function $64afbd09cd65a300$var$getRelativeScrollOffset(el) {
    var offsetLeft = 0, offsetTop = 0, winScroller = $64afbd09cd65a300$var$getWindowScrollingElement();
    if (el) do {
        var elMatrix = $64afbd09cd65a300$var$matrix(el), scaleX = elMatrix.a, scaleY = elMatrix.d;
        offsetLeft += el.scrollLeft * scaleX;
        offsetTop += el.scrollTop * scaleY;
    }while (el !== winScroller && (el = el.parentNode))
    return [
        offsetLeft,
        offsetTop
    ];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */ function $64afbd09cd65a300$var$indexOfObject(arr, obj) {
    for(var i in arr){
        if (!arr.hasOwnProperty(i)) continue;
        for(var key in obj){
            if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
        }
    }
    return -1;
}
function $64afbd09cd65a300$var$getParentAutoScrollElement(el, includeSelf) {
    // skip to window
    if (!el || !el.getBoundingClientRect) return $64afbd09cd65a300$var$getWindowScrollingElement();
    var elem = el;
    var gotSelf = false;
    do // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
        var elemCSS = $64afbd09cd65a300$var$css(elem);
        if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
            if (!elem.getBoundingClientRect || elem === document.body) return $64afbd09cd65a300$var$getWindowScrollingElement();
            if (gotSelf || includeSelf) return elem;
            gotSelf = true;
        }
    }
    while (elem = elem.parentNode)
    return $64afbd09cd65a300$var$getWindowScrollingElement();
}
function $64afbd09cd65a300$var$extend(dst, src) {
    if (dst && src) {
        for(var key in src)if (src.hasOwnProperty(key)) dst[key] = src[key];
    }
    return dst;
}
function $64afbd09cd65a300$var$isRectEqual(rect1, rect2) {
    return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var $64afbd09cd65a300$var$_throttleTimeout;
function $64afbd09cd65a300$var$throttle(callback, ms) {
    return function() {
        if (!$64afbd09cd65a300$var$_throttleTimeout) {
            var args = arguments, _this = this;
            if (args.length === 1) callback.call(_this, args[0]);
            else callback.apply(_this, args);
            $64afbd09cd65a300$var$_throttleTimeout = setTimeout(function() {
                $64afbd09cd65a300$var$_throttleTimeout = void 0;
            }, ms);
        }
    };
}
function $64afbd09cd65a300$var$cancelThrottle() {
    clearTimeout($64afbd09cd65a300$var$_throttleTimeout);
    $64afbd09cd65a300$var$_throttleTimeout = void 0;
}
function $64afbd09cd65a300$var$scrollBy(el, x, y) {
    el.scrollLeft += x;
    el.scrollTop += y;
}
function $64afbd09cd65a300$var$clone(el) {
    var Polymer = window.Polymer;
    var $ = window.jQuery || window.Zepto;
    if (Polymer && Polymer.dom) return Polymer.dom(el).cloneNode(true);
    else if ($) return $(el).clone(true)[0];
    else return el.cloneNode(true);
}
function $64afbd09cd65a300$var$setRect(el, rect) {
    $64afbd09cd65a300$var$css(el, 'position', 'absolute');
    $64afbd09cd65a300$var$css(el, 'top', rect.top);
    $64afbd09cd65a300$var$css(el, 'left', rect.left);
    $64afbd09cd65a300$var$css(el, 'width', rect.width);
    $64afbd09cd65a300$var$css(el, 'height', rect.height);
}
function $64afbd09cd65a300$var$unsetRect(el) {
    $64afbd09cd65a300$var$css(el, 'position', '');
    $64afbd09cd65a300$var$css(el, 'top', '');
    $64afbd09cd65a300$var$css(el, 'left', '');
    $64afbd09cd65a300$var$css(el, 'width', '');
    $64afbd09cd65a300$var$css(el, 'height', '');
}
var $64afbd09cd65a300$var$expando = 'Sortable' + new Date().getTime();
function $64afbd09cd65a300$var$AnimationStateManager() {
    var animationStates = [], animationCallbackId;
    return {
        captureAnimationState: function captureAnimationState() {
            animationStates = [];
            if (!this.options.animation) return;
            var children = [].slice.call(this.el.children);
            children.forEach(function(child) {
                if ($64afbd09cd65a300$var$css(child, 'display') === 'none' || child === $64afbd09cd65a300$export$31b3ca70d8f57423.ghost) return;
                animationStates.push({
                    target: child,
                    rect: $64afbd09cd65a300$var$getRect(child)
                });
                var fromRect = $64afbd09cd65a300$var$_objectSpread2({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation
                if (child.thisAnimationDuration) {
                    var childMatrix = $64afbd09cd65a300$var$matrix(child, true);
                    if (childMatrix) {
                        fromRect.top -= childMatrix.f;
                        fromRect.left -= childMatrix.e;
                    }
                }
                child.fromRect = fromRect;
            });
        },
        addAnimationState: function addAnimationState(state) {
            animationStates.push(state);
        },
        removeAnimationState: function removeAnimationState(target) {
            animationStates.splice($64afbd09cd65a300$var$indexOfObject(animationStates, {
                target: target
            }), 1);
        },
        animateAll: function animateAll(callback) {
            var _this = this;
            if (!this.options.animation) {
                clearTimeout(animationCallbackId);
                if (typeof callback === 'function') callback();
                return;
            }
            var animating = false, animationTime = 0;
            animationStates.forEach(function(state) {
                var time = 0, target = state.target, fromRect = target.fromRect, toRect = $64afbd09cd65a300$var$getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = $64afbd09cd65a300$var$matrix(target, true);
                if (targetMatrix) {
                    // Compensate for current animation
                    toRect.top -= targetMatrix.f;
                    toRect.left -= targetMatrix.e;
                }
                target.toRect = toRect;
                if (target.thisAnimationDuration) // Could also check if animatingRect is between fromRect and toRect
                {
                    if ($64afbd09cd65a300$var$isRectEqual(prevFromRect, toRect) && !$64afbd09cd65a300$var$isRectEqual(fromRect, toRect) && (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) // If returning to same place as started from animation and on same axis
                    time = $64afbd09cd65a300$var$calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
                } // if fromRect != toRect: animate
                if (!$64afbd09cd65a300$var$isRectEqual(toRect, fromRect)) {
                    target.prevFromRect = fromRect;
                    target.prevToRect = toRect;
                    if (!time) time = _this.options.animation;
                    _this.animate(target, animatingRect, toRect, time);
                }
                if (time) {
                    animating = true;
                    animationTime = Math.max(animationTime, time);
                    clearTimeout(target.animationResetTimer);
                    target.animationResetTimer = setTimeout(function() {
                        target.animationTime = 0;
                        target.prevFromRect = null;
                        target.fromRect = null;
                        target.prevToRect = null;
                        target.thisAnimationDuration = null;
                    }, time);
                    target.thisAnimationDuration = time;
                }
            });
            clearTimeout(animationCallbackId);
            if (!animating) {
                if (typeof callback === 'function') callback();
            } else animationCallbackId = setTimeout(function() {
                if (typeof callback === 'function') callback();
            }, animationTime);
            animationStates = [];
        },
        animate: function animate(target, currentRect, toRect, duration) {
            if (duration) {
                $64afbd09cd65a300$var$css(target, 'transition', '');
                $64afbd09cd65a300$var$css(target, 'transform', '');
                var elMatrix = $64afbd09cd65a300$var$matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
                target.animatingX = !!translateX;
                target.animatingY = !!translateY;
                $64afbd09cd65a300$var$css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
                this.forRepaintDummy = $64afbd09cd65a300$var$repaint(target); // repaint
                $64afbd09cd65a300$var$css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
                $64afbd09cd65a300$var$css(target, 'transform', 'translate3d(0,0,0)');
                typeof target.animated === 'number' && clearTimeout(target.animated);
                target.animated = setTimeout(function() {
                    $64afbd09cd65a300$var$css(target, 'transition', '');
                    $64afbd09cd65a300$var$css(target, 'transform', '');
                    target.animated = false;
                    target.animatingX = false;
                    target.animatingY = false;
                }, duration);
            }
        }
    };
}
function $64afbd09cd65a300$var$repaint(target) {
    return target.offsetWidth;
}
function $64afbd09cd65a300$var$calculateRealTime(animatingRect, fromRect, toRect, options) {
    return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}
var $64afbd09cd65a300$var$plugins = [];
var $64afbd09cd65a300$var$defaults = {
    initializeByDefault: true
};
var $64afbd09cd65a300$var$PluginManager = {
    mount: function mount(plugin) {
        // Set default static properties
        for(var option in $64afbd09cd65a300$var$defaults)if ($64afbd09cd65a300$var$defaults.hasOwnProperty(option) && !(option in plugin)) plugin[option] = $64afbd09cd65a300$var$defaults[option];
        $64afbd09cd65a300$var$plugins.forEach(function(p) {
            if (p.pluginName === plugin.pluginName) throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
        });
        $64afbd09cd65a300$var$plugins.push(plugin);
    },
    pluginEvent: function pluginEvent(eventName, sortable, evt) {
        var _this = this;
        this.eventCanceled = false;
        evt.cancel = function() {
            _this.eventCanceled = true;
        };
        var eventNameGlobal = eventName + 'Global';
        $64afbd09cd65a300$var$plugins.forEach(function(plugin) {
            if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable
            if (sortable[plugin.pluginName][eventNameGlobal]) sortable[plugin.pluginName][eventNameGlobal]($64afbd09cd65a300$var$_objectSpread2({
                sortable: sortable
            }, evt));
             // Only fire plugin event if plugin is enabled in this sortable,
            // and plugin has event defined
            if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) sortable[plugin.pluginName][eventName]($64afbd09cd65a300$var$_objectSpread2({
                sortable: sortable
            }, evt));
        });
    },
    initializePlugins: function initializePlugins(sortable, el, defaults, options) {
        $64afbd09cd65a300$var$plugins.forEach(function(plugin) {
            var pluginName = plugin.pluginName;
            if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
            var initialized = new plugin(sortable, el, sortable.options);
            initialized.sortable = sortable;
            initialized.options = sortable.options;
            sortable[pluginName] = initialized; // Add default options from plugin
            $64afbd09cd65a300$var$_extends(defaults, initialized.defaults);
        });
        for(var option in sortable.options){
            if (!sortable.options.hasOwnProperty(option)) continue;
            var modified = this.modifyOption(sortable, option, sortable.options[option]);
            if (typeof modified !== 'undefined') sortable.options[option] = modified;
        }
    },
    getEventProperties: function getEventProperties(name, sortable) {
        var eventProperties = {};
        $64afbd09cd65a300$var$plugins.forEach(function(plugin) {
            if (typeof plugin.eventProperties !== 'function') return;
            $64afbd09cd65a300$var$_extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
        });
        return eventProperties;
    },
    modifyOption: function modifyOption(sortable, name, value) {
        var modifiedValue;
        $64afbd09cd65a300$var$plugins.forEach(function(plugin) {
            // Plugin must exist on the Sortable
            if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin
            if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
        });
        return modifiedValue;
    }
};
function $64afbd09cd65a300$var$dispatchEvent(_ref) {
    var sortable = _ref.sortable, rootEl = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex = _ref.oldIndex, newIndex = _ref.newIndex, oldDraggableIndex = _ref.oldDraggableIndex, newDraggableIndex = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
    sortable = sortable || rootEl && rootEl[$64afbd09cd65a300$var$expando];
    if (!sortable) return;
    var evt, options = sortable.options, onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature
    if (window.CustomEvent && !$64afbd09cd65a300$var$IE11OrLess && !$64afbd09cd65a300$var$Edge) evt = new CustomEvent(name, {
        bubbles: true,
        cancelable: true
    });
    else {
        evt = document.createEvent('Event');
        evt.initEvent(name, true, true);
    }
    evt.to = toEl || rootEl;
    evt.from = fromEl || rootEl;
    evt.item = targetEl || rootEl;
    evt.clone = cloneEl;
    evt.oldIndex = oldIndex;
    evt.newIndex = newIndex;
    evt.oldDraggableIndex = oldDraggableIndex;
    evt.newDraggableIndex = newDraggableIndex;
    evt.originalEvent = originalEvent;
    evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;
    var allEventProperties = $64afbd09cd65a300$var$_objectSpread2($64afbd09cd65a300$var$_objectSpread2({}, extraEventProperties), $64afbd09cd65a300$var$PluginManager.getEventProperties(name, sortable));
    for(var option in allEventProperties)evt[option] = allEventProperties[option];
    if (rootEl) rootEl.dispatchEvent(evt);
    if (options[onName]) options[onName].call(sortable, evt);
}
var $64afbd09cd65a300$var$_excluded = [
    "evt"
];
var $64afbd09cd65a300$var$pluginEvent = function pluginEvent(eventName, sortable) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}, originalEvent = _ref.evt, data = $64afbd09cd65a300$var$_objectWithoutProperties(_ref, $64afbd09cd65a300$var$_excluded);
    $64afbd09cd65a300$var$PluginManager.pluginEvent.bind($64afbd09cd65a300$export$31b3ca70d8f57423)(eventName, sortable, $64afbd09cd65a300$var$_objectSpread2({
        dragEl: $64afbd09cd65a300$var$dragEl,
        parentEl: $64afbd09cd65a300$var$parentEl,
        ghostEl: $64afbd09cd65a300$var$ghostEl,
        rootEl: $64afbd09cd65a300$var$rootEl,
        nextEl: $64afbd09cd65a300$var$nextEl,
        lastDownEl: $64afbd09cd65a300$var$lastDownEl,
        cloneEl: $64afbd09cd65a300$var$cloneEl,
        cloneHidden: $64afbd09cd65a300$var$cloneHidden,
        dragStarted: $64afbd09cd65a300$var$moved,
        putSortable: $64afbd09cd65a300$var$putSortable,
        activeSortable: $64afbd09cd65a300$export$31b3ca70d8f57423.active,
        originalEvent: originalEvent,
        oldIndex: $64afbd09cd65a300$var$oldIndex,
        oldDraggableIndex: $64afbd09cd65a300$var$oldDraggableIndex,
        newIndex: $64afbd09cd65a300$var$newIndex,
        newDraggableIndex: $64afbd09cd65a300$var$newDraggableIndex,
        hideGhostForTarget: $64afbd09cd65a300$var$_hideGhostForTarget,
        unhideGhostForTarget: $64afbd09cd65a300$var$_unhideGhostForTarget,
        cloneNowHidden: function cloneNowHidden() {
            $64afbd09cd65a300$var$cloneHidden = true;
        },
        cloneNowShown: function cloneNowShown() {
            $64afbd09cd65a300$var$cloneHidden = false;
        },
        dispatchSortableEvent: function dispatchSortableEvent(name) {
            $64afbd09cd65a300$var$_dispatchEvent({
                sortable: sortable,
                name: name,
                originalEvent: originalEvent
            });
        }
    }, data));
};
function $64afbd09cd65a300$var$_dispatchEvent(info) {
    $64afbd09cd65a300$var$dispatchEvent($64afbd09cd65a300$var$_objectSpread2({
        putSortable: $64afbd09cd65a300$var$putSortable,
        cloneEl: $64afbd09cd65a300$var$cloneEl,
        targetEl: $64afbd09cd65a300$var$dragEl,
        rootEl: $64afbd09cd65a300$var$rootEl,
        oldIndex: $64afbd09cd65a300$var$oldIndex,
        oldDraggableIndex: $64afbd09cd65a300$var$oldDraggableIndex,
        newIndex: $64afbd09cd65a300$var$newIndex,
        newDraggableIndex: $64afbd09cd65a300$var$newDraggableIndex
    }, info));
}
var $64afbd09cd65a300$var$dragEl, $64afbd09cd65a300$var$parentEl, $64afbd09cd65a300$var$ghostEl, $64afbd09cd65a300$var$rootEl, $64afbd09cd65a300$var$nextEl, $64afbd09cd65a300$var$lastDownEl, $64afbd09cd65a300$var$cloneEl, $64afbd09cd65a300$var$cloneHidden, $64afbd09cd65a300$var$oldIndex, $64afbd09cd65a300$var$newIndex, $64afbd09cd65a300$var$oldDraggableIndex, $64afbd09cd65a300$var$newDraggableIndex, $64afbd09cd65a300$var$activeGroup, $64afbd09cd65a300$var$putSortable, $64afbd09cd65a300$var$awaitingDragStarted = false, $64afbd09cd65a300$var$ignoreNextClick = false, $64afbd09cd65a300$var$sortables = [], $64afbd09cd65a300$var$tapEvt, $64afbd09cd65a300$var$touchEvt, $64afbd09cd65a300$var$lastDx, $64afbd09cd65a300$var$lastDy, $64afbd09cd65a300$var$tapDistanceLeft, $64afbd09cd65a300$var$tapDistanceTop, $64afbd09cd65a300$var$moved, $64afbd09cd65a300$var$lastTarget, $64afbd09cd65a300$var$lastDirection, $64afbd09cd65a300$var$pastFirstInvertThresh = false, $64afbd09cd65a300$var$isCircumstantialInvert = false, $64afbd09cd65a300$var$targetMoveDistance, // For positioning ghost absolutely
$64afbd09cd65a300$var$ghostRelativeParent, $64afbd09cd65a300$var$ghostRelativeParentInitialScroll = [], // (left, top)
$64afbd09cd65a300$var$_silent = false, $64afbd09cd65a300$var$savedInputChecked = [];
/** @const */ var $64afbd09cd65a300$var$documentExists = typeof document !== 'undefined', $64afbd09cd65a300$var$PositionGhostAbsolutely = $64afbd09cd65a300$var$IOS, $64afbd09cd65a300$var$CSSFloatProperty = $64afbd09cd65a300$var$Edge || $64afbd09cd65a300$var$IE11OrLess ? 'cssFloat' : 'float', // This will not pass for IE9, because IE9 DnD only works on anchors
$64afbd09cd65a300$var$supportDraggable = $64afbd09cd65a300$var$documentExists && !$64afbd09cd65a300$var$ChromeForAndroid && !$64afbd09cd65a300$var$IOS && 'draggable' in document.createElement('div'), $64afbd09cd65a300$var$supportCssPointerEvents = function() {
    if (!$64afbd09cd65a300$var$documentExists) return; // false when <= IE11
    if ($64afbd09cd65a300$var$IE11OrLess) return false;
    var el = document.createElement('x');
    el.style.cssText = 'pointer-events:auto';
    return el.style.pointerEvents === 'auto';
}(), $64afbd09cd65a300$var$_detectDirection = function _detectDirection(el, options) {
    var elCSS = $64afbd09cd65a300$var$css(el), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = $64afbd09cd65a300$var$getChild(el, 0, options), child2 = $64afbd09cd65a300$var$getChild(el, 1, options), firstChildCSS = child1 && $64afbd09cd65a300$var$css(child1), secondChildCSS = child2 && $64afbd09cd65a300$var$css(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + $64afbd09cd65a300$var$getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + $64afbd09cd65a300$var$getRect(child2).width;
    if (elCSS.display === 'flex') return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
    if (elCSS.display === 'grid') return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
    if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
        var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
        return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
    }
    return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[$64afbd09cd65a300$var$CSSFloatProperty] === 'none' || child2 && elCSS[$64afbd09cd65a300$var$CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
}, $64afbd09cd65a300$var$_dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
    var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
    return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
}, /**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */ $64afbd09cd65a300$var$_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
    var ret;
    $64afbd09cd65a300$var$sortables.some(function(sortable) {
        var threshold = sortable[$64afbd09cd65a300$var$expando].options.emptyInsertThreshold;
        if (!threshold || $64afbd09cd65a300$var$lastChild(sortable)) return;
        var rect = $64afbd09cd65a300$var$getRect(sortable), insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold, insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
        if (insideHorizontally && insideVertically) return ret = sortable;
    });
    return ret;
}, $64afbd09cd65a300$var$_prepareGroup = function _prepareGroup(options) {
    function toFn(value, pull) {
        return function(to, from, dragEl, evt) {
            var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
            if (value == null && (pull || sameGroup)) // Default pull value
            // Default pull and put value if same group
            return true;
            else if (value == null || value === false) return false;
            else if (pull && value === 'clone') return value;
            else if (typeof value === 'function') return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
            else {
                var otherGroup = (pull ? to : from).options.group.name;
                return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
            }
        };
    }
    var group = {};
    var originalGroup = options.group;
    if (!originalGroup || $64afbd09cd65a300$var$_typeof(originalGroup) != 'object') originalGroup = {
        name: originalGroup
    };
    group.name = originalGroup.name;
    group.checkPull = toFn(originalGroup.pull, true);
    group.checkPut = toFn(originalGroup.put);
    group.revertClone = originalGroup.revertClone;
    options.group = group;
}, $64afbd09cd65a300$var$_hideGhostForTarget = function _hideGhostForTarget() {
    if (!$64afbd09cd65a300$var$supportCssPointerEvents && $64afbd09cd65a300$var$ghostEl) $64afbd09cd65a300$var$css($64afbd09cd65a300$var$ghostEl, 'display', 'none');
}, $64afbd09cd65a300$var$_unhideGhostForTarget = function _unhideGhostForTarget() {
    if (!$64afbd09cd65a300$var$supportCssPointerEvents && $64afbd09cd65a300$var$ghostEl) $64afbd09cd65a300$var$css($64afbd09cd65a300$var$ghostEl, 'display', '');
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position
if ($64afbd09cd65a300$var$documentExists && !$64afbd09cd65a300$var$ChromeForAndroid) document.addEventListener('click', function(evt) {
    if ($64afbd09cd65a300$var$ignoreNextClick) {
        evt.preventDefault();
        evt.stopPropagation && evt.stopPropagation();
        evt.stopImmediatePropagation && evt.stopImmediatePropagation();
        $64afbd09cd65a300$var$ignoreNextClick = false;
        return false;
    }
}, true);
var $64afbd09cd65a300$var$nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
    if ($64afbd09cd65a300$var$dragEl) {
        evt = evt.touches ? evt.touches[0] : evt;
        var nearest = $64afbd09cd65a300$var$_detectNearestEmptySortable(evt.clientX, evt.clientY);
        if (nearest) {
            // Create imitation event
            var event = {};
            for(var i in evt)if (evt.hasOwnProperty(i)) event[i] = evt[i];
            event.target = event.rootEl = nearest;
            event.preventDefault = void 0;
            event.stopPropagation = void 0;
            nearest[$64afbd09cd65a300$var$expando]._onDragOver(event);
        }
    }
};
var $64afbd09cd65a300$var$_checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
    if ($64afbd09cd65a300$var$dragEl) $64afbd09cd65a300$var$dragEl.parentNode[$64afbd09cd65a300$var$expando]._isOutsideThisEl(evt.target);
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */ function $64afbd09cd65a300$export$31b3ca70d8f57423(el, options) {
    if (!(el && el.nodeType && el.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat(({}).toString.call(el));
    this.el = el; // root element
    this.options = options = $64afbd09cd65a300$var$_extends({}, options); // Export instance
    el[$64afbd09cd65a300$var$expando] = this;
    var defaults = {
        group: null,
        sort: true,
        disabled: false,
        store: null,
        handle: null,
        draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
        swapThreshold: 1,
        // percentage; 0 <= x <= 1
        invertSwap: false,
        // invert always
        invertedSwapThreshold: null,
        // will be set to same as swapThreshold if default
        removeCloneOnHide: true,
        direction: function direction() {
            return $64afbd09cd65a300$var$_detectDirection(el, this.options);
        },
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag',
        ignore: 'a, img',
        filter: null,
        preventOnFilter: true,
        animation: 0,
        easing: null,
        setData: function setData(dataTransfer, dragEl) {
            dataTransfer.setData('Text', dragEl.textContent);
        },
        dropBubble: false,
        dragoverBubble: false,
        dataIdAttr: 'data-id',
        delay: 0,
        delayOnTouchOnly: false,
        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
        forceFallback: false,
        fallbackClass: 'sortable-fallback',
        fallbackOnBody: false,
        fallbackTolerance: 0,
        fallbackOffset: {
            x: 0,
            y: 0
        },
        supportPointer: $64afbd09cd65a300$export$31b3ca70d8f57423.supportPointer !== false && 'PointerEvent' in window && !$64afbd09cd65a300$var$Safari,
        emptyInsertThreshold: 5
    };
    $64afbd09cd65a300$var$PluginManager.initializePlugins(this, el, defaults); // Set default options
    for(var name in defaults)!(name in options) && (options[name] = defaults[name]);
    $64afbd09cd65a300$var$_prepareGroup(options); // Bind all private methods
    for(var fn in this)if (fn.charAt(0) === '_' && typeof this[fn] === 'function') this[fn] = this[fn].bind(this);
     // Setup drag mode
    this.nativeDraggable = options.forceFallback ? false : $64afbd09cd65a300$var$supportDraggable;
    if (this.nativeDraggable) // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
     // Bind events
    if (options.supportPointer) $64afbd09cd65a300$var$on(el, 'pointerdown', this._onTapStart);
    else {
        $64afbd09cd65a300$var$on(el, 'mousedown', this._onTapStart);
        $64afbd09cd65a300$var$on(el, 'touchstart', this._onTapStart);
    }
    if (this.nativeDraggable) {
        $64afbd09cd65a300$var$on(el, 'dragover', this);
        $64afbd09cd65a300$var$on(el, 'dragenter', this);
    }
    $64afbd09cd65a300$var$sortables.push(this.el); // Restore sorting
    options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager
    $64afbd09cd65a300$var$_extends(this, $64afbd09cd65a300$var$AnimationStateManager());
}
$64afbd09cd65a300$export$31b3ca70d8f57423.prototype = /** @lends Sortable.prototype */ {
    constructor: $64afbd09cd65a300$export$31b3ca70d8f57423,
    _isOutsideThisEl: function _isOutsideThisEl(target) {
        if (!this.el.contains(target) && target !== this.el) $64afbd09cd65a300$var$lastTarget = null;
    },
    _getDirection: function _getDirection(evt, target) {
        return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, $64afbd09cd65a300$var$dragEl) : this.options.direction;
    },
    _onTapStart: function _onTapStart(/** Event|TouchEvent */ evt) {
        if (!evt.cancelable) return;
        var _this = this, el = this.el, options = this.options, preventOnFilter = options.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter = options.filter;
        $64afbd09cd65a300$var$_saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.
        if ($64afbd09cd65a300$var$dragEl) return;
        if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) return; // only left button and enabled
         // cancel dnd if original target is content editable
        if (originalTarget.isContentEditable) return;
         // Safari ignores further event handling after mousedown
        if (!this.nativeDraggable && $64afbd09cd65a300$var$Safari && target && target.tagName.toUpperCase() === 'SELECT') return;
        target = $64afbd09cd65a300$var$closest(target, options.draggable, el, false);
        if (target && target.animated) return;
        if ($64afbd09cd65a300$var$lastDownEl === target) // Ignoring duplicate `down`
        return;
         // Get the index of the dragged element within its parent
        $64afbd09cd65a300$var$oldIndex = $64afbd09cd65a300$var$index(target);
        $64afbd09cd65a300$var$oldDraggableIndex = $64afbd09cd65a300$var$index(target, options.draggable); // Check filter
        if (typeof filter === 'function') {
            if (filter.call(this, evt, target, this)) {
                $64afbd09cd65a300$var$_dispatchEvent({
                    sortable: _this,
                    rootEl: originalTarget,
                    name: 'filter',
                    targetEl: target,
                    toEl: el,
                    fromEl: el
                });
                $64afbd09cd65a300$var$pluginEvent('filter', _this, {
                    evt: evt
                });
                preventOnFilter && evt.cancelable && evt.preventDefault();
                return; // cancel dnd
            }
        } else if (filter) {
            filter = filter.split(',').some(function(criteria) {
                criteria = $64afbd09cd65a300$var$closest(originalTarget, criteria.trim(), el, false);
                if (criteria) {
                    $64afbd09cd65a300$var$_dispatchEvent({
                        sortable: _this,
                        rootEl: criteria,
                        name: 'filter',
                        targetEl: target,
                        fromEl: el,
                        toEl: el
                    });
                    $64afbd09cd65a300$var$pluginEvent('filter', _this, {
                        evt: evt
                    });
                    return true;
                }
            });
            if (filter) {
                preventOnFilter && evt.cancelable && evt.preventDefault();
                return; // cancel dnd
            }
        }
        if (options.handle && !$64afbd09cd65a300$var$closest(originalTarget, options.handle, el, false)) return;
         // Prepare `dragstart`
        this._prepareDragStart(evt, touch, target);
    },
    _prepareDragStart: function _prepareDragStart(/** Event */ evt, /** Touch */ touch, /** HTMLElement */ target) {
        var _this = this, el = _this.el, options = _this.options, ownerDocument = el.ownerDocument, dragStartFn;
        if (target && !$64afbd09cd65a300$var$dragEl && target.parentNode === el) {
            var dragRect = $64afbd09cd65a300$var$getRect(target);
            $64afbd09cd65a300$var$rootEl = el;
            $64afbd09cd65a300$var$dragEl = target;
            $64afbd09cd65a300$var$parentEl = $64afbd09cd65a300$var$dragEl.parentNode;
            $64afbd09cd65a300$var$nextEl = $64afbd09cd65a300$var$dragEl.nextSibling;
            $64afbd09cd65a300$var$lastDownEl = target;
            $64afbd09cd65a300$var$activeGroup = options.group;
            $64afbd09cd65a300$export$31b3ca70d8f57423.dragged = $64afbd09cd65a300$var$dragEl;
            $64afbd09cd65a300$var$tapEvt = {
                target: $64afbd09cd65a300$var$dragEl,
                clientX: (touch || evt).clientX,
                clientY: (touch || evt).clientY
            };
            $64afbd09cd65a300$var$tapDistanceLeft = $64afbd09cd65a300$var$tapEvt.clientX - dragRect.left;
            $64afbd09cd65a300$var$tapDistanceTop = $64afbd09cd65a300$var$tapEvt.clientY - dragRect.top;
            this._lastX = (touch || evt).clientX;
            this._lastY = (touch || evt).clientY;
            $64afbd09cd65a300$var$dragEl.style['will-change'] = 'all';
            dragStartFn = function dragStartFn() {
                $64afbd09cd65a300$var$pluginEvent('delayEnded', _this, {
                    evt: evt
                });
                if ($64afbd09cd65a300$export$31b3ca70d8f57423.eventCanceled) {
                    _this._onDrop();
                    return;
                } // Delayed drag has been triggered
                // we can re-enable the events: touchmove/mousemove
                _this._disableDelayedDragEvents();
                if (!$64afbd09cd65a300$var$FireFox && _this.nativeDraggable) $64afbd09cd65a300$var$dragEl.draggable = true;
                 // Bind the events: dragstart/dragend
                _this._triggerDragStart(evt, touch); // Drag start event
                $64afbd09cd65a300$var$_dispatchEvent({
                    sortable: _this,
                    name: 'choose',
                    originalEvent: evt
                }); // Chosen item
                $64afbd09cd65a300$var$toggleClass($64afbd09cd65a300$var$dragEl, options.chosenClass, true);
            }; // Disable "draggable"
            options.ignore.split(',').forEach(function(criteria) {
                $64afbd09cd65a300$var$find($64afbd09cd65a300$var$dragEl, criteria.trim(), $64afbd09cd65a300$var$_disableDraggable);
            });
            $64afbd09cd65a300$var$on(ownerDocument, 'dragover', $64afbd09cd65a300$var$nearestEmptyInsertDetectEvent);
            $64afbd09cd65a300$var$on(ownerDocument, 'mousemove', $64afbd09cd65a300$var$nearestEmptyInsertDetectEvent);
            $64afbd09cd65a300$var$on(ownerDocument, 'touchmove', $64afbd09cd65a300$var$nearestEmptyInsertDetectEvent);
            $64afbd09cd65a300$var$on(ownerDocument, 'mouseup', _this._onDrop);
            $64afbd09cd65a300$var$on(ownerDocument, 'touchend', _this._onDrop);
            $64afbd09cd65a300$var$on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)
            if ($64afbd09cd65a300$var$FireFox && this.nativeDraggable) {
                this.options.touchStartThreshold = 4;
                $64afbd09cd65a300$var$dragEl.draggable = true;
            }
            $64afbd09cd65a300$var$pluginEvent('delayStart', this, {
                evt: evt
            }); // Delay is impossible for native DnD in Edge or IE
            if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !($64afbd09cd65a300$var$Edge || $64afbd09cd65a300$var$IE11OrLess))) {
                if ($64afbd09cd65a300$export$31b3ca70d8f57423.eventCanceled) {
                    this._onDrop();
                    return;
                } // If the user moves the pointer or let go the click or touch
                // before the delay has been reached:
                // disable the delayed drag
                $64afbd09cd65a300$var$on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
                $64afbd09cd65a300$var$on(ownerDocument, 'touchend', _this._disableDelayedDrag);
                $64afbd09cd65a300$var$on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
                $64afbd09cd65a300$var$on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
                $64afbd09cd65a300$var$on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
                options.supportPointer && $64afbd09cd65a300$var$on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
                _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
            } else dragStartFn();
        }
    },
    _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(/** TouchEvent|PointerEvent **/ e) {
        var touch = e.touches ? e.touches[0] : e;
        if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) this._disableDelayedDrag();
    },
    _disableDelayedDrag: function _disableDelayedDrag() {
        $64afbd09cd65a300$var$dragEl && $64afbd09cd65a300$var$_disableDraggable($64afbd09cd65a300$var$dragEl);
        clearTimeout(this._dragStartTimer);
        this._disableDelayedDragEvents();
    },
    _disableDelayedDragEvents: function _disableDelayedDragEvents() {
        var ownerDocument = this.el.ownerDocument;
        $64afbd09cd65a300$var$off(ownerDocument, 'mouseup', this._disableDelayedDrag);
        $64afbd09cd65a300$var$off(ownerDocument, 'touchend', this._disableDelayedDrag);
        $64afbd09cd65a300$var$off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
        $64afbd09cd65a300$var$off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
        $64afbd09cd65a300$var$off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
        $64afbd09cd65a300$var$off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
    },
    _triggerDragStart: function _triggerDragStart(/** Event */ evt, /** Touch */ touch) {
        touch = touch || evt.pointerType == 'touch' && evt;
        if (!this.nativeDraggable || touch) {
            if (this.options.supportPointer) $64afbd09cd65a300$var$on(document, 'pointermove', this._onTouchMove);
            else if (touch) $64afbd09cd65a300$var$on(document, 'touchmove', this._onTouchMove);
            else $64afbd09cd65a300$var$on(document, 'mousemove', this._onTouchMove);
        } else {
            $64afbd09cd65a300$var$on($64afbd09cd65a300$var$dragEl, 'dragend', this);
            $64afbd09cd65a300$var$on($64afbd09cd65a300$var$rootEl, 'dragstart', this._onDragStart);
        }
        try {
            if (document.selection) // Timeout neccessary for IE9
            $64afbd09cd65a300$var$_nextTick(function() {
                document.selection.empty();
            });
            else window.getSelection().removeAllRanges();
        } catch (err) {}
    },
    _dragStarted: function _dragStarted(fallback, evt) {
        $64afbd09cd65a300$var$awaitingDragStarted = false;
        if ($64afbd09cd65a300$var$rootEl && $64afbd09cd65a300$var$dragEl) {
            $64afbd09cd65a300$var$pluginEvent('dragStarted', this, {
                evt: evt
            });
            if (this.nativeDraggable) $64afbd09cd65a300$var$on(document, 'dragover', $64afbd09cd65a300$var$_checkOutsideTargetEl);
            var options = this.options; // Apply effect
            !fallback && $64afbd09cd65a300$var$toggleClass($64afbd09cd65a300$var$dragEl, options.dragClass, false);
            $64afbd09cd65a300$var$toggleClass($64afbd09cd65a300$var$dragEl, options.ghostClass, true);
            $64afbd09cd65a300$export$31b3ca70d8f57423.active = this;
            fallback && this._appendGhost(); // Drag start event
            $64afbd09cd65a300$var$_dispatchEvent({
                sortable: this,
                name: 'start',
                originalEvent: evt
            });
        } else this._nulling();
    },
    _emulateDragOver: function _emulateDragOver() {
        if ($64afbd09cd65a300$var$touchEvt) {
            this._lastX = $64afbd09cd65a300$var$touchEvt.clientX;
            this._lastY = $64afbd09cd65a300$var$touchEvt.clientY;
            $64afbd09cd65a300$var$_hideGhostForTarget();
            var target = document.elementFromPoint($64afbd09cd65a300$var$touchEvt.clientX, $64afbd09cd65a300$var$touchEvt.clientY);
            var parent = target;
            while(target && target.shadowRoot){
                target = target.shadowRoot.elementFromPoint($64afbd09cd65a300$var$touchEvt.clientX, $64afbd09cd65a300$var$touchEvt.clientY);
                if (target === parent) break;
                parent = target;
            }
            $64afbd09cd65a300$var$dragEl.parentNode[$64afbd09cd65a300$var$expando]._isOutsideThisEl(target);
            if (parent) do {
                if (parent[$64afbd09cd65a300$var$expando]) {
                    var inserted = void 0;
                    inserted = parent[$64afbd09cd65a300$var$expando]._onDragOver({
                        clientX: $64afbd09cd65a300$var$touchEvt.clientX,
                        clientY: $64afbd09cd65a300$var$touchEvt.clientY,
                        target: target,
                        rootEl: parent
                    });
                    if (inserted && !this.options.dragoverBubble) break;
                }
                target = parent; // store last element
            }while (parent = parent.parentNode)
            $64afbd09cd65a300$var$_unhideGhostForTarget();
        }
    },
    _onTouchMove: function _onTouchMove(/**TouchEvent*/ evt) {
        if ($64afbd09cd65a300$var$tapEvt) {
            var options = this.options, fallbackTolerance = options.fallbackTolerance, fallbackOffset = options.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = $64afbd09cd65a300$var$ghostEl && $64afbd09cd65a300$var$matrix($64afbd09cd65a300$var$ghostEl, true), scaleX = $64afbd09cd65a300$var$ghostEl && ghostMatrix && ghostMatrix.a, scaleY = $64afbd09cd65a300$var$ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = $64afbd09cd65a300$var$PositionGhostAbsolutely && $64afbd09cd65a300$var$ghostRelativeParent && $64afbd09cd65a300$var$getRelativeScrollOffset($64afbd09cd65a300$var$ghostRelativeParent), dx = (touch.clientX - $64afbd09cd65a300$var$tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - $64afbd09cd65a300$var$ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - $64afbd09cd65a300$var$tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - $64afbd09cd65a300$var$ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging
            if (!$64afbd09cd65a300$export$31b3ca70d8f57423.active && !$64afbd09cd65a300$var$awaitingDragStarted) {
                if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) return;
                this._onDragStart(evt, true);
            }
            if ($64afbd09cd65a300$var$ghostEl) {
                if (ghostMatrix) {
                    ghostMatrix.e += dx - ($64afbd09cd65a300$var$lastDx || 0);
                    ghostMatrix.f += dy - ($64afbd09cd65a300$var$lastDy || 0);
                } else ghostMatrix = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: dx,
                    f: dy
                };
                var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
                $64afbd09cd65a300$var$css($64afbd09cd65a300$var$ghostEl, 'webkitTransform', cssMatrix);
                $64afbd09cd65a300$var$css($64afbd09cd65a300$var$ghostEl, 'mozTransform', cssMatrix);
                $64afbd09cd65a300$var$css($64afbd09cd65a300$var$ghostEl, 'msTransform', cssMatrix);
                $64afbd09cd65a300$var$css($64afbd09cd65a300$var$ghostEl, 'transform', cssMatrix);
                $64afbd09cd65a300$var$lastDx = dx;
                $64afbd09cd65a300$var$lastDy = dy;
                $64afbd09cd65a300$var$touchEvt = touch;
            }
            evt.cancelable && evt.preventDefault();
        }
    },
    _appendGhost: function _appendGhost() {
        // Bug if using scale(): https://stackoverflow.com/questions/2637058
        // Not being adjusted for
        if (!$64afbd09cd65a300$var$ghostEl) {
            var container = this.options.fallbackOnBody ? document.body : $64afbd09cd65a300$var$rootEl, rect = $64afbd09cd65a300$var$getRect($64afbd09cd65a300$var$dragEl, true, $64afbd09cd65a300$var$PositionGhostAbsolutely, true, container), options = this.options; // Position absolutely
            if ($64afbd09cd65a300$var$PositionGhostAbsolutely) {
                // Get relatively positioned parent
                $64afbd09cd65a300$var$ghostRelativeParent = container;
                while($64afbd09cd65a300$var$css($64afbd09cd65a300$var$ghostRelativeParent, 'position') === 'static' && $64afbd09cd65a300$var$css($64afbd09cd65a300$var$ghostRelativeParent, 'transform') === 'none' && $64afbd09cd65a300$var$ghostRelativeParent !== document)$64afbd09cd65a300$var$ghostRelativeParent = $64afbd09cd65a300$var$ghostRelativeParent.parentNode;
                if ($64afbd09cd65a300$var$ghostRelativeParent !== document.body && $64afbd09cd65a300$var$ghostRelativeParent !== document.documentElement) {
                    if ($64afbd09cd65a300$var$ghostRelativeParent === document) $64afbd09cd65a300$var$ghostRelativeParent = $64afbd09cd65a300$var$getWindowScrollingElement();
                    rect.top += $64afbd09cd65a300$var$ghostRelativeParent.scrollTop;
                    rect.left += $64afbd09cd65a300$var$ghostRelativeParent.scrollLeft;
                } else $64afbd09cd65a300$var$ghostRelativeParent = $64afbd09cd65a300$var$getWindowScrollingElement();
                $64afbd09cd65a300$var$ghostRelativeParentInitialScroll = $64afbd09cd65a300$var$getRelativeScrollOffset($64afbd09cd65a300$var$ghostRelativeParent);
            }
            $64afbd09cd65a300$var$ghostEl = $64afbd09cd65a300$var$dragEl.cloneNode(true);
            $64afbd09cd65a300$var$toggleClass($64afbd09cd65a300$var$ghostEl, options.ghostClass, false);
            $64afbd09cd65a300$var$toggleClass($64afbd09cd65a300$var$ghostEl, options.fallbackClass, true);
            $64afbd09cd65a300$var$toggleClass($64afbd09cd65a300$var$ghostEl, options.dragClass, true);
            $64afbd09cd65a300$var$css($64afbd09cd65a300$var$ghostEl, 'transition', '');
            $64afbd09cd65a300$var$css($64afbd09cd65a300$var$ghostEl, 'transform', '');
            $64afbd09cd65a300$var$css($64afbd09cd65a300$var$ghostEl, 'box-sizing', 'border-box');
            $64afbd09cd65a300$var$css($64afbd09cd65a300$var$ghostEl, 'margin', 0);
            $64afbd09cd65a300$var$css($64afbd09cd65a300$var$ghostEl, 'top', rect.top);
            $64afbd09cd65a300$var$css($64afbd09cd65a300$var$ghostEl, 'left', rect.left);
            $64afbd09cd65a300$var$css($64afbd09cd65a300$var$ghostEl, 'width', rect.width);
            $64afbd09cd65a300$var$css($64afbd09cd65a300$var$ghostEl, 'height', rect.height);
            $64afbd09cd65a300$var$css($64afbd09cd65a300$var$ghostEl, 'opacity', '0.8');
            $64afbd09cd65a300$var$css($64afbd09cd65a300$var$ghostEl, 'position', $64afbd09cd65a300$var$PositionGhostAbsolutely ? 'absolute' : 'fixed');
            $64afbd09cd65a300$var$css($64afbd09cd65a300$var$ghostEl, 'zIndex', '100000');
            $64afbd09cd65a300$var$css($64afbd09cd65a300$var$ghostEl, 'pointerEvents', 'none');
            $64afbd09cd65a300$export$31b3ca70d8f57423.ghost = $64afbd09cd65a300$var$ghostEl;
            container.appendChild($64afbd09cd65a300$var$ghostEl); // Set transform-origin
            $64afbd09cd65a300$var$css($64afbd09cd65a300$var$ghostEl, 'transform-origin', $64afbd09cd65a300$var$tapDistanceLeft / parseInt($64afbd09cd65a300$var$ghostEl.style.width) * 100 + '% ' + $64afbd09cd65a300$var$tapDistanceTop / parseInt($64afbd09cd65a300$var$ghostEl.style.height) * 100 + '%');
        }
    },
    _onDragStart: function _onDragStart(/**Event*/ evt, /**boolean*/ fallback) {
        var _this = this;
        var dataTransfer = evt.dataTransfer;
        var options = _this.options;
        $64afbd09cd65a300$var$pluginEvent('dragStart', this, {
            evt: evt
        });
        if ($64afbd09cd65a300$export$31b3ca70d8f57423.eventCanceled) {
            this._onDrop();
            return;
        }
        $64afbd09cd65a300$var$pluginEvent('setupClone', this);
        if (!$64afbd09cd65a300$export$31b3ca70d8f57423.eventCanceled) {
            $64afbd09cd65a300$var$cloneEl = $64afbd09cd65a300$var$clone($64afbd09cd65a300$var$dragEl);
            $64afbd09cd65a300$var$cloneEl.removeAttribute("id");
            $64afbd09cd65a300$var$cloneEl.draggable = false;
            $64afbd09cd65a300$var$cloneEl.style['will-change'] = '';
            this._hideClone();
            $64afbd09cd65a300$var$toggleClass($64afbd09cd65a300$var$cloneEl, this.options.chosenClass, false);
            $64afbd09cd65a300$export$31b3ca70d8f57423.clone = $64afbd09cd65a300$var$cloneEl;
        } // #1143: IFrame support workaround
        _this.cloneId = $64afbd09cd65a300$var$_nextTick(function() {
            $64afbd09cd65a300$var$pluginEvent('clone', _this);
            if ($64afbd09cd65a300$export$31b3ca70d8f57423.eventCanceled) return;
            if (!_this.options.removeCloneOnHide) $64afbd09cd65a300$var$rootEl.insertBefore($64afbd09cd65a300$var$cloneEl, $64afbd09cd65a300$var$dragEl);
            _this._hideClone();
            $64afbd09cd65a300$var$_dispatchEvent({
                sortable: _this,
                name: 'clone'
            });
        });
        !fallback && $64afbd09cd65a300$var$toggleClass($64afbd09cd65a300$var$dragEl, options.dragClass, true); // Set proper drop events
        if (fallback) {
            $64afbd09cd65a300$var$ignoreNextClick = true;
            _this._loopId = setInterval(_this._emulateDragOver, 50);
        } else {
            // Undo what was set in _prepareDragStart before drag started
            $64afbd09cd65a300$var$off(document, 'mouseup', _this._onDrop);
            $64afbd09cd65a300$var$off(document, 'touchend', _this._onDrop);
            $64afbd09cd65a300$var$off(document, 'touchcancel', _this._onDrop);
            if (dataTransfer) {
                dataTransfer.effectAllowed = 'move';
                options.setData && options.setData.call(_this, dataTransfer, $64afbd09cd65a300$var$dragEl);
            }
            $64afbd09cd65a300$var$on(document, 'drop', _this); // #1276 fix:
            $64afbd09cd65a300$var$css($64afbd09cd65a300$var$dragEl, 'transform', 'translateZ(0)');
        }
        $64afbd09cd65a300$var$awaitingDragStarted = true;
        _this._dragStartId = $64afbd09cd65a300$var$_nextTick(_this._dragStarted.bind(_this, fallback, evt));
        $64afbd09cd65a300$var$on(document, 'selectstart', _this);
        $64afbd09cd65a300$var$moved = true;
        if ($64afbd09cd65a300$var$Safari) $64afbd09cd65a300$var$css(document.body, 'user-select', 'none');
    },
    // Returns true - if no further action is needed (either inserted or another condition)
    _onDragOver: function _onDragOver(/**Event*/ evt) {
        var el = this.el, target1 = evt.target, dragRect, targetRect, revert, options = this.options, group = options.group, activeSortable = $64afbd09cd65a300$export$31b3ca70d8f57423.active, isOwner = $64afbd09cd65a300$var$activeGroup === group, canSort = options.sort, fromSortable = $64afbd09cd65a300$var$putSortable || activeSortable, vertical, _this = this, completedFired = false;
        if ($64afbd09cd65a300$var$_silent) return;
        function dragOverEvent(name, extra) {
            $64afbd09cd65a300$var$pluginEvent(name, _this, $64afbd09cd65a300$var$_objectSpread2({
                evt: evt,
                isOwner: isOwner,
                axis: vertical ? 'vertical' : 'horizontal',
                revert: revert,
                dragRect: dragRect,
                targetRect: targetRect,
                canSort: canSort,
                fromSortable: fromSortable,
                target: target1,
                completed: completed,
                onMove: function onMove(target, after) {
                    return $64afbd09cd65a300$var$_onMove($64afbd09cd65a300$var$rootEl, el, $64afbd09cd65a300$var$dragEl, dragRect, target, $64afbd09cd65a300$var$getRect(target), evt, after);
                },
                changed: changed
            }, extra));
        } // Capture animation state
        function capture() {
            dragOverEvent('dragOverAnimationCapture');
            _this.captureAnimationState();
            if (_this !== fromSortable) fromSortable.captureAnimationState();
        } // Return invocation when dragEl is inserted (or completed)
        function completed(insertion) {
            dragOverEvent('dragOverCompleted', {
                insertion: insertion
            });
            if (insertion) {
                // Clones must be hidden before folding animation to capture dragRectAbsolute properly
                if (isOwner) activeSortable._hideClone();
                else activeSortable._showClone(_this);
                if (_this !== fromSortable) {
                    // Set ghost class to new sortable's ghost class
                    $64afbd09cd65a300$var$toggleClass($64afbd09cd65a300$var$dragEl, $64afbd09cd65a300$var$putSortable ? $64afbd09cd65a300$var$putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
                    $64afbd09cd65a300$var$toggleClass($64afbd09cd65a300$var$dragEl, options.ghostClass, true);
                }
                if ($64afbd09cd65a300$var$putSortable !== _this && _this !== $64afbd09cd65a300$export$31b3ca70d8f57423.active) $64afbd09cd65a300$var$putSortable = _this;
                else if (_this === $64afbd09cd65a300$export$31b3ca70d8f57423.active && $64afbd09cd65a300$var$putSortable) $64afbd09cd65a300$var$putSortable = null;
                 // Animation
                if (fromSortable === _this) _this._ignoreWhileAnimating = target1;
                _this.animateAll(function() {
                    dragOverEvent('dragOverAnimationComplete');
                    _this._ignoreWhileAnimating = null;
                });
                if (_this !== fromSortable) {
                    fromSortable.animateAll();
                    fromSortable._ignoreWhileAnimating = null;
                }
            } // Null lastTarget if it is not inside a previously swapped element
            if (target1 === $64afbd09cd65a300$var$dragEl && !$64afbd09cd65a300$var$dragEl.animated || target1 === el && !target1.animated) $64afbd09cd65a300$var$lastTarget = null;
             // no bubbling and not fallback
            if (!options.dragoverBubble && !evt.rootEl && target1 !== document) {
                $64afbd09cd65a300$var$dragEl.parentNode[$64afbd09cd65a300$var$expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted
                !insertion && $64afbd09cd65a300$var$nearestEmptyInsertDetectEvent(evt);
            }
            !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
            return completedFired = true;
        } // Call when dragEl has been inserted
        function changed() {
            $64afbd09cd65a300$var$newIndex = $64afbd09cd65a300$var$index($64afbd09cd65a300$var$dragEl);
            $64afbd09cd65a300$var$newDraggableIndex = $64afbd09cd65a300$var$index($64afbd09cd65a300$var$dragEl, options.draggable);
            $64afbd09cd65a300$var$_dispatchEvent({
                sortable: _this,
                name: 'change',
                toEl: el,
                newIndex: $64afbd09cd65a300$var$newIndex,
                newDraggableIndex: $64afbd09cd65a300$var$newDraggableIndex,
                originalEvent: evt
            });
        }
        if (evt.preventDefault !== void 0) evt.cancelable && evt.preventDefault();
        target1 = $64afbd09cd65a300$var$closest(target1, options.draggable, el, true);
        dragOverEvent('dragOver');
        if ($64afbd09cd65a300$export$31b3ca70d8f57423.eventCanceled) return completedFired;
        if ($64afbd09cd65a300$var$dragEl.contains(evt.target) || target1.animated && target1.animatingX && target1.animatingY || _this._ignoreWhileAnimating === target1) return completed(false);
        $64afbd09cd65a300$var$ignoreNextClick = false;
        if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = $64afbd09cd65a300$var$parentEl !== $64afbd09cd65a300$var$rootEl // Reverting item into the original list
        ) : $64afbd09cd65a300$var$putSortable === this || (this.lastPutMode = $64afbd09cd65a300$var$activeGroup.checkPull(this, activeSortable, $64afbd09cd65a300$var$dragEl, evt)) && group.checkPut(this, activeSortable, $64afbd09cd65a300$var$dragEl, evt))) {
            vertical = this._getDirection(evt, target1) === 'vertical';
            dragRect = $64afbd09cd65a300$var$getRect($64afbd09cd65a300$var$dragEl);
            dragOverEvent('dragOverValid');
            if ($64afbd09cd65a300$export$31b3ca70d8f57423.eventCanceled) return completedFired;
            if (revert) {
                $64afbd09cd65a300$var$parentEl = $64afbd09cd65a300$var$rootEl; // actualization
                capture();
                this._hideClone();
                dragOverEvent('revert');
                if (!$64afbd09cd65a300$export$31b3ca70d8f57423.eventCanceled) {
                    if ($64afbd09cd65a300$var$nextEl) $64afbd09cd65a300$var$rootEl.insertBefore($64afbd09cd65a300$var$dragEl, $64afbd09cd65a300$var$nextEl);
                    else $64afbd09cd65a300$var$rootEl.appendChild($64afbd09cd65a300$var$dragEl);
                }
                return completed(true);
            }
            var elLastChild = $64afbd09cd65a300$var$lastChild(el, options.draggable);
            if (!elLastChild || $64afbd09cd65a300$var$_ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
                // Insert to end of list
                // If already at end of list: Do not insert
                if (elLastChild === $64afbd09cd65a300$var$dragEl) return completed(false);
                 // if there is a last element, it is the target
                if (elLastChild && el === evt.target) target1 = elLastChild;
                if (target1) targetRect = $64afbd09cd65a300$var$getRect(target1);
                if ($64afbd09cd65a300$var$_onMove($64afbd09cd65a300$var$rootEl, el, $64afbd09cd65a300$var$dragEl, dragRect, target1, targetRect, evt, !!target1) !== false) {
                    capture();
                    if (elLastChild && elLastChild.nextSibling) // the last draggable element is not the last node
                    el.insertBefore($64afbd09cd65a300$var$dragEl, elLastChild.nextSibling);
                    else el.appendChild($64afbd09cd65a300$var$dragEl);
                    $64afbd09cd65a300$var$parentEl = el; // actualization
                    changed();
                    return completed(true);
                }
            } else if (elLastChild && $64afbd09cd65a300$var$_ghostIsFirst(evt, vertical, this)) {
                // Insert to start of list
                var firstChild = $64afbd09cd65a300$var$getChild(el, 0, options, true);
                if (firstChild === $64afbd09cd65a300$var$dragEl) return completed(false);
                target1 = firstChild;
                targetRect = $64afbd09cd65a300$var$getRect(target1);
                if ($64afbd09cd65a300$var$_onMove($64afbd09cd65a300$var$rootEl, el, $64afbd09cd65a300$var$dragEl, dragRect, target1, targetRect, evt, false) !== false) {
                    capture();
                    el.insertBefore($64afbd09cd65a300$var$dragEl, firstChild);
                    $64afbd09cd65a300$var$parentEl = el; // actualization
                    changed();
                    return completed(true);
                }
            } else if (target1.parentNode === el) {
                targetRect = $64afbd09cd65a300$var$getRect(target1);
                var direction = 0, targetBeforeFirstSwap, differentLevel = $64afbd09cd65a300$var$dragEl.parentNode !== el, differentRowCol = !$64afbd09cd65a300$var$_dragElInRowColumn($64afbd09cd65a300$var$dragEl.animated && $64afbd09cd65a300$var$dragEl.toRect || dragRect, target1.animated && target1.toRect || targetRect, vertical), side1 = vertical ? 'top' : 'left', scrolledPastTop = $64afbd09cd65a300$var$isScrolledPast(target1, 'top', 'top') || $64afbd09cd65a300$var$isScrolledPast($64afbd09cd65a300$var$dragEl, 'top', 'top'), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
                if ($64afbd09cd65a300$var$lastTarget !== target1) {
                    targetBeforeFirstSwap = targetRect[side1];
                    $64afbd09cd65a300$var$pastFirstInvertThresh = false;
                    $64afbd09cd65a300$var$isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
                }
                direction = $64afbd09cd65a300$var$_getSwapDirection(evt, target1, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, $64afbd09cd65a300$var$isCircumstantialInvert, $64afbd09cd65a300$var$lastTarget === target1);
                var sibling;
                if (direction !== 0) {
                    // Check if target is beside dragEl in respective direction (ignoring hidden elements)
                    var dragIndex = $64afbd09cd65a300$var$index($64afbd09cd65a300$var$dragEl);
                    do {
                        dragIndex -= direction;
                        sibling = $64afbd09cd65a300$var$parentEl.children[dragIndex];
                    }while (sibling && ($64afbd09cd65a300$var$css(sibling, 'display') === 'none' || sibling === $64afbd09cd65a300$var$ghostEl))
                } // If dragEl is already beside target: Do not insert
                if (direction === 0 || sibling === target1) return completed(false);
                $64afbd09cd65a300$var$lastTarget = target1;
                $64afbd09cd65a300$var$lastDirection = direction;
                var nextSibling = target1.nextElementSibling, after1 = false;
                after1 = direction === 1;
                var moveVector = $64afbd09cd65a300$var$_onMove($64afbd09cd65a300$var$rootEl, el, $64afbd09cd65a300$var$dragEl, dragRect, target1, targetRect, evt, after1);
                if (moveVector !== false) {
                    if (moveVector === 1 || moveVector === -1) after1 = moveVector === 1;
                    $64afbd09cd65a300$var$_silent = true;
                    setTimeout($64afbd09cd65a300$var$_unsilent, 30);
                    capture();
                    if (after1 && !nextSibling) el.appendChild($64afbd09cd65a300$var$dragEl);
                    else target1.parentNode.insertBefore($64afbd09cd65a300$var$dragEl, after1 ? nextSibling : target1);
                     // Undo chrome's scroll adjustment (has no effect on other browsers)
                    if (scrolledPastTop) $64afbd09cd65a300$var$scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
                    $64afbd09cd65a300$var$parentEl = $64afbd09cd65a300$var$dragEl.parentNode; // actualization
                    // must be done before animation
                    if (targetBeforeFirstSwap !== undefined && !$64afbd09cd65a300$var$isCircumstantialInvert) $64afbd09cd65a300$var$targetMoveDistance = Math.abs(targetBeforeFirstSwap - $64afbd09cd65a300$var$getRect(target1)[side1]);
                    changed();
                    return completed(true);
                }
            }
            if (el.contains($64afbd09cd65a300$var$dragEl)) return completed(false);
        }
        return false;
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function _offMoveEvents() {
        $64afbd09cd65a300$var$off(document, 'mousemove', this._onTouchMove);
        $64afbd09cd65a300$var$off(document, 'touchmove', this._onTouchMove);
        $64afbd09cd65a300$var$off(document, 'pointermove', this._onTouchMove);
        $64afbd09cd65a300$var$off(document, 'dragover', $64afbd09cd65a300$var$nearestEmptyInsertDetectEvent);
        $64afbd09cd65a300$var$off(document, 'mousemove', $64afbd09cd65a300$var$nearestEmptyInsertDetectEvent);
        $64afbd09cd65a300$var$off(document, 'touchmove', $64afbd09cd65a300$var$nearestEmptyInsertDetectEvent);
    },
    _offUpEvents: function _offUpEvents() {
        var ownerDocument = this.el.ownerDocument;
        $64afbd09cd65a300$var$off(ownerDocument, 'mouseup', this._onDrop);
        $64afbd09cd65a300$var$off(ownerDocument, 'touchend', this._onDrop);
        $64afbd09cd65a300$var$off(ownerDocument, 'pointerup', this._onDrop);
        $64afbd09cd65a300$var$off(ownerDocument, 'touchcancel', this._onDrop);
        $64afbd09cd65a300$var$off(document, 'selectstart', this);
    },
    _onDrop: function _onDrop(/**Event*/ evt) {
        var el = this.el, options = this.options; // Get the index of the dragged element within its parent
        $64afbd09cd65a300$var$newIndex = $64afbd09cd65a300$var$index($64afbd09cd65a300$var$dragEl);
        $64afbd09cd65a300$var$newDraggableIndex = $64afbd09cd65a300$var$index($64afbd09cd65a300$var$dragEl, options.draggable);
        $64afbd09cd65a300$var$pluginEvent('drop', this, {
            evt: evt
        });
        $64afbd09cd65a300$var$parentEl = $64afbd09cd65a300$var$dragEl && $64afbd09cd65a300$var$dragEl.parentNode; // Get again after plugin event
        $64afbd09cd65a300$var$newIndex = $64afbd09cd65a300$var$index($64afbd09cd65a300$var$dragEl);
        $64afbd09cd65a300$var$newDraggableIndex = $64afbd09cd65a300$var$index($64afbd09cd65a300$var$dragEl, options.draggable);
        if ($64afbd09cd65a300$export$31b3ca70d8f57423.eventCanceled) {
            this._nulling();
            return;
        }
        $64afbd09cd65a300$var$awaitingDragStarted = false;
        $64afbd09cd65a300$var$isCircumstantialInvert = false;
        $64afbd09cd65a300$var$pastFirstInvertThresh = false;
        clearInterval(this._loopId);
        clearTimeout(this._dragStartTimer);
        $64afbd09cd65a300$var$_cancelNextTick(this.cloneId);
        $64afbd09cd65a300$var$_cancelNextTick(this._dragStartId); // Unbind events
        if (this.nativeDraggable) {
            $64afbd09cd65a300$var$off(document, 'drop', this);
            $64afbd09cd65a300$var$off(el, 'dragstart', this._onDragStart);
        }
        this._offMoveEvents();
        this._offUpEvents();
        if ($64afbd09cd65a300$var$Safari) $64afbd09cd65a300$var$css(document.body, 'user-select', '');
        $64afbd09cd65a300$var$css($64afbd09cd65a300$var$dragEl, 'transform', '');
        if (evt) {
            if ($64afbd09cd65a300$var$moved) {
                evt.cancelable && evt.preventDefault();
                !options.dropBubble && evt.stopPropagation();
            }
            $64afbd09cd65a300$var$ghostEl && $64afbd09cd65a300$var$ghostEl.parentNode && $64afbd09cd65a300$var$ghostEl.parentNode.removeChild($64afbd09cd65a300$var$ghostEl);
            if ($64afbd09cd65a300$var$rootEl === $64afbd09cd65a300$var$parentEl || $64afbd09cd65a300$var$putSortable && $64afbd09cd65a300$var$putSortable.lastPutMode !== 'clone') // Remove clone(s)
            $64afbd09cd65a300$var$cloneEl && $64afbd09cd65a300$var$cloneEl.parentNode && $64afbd09cd65a300$var$cloneEl.parentNode.removeChild($64afbd09cd65a300$var$cloneEl);
            if ($64afbd09cd65a300$var$dragEl) {
                if (this.nativeDraggable) $64afbd09cd65a300$var$off($64afbd09cd65a300$var$dragEl, 'dragend', this);
                $64afbd09cd65a300$var$_disableDraggable($64afbd09cd65a300$var$dragEl);
                $64afbd09cd65a300$var$dragEl.style['will-change'] = ''; // Remove classes
                // ghostClass is added in dragStarted
                if ($64afbd09cd65a300$var$moved && !$64afbd09cd65a300$var$awaitingDragStarted) $64afbd09cd65a300$var$toggleClass($64afbd09cd65a300$var$dragEl, $64afbd09cd65a300$var$putSortable ? $64afbd09cd65a300$var$putSortable.options.ghostClass : this.options.ghostClass, false);
                $64afbd09cd65a300$var$toggleClass($64afbd09cd65a300$var$dragEl, this.options.chosenClass, false); // Drag stop event
                $64afbd09cd65a300$var$_dispatchEvent({
                    sortable: this,
                    name: 'unchoose',
                    toEl: $64afbd09cd65a300$var$parentEl,
                    newIndex: null,
                    newDraggableIndex: null,
                    originalEvent: evt
                });
                if ($64afbd09cd65a300$var$rootEl !== $64afbd09cd65a300$var$parentEl) {
                    if ($64afbd09cd65a300$var$newIndex >= 0) {
                        // Add event
                        $64afbd09cd65a300$var$_dispatchEvent({
                            rootEl: $64afbd09cd65a300$var$parentEl,
                            name: 'add',
                            toEl: $64afbd09cd65a300$var$parentEl,
                            fromEl: $64afbd09cd65a300$var$rootEl,
                            originalEvent: evt
                        }); // Remove event
                        $64afbd09cd65a300$var$_dispatchEvent({
                            sortable: this,
                            name: 'remove',
                            toEl: $64afbd09cd65a300$var$parentEl,
                            originalEvent: evt
                        }); // drag from one list and drop into another
                        $64afbd09cd65a300$var$_dispatchEvent({
                            rootEl: $64afbd09cd65a300$var$parentEl,
                            name: 'sort',
                            toEl: $64afbd09cd65a300$var$parentEl,
                            fromEl: $64afbd09cd65a300$var$rootEl,
                            originalEvent: evt
                        });
                        $64afbd09cd65a300$var$_dispatchEvent({
                            sortable: this,
                            name: 'sort',
                            toEl: $64afbd09cd65a300$var$parentEl,
                            originalEvent: evt
                        });
                    }
                    $64afbd09cd65a300$var$putSortable && $64afbd09cd65a300$var$putSortable.save();
                } else {
                    if ($64afbd09cd65a300$var$newIndex !== $64afbd09cd65a300$var$oldIndex) {
                        if ($64afbd09cd65a300$var$newIndex >= 0) {
                            // drag & drop within the same list
                            $64afbd09cd65a300$var$_dispatchEvent({
                                sortable: this,
                                name: 'update',
                                toEl: $64afbd09cd65a300$var$parentEl,
                                originalEvent: evt
                            });
                            $64afbd09cd65a300$var$_dispatchEvent({
                                sortable: this,
                                name: 'sort',
                                toEl: $64afbd09cd65a300$var$parentEl,
                                originalEvent: evt
                            });
                        }
                    }
                }
                if ($64afbd09cd65a300$export$31b3ca70d8f57423.active) {
                    /* jshint eqnull:true */ if ($64afbd09cd65a300$var$newIndex == null || $64afbd09cd65a300$var$newIndex === -1) {
                        $64afbd09cd65a300$var$newIndex = $64afbd09cd65a300$var$oldIndex;
                        $64afbd09cd65a300$var$newDraggableIndex = $64afbd09cd65a300$var$oldDraggableIndex;
                    }
                    $64afbd09cd65a300$var$_dispatchEvent({
                        sortable: this,
                        name: 'end',
                        toEl: $64afbd09cd65a300$var$parentEl,
                        originalEvent: evt
                    }); // Save sorting
                    this.save();
                }
            }
        }
        this._nulling();
    },
    _nulling: function _nulling() {
        $64afbd09cd65a300$var$pluginEvent('nulling', this);
        $64afbd09cd65a300$var$rootEl = $64afbd09cd65a300$var$dragEl = $64afbd09cd65a300$var$parentEl = $64afbd09cd65a300$var$ghostEl = $64afbd09cd65a300$var$nextEl = $64afbd09cd65a300$var$cloneEl = $64afbd09cd65a300$var$lastDownEl = $64afbd09cd65a300$var$cloneHidden = $64afbd09cd65a300$var$tapEvt = $64afbd09cd65a300$var$touchEvt = $64afbd09cd65a300$var$moved = $64afbd09cd65a300$var$newIndex = $64afbd09cd65a300$var$newDraggableIndex = $64afbd09cd65a300$var$oldIndex = $64afbd09cd65a300$var$oldDraggableIndex = $64afbd09cd65a300$var$lastTarget = $64afbd09cd65a300$var$lastDirection = $64afbd09cd65a300$var$putSortable = $64afbd09cd65a300$var$activeGroup = $64afbd09cd65a300$export$31b3ca70d8f57423.dragged = $64afbd09cd65a300$export$31b3ca70d8f57423.ghost = $64afbd09cd65a300$export$31b3ca70d8f57423.clone = $64afbd09cd65a300$export$31b3ca70d8f57423.active = null;
        $64afbd09cd65a300$var$savedInputChecked.forEach(function(el) {
            el.checked = true;
        });
        $64afbd09cd65a300$var$savedInputChecked.length = $64afbd09cd65a300$var$lastDx = $64afbd09cd65a300$var$lastDy = 0;
    },
    handleEvent: function handleEvent(/**Event*/ evt) {
        switch(evt.type){
            case 'drop':
            case 'dragend':
                this._onDrop(evt);
                break;
            case 'dragenter':
            case 'dragover':
                if ($64afbd09cd65a300$var$dragEl) {
                    this._onDragOver(evt);
                    $64afbd09cd65a300$var$_globalDragOver(evt);
                }
                break;
            case 'selectstart':
                evt.preventDefault();
                break;
        }
    },
    /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */ toArray: function toArray() {
        var order = [], el, children = this.el.children, i = 0, n = children.length, options = this.options;
        for(; i < n; i++){
            el = children[i];
            if ($64afbd09cd65a300$var$closest(el, options.draggable, this.el, false)) order.push(el.getAttribute(options.dataIdAttr) || $64afbd09cd65a300$var$_generateId(el));
        }
        return order;
    },
    /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */ sort: function sort(order, useAnimation) {
        var items = {}, rootEl = this.el;
        this.toArray().forEach(function(id, i) {
            var el = rootEl.children[i];
            if ($64afbd09cd65a300$var$closest(el, this.options.draggable, rootEl, false)) items[id] = el;
        }, this);
        useAnimation && this.captureAnimationState();
        order.forEach(function(id) {
            if (items[id]) {
                rootEl.removeChild(items[id]);
                rootEl.appendChild(items[id]);
            }
        });
        useAnimation && this.animateAll();
    },
    /**
   * Save the current sorting
   */ save: function save() {
        var store = this.options.store;
        store && store.set && store.set(this);
    },
    /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */ closest: function closest$1(el, selector) {
        return $64afbd09cd65a300$var$closest(el, selector || this.options.draggable, this.el, false);
    },
    /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */ option: function option(name, value) {
        var options = this.options;
        if (value === void 0) return options[name];
        else {
            var modifiedValue = $64afbd09cd65a300$var$PluginManager.modifyOption(this, name, value);
            if (typeof modifiedValue !== 'undefined') options[name] = modifiedValue;
            else options[name] = value;
            if (name === 'group') $64afbd09cd65a300$var$_prepareGroup(options);
        }
    },
    /**
   * Destroy
   */ destroy: function destroy() {
        $64afbd09cd65a300$var$pluginEvent('destroy', this);
        var el1 = this.el;
        el1[$64afbd09cd65a300$var$expando] = null;
        $64afbd09cd65a300$var$off(el1, 'mousedown', this._onTapStart);
        $64afbd09cd65a300$var$off(el1, 'touchstart', this._onTapStart);
        $64afbd09cd65a300$var$off(el1, 'pointerdown', this._onTapStart);
        if (this.nativeDraggable) {
            $64afbd09cd65a300$var$off(el1, 'dragover', this);
            $64afbd09cd65a300$var$off(el1, 'dragenter', this);
        } // Remove draggable attributes
        Array.prototype.forEach.call(el1.querySelectorAll('[draggable]'), function(el) {
            el.removeAttribute('draggable');
        });
        this._onDrop();
        this._disableDelayedDragEvents();
        $64afbd09cd65a300$var$sortables.splice($64afbd09cd65a300$var$sortables.indexOf(this.el), 1);
        this.el = el1 = null;
    },
    _hideClone: function _hideClone() {
        if (!$64afbd09cd65a300$var$cloneHidden) {
            $64afbd09cd65a300$var$pluginEvent('hideClone', this);
            if ($64afbd09cd65a300$export$31b3ca70d8f57423.eventCanceled) return;
            $64afbd09cd65a300$var$css($64afbd09cd65a300$var$cloneEl, 'display', 'none');
            if (this.options.removeCloneOnHide && $64afbd09cd65a300$var$cloneEl.parentNode) $64afbd09cd65a300$var$cloneEl.parentNode.removeChild($64afbd09cd65a300$var$cloneEl);
            $64afbd09cd65a300$var$cloneHidden = true;
        }
    },
    _showClone: function _showClone(putSortable) {
        if (putSortable.lastPutMode !== 'clone') {
            this._hideClone();
            return;
        }
        if ($64afbd09cd65a300$var$cloneHidden) {
            $64afbd09cd65a300$var$pluginEvent('showClone', this);
            if ($64afbd09cd65a300$export$31b3ca70d8f57423.eventCanceled) return; // show clone at dragEl or original position
            if ($64afbd09cd65a300$var$dragEl.parentNode == $64afbd09cd65a300$var$rootEl && !this.options.group.revertClone) $64afbd09cd65a300$var$rootEl.insertBefore($64afbd09cd65a300$var$cloneEl, $64afbd09cd65a300$var$dragEl);
            else if ($64afbd09cd65a300$var$nextEl) $64afbd09cd65a300$var$rootEl.insertBefore($64afbd09cd65a300$var$cloneEl, $64afbd09cd65a300$var$nextEl);
            else $64afbd09cd65a300$var$rootEl.appendChild($64afbd09cd65a300$var$cloneEl);
            if (this.options.group.revertClone) this.animate($64afbd09cd65a300$var$dragEl, $64afbd09cd65a300$var$cloneEl);
            $64afbd09cd65a300$var$css($64afbd09cd65a300$var$cloneEl, 'display', '');
            $64afbd09cd65a300$var$cloneHidden = false;
        }
    }
};
function $64afbd09cd65a300$var$_globalDragOver(/**Event*/ evt) {
    if (evt.dataTransfer) evt.dataTransfer.dropEffect = 'move';
    evt.cancelable && evt.preventDefault();
}
function $64afbd09cd65a300$var$_onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
    var evt, sortable = fromEl[$64afbd09cd65a300$var$expando], onMoveFn = sortable.options.onMove, retVal; // Support for new CustomEvent feature
    if (window.CustomEvent && !$64afbd09cd65a300$var$IE11OrLess && !$64afbd09cd65a300$var$Edge) evt = new CustomEvent('move', {
        bubbles: true,
        cancelable: true
    });
    else {
        evt = document.createEvent('Event');
        evt.initEvent('move', true, true);
    }
    evt.to = toEl;
    evt.from = fromEl;
    evt.dragged = dragEl;
    evt.draggedRect = dragRect;
    evt.related = targetEl || toEl;
    evt.relatedRect = targetRect || $64afbd09cd65a300$var$getRect(toEl);
    evt.willInsertAfter = willInsertAfter;
    evt.originalEvent = originalEvent;
    fromEl.dispatchEvent(evt);
    if (onMoveFn) retVal = onMoveFn.call(sortable, evt, originalEvent);
    return retVal;
}
function $64afbd09cd65a300$var$_disableDraggable(el) {
    el.draggable = false;
}
function $64afbd09cd65a300$var$_unsilent() {
    $64afbd09cd65a300$var$_silent = false;
}
function $64afbd09cd65a300$var$_ghostIsFirst(evt, vertical, sortable) {
    var rect = $64afbd09cd65a300$var$getRect($64afbd09cd65a300$var$getChild(sortable.el, 0, sortable.options, true));
    var spacer = 10;
    return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;
}
function $64afbd09cd65a300$var$_ghostIsLast(evt, vertical, sortable) {
    var rect = $64afbd09cd65a300$var$getRect($64afbd09cd65a300$var$lastChild(sortable.el, sortable.options.draggable));
    var spacer = 10;
    return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}
function $64afbd09cd65a300$var$_getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
    var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
    if (!invertSwap) {
        // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
        if (isLastTarget && $64afbd09cd65a300$var$targetMoveDistance < targetLength * swapThreshold) {
            // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
            // check if past first invert threshold on side opposite of lastDirection
            if (!$64afbd09cd65a300$var$pastFirstInvertThresh && ($64afbd09cd65a300$var$lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) // past first invert threshold, do not restrict inverted threshold to dragEl shadow
            $64afbd09cd65a300$var$pastFirstInvertThresh = true;
            if (!$64afbd09cd65a300$var$pastFirstInvertThresh) {
                // dragEl shadow (target move distance shadow)
                if ($64afbd09cd65a300$var$lastDirection === 1 ? mouseOnAxis < targetS1 + $64afbd09cd65a300$var$targetMoveDistance // over dragEl shadow
                 : mouseOnAxis > targetS2 - $64afbd09cd65a300$var$targetMoveDistance) return -$64afbd09cd65a300$var$lastDirection;
            } else invert = true;
        } else {
            // Regular
            if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) return $64afbd09cd65a300$var$_getInsertDirection(target);
        }
    }
    invert = invert || invertSwap;
    if (invert) {
        // Invert of regular
        if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
    return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */ function $64afbd09cd65a300$var$_getInsertDirection(target) {
    if ($64afbd09cd65a300$var$index($64afbd09cd65a300$var$dragEl) < $64afbd09cd65a300$var$index(target)) return 1;
    else return -1;
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */ function $64afbd09cd65a300$var$_generateId(el) {
    var str = el.tagName + el.className + el.src + el.href + el.textContent, i = str.length, sum = 0;
    while(i--)sum += str.charCodeAt(i);
    return sum.toString(36);
}
function $64afbd09cd65a300$var$_saveInputCheckedState(root) {
    $64afbd09cd65a300$var$savedInputChecked.length = 0;
    var inputs = root.getElementsByTagName('input');
    var idx = inputs.length;
    while(idx--){
        var el = inputs[idx];
        el.checked && $64afbd09cd65a300$var$savedInputChecked.push(el);
    }
}
function $64afbd09cd65a300$var$_nextTick(fn) {
    return setTimeout(fn, 0);
}
function $64afbd09cd65a300$var$_cancelNextTick(id) {
    return clearTimeout(id);
} // Fixed #973:
if ($64afbd09cd65a300$var$documentExists) $64afbd09cd65a300$var$on(document, 'touchmove', function(evt) {
    if (($64afbd09cd65a300$export$31b3ca70d8f57423.active || $64afbd09cd65a300$var$awaitingDragStarted) && evt.cancelable) evt.preventDefault();
});
 // Export utils
$64afbd09cd65a300$export$31b3ca70d8f57423.utils = {
    on: $64afbd09cd65a300$var$on,
    off: $64afbd09cd65a300$var$off,
    css: $64afbd09cd65a300$var$css,
    find: $64afbd09cd65a300$var$find,
    is: function is(el, selector) {
        return !!$64afbd09cd65a300$var$closest(el, selector, el, false);
    },
    extend: $64afbd09cd65a300$var$extend,
    throttle: $64afbd09cd65a300$var$throttle,
    closest: $64afbd09cd65a300$var$closest,
    toggleClass: $64afbd09cd65a300$var$toggleClass,
    clone: $64afbd09cd65a300$var$clone,
    index: $64afbd09cd65a300$var$index,
    nextTick: $64afbd09cd65a300$var$_nextTick,
    cancelNextTick: $64afbd09cd65a300$var$_cancelNextTick,
    detectDirection: $64afbd09cd65a300$var$_detectDirection,
    getChild: $64afbd09cd65a300$var$getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */ $64afbd09cd65a300$export$31b3ca70d8f57423.get = function(element) {
    return element[$64afbd09cd65a300$var$expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */ $64afbd09cd65a300$export$31b3ca70d8f57423.mount = function() {
    for(var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++)plugins[_key] = arguments[_key];
    if (plugins[0].constructor === Array) plugins = plugins[0];
    plugins.forEach(function(plugin) {
        if (!plugin.prototype || !plugin.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat(({}).toString.call(plugin));
        if (plugin.utils) $64afbd09cd65a300$export$31b3ca70d8f57423.utils = $64afbd09cd65a300$var$_objectSpread2($64afbd09cd65a300$var$_objectSpread2({}, $64afbd09cd65a300$export$31b3ca70d8f57423.utils), plugin.utils);
        $64afbd09cd65a300$var$PluginManager.mount(plugin);
    });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */ $64afbd09cd65a300$export$31b3ca70d8f57423.create = function(el, options) {
    return new $64afbd09cd65a300$export$31b3ca70d8f57423(el, options);
}; // Export
$64afbd09cd65a300$export$31b3ca70d8f57423.version = $64afbd09cd65a300$var$version;
var $64afbd09cd65a300$var$autoScrolls = [], $64afbd09cd65a300$var$scrollEl, $64afbd09cd65a300$var$scrollRootEl, $64afbd09cd65a300$var$scrolling = false, $64afbd09cd65a300$var$lastAutoScrollX, $64afbd09cd65a300$var$lastAutoScrollY, $64afbd09cd65a300$var$touchEvt$1, $64afbd09cd65a300$var$pointerElemChangedInterval;
function $64afbd09cd65a300$var$AutoScrollPlugin() {
    function AutoScroll() {
        this.defaults = {
            scroll: true,
            forceAutoScrollFallback: false,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: true
        }; // Bind all private methods
        for(var fn in this)if (fn.charAt(0) === '_' && typeof this[fn] === 'function') this[fn] = this[fn].bind(this);
    }
    AutoScroll.prototype = {
        dragStarted: function dragStarted(_ref) {
            var originalEvent = _ref.originalEvent;
            if (this.sortable.nativeDraggable) $64afbd09cd65a300$var$on(document, 'dragover', this._handleAutoScroll);
            else {
                if (this.options.supportPointer) $64afbd09cd65a300$var$on(document, 'pointermove', this._handleFallbackAutoScroll);
                else if (originalEvent.touches) $64afbd09cd65a300$var$on(document, 'touchmove', this._handleFallbackAutoScroll);
                else $64afbd09cd65a300$var$on(document, 'mousemove', this._handleFallbackAutoScroll);
            }
        },
        dragOverCompleted: function dragOverCompleted(_ref2) {
            var originalEvent = _ref2.originalEvent;
            // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
            if (!this.options.dragOverBubble && !originalEvent.rootEl) this._handleAutoScroll(originalEvent);
        },
        drop: function drop() {
            if (this.sortable.nativeDraggable) $64afbd09cd65a300$var$off(document, 'dragover', this._handleAutoScroll);
            else {
                $64afbd09cd65a300$var$off(document, 'pointermove', this._handleFallbackAutoScroll);
                $64afbd09cd65a300$var$off(document, 'touchmove', this._handleFallbackAutoScroll);
                $64afbd09cd65a300$var$off(document, 'mousemove', this._handleFallbackAutoScroll);
            }
            $64afbd09cd65a300$var$clearPointerElemChangedInterval();
            $64afbd09cd65a300$var$clearAutoScrolls();
            $64afbd09cd65a300$var$cancelThrottle();
        },
        nulling: function nulling() {
            $64afbd09cd65a300$var$touchEvt$1 = $64afbd09cd65a300$var$scrollRootEl = $64afbd09cd65a300$var$scrollEl = $64afbd09cd65a300$var$scrolling = $64afbd09cd65a300$var$pointerElemChangedInterval = $64afbd09cd65a300$var$lastAutoScrollX = $64afbd09cd65a300$var$lastAutoScrollY = null;
            $64afbd09cd65a300$var$autoScrolls.length = 0;
        },
        _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
            this._handleAutoScroll(evt, true);
        },
        _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
            var _this = this;
            var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, elem = document.elementFromPoint(x, y);
            $64afbd09cd65a300$var$touchEvt$1 = evt; // IE does not seem to have native autoscroll,
            // Edge's autoscroll seems too conditional,
            // MACOS Safari does not have autoscroll,
            // Firefox and Chrome are good
            if (fallback || this.options.forceAutoScrollFallback || $64afbd09cd65a300$var$Edge || $64afbd09cd65a300$var$IE11OrLess || $64afbd09cd65a300$var$Safari) {
                $64afbd09cd65a300$var$autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change
                var ogElemScroller = $64afbd09cd65a300$var$getParentAutoScrollElement(elem, true);
                if ($64afbd09cd65a300$var$scrolling && (!$64afbd09cd65a300$var$pointerElemChangedInterval || x !== $64afbd09cd65a300$var$lastAutoScrollX || y !== $64afbd09cd65a300$var$lastAutoScrollY)) {
                    $64afbd09cd65a300$var$pointerElemChangedInterval && $64afbd09cd65a300$var$clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour
                    $64afbd09cd65a300$var$pointerElemChangedInterval = setInterval(function() {
                        var newElem = $64afbd09cd65a300$var$getParentAutoScrollElement(document.elementFromPoint(x, y), true);
                        if (newElem !== ogElemScroller) {
                            ogElemScroller = newElem;
                            $64afbd09cd65a300$var$clearAutoScrolls();
                        }
                        $64afbd09cd65a300$var$autoScroll(evt, _this.options, newElem, fallback);
                    }, 10);
                    $64afbd09cd65a300$var$lastAutoScrollX = x;
                    $64afbd09cd65a300$var$lastAutoScrollY = y;
                }
            } else {
                // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
                if (!this.options.bubbleScroll || $64afbd09cd65a300$var$getParentAutoScrollElement(elem, true) === $64afbd09cd65a300$var$getWindowScrollingElement()) {
                    $64afbd09cd65a300$var$clearAutoScrolls();
                    return;
                }
                $64afbd09cd65a300$var$autoScroll(evt, this.options, $64afbd09cd65a300$var$getParentAutoScrollElement(elem, false), false);
            }
        }
    };
    return $64afbd09cd65a300$var$_extends(AutoScroll, {
        pluginName: 'scroll',
        initializeByDefault: true
    });
}
function $64afbd09cd65a300$var$clearAutoScrolls() {
    $64afbd09cd65a300$var$autoScrolls.forEach(function(autoScroll) {
        clearInterval(autoScroll.pid);
    });
    $64afbd09cd65a300$var$autoScrolls = [];
}
function $64afbd09cd65a300$var$clearPointerElemChangedInterval() {
    clearInterval($64afbd09cd65a300$var$pointerElemChangedInterval);
}
var $64afbd09cd65a300$var$autoScroll = $64afbd09cd65a300$var$throttle(function(evt, options, rootEl, isFallback) {
    // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
    if (!options.scroll) return;
    var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, sens = options.scrollSensitivity, speed = options.scrollSpeed, winScroller = $64afbd09cd65a300$var$getWindowScrollingElement();
    var scrollThisInstance = false, scrollCustomFn; // New scroll root, set scrollEl
    if ($64afbd09cd65a300$var$scrollRootEl !== rootEl) {
        $64afbd09cd65a300$var$scrollRootEl = rootEl;
        $64afbd09cd65a300$var$clearAutoScrolls();
        $64afbd09cd65a300$var$scrollEl = options.scroll;
        scrollCustomFn = options.scrollFn;
        if ($64afbd09cd65a300$var$scrollEl === true) $64afbd09cd65a300$var$scrollEl = $64afbd09cd65a300$var$getParentAutoScrollElement(rootEl, true);
    }
    var layersOut = 0;
    var currentParent = $64afbd09cd65a300$var$scrollEl;
    do {
        var el = currentParent, rect = $64afbd09cd65a300$var$getRect(el), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el.scrollWidth, scrollHeight = el.scrollHeight, elCSS = $64afbd09cd65a300$var$css(el), scrollPosX = el.scrollLeft, scrollPosY = el.scrollTop;
        if (el === winScroller) {
            canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
            canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
        } else {
            canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
            canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
        }
        var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
        var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
        if (!$64afbd09cd65a300$var$autoScrolls[layersOut]) {
            for(var i = 0; i <= layersOut; i++)if (!$64afbd09cd65a300$var$autoScrolls[i]) $64afbd09cd65a300$var$autoScrolls[i] = {};
        }
        if ($64afbd09cd65a300$var$autoScrolls[layersOut].vx != vx || $64afbd09cd65a300$var$autoScrolls[layersOut].vy != vy || $64afbd09cd65a300$var$autoScrolls[layersOut].el !== el) {
            $64afbd09cd65a300$var$autoScrolls[layersOut].el = el;
            $64afbd09cd65a300$var$autoScrolls[layersOut].vx = vx;
            $64afbd09cd65a300$var$autoScrolls[layersOut].vy = vy;
            clearInterval($64afbd09cd65a300$var$autoScrolls[layersOut].pid);
            if (vx != 0 || vy != 0) {
                scrollThisInstance = true;
                /* jshint loopfunc:true */ $64afbd09cd65a300$var$autoScrolls[layersOut].pid = setInterval((function() {
                    // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
                    if (isFallback && this.layer === 0) $64afbd09cd65a300$export$31b3ca70d8f57423.active._onTouchMove($64afbd09cd65a300$var$touchEvt$1); // To move ghost if it is positioned absolutely
                    var scrollOffsetY = $64afbd09cd65a300$var$autoScrolls[this.layer].vy ? $64afbd09cd65a300$var$autoScrolls[this.layer].vy * speed : 0;
                    var scrollOffsetX = $64afbd09cd65a300$var$autoScrolls[this.layer].vx ? $64afbd09cd65a300$var$autoScrolls[this.layer].vx * speed : 0;
                    if (typeof scrollCustomFn === 'function') {
                        if (scrollCustomFn.call($64afbd09cd65a300$export$31b3ca70d8f57423.dragged.parentNode[$64afbd09cd65a300$var$expando], scrollOffsetX, scrollOffsetY, evt, $64afbd09cd65a300$var$touchEvt$1, $64afbd09cd65a300$var$autoScrolls[this.layer].el) !== 'continue') return;
                    }
                    $64afbd09cd65a300$var$scrollBy($64afbd09cd65a300$var$autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
                }).bind({
                    layer: layersOut
                }), 24);
            }
        }
        layersOut++;
    }while (options.bubbleScroll && currentParent !== winScroller && (currentParent = $64afbd09cd65a300$var$getParentAutoScrollElement(currentParent, false)))
    $64afbd09cd65a300$var$scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);
var $64afbd09cd65a300$var$drop = function drop(_ref) {
    var originalEvent = _ref.originalEvent, putSortable = _ref.putSortable, dragEl = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
    if (!originalEvent) return;
    var toSortable = putSortable || activeSortable;
    hideGhostForTarget();
    var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
    var target = document.elementFromPoint(touch.clientX, touch.clientY);
    unhideGhostForTarget();
    if (toSortable && !toSortable.el.contains(target)) {
        dispatchSortableEvent('spill');
        this.onSpill({
            dragEl: dragEl,
            putSortable: putSortable
        });
    }
};
function $64afbd09cd65a300$var$Revert() {}
$64afbd09cd65a300$var$Revert.prototype = {
    startIndex: null,
    dragStart: function dragStart(_ref2) {
        var oldDraggableIndex = _ref2.oldDraggableIndex;
        this.startIndex = oldDraggableIndex;
    },
    onSpill: function onSpill(_ref3) {
        var dragEl = _ref3.dragEl, putSortable = _ref3.putSortable;
        this.sortable.captureAnimationState();
        if (putSortable) putSortable.captureAnimationState();
        var nextSibling = $64afbd09cd65a300$var$getChild(this.sortable.el, this.startIndex, this.options);
        if (nextSibling) this.sortable.el.insertBefore(dragEl, nextSibling);
        else this.sortable.el.appendChild(dragEl);
        this.sortable.animateAll();
        if (putSortable) putSortable.animateAll();
    },
    drop: $64afbd09cd65a300$var$drop
};
$64afbd09cd65a300$var$_extends($64afbd09cd65a300$var$Revert, {
    pluginName: 'revertOnSpill'
});
function $64afbd09cd65a300$var$Remove() {}
$64afbd09cd65a300$var$Remove.prototype = {
    onSpill: function onSpill(_ref4) {
        var dragEl = _ref4.dragEl, putSortable = _ref4.putSortable;
        var parentSortable = putSortable || this.sortable;
        parentSortable.captureAnimationState();
        dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
        parentSortable.animateAll();
    },
    drop: $64afbd09cd65a300$var$drop
};
$64afbd09cd65a300$var$_extends($64afbd09cd65a300$var$Remove, {
    pluginName: 'removeOnSpill'
});
var $64afbd09cd65a300$var$lastSwapEl;
function $64afbd09cd65a300$export$bdb5f0a1b77546f4() {
    function Swap() {
        this.defaults = {
            swapClass: 'sortable-swap-highlight'
        };
    }
    Swap.prototype = {
        dragStart: function dragStart(_ref) {
            var dragEl = _ref.dragEl;
            $64afbd09cd65a300$var$lastSwapEl = dragEl;
        },
        dragOverValid: function dragOverValid(_ref2) {
            var completed = _ref2.completed, target = _ref2.target, onMove = _ref2.onMove, activeSortable = _ref2.activeSortable, changed = _ref2.changed, cancel = _ref2.cancel;
            if (!activeSortable.options.swap) return;
            var el = this.sortable.el, options = this.options;
            if (target && target !== el) {
                var prevSwapEl = $64afbd09cd65a300$var$lastSwapEl;
                if (onMove(target) !== false) {
                    $64afbd09cd65a300$var$toggleClass(target, options.swapClass, true);
                    $64afbd09cd65a300$var$lastSwapEl = target;
                } else $64afbd09cd65a300$var$lastSwapEl = null;
                if (prevSwapEl && prevSwapEl !== $64afbd09cd65a300$var$lastSwapEl) $64afbd09cd65a300$var$toggleClass(prevSwapEl, options.swapClass, false);
            }
            changed();
            completed(true);
            cancel();
        },
        drop: function drop(_ref3) {
            var activeSortable = _ref3.activeSortable, putSortable = _ref3.putSortable, dragEl = _ref3.dragEl;
            var toSortable = putSortable || this.sortable;
            var options = this.options;
            $64afbd09cd65a300$var$lastSwapEl && $64afbd09cd65a300$var$toggleClass($64afbd09cd65a300$var$lastSwapEl, options.swapClass, false);
            if ($64afbd09cd65a300$var$lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
                if (dragEl !== $64afbd09cd65a300$var$lastSwapEl) {
                    toSortable.captureAnimationState();
                    if (toSortable !== activeSortable) activeSortable.captureAnimationState();
                    $64afbd09cd65a300$var$swapNodes(dragEl, $64afbd09cd65a300$var$lastSwapEl);
                    toSortable.animateAll();
                    if (toSortable !== activeSortable) activeSortable.animateAll();
                }
            }
        },
        nulling: function nulling() {
            $64afbd09cd65a300$var$lastSwapEl = null;
        }
    };
    return $64afbd09cd65a300$var$_extends(Swap, {
        pluginName: 'swap',
        eventProperties: function eventProperties() {
            return {
                swapItem: $64afbd09cd65a300$var$lastSwapEl
            };
        }
    });
}
function $64afbd09cd65a300$var$swapNodes(n1, n2) {
    var p1 = n1.parentNode, p2 = n2.parentNode, i1, i2;
    if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
    i1 = $64afbd09cd65a300$var$index(n1);
    i2 = $64afbd09cd65a300$var$index(n2);
    if (p1.isEqualNode(p2) && i1 < i2) i2++;
    p1.insertBefore(n2, p1.children[i1]);
    p2.insertBefore(n1, p2.children[i2]);
}
var $64afbd09cd65a300$var$multiDragElements = [], $64afbd09cd65a300$var$multiDragClones = [], $64afbd09cd65a300$var$lastMultiDragSelect, // for selection with modifier key down (SHIFT)
$64afbd09cd65a300$var$multiDragSortable, $64afbd09cd65a300$var$initialFolding = false, // Initial multi-drag fold when drag started
$64afbd09cd65a300$var$folding = false, // Folding any other time
$64afbd09cd65a300$var$dragStarted = false, $64afbd09cd65a300$var$dragEl$1, $64afbd09cd65a300$var$clonesFromRect, $64afbd09cd65a300$var$clonesHidden;
function $64afbd09cd65a300$export$18e5d2a5d1df842d() {
    function MultiDrag(sortable) {
        // Bind all private methods
        for(var fn in this)if (fn.charAt(0) === '_' && typeof this[fn] === 'function') this[fn] = this[fn].bind(this);
        if (!sortable.options.avoidImplicitDeselect) {
            if (sortable.options.supportPointer) $64afbd09cd65a300$var$on(document, 'pointerup', this._deselectMultiDrag);
            else {
                $64afbd09cd65a300$var$on(document, 'mouseup', this._deselectMultiDrag);
                $64afbd09cd65a300$var$on(document, 'touchend', this._deselectMultiDrag);
            }
        }
        $64afbd09cd65a300$var$on(document, 'keydown', this._checkKeyDown);
        $64afbd09cd65a300$var$on(document, 'keyup', this._checkKeyUp);
        this.defaults = {
            selectedClass: 'sortable-selected',
            multiDragKey: null,
            avoidImplicitDeselect: false,
            setData: function setData(dataTransfer, dragEl) {
                var data = '';
                if ($64afbd09cd65a300$var$multiDragElements.length && $64afbd09cd65a300$var$multiDragSortable === sortable) $64afbd09cd65a300$var$multiDragElements.forEach(function(multiDragElement, i) {
                    data += (!i ? '' : ', ') + multiDragElement.textContent;
                });
                else data = dragEl.textContent;
                dataTransfer.setData('Text', data);
            }
        };
    }
    MultiDrag.prototype = {
        multiDragKeyDown: false,
        isMultiDrag: false,
        delayStartGlobal: function delayStartGlobal(_ref) {
            var dragged = _ref.dragEl;
            $64afbd09cd65a300$var$dragEl$1 = dragged;
        },
        delayEnded: function delayEnded() {
            this.isMultiDrag = ~$64afbd09cd65a300$var$multiDragElements.indexOf($64afbd09cd65a300$var$dragEl$1);
        },
        setupClone: function setupClone(_ref2) {
            var sortable = _ref2.sortable, cancel = _ref2.cancel;
            if (!this.isMultiDrag) return;
            for(var i = 0; i < $64afbd09cd65a300$var$multiDragElements.length; i++){
                $64afbd09cd65a300$var$multiDragClones.push($64afbd09cd65a300$var$clone($64afbd09cd65a300$var$multiDragElements[i]));
                $64afbd09cd65a300$var$multiDragClones[i].sortableIndex = $64afbd09cd65a300$var$multiDragElements[i].sortableIndex;
                $64afbd09cd65a300$var$multiDragClones[i].draggable = false;
                $64afbd09cd65a300$var$multiDragClones[i].style['will-change'] = '';
                $64afbd09cd65a300$var$toggleClass($64afbd09cd65a300$var$multiDragClones[i], this.options.selectedClass, false);
                $64afbd09cd65a300$var$multiDragElements[i] === $64afbd09cd65a300$var$dragEl$1 && $64afbd09cd65a300$var$toggleClass($64afbd09cd65a300$var$multiDragClones[i], this.options.chosenClass, false);
            }
            sortable._hideClone();
            cancel();
        },
        clone: function clone(_ref3) {
            var sortable = _ref3.sortable, rootEl = _ref3.rootEl, dispatchSortableEvent = _ref3.dispatchSortableEvent, cancel = _ref3.cancel;
            if (!this.isMultiDrag) return;
            if (!this.options.removeCloneOnHide) {
                if ($64afbd09cd65a300$var$multiDragElements.length && $64afbd09cd65a300$var$multiDragSortable === sortable) {
                    $64afbd09cd65a300$var$insertMultiDragClones(true, rootEl);
                    dispatchSortableEvent('clone');
                    cancel();
                }
            }
        },
        showClone: function showClone(_ref4) {
            var cloneNowShown = _ref4.cloneNowShown, rootEl = _ref4.rootEl, cancel = _ref4.cancel;
            if (!this.isMultiDrag) return;
            $64afbd09cd65a300$var$insertMultiDragClones(false, rootEl);
            $64afbd09cd65a300$var$multiDragClones.forEach(function(clone) {
                $64afbd09cd65a300$var$css(clone, 'display', '');
            });
            cloneNowShown();
            $64afbd09cd65a300$var$clonesHidden = false;
            cancel();
        },
        hideClone: function hideClone(_ref5) {
            var _this = this;
            var sortable = _ref5.sortable, cloneNowHidden = _ref5.cloneNowHidden, cancel = _ref5.cancel;
            if (!this.isMultiDrag) return;
            $64afbd09cd65a300$var$multiDragClones.forEach(function(clone) {
                $64afbd09cd65a300$var$css(clone, 'display', 'none');
                if (_this.options.removeCloneOnHide && clone.parentNode) clone.parentNode.removeChild(clone);
            });
            cloneNowHidden();
            $64afbd09cd65a300$var$clonesHidden = true;
            cancel();
        },
        dragStartGlobal: function dragStartGlobal(_ref6) {
            var sortable = _ref6.sortable;
            if (!this.isMultiDrag && $64afbd09cd65a300$var$multiDragSortable) $64afbd09cd65a300$var$multiDragSortable.multiDrag._deselectMultiDrag();
            $64afbd09cd65a300$var$multiDragElements.forEach(function(multiDragElement) {
                multiDragElement.sortableIndex = $64afbd09cd65a300$var$index(multiDragElement);
            }); // Sort multi-drag elements
            $64afbd09cd65a300$var$multiDragElements = $64afbd09cd65a300$var$multiDragElements.sort(function(a, b) {
                return a.sortableIndex - b.sortableIndex;
            });
            $64afbd09cd65a300$var$dragStarted = true;
        },
        dragStarted: function dragStarted(_ref7) {
            var _this2 = this;
            var sortable = _ref7.sortable;
            if (!this.isMultiDrag) return;
            if (this.options.sort) {
                // Capture rects,
                // hide multi drag elements (by positioning them absolute),
                // set multi drag elements rects to dragRect,
                // show multi drag elements,
                // animate to rects,
                // unset rects & remove from DOM
                sortable.captureAnimationState();
                if (this.options.animation) {
                    $64afbd09cd65a300$var$multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === $64afbd09cd65a300$var$dragEl$1) return;
                        $64afbd09cd65a300$var$css(multiDragElement, 'position', 'absolute');
                    });
                    var dragRect = $64afbd09cd65a300$var$getRect($64afbd09cd65a300$var$dragEl$1, false, true, true);
                    $64afbd09cd65a300$var$multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === $64afbd09cd65a300$var$dragEl$1) return;
                        $64afbd09cd65a300$var$setRect(multiDragElement, dragRect);
                    });
                    $64afbd09cd65a300$var$folding = true;
                    $64afbd09cd65a300$var$initialFolding = true;
                }
            }
            sortable.animateAll(function() {
                $64afbd09cd65a300$var$folding = false;
                $64afbd09cd65a300$var$initialFolding = false;
                if (_this2.options.animation) $64afbd09cd65a300$var$multiDragElements.forEach(function(multiDragElement) {
                    $64afbd09cd65a300$var$unsetRect(multiDragElement);
                });
                 // Remove all auxiliary multidrag items from el, if sorting enabled
                if (_this2.options.sort) $64afbd09cd65a300$var$removeMultiDragElements();
            });
        },
        dragOver: function dragOver(_ref8) {
            var target = _ref8.target, completed = _ref8.completed, cancel = _ref8.cancel;
            if ($64afbd09cd65a300$var$folding && ~$64afbd09cd65a300$var$multiDragElements.indexOf(target)) {
                completed(false);
                cancel();
            }
        },
        revert: function revert(_ref9) {
            var fromSortable = _ref9.fromSortable, rootEl = _ref9.rootEl, sortable = _ref9.sortable, dragRect = _ref9.dragRect;
            if ($64afbd09cd65a300$var$multiDragElements.length > 1) {
                // Setup unfold animation
                $64afbd09cd65a300$var$multiDragElements.forEach(function(multiDragElement) {
                    sortable.addAnimationState({
                        target: multiDragElement,
                        rect: $64afbd09cd65a300$var$folding ? $64afbd09cd65a300$var$getRect(multiDragElement) : dragRect
                    });
                    $64afbd09cd65a300$var$unsetRect(multiDragElement);
                    multiDragElement.fromRect = dragRect;
                    fromSortable.removeAnimationState(multiDragElement);
                });
                $64afbd09cd65a300$var$folding = false;
                $64afbd09cd65a300$var$insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
            }
        },
        dragOverCompleted: function dragOverCompleted(_ref10) {
            var sortable = _ref10.sortable, isOwner = _ref10.isOwner, insertion = _ref10.insertion, activeSortable = _ref10.activeSortable, parentEl = _ref10.parentEl, putSortable = _ref10.putSortable;
            var options = this.options;
            if (insertion) {
                // Clones must be hidden before folding animation to capture dragRectAbsolute properly
                if (isOwner) activeSortable._hideClone();
                $64afbd09cd65a300$var$initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location
                if (options.animation && $64afbd09cd65a300$var$multiDragElements.length > 1 && ($64afbd09cd65a300$var$folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
                    // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
                    var dragRectAbsolute = $64afbd09cd65a300$var$getRect($64afbd09cd65a300$var$dragEl$1, false, true, true);
                    $64afbd09cd65a300$var$multiDragElements.forEach(function(multiDragElement) {
                        if (multiDragElement === $64afbd09cd65a300$var$dragEl$1) return;
                        $64afbd09cd65a300$var$setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
                        // while folding, and so that we can capture them again because old sortable will no longer be fromSortable
                        parentEl.appendChild(multiDragElement);
                    });
                    $64afbd09cd65a300$var$folding = true;
                } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out
                if (!isOwner) {
                    // Only remove if not folding (folding will remove them anyways)
                    if (!$64afbd09cd65a300$var$folding) $64afbd09cd65a300$var$removeMultiDragElements();
                    if ($64afbd09cd65a300$var$multiDragElements.length > 1) {
                        var clonesHiddenBefore = $64afbd09cd65a300$var$clonesHidden;
                        activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden
                        if (activeSortable.options.animation && !$64afbd09cd65a300$var$clonesHidden && clonesHiddenBefore) $64afbd09cd65a300$var$multiDragClones.forEach(function(clone) {
                            activeSortable.addAnimationState({
                                target: clone,
                                rect: $64afbd09cd65a300$var$clonesFromRect
                            });
                            clone.fromRect = $64afbd09cd65a300$var$clonesFromRect;
                            clone.thisAnimationDuration = null;
                        });
                    } else activeSortable._showClone(sortable);
                }
            }
        },
        dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
            var dragRect = _ref11.dragRect, isOwner = _ref11.isOwner, activeSortable = _ref11.activeSortable;
            $64afbd09cd65a300$var$multiDragElements.forEach(function(multiDragElement) {
                multiDragElement.thisAnimationDuration = null;
            });
            if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
                $64afbd09cd65a300$var$clonesFromRect = $64afbd09cd65a300$var$_extends({}, dragRect);
                var dragMatrix = $64afbd09cd65a300$var$matrix($64afbd09cd65a300$var$dragEl$1, true);
                $64afbd09cd65a300$var$clonesFromRect.top -= dragMatrix.f;
                $64afbd09cd65a300$var$clonesFromRect.left -= dragMatrix.e;
            }
        },
        dragOverAnimationComplete: function dragOverAnimationComplete() {
            if ($64afbd09cd65a300$var$folding) {
                $64afbd09cd65a300$var$folding = false;
                $64afbd09cd65a300$var$removeMultiDragElements();
            }
        },
        drop: function drop(_ref12) {
            var evt = _ref12.originalEvent, rootEl = _ref12.rootEl, parentEl = _ref12.parentEl, sortable = _ref12.sortable, dispatchSortableEvent = _ref12.dispatchSortableEvent, oldIndex = _ref12.oldIndex, putSortable = _ref12.putSortable;
            var toSortable = putSortable || this.sortable;
            if (!evt) return;
            var options = this.options, children = parentEl.children; // Multi-drag selection
            if (!$64afbd09cd65a300$var$dragStarted) {
                if (options.multiDragKey && !this.multiDragKeyDown) this._deselectMultiDrag();
                $64afbd09cd65a300$var$toggleClass($64afbd09cd65a300$var$dragEl$1, options.selectedClass, !~$64afbd09cd65a300$var$multiDragElements.indexOf($64afbd09cd65a300$var$dragEl$1));
                if (!~$64afbd09cd65a300$var$multiDragElements.indexOf($64afbd09cd65a300$var$dragEl$1)) {
                    $64afbd09cd65a300$var$multiDragElements.push($64afbd09cd65a300$var$dragEl$1);
                    $64afbd09cd65a300$var$dispatchEvent({
                        sortable: sortable,
                        rootEl: rootEl,
                        name: 'select',
                        targetEl: $64afbd09cd65a300$var$dragEl$1,
                        originalEvent: evt
                    }); // Modifier activated, select from last to dragEl
                    if (evt.shiftKey && $64afbd09cd65a300$var$lastMultiDragSelect && sortable.el.contains($64afbd09cd65a300$var$lastMultiDragSelect)) {
                        var lastIndex = $64afbd09cd65a300$var$index($64afbd09cd65a300$var$lastMultiDragSelect), currentIndex = $64afbd09cd65a300$var$index($64afbd09cd65a300$var$dragEl$1);
                        if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
                            // Must include lastMultiDragSelect (select it), in case modified selection from no selection
                            // (but previous selection existed)
                            var n, i;
                            if (currentIndex > lastIndex) {
                                i = lastIndex;
                                n = currentIndex;
                            } else {
                                i = currentIndex;
                                n = lastIndex + 1;
                            }
                            for(; i < n; i++){
                                if (~$64afbd09cd65a300$var$multiDragElements.indexOf(children[i])) continue;
                                $64afbd09cd65a300$var$toggleClass(children[i], options.selectedClass, true);
                                $64afbd09cd65a300$var$multiDragElements.push(children[i]);
                                $64afbd09cd65a300$var$dispatchEvent({
                                    sortable: sortable,
                                    rootEl: rootEl,
                                    name: 'select',
                                    targetEl: children[i],
                                    originalEvent: evt
                                });
                            }
                        }
                    } else $64afbd09cd65a300$var$lastMultiDragSelect = $64afbd09cd65a300$var$dragEl$1;
                    $64afbd09cd65a300$var$multiDragSortable = toSortable;
                } else {
                    $64afbd09cd65a300$var$multiDragElements.splice($64afbd09cd65a300$var$multiDragElements.indexOf($64afbd09cd65a300$var$dragEl$1), 1);
                    $64afbd09cd65a300$var$lastMultiDragSelect = null;
                    $64afbd09cd65a300$var$dispatchEvent({
                        sortable: sortable,
                        rootEl: rootEl,
                        name: 'deselect',
                        targetEl: $64afbd09cd65a300$var$dragEl$1,
                        originalEvent: evt
                    });
                }
            } // Multi-drag drop
            if ($64afbd09cd65a300$var$dragStarted && this.isMultiDrag) {
                $64afbd09cd65a300$var$folding = false; // Do not "unfold" after around dragEl if reverted
                if ((parentEl[$64afbd09cd65a300$var$expando].options.sort || parentEl !== rootEl) && $64afbd09cd65a300$var$multiDragElements.length > 1) {
                    var dragRect = $64afbd09cd65a300$var$getRect($64afbd09cd65a300$var$dragEl$1), multiDragIndex = $64afbd09cd65a300$var$index($64afbd09cd65a300$var$dragEl$1, ':not(.' + this.options.selectedClass + ')');
                    if (!$64afbd09cd65a300$var$initialFolding && options.animation) $64afbd09cd65a300$var$dragEl$1.thisAnimationDuration = null;
                    toSortable.captureAnimationState();
                    if (!$64afbd09cd65a300$var$initialFolding) {
                        if (options.animation) {
                            $64afbd09cd65a300$var$dragEl$1.fromRect = dragRect;
                            $64afbd09cd65a300$var$multiDragElements.forEach(function(multiDragElement) {
                                multiDragElement.thisAnimationDuration = null;
                                if (multiDragElement !== $64afbd09cd65a300$var$dragEl$1) {
                                    var rect = $64afbd09cd65a300$var$folding ? $64afbd09cd65a300$var$getRect(multiDragElement) : dragRect;
                                    multiDragElement.fromRect = rect; // Prepare unfold animation
                                    toSortable.addAnimationState({
                                        target: multiDragElement,
                                        rect: rect
                                    });
                                }
                            });
                        } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
                        // properly they must all be removed
                        $64afbd09cd65a300$var$removeMultiDragElements();
                        $64afbd09cd65a300$var$multiDragElements.forEach(function(multiDragElement) {
                            if (children[multiDragIndex]) parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
                            else parentEl.appendChild(multiDragElement);
                            multiDragIndex++;
                        }); // If initial folding is done, the elements may have changed position because they are now
                        // unfolding around dragEl, even though dragEl may not have his index changed, so update event
                        // must be fired here as Sortable will not.
                        if (oldIndex === $64afbd09cd65a300$var$index($64afbd09cd65a300$var$dragEl$1)) {
                            var update = false;
                            $64afbd09cd65a300$var$multiDragElements.forEach(function(multiDragElement) {
                                if (multiDragElement.sortableIndex !== $64afbd09cd65a300$var$index(multiDragElement)) {
                                    update = true;
                                    return;
                                }
                            });
                            if (update) dispatchSortableEvent('update');
                        }
                    } // Must be done after capturing individual rects (scroll bar)
                    $64afbd09cd65a300$var$multiDragElements.forEach(function(multiDragElement) {
                        $64afbd09cd65a300$var$unsetRect(multiDragElement);
                    });
                    toSortable.animateAll();
                }
                $64afbd09cd65a300$var$multiDragSortable = toSortable;
            } // Remove clones if necessary
            if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') $64afbd09cd65a300$var$multiDragClones.forEach(function(clone) {
                clone.parentNode && clone.parentNode.removeChild(clone);
            });
        },
        nullingGlobal: function nullingGlobal() {
            this.isMultiDrag = $64afbd09cd65a300$var$dragStarted = false;
            $64afbd09cd65a300$var$multiDragClones.length = 0;
        },
        destroyGlobal: function destroyGlobal() {
            this._deselectMultiDrag();
            $64afbd09cd65a300$var$off(document, 'pointerup', this._deselectMultiDrag);
            $64afbd09cd65a300$var$off(document, 'mouseup', this._deselectMultiDrag);
            $64afbd09cd65a300$var$off(document, 'touchend', this._deselectMultiDrag);
            $64afbd09cd65a300$var$off(document, 'keydown', this._checkKeyDown);
            $64afbd09cd65a300$var$off(document, 'keyup', this._checkKeyUp);
        },
        _deselectMultiDrag: function _deselectMultiDrag(evt) {
            if (typeof $64afbd09cd65a300$var$dragStarted !== "undefined" && $64afbd09cd65a300$var$dragStarted) return; // Only deselect if selection is in this sortable
            if ($64afbd09cd65a300$var$multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable
            if (evt && $64afbd09cd65a300$var$closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click
            if (evt && evt.button !== 0) return;
            while($64afbd09cd65a300$var$multiDragElements.length){
                var el = $64afbd09cd65a300$var$multiDragElements[0];
                $64afbd09cd65a300$var$toggleClass(el, this.options.selectedClass, false);
                $64afbd09cd65a300$var$multiDragElements.shift();
                $64afbd09cd65a300$var$dispatchEvent({
                    sortable: this.sortable,
                    rootEl: this.sortable.el,
                    name: 'deselect',
                    targetEl: el,
                    originalEvent: evt
                });
            }
        },
        _checkKeyDown: function _checkKeyDown(evt) {
            if (evt.key === this.options.multiDragKey) this.multiDragKeyDown = true;
        },
        _checkKeyUp: function _checkKeyUp(evt) {
            if (evt.key === this.options.multiDragKey) this.multiDragKeyDown = false;
        }
    };
    return $64afbd09cd65a300$var$_extends(MultiDrag, {
        // Static methods & properties
        pluginName: 'multiDrag',
        utils: {
            /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */ select: function select(el) {
                var sortable = el.parentNode[$64afbd09cd65a300$var$expando];
                if (!sortable || !sortable.options.multiDrag || ~$64afbd09cd65a300$var$multiDragElements.indexOf(el)) return;
                if ($64afbd09cd65a300$var$multiDragSortable && $64afbd09cd65a300$var$multiDragSortable !== sortable) {
                    $64afbd09cd65a300$var$multiDragSortable.multiDrag._deselectMultiDrag();
                    $64afbd09cd65a300$var$multiDragSortable = sortable;
                }
                $64afbd09cd65a300$var$toggleClass(el, sortable.options.selectedClass, true);
                $64afbd09cd65a300$var$multiDragElements.push(el);
            },
            /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */ deselect: function deselect(el) {
                var sortable = el.parentNode[$64afbd09cd65a300$var$expando], index = $64afbd09cd65a300$var$multiDragElements.indexOf(el);
                if (!sortable || !sortable.options.multiDrag || !~index) return;
                $64afbd09cd65a300$var$toggleClass(el, sortable.options.selectedClass, false);
                $64afbd09cd65a300$var$multiDragElements.splice(index, 1);
            }
        },
        eventProperties: function eventProperties() {
            var _this3 = this;
            var oldIndicies = [], newIndicies = [];
            $64afbd09cd65a300$var$multiDragElements.forEach(function(multiDragElement) {
                oldIndicies.push({
                    multiDragElement: multiDragElement,
                    index: multiDragElement.sortableIndex
                }); // multiDragElements will already be sorted if folding
                var newIndex;
                if ($64afbd09cd65a300$var$folding && multiDragElement !== $64afbd09cd65a300$var$dragEl$1) newIndex = -1;
                else if ($64afbd09cd65a300$var$folding) newIndex = $64afbd09cd65a300$var$index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
                else newIndex = $64afbd09cd65a300$var$index(multiDragElement);
                newIndicies.push({
                    multiDragElement: multiDragElement,
                    index: newIndex
                });
            });
            return {
                items: $64afbd09cd65a300$var$_toConsumableArray($64afbd09cd65a300$var$multiDragElements),
                clones: [].concat($64afbd09cd65a300$var$multiDragClones),
                oldIndicies: oldIndicies,
                newIndicies: newIndicies
            };
        },
        optionListeners: {
            multiDragKey: function multiDragKey(key) {
                key = key.toLowerCase();
                if (key === 'ctrl') key = 'Control';
                else if (key.length > 1) key = key.charAt(0).toUpperCase() + key.substr(1);
                return key;
            }
        }
    });
}
function $64afbd09cd65a300$var$insertMultiDragElements(clonesInserted, rootEl) {
    $64afbd09cd65a300$var$multiDragElements.forEach(function(multiDragElement, i) {
        var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];
        if (target) rootEl.insertBefore(multiDragElement, target);
        else rootEl.appendChild(multiDragElement);
    });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */ function $64afbd09cd65a300$var$insertMultiDragClones(elementsInserted, rootEl) {
    $64afbd09cd65a300$var$multiDragClones.forEach(function(clone, i) {
        var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];
        if (target) rootEl.insertBefore(clone, target);
        else rootEl.appendChild(clone);
    });
}
function $64afbd09cd65a300$var$removeMultiDragElements() {
    $64afbd09cd65a300$var$multiDragElements.forEach(function(multiDragElement) {
        if (multiDragElement === $64afbd09cd65a300$var$dragEl$1) return;
        multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
    });
}
$64afbd09cd65a300$export$31b3ca70d8f57423.mount(new $64afbd09cd65a300$var$AutoScrollPlugin());
$64afbd09cd65a300$export$31b3ca70d8f57423.mount($64afbd09cd65a300$var$Remove, $64afbd09cd65a300$var$Revert);
var $64afbd09cd65a300$export$2e2bcd8739ae039 = $64afbd09cd65a300$export$31b3ca70d8f57423;


var $0648b347057451f2$exports = {};
$0648b347057451f2$exports = ":host {\n  --tabgroup-background: #e7eaed;\n  --tab-font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  --tab-font-size: 13px;\n  --tab-background: #e7eaed;\n  --tab-color: #696a6c;\n  --tab-border-color: #dadce0;\n  --tab-transition: background-color 200ms ease-out, color 200ms ease-out;\n  --tab-cursor: pointer;\n  --tab-active-color: currentcolor;\n  --tab-active-background: #fff;\n  --tag-hover-color: currentcolor;\n  --tag-hover-background: #f1f3f4;\n  --button-font-size: 15px;\n  --button-background: none;\n  --button-color: #696a6c;\n  --button-hover-background: #dadce0;\n  --button-hover-color: #383a3e;\n  --button-border-radius: 50%;\n  --button-cursor: pointer;\n  --badge-background: #383a3e;\n  --badge-color: #fff;\n  --close-button-visibility: visible;\n}\n\nwebview {\n  visibility: hidden;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\nwebview.visible {\n  visibility: visible;\n}\n\n.etabs {\n  font-family: var(--tab-font-family);\n  text-rendering: optimizelegibility;\n  font-feature-settings: \"liga\", \"clig\", \"kern\";\n}\n\n.nav {\n  background: var(--tabgroup-background);\n  box-shadow: inset 0 -1px var(--tab-border-color);\n  border-top: 1px solid var(--tab-border-color);\n  font-size: var(--tab-font-size);\n  width: 100%;\n  height: 32px;\n  cursor: default;\n  -webkit-user-select: none;\n  user-select: none;\n  display: none;\n}\n\n.nav.visible {\n  display: flex;\n}\n\n.tabs {\n  height: 100%;\n}\n\n.tab {\n  background: var(--tab-background);\n  box-shadow: inset 0 -1px var(--tab-border-color);\n  color: var(--tab-color);\n  cursor: var(--tab-cursor);\n  font-size: var(--tab-font-size);\n  transition: var(--tab-transition);\n  box-sizing: border-box;\n  height: 100%;\n  align-items: center;\n  padding: 5px 9px;\n  display: none;\n  position: relative;\n}\n\n.tab:first-child {\n  border-left: none;\n}\n\n.tab.visible {\n  display: inline-flex;\n}\n\n.tab.active {\n  color: var(--tab-active-color);\n  background: var(--tab-active-background);\n  border-left: 1px solid var(--tab-border-color);\n  border-right: 1px solid var(--tab-border-color);\n  box-shadow: none;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.tab.active:last-child {\n  border-right: none;\n}\n\n.tab.visible:not(.active) + .tab.visible:not(.active) {\n  border-left: 1px solid var(--tab-border-color);\n  padding-left: 8px;\n}\n\n.tab:not(.active):hover {\n  background: var(--tab-hover-background);\n  color: var(--tab-hover-color);\n}\n\n.tab-badge {\n  background: var(--badge-background);\n  color: var(--badge-color);\n  text-align: center;\n  border-radius: 5px;\n  margin-left: 5px;\n  padding: 1px 4px;\n  font-size: 8px;\n  font-weight: bold;\n  line-height: 1.2;\n}\n\n.tab-badge.hidden {\n  display: none;\n}\n\n.tab-icon {\n  height: 16px;\n  display: inline-block;\n}\n\n.tab-icon img {\n  max-width: 16px;\n  max-height: 16px;\n}\n\n.tab-title, .tab-close {\n  margin-left: 10px;\n  display: inline-block;\n}\n\n.tab-close button {\n  background: var(--button-background);\n  border-radius: var(--button-border-radius);\n  color: var(--button-color);\n  cursor: var(--button-cursor);\n  font-size: var(--button-font-size);\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  visibility: var(--close-button-visibility);\n  border: none;\n  padding: 1px 0 0;\n  display: inline-block;\n}\n\n.tab.active .tab-close button {\n  visibility: visible;\n}\n\n.tab-close button:hover {\n  color: var(--button-hover-color);\n  background: var(--button-hover-background);\n}\n\n.buttons {\n  border-left: 1px solid var(--tab-border-color);\n  padding: 5px;\n  display: flex;\n}\n\n.buttons button {\n  color: var(--button-color);\n  background: var(--button-background);\n  border-radius: var(--button-border-radius);\n  cursor: var(--button-cursor);\n  font-size: var(--button-font-size);\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  border: none;\n  margin: 0;\n  padding: 1px 0 0;\n  font-family: inherit;\n  line-height: 1;\n  display: block;\n}\n\n.buttons button:hover {\n  color: var(--button-hover-color);\n  background: var(--button-hover-background);\n}\n\n.views {\n  height: calc(100vh - 33px);\n  position: relative;\n}\n\n";


if (!document) throw Error("electron-tabs module must be called in renderer process");
const $eda442ba39f881a8$var$CLASSNAMES = {
    ROOT: "etabs",
    NAV: "nav",
    TABS: "tabs",
    TAB: "tab",
    BUTTONS: "buttons",
    VIEWS: "views",
    VIEW: "view"
};
function $eda442ba39f881a8$var$emit(emitter, type, args) {
    if (type === "ready") emitter.isReady = true;
    emitter.dispatchEvent(new CustomEvent(type, {
        detail: args
    }));
}
function $eda442ba39f881a8$var$on(emitter, type, fn, options) {
    if (type === "ready" && emitter.isReady === true) fn.apply(emitter, [
        emitter
    ]);
    emitter.addEventListener(type, (e)=>fn.apply(emitter, e.detail)
    , options);
}
class $eda442ba39f881a8$var$TabGroup extends HTMLElement {
    constructor(){
        super();
        this.isReady = false;
        // Options
        this.options = {
            closeButtonText: this.getAttribute("close-button-text") || "&#215;",
            defaultTab: {
                title: "New Tab",
                active: true
            },
            newTabButton: !!this.getAttribute("new-tab-button") === true || false,
            newTabButtonText: this.getAttribute("new-tab-button-text") || "&#65291;",
            sortable: !!this.getAttribute("sortable") === true || false,
            visibilityThreshold: Number(this.getAttribute("visibility-threshold")) || 0
        };
        this.tabs = [];
        this.newTabId = 0;
        this.createComponent();
        this.initVisibility();
        if (this.options.sortable) this.initSortable();
        this.emit("ready", this);
    }
    emit(type, ...args) {
        return $eda442ba39f881a8$var$emit(this, type, args);
    }
    on(type, fn) {
        return $eda442ba39f881a8$var$on(this, type, fn);
    }
    once(type, fn) {
        return $eda442ba39f881a8$var$on(this, type, fn, {
            once: true
        });
    }
    connectedCallback() {
        // Support custom styles
        const style = this.querySelector("style");
        if (style) this.shadow.appendChild(style);
    }
    createComponent() {
        const shadow = this.attachShadow({
            mode: "open"
        });
        this.shadow = shadow;
        const wrapper = document.createElement("div");
        wrapper.setAttribute("class", $eda442ba39f881a8$var$CLASSNAMES.ROOT);
        const tabgroup = document.createElement("nav");
        tabgroup.setAttribute("class", $eda442ba39f881a8$var$CLASSNAMES.NAV);
        wrapper.appendChild(tabgroup);
        const tabContainer = document.createElement("div");
        tabContainer.setAttribute("class", $eda442ba39f881a8$var$CLASSNAMES.TABS);
        tabgroup.appendChild(tabContainer);
        this.tabContainer = tabContainer;
        const buttonContainer = document.createElement("div");
        buttonContainer.setAttribute("class", $eda442ba39f881a8$var$CLASSNAMES.BUTTONS);
        tabgroup.appendChild(buttonContainer);
        this.buttonContainer = buttonContainer;
        if (this.options.newTabButton) {
            const button = this.buttonContainer.appendChild(document.createElement("button"));
            button.innerHTML = this.options.newTabButtonText;
            button.addEventListener("click", this.addTab.bind(this, undefined), false);
        }
        const viewContainer = document.createElement("div");
        viewContainer.setAttribute("class", $eda442ba39f881a8$var$CLASSNAMES.VIEWS);
        wrapper.appendChild(viewContainer);
        this.viewContainer = viewContainer;
        const style = document.createElement("style");
        style.textContent = (/*@__PURE__*/$parcel$interopDefault($0648b347057451f2$exports));
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }
    initVisibility() {
        function toggleTabsVisibility(tab, tabGroup) {
            const visibilityThreshold = tabGroup.options.visibilityThreshold;
            const el = tabGroup.tabContainer.parentElement;
            if (tabGroup.tabs.length >= visibilityThreshold) el.classList.add("visible");
            else el.classList.remove("visible");
        }
        this.on("tab-added", toggleTabsVisibility);
        this.on("tab-removed", toggleTabsVisibility);
        toggleTabsVisibility(null, this);
    }
    initSortable() {
        const createNewSortable = ()=>{
            const options = Object.assign({
                direction: "horizontal",
                animation: 150,
                swapThreshold: 0.20
            }, this.options.sortableOptions);
            new $64afbd09cd65a300$export$2e2bcd8739ae039(this.tabContainer, options);
        };
        if ($64afbd09cd65a300$export$2e2bcd8739ae039) createNewSortable();
        else document.addEventListener("DOMContentLoaded", createNewSortable);
    }
    setDefaultTab(tab) {
        this.options.defaultTab = tab;
    }
    addTab(args = this.options.defaultTab) {
        if (typeof args === "function") args = args(this);
        const id = this.newTabId;
        this.newTabId++;
        const tab = new $eda442ba39f881a8$var$Tab(this, id, args);
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
        const fromRight = position < 0;
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
    }
    getActiveTab() {
        if (this.tabs.length === 0) return null;
        return this.tabs[0];
    }
    setActiveTab(tab) {
        this.removeTab(tab);
        this.tabs.unshift(tab);
        this.emit("tab-active", tab, this);
    }
    removeTab(tab, triggerEvent = false) {
        const id = tab.id;
        const index = this.tabs.findIndex((t)=>t.id === id
        );
        this.tabs.splice(index, 1);
        if (triggerEvent) this.emit("tab-removed", tab, this);
    }
    activateRecentTab() {
        if (this.tabs.length > 0) this.tabs[0].activate();
    }
}
class $eda442ba39f881a8$var$Tab extends EventTarget {
    constructor(tabGroup, id, args){
        super();
        this.badge = args.badge;
        this.closable = args.closable === false ? false : true;
        this.icon = args.icon;
        this.iconURL = args.iconURL;
        this.id = id;
        this.isClosed = false;
        this.isReady = false;
        this.spans = {};
        this.tabGroup = tabGroup;
        this.title = args.title;
        this.webviewAttributes = args.webviewAttributes || {};
        this.webviewAttributes.src = args.src;
        this.initTab();
        this.initWebview();
        if (args.visible !== false) this.show();
        if (typeof args.ready === "function") args.ready(this);
        else this.emit("ready", this);
    }
    emit(type, ...args) {
        return $eda442ba39f881a8$var$emit(this, type, args);
    }
    on(type, fn) {
        return $eda442ba39f881a8$var$on(this, type, fn);
    }
    once(type, fn) {
        return $eda442ba39f881a8$var$on(this, type, fn, {
            once: true
        });
    }
    initTab() {
        const tab = this.element = document.createElement("div");
        tab.classList.add($eda442ba39f881a8$var$CLASSNAMES.TAB);
        for (let el of [
            "icon",
            "title",
            "badge",
            "close"
        ]){
            const span = tab.appendChild(document.createElement("span"));
            span.classList.add(`${$eda442ba39f881a8$var$CLASSNAMES.TAB}-${el}`);
            this.spans[el] = span;
        }
        this.setTitle(this.title);
        this.setBadge(this.badge);
        this.setIcon(this.iconURL, this.icon);
        this.initTabCloseButton();
        this.initTabClickHandler();
        this.tabGroup.tabContainer.appendChild(this.element);
    }
    initTabCloseButton() {
        const container = this.spans.close;
        if (this.closable) {
            const button = container.appendChild(document.createElement("button"));
            button.innerHTML = this.tabGroup.options.closeButtonText;
            button.addEventListener("click", this.close.bind(this, false), false);
        }
    }
    initTabClickHandler() {
        // Mouse up
        const tabClickHandler = function(e) {
            if (this.isClosed) return;
            if (e.which === 2) this.close();
        };
        this.element.addEventListener("mouseup", tabClickHandler.bind(this), false);
        // Mouse down
        const tabMouseDownHandler = function(e) {
            if (this.isClosed) return;
            if (e.which === 1) {
                if (e.target.matches("button")) return;
                this.activate();
            }
        };
        this.element.addEventListener("mousedown", tabMouseDownHandler.bind(this), false);
    }
    initWebview() {
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
        this.webview.classList.add($eda442ba39f881a8$var$CLASSNAMES.VIEW);
        if (this.webviewAttributes) {
            const attrs = this.webviewAttributes;
            for(let key in attrs){
                const attr = attrs[key];
                if (attr === false) continue;
                this.webview.setAttribute(key, attr);
            }
        }
        this.tabGroup.viewContainer.appendChild(this.webview);
    }
    setTitle(title) {
        if (this.isClosed) return;
        const span = this.spans.title;
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
        const span = this.spans.badge;
        this.badge = badge;
        if (badge) {
            span.innerHTML = badge.text;
            span.classList.add(badge.classname);
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
        const span = this.spans.icon;
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
        const tabContainer = this.tabGroup.tabContainer;
        const length = tabContainer.childElementCount;
        const thisPosition = this.getPosition();
        const tabs = Array.from(tabContainer.children);
        tabs.splice(thisPosition, 1);
        if (newPosition < 0) {
            newPosition += length;
            if (newPosition < 0) newPosition = 0;
        }
        if (newPosition < length) tabContainer.insertBefore(this.element, tabs[newPosition]);
        else tabContainer.appendChild(this.element);
        return this;
    }
    getPosition(fromRight = false) {
        let position = 0;
        let tab = this.element;
        while((tab = tab.previousSibling) != null)position++;
        if (fromRight === true) position -= this.tabGroup.tabContainer.childElementCount;
        return position;
    }
    activate() {
        if (this.isClosed) return;
        const activeTab = this.tabGroup.getActiveTab();
        if (activeTab) {
            activeTab.element.classList.remove("active");
            activeTab.webview.classList.remove("visible");
            activeTab.emit("inactive", activeTab);
        }
        this.tabGroup.setActiveTab(this);
        this.element.classList.add("active");
        this.webview.classList.add("visible");
        this.webview.focus();
        this.emit("active", this);
        return this;
    }
    show(flag = true) {
        if (this.isClosed) return;
        if (flag) {
            this.element.classList.add("visible");
            this.emit("visible", this);
        } else {
            this.element.classList.remove("visible");
            this.emit("hidden", this);
        }
        return this;
    }
    hide() {
        return this.show(false);
    }
    hasClass(classname) {
        return this.element.classList.contains(classname);
    }
    close(force) {
        const abortController = new AbortController();
        const abort = ()=>abortController.abort()
        ;
        this.emit("closing", this, abort);
        const abortSignal = abortController.signal;
        if (this.isClosed || !this.closable && !force || abortSignal.aborted) return;
        this.isClosed = true;
        const tabGroup = this.tabGroup;
        tabGroup.tabContainer.removeChild(this.element);
        tabGroup.viewContainer.removeChild(this.webview);
        const activeTab = this.tabGroup.getActiveTab();
        tabGroup.removeTab(this, true);
        this.emit("close", this);
        if (activeTab.id === this.id) tabGroup.activateRecentTab();
    }
}
customElements.define("tab-group", $eda442ba39f881a8$var$TabGroup);


//# sourceMappingURL=electron-tabs.js.map
