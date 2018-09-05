(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apointment-apointment-module"],{

/***/ "./node_modules/@angular/http/fesm5/http.js":
/*!**************************************************!*\
  !*** ./node_modules/@angular/http/fesm5/http.js ***!
  \**************************************************/
/*! exports provided: ɵangular_packages_http_http_e, ɵangular_packages_http_http_f, ɵangular_packages_http_http_a, ɵangular_packages_http_http_b, ɵangular_packages_http_http_c, BrowserXhr, JSONPBackend, JSONPConnection, CookieXSRFStrategy, XHRBackend, XHRConnection, BaseRequestOptions, RequestOptions, BaseResponseOptions, ResponseOptions, ReadyState, RequestMethod, ResponseContentType, ResponseType, Headers, Http, Jsonp, HttpModule, JsonpModule, Connection, ConnectionBackend, XSRFStrategy, Request, Response, QueryEncoder, URLSearchParams, VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_e", function() { return BrowserJsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_f", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_a", function() { return _createDefaultCookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_b", function() { return httpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_c", function() { return jsonpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserXhr", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPBackend", function() { return JSONPBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPConnection", function() { return JSONPConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieXSRFStrategy", function() { return CookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRBackend", function() { return XHRBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRConnection", function() { return XHRConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRequestOptions", function() { return BaseRequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOptions", function() { return RequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResponseOptions", function() { return BaseResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseOptions", function() { return ResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyState", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMethod", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseContentType", function() { return ResponseContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseType", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jsonp", function() { return Jsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpModule", function() { return JsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionBackend", function() { return ConnectionBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSRFStrategy", function() { return XSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEncoder", function() { return QueryEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLSearchParams", function() { return URLSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license Angular v6.1.2
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * @deprecated see https://angular.io/guide/http
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
    BrowserXhr.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    BrowserXhr.ctorParameters = function () { return []; };
    return BrowserXhr;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Supported http methods.
 * @deprecated see https://angular.io/guide/http
 */
var RequestMethod;
(function (RequestMethod) {
    RequestMethod[RequestMethod["Get"] = 0] = "Get";
    RequestMethod[RequestMethod["Post"] = 1] = "Post";
    RequestMethod[RequestMethod["Put"] = 2] = "Put";
    RequestMethod[RequestMethod["Delete"] = 3] = "Delete";
    RequestMethod[RequestMethod["Options"] = 4] = "Options";
    RequestMethod[RequestMethod["Head"] = 5] = "Head";
    RequestMethod[RequestMethod["Patch"] = 6] = "Patch";
})(RequestMethod || (RequestMethod = {}));
/**
 * All possible states in which a connection can be, based on
 * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
 * additional "CANCELLED" state.
 * @deprecated see https://angular.io/guide/http
 */
var ReadyState;
(function (ReadyState) {
    ReadyState[ReadyState["Unsent"] = 0] = "Unsent";
    ReadyState[ReadyState["Open"] = 1] = "Open";
    ReadyState[ReadyState["HeadersReceived"] = 2] = "HeadersReceived";
    ReadyState[ReadyState["Loading"] = 3] = "Loading";
    ReadyState[ReadyState["Done"] = 4] = "Done";
    ReadyState[ReadyState["Cancelled"] = 5] = "Cancelled";
})(ReadyState || (ReadyState = {}));
/**
 * Acceptable response types to be associated with a {@link Response}, based on
 * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
 * @deprecated see https://angular.io/guide/http
 */
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["Basic"] = 0] = "Basic";
    ResponseType[ResponseType["Cors"] = 1] = "Cors";
    ResponseType[ResponseType["Default"] = 2] = "Default";
    ResponseType[ResponseType["Error"] = 3] = "Error";
    ResponseType[ResponseType["Opaque"] = 4] = "Opaque";
})(ResponseType || (ResponseType = {}));
/**
 * Supported content type to be automatically associated with a {@link Request}.
 * @deprecated see https://angular.io/guide/http
 */
var ContentType;
(function (ContentType) {
    ContentType[ContentType["NONE"] = 0] = "NONE";
    ContentType[ContentType["JSON"] = 1] = "JSON";
    ContentType[ContentType["FORM"] = 2] = "FORM";
    ContentType[ContentType["FORM_DATA"] = 3] = "FORM_DATA";
    ContentType[ContentType["TEXT"] = 4] = "TEXT";
    ContentType[ContentType["BLOB"] = 5] = "BLOB";
    ContentType[ContentType["ARRAY_BUFFER"] = 6] = "ARRAY_BUFFER";
})(ContentType || (ContentType = {}));
/**
 * Define which buffer to use to store the response
 * @deprecated see https://angular.io/guide/http
 */
var ResponseContentType;
(function (ResponseContentType) {
    ResponseContentType[ResponseContentType["Text"] = 0] = "Text";
    ResponseContentType[ResponseContentType["Json"] = 1] = "Json";
    ResponseContentType[ResponseContentType["ArrayBuffer"] = 2] = "ArrayBuffer";
    ResponseContentType[ResponseContentType["Blob"] = 3] = "Blob";
})(ResponseContentType || (ResponseContentType = {}));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * ### Example
 *
 * ```
 * import {Headers} from '@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var Headers = /** @class */ (function () {
    // TODO(vicb): any -> string|string[]
    function Headers(headers) {
        var _this = this;
        /** @internal header names are lower case */
        this._headers = new Map();
        /** @internal map lower case names to actual names */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     */
    Headers.fromResponseHeaderString = function (headersString) {
        var headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var index = line.indexOf(':');
            if (index > 0) {
                var name_1 = line.slice(0, index);
                var value = line.slice(index + 1).trim();
                headers.set(name_1, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     */
    Headers.prototype.append = function (name, value) {
        var values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     */
    Headers.prototype.delete = function (name) {
        var lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    Headers.prototype.forEach = function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     */
    Headers.prototype.get = function (name) {
        var values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     */
    Headers.prototype.has = function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     */
    Headers.prototype.keys = function () { return Array.from(this._normalizedNames.values()); };
    /**
     * Sets or overrides header value for given name.
     */
    Headers.prototype.set = function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     */
    Headers.prototype.values = function () { return Array.from(this._headers.values()); };
    /**
     * Returns string of all headers.
     */
    // TODO(vicb): returns {[name: string]: string[]}
    Headers.prototype.toJSON = function () {
        var _this = this;
        var serialized = {};
        this._headers.forEach(function (values, name) {
            var split = [];
            values.forEach(function (v) { return split.push.apply(split, Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__spread"])(v.split(','))); });
            serialized[_this._normalizedNames.get(name)] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     */
    Headers.prototype.getAll = function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) || null : null;
    };
    /**
     * This method is not implemented.
     */
    Headers.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); };
    Headers.prototype.mayBeSetNormalizedName = function (name) {
        var lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a response options object to be optionally provided when instantiating a
 * {@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {@link Response Responses} for
 * mock responses (see {@link MockBackend}).
 *
 * ### Example
 *
 * ```typescript
 * import {ResponseOptions, Response} from '@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var ResponseOptions = /** @class */ (function () {
    function ResponseOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var body = opts.body, status = opts.status, headers = opts.headers, statusText = opts.statusText, type = opts.type, url = opts.url;
        this.body = body != null ? body : null;
        this.status = status != null ? status : null;
        this.headers = headers != null ? headers : null;
        this.statusText = statusText != null ? statusText : null;
        this.type = type != null ? type : null;
        this.url = url != null ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example
     *
     * ```typescript
     * import {ResponseOptions, Response} from '@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     */
    ResponseOptions.prototype.merge = function (options) {
        return new ResponseOptions({
            body: options && options.body != null ? options.body : this.body,
            status: options && options.status != null ? options.status : this.status,
            headers: options && options.headers != null ? options.headers : this.headers,
            statusText: options && options.statusText != null ? options.statusText : this.statusText,
            type: options && options.type != null ? options.type : this.type,
            url: options && options.url != null ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
/**
 * Subclass of {@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link ResponseOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create {@link Response Responses}.
 *
 * ### Example
 *
 * ```typescript
 * import {provide} from '@angular/core';
 * import {bootstrap} from '@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {@link Response}
 * object.
 *
 * ### Example
 *
 * ```
 * import {BaseResponseOptions, Response} from '@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var BaseResponseOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(BaseResponseOptions, _super);
    function BaseResponseOptions() {
        return _super.call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() }) || this;
    }
    BaseResponseOptions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    BaseResponseOptions.ctorParameters = function () { return []; };
    return BaseResponseOptions;
}(ResponseOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {@link Request}.
 *
 * @deprecated see https://angular.io/guide/http
 */
var ConnectionBackend = /** @class */ (function () {
    function ConnectionBackend() {
    }
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * @deprecated see https://angular.io/guide/http
 */
var Connection = /** @class */ (function () {
    function Connection() {
    }
    return Connection;
}());
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * @deprecated see https://angular.io/guide/http
 */
var XSRFStrategy = /** @class */ (function () {
    function XSRFStrategy() {
    }
    return XSRFStrategy;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return RequestMethod.Get;
        case 'POST':
            return RequestMethod.Post;
        case 'PUT':
            return RequestMethod.Put;
        case 'DELETE':
            return RequestMethod.Delete;
        case 'OPTIONS':
            return RequestMethod.Options;
        case 'HEAD':
            return RequestMethod.Head;
        case 'PATCH':
            return RequestMethod.Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var isSuccess = function (status) { return (status >= 200 && status < 300); };
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
function stringToArrayBuffer(input) {
    var view = new Uint16Array(input.length);
    for (var i = 0, strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var map = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__read"])(eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], 2), key = _a[0], val = _a[1];
            var list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * @deprecated see https://angular.io/guide/http
 **/
var QueryEncoder = /** @class */ (function () {
    function QueryEncoder() {
    }
    QueryEncoder.prototype.encodeKey = function (k) { return standardEncoding(k); };
    QueryEncoder.prototype.encodeValue = function (v) { return standardEncoding(v); };
    return QueryEncoder;
}());
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * @deprecated see https://angular.io/guide/http
 */
var URLSearchParams = /** @class */ (function () {
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    URLSearchParams.prototype.clone = function () {
        var clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
    URLSearchParams.prototype.get = function (param) {
        var storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
    URLSearchParams.prototype.set = function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.setAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.append = function (param, val) {
        if (val === void 0 || val === null)
            return;
        var list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.appendAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.replaceAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.toString = function () {
        var _this = this;
        var paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) { return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v)); });
        });
        return paramsList.join('&');
    };
    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * HTTP request body used by both {@link Request} and {@link Response}
 * https://fetch.spec.whatwg.org/#body
 */
var Body = /** @class */ (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     */
    Body.prototype.json = function () {
        if (typeof this._body === 'string') {
            return JSON.parse(this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     */
    Body.prototype.text = function (encodingHint) {
        if (encodingHint === void 0) { encodingHint = 'legacy'; }
        if (this._body instanceof URLSearchParams) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            switch (encodingHint) {
                case 'legacy':
                    return String.fromCharCode.apply(null, new Uint16Array(this._body));
                case 'iso-8859':
                    return String.fromCharCode.apply(null, new Uint8Array(this._body));
                default:
                    throw new Error("Invalid value for encodingHint: " + encodingHint);
            }
        }
        if (this._body == null) {
            return '';
        }
        if (typeof this._body === 'object') {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     */
    Body.prototype.arrayBuffer = function () {
        if (this._body instanceof ArrayBuffer) {
            return this._body;
        }
        return stringToArrayBuffer(this.text());
    };
    /**
      * Returns the request's body as a Blob, assuming that body exists.
      */
    Body.prototype.blob = function () {
        if (this._body instanceof Blob) {
            return this._body;
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * @deprecated see https://angular.io/guide/http
 */
var Response = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(Response, _super);
    function Response(responseOptions) {
        var _this = _super.call(this) || this;
        _this._body = responseOptions.body;
        _this.status = responseOptions.status;
        _this.ok = (_this.status >= 200 && _this.status <= 299);
        _this.statusText = responseOptions.statusText;
        _this.headers = responseOptions.headers;
        _this.type = responseOptions.type;
        _this.url = responseOptions.url;
        return _this;
    }
    Response.prototype.toString = function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(Body));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _nextRequestId = 0;
var JSONP_HOME = '__ng_jsonp__';
var _jsonpConnections = null;
function _getJsonpConnections() {
    var w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
        _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
// Make sure not to evaluate this in a non-browser environment!
var BrowserJsonp = /** @class */ (function () {
    function BrowserJsonp() {
    }
    // Construct a <script> element with the specified URL
    BrowserJsonp.prototype.build = function (url) {
        var node = document.createElement('script');
        node.src = url;
        return node;
    };
    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
    BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
        var connections = _getJsonpConnections();
        connections[id] = connection;
    };
    BrowserJsonp.prototype.removeConnection = function (id) {
        var connections = _getJsonpConnections();
        connections[id] = null;
    };
    // Attach the <script> element to the DOM
    BrowserJsonp.prototype.send = function (node) { document.body.appendChild((node)); };
    // Remove <script> element from the DOM
    BrowserJsonp.prototype.cleanup = function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild((node));
        }
    };
    BrowserJsonp.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    return BrowserJsonp;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Base class for an in-flight JSONP request.
 *
 * @deprecated see https://angular.io/guide/http
 */
var JSONPConnection = /** @class */ (function () {
    /** @internal */
    function JSONPConnection(req, _dom, baseResponseOptions) {
        var _this = this;
        this._dom = _dom;
        this.baseResponseOptions = baseResponseOptions;
        this._finished = false;
        if (req.method !== RequestMethod.Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            _this.readyState = ReadyState.Loading;
            var id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var callback = _dom.requestCallback(_this._id);
            var url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var script = _this._script = _dom.build(url);
            var onLoad = function (event) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new Response(responseOptions_1));
                    return;
                }
                var responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new Response(responseOptions));
                responseObserver.complete();
            };
            var onError = function (error) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                var responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = ReadyState.Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     */
    JSONPConnection.prototype.finished = function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === ReadyState.Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection;
}());
/**
 * A {@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * @deprecated see https://angular.io/guide/http
 */
var JSONPBackend = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(JSONPBackend, _super);
    /** @internal */
    function JSONPBackend(_browserJSONP, _baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._browserJSONP = _browserJSONP;
        _this._baseResponseOptions = _baseResponseOptions;
        return _this;
    }
    JSONPBackend.prototype.createConnection = function (request) {
        return new JSONPConnection(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    JSONPBackend.ctorParameters = function () { return [
        { type: BrowserJsonp },
        { type: ResponseOptions }
    ]; };
    return JSONPBackend;
}(ConnectionBackend));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {@link MockConnection} may be interacted with in tests.
 *
 * @deprecated see https://angular.io/guide/http
 */
var XHRConnection = /** @class */ (function () {
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            var _xhr = browserXHR.build();
            _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
            if (req.withCredentials != null) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var onLoad = function () {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = _xhr.status === 1223 ? 204 : _xhr.status;
                var body = null;
                // HTTP 204 means no content
                if (status !== 204) {
                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                    // response/responseType properties were introduced in ResourceLoader Level2 spec
                    // (supported by IE10)
                    body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                    // Implicitly strip a potential XSSI prefix.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
                // IE 9 does not provide the way to get URL of response
                var url = getResponseURL(_xhr) || req.url;
                var statusText = _xhr.statusText || 'OK';
                var responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var response = new Response(responseOptions);
                response.ok = isSuccess(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var onError = function (err) {
                var responseOptions = new ResponseOptions({
                    body: err,
                    type: ResponseType.Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (req.headers == null) {
                req.headers = new Headers();
            }
            if (!req.headers.has('Accept')) {
                req.headers.append('Accept', 'application/json, text/plain, */*');
            }
            req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
            // Select the correct buffer type to store the response
            if (req.responseType != null && _xhr.responseType != null) {
                switch (req.responseType) {
                    case ResponseContentType.ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case ResponseContentType.Json:
                        _xhr.responseType = 'json';
                        break;
                    case ResponseContentType.Text:
                        _xhr.responseType = 'text';
                        break;
                    case ResponseContentType.Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    XHRConnection.prototype.setDetectedContentType = function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
        // Skip if a custom Content-Type header is provided
        if (req.headers != null && req.headers.get('Content-Type') != null) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case ContentType.NONE:
                break;
            case ContentType.JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case ContentType.FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case ContentType.TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case ContentType.BLOB:
                var blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * @deprecated see https://angular.io/guide/http
 */
var CookieXSRFStrategy = /** @class */ (function () {
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    CookieXSRFStrategy.prototype.configureRequest = function (req) {
        var xsrfToken = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["ɵgetDOM"])().getCookie(this._cookieName);
        if (xsrfToken) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
/**
 * Creates {@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '@angular/http';
 * @Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * @deprecated see https://angular.io/guide/http
 */
var XHRBackend = /** @class */ (function () {
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    XHRBackend.prototype.createConnection = function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    XHRBackend.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    XHRBackend.ctorParameters = function () { return [
        { type: BrowserXhr },
        { type: ResponseOptions },
        { type: XSRFStrategy }
    ]; };
    return XHRBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a request options object to be optionally provided when instantiating a
 * {@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * const req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var RequestOptions = /** @class */ (function () {
    // TODO(Dzmitry): remove search when this.search is removed
    function RequestOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var method = opts.method, headers = opts.headers, body = opts.body, url = opts.url, search = opts.search, params = opts.params, withCredentials = opts.withCredentials, responseType = opts.responseType;
        this.method = method != null ? normalizeMethodName(method) : null;
        this.headers = headers != null ? headers : null;
        this.body = body != null ? body : null;
        this.url = url != null ? url : null;
        this.params = this._mergeSearchParams(params || search);
        this.withCredentials = withCredentials != null ? withCredentials : null;
        this.responseType = responseType != null ? responseType : null;
    }
    Object.defineProperty(RequestOptions.prototype, "search", {
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        get: function () { return this.params; },
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        set: function (params) { this.params = params; },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     */
    RequestOptions.prototype.merge = function (options) {
        return new RequestOptions({
            method: options && options.method != null ? options.method : this.method,
            headers: options && options.headers != null ? options.headers : new Headers(this.headers),
            body: options && options.body != null ? options.body : this.body,
            url: options && options.url != null ? options.url : this.url,
            params: options && this._mergeSearchParams(options.params || options.search),
            withCredentials: options && options.withCredentials != null ? options.withCredentials :
                this.withCredentials,
            responseType: options && options.responseType != null ? options.responseType :
                this.responseType
        });
    };
    RequestOptions.prototype._mergeSearchParams = function (params) {
        if (!params)
            return this.params;
        if (params instanceof URLSearchParams) {
            return params.clone();
        }
        if (typeof params === 'string') {
            return new URLSearchParams(params);
        }
        return this._parseParams(params);
    };
    RequestOptions.prototype._parseParams = function (objParams) {
        var _this = this;
        if (objParams === void 0) { objParams = {}; }
        var params = new URLSearchParams();
        Object.keys(objParams).forEach(function (key) {
            var value = objParams[key];
            if (Array.isArray(value)) {
                value.forEach(function (item) { return _this._appendParam(key, item, params); });
            }
            else {
                _this._appendParam(key, value, params);
            }
        });
        return params;
    };
    RequestOptions.prototype._appendParam = function (key, value, params) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        params.append(key, value);
    };
    return RequestOptions;
}());
/**
 * Subclass of {@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {@link RequestMethod RequestMethod.Get}
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link RequestOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create and send {@link Request Requests}.
 *
 * ```typescript
 * import {BaseRequestOptions, RequestOptions} from '@angular/http';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * {provide: RequestOptions, useClass: MyOptions};
 * ```
 *
 * The options could also be extended when manually creating a {@link Request}
 * object.
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new BaseRequestOptions();
 * const req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var BaseRequestOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(BaseRequestOptions, _super);
    function BaseRequestOptions() {
        return _super.call(this, { method: RequestMethod.Get, headers: new Headers() }) || this;
    }
    BaseRequestOptions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    BaseRequestOptions.ctorParameters = function () { return []; };
    return BaseRequestOptions;
}(RequestOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jeffbcross): properly implement body accessors
/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {@link Http} and
 * {@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '@angular/http';
 *
 * @Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var Request = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(Request, _super);
    function Request(requestOptions) {
        var _this = _super.call(this) || this;
        // TODO: assert that url is present
        var url = requestOptions.url;
        _this.url = requestOptions.url;
        var paramsArg = requestOptions.params || requestOptions.search;
        if (paramsArg) {
            var params = void 0;
            if (typeof paramsArg === 'object' && !(paramsArg instanceof URLSearchParams)) {
                params = urlEncodeParams(paramsArg).toString();
            }
            else {
                params = paramsArg.toString();
            }
            if (params.length > 0) {
                var prefix = '?';
                if (_this.url.indexOf('?') != -1) {
                    prefix = (_this.url[_this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                _this.url = url + prefix + params;
            }
        }
        _this._body = requestOptions.body;
        _this.method = normalizeMethodName(requestOptions.method);
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        _this.headers = new Headers(requestOptions.headers);
        _this.contentType = _this.detectContentType();
        _this.withCredentials = requestOptions.withCredentials;
        _this.responseType = requestOptions.responseType;
        return _this;
    }
    /**
     * Returns the content type enum based on header options.
     */
    Request.prototype.detectContentType = function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return ContentType.JSON;
            case 'application/x-www-form-urlencoded':
                return ContentType.FORM;
            case 'multipart/form-data':
                return ContentType.FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return ContentType.TEXT;
            case 'application/octet-stream':
                return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     */
    Request.prototype.detectContentTypeFromBody = function () {
        if (this._body == null) {
            return ContentType.NONE;
        }
        else if (this._body instanceof URLSearchParams) {
            return ContentType.FORM;
        }
        else if (this._body instanceof FormData) {
            return ContentType.FORM_DATA;
        }
        else if (this._body instanceof Blob$1) {
            return ContentType.BLOB;
        }
        else if (this._body instanceof ArrayBuffer$1) {
            return ContentType.ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body === 'object') {
            return ContentType.JSON;
        }
        else {
            return ContentType.TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     */
    Request.prototype.getBody = function () {
        switch (this.contentType) {
            case ContentType.JSON:
                return this.text();
            case ContentType.FORM:
                return this.text();
            case ContentType.FORM_DATA:
                return this._body;
            case ContentType.TEXT:
                return this.text();
            case ContentType.BLOB:
                return this.blob();
            case ContentType.ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(Body));
function urlEncodeParams(params) {
    var searchParams = new URLSearchParams();
    Object.keys(params).forEach(function (key) {
        var value = params[key];
        if (value && Array.isArray(value)) {
            value.forEach(function (element) { return searchParams.append(key, element.toString()); });
        }
        else {
            searchParams.append(key, value.toString());
        }
    });
    return searchParams;
}
var noop = function () { };
var w = typeof window == 'object' ? window : noop;
var FormData = w /** TODO #9100 */['FormData'] || noop;
var Blob$1 = w /** TODO #9100 */['Blob'] || noop;
var ArrayBuffer$1 = w /** TODO #9100 */['ArrayBuffer'] || noop;

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return newOptions.merge(new RequestOptions({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            params: providedOpts.params,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        }));
    }
    return newOptions.merge(new RequestOptions({ method: method, url: url }));
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {@link Response} when a
 * response is received.
 *
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '@angular/http';
 * import {map} from 'rxjs/operators';
 *
 * @Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .pipe(map(res => res.json()))
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '@angular/http';
 * import {MockBackend} from '@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 */
var Http = /** @class */ (function () {
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    Http.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
        }
        else if (url instanceof Request) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     */
    Http.prototype.get = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     */
    Http.prototype.post = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     */
    Http.prototype.put = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     */
    Http.prototype.delete = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     */
    Http.prototype.patch = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     */
    Http.prototype.head = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     */
    Http.prototype.options = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
    };
    Http.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    Http.ctorParameters = function () { return [
        { type: ConnectionBackend },
        { type: RequestOptions }
    ]; };
    return Http;
}());
/**
 * @deprecated see https://angular.io/guide/http
 */
var Jsonp = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(Jsonp, _super);
    function Jsonp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     *
     * @security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     */
    Jsonp.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            url =
                new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url));
        }
        if (url instanceof Request) {
            if (url.method !== RequestMethod.Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    Jsonp.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
    ];
    /** @nocollapse */
    Jsonp.ctorParameters = function () { return [
        { type: ConnectionBackend },
        { type: RequestOptions }
    ]; };
    return Jsonp;
}(Http));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function _createDefaultCookieXSRFStrategy() {
    return new CookieXSRFStrategy();
}
function httpFactory(xhrBackend, requestOptions) {
    return new Http(xhrBackend, requestOptions);
}
function jsonpFactory(jsonpBackend, requestOptions) {
    return new Jsonp(jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * @deprecated see https://angular.io/guide/http
 */
var HttpModule = /** @class */ (function () {
    function HttpModule() {
    }
    HttpModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [
                        // TODO(pascal): use factory type annotations once supported in DI
                        // issue: https://github.com/angular/angular/issues/3183
                        { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
                        BrowserXhr,
                        { provide: RequestOptions, useClass: BaseRequestOptions },
                        { provide: ResponseOptions, useClass: BaseResponseOptions },
                        XHRBackend,
                        { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy },
                    ],
                },] }
    ];
    return HttpModule;
}());
/**
 * The module that includes jsonp's providers
 *
 * @deprecated see https://angular.io/guide/http
 */
var JsonpModule = /** @class */ (function () {
    function JsonpModule() {
    }
    JsonpModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [
                        // TODO(pascal): use factory type annotations once supported in DI
                        // issue: https://github.com/angular/angular/issues/3183
                        { provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] },
                        BrowserJsonp,
                        { provide: RequestOptions, useClass: BaseRequestOptions },
                        { provide: ResponseOptions, useClass: BaseResponseOptions },
                        JSONPBackend,
                    ],
                },] }
    ];
    return JsonpModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @deprecated see https://angular.io/guide/http
 */
var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('6.1.2');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./node_modules/dhtmlx-scheduler/codebase/dhtmlxscheduler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/dhtmlx-scheduler/codebase/dhtmlxscheduler.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
@license
dhtmlxScheduler v.5.0.0 Stardard

This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/
function dtmlXMLLoaderObject(e,t,i,r){return this.xmlDoc="","undefined"!=typeof i?this.async=i:this.async=!0,this.onloadAction=e||null,this.mainObject=t||null,this.waitCall=null,this.rSeed=r||!1,this}function convertStringToBoolean(e){switch("string"==typeof e&&(e=e.toLowerCase()),e){case"1":case"true":case"yes":case"y":case 1:case!0:return!0;default:return!1}}function getUrlSymbol(e){return-1!=e.indexOf("?")?"&":"?"}function dhtmlDragAndDropObject(){return window.dhtmlDragAndDrop?window.dhtmlDragAndDrop:(this.lastLanding=0,
this.dragNode=0,this.dragStartNode=0,this.dragStartObject=0,this.tempDOMU=null,this.tempDOMM=null,this.waitDrag=0,window.dhtmlDragAndDrop=this,this)}function _dhtmlxError(e,t,i){return this.catches||(this.catches=[]),this}function dhtmlXHeir(e,t){for(var i in t)"function"==typeof t[i]&&(e[i]=t[i]);return e}window.dhtmlXScheduler=window.scheduler={version:"5.0.0"},window.dhtmlx||(dhtmlx=function(e){for(var t in e)dhtmlx[t]=e[t];return dhtmlx}),dhtmlx.extend_api=function(e,t,i){var r=window[e];r&&(window[e]=function(e){
var i;if(e&&"object"==typeof e&&!e.tagName){i=r.apply(this,t._init?t._init(e):arguments);for(var s in dhtmlx)t[s]&&this[t[s]](dhtmlx[s]);for(var s in e)t[s]?this[t[s]](e[s]):0===s.indexOf("on")&&this.attachEvent(s,e[s])}else i=r.apply(this,arguments);return t._patch&&t._patch(this),i||this},window[e].prototype=r.prototype,i&&dhtmlXHeir(window[e].prototype,i))},dhtmlxAjax={get:function(e,t){var i=new dtmlXMLLoaderObject(!0);return i.async=arguments.length<3,i.waitCall=t,i.loadXML(e),i},post:function(e,t,i){
var r=new dtmlXMLLoaderObject(!0);return r.async=arguments.length<4,r.waitCall=i,r.loadXML(e,!0,t),r},getSync:function(e){return this.get(e,null,!0)},postSync:function(e,t){return this.post(e,t,null,!0)}},window.dtmlXMLLoaderObject=dtmlXMLLoaderObject,dtmlXMLLoaderObject.count=0,dtmlXMLLoaderObject.prototype.waitLoadFunction=function(e){var t=!0;return this.check=function(){if(e&&e.onloadAction&&(!e.xmlDoc.readyState||4==e.xmlDoc.readyState)){if(!t)return;t=!1,dtmlXMLLoaderObject.count++,"function"==typeof e.onloadAction&&e.onloadAction(e.mainObject,null,null,null,e),
e.waitCall&&(e.waitCall.call(this,e),e.waitCall=null)}},this.check},dtmlXMLLoaderObject.prototype.getXMLTopNode=function(e,t){var i;if(this.xmlDoc.responseXML){var r=this.xmlDoc.responseXML.getElementsByTagName(e);if(0===r.length&&-1!=e.indexOf(":"))var r=this.xmlDoc.responseXML.getElementsByTagName(e.split(":")[1]);i=r[0]}else i=this.xmlDoc.documentElement;if(i)return this._retry=!1,i;if(!this._retry&&_isIE){this._retry=!0;var t=this.xmlDoc;return this.loadXMLString(this.xmlDoc.responseText.replace(/^[\s]+/,""),!0),
this.getXMLTopNode(e,t)}return dhtmlxError.throwError("LoadXML","Incorrect XML",[t||this.xmlDoc,this.mainObject]),document.createElement("div")},dtmlXMLLoaderObject.prototype.loadXMLString=function(e,t){if(_isIE)this.xmlDoc=new ActiveXObject("Microsoft.XMLDOM"),this.xmlDoc.async=this.async,this.xmlDoc.onreadystatechange=function(){},this.xmlDoc.loadXML(e);else{var i=new DOMParser;this.xmlDoc=i.parseFromString(e,"text/xml")}t||(this.onloadAction&&this.onloadAction(this.mainObject,null,null,null,this),
this.waitCall&&(this.waitCall(),this.waitCall=null))},dtmlXMLLoaderObject.prototype.loadXML=function(e,t,i,r){this.rSeed&&(e+=(-1!=e.indexOf("?")?"&":"?")+"a_dhx_rSeed="+(new Date).valueOf()),this.filePath=e,!_isIE&&window.XMLHttpRequest?this.xmlDoc=new XMLHttpRequest:this.xmlDoc=new ActiveXObject("Microsoft.XMLHTTP"),this.async&&(this.xmlDoc.onreadystatechange=new this.waitLoadFunction(this)),"string"==typeof t?this.xmlDoc.open(t,e,this.async):this.xmlDoc.open(t?"POST":"GET",e,this.async),r?(this.xmlDoc.setRequestHeader("User-Agent","dhtmlxRPC v0.1 ("+navigator.userAgent+")"),
this.xmlDoc.setRequestHeader("Content-type","text/xml")):t&&this.xmlDoc.setRequestHeader("Content-type","application/x-www-form-urlencoded"),this.xmlDoc.setRequestHeader("X-Requested-With","XMLHttpRequest"),this.xmlDoc.send(i),this.async||new this.waitLoadFunction(this)()},dtmlXMLLoaderObject.prototype.destructor=function(){return this._filterXPath=null,this._getAllNamedChilds=null,this._retry=null,this.async=null,this.rSeed=null,this.filePath=null,this.onloadAction=null,this.mainObject=null,this.xmlDoc=null,
this.doXPath=null,this.doXPathOpera=null,this.doXSLTransToObject=null,this.doXSLTransToString=null,this.loadXML=null,this.loadXMLString=null,this.doSerialization=null,this.xmlNodeToJSON=null,this.getXMLTopNode=null,this.setXSLParamValue=null,null},dtmlXMLLoaderObject.prototype.xmlNodeToJSON=function(e){for(var t={},i=0;i<e.attributes.length;i++)t[e.attributes[i].name]=e.attributes[i].value;t._tagvalue=e.firstChild?e.firstChild.nodeValue:"";for(var i=0;i<e.childNodes.length;i++){var r=e.childNodes[i].tagName;
r&&(t[r]||(t[r]=[]),t[r].push(this.xmlNodeToJSON(e.childNodes[i])))}return t},window.dhtmlDragAndDropObject=dhtmlDragAndDropObject,dhtmlDragAndDropObject.prototype.removeDraggableItem=function(e){e.onmousedown=null,e.dragStarter=null,e.dragLanding=null},dhtmlDragAndDropObject.prototype.addDraggableItem=function(e,t){e.onmousedown=this.preCreateDragCopy,e.dragStarter=t,this.addDragLanding(e,t)},dhtmlDragAndDropObject.prototype.addDragLanding=function(e,t){e.dragLanding=t},dhtmlDragAndDropObject.prototype.preCreateDragCopy=function(e){
return!e&&!window.event||2!=(e||event).button?window.dhtmlDragAndDrop.waitDrag?(window.dhtmlDragAndDrop.waitDrag=0,document.body.onmouseup=window.dhtmlDragAndDrop.tempDOMU,document.body.onmousemove=window.dhtmlDragAndDrop.tempDOMM,!1):(window.dhtmlDragAndDrop.dragNode&&window.dhtmlDragAndDrop.stopDrag(e),window.dhtmlDragAndDrop.waitDrag=1,window.dhtmlDragAndDrop.tempDOMU=document.body.onmouseup,window.dhtmlDragAndDrop.tempDOMM=document.body.onmousemove,window.dhtmlDragAndDrop.dragStartNode=this,window.dhtmlDragAndDrop.dragStartObject=this.dragStarter,
document.body.onmouseup=window.dhtmlDragAndDrop.preCreateDragCopy,document.body.onmousemove=window.dhtmlDragAndDrop.callDrag,window.dhtmlDragAndDrop.downtime=(new Date).valueOf(),e&&e.preventDefault?(e.preventDefault(),!1):!1):void 0},dhtmlDragAndDropObject.prototype.callDrag=function(e){e||(e=window.event);var t=window.dhtmlDragAndDrop;if(!((new Date).valueOf()-t.downtime<100)){if(!t.dragNode){if(!t.waitDrag)return t.stopDrag(e,!0);if(t.dragNode=t.dragStartObject._createDragNode(t.dragStartNode,e),
!t.dragNode)return t.stopDrag();t.dragNode.onselectstart=function(){return!1},t.gldragNode=t.dragNode,document.body.appendChild(t.dragNode),document.body.onmouseup=t.stopDrag,t.waitDrag=0,t.dragNode.pWindow=window,t.initFrameRoute()}if(t.dragNode.parentNode!=window.document.body&&t.gldragNode){var i=t.gldragNode;t.gldragNode.old&&(i=t.gldragNode.old),i.parentNode.removeChild(i);var r=t.dragNode.pWindow;if(i.pWindow&&i.pWindow.dhtmlDragAndDrop.lastLanding&&i.pWindow.dhtmlDragAndDrop.lastLanding.dragLanding._dragOut(i.pWindow.dhtmlDragAndDrop.lastLanding),
_isIE){var s=document.createElement("div");s.innerHTML=t.dragNode.outerHTML,t.dragNode=s.childNodes[0]}else t.dragNode=t.dragNode.cloneNode(!0);t.dragNode.pWindow=window,t.gldragNode.old=t.dragNode,document.body.appendChild(t.dragNode),r.dhtmlDragAndDrop.dragNode=t.dragNode}t.dragNode.style.left=e.clientX+15+(t.fx?-1*t.fx:0)+(document.body.scrollLeft||document.documentElement.scrollLeft)+"px",t.dragNode.style.top=e.clientY+3+(t.fy?-1*t.fy:0)+(document.body.scrollTop||document.documentElement.scrollTop)+"px";
var a;a=e.srcElement?e.srcElement:e.target,t.checkLanding(a,e)}},dhtmlDragAndDropObject.prototype.calculateFramePosition=function(e){if(window.name){for(var t=parent.frames[window.name].frameElement.offsetParent,i=0,r=0;t;)i+=t.offsetLeft,r+=t.offsetTop,t=t.offsetParent;if(parent.dhtmlDragAndDrop){var s=parent.dhtmlDragAndDrop.calculateFramePosition(1);i+=1*s.split("_")[0],r+=1*s.split("_")[1]}if(e)return i+"_"+r;this.fx=i,this.fy=r}return"0_0"},dhtmlDragAndDropObject.prototype.checkLanding=function(e,t){
e&&e.dragLanding?(this.lastLanding&&this.lastLanding.dragLanding._dragOut(this.lastLanding),this.lastLanding=e,this.lastLanding=this.lastLanding.dragLanding._dragIn(this.lastLanding,this.dragStartNode,t.clientX,t.clientY,t),this.lastLanding_scr=_isIE?t.srcElement:t.target):e&&"BODY"!=e.tagName?this.checkLanding(e.parentNode,t):(this.lastLanding&&this.lastLanding.dragLanding._dragOut(this.lastLanding,t.clientX,t.clientY,t),this.lastLanding=0,this._onNotFound&&this._onNotFound())},dhtmlDragAndDropObject.prototype.stopDrag=function(e,t){
var i=window.dhtmlDragAndDrop;if(!t){i.stopFrameRoute();var r=i.lastLanding;i.lastLanding=null,r&&r.dragLanding._drag(i.dragStartNode,i.dragStartObject,r,_isIE?event.srcElement:e.target)}i.lastLanding=null,i.dragNode&&i.dragNode.parentNode==document.body&&i.dragNode.parentNode.removeChild(i.dragNode),i.dragNode=0,i.gldragNode=0,i.fx=0,i.fy=0,i.dragStartNode=0,i.dragStartObject=0,document.body.onmouseup=i.tempDOMU,document.body.onmousemove=i.tempDOMM,i.tempDOMU=null,i.tempDOMM=null,i.waitDrag=0},dhtmlDragAndDropObject.prototype.stopFrameRoute=function(e){
e&&window.dhtmlDragAndDrop.stopDrag(1,1);for(var t=0;t<window.frames.length;t++)try{window.frames[t]!=e&&window.frames[t].dhtmlDragAndDrop&&window.frames[t].dhtmlDragAndDrop.stopFrameRoute(window)}catch(i){}try{parent.dhtmlDragAndDrop&&parent!=window&&parent!=e&&parent.dhtmlDragAndDrop.stopFrameRoute(window)}catch(i){}},dhtmlDragAndDropObject.prototype.initFrameRoute=function(e,t){e&&(window.dhtmlDragAndDrop.preCreateDragCopy(),window.dhtmlDragAndDrop.dragStartNode=e.dhtmlDragAndDrop.dragStartNode,
window.dhtmlDragAndDrop.dragStartObject=e.dhtmlDragAndDrop.dragStartObject,window.dhtmlDragAndDrop.dragNode=e.dhtmlDragAndDrop.dragNode,window.dhtmlDragAndDrop.gldragNode=e.dhtmlDragAndDrop.dragNode,window.document.body.onmouseup=window.dhtmlDragAndDrop.stopDrag,window.waitDrag=0,!_isIE&&t&&(!_isFF||_FFrv<1.8)&&window.dhtmlDragAndDrop.calculateFramePosition());try{parent.dhtmlDragAndDrop&&parent!=window&&parent!=e&&parent.dhtmlDragAndDrop.initFrameRoute(window)}catch(i){}for(var r=0;r<window.frames.length;r++)try{
window.frames[r]!=e&&window.frames[r].dhtmlDragAndDrop&&window.frames[r].dhtmlDragAndDrop.initFrameRoute(window,!e||t?1:0)}catch(i){}},_isFF=!1,_isIE=!1,_isOpera=!1,_isKHTML=!1,_isMacOS=!1,_isChrome=!1,_FFrv=!1,_KHTMLrv=!1,_OperaRv=!1,-1!=navigator.userAgent.indexOf("Macintosh")&&(_isMacOS=!0),navigator.userAgent.toLowerCase().indexOf("chrome")>-1&&(_isChrome=!0),-1!=navigator.userAgent.indexOf("Safari")||-1!=navigator.userAgent.indexOf("Konqueror")?(_KHTMLrv=parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Safari")+7,5)),
_KHTMLrv>525?(_isFF=!0,_FFrv=1.9):_isKHTML=!0):-1!=navigator.userAgent.indexOf("Opera")?(_isOpera=!0,_OperaRv=parseFloat(navigator.userAgent.substr(navigator.userAgent.indexOf("Opera")+6,3))):-1!=navigator.appName.indexOf("Microsoft")?(_isIE=!0,-1==navigator.appVersion.indexOf("MSIE 8.0")&&-1==navigator.appVersion.indexOf("MSIE 9.0")&&-1==navigator.appVersion.indexOf("MSIE 10.0")||"BackCompat"==document.compatMode||(_isIE=8)):"Netscape"==navigator.appName&&-1!=navigator.userAgent.indexOf("Trident")?_isIE=8:(_isFF=!0,
_FFrv=parseFloat(navigator.userAgent.split("rv:")[1])),dtmlXMLLoaderObject.prototype.doXPath=function(e,t,i,r){if(_isKHTML||!_isIE&&!window.XPathResult)return this.doXPathOpera(e,t);if(_isIE)return t||(t=this.xmlDoc.nodeName?this.xmlDoc:this.xmlDoc.responseXML),t||dhtmlxError.throwError("LoadXML","Incorrect XML",[t||this.xmlDoc,this.mainObject]),i&&t.setProperty("SelectionNamespaces","xmlns:xsl='"+i+"'"),"single"==r?t.selectSingleNode(e):t.selectNodes(e)||new Array(0);var s=t;t||(t=this.xmlDoc.nodeName?this.xmlDoc:this.xmlDoc.responseXML),
t||dhtmlxError.throwError("LoadXML","Incorrect XML",[t||this.xmlDoc,this.mainObject]),-1!=t.nodeName.indexOf("document")?s=t:(s=t,t=t.ownerDocument);var a=XPathResult.ANY_TYPE;"single"==r&&(a=XPathResult.FIRST_ORDERED_NODE_TYPE);var n=[],d=t.evaluate(e,s,function(e){return i},a,null);if(a==XPathResult.FIRST_ORDERED_NODE_TYPE)return d.singleNodeValue;for(var o=d.iterateNext();o;)n[n.length]=o,o=d.iterateNext();return n},_dhtmlxError.prototype.catchError=function(e,t){this.catches[e]=t},_dhtmlxError.prototype.throwError=function(e,t,i){
return this.catches[e]?this.catches[e](e,t,i):this.catches.ALL?this.catches.ALL(e,t,i):(window.alert("Error type: "+arguments[0]+"\nDescription: "+arguments[1]),null)},window.dhtmlxError=new _dhtmlxError,dtmlXMLLoaderObject.prototype.doXPathOpera=function(e,t){var i=e.replace(/[\/]+/gi,"/").split("/"),r=null,s=1;if(!i.length)return[];if("."==i[0])r=[t];else{if(""!==i[0])return[];r=(this.xmlDoc.responseXML||this.xmlDoc).getElementsByTagName(i[s].replace(/\[[^\]]*\]/g,"")),s++}for(s;s<i.length;s++)r=this._getAllNamedChilds(r,i[s]);
return-1!=i[s-1].indexOf("[")&&(r=this._filterXPath(r,i[s-1])),r},dtmlXMLLoaderObject.prototype._filterXPath=function(e,t){for(var i=[],t=t.replace(/[^\[]*\[\@/g,"").replace(/[\[\]\@]*/g,""),r=0;r<e.length;r++)e[r].getAttribute(t)&&(i[i.length]=e[r]);return i},dtmlXMLLoaderObject.prototype._getAllNamedChilds=function(e,t){var i=[];_isKHTML&&(t=t.toUpperCase());for(var r=0;r<e.length;r++)for(var s=0;s<e[r].childNodes.length;s++)_isKHTML?e[r].childNodes[s].tagName&&e[r].childNodes[s].tagName.toUpperCase()==t&&(i[i.length]=e[r].childNodes[s]):e[r].childNodes[s].tagName==t&&(i[i.length]=e[r].childNodes[s]);
return i},"undefined"==typeof window.dhtmlxEvent&&(window.dhtmlxEvent=function(e,t,i){e.addEventListener?e.addEventListener(t,i,!1):e.attachEvent&&e.attachEvent("on"+t,i)}),dtmlXMLLoaderObject.prototype.xslDoc=null,dtmlXMLLoaderObject.prototype.setXSLParamValue=function(e,t,i){i||(i=this.xslDoc),i.responseXML&&(i=i.responseXML);var r=this.doXPath("/xsl:stylesheet/xsl:variable[@name='"+e+"']",i,"http://www.w3.org/1999/XSL/Transform","single");r&&(r.firstChild.nodeValue=t)},dtmlXMLLoaderObject.prototype.doXSLTransToObject=function(e,t){
e||(e=this.xslDoc),e.responseXML&&(e=e.responseXML),t||(t=this.xmlDoc),t.responseXML&&(t=t.responseXML);var i;if(_isIE){i=new ActiveXObject("Msxml2.DOMDocument.3.0");try{t.transformNodeToObject(e,i)}catch(r){i=t.transformNode(e)}}else this.XSLProcessor||(this.XSLProcessor=new XSLTProcessor,this.XSLProcessor.importStylesheet(e)),i=this.XSLProcessor.transformToDocument(t);return i},dtmlXMLLoaderObject.prototype.doXSLTransToString=function(e,t){var i=this.doXSLTransToObject(e,t);return"string"==typeof i?i:this.doSerialization(i);
},dtmlXMLLoaderObject.prototype.doSerialization=function(e){if(e||(e=this.xmlDoc),e.responseXML&&(e=e.responseXML),_isIE)return e.xml;var t=new XMLSerializer;return t.serializeToString(e)},dhtmlxEventable=function(obj){obj.attachEvent=function(e,t,i){return e="ev_"+e.toLowerCase(),this[e]||(this[e]=new this.eventCatcher(i||this)),e+":"+this[e].addEvent(t)},obj.callEvent=function(e,t){return e="ev_"+e.toLowerCase(),this[e]?this[e].apply(this,t):!0},obj.checkEvent=function(e){return!!this["ev_"+e.toLowerCase()];
},obj.eventCatcher=function(obj){var dhx_catch=[],z=function(){for(var e=!0,t=0;t<dhx_catch.length;t++)if(dhx_catch[t]){var i=dhx_catch[t].apply(obj,arguments);e=e&&i}return e};return z.addEvent=function(ev){return"function"!=typeof ev&&(ev=eval(ev)),ev?dhx_catch.push(ev)-1:!1},z.removeEvent=function(e){dhx_catch[e]=null},z},obj.detachEvent=function(e){if(e){var t=e.split(":");this[t[0]].removeEvent(t[1])}},obj.detachAllEvents=function(){for(var e in this)0===e.indexOf("ev_")&&(this.detachEvent(e),
this[e]=null)},obj=null},scheduler.event=window.dhtmlxEvent,scheduler.eventRemove=function(e,t,i){e.removeEventListener?e.removeEventListener(t,i,!1):e.detachEvent&&e.detachEvent("on"+t,i)},function(){function e(e){var t=!1,i=!1;if(window.getComputedStyle){var r=window.getComputedStyle(e,null);t=r.display,i=r.visibility}else e.currentStyle&&(t=e.currentStyle.display,i=e.currentStyle.visibility);var s=!1,a=scheduler._locate_css({target:e},"dhx_form_repeat",!1);return a&&(s=!("0px"!=a.style.height)),
s=s||!e.offsetHeight,"none"!=t&&"hidden"!=i&&!s}function t(e){return!isNaN(e.getAttribute("tabindex"))&&1*e.getAttribute("tabindex")>=0}function i(e){var t={a:!0,area:!0};return t[e.nodeName.loLowerCase()]?!!e.getAttribute("href"):!0}function r(e){var t={input:!0,select:!0,textarea:!0,button:!0,object:!0};return t[e.nodeName.toLowerCase()]?!e.hasAttribute("disabled"):!0}scheduler._getFocusableNodes=function(s){for(var a=s.querySelectorAll(["a[href]","area[href]","input","select","textarea","button","iframe","object","embed","[tabindex]","[contenteditable]"].join(", ")),n=Array.prototype.slice.call(a,0),d=0;d<n.length;d++){
var o=n[d],l=(t(o)||r(o)||i(o))&&e(o);l||(n.splice(d,1),d--)}return n}}(),scheduler._trim=function(e){var t=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")};return t.apply(e)},scheduler._isDate=function(e){return e&&"object"==typeof e?!!(e.getFullYear&&e.getMonth&&e.getDate):!1},scheduler._isObject=function(e){return e&&"object"==typeof e},window.dhtmlx||(window.dhtmlx={}),function(){function e(e,t){setTimeout(function(){if(e.box){var r=e.callback;i(!1),e.box.parentNode.removeChild(e.box),
dhtmlx.callEvent("onAfterMessagePopup",[e.box]),c=e.box=null,r&&r(t)}},1)}function t(t){if(c){t=t||event;var i=t.which||event.keyCode,r=!1;if(dhtmlx.message.keyboard){if(13==i||32==i){var s=t.target||t.srcElement;scheduler._getClassName(s).indexOf("dhtmlx_popup_button")>-1&&s.click?s.click():(e(c,!0),r=!0)}27==i&&(e(c,!1),r=!0)}if(r)return t.preventDefault&&t.preventDefault(),!(t.cancelBubble=!0)}else;}function i(e){i.cover||(i.cover=document.createElement("div"),i.cover.onkeydown=t,i.cover.className="dhx_modal_cover",
document.body.appendChild(i.cover));document.body.scrollHeight;i.cover.style.display=e?"inline-block":"none"}function r(e,t,i){var r=scheduler._waiAria.messageButtonAttrString(e),s=i?i:e||"",a="dhtmlx_"+s.toLowerCase().replace(/ /g,"_")+"_button";return"<div "+r+"class='dhtmlx_popup_button "+a+"' result='"+t+"' ><div>"+e+"</div></div>"}function s(e){u.area||(u.area=document.createElement("div"),u.area.className="dhtmlx_message_area",u.area.style[u.position]="5px",document.body.appendChild(u.area)),
u.hide(e.id);var t=document.createElement("div");return t.innerHTML="<div>"+e.text+"</div>",t.className="dhtmlx-info dhtmlx-"+e.type,t.onclick=function(){u.hide(e.id),e=null},scheduler._waiAria.messageInfoAttr(t),"bottom"==u.position&&u.area.firstChild?u.area.insertBefore(t,u.area.firstChild):u.area.appendChild(t),e.expire>0&&(u.timers[e.id]=window.setTimeout(function(){u.hide(e.id)},e.expire)),u.pull[e.id]=t,t=null,e.id}function a(t,i,s){var a=document.createElement("div");a.className=" dhtmlx_modal_box dhtmlx-"+t.type,
a.setAttribute("dhxbox",1);var n=scheduler.uid();scheduler._waiAria.messageModalAttr(a,n);var d="",o=!1;if(t.width&&(a.style.width=t.width),t.height&&(a.style.height=t.height),t.title&&(d+='<div class="dhtmlx_popup_title" id="'+n+'">'+t.title+"</div>",o=!0),d+='<div class="dhtmlx_popup_text" '+(o?"":' id="'+n+'" ')+"><span>"+(t.content?"":t.text)+'</span></div><div  class="dhtmlx_popup_controls">',i){var l=t.ok||scheduler.locale.labels.message_ok;void 0===l&&(l="OK"),d+=r(l,!0,"ok")}if(s){var h=t.cancel||scheduler.locale.labels.message_cancel;
void 0===h&&(h="Cancel"),d+=r(h,!1,"cancel")}if(t.buttons)for(var _=0;_<t.buttons.length;_++)d+=r(t.buttons[_],_);if(d+="</div>",a.innerHTML=d,t.content){var u=t.content;"string"==typeof u&&(u=document.getElementById(u)),"none"==u.style.display&&(u.style.display=""),a.childNodes[t.title?1:0].appendChild(u)}return a.onclick=function(i){i=i||event;var r=i.target||i.srcElement,s=scheduler._getClassName(r);if(s||(r=r.parentNode),s=scheduler._getClassName(r),"dhtmlx_popup_button"==s.split(" ")[0]){var a=r.getAttribute("result");
a="true"==a||("false"==a?!1:a),e(t,a)}},t.box=a,c=t,a}function n(e,r,s){var n=e.tagName?e:a(e,r,s);e.hidden||i(!0),document.body.appendChild(n);var d=Math.abs(Math.floor(((window.innerWidth||document.documentElement.offsetWidth)-n.offsetWidth)/2)),o=Math.abs(Math.floor(((window.innerHeight||document.documentElement.offsetHeight)-n.offsetHeight)/2));return"top"==e.position?n.style.top="-3px":n.style.top=o+"px",n.style.left=d+"px",n.onkeydown=t,dhtmlx.modalbox.focus(n),e.hidden&&dhtmlx.modalbox.hide(n),
dhtmlx.callEvent("onMessagePopup",[n]),n}function d(e){return n(e,!0,!1)}function o(e){return n(e,!0,!0)}function l(e){return n(e)}function h(e,t,i){return"object"!=typeof e&&("function"==typeof t&&(i=t,t=""),e={text:e,type:t,callback:i}),e}function _(e,t,i,r){return"object"!=typeof e&&(e={text:e,type:t,expire:i,id:r}),e.id=e.id||u.uid(),e.expire=e.expire||u.expire,e}var c=null;document.attachEvent?document.attachEvent("onkeydown",t):document.addEventListener("keydown",t,!0),dhtmlx.alert=function(){
var e=h.apply(this,arguments);return e.type=e.type||"confirm",d(e)},dhtmlx.confirm=function(){var e=h.apply(this,arguments);return e.type=e.type||"alert",o(e)},dhtmlx.modalbox=function(){var e=h.apply(this,arguments);return e.type=e.type||"alert",l(e)},dhtmlx.modalbox.hide=function(e){for(;e&&e.getAttribute&&!e.getAttribute("dhxbox");)e=e.parentNode;e&&(e.parentNode.removeChild(e),i(!1))},dhtmlx.modalbox.focus=function(e){setTimeout(function(){var t=scheduler._getFocusableNodes(e);t.length&&t[0].focus&&t[0].focus();
},1)};var u=dhtmlx.message=function(e,t,i,r){e=_.apply(this,arguments),e.type=e.type||"info";var a=e.type.split("-")[0];switch(a){case"alert":return d(e);case"confirm":return o(e);case"modalbox":return l(e);default:return s(e)}};u.seed=(new Date).valueOf(),u.uid=function(){return u.seed++},u.expire=4e3,u.keyboard=!0,u.position="top",u.pull={},u.timers={},u.hideAll=function(){for(var e in u.pull)u.hide(e)},u.hide=function(e){var t=u.pull[e];t&&t.parentNode&&(window.setTimeout(function(){t.parentNode.removeChild(t),
t=null},2e3),t.className+=" hidden",u.timers[e]&&window.clearTimeout(u.timers[e]),delete u.pull[e])}}(),dhtmlx.attachEvent||dhtmlxEventable(dhtmlx);var dataProcessor=window.dataProcessor=function(e){return this.serverProcessor=e,this.action_param="!nativeeditor_status",this.object=null,this.updatedRows=[],this.autoUpdate=!0,this.updateMode="cell",this._tMode="GET",this._headers=null,this._payload=null,this.post_delim="_",this._waitMode=0,this._in_progress={},this._invalid={},this.mandatoryFields=[],
this.messages=[],this.styles={updated:"font-weight:bold;",inserted:"font-weight:bold;",deleted:"text-decoration : line-through;",invalid:"background-color:FFE0E0;",invalid_cell:"border-bottom:2px solid red;",error:"color:red;",clear:"font-weight:normal;text-decoration:none;"},this.enableUTFencoding(!0),dhtmlxEventable(this),this};dataProcessor.prototype={setTransactionMode:function(e,t){"object"==typeof e?(this._tMode=e.mode||this._tMode,void 0!==e.headers&&(this._headers=e.headers),void 0!==e.payload&&(this._payload=e.payload)):(this._tMode=e,
this._tSend=t),"REST"==this._tMode&&(this._tSend=!1,this._endnm=!0),"JSON"==this._tMode&&(this._tSend=!1,this._endnm=!0,this._headers=this._headers||{},this._headers["Content-type"]="application/json")},escape:function(e){return this._utf?encodeURIComponent(e):escape(e)},enableUTFencoding:function(e){this._utf=!!e},setDataColumns:function(e){this._columns="string"==typeof e?e.split(","):e},getSyncState:function(){return!this.updatedRows.length},enableDataNames:function(e){this._endnm=!!e},enablePartialDataSend:function(e){
this._changed=!!e},setUpdateMode:function(e,t){this.autoUpdate="cell"==e,this.updateMode=e,this.dnd=t},ignore:function(e,t){this._silent_mode=!0,e.call(t||window),this._silent_mode=!1},setUpdated:function(e,t,i){if(!this._silent_mode){var r=this.findRow(e);i=i||"updated";var s=this.obj.getUserData(e,this.action_param);s&&"updated"==i&&(i=s),t?(this.set_invalid(e,!1),this.updatedRows[r]=e,this.obj.setUserData(e,this.action_param,i),this._in_progress[e]&&(this._in_progress[e]="wait")):this.is_invalid(e)||(this.updatedRows.splice(r,1),
this.obj.setUserData(e,this.action_param,"")),t||this._clearUpdateFlag(e),this.markRow(e,t,i),t&&this.autoUpdate&&this.sendData(e)}},_clearUpdateFlag:function(e){},markRow:function(e,t,i){var r="",s=this.is_invalid(e);if(s&&(r=this.styles[s],t=!0),this.callEvent("onRowMark",[e,t,i,s])&&(r=this.styles[t?i:"clear"]+r,this.obj[this._methods[0]](e,r),s&&s.details)){r+=this.styles[s+"_cell"];for(var a=0;a<s.details.length;a++)s.details[a]&&this.obj[this._methods[1]](e,a,r)}},getState:function(e){return this.obj.getUserData(e,this.action_param);
},is_invalid:function(e){return this._invalid[e]},set_invalid:function(e,t,i){i&&(t={value:t,details:i,toString:function(){return this.value.toString()}}),this._invalid[e]=t},checkBeforeUpdate:function(e){return!0},sendData:function(e){return!this._waitMode||"tree"!=this.obj.mytype&&!this.obj._h2?(this.obj.editStop&&this.obj.editStop(),"undefined"==typeof e||this._tSend?this.sendAllData():this._in_progress[e]?!1:(this.messages=[],!this.checkBeforeUpdate(e)&&this.callEvent("onValidationError",[e,this.messages])?!1:void this._beforeSendData(this._getRowData(e),e))):void 0;
},_beforeSendData:function(e,t){return this.callEvent("onBeforeUpdate",[t,this.getState(t),e])?void this._sendData(e,t):!1},serialize:function(e,t){if("string"==typeof e)return e;if("undefined"!=typeof t)return this.serialize_one(e,"");var i=[],r=[];for(var s in e)e.hasOwnProperty(s)&&(i.push(this.serialize_one(e[s],s+this.post_delim)),r.push(s));return i.push("ids="+this.escape(r.join(","))),dhtmlx.security_key&&i.push("dhx_security="+dhtmlx.security_key),i.join("&")},serialize_one:function(e,t){
if("string"==typeof e)return e;var i=[];for(var r in e)if(e.hasOwnProperty(r)){if(("id"==r||r==this.action_param)&&"REST"==this._tMode)continue;i.push(this.escape((t||"")+r)+"="+this.escape(e[r]))}return i.join("&")},_applyPayload:function(e){var t=this.obj.$ajax;if(this._payload)for(var i in this._payload)e=e+t.urlSeparator(e)+this.escape(i)+"="+this.escape(this._payload[i]);return e},_sendData:function(e,t){if(e){if(!this.callEvent("onBeforeDataSending",t?[t,this.getState(t),e]:[null,null,e]))return!1;
t&&(this._in_progress[t]=(new Date).valueOf());var i=this,r=function(r){var s=[];if(t)s.push(t);else if(e)for(var a in e)s.push(a);return i.afterUpdate(i,r,s)},s=this.obj.$ajax,a=this.serverProcessor+(this._user?s.urlSeparator(this.serverProcessor)+["dhx_user="+this._user,"dhx_version="+this.obj.getUserData(0,"version")].join("&"):""),n=this._applyPayload(a);if("GET"==this._tMode)s.query({url:n+s.urlSeparator(n)+this.serialize(e,t),method:"GET",callback:r,headers:this._headers});else if("POST"==this._tMode)s.query({
url:n,method:"POST",headers:this._headers,data:this.serialize(e,t),callback:r});else if("JSON"==this._tMode){var d=e[this.action_param],o={};for(var l in e)o[l]=e[l];delete o[this.action_param],delete o.id,delete o.gr_id,s.query({url:n,method:"POST",headers:this._headers,callback:r,data:JSON.stringify({id:t,action:d,data:o})})}else if("REST"==this._tMode){var h=this.getState(t),_=a.replace(/(\&|\?)editing\=true/,""),o="",c="post";"inserted"==h?o=this.serialize(e,t):"deleted"==h?(c="DELETE",_=_+("/"==_.slice(-1)?"":"/")+t):(c="PUT",
o=this.serialize(e,t),_=_+("/"==_.slice(-1)?"":"/")+t),_=this._applyPayload(_),s.query({url:_,method:c,headers:this._headers,data:o,callback:r})}this._waitMode++}},sendAllData:function(){if(this.updatedRows.length){this.messages=[];for(var e=!0,t=0;t<this.updatedRows.length;t++)e&=this.checkBeforeUpdate(this.updatedRows[t]);if(!e&&!this.callEvent("onValidationError",["",this.messages]))return!1;if(this._tSend)this._sendData(this._getAllData());else for(var t=0;t<this.updatedRows.length;t++)if(!this._in_progress[this.updatedRows[t]]){
if(this.is_invalid(this.updatedRows[t]))continue;if(this._beforeSendData(this._getRowData(this.updatedRows[t]),this.updatedRows[t]),this._waitMode&&("tree"==this.obj.mytype||this.obj._h2))return}}},_getAllData:function(e){for(var t={},i=!1,r=0;r<this.updatedRows.length;r++){var s=this.updatedRows[r];if(!this._in_progress[s]&&!this.is_invalid(s)){var a=this._getRowData(s);this.callEvent("onBeforeUpdate",[s,this.getState(s),a])&&(t[s]=a,i=!0,this._in_progress[s]=(new Date).valueOf())}}return i?t:null;
},setVerificator:function(e,t){this.mandatoryFields[e]=t||function(e){return""!==e}},clearVerificator:function(e){this.mandatoryFields[e]=!1},findRow:function(e){var t=0;for(t=0;t<this.updatedRows.length&&e!=this.updatedRows[t];t++);return t},defineAction:function(e,t){this._uActions||(this._uActions=[]),this._uActions[e]=t},afterUpdateCallback:function(e,t,i,r){var s=e,a="error"!=i&&"invalid"!=i;if(a||this.set_invalid(e,i),this._uActions&&this._uActions[i]&&!this._uActions[i](r))return delete this._in_progress[s];
"wait"!=this._in_progress[s]&&this.setUpdated(e,!1);var n=e;switch(i){case"inserted":case"insert":t!=e&&(this.setUpdated(e,!1),this.obj[this._methods[2]](e,t),e=t);break;case"delete":case"deleted":return this.obj.setUserData(e,this.action_param,"true_deleted"),this.obj[this._methods[3]](e),delete this._in_progress[s],this.callEvent("onAfterUpdate",[e,i,t,r])}"wait"!=this._in_progress[s]?(a&&this.obj.setUserData(e,this.action_param,""),delete this._in_progress[s]):(delete this._in_progress[s],this.setUpdated(t,!0,this.obj.getUserData(e,this.action_param))),
this.callEvent("onAfterUpdate",[n,i,t,r])},afterUpdate:function(e,t,i){var r=this.obj.$ajax;if(window.JSON){var s;try{s=JSON.parse(t.xmlDoc.responseText)}catch(a){t.xmlDoc.responseText.length||(s={})}if(s){var n=s.action||this.getState(i)||"updated",d=s.sid||i[0],o=s.tid||i[0];return e.afterUpdateCallback(d,o,n,s),void e.finalizeUpdate()}}var l=r.xmltop("data",t.xmlDoc);if(!l)return this.cleanUpdate(i);var h=r.xpath("//data/action",l);if(!h.length)return this.cleanUpdate(i);for(var _=0;_<h.length;_++){
var c=h[_],n=c.getAttribute("type"),d=c.getAttribute("sid"),o=c.getAttribute("tid");e.afterUpdateCallback(d,o,n,c)}e.finalizeUpdate()},cleanUpdate:function(e){if(e)for(var t=0;t<e.length;t++)delete this._in_progress[e[t]]},finalizeUpdate:function(){this._waitMode&&this._waitMode--,("tree"==this.obj.mytype||this.obj._h2)&&this.updatedRows.length&&this.sendData(),this.callEvent("onAfterUpdateFinish",[]),this.updatedRows.length||this.callEvent("onFullSync",[])},init:function(e){this.obj=e,this.obj._dp_init&&this.obj._dp_init(this);
},setOnAfterUpdate:function(e){this.attachEvent("onAfterUpdate",e)},enableDebug:function(e){},setOnBeforeUpdateHandler:function(e){this.attachEvent("onBeforeDataSending",e)},setAutoUpdate:function(e,t){e=e||2e3,this._user=t||(new Date).valueOf(),this._need_update=!1,this._update_busy=!1,this.attachEvent("onAfterUpdate",function(e,t,i,r){this.afterAutoUpdate(e,t,i,r)}),this.attachEvent("onFullSync",function(){this.fullSync()});var i=this;window.setInterval(function(){i.loadUpdate()},e)},afterAutoUpdate:function(e,t,i,r){
return"collision"==t?(this._need_update=!0,!1):!0},fullSync:function(){return this._need_update&&(this._need_update=!1,this.loadUpdate()),!0},getUpdates:function(e,t){var i=this.obj.$ajax;return this._update_busy?!1:(this._update_busy=!0,void i.get(e,t))},_v:function(e){return e.firstChild?e.firstChild.nodeValue:""},_a:function(e){for(var t=[],i=0;i<e.length;i++)t[i]=this._v(e[i]);return t},loadUpdate:function(){var e=this.obj.$ajax,t=this,i=this.obj.getUserData(0,"version"),r=this.serverProcessor+e.urlSeparator(this.serverProcessor)+["dhx_user="+this._user,"dhx_version="+i].join("&");
r=r.replace("editing=true&",""),this.getUpdates(r,function(i){var r=e.xpath("//userdata",i);t.obj.setUserData(0,"version",t._v(r[0]));var s=e.xpath("//update",i);if(s.length){t._silent_mode=!0;for(var a=0;a<s.length;a++){var n=s[a].getAttribute("status"),d=s[a].getAttribute("id"),o=s[a].getAttribute("parent");switch(n){case"inserted":t.callEvent("insertCallback",[s[a],d,o]);break;case"updated":t.callEvent("updateCallback",[s[a],d,o]);break;case"deleted":t.callEvent("deleteCallback",[s[a],d,o])}}t._silent_mode=!1;
}t._update_busy=!1,t=null})}},window.dataProcessor&&!dataProcessor.prototype.init_original&&(dataProcessor.prototype.init_original=dataProcessor.prototype.init,dataProcessor.prototype.init=function(e){this.init_original(e),e._dataprocessor=this,this.setTransactionMode("POST",!0),this.serverProcessor+=(-1!=this.serverProcessor.indexOf("?")?"&":"?")+"editing=true"}),dhtmlxError.catchError("LoadXML",function(e,t,i){var r=i[0].responseText;switch(scheduler.config.ajax_error){case"alert":window.alert(r);
break;case"console":window.console.log(r)}}),function(){function e(e){return(e+"").replace(r," ").replace(s," ")}function t(e){return(e+"").replace(a,"&#39;")}function i(){return!scheduler.config.wai_aria_attributes}var r=new RegExp("<(?:.|\n)*?>","gm"),s=new RegExp(" +","gm"),a=new RegExp("'","gm");scheduler._waiAria={getAttributeString:function(i){var r=[" "];for(var s in i)if("function"!=typeof i[s]&&"object"!=typeof i[s]){var a=t(e(i[s]));r.push(s+"='"+a+"'")}return r.push(" "),r.join(" ")},setAttributes:function(t,i){
for(var r in i)t.setAttribute(r,e(i[r]));return t},labelAttr:function(e,t){return this.setAttributes(e,{"aria-label":t})},label:function(e){return scheduler._waiAria.getAttributeString({"aria-label":e})},hourScaleAttr:function(e,t){this.labelAttr(e,t)},monthCellAttr:function(e,t){this.labelAttr(e,scheduler.templates.day_date(t))},navBarDateAttr:function(e,t){this.labelAttr(e,t)},dayHeaderAttr:function(e,t){this.labelAttr(e,t)},dayColumnAttr:function(e,t){this.dayHeaderAttr(e,scheduler.templates.day_date(t));
},headerButtonsAttributes:function(e,t){return this.setAttributes(e,{role:"button","aria-label":t})},headerToggleState:function(e,t){return this.setAttributes(e,{"aria-pressed":t?"true":"false"})},getHeaderCellAttr:function(e){return scheduler._waiAria.getAttributeString({"aria-label":e})},eventAttr:function(e,t){this._eventCommonAttr(e,t)},_eventCommonAttr:function(t,i){i.setAttribute("aria-label",e(scheduler.templates.tooltip_text(t.start_date,t.end_date,t))),scheduler.config.readonly&&i.setAttribute("aria-readonly",!0),
t.$dataprocessor_class&&i.setAttribute("aria-busy",!0),i.setAttribute("aria-selected",scheduler.getState().select_id==t.id?"true":"false")},setEventBarAttr:function(e,t){this._eventCommonAttr(e,t)},_getAttributes:function(e,t){var i={setAttribute:function(e,t){this[e]=t}};return e.apply(this,[t,i]),i},eventBarAttrString:function(e){return this.getAttributeString(this._getAttributes(this.setEventBarAttr,e))},agendaHeadAttrString:function(){return this.getAttributeString({role:"row"})},agendaHeadDateString:function(e){
return this.getAttributeString({role:"columnheader","aria-label":e})},agendaHeadDescriptionString:function(e){return this.agendaHeadDateString(e)},agendaDataAttrString:function(){return this.getAttributeString({role:"grid"})},agendaEventAttrString:function(e){var t=this._getAttributes(this._eventCommonAttr,e);return t.role="row",this.getAttributeString(t)},agendaDetailsBtnString:function(){return this.getAttributeString({role:"button","aria-label":scheduler.locale.labels.icon_details})},gridAttrString:function(){
return this.getAttributeString({role:"grid"})},gridRowAttrString:function(e){return this.agendaEventAttrString(e)},gridCellAttrString:function(e,t,i){return this.getAttributeString({role:"gridcell","aria-label":[void 0===t.label?t.id:t.label,": ",i]})},mapAttrString:function(){return this.gridAttrString()},mapRowAttrString:function(e){return this.gridRowAttrString(e)},mapDetailsBtnString:function(){return this.agendaDetailsBtnString()},minicalHeader:function(e,t){this.setAttributes(e,{id:t+"","aria-live":"assertice",
"aria-atomic":"true"})},minicalGrid:function(e,t){this.setAttributes(e,{"aria-labelledby":t+"",role:"grid"})},minicalRow:function(e){this.setAttributes(e,{role:"row"})},minicalDayCell:function(e,t){var i=t.valueOf()<scheduler._max_date.valueOf()&&t.valueOf()>=scheduler._min_date.valueOf();this.setAttributes(e,{role:"gridcell","aria-label":scheduler.templates.day_date(t),"aria-selected":i?"true":"false"})},minicalHeadCell:function(e){this.setAttributes(e,{role:"columnheader"})},weekAgendaDayCell:function(e,t){
var i=e.querySelector(".dhx_wa_scale_bar"),r=e.querySelector(".dhx_wa_day_data"),s=scheduler.uid()+"";this.setAttributes(i,{id:s}),this.setAttributes(r,{"aria-labelledby":s})},weekAgendaEvent:function(e,t){this.eventAttr(t,e)},lightboxHiddenAttr:function(e){e.setAttribute("aria-hidden","true")},lightboxVisibleAttr:function(e){e.setAttribute("aria-hidden","false")},lightboxSectionButtonAttrString:function(e){return this.getAttributeString({role:"button","aria-label":e,tabindex:"0"})},yearHeader:function(e,t){
this.setAttributes(e,{id:t+""})},yearGrid:function(e,t){this.minicalGrid(e,t)},yearHeadCell:function(e){return this.minicalHeadCell(e)},yearRow:function(e){return this.minicalRow(e)},yearDayCell:function(e){this.setAttributes(e,{role:"gridcell"})},lightboxAttr:function(e){e.setAttribute("role","dialog"),e.setAttribute("aria-hidden","true"),e.firstChild.setAttribute("role","heading")},lightboxButtonAttrString:function(e){return this.getAttributeString({role:"button","aria-label":scheduler.locale.labels[e],
tabindex:"0"})},eventMenuAttrString:function(e){return this.getAttributeString({role:"button","aria-label":scheduler.locale.labels[e]})},lightboxHeader:function(e,t){e.setAttribute("aria-label",t)},lightboxSelectAttrString:function(e){var t="";switch(e){case"%Y":t=scheduler.locale.labels.year;break;case"%m":t=scheduler.locale.labels.month;break;case"%d":t=scheduler.locale.labels.day;break;case"%H:%i":t=scheduler.locale.labels.hour+" "+scheduler.locale.labels.minute}return scheduler._waiAria.getAttributeString({
"aria-label":t})},messageButtonAttrString:function(e){return"tabindex='0' role='button' aria-label='"+e+"'"},messageInfoAttr:function(e){e.setAttribute("role","alert")},messageModalAttr:function(e,t){e.setAttribute("role","dialog"),t&&e.setAttribute("aria-labelledby",t)},quickInfoAttr:function(e){e.setAttribute("role","dialog")},quickInfoHeaderAttrString:function(){return" role='heading' "},quickInfoHeader:function(e,t){e.setAttribute("aria-label",t)},quickInfoButtonAttrString:function(e){return scheduler._waiAria.getAttributeString({
role:"button","aria-label":e,tabindex:"0"})},tooltipAttr:function(e){e.setAttribute("role","tooltip")},tooltipVisibleAttr:function(e){e.setAttribute("aria-hidden","false")},tooltipHiddenAttr:function(e){e.setAttribute("aria-hidden","true")}};for(var n in scheduler._waiAria)scheduler._waiAria[n]=function(e){return function(){return i()?" ":e.apply(this,arguments)}}(scheduler._waiAria[n])}(),dhtmlxEventable(scheduler),scheduler._detachDomEvent=function(e,t,i){e.removeEventListener?e.removeEventListener(t,i,!1):e.detachEvent&&e.detachEvent("on"+t,i);
},scheduler._init_once=function(){function e(e){for(var t=document.body;e&&e!=t;)e=e.parentNode;return!(t!=e)}function t(){return{w:window.innerWidth||document.documentElement.clientWidth,h:window.innerHeight||document.documentElement.clientHeight}}function i(e,t){return e.w==t.w&&e.h==t.h}var r=t();dhtmlxEvent(window,"resize",function(){e(scheduler._obj)&&(window.clearTimeout(scheduler._resize_timer),scheduler._resize_timer=window.setTimeout(function(){var s=t();if(!i(r,s)){if(!e(scheduler._obj))return;
scheduler.callEvent("onSchedulerResize",[])&&(scheduler.update_view(),scheduler.callEvent("onAfterSchedulerResize",[]))}r=s},20))}),scheduler._init_once=function(){}},scheduler.init=function(e,t,i){t=t||scheduler._currentDate(),i=i||"week",this._obj&&this.unset_actions(),this._obj="string"==typeof e?document.getElementById(e):e,this.$container=this._obj,this.config.wai_aria_attributes&&this.config.wai_aria_application_role&&this.$container.setAttribute("role","application"),this._skin_init&&scheduler._skin_init(),
scheduler.date.init(),this._els=[],this._scroll=!0,this._quirks=_isIE&&"BackCompat"==document.compatMode,this._quirks7=_isIE&&-1==navigator.appVersion.indexOf("MSIE 8"),this.get_elements(),this.init_templates(),this.set_actions(),this._init_once(),this._init_touch_events(),this.set_sizes(),scheduler.callEvent("onSchedulerReady",[]),this.setCurrentView(t,i)},scheduler.xy={min_event_height:40,scale_width:50,scroll_width:18,scale_height:20,month_scale_height:20,menu_width:25,margin_top:0,margin_left:0,
editor_width:140,month_head_height:22,event_header_height:14},scheduler.keys={edit_save:13,edit_cancel:27},scheduler.set_sizes=function(){var e=this._x=this._obj.clientWidth-this.xy.margin_left,t=this._y=this._obj.clientHeight-this.xy.margin_top,i=this._table_view?0:this.xy.scale_width+this.xy.scroll_width,r=this._table_view?-1:this.xy.scale_width,s=this.$container.querySelector(".dhx_cal_scale_placeholder");scheduler._is_material_skin()?(s||(s=document.createElement("div"),s.className="dhx_cal_scale_placeholder",
this.$container.insertBefore(s,this._els.dhx_cal_header[0])),s.style.display="block",this.set_xy(s,e,this.xy.scale_height+1,0,this.xy.nav_height+(this._quirks?-1:1))):s&&s.parentNode.removeChild(s),this.set_xy(this._els.dhx_cal_navline[0],e,this.xy.nav_height,0,0),this.set_xy(this._els.dhx_cal_header[0],e-i,this.xy.scale_height,r,this.xy.nav_height+(this._quirks?-1:1));var a=this._els.dhx_cal_navline[0].offsetHeight;a>0&&(this.xy.nav_height=a);var n=this.xy.scale_height+this.xy.nav_height+(this._quirks?-2:0);
this.set_xy(this._els.dhx_cal_data[0],e,t-(n+2),0,n+2)},scheduler.set_xy=function(e,t,i,r,s){e.style.width=Math.max(0,t)+"px",e.style.height=Math.max(0,i)+"px",arguments.length>3&&(e.style.left=r+"px",e.style.top=s+"px")},scheduler.get_elements=function(){for(var e=this._obj.getElementsByTagName("DIV"),t=0;t<e.length;t++){var i=scheduler._getClassName(e[t]),r=e[t].getAttribute("name")||"";i&&(i=i.split(" ")[0]),this._els[i]||(this._els[i]=[]),this._els[i].push(e[t]);var s=scheduler.locale.labels[r||i];
"string"!=typeof s&&r&&!e[t].innerHTML&&(s=r.split("_")[0]),s&&(this._waiAria.labelAttr(e[t],s),e[t].innerHTML=s)}},scheduler.unset_actions=function(){for(var e in this._els)if(this._click[e])for(var t=0;t<this._els[e].length;t++)this._els[e][t].onclick=null;this._obj.onselectstart=null,this._obj.onmousemove=null,this._obj.onmousedown=null,this._obj.onmouseup=null,this._obj.ondblclick=null,this._obj.oncontextmenu=null},scheduler.set_actions=function(){for(var e in this._els)if(this._click[e])for(var t=0;t<this._els[e].length;t++)this._els[e][t].onclick=scheduler._click[e];
this._obj.onselectstart=function(e){return!1},this._obj.onmousemove=function(e){scheduler._temp_touch_block||scheduler._on_mouse_move(e||event)},this._obj.onmousedown=function(e){scheduler._ignore_next_click||scheduler._on_mouse_down(e||event)},this._obj.onmouseup=function(e){scheduler._ignore_next_click||scheduler._on_mouse_up(e||event)},this._obj.ondblclick=function(e){scheduler._on_dbl_click(e||event)},this._obj.oncontextmenu=function(e){var t=e||event,i=t.target||t.srcElement,r=scheduler.callEvent("onContextMenu",[scheduler._locate_event(i),t]);
return r}},scheduler.select=function(e){this._select_id!=e&&(scheduler._close_not_saved(),this.editStop(!1),this.unselect(),this._select_id=e,this.updateEvent(e))},scheduler.unselect=function(e){if(!e||e==this._select_id){var t=this._select_id;this._select_id=null,t&&this.getEvent(t)&&this.updateEvent(t)}},scheduler.getState=function(){return{mode:this._mode,date:new Date(this._date),min_date:new Date(this._min_date),max_date:new Date(this._max_date),editor_id:this._edit_id,lightbox_id:this._lightbox_id,
new_event:this._new_event,select_id:this._select_id,expanded:this.expanded,drag_id:this._drag_id,drag_mode:this._drag_mode}},scheduler._click={dhx_cal_data:function(e){if(scheduler._ignore_next_click)return e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,scheduler._ignore_next_click=!1,!1;var t=e?e.target:event.srcElement,i=scheduler._locate_event(t);if(e=e||event,i){if(!scheduler.callEvent("onClick",[i,e])||scheduler.config.readonly)return}else scheduler.callEvent("onEmptyClick",[scheduler.getActionData(e).date,e]);
if(i&&scheduler.config.select){scheduler.select(i);var r=scheduler._getClassName(t);-1!=r.indexOf("_icon")&&scheduler._click.buttons[r.split(" ")[1].replace("icon_","")](i)}else scheduler._close_not_saved(),(new Date).valueOf()-(scheduler._new_event||0)>500&&scheduler.unselect()},dhx_cal_prev_button:function(){scheduler._click.dhx_cal_next_button(0,-1)},dhx_cal_next_button:function(e,t){scheduler.setCurrentView(scheduler.date.add(scheduler.date[scheduler._mode+"_start"](scheduler._date),t||1,scheduler._mode));
},dhx_cal_today_button:function(){scheduler.callEvent("onBeforeTodayDisplayed",[])&&scheduler.setCurrentView(scheduler._currentDate())},dhx_cal_tab:function(){var e=this.getAttribute("name"),t=e.substring(0,e.search("_tab"));scheduler.setCurrentView(scheduler._date,t)},buttons:{"delete":function(e){var t=scheduler.locale.labels.confirm_deleting;scheduler._dhtmlx_confirm(t,scheduler.locale.labels.title_confirm_deleting,function(){scheduler.deleteEvent(e)})},edit:function(e){scheduler.edit(e)},save:function(e){
scheduler.editStop(!0)},details:function(e){scheduler.showLightbox(e)},cancel:function(e){scheduler.editStop(!1)}}},scheduler._dhtmlx_confirm=function(e,t,i){if(!e)return i();var r={text:e};t&&(r.title=t),i&&(r.callback=function(e){e&&i()}),dhtmlx.confirm(r)},scheduler.addEventNow=function(e,t,i){var r={};scheduler._isObject(e)&&!scheduler._isDate(e)&&(r=e,e=null);var s=6e4*(this.config.event_duration||this.config.time_step);e||(e=r.start_date||Math.round(scheduler._currentDate().valueOf()/s)*s);var a=new Date(e);
if(!t){var n=this.config.first_hour;n>a.getHours()&&(a.setHours(n),e=a.valueOf()),t=e.valueOf()+s}var d=new Date(t);a.valueOf()==d.valueOf()&&d.setTime(d.valueOf()+s),r.start_date=r.start_date||a,r.end_date=r.end_date||d,r.text=r.text||this.locale.labels.new_event,r.id=this._drag_id=r.id||this.uid(),this._drag_mode="new-size",this._loading=!0;var o=this.addEvent(r);return this.callEvent("onEventCreated",[this._drag_id,i]),this._loading=!1,this._drag_event={},this._on_mouse_up(i),o},scheduler._on_dbl_click=function(e,t){
if(t=t||e.target||e.srcElement,!this.config.readonly){var i=scheduler._getClassName(t).split(" ")[0];switch(i){case"dhx_scale_holder":case"dhx_scale_holder_now":case"dhx_month_body":case"dhx_wa_day_data":if(!scheduler.config.dblclick_create)break;this.addEventNow(this.getActionData(e).date,null,e);break;case"dhx_cal_event":case"dhx_wa_ev_body":case"dhx_agenda_line":case"dhx_grid_event":case"dhx_cal_event_line":case"dhx_cal_event_clear":var r=this._locate_event(t);if(!this.callEvent("onDblClick",[r,e]))return;
this.config.details_on_dblclick||this._table_view||!this.getEvent(r)._timed||!this.config.select?this.showLightbox(r):this.edit(r);break;case"dhx_time_block":case"dhx_cal_container":return;default:var s=this["dblclick_"+i];if(s)s.call(this,e);else if(t.parentNode&&t!=this)return scheduler._on_dbl_click(e,t.parentNode)}}},scheduler._get_column_index=function(e){var t=0;if(this._cols){for(var i=0,r=0;i+this._cols[r]<e&&r<this._cols.length;)i+=this._cols[r],r++;if(t=r+(this._cols[r]?(e-i)/this._cols[r]:0),
this._ignores&&t>=this._cols.length)for(;t>=1&&this._ignores[Math.floor(t)];)t--}return t},scheduler._week_indexes_from_pos=function(e){if(this._cols){var t=this._get_column_index(e.x);return e.x=Math.min(this._cols.length-1,Math.max(0,Math.ceil(t)-1)),e.y=Math.max(0,Math.ceil(60*e.y/(this.config.time_step*this.config.hour_size_px))-1)+this.config.first_hour*(60/this.config.time_step),e}return e},scheduler._mouse_coords=function(e){var t,i=document.body,r=document.documentElement;t=_isIE||!e.pageX&&!e.pageY?{
x:e.clientX+(i.scrollLeft||r.scrollLeft||0)-i.clientLeft,y:e.clientY+(i.scrollTop||r.scrollTop||0)-i.clientTop}:{x:e.pageX,y:e.pageY},t.x-=this.$domHelpers.getAbsoluteLeft(this._obj)+(this._table_view?0:this.xy.scale_width),t.y-=this.$domHelpers.getAbsoluteTop(this._obj)+this.xy.nav_height+(this._dy_shift||0)+this.xy.scale_height-this._els.dhx_cal_data[0].scrollTop,t.ev=e;var s=this["mouse_"+this._mode];if(s)t=s.call(this,t);else if(this._table_view){var a=this._get_column_index(t.x);if(!this._cols||!this._colsS)return t;
var n=0;for(n=1;n<this._colsS.heights.length&&!(this._colsS.heights[n]>t.y);n++);t.y=Math.ceil(24*(Math.max(0,a)+7*Math.max(0,n-1))*60/this.config.time_step),(scheduler._drag_mode||"month"==this._mode)&&(t.y=24*(Math.max(0,Math.ceil(a)-1)+7*Math.max(0,n-1))*60/this.config.time_step),"move"==this._drag_mode&&scheduler._ignores_detected&&scheduler.config.preserve_length&&(t._ignores=!0,this._drag_event._event_length||(this._drag_event._event_length=this._get_real_event_length(this._drag_event.start_date,this._drag_event.end_date,{
x_step:1,x_unit:"day"}))),t.x=0}else t=this._week_indexes_from_pos(t);return t.timestamp=+new Date,t},scheduler._close_not_saved=function(){if((new Date).valueOf()-(scheduler._new_event||0)>500&&scheduler._edit_id){var e=scheduler.locale.labels.confirm_closing;scheduler._dhtmlx_confirm(e,scheduler.locale.labels.title_confirm_closing,function(){scheduler.editStop(scheduler.config.positive_closing)}),e&&(this._drag_id=this._drag_pos=this._drag_mode=null)}},scheduler._correct_shift=function(e,t){return e-=6e4*(new Date(scheduler._min_date).getTimezoneOffset()-new Date(e).getTimezoneOffset())*(t?-1:1);
},scheduler._is_pos_changed=function(e,t){function i(e,t,i){return!!(Math.abs(e-t)>i)}if(!e||!this._drag_pos)return!0;var r=100,s=5;return!!(this._drag_pos.has_moved||!this._drag_pos.timestamp||t.timestamp-this._drag_pos.timestamp>r||i(e.ev.clientX,t.ev.clientX,s)||i(e.ev.clientY,t.ev.clientY,s))},scheduler._correct_drag_start_date=function(e){var t;scheduler.matrix&&(t=scheduler.matrix[scheduler._mode]),t=t||{x_step:1,x_unit:"day"},e=new Date(e);var i=1;return(t._start_correction||t._end_correction)&&(i=60*(t.last_hour||0)-(60*e.getHours()+e.getMinutes())||1),
1*e+(scheduler._get_fictional_event_length(e,i,t)-i)},scheduler._correct_drag_end_date=function(e,t){var i;scheduler.matrix&&(i=scheduler.matrix[scheduler._mode]),i=i||{x_step:1,x_unit:"day"};var r=1*e+scheduler._get_fictional_event_length(e,t,i);return new Date(1*r-(scheduler._get_fictional_event_length(r,-1,i,-1)+1))},scheduler._on_mouse_move=function(e){if(this._drag_mode){var t=this._mouse_coords(e);if(this._is_pos_changed(this._drag_pos,t)){var i,r;if(this._edit_id!=this._drag_id&&this._close_not_saved(),
!this._drag_mode)return;var s=null;if(this._drag_pos&&!this._drag_pos.has_moved&&(s=this._drag_pos,s.has_moved=!0),this._drag_pos=t,this._drag_pos.has_moved=!0,"create"==this._drag_mode){if(s&&(t=s),this._close_not_saved(),this.unselect(this._select_id),this._loading=!0,i=this._get_date_from_pos(t).valueOf(),!this._drag_start){var a=this.callEvent("onBeforeEventCreated",[e,this._drag_id]);return a?(this._loading=!1,void(this._drag_start=i)):void(this._loading=!1)}r=i,r==this._drag_start;var n=new Date(this._drag_start),d=new Date(r);
"day"!=this._mode&&"week"!=this._mode||n.getHours()!=d.getHours()||n.getMinutes()!=d.getMinutes()||(d=new Date(this._drag_start+1e3)),this._drag_id=this.uid(),this.addEvent(n,d,this.locale.labels.new_event,this._drag_id,t.fields),this.callEvent("onEventCreated",[this._drag_id,e]),this._loading=!1,this._drag_mode="new-size"}var o,l=this.getEvent(this._drag_id);if(scheduler.matrix&&(o=scheduler.matrix[scheduler._mode]),o=o||{x_step:1,x_unit:"day"},"move"==this._drag_mode)i=this._min_date.valueOf()+6e4*(t.y*this.config.time_step+24*t.x*60-(scheduler._move_pos_shift||0)),
!t.custom&&this._table_view&&(i+=1e3*this.date.time_part(l.start_date)),i=this._correct_shift(i),t._ignores&&this.config.preserve_length&&this._table_view?(i=scheduler._correct_drag_start_date(i),r=scheduler._correct_drag_end_date(i,this._drag_event._event_length)):r=l.end_date.valueOf()-(l.start_date.valueOf()-i);else{if(i=l.start_date.valueOf(),r=l.end_date.valueOf(),this._table_view){var h=this._min_date.valueOf()+t.y*this.config.time_step*6e4+(t.custom?0:864e5);if("month"==this._mode)if(h=this._correct_shift(h,!1),
this._drag_from_start){var _=864e5;h<=scheduler.date.date_part(new Date(r+_-1)).valueOf()&&(i=h-_)}else r=h;else this.config.preserve_length?t.resize_from_start?i=scheduler._correct_drag_start_date(h):r=scheduler._correct_drag_end_date(h,0):t.resize_from_start?i=h:r=h}else{var c=this.date.date_part(new Date(l.end_date.valueOf()-1)).valueOf(),u=new Date(c);r=c+t.y*this.config.time_step*6e4,r+=6e4*(new Date(r).getTimezoneOffset()-u.getTimezoneOffset()),this._els.dhx_cal_data[0].style.cursor="s-resize",
("week"==this._mode||"day"==this._mode)&&(r=this._correct_shift(r))}if("new-size"==this._drag_mode)if(r<=this._drag_start){var g=t.shift||(this._table_view&&!t.custom?864e5:0);i=r-(t.shift?0:g),r=this._drag_start+(g||6e4*this.config.time_step)}else i=this._drag_start;else i>=r&&(r=i+6e4*this.config.time_step)}var f=new Date(r-1),v=new Date(i);if("move"==this._drag_mode&&scheduler.config.limit_drag_out&&(+v<+scheduler._min_date||+r>+scheduler._max_date)){if(+l.start_date<+scheduler._min_date||+l.end_date>+scheduler._max_date)v=new Date(l.start_date),
r=new Date(l.end_date);else{var m=r-v;+v<+scheduler._min_date?(v=new Date(scheduler._min_date),t._ignores&&this.config.preserve_length&&this._table_view?(v=new Date(scheduler._correct_drag_start_date(v)),o._start_correction&&(v=new Date(v.valueOf()+o._start_correction)),r=new Date(1*v+this._get_fictional_event_length(v,this._drag_event._event_length,o))):r=new Date(+v+m)):(r=new Date(scheduler._max_date),t._ignores&&this.config.preserve_length&&this._table_view?(o._end_correction&&(r=new Date(r.valueOf()-o._end_correction)),
r=new Date(1*r-this._get_fictional_event_length(r,0,o,!0)),v=new Date(1*r-this._get_fictional_event_length(r,this._drag_event._event_length,o,!0)),this._ignores_detected&&(v=scheduler.date.add(v,o.x_step,o.x_unit),r=new Date(1*r-this._get_fictional_event_length(r,0,o,!0)),r=scheduler.date.add(r,o.x_step,o.x_unit))):v=new Date(+r-m))}var f=new Date(r-1)}if(!this._table_view&&!scheduler.config.all_timed&&(!scheduler._get_section_view()&&t.x!=this._get_event_sday({start_date:new Date(r),end_date:new Date(r)
})||new Date(r).getHours()>=this.config.last_hour)){var m=r-v,_=this._min_date.valueOf()+24*t.x*60*6e4;r=scheduler.date.date_part(new Date(_)),r.setHours(this.config.last_hour),f=new Date(r-1),"move"==this._drag_mode&&(v=new Date(+r-m))}if(this._table_view||f.getDate()==v.getDate()&&f.getHours()<this.config.last_hour||scheduler._allow_dnd)if(l.start_date=v,l.end_date=new Date(r),this.config.update_render){var p=scheduler._els.dhx_cal_data[0].scrollTop;this.update_view(),scheduler._els.dhx_cal_data[0].scrollTop=p;
}else this.updateEvent(this._drag_id);this._table_view&&this.for_rendered(this._drag_id,function(e){e.className+=" dhx_in_move dhx_cal_event_drag"}),this.callEvent("onEventDrag",[this._drag_id,this._drag_mode,e])}}else if(scheduler.checkEvent("onMouseMove")){var x=this._locate_event(e.target||e.srcElement);this.callEvent("onMouseMove",[x,e])}},scheduler._on_mouse_down=function(e,t){if(2!=e.button&&!this.config.readonly&&!this._drag_mode){t=t||e.target||e.srcElement;var i=scheduler._getClassName(t).split(" ")[0];
switch(i){case"dhx_cal_event_line":case"dhx_cal_event_clear":this._table_view&&(this._drag_mode="move");break;case"dhx_event_move":case"dhx_wa_ev_body":this._drag_mode="move";break;case"dhx_event_resize":this._drag_mode="resize";var r=scheduler._getClassName(t);r.indexOf("dhx_event_resize_end")<0?scheduler._drag_from_start=!0:scheduler._drag_from_start=!1;break;case"dhx_scale_holder":case"dhx_scale_holder_now":case"dhx_month_body":case"dhx_matrix_cell":case"dhx_marked_timespan":this._drag_mode="create";
break;case"":if(t.parentNode)return scheduler._on_mouse_down(e,t.parentNode);break;default:if((!scheduler.checkEvent("onMouseDown")||scheduler.callEvent("onMouseDown",[i,e]))&&t.parentNode&&t!=this&&"dhx_body"!=i)return scheduler._on_mouse_down(e,t.parentNode);this._drag_mode=null,this._drag_id=null}if(this._drag_mode){var s=this._locate_event(t);if(this.config["drag_"+this._drag_mode]&&this.callEvent("onBeforeDrag",[s,this._drag_mode,e])){if(this._drag_id=s,(this._edit_id!=this._drag_id||this._edit_id&&"create"==this._drag_mode)&&this._close_not_saved(),
!this._drag_mode)return;this._drag_event=scheduler._lame_clone(this.getEvent(this._drag_id)||{}),this._drag_pos=this._mouse_coords(e)}else this._drag_mode=this._drag_id=0}this._drag_start=null}},scheduler._get_private_properties=function(e){var t={};for(var i in e)0===i.indexOf("_")&&(t[i]=!0);return t},scheduler._clear_temporary_properties=function(e,t){var i=this._get_private_properties(e),r=this._get_private_properties(t);for(var s in r)i[s]||delete t[s]},scheduler._on_mouse_up=function(e){if(!e||2!=e.button||!this._mobile){
if(this._drag_mode&&this._drag_id){this._els.dhx_cal_data[0].style.cursor="default";var t=this._drag_id,i=this._drag_mode,r=!this._drag_pos||this._drag_pos.has_moved,s=this.getEvent(this._drag_id);if(r&&(this._drag_event._dhx_changed||!this._drag_event.start_date||s.start_date.valueOf()!=this._drag_event.start_date.valueOf()||s.end_date.valueOf()!=this._drag_event.end_date.valueOf())){var a="new-size"==this._drag_mode;if(this.callEvent("onBeforeEventChanged",[s,e,a,this._drag_event]))if(this._drag_id=this._drag_mode=null,
a&&this.config.edit_on_create){if(this.unselect(),this._new_event=new Date,this._table_view||this.config.details_on_create||!this.config.select||!this.isOneDayEvent(this.getEvent(t)))return scheduler.callEvent("onDragEnd",[t,i,e]),this.showLightbox(t);this._drag_pos=!0,this._select_id=this._edit_id=t}else this._new_event||this.callEvent(a?"onEventAdded":"onEventChanged",[t,this.getEvent(t)]);else a?this.deleteEvent(s.id,!0):(this._drag_event._dhx_changed=!1,this._clear_temporary_properties(s,this._drag_event),
scheduler._lame_copy(s,this._drag_event),this.updateEvent(s.id))}this._drag_pos&&(this._drag_pos.has_moved||this._drag_pos===!0)&&(this._drag_id=this._drag_mode=null,this.render_view_data()),scheduler.callEvent("onDragEnd",[t,i,e])}this._drag_id=null,this._drag_mode=null,this._drag_pos=null}},scheduler._trigger_dyn_loading=function(){return this._load_mode&&this._load()?(this._render_wait=!0,!0):!1},scheduler.update_view=function(){this._reset_ignores();var e=this[this._mode+"_view"];return e?e(!0):this._reset_scale(),
this._trigger_dyn_loading()?!0:void this.render_view_data()},scheduler.isViewExists=function(e){return!!(scheduler[e+"_view"]||scheduler.date[e+"_start"]&&scheduler.templates[e+"_date"]&&scheduler.templates[e+"_scale_date"])},scheduler._set_aria_buttons_attrs=function(){for(var e=["dhx_cal_next_button","dhx_cal_prev_button","dhx_cal_tab","dhx_cal_today_button"],t=0;t<e.length;t++)for(var i=this._els[e[t]],r=0;i&&r<i.length;r++){var s=i[r].getAttribute("name"),a=this.locale.labels[e[t]];s&&(a=this.locale.labels[s]||a),
"dhx_cal_next_button"==e[t]?a=this.locale.labels.next:"dhx_cal_prev_button"==e[t]&&(a=this.locale.labels.prev),this._waiAria.headerButtonsAttributes(i[r],a||"")}},scheduler.updateView=function(e,t){e=e||this._date,t=t||this._mode;var i="dhx_cal_data",r=this._obj,s="dhx_scheduler_"+this._mode,a="dhx_scheduler_"+t;this._mode&&-1!=r.className.indexOf(s)?r.className=r.className.replace(s,a):r.className+=" "+a;var n,d="dhx_multi_day",o=this._mode==t&&this.config.preserve_scroll?this._els[i][0].scrollTop:!1;
this._els[d]&&this._els[d][0]&&(n=this._els[d][0].scrollTop),this[this._mode+"_view"]&&t&&this._mode!=t&&this[this._mode+"_view"](!1),this._close_not_saved(),this._els[d]&&(this._els[d][0].parentNode.removeChild(this._els[d][0]),this._els[d]=null),this._mode=t,this._date=e,this._table_view="month"==this._mode,this._dy_shift=0,this._set_aria_buttons_attrs();var l=this._els.dhx_cal_tab;if(l)for(var h=0;h<l.length;h++){var _=l[h],c=_.className;c=c.replace(/ active/g,""),_.getAttribute("name")==this._mode+"_tab"?(c+=" active",
this._waiAria.headerToggleState(_,!0)):this._waiAria.headerToggleState(_,!1),_.className=c}this.update_view(),"number"==typeof o&&(this._els[i][0].scrollTop=o),"number"==typeof n&&this._els[d]&&this._els[d][0]&&(this._els[d][0].scrollTop=n)},scheduler.setCurrentView=function(e,t){this.callEvent("onBeforeViewChange",[this._mode,this._date,t||this._mode,e||this._date])&&(this.updateView(e,t),this.callEvent("onViewChange",[this._mode,this._date]))},scheduler._render_x_header=function(e,t,i,r,s){s=s||0;
var a=document.createElement("div");a.className="dhx_scale_bar",this.templates[this._mode+"_scalex_class"]&&(a.className+=" "+this.templates[this._mode+"_scalex_class"](i));var n=this._cols[e]-1;"month"==this._mode&&0===e&&this.config.left_border&&(a.className+=" dhx_scale_bar_border",t+=1),this.set_xy(a,n,this.xy.scale_height-2,t,s);var d=this.templates[this._mode+"_scale_date"](i,this._mode);a.innerHTML=d,this._waiAria.dayHeaderAttr(a,d),r.appendChild(a)},scheduler._get_columns_num=function(e,t){
var i=7;if(!scheduler._table_view){var r=scheduler.date["get_"+scheduler._mode+"_end"];r&&(t=r(e)),i=Math.round((t.valueOf()-e.valueOf())/864e5)}return i},scheduler._get_timeunit_start=function(){return this.date[this._mode+"_start"](new Date(this._date.valueOf()))},scheduler._get_view_end=function(){var e=this._get_timeunit_start(),t=scheduler.date.add(e,1,this._mode);if(!scheduler._table_view){var i=scheduler.date["get_"+scheduler._mode+"_end"];i&&(t=i(e))}return t},scheduler._calc_scale_sizes=function(e,t,i){
var r=e,s=this._get_columns_num(t,i);this._process_ignores(t,s,"day",1);for(var a=s-this._ignores_detected,n=0;s>n;n++)this._ignores[n]?(this._cols[n]=0,a++):this._cols[n]=Math.floor(r/(a-n)),r-=this._cols[n],this._colsS[n]=(this._cols[n-1]||0)+(this._colsS[n-1]||(this._table_view?0:this.xy.scale_width+2));this._colsS.col_length=s,this._colsS[s]=this._cols[s-1]+this._colsS[s-1]||0},scheduler._set_scale_col_size=function(e,t,i){var r=this.config;this.set_xy(e,t-1,r.hour_size_px*(r.last_hour-r.first_hour),i+this.xy.scale_width+1,0);
},scheduler._render_scales=function(e,t){var i=new Date(scheduler._min_date),r=new Date(scheduler._max_date),s=this.date.date_part(scheduler._currentDate()),a=parseInt(e.style.width,10),n=new Date(this._min_date),d=this._get_columns_num(i,r);this._calc_scale_sizes(a,i,r);var o=0;e.innerHTML="";for(var l=0;d>l;l++){if(this._ignores[l]||this._render_x_header(l,o,n,e),!this._table_view){var h=document.createElement("div"),_="dhx_scale_holder";n.valueOf()==s.valueOf()&&(_="dhx_scale_holder_now"),this._ignores_detected&&this._ignores[l]&&(_+=" dhx_scale_ignore"),
h.className=_+" "+this.templates.week_date_class(n,s),this._waiAria.dayColumnAttr(h,n),this._set_scale_col_size(h,this._cols[l],o),t.appendChild(h),this.callEvent("onScaleAdd",[h,n])}o+=this._cols[l],n=this.date.add(n,1,"day"),n=this.date.day_start(n)}},scheduler._reset_scale=function(){if(this.templates[this._mode+"_date"]){var e=this._els.dhx_cal_header[0],t=this._els.dhx_cal_data[0],i=this.config;e.innerHTML="",t.innerHTML="";var r=(i.readonly||!i.drag_resize?" dhx_resize_denied":"")+(i.readonly||!i.drag_move?" dhx_move_denied":"");
t.className="dhx_cal_data"+r,this._scales={},this._cols=[],this._colsS={height:0},this._dy_shift=0,this.set_sizes();var s,a,n=this._get_timeunit_start(),d=scheduler._get_view_end();s=a=this._table_view?scheduler.date.week_start(n):n,this._min_date=s;var o=this.templates[this._mode+"_date"](n,d,this._mode);if(this._els.dhx_cal_date[0].innerHTML=o,this._waiAria.navBarDateAttr(this._els.dhx_cal_date[0],o),this._max_date=d,scheduler._render_scales(e,t),this._table_view)this._reset_month_scale(t,n,a);else if(this._reset_hours_scale(t,n,a),
i.multi_day){var l="dhx_multi_day";this._els[l]&&(this._els[l][0].parentNode.removeChild(this._els[l][0]),this._els[l]=null);var h=this._els.dhx_cal_navline[0],_=h.offsetHeight+this._els.dhx_cal_header[0].offsetHeight+1,c=document.createElement("div");c.className=l,c.style.visibility="hidden",this.set_xy(c,Math.max(this._colsS[this._colsS.col_length]+this.xy.scroll_width-2,0),0,0,_),t.parentNode.insertBefore(c,t);var u=c.cloneNode(!0);u.className=l+"_icon",u.style.visibility="hidden",this.set_xy(u,this.xy.scale_width,0,0,_),
c.appendChild(u),this._els[l]=[c,u],this._els[l][0].onclick=this._click.dhx_cal_data}}},scheduler._reset_hours_scale=function(e,t,i){var r=document.createElement("div");r.className="dhx_scale_holder";for(var s=new Date(1980,1,1,this.config.first_hour,0,0),a=1*this.config.first_hour;a<this.config.last_hour;a++){var n=document.createElement("div");n.className="dhx_scale_hour",n.style.height=this.config.hour_size_px+"px";var d=this.xy.scale_width;this.config.left_border&&(n.className+=" dhx_scale_hour_border"),
n.style.width=d+"px";var o=scheduler.templates.hour_scale(s);n.innerHTML=o,this._waiAria.hourScaleAttr(n,o),r.appendChild(n),s=this.date.add(s,1,"hour")}e.appendChild(r),this.config.scroll_hour&&(e.scrollTop=this.config.hour_size_px*(this.config.scroll_hour-this.config.first_hour))},scheduler._currentDate=function(){return scheduler.config.now_date?new Date(scheduler.config.now_date):new Date},scheduler._reset_ignores=function(){this._ignores={},this._ignores_detected=0},scheduler._process_ignores=function(e,t,i,r,s){
this._reset_ignores();var a=scheduler["ignore_"+this._mode];if(a)for(var n=new Date(e),d=0;t>d;d++)a(n)&&(this._ignores_detected+=1,this._ignores[d]=!0,s&&t++),n=scheduler.date.add(n,r,i),scheduler.date[i+"_start"]&&(n=scheduler.date[i+"_start"](n))},scheduler._render_month_scale=function(e,t,i,r){function s(e){var t=scheduler._colsS.height;return void 0!==scheduler._colsS.heights[e+1]&&(t=scheduler._colsS.heights[e+1]-(scheduler._colsS.heights[e]||0)),t}var a=scheduler.date.add(t,1,"month"),n=new Date(i),d=scheduler._currentDate();
this.date.date_part(d),this.date.date_part(i),r=r||Math.ceil(Math.round((a.valueOf()-i.valueOf())/864e5)/7);for(var o=[],l=0;7>=l;l++){var h=(this._cols[l]||0)-1;0===l&&this.config.left_border&&(h-=1),o[l]=h+"px"}var _=0,c=document.createElement("table");c.setAttribute("cellpadding","0"),c.setAttribute("cellspacing","0");var u=document.createElement("tbody");c.appendChild(u);for(var g=[],l=0;r>l;l++){var f=document.createElement("tr");u.appendChild(f);for(var v=Math.max(s(l)-scheduler.xy.month_head_height,0),m=0;7>m;m++){
var p=document.createElement("td");f.appendChild(p);var x="";t>i?x="dhx_before":i>=a?x="dhx_after":i.valueOf()==d.valueOf()&&(x="dhx_now"),this._ignores_detected&&this._ignores[m]&&(x+=" dhx_scale_ignore"),p.className=x+" "+this.templates.month_date_class(i,d);var b="dhx_month_body",y="dhx_month_head";if(0===m&&this.config.left_border&&(b+=" dhx_month_body_border",y+=" dhx_month_head_border"),this._ignores_detected&&this._ignores[m])p.appendChild(document.createElement("div")),p.appendChild(document.createElement("div"));else{
this._waiAria.monthCellAttr(p,i);var w=document.createElement("div");w.className=y,w.innerHTML=this.templates.month_day(i),p.appendChild(w);var D=document.createElement("div");D.className=b,D.style.height=v+"px",D.style.width=o[m],p.appendChild(D)}g.push(i);var E=i.getDate();i=this.date.add(i,1,"day"),i.getDate()-E>1&&(i=new Date(i.getFullYear(),i.getMonth(),E+1,12,0))}scheduler._colsS.heights[l]=_,_+=s(l)}this._min_date=n,this._max_date=i,e.innerHTML="",e.appendChild(c),this._scales={};for(var A=e.getElementsByTagName("div"),l=0;l<g.length;l++){
var e=A[2*l+1],k=g[l];this._scales[+k]=e}for(var l=0;l<g.length;l++){var k=g[l];this.callEvent("onScaleAdd",[this._scales[+k],k])}return this._max_date},scheduler._reset_month_scale=function(e,t,i,r){var s=scheduler.date.add(t,1,"month"),a=scheduler._currentDate();this.date.date_part(a),this.date.date_part(i),r=r||Math.ceil(Math.round((s.valueOf()-i.valueOf())/864e5)/7);var n=Math.floor(e.clientHeight/r)-this.xy.month_head_height;return this._colsS.height=n+this.xy.month_head_height,this._colsS.heights=[],
scheduler._render_month_scale(e,t,i,r)},scheduler.getLabel=function(e,t){for(var i=this.config.lightbox.sections,r=0;r<i.length;r++)if(i[r].map_to==e)for(var s=i[r].options,a=0;a<s.length;a++)if(s[a].key==t)return s[a].label;return""},scheduler.updateCollection=function(e,t){var i=scheduler.serverList(e);return i?(i.splice(0,i.length),i.push.apply(i,t||[]),scheduler.callEvent("onOptionsLoad",[]),scheduler.resetLightbox(),!0):!1},scheduler._lame_clone=function(e,t){var i,r,s;for(t=t||[],i=0;i<t.length;i+=2)if(e===t[i])return t[i+1];
if(e&&"object"==typeof e){for(s={},r=[Array,Date,Number,String,Boolean],i=0;i<r.length;i++)e instanceof r[i]&&(s=i?new r[i](e):new r[i]);t.push(e,s);for(i in e)Object.prototype.hasOwnProperty.apply(e,[i])&&(s[i]=scheduler._lame_clone(e[i],t))}return s||e},scheduler._lame_copy=function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e},scheduler._get_date_from_pos=function(e){var t=this._min_date.valueOf()+6e4*(e.y*this.config.time_step+24*(this._table_view?0:e.x)*60);return new Date(this._correct_shift(t));
},scheduler.getActionData=function(e){var t=this._mouse_coords(e);return{date:this._get_date_from_pos(t),section:t.section}},scheduler._focus=function(e,t){if(e&&e.focus)if(this._mobile)window.setTimeout(function(){e.focus()},10);else try{t&&e.select&&e.offsetWidth&&e.select(),e.focus()}catch(i){}},scheduler._get_real_event_length=function(e,t,i){var r,s=t-e,a=i._start_correction+i._end_correction||0,n=this["ignore_"+this._mode],d=0;i.render?(d=this._get_date_index(i,e),r=this._get_date_index(i,t)):r=Math.round(s/60/60/1e3/24);
for(var o=!0;r>d;){var l=scheduler.date.add(t,-i.x_step,i.x_unit);n&&n(t)&&(!o||o&&n(l))?s-=t-l:(o=!1,s-=a),t=l,r--}return s},scheduler._get_fictional_event_length=function(e,t,i,r){var s=new Date(e),a=r?-1:1;if(i._start_correction||i._end_correction){var n;n=r?60*s.getHours()+s.getMinutes()-60*(i.first_hour||0):60*(i.last_hour||0)-(60*s.getHours()+s.getMinutes());var d=60*(i.last_hour-i.first_hour),o=Math.ceil((t/6e4-n)/d);0>o&&(o=0),t+=o*(1440-d)*60*1e3}var l,h=new Date(1*e+t*a),_=this["ignore_"+this._mode],c=0;
for(i.render?(c=this._get_date_index(i,s),l=this._get_date_index(i,h)):l=Math.round(t/60/60/1e3/24);l*a>=c*a;){var u=scheduler.date.add(s,i.x_step*a,i.x_unit);_&&_(s)&&(t+=(u-s)*a,l+=a),s=u,c+=a}return t},scheduler._get_section_view=function(){return this.matrix&&this.matrix[this._mode]?this.matrix[this._mode]:this._props&&this._props[this._mode]?this._props[this._mode]:null},scheduler._get_section_property=function(){return this.matrix&&this.matrix[this._mode]?this.matrix[this._mode].y_property:this._props&&this._props[this._mode]?this._props[this._mode].map_to:null;
},scheduler._is_initialized=function(){var e=this.getState();return this._obj&&e.date&&e.mode},scheduler._is_lightbox_open=function(){var e=this.getState();return null!==e.lightbox_id&&void 0!==e.lightbox_id},scheduler._getClassName=function(e){if(!e)return"";var t=e.className||"";return t.baseVal&&(t=t.baseVal),t.indexOf||(t=""),t||""},scheduler.$domHelpers={getAbsoluteLeft:function(e){return this.getOffset(e).left},getAbsoluteTop:function(e){return this.getOffset(e).top},getOffsetSum:function(e){
for(var t=0,i=0;e;)t+=parseInt(e.offsetTop),i+=parseInt(e.offsetLeft),e=e.offsetParent;return{top:t,left:i}},getOffsetRect:function(e){var t=e.getBoundingClientRect(),i=0,r=0;if(/Mobi/.test(navigator.userAgent)){var s=document.createElement("div");s.style.position="absolute",s.style.left="0px",s.style.top="0px",s.style.width="1px",s.style.height="1px",document.body.appendChild(s);var a=s.getBoundingClientRect();i=t.top-a.top,r=t.left-a.left,s.parentNode.removeChild(s)}else{var n=document.body,d=document.documentElement,o=window.pageYOffset||d.scrollTop||n.scrollTop,l=window.pageXOffset||d.scrollLeft||n.scrollLeft,h=d.clientTop||n.clientTop||0,_=d.clientLeft||n.clientLeft||0;
i=t.top+o-h,r=t.left+l-_}return{top:Math.round(i),left:Math.round(r)}},getOffset:function(e){return e.getBoundingClientRect?this.getOffsetRect(e):this.getOffsetSum(e)}},scheduler.$env={isIE:navigator.userAgent.indexOf("MSIE")>=0||navigator.userAgent.indexOf("Trident")>=0,isIE6:!window.XMLHttpRequest&&navigator.userAgent.indexOf("MSIE")>=0,isIE7:navigator.userAgent.indexOf("MSIE 7.0")>=0&&navigator.userAgent.indexOf("Trident")<0,isIE8:navigator.userAgent.indexOf("MSIE 8.0")>=0&&navigator.userAgent.indexOf("Trident")>=0,
isOpera:navigator.userAgent.indexOf("Opera")>=0,isChrome:navigator.userAgent.indexOf("Chrome")>=0,isKHTML:navigator.userAgent.indexOf("Safari")>=0||navigator.userAgent.indexOf("Konqueror")>=0,isFF:navigator.userAgent.indexOf("Firefox")>=0,isIPad:navigator.userAgent.search(/iPad/gi)>=0,isEdge:-1!=navigator.userAgent.indexOf("Edge")},scheduler.$ajax={_obj:scheduler,cache:!0,method:"get",parse:function(e){if("string"!=typeof e)return e;var t;return e=e.replace(/^[\s]+/,""),window.DOMParser&&!scheduler.$env.isIE?t=(new window.DOMParser).parseFromString(e,"text/xml"):window.ActiveXObject!==window.undefined&&(t=new window.ActiveXObject("Microsoft.XMLDOM"),
t.async="false",t.loadXML(e)),t},xmltop:function(e,t,i){if("undefined"==typeof t.status||t.status<400){var r=t.responseXML?t.responseXML||t:this.parse(t.responseText||t);if(r&&null!==r.documentElement&&!r.getElementsByTagName("parsererror").length)return r.getElementsByTagName(e)[0]}return-1!==i&&this._obj.callEvent("onLoadXMLError",["Incorrect XML",arguments[1],i]),document.createElement("DIV")},xpath:function(e,t){if(t.nodeName||(t=t.responseXML||t),scheduler.$env.isIE)return t.selectNodes(e)||[];
for(var i,r=[],s=(t.ownerDocument||t).evaluate(e,t,null,XPathResult.ANY_TYPE,null);;){if(i=s.iterateNext(),!i)break;r.push(i)}return r},query:function(e){this._call(e.method||"GET",e.url,e.data||"",e.async||!0,e.callback,null,e.headers)},get:function(e,t){this._call("GET",e,null,!0,t)},getSync:function(e){return this._call("GET",e,null,!1)},put:function(e,t,i){this._call("PUT",e,t,!0,i)},del:function(e,t,i){this._call("DELETE",e,t,!0,i)},post:function(e,t,i){1==arguments.length?t="":2!=arguments.length||"function"!=typeof t&&"function"!=typeof window[t]?t=String(t):(i=t,
t=""),this._call("POST",e,t,!0,i)},postSync:function(e,t){return t=null===t?"":String(t),this._call("POST",e,t,!1)},getLong:function(e,t){this._call("GET",e,null,!0,t,{url:e})},postLong:function(e,t,i){2==arguments.length&&(i=t,t=""),this._call("POST",e,t,!0,i,{url:e,postData:t})},_call:function(e,t,i,r,s,a,n){var d=this._obj,o=window.XMLHttpRequest&&!d.$env.isIE?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),l=null!==navigator.userAgent.match(/AppleWebKit/)&&null!==navigator.userAgent.match(/Qt/)&&null!==navigator.userAgent.match(/Safari/);
if(r&&(o.onreadystatechange=function(){if(4==o.readyState||l&&3==o.readyState){if((200!=o.status||""===o.responseText)&&!d.callEvent("onAjaxError",[o]))return;window.setTimeout(function(){"function"==typeof s&&s.apply(window,[{xmlDoc:o,filePath:t}]),a&&("undefined"!=typeof a.postData?this.postLong(a.url,a.postData,s):this.getLong(a.url,s)),s=null,o=null},1)}}),"GET"!=e||this.cache||(t+=(t.indexOf("?")>=0?"&":"?")+"dhxr"+(new Date).getTime()+"=1"),o.open(e,t,r),n)for(var h in n)o.setRequestHeader(h,n[h]);else"POST"==e.toUpperCase()||"PUT"==e||"DELETE"==e?o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"):"GET"==e&&(i=null);
return o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.send(i),r?void 0:{xmlDoc:o,filePath:t}},urlSeparator:function(e){return-1!=e.indexOf("?")?"&":"?"}},scheduler.date={init:function(){for(var e=scheduler.locale.date.month_short,t=scheduler.locale.date.month_short_hash={},i=0;i<e.length;i++)t[e[i]]=i;for(var e=scheduler.locale.date.month_full,t=scheduler.locale.date.month_full_hash={},i=0;i<e.length;i++)t[e[i]]=i},date_part:function(e){var t=new Date(e);return e.setHours(0),e.setMinutes(0),
e.setSeconds(0),e.setMilliseconds(0),e.getHours()&&(e.getDate()<t.getDate()||e.getMonth()<t.getMonth()||e.getFullYear()<t.getFullYear())&&e.setTime(e.getTime()+36e5*(24-e.getHours())),e},time_part:function(e){return(e.valueOf()/1e3-60*e.getTimezoneOffset())%86400},week_start:function(e){var t=e.getDay();return scheduler.config.start_on_monday&&(0===t?t=6:t--),this.date_part(this.add(e,-1*t,"day"))},month_start:function(e){return e.setDate(1),this.date_part(e)},year_start:function(e){return e.setMonth(0),
this.month_start(e)},day_start:function(e){return this.date_part(e)},_add_days:function(e,t){var i=new Date(e.valueOf());if(i.setDate(i.getDate()+t),t==Math.round(t)&&t>0){var r=+i-+e,s=r%864e5;if(s&&e.getTimezoneOffset()==i.getTimezoneOffset()){var a=s/36e5;i.setTime(i.getTime()+60*(24-a)*60*1e3)}}return t>=0&&!e.getHours()&&i.getHours()&&(i.getDate()<e.getDate()||i.getMonth()<e.getMonth()||i.getFullYear()<e.getFullYear())&&i.setTime(i.getTime()+36e5*(24-i.getHours())),i},add:function(e,t,i){var r=new Date(e.valueOf());
switch(i){case"day":r=scheduler.date._add_days(r,t);break;case"week":r=scheduler.date._add_days(r,7*t);break;case"month":r.setMonth(r.getMonth()+t);break;case"year":r.setYear(r.getFullYear()+t);break;case"hour":r.setTime(r.getTime()+60*t*60*1e3);break;case"minute":r.setTime(r.getTime()+60*t*1e3);break;default:return scheduler.date["add_"+i](e,t,i)}return r},to_fixed:function(e){return 10>e?"0"+e:e},copy:function(e){return new Date(e.valueOf())},date_to_str:function(e,t){return e=e.replace(/%[a-zA-Z]/g,function(e){
switch(e){case"%d":return'"+scheduler.date.to_fixed(date.getDate())+"';case"%m":return'"+scheduler.date.to_fixed((date.getMonth()+1))+"';case"%j":return'"+date.getDate()+"';case"%n":return'"+(date.getMonth()+1)+"';case"%y":return'"+scheduler.date.to_fixed(date.getFullYear()%100)+"';case"%Y":return'"+date.getFullYear()+"';case"%D":return'"+scheduler.locale.date.day_short[date.getDay()]+"';case"%l":return'"+scheduler.locale.date.day_full[date.getDay()]+"';case"%M":return'"+scheduler.locale.date.month_short[date.getMonth()]+"';
case"%F":return'"+scheduler.locale.date.month_full[date.getMonth()]+"';case"%h":return'"+scheduler.date.to_fixed((date.getHours()+11)%12+1)+"';case"%g":return'"+((date.getHours()+11)%12+1)+"';case"%G":return'"+date.getHours()+"';case"%H":return'"+scheduler.date.to_fixed(date.getHours())+"';case"%i":return'"+scheduler.date.to_fixed(date.getMinutes())+"';case"%a":return'"+(date.getHours()>11?"pm":"am")+"';case"%A":return'"+(date.getHours()>11?"PM":"AM")+"';case"%s":return'"+scheduler.date.to_fixed(date.getSeconds())+"';
case"%W":return'"+scheduler.date.to_fixed(scheduler.date.getISOWeek(date))+"';default:return e}}),t&&(e=e.replace(/date\.get/g,"date.getUTC")),new Function("date",'return "'+e+'";')},str_to_date:function(e,t){for(var i="var temp=date.match(/[a-zA-Z]+|[0-9]+/g);",r=e.match(/%[a-zA-Z]/g),s=0;s<r.length;s++)switch(r[s]){case"%j":case"%d":i+="set[2]=temp["+s+"]||1;";break;case"%n":case"%m":i+="set[1]=(temp["+s+"]||1)-1;";break;case"%y":i+="set[0]=temp["+s+"]*1+(temp["+s+"]>50?1900:2000);";break;case"%g":
case"%G":case"%h":case"%H":i+="set[3]=temp["+s+"]||0;";break;case"%i":i+="set[4]=temp["+s+"]||0;";break;case"%Y":i+="set[0]=temp["+s+"]||0;";break;case"%a":case"%A":i+="set[3]=set[3]%12+((temp["+s+"]||'').toLowerCase()=='am'?0:12);";break;case"%s":i+="set[5]=temp["+s+"]||0;";break;case"%M":i+="set[1]=scheduler.locale.date.month_short_hash[temp["+s+"]]||0;";break;case"%F":i+="set[1]=scheduler.locale.date.month_full_hash[temp["+s+"]]||0;"}var a="set[0],set[1],set[2],set[3],set[4],set[5]";return t&&(a=" Date.UTC("+a+")"),
new Function("date","var set=[0,0,1,0,0,0]; "+i+" return new Date("+a+");")},getISOWeek:function(e){if(!e)return!1;e=this.date_part(new Date(e));var t=e.getDay();0===t&&(t=7);var i=new Date(e.valueOf());i.setDate(e.getDate()+(4-t));var r=i.getFullYear(),s=Math.round((i.getTime()-new Date(r,0,1).getTime())/864e5),a=1+Math.floor(s/7);return a},getUTCISOWeek:function(e){return this.getISOWeek(this.convert_to_utc(e))},convert_to_utc:function(e){return new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds());
}},scheduler.locale={date:{month_full:["January","February","March","April","May","June","July","August","September","October","November","December"],month_short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],day_full:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],day_short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},labels:{dhx_cal_today_button:"Today",day_tab:"Day",week_tab:"Week",month_tab:"Month",new_event:"New event",icon_save:"Save",icon_cancel:"Cancel",
icon_details:"Details",icon_edit:"Edit",icon_delete:"Delete",confirm_closing:"",confirm_deleting:"Event will be deleted permanently, are you sure?",section_description:"Description",section_time:"Time period",full_day:"Full day",confirm_recurring:"Do you want to edit the whole set of repeated events?",section_recurring:"Repeat event",button_recurring:"Disabled",button_recurring_open:"Enabled",button_edit_series:"Edit series",button_edit_occurrence:"Edit occurrence",agenda_tab:"Agenda",date:"Date",
description:"Description",year_tab:"Year",week_agenda_tab:"Agenda",grid_tab:"Grid",drag_to_create:"Drag to create",drag_to_move:"Drag to move",message_ok:"OK",message_cancel:"Cancel",next:"Next",prev:"Previous",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute"}},scheduler.config={default_date:"%j %M %Y",month_date:"%F %Y",load_date:"%Y-%m-%d",week_date:"%l",day_date:"%D, %F %j",hour_date:"%H:%i",month_day:"%d",xml_date:"%m/%d/%Y %H:%i",api_date:"%d-%m-%Y %H:%i",preserve_length:!0,time_step:5,
start_on_monday:1,first_hour:0,last_hour:24,readonly:!1,drag_resize:1,drag_move:1,drag_create:1,dblclick_create:1,edit_on_create:1,details_on_create:0,resize_month_events:!1,resize_month_timed:!1,cascade_event_display:!1,cascade_event_count:4,cascade_event_margin:30,multi_day:!0,multi_day_height_limit:0,drag_lightbox:!0,preserve_scroll:!0,select:!0,server_utc:!1,touch:!0,touch_tip:!0,touch_drag:500,quick_info_detached:!0,positive_closing:!1,drag_highlight:!0,limit_drag_out:!1,icons_edit:["icon_save","icon_cancel"],
icons_select:["icon_details","icon_edit","icon_delete"],buttons_left:["dhx_save_btn","dhx_cancel_btn"],buttons_right:["dhx_delete_btn"],lightbox:{sections:[{name:"description",map_to:"text",type:"textarea",focus:!0},{name:"time",height:72,type:"time",map_to:"auto"}]},highlight_displayed_event:!0,left_border:!1,ajax_error:"alert",delay_render:0,timeline_swap_resize:!0,wai_aria_attributes:!0,wai_aria_application_role:!0},scheduler.config.buttons_left.$inital=scheduler.config.buttons_left.join(),scheduler.config.buttons_right.$inital=scheduler.config.buttons_right.join(),
scheduler.templates={},scheduler.init_templates=function(){var e=scheduler.locale.labels;e.dhx_save_btn=e.icon_save,e.dhx_cancel_btn=e.icon_cancel,e.dhx_delete_btn=e.icon_delete;var t=scheduler.date.date_to_str,i=scheduler.config,r=function(e,t){for(var i in t)e[i]||(e[i]=t[i])};r(scheduler.templates,{day_date:t(i.default_date),month_date:t(i.month_date),week_date:function(e,t){return scheduler.templates.day_date(e)+" &ndash; "+scheduler.templates.day_date(scheduler.date.add(t,-1,"day"))},day_scale_date:t(i.default_date),
month_scale_date:t(i.week_date),week_scale_date:t(i.day_date),hour_scale:t(i.hour_date),time_picker:t(i.hour_date),event_date:t(i.hour_date),month_day:t(i.month_day),xml_date:scheduler.date.str_to_date(i.xml_date,i.server_utc),load_format:t(i.load_date),xml_format:t(i.xml_date,i.server_utc),api_date:scheduler.date.str_to_date(i.api_date),event_header:function(e,t,i){return scheduler.templates.event_date(e)+" - "+scheduler.templates.event_date(t)},event_text:function(e,t,i){return i.text},event_class:function(e,t,i){
return""},month_date_class:function(e){return""},week_date_class:function(e){return""},event_bar_date:function(e,t,i){return scheduler.templates.event_date(e)+" "},event_bar_text:function(e,t,i){return i.text},month_events_link:function(e,t){return"<a>View more("+t+" events)</a>"},drag_marker_class:function(e,t,i){return""},drag_marker_content:function(e,t,i){return""},tooltip_date_format:scheduler.date.date_to_str("%Y-%m-%d %H:%i"),tooltip_text:function(e,t,i){return"<b>Event:</b> "+i.text+"<br/><b>Start date:</b> "+scheduler.templates.tooltip_date_format(e)+"<br/><b>End date:</b> "+scheduler.templates.tooltip_date_format(t);
}}),this.callEvent("onTemplatesReady",[])},scheduler.uid=function(){return this._seed||(this._seed=(new Date).valueOf()),this._seed++},scheduler._events={},scheduler.clearAll=function(){this._events={},this._loaded={},this._edit_id=null,this._select_id=null,this._drag_id=null,this._drag_mode=null,this._drag_pos=null,this.clear_view(),this.callEvent("onClearAll",[])},scheduler.addEvent=function(e,t,i,r,s){if(!arguments.length)return this.addEventNow();var a=e;1!=arguments.length&&(a=s||{},a.start_date=e,
a.end_date=t,a.text=i,a.id=r),a.id=a.id||scheduler.uid(),a.text=a.text||"","string"==typeof a.start_date&&(a.start_date=this.templates.api_date(a.start_date)),"string"==typeof a.end_date&&(a.end_date=this.templates.api_date(a.end_date));var n=6e4*(this.config.event_duration||this.config.time_step);a.start_date.valueOf()==a.end_date.valueOf()&&a.end_date.setTime(a.end_date.valueOf()+n),a._timed=this.isOneDayEvent(a);var d=!this._events[a.id];return this._events[a.id]=a,this.event_updated(a),this._loading||this.callEvent(d?"onEventAdded":"onEventChanged",[a.id,a]),
a.id},scheduler.deleteEvent=function(e,t){var i=this._events[e];(t||this.callEvent("onBeforeEventDelete",[e,i])&&this.callEvent("onConfirmedBeforeEventDelete",[e,i]))&&(i&&(this._select_id=null,delete this._events[e],this.event_updated(i),this._drag_id==i.id&&(this._drag_id=null,this._drag_mode=null,this._drag_pos=null)),this.callEvent("onEventDeleted",[e,i]))},scheduler.getEvent=function(e){return this._events[e]},scheduler.setEvent=function(e,t){t.id||(t.id=e),this._events[e]=t},scheduler.for_rendered=function(e,t){
for(var i=this._rendered.length-1;i>=0;i--)this._rendered[i].getAttribute("event_id")==e&&t(this._rendered[i],i)},scheduler.changeEventId=function(e,t){if(e!=t){var i=this._events[e];i&&(i.id=t,this._events[t]=i,delete this._events[e]),this.for_rendered(e,function(e){e.setAttribute("event_id",t)}),this._select_id==e&&(this._select_id=t),this._edit_id==e&&(this._edit_id=t),this.callEvent("onEventIdChange",[e,t])}},function(){for(var e=["text","Text","start_date","StartDate","end_date","EndDate"],t=function(e){
return function(t){return scheduler.getEvent(t)[e]}},i=function(e){return function(t,i){var r=scheduler.getEvent(t);r[e]=i,r._changed=!0,r._timed=this.isOneDayEvent(r),scheduler.event_updated(r,!0)}},r=0;r<e.length;r+=2)scheduler["getEvent"+e[r+1]]=t(e[r]),scheduler["setEvent"+e[r+1]]=i(e[r])}(),scheduler.event_updated=function(e,t){this.is_visible_events(e)?this.render_view_data():this.clear_event(e.id)},scheduler.is_visible_events=function(e){var t=e.start_date.valueOf()<this._max_date.valueOf()&&this._min_date.valueOf()<e.end_date.valueOf();
if(t){var i=e.start_date.getHours(),r=e.end_date.getHours()+e.end_date.getMinutes()/60,s=this.config.last_hour,a=this.config.first_hour,n=this._table_view||!((r>s||a>r)&&(i>=s||a>i));if(n)return!0;var d=(e.end_date.valueOf()-e.start_date.valueOf())/36e5,o=24-(this.config.last_hour-this.config.first_hour);return!!(d>o||s>i&&r>=a)}return!1},scheduler.isOneDayEvent=function(e){var t=e.end_date.getDate()-e.start_date.getDate();return t?(0>t&&(t=Math.ceil((e.end_date.valueOf()-e.start_date.valueOf())/864e5)),
1==t&&!e.end_date.getHours()&&!e.end_date.getMinutes()&&(e.start_date.getHours()||e.start_date.getMinutes())):e.start_date.getMonth()==e.end_date.getMonth()&&e.start_date.getFullYear()==e.end_date.getFullYear()},scheduler.get_visible_events=function(e){var t=[];for(var i in this._events)this.is_visible_events(this._events[i])&&(!e||this._events[i]._timed)&&this.filter_event(i,this._events[i])&&t.push(this._events[i]);return t},scheduler.filter_event=function(e,t){var i=this["filter_"+this._mode];return i?i(e,t):!0;
},scheduler._is_main_area_event=function(e){return!!e._timed},scheduler.render_view_data=function(e,t){var i=!1;if(!e){if(i=!0,this._not_render)return void(this._render_wait=!0);this._render_wait=!1,this.clear_view(),e=this.get_visible_events(!(this._table_view||this.config.multi_day))}for(var r=0,s=e.length;s>r;r++)this._recalculate_timed(e[r]);if(this.config.multi_day&&!this._table_view){for(var a=[],n=[],r=0;r<e.length;r++)this._is_main_area_event(e[r])?a.push(e[r]):n.push(e[r]);this._rendered_location=this._els.dhx_multi_day[0],
this._table_view=!0,this.render_data(n,t),this._table_view=!1,this._rendered_location=this._els.dhx_cal_data[0],this._table_view=!1,this.render_data(a,t)}else this._rendered_location=this._els.dhx_cal_data[0],this.render_data(e,t);i&&this.callEvent("onDataRender",[])},scheduler._view_month_day=function(e){var t=scheduler.getActionData(e).date;scheduler.callEvent("onViewMoreClick",[t])&&scheduler.setCurrentView(t,"day")},scheduler._render_month_link=function(e){for(var t=this._rendered_location,i=this._lame_clone(e),r=e._sday;r<e._eday;r++){
i._sday=r,i._eday=r+1;var s=scheduler.date,a=scheduler._min_date;a=s.add(a,i._sweek,"week"),a=s.add(a,i._sday,"day");var n=scheduler.getEvents(a,s.add(a,1,"day")).length,d=this._get_event_bar_pos(i),o=d.x2-d.x,l=document.createElement("div");l.onclick=function(e){scheduler._view_month_day(e||event)},l.className="dhx_month_link",l.style.top=d.y+"px",l.style.left=d.x+"px",l.style.width=o+"px",l.innerHTML=scheduler.templates.month_events_link(a,n),this._rendered.push(l),t.appendChild(l)}},scheduler._recalculate_timed=function(e){
if(e){var t;t="object"!=typeof e?this._events[e]:e,t&&(t._timed=scheduler.isOneDayEvent(t))}},scheduler.attachEvent("onEventChanged",scheduler._recalculate_timed),scheduler.attachEvent("onEventAdded",scheduler._recalculate_timed),scheduler.render_data=function(e,t){e=this._pre_render_events(e,t);for(var i=0;i<e.length;i++)if(this._table_view)if("month"!=scheduler._mode)this.render_event_bar(e[i]);else{var r=scheduler.config.max_month_events;r!==1*r||e[i]._sorder<r?this.render_event_bar(e[i]):void 0!==r&&e[i]._sorder==r&&scheduler._render_month_link(e[i]);
}else this.render_event(e[i])},scheduler._get_first_visible_cell=function(e){for(var t=0;t<e.length;t++)if(-1==(e[t].className||"").indexOf("dhx_scale_ignore"))return e[t];return e[0]},scheduler._pre_render_events=function(e,t){var i=this.xy.bar_height,r=this._colsS.heights,s=this._colsS.heights=[0,0,0,0,0,0,0],a=this._els.dhx_cal_data[0];if(e=this._table_view?this._pre_render_events_table(e,t):this._pre_render_events_line(e,t),this._table_view)if(t)this._colsS.heights=r;else{var n=a.firstChild;if(n.rows){
for(var d=0;d<n.rows.length;d++){s[d]++;var o=n.rows[d].cells,l=this._colsS.height-this.xy.month_head_height;if(s[d]*i>l){var h=l;1*this.config.max_month_events!==this.config.max_month_events||s[d]<=this.config.max_month_events?h=s[d]*i:(this.config.max_month_events+1)*i>l&&(h=(this.config.max_month_events+1)*i);for(var _=0;_<o.length;_++)o[_].childNodes[1].style.height=h+"px"}s[d]=(s[d-1]||0)+scheduler._get_first_visible_cell(o).offsetHeight}if(s.unshift(0),n.parentNode.offsetHeight<n.parentNode.scrollHeight&&!scheduler._colsS.scroll_fix&&scheduler.xy.scroll_width){
var c=scheduler._colsS,u=c[c.col_length],g=c.heights.slice();u-=scheduler.xy.scroll_width||0,this._calc_scale_sizes(u,this._min_date,this._max_date),scheduler._colsS.heights=g,this.set_xy(this._els.dhx_cal_header[0],u,this.xy.scale_height),scheduler._render_scales(this._els.dhx_cal_header[0]),scheduler._render_month_scale(this._els.dhx_cal_data[0],this._get_timeunit_start(),this._min_date),c.scroll_fix=!0}}else if(e.length||"visible"!=this._els.dhx_multi_day[0].style.visibility||(s[0]=-1),e.length||-1==s[0]){
var f=(n.parentNode.childNodes,(s[0]+1)*i+1),v=f,m=f+"px";this.config.multi_day_height_limit&&(v=Math.min(f,this.config.multi_day_height_limit),m=v+"px"),a.style.top=this._els.dhx_cal_navline[0].offsetHeight+this._els.dhx_cal_header[0].offsetHeight+v+"px",a.style.height=this._obj.offsetHeight-parseInt(a.style.top,10)-(this.xy.margin_top||0)+"px";var p=this._els.dhx_multi_day[0];p.style.height=m,p.style.visibility=-1==s[0]?"hidden":"visible";var x=this._els.dhx_multi_day[1];x.style.height=m,x.style.visibility=-1==s[0]?"hidden":"visible",
x.className=s[0]?"dhx_multi_day_icon":"dhx_multi_day_icon_small",this._dy_shift=(s[0]+1)*i,this.config.multi_day_height_limit&&(this._dy_shift=Math.min(this.config.multi_day_height_limit,this._dy_shift)),s[0]=0,v!=f&&(a.style.top=parseInt(a.style.top)+2+"px",p.style.overflowY="auto",x.style.position="fixed",x.style.top="",x.style.left="")}}return e},scheduler._get_event_sday=function(e){var t=this.date.day_start(new Date(e.start_date));return Math.round((t.valueOf()-this._min_date.valueOf())/864e5);
},scheduler._get_event_mapped_end_date=function(e){var t=e.end_date;if(this.config.separate_short_events){var i=(e.end_date-e.start_date)/6e4;i<this._min_mapped_duration&&(t=this.date.add(t,this._min_mapped_duration-i,"minute"))}return t},scheduler._pre_render_events_line=function(e,t){e.sort(function(e,t){return e.start_date.valueOf()==t.start_date.valueOf()?e.id>t.id?1:-1:e.start_date>t.start_date?1:-1});var i=[],r=[];this._min_mapped_duration=Math.ceil(60*this.xy.min_event_height/this.config.hour_size_px);
for(var s=0;s<e.length;s++){var a=e[s],n=a.start_date,d=a.end_date,o=n.getHours(),l=d.getHours();if(a._sday=this._get_event_sday(a),this._ignores[a._sday])e.splice(s,1),s--;else{if(i[a._sday]||(i[a._sday]=[]),!t){a._inner=!1;for(var h=i[a._sday];h.length;){var _=h[h.length-1],c=this._get_event_mapped_end_date(_);if(!(c.valueOf()<=a.start_date.valueOf()))break;h.splice(h.length-1,1)}for(var u=h.length,g=!1,f=0;f<h.length;f++){var _=h[f],c=this._get_event_mapped_end_date(_);if(c.valueOf()<=a.start_date.valueOf()){
g=!0,a._sorder=_._sorder,u=f,a._inner=!0;break}}if(h.length&&(h[h.length-1]._inner=!0),!g)if(h.length)if(h.length<=h[h.length-1]._sorder){if(h[h.length-1]._sorder)for(f=0;f<h.length;f++){for(var v=!1,m=0;m<h.length;m++)if(h[m]._sorder==f){v=!0;break}if(!v){a._sorder=f;break}}else a._sorder=0;a._inner=!0}else{var p=h[0]._sorder;for(f=1;f<h.length;f++)h[f]._sorder>p&&(p=h[f]._sorder);a._sorder=p+1,a._inner=!1}else a._sorder=0;h.splice(u,u==h.length?0:1,a),h.length>(h.max_count||0)?(h.max_count=h.length,
a._count=h.length):a._count=a._count?a._count:1}(o<this.config.first_hour||l>=this.config.last_hour)&&(r.push(a),e[s]=a=this._copy_event(a),o<this.config.first_hour&&(a.start_date.setHours(this.config.first_hour),a.start_date.setMinutes(0)),l>=this.config.last_hour&&(a.end_date.setMinutes(0),a.end_date.setHours(this.config.last_hour)),a.start_date>a.end_date||o==this.config.last_hour)&&(e.splice(s,1),s--)}}if(!t){for(var s=0;s<e.length;s++)e[s]._count=i[e[s]._sday].max_count;for(var s=0;s<r.length;s++)r[s]._count=i[r[s]._sday].max_count;
}return e},scheduler._time_order=function(e){e.sort(function(e,t){return e.start_date.valueOf()==t.start_date.valueOf()?e._timed&&!t._timed?1:!e._timed&&t._timed?-1:e.id>t.id?1:-1:e.start_date>t.start_date?1:-1})},scheduler._pre_render_events_table=function(e,t){this._time_order(e);for(var i,r=[],s=[[],[],[],[],[],[],[]],a=this._colsS.heights,n=this._cols.length,d={},o=0;o<e.length;o++){var l=e[o],h=l.id;d[h]||(d[h]={first_chunk:!0,last_chunk:!0});var _=d[h],c=i||l.start_date,u=l.end_date;c<this._min_date&&(_.first_chunk=!1,
c=this._min_date),u>this._max_date&&(_.last_chunk=!1,u=this._max_date);var g=this.locate_holder_day(c,!1,l);if(l._sday=g%n,!this._ignores[l._sday]||!l._timed){var f=this.locate_holder_day(u,!0,l)||n;l._eday=f%n||n,l._length=f-g,l._sweek=Math.floor((this._correct_shift(c.valueOf(),1)-this._min_date.valueOf())/(864e5*n));var v,m=s[l._sweek];for(v=0;v<m.length&&!(m[v]._eday<=l._sday);v++);if(l._sorder&&t||(l._sorder=v),l._sday+l._length<=n)i=null,r.push(l),m[v]=l,a[l._sweek]=m.length-1,l._first_chunk=_.first_chunk,
l._last_chunk=_.last_chunk;else{var p=this._copy_event(l);p.id=l.id,p._length=n-l._sday,p._eday=n,p._sday=l._sday,p._sweek=l._sweek,p._sorder=l._sorder,p.end_date=this.date.add(c,p._length,"day"),p._first_chunk=_.first_chunk,_.first_chunk&&(_.first_chunk=!1),r.push(p),m[v]=p,i=p.end_date,a[l._sweek]=m.length-1,o--}}}return r},scheduler._copy_dummy=function(){var e=new Date(this.start_date),t=new Date(this.end_date);this.start_date=e,this.end_date=t},scheduler._copy_event=function(e){return this._copy_dummy.prototype=e,
new this._copy_dummy},scheduler._rendered=[],scheduler.clear_view=function(){for(var e=0;e<this._rendered.length;e++){var t=this._rendered[e];t.parentNode&&t.parentNode.removeChild(t)}this._rendered=[]},scheduler.updateEvent=function(e){var t=this.getEvent(e);this.clear_event(e),t&&this.is_visible_events(t)&&this.filter_event(e,t)&&(this._table_view||this.config.multi_day||t._timed)&&(this.config.update_render?this.render_view_data():"month"!=this.getState().mode||this.getState().drag_id||this.isOneDayEvent(t)?this.render_view_data([t],!0):this.render_view_data());
},scheduler.clear_event=function(e){this.for_rendered(e,function(e,t){e.parentNode&&e.parentNode.removeChild(e),scheduler._rendered.splice(t,1)})},scheduler._y_from_date=function(e){var t=60*e.getHours()+e.getMinutes();return Math.round((60*t*1e3-60*this.config.first_hour*60*1e3)*this.config.hour_size_px/36e5)%(24*this.config.hour_size_px)},scheduler._calc_event_y=function(e,t){t=t||0;var i=60*e.start_date.getHours()+e.start_date.getMinutes(),r=60*e.end_date.getHours()+e.end_date.getMinutes()||60*scheduler.config.last_hour,s=this._y_from_date(e.start_date),a=Math.max(t,(r-i)*this.config.hour_size_px/60);
return{top:s,height:a}},scheduler.render_event=function(e){var t=scheduler.xy.menu_width,i=this.config.use_select_menu_space?0:t;if(!(e._sday<0)){var r=scheduler.locate_holder(e._sday);if(r){var s=this._calc_event_y(e,scheduler.xy.min_event_height),a=s.top,n=s.height,d=e._count||1,o=e._sorder||0,l=Math.floor((r.clientWidth-i)/d),h=o*l+1;if(e._inner||(l*=d-o),this.config.cascade_event_display){var _=this.config.cascade_event_count,c=this.config.cascade_event_margin;h=o%_*c;var u=e._inner?(d-o-1)%_*c/2:0;
l=Math.floor(r.clientWidth-i-h-u)}var g=this._render_v_bar(e,i+h,a,l,n,e._text_style,scheduler.templates.event_header(e.start_date,e.end_date,e),scheduler.templates.event_text(e.start_date,e.end_date,e));if(this._waiAria.eventAttr(e,g),this._rendered.push(g),r.appendChild(g),h=h+parseInt(r.style.left,10)+i,this._edit_id==e.id){g.style.zIndex=1,l=Math.max(l-4,scheduler.xy.editor_width),g=document.createElement("div"),g.setAttribute("event_id",e.id),this._waiAria.eventAttr(e,g),this.set_xy(g,l,n-20,h,a+(scheduler.xy.event_header_height||14)),
g.className="dhx_cal_event dhx_cal_editor",e.color&&(g.style.backgroundColor=e.color);var f=scheduler.templates.event_class(e.start_date,e.end_date,e);f&&(g.className+=" "+f);var v=document.createElement("div");this.set_xy(v,l-6,n-26),v.style.cssText+=";margin:2px 2px 2px 2px;overflow:hidden;",g.appendChild(v),this._els.dhx_cal_data[0].appendChild(g),this._rendered.push(g),v.innerHTML="<textarea class='dhx_cal_editor'>"+e.text+"</textarea>",this._quirks7&&(v.firstChild.style.height=n-12+"px"),this._editor=v.firstChild,
this._editor.onkeydown=function(e){if((e||event).shiftKey)return!0;var t=(e||event).keyCode;t==scheduler.keys.edit_save&&scheduler.editStop(!0),t==scheduler.keys.edit_cancel&&scheduler.editStop(!1),(t==scheduler.keys.edit_save||t==scheduler.keys.edit_cancel)&&e.preventDefault&&e.preventDefault()},this._editor.onselectstart=function(e){return(e||event).cancelBubble=!0,!0},scheduler._focus(v.firstChild,!0),this._els.dhx_cal_data[0].scrollLeft=0}if(0!==this.xy.menu_width&&this._select_id==e.id){this.config.cascade_event_display&&this._drag_mode&&(g.style.zIndex=1);
for(var m,p=this.config["icons_"+(this._edit_id==e.id?"edit":"select")],x="",b=e.color?"background-color: "+e.color+";":"",y=e.textColor?"color: "+e.textColor+";":"",w=0;w<p.length;w++)m=this._waiAria.eventMenuAttrString(p[w]),x+="<div class='dhx_menu_icon "+p[w]+"' style='"+b+y+"' title='"+this.locale.labels[p[w]]+"'"+m+"></div>";var D=this._render_v_bar(e,h-t+1,a,t,20*p.length+26-2,"","<div style='"+b+y+"' class='dhx_menu_head'></div>",x,!0);D.style.left=h-t+1,this._els.dhx_cal_data[0].appendChild(D),
this._rendered.push(D)}this.config.drag_highlight&&this._drag_id==e.id&&this.highlightEventPosition(e)}}},scheduler._render_v_bar=function(e,t,i,r,s,a,n,d,o){var l=document.createElement("div"),h=e.id,_=o?"dhx_cal_event dhx_cal_select_menu":"dhx_cal_event",c=scheduler.getState();c.drag_id==e.id&&(_+=" dhx_cal_event_drag"),c.select_id==e.id&&(_+=" dhx_cal_event_selected");var u=scheduler.templates.event_class(e.start_date,e.end_date,e);u&&(_=_+" "+u),this.config.cascade_event_display&&(_+=" dhx_cal_event_cascade");
var g=e.color?"background-color:"+e.color+";":"",f=e.textColor?"color:"+e.textColor+";":"",v=scheduler._border_box_bvents(),m=r-2,p=v?m:r-4,x=v?m:r-6,b=v?m:r-(this._quirks?4:14),y=v?m-2:r-8,w=v?s-this.xy.event_header_height-1:s-(this._quirks?20:30)+1,D='<div event_id="'+h+'" class="'+_+'" style="position:absolute; top:'+i+"px; left:"+t+"px; width:"+p+"px; height:"+s+"px;"+(a||"")+'"></div>';l.innerHTML=D;var E=l.cloneNode(!0).firstChild;if(!o&&scheduler.renderEvent(E,e,r,s,n,d))return E;E=l.firstChild;
var A='<div class="dhx_event_move dhx_header" style=" width:'+x+"px;"+g+'" >&nbsp;</div>';A+='<div class="dhx_event_move dhx_title" style="'+g+f+'">'+n+"</div>",A+='<div class="dhx_body" style=" width:'+b+"px; height:"+w+"px;"+g+f+'">'+d+"</div>";var k="dhx_event_resize dhx_footer";return o&&(k="dhx_resize_denied "+k),A+='<div class="'+k+'" style=" width:'+y+"px;"+(o?" margin-top:-1px;":"")+g+f+'" ></div>',E.innerHTML=A,E},scheduler.renderEvent=function(){return!1},scheduler.locate_holder=function(e){
return"day"==this._mode?this._els.dhx_cal_data[0].firstChild:this._els.dhx_cal_data[0].childNodes[e]},scheduler.locate_holder_day=function(e,t){var i=Math.floor((this._correct_shift(e,1)-this._min_date)/864e5);return t&&this.date.time_part(e)&&i++,i},scheduler._get_dnd_order=function(e,t,i){if(!this._drag_event)return e;this._drag_event._orig_sorder?e=this._drag_event._orig_sorder:this._drag_event._orig_sorder=e;for(var r=t*e;r+t>i;)e--,r-=t;return e=Math.max(e,0)},scheduler._get_event_bar_pos=function(e){
var t=this._colsS[e._sday],i=this._colsS[e._eday];i==t&&(i=this._colsS[e._eday+1]);var r=this.xy.bar_height,s=e._sorder;if(e.id==this._drag_id){var a=this._colsS.heights[e._sweek+1]-this._colsS.heights[e._sweek]-this.xy.month_head_height;s=scheduler._get_dnd_order(s,r,a)}var n=s*r,d=this._colsS.heights[e._sweek]+(this._colsS.height?this.xy.month_scale_height+2:2)+n;return{x:t,x2:i,y:d}},scheduler.render_event_bar=function(e){var t=this._rendered_location,i=this._get_event_bar_pos(e),r=i.y,s=i.x,a=i.x2,n="";
if(a){var d=scheduler.config.resize_month_events&&"month"==this._mode&&(!e._timed||scheduler.config.resize_month_timed),o=document.createElement("div"),l=e.hasOwnProperty("_first_chunk")&&e._first_chunk,h=e.hasOwnProperty("_last_chunk")&&e._last_chunk,_=d&&(e._timed||l),c=d&&(e._timed||h),u="dhx_cal_event_clear";(!e._timed||d)&&(u="dhx_cal_event_line"),l&&(u+=" dhx_cal_event_line_start"),h&&(u+=" dhx_cal_event_line_end"),_&&(n+="<div class='dhx_event_resize dhx_event_resize_start'></div>"),c&&(n+="<div class='dhx_event_resize dhx_event_resize_end'></div>");
var g=scheduler.templates.event_class(e.start_date,e.end_date,e);g&&(u+=" "+g);var f=e.color?"background:"+e.color+";":"",v=e.textColor?"color:"+e.textColor+";":"",m=["position:absolute","top:"+r+"px","left:"+s+"px","width:"+(a-s-15)+"px",v,f,e._text_style||""].join(";"),p="<div event_id='"+e.id+"' class='"+u+"' style='"+m+"'"+this._waiAria.eventBarAttrString(e)+">";d&&(p+=n),"month"==scheduler.getState().mode&&(e=scheduler.getEvent(e.id)),e._timed&&(p+=scheduler.templates.event_bar_date(e.start_date,e.end_date,e)),
p+=scheduler.templates.event_bar_text(e.start_date,e.end_date,e)+"</div>",p+="</div>",o.innerHTML=p,this._rendered.push(o.firstChild),t.appendChild(o.firstChild)}},scheduler._locate_event=function(e){for(var t=null;e&&!t&&e.getAttribute;)t=e.getAttribute("event_id"),e=e.parentNode;return t},scheduler._locate_css=function(e,t,i){void 0===i&&(i=!0);for(var r=e.target||e.srcElement,s="";r;){if(s=scheduler._getClassName(r)){var a=s.indexOf(t);if(a>=0){if(!i)return r;var n=0===a||!scheduler._trim(s.charAt(a-1)),d=a+t.length>=s.length||!scheduler._trim(s.charAt(a+t.length));
if(n&&d)return r}}r=r.parentNode}return null},scheduler.edit=function(e){this._edit_id!=e&&(this.editStop(!1,e),this._edit_id=e,this.updateEvent(e))},scheduler.editStop=function(e,t){if(!t||this._edit_id!=t){var i=this.getEvent(this._edit_id);i&&(e&&(i.text=this._editor.value),this._edit_id=null,this._editor=null,this.updateEvent(i.id),this._edit_stop_event(i,e))}},scheduler._edit_stop_event=function(e,t){this._new_event?(t?this.callEvent("onEventAdded",[e.id,e]):e&&this.deleteEvent(e.id,!0),this._new_event=null):t&&this.callEvent("onEventChanged",[e.id,e]);
},scheduler.getEvents=function(e,t){var i=[];for(var r in this._events){var s=this._events[r];s&&(!e&&!t||s.start_date<t&&s.end_date>e)&&i.push(s)}return i},scheduler.getRenderedEvent=function(e){if(e){for(var t=scheduler._rendered,i=0;i<t.length;i++){var r=t[i];if(r.getAttribute("event_id")==e)return r}return null}},scheduler.showEvent=function(e,t){var i="number"==typeof e||"string"==typeof e?scheduler.getEvent(e):e;if(t=t||scheduler._mode,i&&(!this.checkEvent("onBeforeEventDisplay")||this.callEvent("onBeforeEventDisplay",[i,t]))){
var r=scheduler.config.scroll_hour;scheduler.config.scroll_hour=i.start_date.getHours();var s=scheduler.config.preserve_scroll;scheduler.config.preserve_scroll=!1;var a=i.color,n=i.textColor;if(scheduler.config.highlight_displayed_event&&(i.color=scheduler.config.displayed_event_color,i.textColor=scheduler.config.displayed_event_text_color),scheduler.setCurrentView(new Date(i.start_date),t),i.color=a,i.textColor=n,scheduler.config.scroll_hour=r,scheduler.config.preserve_scroll=s,scheduler.matrix&&scheduler.matrix[t]){
var d=scheduler.getRenderedEvent(i.id);d&&(scheduler._els.dhx_cal_data[0].scrollTop=scheduler.$domHelpers.getAbsoluteTop(d)-scheduler.$domHelpers.getAbsoluteTop(scheduler._els.dhx_cal_data[0])-20)}scheduler.callEvent("onAfterEventDisplay",[i,t])}},scheduler._append_drag_marker=function(e){if(!e.parentNode){var t=scheduler._els.dhx_cal_data[0],i=t.lastChild,r=scheduler._getClassName(i);r.indexOf("dhx_scale_holder")<0&&i.previousSibling&&(i=i.previousSibling),r=scheduler._getClassName(i),i&&0===r.indexOf("dhx_scale_holder")&&i.appendChild(e);
}},scheduler._update_marker_position=function(e,t){var i=scheduler._calc_event_y(t,0);e.style.top=i.top+"px",e.style.height=i.height+"px"},scheduler.highlightEventPosition=function(e){var t=document.createElement("div");t.setAttribute("event_id",e.id),this._rendered.push(t),this._update_marker_position(t,e);var i=this.templates.drag_marker_class(e.start_date,e.end_date,e),r=this.templates.drag_marker_content(e.start_date,e.end_date,e);t.className="dhx_drag_marker",i&&(t.className+=" "+i),r&&(t.innerHTML=r),
this._append_drag_marker(t)},scheduler._loaded={},scheduler._load=function(e,t){if(e=e||this._load_url){e+=(-1==e.indexOf("?")?"?":"&")+"timeshift="+(new Date).getTimezoneOffset(),this.config.prevent_cache&&(e+="&uid="+this.uid());var i;if(t=t||this._date,this._load_mode){var r=this.templates.load_format;for(t=this.date[this._load_mode+"_start"](new Date(t.valueOf()));t>this._min_date;)t=this.date.add(t,-1,this._load_mode);i=t;for(var s=!0;i<this._max_date;)i=this.date.add(i,1,this._load_mode),this._loaded[r(t)]&&s?t=this.date.add(t,1,this._load_mode):s=!1;
var a=i;do i=a,a=this.date.add(i,-1,this._load_mode);while(a>t&&this._loaded[r(a)]);if(t>=i)return!1;for(scheduler.$ajax.get(e+"&from="+r(t)+"&to="+r(i),function(e){scheduler.on_load(e)});i>t;)this._loaded[r(t)]=!0,t=this.date.add(t,1,this._load_mode)}else scheduler.$ajax.get(e,function(e){scheduler.on_load(e)});return this.callEvent("onXLS",[]),!0}},scheduler.on_load=function(e){var t,i=!1;if(this._process&&"xml"!=this._process)try{t=this[this._process].parse(e.xmlDoc.responseText)}catch(r){i=!0;
}else t=this._magic_parser(e),t||(i=!0);(i||e.xmlDoc.status&&e.xmlDoc.status>=400)&&(this.callEvent("onLoadError",[e.xmlDoc]),t=[]),scheduler._process_loading(t),this.callEvent("onXLE",[])},scheduler._process_loading=function(e){this._loading=!0,this._not_render=!0;for(var t=0;t<e.length;t++)this.callEvent("onEventLoading",[e[t]])&&this.addEvent(e[t]);this._not_render=!1,this._render_wait&&this.render_view_data(),this._loading=!1,this._after_call&&this._after_call(),this._after_call=null},scheduler._init_event=function(e){
e.text=e.text||e._tagvalue||"",e.start_date=scheduler._init_date(e.start_date),e.end_date=scheduler._init_date(e.end_date)},scheduler._init_date=function(e){return e?"string"==typeof e?scheduler.templates.xml_date(e):new Date(e):null},scheduler.json={},scheduler.json.parse=function(data){"string"==typeof data&&(window.JSON?scheduler._temp=JSON.parse(data):scheduler._temp=eval("("+data+")"),data=scheduler._temp?scheduler._temp.data||scheduler._temp.d||scheduler._temp:[]),data.dhx_security&&(dhtmlx.security_key=data.dhx_security);
var collections=scheduler._temp&&scheduler._temp.collections?scheduler._temp.collections:{},collections_loaded=!1;for(var key in collections)if(collections.hasOwnProperty(key)){collections_loaded=!0;var collection=collections[key],arr=scheduler.serverList[key];if(!arr)continue;arr.splice(0,arr.length);for(var j=0;j<collection.length;j++){var option=collection[j],obj={key:option.value,label:option.label};for(var option_key in option)if(option.hasOwnProperty(option_key)){if("value"==option_key||"label"==option_key)continue;
obj[option_key]=option[option_key]}arr.push(obj)}}collections_loaded&&scheduler.callEvent("onOptionsLoad",[]);for(var evs=[],i=0;i<data.length;i++){var event=data[i];scheduler._init_event(event),evs.push(event)}return evs},scheduler.parse=function(e,t){this._process=t,this.on_load({xmlDoc:{responseText:e}})},scheduler.load=function(e,t){"string"==typeof t&&(this._process=t,t=arguments[2]),this._load_url=e,this._after_call=t,this._load(e,this._date)},scheduler.setLoadMode=function(e){"all"==e&&(e=""),
this._load_mode=e},scheduler.serverList=function(e,t){return t?(this.serverList[e]=t.slice(0),this.serverList[e]):(this.serverList[e]=this.serverList[e]||[],this.serverList[e])},scheduler._userdata={},scheduler._magic_parser=function(e){var t;if(e.getXMLTopNode||(e=scheduler.$ajax.parse(e)),t=scheduler.$ajax.xmltop("data",e.xmlDoc),"data"!=t.tagName)return null;var i=t.getAttribute("dhx_security");i&&(dhtmlx.security_key=i);for(var r=scheduler.$ajax.xpath("//coll_options",e.xmlDoc),s=0;s<r.length;s++){
var a=r[s].getAttribute("for"),n=this.serverList[a];if(n){n.splice(0,n.length);for(var d=scheduler.$ajax.xpath(".//item",r[s]),o=0;o<d.length;o++){for(var l=d[o],h=l.attributes,_={key:d[o].getAttribute("value"),label:d[o].getAttribute("label")},c=0;c<h.length;c++){var u=h[c];"value"!=u.nodeName&&"label"!=u.nodeName&&(_[u.nodeName]=u.nodeValue)}n.push(_)}}}r.length&&scheduler.callEvent("onOptionsLoad",[]);for(var g=scheduler.$ajax.xpath("//userdata",e.xmlDoc),s=0;s<g.length;s++){var f=this._xmlNodeToJSON(g[s]);
this._userdata[f.name]=f.text}var v=[];t=scheduler.$ajax.xpath("//event",e.xmlDoc);for(var s=0;s<t.length;s++){var m=v[s]=this._xmlNodeToJSON(t[s]);scheduler._init_event(m)}return v},scheduler._xmlNodeToJSON=function(e){for(var t={},i=0;i<e.attributes.length;i++)t[e.attributes[i].name]=e.attributes[i].value;for(var i=0;i<e.childNodes.length;i++){var r=e.childNodes[i];1==r.nodeType&&(t[r.tagName]=r.firstChild?r.firstChild.nodeValue:"")}return t.text||(t.text=e.firstChild?e.firstChild.nodeValue:""),
t},scheduler.attachEvent("onXLS",function(){if(this.config.show_loading===!0){var e;e=this.config.show_loading=document.createElement("div"),e.className="dhx_loading",e.style.left=Math.round((this._x-128)/2)+"px",e.style.top=Math.round((this._y-15)/2)+"px",this._obj.appendChild(e)}}),scheduler.attachEvent("onXLE",function(){var e=this.config.show_loading;e&&"object"==typeof e&&(this._obj.removeChild(e),this.config.show_loading=!0)}),scheduler.ical={parse:function(e){var t=e.match(RegExp(this.c_start+"[^\f]*"+this.c_end,""));
if(t.length){t[0]=t[0].replace(/[\r\n]+ /g,""),t[0]=t[0].replace(/[\r\n]+(?=[a-z \t])/g," "),t[0]=t[0].replace(/\;[^:\r\n]*:/g,":");for(var i,r=[],s=RegExp("(?:"+this.e_start+")([^\f]*?)(?:"+this.e_end+")","g");null!==(i=s.exec(t));){for(var a,n={},d=/[^\r\n]+[\r\n]+/g;null!==(a=d.exec(i[1]));)this.parse_param(a.toString(),n);n.uid&&!n.id&&(n.id=n.uid),r.push(n)}return r}},parse_param:function(e,t){var i=e.indexOf(":");if(-1!=i){var r=e.substr(0,i).toLowerCase(),s=e.substr(i+1).replace(/\\\,/g,",").replace(/[\r\n]+$/,"");
"summary"==r?r="text":"dtstart"==r?(r="start_date",s=this.parse_date(s,0,0)):"dtend"==r&&(r="end_date",s=this.parse_date(s,0,0)),t[r]=s}},parse_date:function(e,t,i){var r=e.split("T");r[1]&&(t=r[1].substr(0,2),i=r[1].substr(2,2));var s=r[0].substr(0,4),a=parseInt(r[0].substr(4,2),10)-1,n=r[0].substr(6,2);return scheduler.config.server_utc&&!r[1]?new Date(Date.UTC(s,a,n,t,i)):new Date(s,a,n,t,i)},c_start:"BEGIN:VCALENDAR",e_start:"BEGIN:VEVENT",e_end:"END:VEVENT",c_end:"END:VCALENDAR"},scheduler._lightbox_controls={},
scheduler.formSection=function(e){var t=this.config.lightbox.sections,i=0;for(i;i<t.length&&t[i].name!=e;i++);var r=t[i];scheduler._lightbox||scheduler.getLightbox();var s=document.getElementById(r.id),a=s.nextSibling,n={section:r,header:s,node:a,getValue:function(e){return scheduler.form_blocks[r.type].get_value(a,e||{},r)},setValue:function(e,t){return scheduler.form_blocks[r.type].set_value(a,e,t||{},r)}},d=scheduler._lightbox_controls["get_"+r.type+"_control"];return d?d(n):n},scheduler._lightbox_controls.get_template_control=function(e){
return e.control=e.node,e},scheduler._lightbox_controls.get_select_control=function(e){return e.control=e.node.getElementsByTagName("select")[0],e},scheduler._lightbox_controls.get_textarea_control=function(e){return e.control=e.node.getElementsByTagName("textarea")[0],e},scheduler._lightbox_controls.get_time_control=function(e){return e.control=e.node.getElementsByTagName("select"),e},scheduler._lightbox_controls.defaults={template:{height:30},textarea:{height:200},select:{height:23},time:{height:20
}},scheduler.form_blocks={template:{render:function(e){var t=scheduler._lightbox_controls.defaults.template,i=t?t.height:30,r=(e.height||i||30)+"px";return"<div class='dhx_cal_ltext dhx_cal_template' style='height:"+r+";'></div>"},set_value:function(e,t,i,r){e.innerHTML=t||""},get_value:function(e,t,i){return e.innerHTML||""},focus:function(e){}},textarea:{render:function(e){var t=scheduler._lightbox_controls.defaults.textarea,i=t?t.height:200,r=(e.height||i||"130")+"px";return"<div class='dhx_cal_ltext' style='height:"+r+";'><textarea></textarea></div>";
},set_value:function(e,t,i){scheduler.form_blocks.textarea._get_input(e).value=t||""},get_value:function(e,t){return scheduler.form_blocks.textarea._get_input(e).value},focus:function(e){var t=scheduler.form_blocks.textarea._get_input(e);scheduler._focus(t,!0)},_get_input:function(e){return e.getElementsByTagName("textarea")[0]}},select:{render:function(e){for(var t=scheduler._lightbox_controls.defaults.select,i=t?t.height:23,r=(e.height||i||"23")+"px",s="<div class='dhx_cal_ltext' style='height:"+r+";'><select style='width:100%;'>",a=0;a<e.options.length;a++)s+="<option value='"+e.options[a].key+"'>"+e.options[a].label+"</option>";
return s+="</select></div>"},set_value:function(e,t,i,r){var s=e.firstChild;!s._dhx_onchange&&r.onchange&&(s.onchange=r.onchange,s._dhx_onchange=!0),"undefined"==typeof t&&(t=(s.options[0]||{}).value),s.value=t||""},get_value:function(e,t){return e.firstChild.value},focus:function(e){var t=e.firstChild;scheduler._focus(t,!0)}},time:{render:function(e){e.time_format||(e.time_format=["%H:%i","%d","%m","%Y"]),e._time_format_order={};var t=e.time_format,i=scheduler.config,r=scheduler.date.date_part(scheduler._currentDate()),s=1440,a=0;
scheduler.config.limit_time_select&&(s=60*i.last_hour+1,a=60*i.first_hour,r.setHours(i.first_hour));for(var n="",d=0;d<t.length;d++){var o=t[d];d>0&&(n+=" ");var l="",h="";switch(o){case"%Y":l="dhx_lightbox_year_select",e._time_format_order[3]=d;for(var _=r.getFullYear()-5,c=0;10>c;c++)h+="<option value='"+(_+c)+"'>"+(_+c)+"</option>";break;case"%m":l="dhx_lightbox_month_select",e._time_format_order[2]=d;for(var c=0;12>c;c++)h+="<option value='"+c+"'>"+this.locale.date.month_full[c]+"</option>";break;
case"%d":l="dhx_lightbox_day_select",e._time_format_order[1]=d;for(var c=1;32>c;c++)h+="<option value='"+c+"'>"+c+"</option>";break;case"%H:%i":l="dhx_lightbox_time_select",e._time_format_order[0]=d;var c=a,u=r.getDate();for(e._time_values=[];s>c;){var g=this.templates.time_picker(r);h+="<option value='"+c+"'>"+g+"</option>",e._time_values.push(c),r.setTime(r.valueOf()+60*this.config.time_step*1e3);var f=r.getDate()!=u?1:0;c=24*f*60+60*r.getHours()+r.getMinutes()}}if(h){var v=scheduler._waiAria.lightboxSelectAttrString(o),m=e.readonly?"disabled='disabled'":"";
n+="<select class='"+l+"' "+m+v+">"+h+"</select> "}}var p=scheduler._lightbox_controls.defaults.select,x=p?p.height:23,b=x||30;return"<div style='height:"+b+"px;padding-top:0px;font-size:inherit;' class='dhx_section_time'>"+n+"<span style='font-weight:normal; font-size:10pt;'> &nbsp;&ndash;&nbsp; </span>"+n+"</div>"},set_value:function(e,t,i,r){function s(e,t,i){for(var s=r._time_values,a=60*i.getHours()+i.getMinutes(),n=a,d=!1,o=0;o<s.length;o++){var h=s[o];if(h===a){d=!0;break}a>h&&(n=h)}e[t+l[0]].value=d?a:n,
d||n||(e[t+l[0]].selectedIndex=-1),e[t+l[1]].value=i.getDate(),e[t+l[2]].value=i.getMonth(),e[t+l[3]].value=i.getFullYear()}var a,n,d=scheduler.config,o=e.getElementsByTagName("select"),l=r._time_format_order;if(d.full_day){if(!e._full_day){var h="<label class='dhx_fullday'><input type='checkbox' name='full_day' value='true'> "+scheduler.locale.labels.full_day+"&nbsp;</label></input>";scheduler.config.wide_form||(h=e.previousSibling.innerHTML+h),e.previousSibling.innerHTML=h,e._full_day=!0}var _=e.previousSibling.getElementsByTagName("input")[0];
_.checked=0===scheduler.date.time_part(i.start_date)&&0===scheduler.date.time_part(i.end_date),o[l[0]].disabled=_.checked,o[l[0]+o.length/2].disabled=_.checked,_.onclick=function(){if(_.checked){var t={};scheduler.form_blocks.time.get_value(e,t,r),a=scheduler.date.date_part(t.start_date),n=scheduler.date.date_part(t.end_date),(+n==+a||+n>=+a&&(0!==i.end_date.getHours()||0!==i.end_date.getMinutes()))&&(n=scheduler.date.add(n,1,"day"))}else a=null,n=null;o[l[0]].disabled=_.checked,o[l[0]+o.length/2].disabled=_.checked,
s(o,0,a||i.start_date),s(o,4,n||i.end_date)}}if(d.auto_end_date&&d.event_duration)for(var c=function(){a=new Date(o[l[3]].value,o[l[2]].value,o[l[1]].value,0,o[l[0]].value),n=new Date(a.getTime()+60*scheduler.config.event_duration*1e3),s(o,4,n)},u=0;4>u;u++)o[u].onchange=c;s(o,0,i.start_date),s(o,4,i.end_date)},get_value:function(e,t,i){var r=e.getElementsByTagName("select"),s=i._time_format_order;if(t.start_date=new Date(r[s[3]].value,r[s[2]].value,r[s[1]].value,0,r[s[0]].value),t.end_date=new Date(r[s[3]+4].value,r[s[2]+4].value,r[s[1]+4].value,0,r[s[0]+4].value),
!r[s[3]].value||!r[s[3]+4].value){var a=scheduler.getEvent(scheduler._lightbox_id);a&&(t.start_date=a.start_date,t.end_date=a.end_date)}return t.end_date<=t.start_date&&(t.end_date=scheduler.date.add(t.start_date,scheduler.config.time_step,"minute")),{start_date:new Date(t.start_date),end_date:new Date(t.end_date)}},focus:function(e){scheduler._focus(e.getElementsByTagName("select")[0])}}},scheduler.showCover=function(e){if(e){e.style.display="block";var t=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop,i=window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft,r=window.innerHeight||document.documentElement.clientHeight;
t?e.style.top=Math.round(t+Math.max((r-e.offsetHeight)/2,0))+"px":e.style.top=Math.round(Math.max((r-e.offsetHeight)/2,0)+9)+"px",document.documentElement.scrollWidth>document.body.offsetWidth?e.style.left=Math.round(i+(document.body.offsetWidth-e.offsetWidth)/2)+"px":e.style.left=Math.round((document.body.offsetWidth-e.offsetWidth)/2)+"px"}this.show_cover()},scheduler.showLightbox=function(e){if(e){if(!this.callEvent("onBeforeLightbox",[e]))return void(this._new_event&&(this._new_event=null));var t=this.getLightbox();
this.showCover(t),this._fill_lightbox(e,t),this._waiAria.lightboxVisibleAttr(t),this.callEvent("onLightbox",[e])}},scheduler._fill_lightbox=function(e,t){var i=this.getEvent(e),r=t.getElementsByTagName("span"),s=[];if(scheduler.templates.lightbox_header){s.push("");var a=scheduler.templates.lightbox_header(i.start_date,i.end_date,i);s.push(a),r[1].innerHTML="",r[2].innerHTML=a}else{var n=this.templates.event_header(i.start_date,i.end_date,i),d=(this.templates.event_bar_text(i.start_date,i.end_date,i)||"").substr(0,70);
s.push(n),s.push(d),r[1].innerHTML=n,r[2].innerHTML=d}this._waiAria.lightboxHeader(t,s.join(" "));for(var o=this.config.lightbox.sections,l=0;l<o.length;l++){var h=o[l],_=scheduler._get_lightbox_section_node(h),c=this.form_blocks[h.type],u=void 0!==i[h.map_to]?i[h.map_to]:h.default_value;c.set_value.call(this,_,u,i,h),o[l].focus&&c.focus.call(this,_)}scheduler._lightbox_id=e},scheduler._get_lightbox_section_node=function(e){return document.getElementById(e.id).nextSibling},scheduler._lightbox_out=function(e){
for(var t=this.config.lightbox.sections,i=0;i<t.length;i++){var r=document.getElementById(t[i].id);r=r?r.nextSibling:r;var s=this.form_blocks[t[i].type],a=s.get_value.call(this,r,e,t[i]);"auto"!=t[i].map_to&&(e[t[i].map_to]=a)}return e},scheduler._empty_lightbox=function(e){var t=scheduler._lightbox_id,i=this.getEvent(t);this.getLightbox();this._lame_copy(i,e),this.setEvent(i.id,i),this._edit_stop_event(i,!0),this.render_view_data()},scheduler.hide_lightbox=function(e){scheduler.endLightbox(!1,this.getLightbox());
},scheduler.hideCover=function(e){e&&(e.style.display="none"),this.hide_cover()},scheduler.hide_cover=function(){this._cover&&this._cover.parentNode.removeChild(this._cover),this._cover=null},scheduler.show_cover=function(){if(!this._cover){this._cover=document.createElement("div"),this._cover.className="dhx_cal_cover";var e=void 0!==document.height?document.height:document.body.offsetHeight,t=document.documentElement?document.documentElement.scrollHeight:0;this._cover.style.height=Math.max(e,t)+"px",
document.body.appendChild(this._cover)}},scheduler.save_lightbox=function(){var e=this._lightbox_out({},this._lame_copy(this.getEvent(this._lightbox_id)));(!this.checkEvent("onEventSave")||this.callEvent("onEventSave",[this._lightbox_id,e,this._new_event]))&&(this._empty_lightbox(e),this.hide_lightbox())},scheduler.startLightbox=function(e,t){this._lightbox_id=e,this._custom_lightbox=!0,this._temp_lightbox=this._lightbox,this._lightbox=t,this.showCover(t)},scheduler.endLightbox=function(e,t){var t=t||scheduler.getLightbox(),i=scheduler.getEvent(this._lightbox_id);
i&&this._edit_stop_event(i,e),e&&scheduler.render_view_data(),this.hideCover(t),this._custom_lightbox&&(this._lightbox=this._temp_lightbox,this._custom_lightbox=!1),this._temp_lightbox=this._lightbox_id=null,this._waiAria.lightboxHiddenAttr(t),this.callEvent("onAfterLightbox",[])},scheduler.resetLightbox=function(){scheduler._lightbox&&!scheduler._custom_lightbox&&scheduler._lightbox.parentNode.removeChild(scheduler._lightbox),scheduler._lightbox=null},scheduler.cancel_lightbox=function(){this.callEvent("onEventCancel",[this._lightbox_id,this._new_event]),
this.hide_lightbox()},scheduler._init_lightbox_events=function(){this.getLightbox().onclick=function(e){var t=e?e.target:event.srcElement;if(t.className||(t=t.previousSibling),!(t&&t.className&&scheduler._getClassName(t).indexOf("dhx_btn_set")>-1)||(t=t.querySelector("[dhx_button]"))){var i=scheduler._getClassName(t);if(t&&i)switch(i){case"dhx_save_btn":scheduler.save_lightbox();break;case"dhx_delete_btn":var r=scheduler.locale.labels.confirm_deleting;scheduler._dhtmlx_confirm(r,scheduler.locale.labels.title_confirm_deleting,function(){
scheduler.deleteEvent(scheduler._lightbox_id),scheduler._new_event=null,scheduler.hide_lightbox()});break;case"dhx_cancel_btn":scheduler.cancel_lightbox();break;default:if(t.getAttribute("dhx_button"))scheduler.callEvent("onLightboxButton",[i,t,e]);else{var s,a,n;-1!=i.indexOf("dhx_custom_button")&&(-1!=i.indexOf("dhx_custom_button_")?(s=t.parentNode.getAttribute("index"),n=t.parentNode.parentNode):(s=t.getAttribute("index"),n=t.parentNode,t=t.firstChild)),s&&(a=scheduler.form_blocks[scheduler.config.lightbox.sections[s].type],
a.button_click(s,t,n,n.nextSibling))}}}},this.getLightbox().onkeydown=function(e){var t=e||window.event,i=e.target||e.srcElement,r=i.querySelector("[dhx_button]");switch(r||(r=i.parentNode.querySelector(".dhx_custom_button, .dhx_readonly")),(e||t).keyCode){case 32:if((e||t).shiftKey)return;r&&r.click&&r.click();break;case scheduler.keys.edit_save:if((e||t).shiftKey)return;r&&r.click?r.click():scheduler.save_lightbox();break;case scheduler.keys.edit_cancel:scheduler.cancel_lightbox()}}},scheduler.setLightboxSize=function(){
var e=this._lightbox;if(e){var t=e.childNodes[1];t.style.height="0px",t.style.height=t.scrollHeight+"px",e.style.height=t.scrollHeight+scheduler.xy.lightbox_additional_height+"px",t.style.height=t.scrollHeight+"px"}},scheduler._init_dnd_events=function(){dhtmlxEvent(document.body,"mousemove",scheduler._move_while_dnd),dhtmlxEvent(document.body,"mouseup",scheduler._finish_dnd),scheduler._init_dnd_events=function(){}},scheduler._move_while_dnd=function(e){if(scheduler._dnd_start_lb){document.dhx_unselectable||(document.body.className+=" dhx_unselectable",
document.dhx_unselectable=!0);var t=scheduler.getLightbox(),i=e&&e.target?[e.pageX,e.pageY]:[event.clientX,event.clientY];t.style.top=scheduler._lb_start[1]+i[1]-scheduler._dnd_start_lb[1]+"px",t.style.left=scheduler._lb_start[0]+i[0]-scheduler._dnd_start_lb[0]+"px"}},scheduler._ready_to_dnd=function(e){var t=scheduler.getLightbox();scheduler._lb_start=[parseInt(t.style.left,10),parseInt(t.style.top,10)],scheduler._dnd_start_lb=e&&e.target?[e.pageX,e.pageY]:[event.clientX,event.clientY]},scheduler._finish_dnd=function(){
scheduler._lb_start&&(scheduler._lb_start=scheduler._dnd_start_lb=!1,document.body.className=document.body.className.replace(" dhx_unselectable",""),document.dhx_unselectable=!1)},scheduler.getLightbox=function(){if(!this._lightbox){var e=document.createElement("div");e.className="dhx_cal_light",scheduler.config.wide_form&&(e.className+=" dhx_cal_light_wide"),scheduler.form_blocks.recurring&&(e.className+=" dhx_cal_light_rec"),/msie|MSIE 6/.test(navigator.userAgent)&&(e.className+=" dhx_ie6"),e.style.visibility="hidden";
for(var t=this._lightbox_template,i=this.config.buttons_left,r="",s=0;s<i.length;s++)r=this._waiAria.lightboxButtonAttrString(i[s]),t+="<div "+r+" class='dhx_btn_set dhx_left_btn_set "+i[s]+"_set'><div dhx_button='1' class='"+i[s]+"'></div><div>"+scheduler.locale.labels[i[s]]+"</div></div>";i=this.config.buttons_right;for(var s=0;s<i.length;s++)r=this._waiAria.lightboxButtonAttrString(i[s]),t+="<div "+r+" class='dhx_btn_set dhx_right_btn_set "+i[s]+"_set' style='float:right;'><div dhx_button='1' class='"+i[s]+"'></div><div>"+scheduler.locale.labels[i[s]]+"</div></div>";
t+="</div>",e.innerHTML=t,scheduler.config.drag_lightbox&&(e.firstChild.onmousedown=scheduler._ready_to_dnd,e.firstChild.onselectstart=function(){return!1},e.firstChild.style.cursor="move",scheduler._init_dnd_events()),this._waiAria.lightboxAttr(e),document.body.insertBefore(e,document.body.firstChild),this._lightbox=e;var a=this.config.lightbox.sections;t="";for(var s=0;s<a.length;s++){var n=this.form_blocks[a[s].type];if(n){a[s].id="area_"+this.uid();var d="";if(a[s].button){var r=scheduler._waiAria.lightboxSectionButtonAttrString(this.locale.labels["button_"+a[s].button]);
d="<div "+r+" class='dhx_custom_button' index='"+s+"'><div class='dhx_custom_button_"+a[s].button+"'></div><div>"+this.locale.labels["button_"+a[s].button]+"</div></div>"}this.config.wide_form&&(t+="<div class='dhx_wrap_section'>");var o=this.locale.labels["section_"+a[s].name];"string"!=typeof o&&(o=a[s].name),t+="<div id='"+a[s].id+"' class='dhx_cal_lsection'>"+d+"<label>"+o+"</label></div>"+n.render.call(this,a[s]),t+="</div>"}}for(var l=e.getElementsByTagName("div"),s=0;s<l.length;s++){var h=l[s],_=scheduler._getClassName(h);
if("dhx_cal_larea"==_){h.innerHTML=t;break}}scheduler._bindLightboxLabels(a),this.setLightboxSize(),this._init_lightbox_events(this),e.style.display="none",e.style.visibility="visible"}return this._lightbox},scheduler._bindLightboxLabels=function(e){for(var t=0;t<e.length;t++){var i=e[t];if(i.id&&document.getElementById(i.id)){for(var r=document.getElementById(i.id),s=r.querySelector("label"),a=scheduler._get_lightbox_section_node(i);a&&!a.querySelector;)a=a.nextSibling;var n=!0;if(a){var d=a.querySelector("input, select, textarea");
d&&(i.inputId=d.id||"input_"+scheduler.uid(),d.id||(d.id=i.inputId),s.setAttribute("for",i.inputId),n=!1)}if(n){var o=scheduler.form_blocks[i.type];o.focus&&(s.onclick=function(e){return function(){var t=scheduler.form_blocks[e.type],i=scheduler._get_lightbox_section_node(e);t&&t.focus&&t.focus.call(scheduler,i)}}(i))}}}},scheduler.attachEvent("onEventIdChange",function(e,t){this._lightbox_id==e&&(this._lightbox_id=t)}),scheduler._lightbox_template="<div class='dhx_cal_ltitle'><span class='dhx_mark'>&nbsp;</span><span class='dhx_time'></span><span class='dhx_title'></span></div><div class='dhx_cal_larea'></div>",
scheduler._init_touch_events=function(){var e=this.config.touch&&(-1!=navigator.userAgent.indexOf("Mobile")||-1!=navigator.userAgent.indexOf("iPad")||-1!=navigator.userAgent.indexOf("Android")||-1!=navigator.userAgent.indexOf("Touch"));if(e&&(this.xy.scroll_width=0,this._mobile=!0),this.config.touch){var t=!0;try{document.createEvent("TouchEvent")}catch(i){t=!1}t?this._touch_events(["touchmove","touchstart","touchend"],function(e){return e.touches&&e.touches.length>1?null:e.touches[0]?{target:e.target,
pageX:e.touches[0].pageX,pageY:e.touches[0].pageY,clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:e},function(){return!1}):window.PointerEvent||window.navigator.pointerEnabled?this._touch_events(["pointermove","pointerdown","pointerup"],function(e){return"mouse"==e.pointerType?null:e},function(e){return!e||"mouse"==e.pointerType}):window.navigator.msPointerEnabled&&this._touch_events(["MSPointerMove","MSPointerDown","MSPointerUp"],function(e){return e.pointerType==e.MSPOINTER_TYPE_MOUSE?null:e;
},function(e){return!e||e.pointerType==e.MSPOINTER_TYPE_MOUSE})}},scheduler._touch_events=function(e,t,i){function r(e,t,r){e.addEventListener(t,function(e){if(scheduler._is_lightbox_open())return!0;if(!i(e))return r(e)},{passive:!1})}function s(e,t,i,r){if(!e||!t)return!1;for(var s=e.target;s&&s!=scheduler._obj;)s=s.parentNode;if(s!=scheduler._obj)return!1;var a=Math.abs(e.pageY-t.pageY),n=Math.abs(e.pageX-t.pageX);return r>a&&n>i&&(!a||n/a>3)?(e.pageX>t.pageX?scheduler._click.dhx_cal_next_button():scheduler._click.dhx_cal_prev_button(),
!0):!1}function a(e){if(!i(e)){var t=scheduler.getState().drag_mode,r=scheduler.matrix?scheduler.matrix[scheduler._mode]:!1,s=scheduler.render_view_data;return"create"==t&&r&&(scheduler.render_view_data=function(){for(var e=scheduler.getState().drag_id,t=scheduler.getEvent(e),i=r.y_property,s=scheduler.getEvents(t.start_date,t.end_date),a=0;a<s.length;a++)s[a][i]!=t[i]&&(s.splice(a,1),a--);t._sorder=s.length-1,t._count=s.length,this.render_data([t],scheduler.getState().mode)}),scheduler._on_mouse_move(e),
"create"==t&&r&&(scheduler.render_view_data=s),e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,!1}}function n(e){i(e)||(scheduler._hide_global_tip(),h&&(scheduler._on_mouse_up(t(e||event)),scheduler._temp_touch_block=!1),scheduler._drag_id=null,scheduler._drag_mode=null,scheduler._drag_pos=null,scheduler._pointerDragId=null,clearTimeout(l),h=c=!1,_=!0)}var d,o,l,h,_,c,u=(-1!=navigator.userAgent.indexOf("Android")&&-1!=navigator.userAgent.indexOf("WebKit"),0);r(document.body,e[0],function(e){
if(!i(e)){var r=t(e);if(r){if(h)return a(r),e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,scheduler._update_global_tip(),!1;if(o=t(e),c)return o?void((d.target!=o.target||Math.abs(d.pageX-o.pageX)>5||Math.abs(d.pageY-o.pageY)>5)&&(_=!0,clearTimeout(l))):void(_=!0)}}}),r(this._els.dhx_cal_data[0],"scroll",n),r(this._els.dhx_cal_data[0],"touchcancel",n),r(this._els.dhx_cal_data[0],"contextmenu",function(e){return i(e)?void 0:c?(e&&e.preventDefault&&e.preventDefault(),(e||event).cancelBubble=!0,
!1):void 0}),r(this._obj,e[1],function(e){if(!i(e)){scheduler._pointerDragId=e.pointerId;var r;if(h=_=!1,c=!0,r=o=t(e),!r)return void(_=!0);var s=new Date;if(!_&&!h&&250>s-u)return scheduler._click.dhx_cal_data(r),window.setTimeout(function(){r.type="dblclick",scheduler._on_dbl_click(r)},50),e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,scheduler._block_next_stop=!0,!1;if(u=s,!_&&!h&&scheduler.config.touch_drag){var a=scheduler._locate_event(document.activeElement),n=scheduler._locate_event(r.target),g=d?scheduler._locate_event(d.target):null;
if(a&&n&&a==n&&a!=g)return e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,scheduler._ignore_next_click=!1,scheduler._click.dhx_cal_data(r),d=r,!1;l=setTimeout(function(){h=!0;var e=d.target,t=scheduler._getClassName(e);e&&-1!=t.indexOf("dhx_body")&&(e=e.previousSibling),scheduler._on_mouse_down(d,e),scheduler._drag_mode&&"create"!=scheduler._drag_mode&&scheduler.for_rendered(scheduler._drag_id,function(e,t){e.style.display="none",scheduler._rendered.splice(t,1)}),scheduler.config.touch_tip&&scheduler._show_global_tip(),
scheduler.updateEvent(scheduler._drag_id)},scheduler.config.touch_drag),d=r}}}),r(this._els.dhx_cal_data[0],e[2],function(e){return i(e)?void 0:(!h&&s(d,o,200,100)&&(scheduler._block_next_stop=!0),h&&(scheduler._ignore_next_click=!0,setTimeout(function(){scheduler._ignore_next_click=!1},100)),n(e),scheduler._block_next_stop?(scheduler._block_next_stop=!1,e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,!1):void 0)}),dhtmlxEvent(document.body,e[2],n)},scheduler._show_global_tip=function(){scheduler._hide_global_tip();
var e=scheduler._global_tip=document.createElement("div");e.className="dhx_global_tip",scheduler._update_global_tip(1),document.body.appendChild(e)},scheduler._update_global_tip=function(e){var t=scheduler._global_tip;if(t){var i="";if(scheduler._drag_id&&!e){var r=scheduler.getEvent(scheduler._drag_id);r&&(i="<div>"+(r._timed?scheduler.templates.event_header(r.start_date,r.end_date,r):scheduler.templates.day_date(r.start_date,r.end_date,r))+"</div>")}"create"==scheduler._drag_mode||"new-size"==scheduler._drag_mode?t.innerHTML=(scheduler.locale.labels.drag_to_create||"Drag to create")+i:t.innerHTML=(scheduler.locale.labels.drag_to_move||"Drag to move")+i;
}},scheduler._hide_global_tip=function(){var e=scheduler._global_tip;e&&e.parentNode&&(e.parentNode.removeChild(e),scheduler._global_tip=0)},scheduler._dp_init=function(e){e._methods=["_set_event_text_style","","_dp_change_event_id","_dp_hook_delete"],this._dp_change_event_id=function(e,t){scheduler.getEvent(e)&&scheduler.changeEventId(e,t)},this._dp_hook_delete=function(t,i){return scheduler.getEvent(t)?(t!=i&&("true_deleted"==this.getUserData(t,e.action_param)&&this.setUserData(t,e.action_param,"updated"),
this.changeEventId(t,i)),this.deleteEvent(i,!0)):void 0},this.attachEvent("onEventAdded",function(t){!this._loading&&this._validId(t)&&e.setUpdated(t,!0,"inserted")}),this.attachEvent("onConfirmedBeforeEventDelete",function(t){if(this._validId(t)){var i=e.getState(t);return"inserted"==i||this._new_event?(e.setUpdated(t,!1),!0):"deleted"==i?!1:"true_deleted"==i?!0:(e.setUpdated(t,!0,"deleted"),!1)}}),this.attachEvent("onEventChanged",function(t){!this._loading&&this._validId(t)&&e.setUpdated(t,!0,"updated");
}),scheduler.attachEvent("onClearAll",function(){e._in_progress={},e._invalid={},e.updatedRows=[],e._waitMode=0}),e._objToJson=function(t,i,r){r=r||"",i=i||{};for(var s in t)0!==s.indexOf("_")&&(t[s]&&t[s].getUTCFullYear?i[r+s]=this.obj.templates.xml_format(t[s]):t[s]&&"object"==typeof t[s]?e._objToJson(t[s],i,r+s+"."):i[r+s]=t[s]);return i},e._getRowData=function(e,t){var i=this.obj.getEvent(e);return this._objToJson(i)},e._clearUpdateFlag=function(){},e.attachEvent("insertCallback",scheduler._update_callback),
e.attachEvent("updateCallback",scheduler._update_callback),e.attachEvent("deleteCallback",function(e,t){this.obj.getEvent(t)?(this.obj.setUserData(t,this.action_param,"true_deleted"),this.obj.deleteEvent(t)):this.obj._add_rec_marker&&this.obj._update_callback(e,t)})},scheduler._validId=function(e){return!0},scheduler.setUserData=function(e,t,i){if(e){var r=this.getEvent(e);r&&(r[t]=i)}else this._userdata[t]=i},scheduler.getUserData=function(e,t){if(e){var i=this.getEvent(e);return i?i[t]:null}return this._userdata[t];
},scheduler._set_event_text_style=function(e,t){if(scheduler.getEvent(e)){this.for_rendered(e,function(e){e.style.cssText+=";"+t});var i=this.getEvent(e);i._text_style=t,this.event_updated(i)}},scheduler._update_callback=function(e,t){var i=scheduler._xmlNodeToJSON(e.firstChild);"none"==i.rec_type&&(i.rec_pattern="none"),i.text=i.text||i._tagvalue,i.start_date=scheduler.templates.xml_date(i.start_date),i.end_date=scheduler.templates.xml_date(i.end_date),scheduler.addEvent(i),scheduler._add_rec_marker&&scheduler.setCurrentView();
},scheduler._skin_settings={fix_tab_position:[1,0],use_select_menu_space:[1,0],wide_form:[1,0],hour_size_px:[44,42],displayed_event_color:["#ff4a4a","ffc5ab"],displayed_event_text_color:["#ffef80","7e2727"]},scheduler._skin_xy={lightbox_additional_height:[90,50],nav_height:[59,22],bar_height:[24,20]},scheduler._is_material_skin=function(){return(scheduler.skin+"").indexOf("material")>-1},scheduler._border_box_bvents=function(){return scheduler._is_material_skin()},scheduler._configure=function(e,t,i){
for(var r in t)"undefined"==typeof e[r]&&(e[r]=t[r][i])},scheduler._skin_init=function(){if(!scheduler.skin)for(var e=document.getElementsByTagName("link"),t=0;t<e.length;t++){var i=e[t].href.match("dhtmlxscheduler_([a-z]+).css");if(i){scheduler.skin=i[1];break}}var r=0;if(!scheduler.skin||"classic"!==scheduler.skin&&"glossy"!==scheduler.skin||(r=1),scheduler._is_material_skin()){var s=scheduler.config.buttons_left.$inital,a=scheduler.config.buttons_right.$inital;if(s&&scheduler.config.buttons_left.slice().join()==s&&a&&scheduler.config.buttons_right.slice().join()==a){
var n=scheduler.config.buttons_left.slice();scheduler.config.buttons_left=scheduler.config.buttons_right.slice(),scheduler.config.buttons_right=n}scheduler.xy.event_header_height=18,scheduler.xy.menu_width=25,scheduler.xy.week_agenda_scale_height=35,scheduler.xy.map_icon_width=38,scheduler._lightbox_controls.defaults.textarea.height=64,scheduler._lightbox_controls.defaults.time.height="auto"}if(this._configure(scheduler.config,scheduler._skin_settings,r),this._configure(scheduler.xy,scheduler._skin_xy,r),
"flat"===scheduler.skin&&(scheduler.xy.scale_height=35,scheduler.templates.hour_scale=function(e){var t=e.getMinutes();t=10>t?"0"+t:t;var i="<span class='dhx_scale_h'>"+e.getHours()+"</span><span class='dhx_scale_m'>&nbsp;"+t+"</span>";return i}),!r){var d=scheduler.config.minicalendar;d&&(d.padding=14),scheduler.templates.event_bar_date=function(e,t,i){return"• <b>"+scheduler.templates.event_date(e)+"</b> "},scheduler.attachEvent("onTemplatesReady",function(){var e=scheduler.date.date_to_str("%d");
scheduler.templates._old_month_day||(scheduler.templates._old_month_day=scheduler.templates.month_day);var t=scheduler.templates._old_month_day;if(scheduler.templates.month_day=function(i){if("month"==this._mode){var r=e(i);return 1==i.getDate()&&(r=scheduler.locale.date.month_full[i.getMonth()]+" "+r),+i==+scheduler.date.date_part(this._currentDate())&&(r=scheduler.locale.labels.dhx_cal_today_button+" "+r),r}return t.call(this,i)},scheduler.config.fix_tab_position){var i=scheduler._els.dhx_cal_navline[0].getElementsByTagName("div"),r=null,s=211,a=[14,75,136],n=14;
scheduler._is_material_skin()&&(a=[16,103,192],s=294,n=-1);for(var d=0;d<i.length;d++){var o=i[d],l=o.getAttribute("name");if(l){switch(o.style.right="auto",l){case"day_tab":o.style.left=a[0]+"px",o.className+=" dhx_cal_tab_first";break;case"week_tab":o.style.left=a[1]+"px";break;case"month_tab":o.style.left=a[2]+"px",o.className+=" dhx_cal_tab_last";break;default:o.style.left=s+"px",o.className+=" dhx_cal_tab_standalone",s=s+n+o.offsetWidth}o.className+=" "+l}else 0===(o.className||"").indexOf("dhx_minical_icon")&&o.parentNode==scheduler._els.dhx_cal_navline[0]&&(r=o);
}r&&(r.style.left=s+"px")}}),scheduler._skin_init=function(){}}},window.jQuery&&!function(e){var t=[];e.fn.dhx_scheduler=function(i){if("string"!=typeof i){var r=[];return this.each(function(){if(this&&this.getAttribute&&!this.getAttribute("dhxscheduler")){for(var e in i)"data"!=e&&(scheduler.config[e]=i[e]);this.getElementsByTagName("div").length||(this.innerHTML='<div class="dhx_cal_navline"><div class="dhx_cal_prev_button">&nbsp;</div><div class="dhx_cal_next_button">&nbsp;</div><div class="dhx_cal_today_button"></div><div class="dhx_cal_date"></div><div class="dhx_cal_tab" name="day_tab" style="right:204px;"></div><div class="dhx_cal_tab" name="week_tab" style="right:140px;"></div><div class="dhx_cal_tab" name="month_tab" style="right:76px;"></div></div><div class="dhx_cal_header"></div><div class="dhx_cal_data"></div>',
this.className+=" dhx_cal_container"),scheduler.init(this,scheduler.config.date,scheduler.config.mode),i.data&&scheduler.parse(i.data),r.push(scheduler)}}),1===r.length?r[0]:r}return t[i]?t[i].apply(this,[]):void e.error("Method "+i+" does not exist on jQuery.dhx_scheduler")}}(jQuery),function(){function e(e,t,i){t&&(e._date=t),i&&(e._mode=i)}var t=scheduler.setCurrentView,i=scheduler.updateView,r=null,s=null,a=function(t,a){var n=this;window.clearTimeout(s),window.clearTimeout(r);var d=n._date,o=n._mode;
e(this,t,a),s=setTimeout(function(){return n.callEvent("onBeforeViewChange",[o,d,a||n._mode,t||n._date])?(i.call(n,t,a),n.callEvent("onViewChange",[n._mode,n._date]),window.clearTimeout(r),void(s=0)):void e(n,d,o)},scheduler.config.delay_render)},n=function(t,a){var n=this,d=arguments;e(this,t,a),window.clearTimeout(r),r=setTimeout(function(){s||i.apply(n,d)},scheduler.config.delay_render)};scheduler.attachEvent("onSchedulerReady",function(){scheduler.config.delay_render?(scheduler.setCurrentView=a,
scheduler.updateView=n):(scheduler.setCurrentView=t,scheduler.updateView=i)})}();
//# sourceMappingURL=sources/dhtmlxscheduler.js.map

/***/ }),

/***/ "./src/app/views/apointment/apointment-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/apointment/apointment-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ApointmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApointmentRoutingModule", function() { return ApointmentRoutingModule; });
/* harmony import */ var _apointments_apointments_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apointments/apointments.component */ "./src/app/views/apointment/apointments/apointments.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _apointments_apointments_component__WEBPACK_IMPORTED_MODULE_0__["ApointmentsComponent"]
    }
];
var ApointmentRoutingModule = /** @class */ (function () {
    function ApointmentRoutingModule() {
    }
    ApointmentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ApointmentRoutingModule);
    return ApointmentRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/apointment/apointment.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/apointment/apointment.module.ts ***!
  \*******************************************************/
/*! exports provided: ApointmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApointmentModule", function() { return ApointmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _apointment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apointment-routing.module */ "./src/app/views/apointment/apointment-routing.module.ts");
/* harmony import */ var _apointments_apointments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apointments/apointments.component */ "./src/app/views/apointment/apointments/apointments.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _calendar_scheduler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendar-scheduler */ "./src/app/views/apointment/calendar-scheduler/index.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _services_appointment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/appointment */ "./src/app/services/appointment/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ApointmentModule = /** @class */ (function () {
    function ApointmentModule() {
    }
    ApointmentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _apointment_routing_module__WEBPACK_IMPORTED_MODULE_2__["ApointmentRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipeModule"]
            ].concat(_shared__WEBPACK_IMPORTED_MODULE_4__["PrimeNg"], [
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"]
            ]),
            declarations: [_apointments_apointments_component__WEBPACK_IMPORTED_MODULE_3__["ApointmentsComponent"], _calendar_scheduler__WEBPACK_IMPORTED_MODULE_8__["CalendarSchedulerComponent"]],
            exports: _shared__WEBPACK_IMPORTED_MODULE_4__["PrimeNg"].slice(),
            providers: [_services_appointment__WEBPACK_IMPORTED_MODULE_10__["AppointmentService"]]
        })
    ], ApointmentModule);
    return ApointmentModule;
}());



/***/ }),

/***/ "./src/app/views/apointment/apointments/apointments.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/apointment/apointments/apointments.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Appointments'\" [icon]=\"'fa-users'\"></app-page-header>\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <a class=\"btn rounded-btn\" [routerLink]=\"['/patients/add']\">New Appointment </a>\r\n            </div>\r\n            <div class=\"input-group mb-3 col-md-6\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                  <li class=\"fa fa-search\"></li>\r\n                </span>\r\n              </div>\r\n              <input type=\"text\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Search...\"\r\n                aria-label=\"Search\" aria-describedby=\"basic-addon1\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body table-responsive\">\r\n          <!-- <p-schedule [events]=\"events\"></p-schedule> -->\r\n          <app-calendar-scheduler></app-calendar-scheduler>\r\n          <div class=\"justify-content-center\">\r\n            <!-- <pagination-controls (pageChange)=\"p = $event\"></pagination-controls> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/apointment/apointments/apointments.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/views/apointment/apointments/apointments.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".justify-content-center {\n  display: flex !important;\n  justify-content: center !important;\n  padding-top: 2%; }\n\n.rounded-btn {\n  border-radius: 50px;\n  color: #0c0c0c;\n  border: 2px solid rgba(14, 13, 13, 0.8);\n  font-size: 18px;\n  line-height: 40px;\n  padding: 0 25px; }\n\n.rounded-btn:hover,\n.rounded-btn:focus,\n.rounded-btn:active,\n.rounded-btn:visited {\n  color: #0c0c0c;\n  border: 2px solid #04034d;\n  outline: none; }\n"

/***/ }),

/***/ "./src/app/views/apointment/apointments/apointments.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/apointment/apointments/apointments.component.ts ***!
  \***********************************************************************/
/*! exports provided: ApointmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApointmentsComponent", function() { return ApointmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApointmentsComponent = /** @class */ (function () {
    function ApointmentsComponent() {
    }
    ApointmentsComponent.prototype.ngOnInit = function () {
        this.events = [
            {
                "title": "All Day Event",
                "start": "2016-01-01"
            },
            {
                "title": "Long Event",
                "start": "2016-01-07",
                "end": "2016-01-10"
            },
            {
                "title": "Repeating Event",
                "start": "2016-01-09T16:00:00"
            },
            {
                "title": "Repeating Event",
                "start": "2016-01-16T16:00:00"
            },
            {
                "title": "Conference",
                "start": "2016-01-11",
                "end": "2016-01-13"
            }
        ];
    };
    ApointmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apointments',
            template: __webpack_require__(/*! ./apointments.component.html */ "./src/app/views/apointment/apointments/apointments.component.html"),
            styles: [__webpack_require__(/*! ./apointments.component.scss */ "./src/app/views/apointment/apointments/apointments.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [])
    ], ApointmentsComponent);
    return ApointmentsComponent;
}());



/***/ }),

/***/ "./src/app/views/apointment/calendar-scheduler/calendar-scheduler.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/apointment/calendar-scheduler/calendar-scheduler.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #scheduler_here class=\"dhx_cal_container\" style=\"width: 100%; height:100vh\">\r\n  <div class=\"dhx_cal_navline\">\r\n      <div class=\"dhx_cal_prev_button\">&nbsp;</div>\r\n      <div class=\"dhx_cal_next_button\">&nbsp;</div>\r\n      <div class=\"dhx_cal_today_button\"></div>\r\n      <div class=\"dhx_cal_date\"></div>\r\n      <div class=\"dhx_cal_tab\" name=\"day_tab\"></div>\r\n      <div class=\"dhx_cal_tab\" name=\"week_tab\"></div>\r\n      <div class=\"dhx_cal_tab\" name=\"month_tab\"></div>\r\n  </div>\r\n  <div class=\"dhx_cal_header\"></div>\r\n  <div class=\"dhx_cal_data\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/apointment/calendar-scheduler/calendar-scheduler.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/views/apointment/calendar-scheduler/calendar-scheduler.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 100%;\n  position: relative;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/views/apointment/calendar-scheduler/calendar-scheduler.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/apointment/calendar-scheduler/calendar-scheduler.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CalendarSchedulerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarSchedulerComponent", function() { return CalendarSchedulerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var dhtmlx_scheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dhtmlx-scheduler */ "./node_modules/dhtmlx-scheduler/codebase/dhtmlxscheduler.js");
/* harmony import */ var dhtmlx_scheduler__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dhtmlx_scheduler__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_appointment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/appointment */ "./src/app/services/appointment/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarSchedulerComponent = /** @class */ (function () {
    function CalendarSchedulerComponent(appointmentService) {
        this.appointmentService = appointmentService;
    }
    CalendarSchedulerComponent.prototype.ngOnInit = function () {
        scheduler.config.xml_date = "%Y-%m-%d %H:%i";
        scheduler.init(this.schedulerContainer.nativeElement, new Date(2018, 8, 1));
        this.appointmentService.getAppointment()
            .then(function (data) {
            scheduler.parse(data, "json");
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("scheduler_here"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CalendarSchedulerComponent.prototype, "schedulerContainer", void 0);
    CalendarSchedulerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            selector: 'app-calendar-scheduler',
            template: __webpack_require__(/*! ./calendar-scheduler.component.html */ "./src/app/views/apointment/calendar-scheduler/calendar-scheduler.component.html"),
            styles: [__webpack_require__(/*! ./calendar-scheduler.component.scss */ "./src/app/views/apointment/calendar-scheduler/calendar-scheduler.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_appointment__WEBPACK_IMPORTED_MODULE_2__["AppointmentService"]])
    ], CalendarSchedulerComponent);
    return CalendarSchedulerComponent;
}());



/***/ }),

/***/ "./src/app/views/apointment/calendar-scheduler/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/apointment/calendar-scheduler/index.ts ***!
  \**************************************************************/
/*! exports provided: CalendarSchedulerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calendar_scheduler_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-scheduler.component */ "./src/app/views/apointment/calendar-scheduler/calendar-scheduler.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CalendarSchedulerComponent", function() { return _calendar_scheduler_component__WEBPACK_IMPORTED_MODULE_0__["CalendarSchedulerComponent"]; });




/***/ })

}]);
//# sourceMappingURL=apointment-apointment-module.js.map