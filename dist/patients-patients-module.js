(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patients-patients-module"],{

/***/ "./src/app/views/patients/list-patients/list-patients.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/patients/list-patients/list-patients.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-page-header [heading]=\"'Patients'\" [icon]=\"'fa-users'\"></app-page-header>\n  <div class=\"row\">\n    <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\n      <div class=\"card mb-3\">\n        <div class=\"card-header\">Active Patients</div>\n        <div class=\"card-body table-responsive\">\n          <table class=\"table table-bordered\" *ngIf=\"patients$ | async as patients\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>First Name</th>\n                <th>Surname</th>\n                <th>Email</th>\n                <th>Cellphone</th>\n                <th>City</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of patients\">\n                <th scope=\"row\">{{item.PatientId}}</th>\n                <td>{{item.FirstName}}</td>\n                <td>{{item.Surname}}</td>\n                <td>{{item.Email}}</td>\n                <td>{{item.Cellphone}}</td>\n                <td>{{item.City}}</td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/patients/list-patients/list-patients.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/views/patients/list-patients/list-patients.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _list_patients_list_patients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-patients/list-patients.component */ "./src/app/views/patients/list-patients/list-patients.component.ts");
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
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _patients_routing__WEBPACK_IMPORTED_MODULE_0__["PatientsRoutes"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"]],
            declarations: [_list_patients_list_patients_component__WEBPACK_IMPORTED_MODULE_4__["ListPatientsComponent"]]
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
/* harmony import */ var _list_patients_list_patients_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-patients/list-patients.component */ "./src/app/views/patients/list-patients/list-patients.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _list_patients_list_patients_component__WEBPACK_IMPORTED_MODULE_2__["ListPatientsComponent"]
    },
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