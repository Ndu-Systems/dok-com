(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patients-patients-module"],{

/***/ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-search-filter/ng2-search-filter.es5.js ***!
  \*****************************************************************/
/*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function() { return Ng2SearchPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function() { return Ng2SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var Ng2SearchPipe = /** @class */ (function () {
    function Ng2SearchPipe() {
    }
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    Ng2SearchPipe.prototype.transform = function (items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    };
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    Ng2SearchPipe.filter = function (items, term) {
        var /** @type {?} */ toCompare = term.toLowerCase();
        return items.filter(function (item) {
            for (var /** @type {?} */ property in item) {
                if (item[property] === null) {
                    continue;
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        });
    };
    return Ng2SearchPipe;
}());
Ng2SearchPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'filter',
                pure: false
            },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = function () { return []; };
var Ng2SearchPipeModule = /** @class */ (function () {
    function Ng2SearchPipeModule() {
    }
    return Ng2SearchPipeModule;
}());
Ng2SearchPipeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            },] },
];
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng2-search-filter.es5.js.map


/***/ }),

/***/ "./node_modules/ngx-pagination/dist/ngx-pagination.js":
/*!************************************************************!*\
  !*** ./node_modules/ngx-pagination/dist/ngx-pagination.js ***!
  \************************************************************/
/*! exports provided: ɵb, ɵa, NgxPaginationModule, PaginationService, PaginationControlsComponent, PaginationControlsDirective, PaginatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DEFAULT_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DEFAULT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPaginationModule", function() { return NgxPaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsComponent", function() { return PaginationControlsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationControlsDirective", function() { return PaginationControlsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatePipe", function() { return PaginatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var PaginationService = (function () {
    function PaginationService() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.instances = {};
        this.DEFAULT_ID = 'DEFAULT_PAGINATION_ID';
    }
    PaginationService.prototype.defaultId = function () { return this.DEFAULT_ID; };
    PaginationService.prototype.register = function (instance) {
        if (!instance.id) {
            instance.id = this.DEFAULT_ID;
        }
        if (!this.instances[instance.id]) {
            this.instances[instance.id] = instance;
            this.change.emit(instance.id);
        }
        else {
            var changed = this.updateInstance(instance);
            if (changed) {
                this.change.emit(instance.id);
            }
        }
    };
    /**
     * Check each property of the instance and update any that have changed. Return
     * true if any changes were made, else return false.
     */
    PaginationService.prototype.updateInstance = function (instance) {
        var changed = false;
        for (var prop in this.instances[instance.id]) {
            if (instance[prop] !== this.instances[instance.id][prop]) {
                this.instances[instance.id][prop] = instance[prop];
                changed = true;
            }
        }
        return changed;
    };
    /**
     * Returns the current page number.
     */
    PaginationService.prototype.getCurrentPage = function (id) {
        if (this.instances[id]) {
            return this.instances[id].currentPage;
        }
    };
    /**
     * Sets the current page number.
     */
    PaginationService.prototype.setCurrentPage = function (id, page) {
        if (this.instances[id]) {
            var instance = this.instances[id];
            var maxPage = Math.ceil(instance.totalItems / instance.itemsPerPage);
            if (page <= maxPage && 1 <= page) {
                this.instances[id].currentPage = page;
                this.change.emit(id);
            }
        }
    };
    /**
     * Sets the value of instance.totalItems
     */
    PaginationService.prototype.setTotalItems = function (id, totalItems) {
        if (this.instances[id] && 0 <= totalItems) {
            this.instances[id].totalItems = totalItems;
            this.change.emit(id);
        }
    };
    /**
     * Sets the value of instance.itemsPerPage.
     */
    PaginationService.prototype.setItemsPerPage = function (id, itemsPerPage) {
        if (this.instances[id]) {
            this.instances[id].itemsPerPage = itemsPerPage;
            this.change.emit(id);
        }
    };
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    PaginationService.prototype.getInstance = function (id) {
        if (id === void 0) { id = this.DEFAULT_ID; }
        if (this.instances[id]) {
            return this.clone(this.instances[id]);
        }
        return {};
    };
    /**
     * Perform a shallow clone of an object.
     */
    PaginationService.prototype.clone = function (obj) {
        var target = {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                target[i] = obj[i];
            }
        }
        return target;
    };
    return PaginationService;
}());

var LARGE_NUMBER = Number.MAX_SAFE_INTEGER;
var PaginatePipe = (function () {
    function PaginatePipe(service) {
        this.service = service;
        // store the values from the last time the pipe was invoked
        this.state = {};
    }
    PaginatePipe.prototype.transform = function (collection, args) {
        // When an observable is passed through the AsyncPipe, it will output
        // `null` until the subscription resolves. In this case, we want to
        // use the cached data from the `state` object to prevent the NgFor
        // from flashing empty until the real values arrive.
        if (args instanceof Array) {
            // compatible with angular2 before beta16
            args = args[0];
        }
        if (!(collection instanceof Array)) {
            var _id = args.id || this.service.defaultId;
            if (this.state[_id]) {
                return this.state[_id].slice;
            }
            else {
                return collection;
            }
        }
        var serverSideMode = args.totalItems && args.totalItems !== collection.length;
        var instance = this.createInstance(collection, args);
        var id = instance.id;
        var start, end;
        var perPage = instance.itemsPerPage;
        this.service.register(instance);
        if (!serverSideMode && collection instanceof Array) {
            perPage = +perPage || LARGE_NUMBER;
            start = (instance.currentPage - 1) * perPage;
            end = start + perPage;
            var isIdentical = this.stateIsIdentical(id, collection, start, end);
            if (isIdentical) {
                return this.state[id].slice;
            }
            else {
                var slice = collection.slice(start, end);
                this.saveState(id, collection, slice, start, end);
                this.service.change.emit(id);
                return slice;
            }
        }
        // save the state for server-side collection to avoid null
        // flash as new data loads.
        this.saveState(id, collection, collection, start, end);
        return collection;
    };
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    PaginatePipe.prototype.createInstance = function (collection, args) {
        var config = args;
        this.checkConfig(config);
        return {
            id: config.id || this.service.defaultId(),
            itemsPerPage: +config.itemsPerPage || 0,
            currentPage: +config.currentPage || 1,
            totalItems: +config.totalItems || collection.length
        };
    };
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    PaginatePipe.prototype.checkConfig = function (config) {
        var required = ['itemsPerPage', 'currentPage'];
        var missing = required.filter(function (prop) { return !(prop in config); });
        if (0 < missing.length) {
            throw new Error("PaginatePipe: Argument is missing the following required properties: " + missing.join(', '));
        }
    };
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    PaginatePipe.prototype.saveState = function (id, collection, slice, start, end) {
        this.state[id] = {
            collection: collection,
            size: collection.length,
            slice: slice,
            start: start,
            end: end
        };
    };
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    PaginatePipe.prototype.stateIsIdentical = function (id, collection, start, end) {
        var state = this.state[id];
        if (!state) {
            return false;
        }
        var isMetaDataIdentical = state.size === collection.length &&
            state.start === start &&
            state.end === end;
        if (!isMetaDataIdentical) {
            return false;
        }
        return state.slice.every(function (element, index) { return element === collection[start + index]; });
    };
    PaginatePipe.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                    name: 'paginate',
                    pure: false
                },] },
    ];
    /** @nocollapse */
    PaginatePipe.ctorParameters = function () { return [
        { type: PaginationService, },
    ]; };
    return PaginatePipe;
}());

/**
 * The default template and styles for the pagination links are borrowed directly
 * from Zurb Foundation 6: http://foundation.zurb.com/sites/docs/pagination.html
 */
var DEFAULT_TEMPLATE = "\n    <pagination-template  #p=\"paginationApi\"\n                         [id]=\"id\"\n                         [maxSize]=\"maxSize\"\n                         (pageChange)=\"pageChange.emit($event)\">\n    <ul class=\"ngx-pagination\" \n        role=\"navigation\" \n        [attr.aria-label]=\"screenReaderPaginationLabel\" \n        [class.responsive]=\"responsive\"\n        *ngIf=\"!(autoHide && p.pages.length <= 1)\">\n\n        <li class=\"pagination-previous\" [class.disabled]=\"p.isFirstPage()\" *ngIf=\"directionLinks\"> \n            <a tabindex=\"0\" *ngIf=\"1 < p.getCurrent()\" (keyup.enter)=\"p.previous()\" (click)=\"p.previous()\" [attr.aria-label]=\"previousLabel + ' ' + screenReaderPageLabel\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isFirstPage()\">\n                {{ previousLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class=\"small-screen\">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]=\"p.getCurrent() === page.value\" \n            [class.ellipsis]=\"page.label === '...'\"\n            *ngFor=\"let page of p.pages\">\n            <a tabindex=\"0\" (keyup.enter)=\"p.setCurrent(page.value)\" (click)=\"p.setCurrent(page.value)\" *ngIf=\"p.getCurrent() !== page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf=\"p.getCurrent() === page.value\">\n                <span class=\"show-for-sr\">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class=\"pagination-next\" [class.disabled]=\"p.isLastPage()\" *ngIf=\"directionLinks\">\n            <a tabindex=\"0\" *ngIf=\"!p.isLastPage()\" (keyup.enter)=\"p.next()\" (click)=\"p.next()\" [attr.aria-label]=\"nextLabel + ' ' + screenReaderPageLabel\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf=\"p.isLastPage()\">\n                 {{ nextLabel }} <span class=\"show-for-sr\">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ";
var DEFAULT_STYLES = "\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\u00AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\u00BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  ";

function coerceToBoolean(input) {
    return !!input && input !== 'false';
}
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
var PaginationControlsComponent = (function () {
    function PaginationControlsComponent() {
        this.maxSize = 7;
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = "You're on page";
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._directionLinks = true;
        this._autoHide = false;
        this._responsive = false;
    }
    Object.defineProperty(PaginationControlsComponent.prototype, "directionLinks", {
        get: function () {
            return this._directionLinks;
        },
        set: function (value) {
            this._directionLinks = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "autoHide", {
        get: function () {
            return this._autoHide;
        },
        set: function (value) {
            this._autoHide = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationControlsComponent.prototype, "responsive", {
        get: function () {
            return this._responsive;
        },
        set: function (value) {
            this._responsive = coerceToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    PaginationControlsComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'pagination-controls',
                    template: DEFAULT_TEMPLATE,
                    styles: [DEFAULT_STYLES],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    PaginationControlsComponent.ctorParameters = function () { return []; };
    PaginationControlsComponent.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'directionLinks': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'autoHide': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'responsive': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'previousLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'nextLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPaginationLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderPageLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'screenReaderCurrentLabel': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationControlsComponent;
}());

/**
 * This directive is what powers all pagination controls components, including the default one.
 * It exposes an API which is hooked up to the PaginationService to keep the PaginatePipe in sync
 * with the pagination controls.
 */
var PaginationControlsDirective = (function () {
    function PaginationControlsDirective(service, changeDetectorRef) {
        var _this = this;
        this.service = service;
        this.changeDetectorRef = changeDetectorRef;
        this.maxSize = 7;
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.changeSub = this.service.change
            .subscribe(function (id) {
            if (_this.id === id) {
                _this.updatePageLinks();
                _this.changeDetectorRef.markForCheck();
                _this.changeDetectorRef.detectChanges();
            }
        });
    }
    PaginationControlsDirective.prototype.ngOnInit = function () {
        if (this.id === undefined) {
            this.id = this.service.defaultId();
        }
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnChanges = function (changes) {
        this.updatePageLinks();
    };
    PaginationControlsDirective.prototype.ngOnDestroy = function () {
        this.changeSub.unsubscribe();
    };
    /**
     * Go to the previous page
     */
    PaginationControlsDirective.prototype.previous = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() - 1);
    };
    /**
     * Go to the next page
     */
    PaginationControlsDirective.prototype.next = function () {
        this.checkValidId();
        this.setCurrent(this.getCurrent() + 1);
    };
    /**
     * Returns true if current page is first page
     */
    PaginationControlsDirective.prototype.isFirstPage = function () {
        return this.getCurrent() === 1;
    };
    /**
     * Returns true if current page is last page
     */
    PaginationControlsDirective.prototype.isLastPage = function () {
        return this.getLastPage() === this.getCurrent();
    };
    /**
     * Set the current page number.
     */
    PaginationControlsDirective.prototype.setCurrent = function (page) {
        this.pageChange.emit(page);
    };
    /**
     * Get the current page number.
     */
    PaginationControlsDirective.prototype.getCurrent = function () {
        return this.service.getCurrentPage(this.id);
    };
    /**
     * Returns the last page number
     */
    PaginationControlsDirective.prototype.getLastPage = function () {
        var inst = this.service.getInstance(this.id);
        if (inst.totalItems < 1) {
            // when there are 0 or fewer (an error case) items, there are no "pages" as such,
            // but it makes sense to consider a single, empty page as the last page.
            return 1;
        }
        return Math.ceil(inst.totalItems / inst.itemsPerPage);
    };
    PaginationControlsDirective.prototype.getTotalItems = function () {
        return this.service.getInstance(this.id).totalItems;
    };
    PaginationControlsDirective.prototype.checkValidId = function () {
        if (!this.service.getInstance(this.id).id) {
            console.warn("PaginationControlsDirective: the specified id \"" + this.id + "\" does not match any registered PaginationInstance");
        }
    };
    /**
     * Updates the page links and checks that the current page is valid. Should run whenever the
     * PaginationService.change stream emits a value matching the current ID, or when any of the
     * input values changes.
     */
    PaginationControlsDirective.prototype.updatePageLinks = function () {
        var _this = this;
        var inst = this.service.getInstance(this.id);
        var correctedCurrentPage = this.outOfBoundCorrection(inst);
        if (correctedCurrentPage !== inst.currentPage) {
            setTimeout(function () {
                _this.setCurrent(correctedCurrentPage);
                _this.pages = _this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, _this.maxSize);
            });
        }
        else {
            this.pages = this.createPageArray(inst.currentPage, inst.itemsPerPage, inst.totalItems, this.maxSize);
        }
    };
    /**
     * Checks that the instance.currentPage property is within bounds for the current page range.
     * If not, return a correct value for currentPage, or the current value if OK.
     */
    PaginationControlsDirective.prototype.outOfBoundCorrection = function (instance) {
        var totalPages = Math.ceil(instance.totalItems / instance.itemsPerPage);
        if (totalPages < instance.currentPage && 0 < totalPages) {
            return totalPages;
        }
        else if (instance.currentPage < 1) {
            return 1;
        }
        return instance.currentPage;
    };
    /**
     * Returns an array of Page objects to use in the pagination controls.
     */
    PaginationControlsDirective.prototype.createPageArray = function (currentPage, itemsPerPage, totalItems, paginationRange) {
        // paginationRange could be a string if passed from attribute, so cast to number.
        paginationRange = +paginationRange;
        var pages = [];
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        var halfWay = Math.ceil(paginationRange / 2);
        var isStart = currentPage <= halfWay;
        var isEnd = totalPages - halfWay < currentPage;
        var isMiddle = !isStart && !isEnd;
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var label = void 0;
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (isMiddle || isEnd));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (isMiddle || isStart));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                label = '...';
            }
            else {
                label = pageNumber;
            }
            pages.push({
                label: label,
                value: pageNumber
            });
            i++;
        }
        return pages;
    };
    /**
     * Given the position in the sequence of pagination links [i],
     * figure out what page number corresponds to that position.
     */
    PaginationControlsDirective.prototype.calculatePageNumber = function (i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    };
    PaginationControlsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'pagination-template,[pagination-template]',
                    exportAs: 'paginationApi'
                },] },
    ];
    /** @nocollapse */
    PaginationControlsDirective.ctorParameters = function () { return [
        { type: PaginationService, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
    ]; };
    PaginationControlsDirective.propDecorators = {
        'id': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'maxSize': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'pageChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return PaginationControlsDirective;
}());

var NgxPaginationModule = (function () {
    function NgxPaginationModule() {
    }
    NgxPaginationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [
                        PaginatePipe,
                        PaginationControlsComponent,
                        PaginationControlsDirective
                    ],
                    providers: [PaginationService],
                    exports: [PaginatePipe, PaginationControlsComponent, PaginationControlsDirective]
                },] },
    ];
    /** @nocollapse */
    NgxPaginationModule.ctorParameters = function () { return []; };
    return NgxPaginationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./src/app/views/patients/add-patient/add-patient.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/views/patients/add-patient/add-patient.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-page-header [heading]=\"'Add Patient'\" [icon]=\"'fa-user-plus'\"></app-page-header>\n  <div class=\"row\">\n    <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"card mb-3\">\n        <div class=\"card-header\">\n        </div>\n        <div class=\"card-body table-responsive\">\n          <div class=\"col-lg-10 offset-1\">\n            <form role=\"form\">             \n              <div class=\"row py-3\">\n                <h4>{{msg}}</h4>\n              </div>\n              <fieldset class=\"form-group\">\n                <div class=\"row\">\n                  <label class=\"col-md-2\">First Name:</label>\n                  <div class=\"input-group mb-3 col-md-6 \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <li class=\"fa fa-user\"></li>\n                      </span>\n                    </div>\n                    <input type=\"text\" [(ngModel)]=\"FirstName\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"First Name\"\n                      aria-label=\"FirstName\" aria-describedby=\"basic-addon1\">\n                  </div>\n                </div>\n              </fieldset>\n\n              <!-- Surname -->\n              <fieldset class=\"form-group\">\n                <div class=\"row\">\n                  <label class=\"col-md-2\">Surname:</label>\n                  <div class=\"input-group mb-3 col-md-6 \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <li class=\"fa fa-user\"></li>\n                      </span>\n                    </div>\n                    <input type=\"text\" [(ngModel)]=\"Surname\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Surname\"\n                      aria-label=\"Surname\" aria-describedby=\"basic-addon1\">\n                  </div>\n                </div>\n              </fieldset>\n\n              <!-- Email -->\n              <fieldset class=\"form-group\">\n                <div class=\"row\">\n                  <label class=\"col-md-2\">Email:</label>\n                  <div class=\"input-group mb-3 col-md-6 \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <li class=\"fa fa-envelope\"></li>\n                      </span>\n                    </div>\n                    <input type=\"email\" [(ngModel)]=\"Email\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Email\" aria-label=\"Email\"\n                      aria-describedby=\"basic-addon1\">\n                  </div>\n                </div>\n              </fieldset>\n\n              <!-- Cellphone -->\n              <fieldset class=\"form-group\">\n                <div class=\"row\">\n                  <label class=\"col-md-2\">Cellphone #:</label>\n                  <div class=\"input-group mb-3 col-md-6 \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <li class=\"fa fa-phone\"></li>\n                      </span>\n                    </div>\n                    <input type=\"text\" [(ngModel)]=\"Cellphone\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Cellphone Number\"\n                      aria-label=\"Cellphone\" aria-describedby=\"basic-addon1\">\n                  </div>\n                </div>\n              </fieldset>\n\n              <!-- AddressLine1 -->\n              <fieldset class=\"form-group\">\n                <div class=\"row\">\n                  <label class=\"col-md-2\">Address Line 1:</label>\n                  <div class=\"input-group mb-3 col-md-6 \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <li class=\"fa fa-home\"></li>\n                      </span>\n                    </div>\n                    <input type=\"text\" [(ngModel)]=\"AddressLine1\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Address Line 1\"\n                      aria-label=\"AddressLine1\" aria-describedby=\"basic-addon1\">\n                  </div>\n                </div>\n              </fieldset>\n\n              <!-- AddressLine2 -->\n              <fieldset class=\"form-group\">\n                <div class=\"row\">\n                  <label class=\"col-md-2\">Address Line 2:</label>\n                  <div class=\"input-group mb-3 col-md-6 \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <li class=\"fa fa-home\"></li>\n                      </span>\n                    </div>\n                    <input type=\"text\" [(ngModel)]=\"AddressLine2\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"AddressLine2\"\n                      aria-label=\"AddressLine2\" aria-describedby=\"basic-addon1\">\n                  </div>\n                </div>\n              </fieldset>\n\n              <!--AddressLine3-->\n              <fieldset class=\"form-group\">\n                <div class=\"row\">\n                  <label class=\"col-md-2\">Address Line 3:</label>\n                  <div class=\"input-group mb-3 col-md-6 \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <li class=\"fa fa-home\"></li>\n                      </span>\n                    </div>\n                    <input type=\"text\" [(ngModel)]=\"AddressLine3\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Address Line 3\"\n                      aria-label=\"AddressLine3\" aria-describedby=\"basic-addon1\">\n                  </div>\n                </div>\n              </fieldset>\n\n              <!--City-->\n              <fieldset class=\"form-group\">\n                <div class=\"row\">\n                  <label class=\"col-md-2\">City:</label>\n                  <div class=\"input-group mb-3 col-md-6 \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <li class=\"fa fa-home\"></li>\n                      </span>\n                    </div>\n                    <input type=\"text\" [(ngModel)]=\"City\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"City\" aria-label=\"City\"\n                      aria-describedby=\"basic-addon1\">\n                  </div>\n                </div>\n              </fieldset>\n\n              <!--PostCode-->\n              <fieldset class=\"form-group\">\n                <div class=\"row\">\n                  <label class=\"col-md-2\">PostCode:</label>\n                  <div class=\"input-group mb-3 col-md-6 \">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\n                        <li class=\"fa fa-home\"></li>\n                      </span>\n                    </div>\n                    <input type=\"text\" [(ngModel)]=\"PostCode\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Postal Code\"\n                      aria-label=\"PostCode\" aria-describedby=\"basic-addon1\">\n                  </div>\n                </div>\n              </fieldset>\n              <div class=\"justify-content-center\">\n                <a  class=\"btn rounded-btn\" (click)=\"add()\">Add Patient</a> &nbsp;\n                <a  class=\"btn rounded-btn\" [routerLink]=\"['/patients']\">Abort</a>\n              </div>\n            </form>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/patients/add-patient/add-patient.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/views/patients/add-patient/add-patient.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".justify-content-center {\n  display: flex !important;\n  justify-content: center !important;\n  padding-top: 2%; }\n\n.rounded-btn {\n  border-radius: 50px;\n  color: #0c0c0c;\n  border: 2px solid rgba(14, 13, 13, 0.8);\n  font-size: 18px;\n  line-height: 40px;\n  padding: 0 25px; }\n\n.rounded-btn:hover,\n.rounded-btn:focus,\n.rounded-btn:active,\n.rounded-btn:visited {\n  color: #0c0c0c;\n  border: 2px solid #04034d;\n  outline: none; }\n"

/***/ }),

/***/ "./src/app/views/patients/add-patient/add-patient.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/patients/add-patient/add-patient.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPatientComponent", function() { return AddPatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddPatientComponent = /** @class */ (function () {
    function AddPatientComponent(router, patientService) {
        this.router = router;
        this.patientService = patientService;
    }
    AddPatientComponent.prototype.ngOnInit = function () {
    };
    AddPatientComponent.prototype.add = function () {
        this.msg = undefined;
        if (this.Email == undefined || this.Email === '') {
            this.msg = "Please fill in Required Fields";
            return false;
        }
        if (this.FirstName === undefined || this.FirstName === '') {
            this.msg = "Please fill in Required Fields";
            return false;
        }
        if (this.Surname === undefined || this.Surname === '') {
            this.msg = "Please fill in Required Fields";
            return false;
        }
        if (this.Cellphone === undefined || this.Cellphone === '') {
            this.msg = "Please fill in Required Fields";
            return false;
        }
        if (this.AddressLine1 === undefined || this.AddressLine1 === '') {
            this.msg = "Please fill in Required Fields";
            return false;
        }
        if (this.AddressLine2 === undefined || this.AddressLine2 === '') {
            this.msg = "Please fill in Required Fields";
            return false;
        }
        if (this.AddressLine3 === undefined || this.AddressLine3 === '') {
            this.AddressLine3 = " ";
        }
        if (this.City === undefined || this.City === '') {
            this.msg = "Please fill in Required Fields";
            return false;
        }
        if (this.PostCode === undefined || this.PostCode === '') {
            this.msg = "Please fill in Required Fields";
            return false;
        }
        var data = {
            FirstName: this.FirstName,
            Surname: this.Surname,
            Email: this.Email,
            Cellphone: this.Cellphone,
            AddressLine1: this.AddressLine1,
            AddressLine2: this.AddressLine2,
            AddressLine3: this.AddressLine3,
            City: this.City,
            PostCode: this.PostCode,
        };
        this.patientService.addPatient(data)
            .subscribe(function (response) {
            if (response == 1) {
                alert("patient added successfully");
            }
        });
    };
    AddPatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-patient',
            template: __webpack_require__(/*! ./add-patient.component.html */ "./src/app/views/patients/add-patient/add-patient.component.html"),
            styles: [__webpack_require__(/*! ./add-patient.component.scss */ "./src/app/views/patients/add-patient/add-patient.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["PatientService"]])
    ], AddPatientComponent);
    return AddPatientComponent;
}());



/***/ }),

/***/ "./src/app/views/patients/add-patient/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/patients/add-patient/index.ts ***!
  \*****************************************************/
/*! exports provided: AddPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_patient_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-patient.component */ "./src/app/views/patients/add-patient/add-patient.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddPatientComponent", function() { return _add_patient_component__WEBPACK_IMPORTED_MODULE_0__["AddPatientComponent"]; });




/***/ }),

/***/ "./src/app/views/patients/list-patients/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/patients/list-patients/index.ts ***!
  \*******************************************************/
/*! exports provided: ListPatientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_patients_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-patients.component */ "./src/app/views/patients/list-patients/list-patients.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListPatientsComponent", function() { return _list_patients_component__WEBPACK_IMPORTED_MODULE_0__["ListPatientsComponent"]; });




/***/ }),

/***/ "./src/app/views/patients/list-patients/list-patients.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/patients/list-patients/list-patients.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-page-header [heading]=\"'Patients'\" [icon]=\"'fa-users'\"></app-page-header>\n  <div class=\"row\">\n    <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"card mb-3\">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <a class=\"btn rounded-btn\" [routerLink]=\"['/patients/add']\">Add Patient </a>\n            </div>\n            <div class=\"input-group mb-3 col-md-6\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"basic-addon1\">\n                  <li class=\"fa fa-search\"></li>\n                </span>\n              </div>\n              <input type=\"text\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Search...\"\n                aria-label=\"Search\" aria-describedby=\"basic-addon1\">\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body table-responsive\">\n          <table class=\"table table-bordered\" *ngIf=\"patients$ | async as patients\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Surname</th>\n                <th>Email</th>\n                <th>Cellphone</th>\n                <th>City</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of patients | filter: searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\n                <th scope=\"row\">{{item.PatientId}}</th>\n                <td>{{item.FirstName}}</td>\n                <td>{{item.Surname}}</td>\n                <td>{{item.Email}}</td>\n                <td>{{item.Cellphone}}</td>\n                <td>{{item.City}}</td>\n              </tr>\n            </tbody>\n          </table>\n          <div class=\"justify-content-center\">\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/patients/list-patients/list-patients.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/views/patients/list-patients/list-patients.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".justify-content-center {\n  display: flex !important;\n  justify-content: center !important;\n  padding-top: 2%; }\n\n.rounded-btn {\n  border-radius: 50px;\n  color: #0c0c0c;\n  border: 2px solid rgba(14, 13, 13, 0.8);\n  font-size: 18px;\n  line-height: 40px;\n  padding: 0 25px; }\n\n.rounded-btn:hover,\n.rounded-btn:focus,\n.rounded-btn:active,\n.rounded-btn:visited {\n  color: #0c0c0c;\n  border: 2px solid #04034d;\n  outline: none; }\n"

/***/ }),

/***/ "./src/app/views/patients/list-patients/list-patients.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/patients/list-patients/list-patients.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListPatientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPatientsComponent", function() { return ListPatientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPatientsComponent = /** @class */ (function () {
    function ListPatientsComponent(selectService) {
        this.selectService = selectService;
    }
    ListPatientsComponent.prototype.ngOnInit = function () {
        this.patients$ = this.selectService.select("patient WHERE  StatusId = 1 ORDER BY CreateDate DESC ");
    };
    ListPatientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-patients',
            template: __webpack_require__(/*! ./list-patients.component.html */ "./src/app/views/patients/list-patients/list-patients.component.html"),
            styles: [__webpack_require__(/*! ./list-patients.component.scss */ "./src/app/views/patients/list-patients/list-patients.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_1__["SelectService"]])
    ], ListPatientsComponent);
    return ListPatientsComponent;
}());



/***/ }),

/***/ "./src/app/views/patients/patients.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/patients/patients.module.ts ***!
  \***************************************************/
/*! exports provided: PatientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsModule", function() { return PatientsModule; });
/* harmony import */ var _patients_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patients.routing */ "./src/app/views/patients/patients.routing.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _list_patients__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-patients */ "./src/app/views/patients/list-patients/index.ts");
/* harmony import */ var _add_patient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-patient */ "./src/app/views/patients/add-patient/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PatientsModule = /** @class */ (function () {
    function PatientsModule() {
    }
    PatientsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _patients_routing__WEBPACK_IMPORTED_MODULE_0__["PatientsRoutes"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"]],
            declarations: [_list_patients__WEBPACK_IMPORTED_MODULE_7__["ListPatientsComponent"], _add_patient__WEBPACK_IMPORTED_MODULE_8__["AddPatientComponent"]],
            providers: [_services__WEBPACK_IMPORTED_MODULE_9__["PatientService"]]
        })
    ], PatientsModule);
    return PatientsModule;
}());



/***/ }),

/***/ "./src/app/views/patients/patients.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/views/patients/patients.routing.ts ***!
  \****************************************************/
/*! exports provided: PatientsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsRoutes", function() { return PatientsRoutes; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_patients__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-patients */ "./src/app/views/patients/list-patients/index.ts");
/* harmony import */ var _add_patient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-patient */ "./src/app/views/patients/add-patient/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', component: _list_patients__WEBPACK_IMPORTED_MODULE_2__["ListPatientsComponent"]
    },
    {
        path: 'add', component: _add_patient__WEBPACK_IMPORTED_MODULE_3__["AddPatientComponent"]
    }
];
var PatientsRoutes = /** @class */ (function () {
    function PatientsRoutes() {
    }
    PatientsRoutes = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PatientsRoutes);
    return PatientsRoutes;
}());



/***/ })

}]);
//# sourceMappingURL=patients-patients-module.js.map