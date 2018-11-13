(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patients-patients-module"],{

/***/ "./node_modules/primeng/api.js":
/*!*************************************!*\
  !*** ./node_modules/primeng/api.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/common/api */ "./node_modules/primeng/components/common/api.js"));

/***/ }),

/***/ "./node_modules/primeng/components/common/api.js":
/*!*******************************************************!*\
  !*** ./node_modules/primeng/components/common/api.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
exports.DomHandler = domhandler_1.DomHandler;
var treedragdropservice_1 = __webpack_require__(/*! ./treedragdropservice */ "./node_modules/primeng/components/common/treedragdropservice.js");
exports.TreeDragDropService = treedragdropservice_1.TreeDragDropService;
var confirmationservice_1 = __webpack_require__(/*! ./confirmationservice */ "./node_modules/primeng/components/common/confirmationservice.js");
exports.ConfirmationService = confirmationservice_1.ConfirmationService;
var messageservice_1 = __webpack_require__(/*! ./messageservice */ "./node_modules/primeng/components/common/messageservice.js");
exports.MessageService = messageservice_1.MessageService;
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "./node_modules/primeng/components/common/treedragdropservice.js":
/*!***********************************************************************!*\
  !*** ./node_modules/primeng/components/common/treedragdropservice.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var TreeDragDropService = /** @class */ (function () {
    function TreeDragDropService() {
        this.dragStartSource = new rxjs_1.Subject();
        this.dragStopSource = new rxjs_1.Subject();
        this.dragStart$ = this.dragStartSource.asObservable();
        this.dragStop$ = this.dragStopSource.asObservable();
    }
    TreeDragDropService.prototype.startDrag = function (event) {
        this.dragStartSource.next(event);
    };
    TreeDragDropService.prototype.stopDrag = function (event) {
        this.dragStopSource.next(event);
    };
    TreeDragDropService = __decorate([
        core_1.Injectable()
    ], TreeDragDropService);
    return TreeDragDropService;
}());
exports.TreeDragDropService = TreeDragDropService;
//# sourceMappingURL=treedragdropservice.js.map

/***/ }),

/***/ "./src/app/views/patients/add-patient/add-patient.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/views/patients/add-patient/add-patient.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Add Patient'\" [icon]=\"'fa-user-plus'\"></app-page-header>\r\n  <p-growl [(value)]=\"msgs\"></p-growl>\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n        </div>\r\n        <div class=\"card-body table-responsive\">\r\n          <div class=\"col-lg-10 offset-1\">\r\n            <form role=\"form\">           \r\n              \r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">First Name:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-user\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"FirstName\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"First Name\"\r\n                      aria-label=\"FirstName\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!-- Surname -->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">Surname:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-user\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"Surname\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Surname\"\r\n                      aria-label=\"Surname\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!-- Email -->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">Email:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-envelope\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"email\" [(ngModel)]=\"Email\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Email\" aria-label=\"Email\"\r\n                      aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!-- Cellphone -->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">Cellphone #:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-phone\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"Cellphone\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Cellphone Number\"\r\n                      aria-label=\"Cellphone\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!-- AddressLine1 -->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">Address Line 1:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-home\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"AddressLine1\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Address Line 1\"\r\n                      aria-label=\"AddressLine1\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!-- AddressLine2 -->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">Address Line 2:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-home\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"AddressLine2\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"AddressLine2\"\r\n                      aria-label=\"AddressLine2\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!--AddressLine3-->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">Address Line 3:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-home\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"AddressLine3\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Address Line 3\"\r\n                      aria-label=\"AddressLine3\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!--City-->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">City:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-home\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"City\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"City\" aria-label=\"City\"\r\n                      aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!--PostCode-->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">PostCode:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-home\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"PostCode\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Postal Code\"\r\n                      aria-label=\"PostCode\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n              <div class=\"justify-content-center\">\r\n                <a  class=\"btn rounded-btn\" (click)=\"add()\">Add Patient</a> &nbsp;\r\n                <a  class=\"btn rounded-btn\" [routerLink]=\"['/patients']\">Abort</a>\r\n              </div>\r\n            </form>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>"

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
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
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
        this.msgs = [];
    }
    AddPatientComponent.prototype.ngOnInit = function () {
    };
    AddPatientComponent.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Patient Added Successfully' });
    };
    AddPatientComponent.prototype.showError = function (msg) {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Validation Message', detail: "" + msg });
    };
    AddPatientComponent.prototype.add = function () {
        var _this = this;
        this.msg = undefined;
        if (this.Email == undefined || this.Email === '') {
            this.showError("Please fill in Required Fields");
            return false;
        }
        if (this.FirstName === undefined || this.FirstName === '') {
            this.showError("Please fill in Required Fields");
            return false;
        }
        if (this.Surname === undefined || this.Surname === '') {
            this.showError("Please fill in Required Fields");
            return false;
        }
        if (this.Cellphone === undefined || this.Cellphone === '') {
            this.showError("Please fill in Required Fields");
            return false;
        }
        if (this.AddressLine1 === undefined || this.AddressLine1 === '') {
            this.showError("Please fill in Required Fields");
            return false;
        }
        if (this.AddressLine2 === undefined || this.AddressLine2 === '') {
            this.showError("Please fill in Required Fields");
            return false;
        }
        if (this.AddressLine3 === undefined || this.AddressLine3 === '') {
            this.AddressLine3 = " ";
        }
        if (this.City === undefined || this.City === '') {
            this.showError("Please fill in Required Fields");
            return false;
        }
        if (this.PostCode === undefined || this.PostCode === '') {
            this.showError("Please fill in Required Fields");
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
                _this.showSuccess();
                setTimeout(function () {
                    _this.router.navigate(['/patients']);
                }, 2000);
            }
        });
    };
    AddPatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-patient',
            template: __webpack_require__(/*! ./add-patient.component.html */ "./src/app/views/patients/add-patient/add-patient.component.html"),
            styles: [__webpack_require__(/*! ./add-patient.component.scss */ "./src/app/views/patients/add-patient/add-patient.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["routerTransition"])()]
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

/***/ "./src/app/views/patients/edit-patient/edit-patient.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/patients/edit-patient/edit-patient.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Edit Patient'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n  <p-growl [(value)]=\"msgs\"></p-growl>\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n        </div>\r\n        <div class=\"card-body table-responsive\">\r\n          <div class=\"col-lg-10 offset-1\">\r\n            <form role=\"form\" *ngIf=\"patient$ | async as patient\" >           \r\n              \r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">First Name:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-user\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"patient[0].FirstName\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"First Name\"\r\n                      aria-label=\"FirstName\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!-- Surname -->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">Surname:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-user\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"patient[0].Surname\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Surname\"\r\n                      aria-label=\"Surname\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!-- Email -->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">Email:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-envelope\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"email\" [(ngModel)]=\"patient[0].Email\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Email\" aria-label=\"Email\"\r\n                      aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!-- Cellphone -->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">Cellphone #:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-phone\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"patient[0].Cellphone\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Cellphone Number\"\r\n                      aria-label=\"Cellphone\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!-- AddressLine1 -->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">Address Line 1:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-home\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"patient[0].AddressLine1\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Address Line 1\"\r\n                      aria-label=\"AddressLine1\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!-- AddressLine2 -->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">Address Line 2:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-home\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"patient[0].AddressLine2\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"AddressLine2\"\r\n                      aria-label=\"AddressLine2\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!--AddressLine3-->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">Address Line 3:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-home\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"patient[0].AddressLine3\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Address Line 3\"\r\n                      aria-label=\"AddressLine3\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!--City-->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">City:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-home\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"patient[0].City\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"City\" aria-label=\"City\"\r\n                      aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n\r\n              <!--PostCode-->\r\n              <fieldset class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <label class=\"col-md-2\">PostCode:</label>\r\n                  <div class=\"input-group mb-3 col-md-6 \">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                        <li class=\"fa fa-home\"></li>\r\n                      </span>\r\n                    </div>\r\n                    <input type=\"text\" [(ngModel)]=\"patient[0].PostCode\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Postal Code\"\r\n                      aria-label=\"PostCode\" aria-describedby=\"basic-addon1\">\r\n                  </div>\r\n                </div>\r\n              </fieldset>\r\n              <div class=\"justify-content-center\">\r\n                <a  class=\"btn rounded-btn\" (click)=\"save(patient[0])\">Save</a> &nbsp;\r\n                <a  class=\"btn rounded-btn\" [routerLink]=\"['/patients']\">Abort</a>\r\n              </div>\r\n            </form>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/patients/edit-patient/edit-patient.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/views/patients/edit-patient/edit-patient.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".justify-content-center {\n  display: flex !important;\n  justify-content: center !important;\n  padding-top: 2%; }\n\n.rounded-btn {\n  border-radius: 50px;\n  color: #0c0c0c;\n  border: 2px solid rgba(14, 13, 13, 0.8);\n  font-size: 18px;\n  line-height: 40px;\n  padding: 0 25px; }\n\n.rounded-btn:hover,\n.rounded-btn:focus,\n.rounded-btn:active,\n.rounded-btn:visited {\n  color: #0c0c0c;\n  border: 2px solid #04034d;\n  outline: none; }\n"

/***/ }),

/***/ "./src/app/views/patients/edit-patient/edit-patient.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/patients/edit-patient/edit-patient.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPatientComponent", function() { return EditPatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_patient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/patient */ "./src/app/services/patient/index.ts");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditPatientComponent = /** @class */ (function () {
    function EditPatientComponent(selectService, route, router, patientService) {
        this.selectService = selectService;
        this.route = route;
        this.router = router;
        this.patientService = patientService;
        this.msgs = [];
    }
    EditPatientComponent.prototype.ngOnInit = function () {
        this.patientId = parseInt(this.route.snapshot.paramMap.get("id"));
        this.patient$ = this.selectService.select("patient WHERE  PatientId = " + this.patientId);
    };
    EditPatientComponent.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Patient Updated Successfully' });
    };
    EditPatientComponent.prototype.save = function (patient) {
        var _this = this;
        var data = {
            FirstName: patient.FirstName,
            Surname: patient.Surname,
            Email: patient.Email,
            Cellphone: patient.Cellphone,
            AddressLine1: patient.AddressLine1,
            AddressLine2: patient.AddressLine2,
            AddressLine3: patient.AddressLine3,
            City: patient.City,
            PostCode: patient.PostCode,
            GlobalKey: patient.GlobalKey,
            ModifyUserId: 1,
            StatusId: patient.StatusId,
        };
        this.patientService.updatePatient(data)
            .subscribe(function (response) {
            if (response == 1) {
                _this.showSuccess();
                setTimeout(function () {
                    _this.router.navigate(['/patients/view', patient.PatientId]);
                }, 2000);
            }
        });
    };
    EditPatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-patient',
            template: __webpack_require__(/*! ./edit-patient.component.html */ "./src/app/views/patients/edit-patient/edit-patient.component.html"),
            styles: [__webpack_require__(/*! ./edit-patient.component.scss */ "./src/app/views/patients/edit-patient/edit-patient.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_4__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_1__["SelectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_patient__WEBPACK_IMPORTED_MODULE_3__["PatientService"]])
    ], EditPatientComponent);
    return EditPatientComponent;
}());



/***/ }),

/***/ "./src/app/views/patients/edit-patient/index.ts":
/*!******************************************************!*\
  !*** ./src/app/views/patients/edit-patient/index.ts ***!
  \******************************************************/
/*! exports provided: EditPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_patient_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-patient.component */ "./src/app/views/patients/edit-patient/edit-patient.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditPatientComponent", function() { return _edit_patient_component__WEBPACK_IMPORTED_MODULE_0__["EditPatientComponent"]; });




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

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Patients'\" [icon]=\"'fa-users'\"></app-page-header>\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <a class=\"btn rounded-btn\" [routerLink]=\"['/patients/add']\">Add Patient </a>\r\n            </div>\r\n            <div class=\"input-group mb-3 col-md-6\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                  <li class=\"fa fa-search\"></li>\r\n                </span>\r\n              </div>\r\n              <input type=\"text\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Search...\"\r\n                aria-label=\"Search\" aria-describedby=\"basic-addon1\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body table-responsive\">\r\n          <table class=\"table table-bordered\" *ngIf=\"patients$ | async as patients\">\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th>First Name</th>\r\n                <th>Surname</th>\r\n                <th>Email</th>\r\n                <th>Cellphone</th>\r\n                <th>City</th>\r\n                <th>Actions</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of patients | filter: searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n                <th scope=\"row\">{{item.PatientId}}</th>\r\n                <td>{{item.FirstName}}</td>\r\n                <td>{{item.Surname}}</td>\r\n                <td>{{item.Email}}</td>\r\n                <td>{{item.Cellphone}}</td>\r\n                <td>{{item.City}}</td>\r\n                <td><a class=\"btn rounded-btn\" [routerLink]=\"['/patients/view']\" (click)=\"view(item)\" >View</a></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"justify-content-center\">\r\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
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
    function ListPatientsComponent(selectService, route) {
        this.selectService = selectService;
        this.route = route;
    }
    ListPatientsComponent.prototype.ngOnInit = function () {
        this.patients$ = this.selectService.select("patient WHERE  StatusId = 1 ORDER BY CreateDate DESC ");
    };
    ListPatientsComponent.prototype.view = function (patient) {
        this.route.navigate(['/patients/view', patient.PatientId]);
    };
    ListPatientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-patients',
            template: __webpack_require__(/*! ./list-patients.component.html */ "./src/app/views/patients/list-patients/list-patients.component.html"),
            styles: [__webpack_require__(/*! ./list-patients.component.scss */ "./src/app/views/patients/list-patients/list-patients.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_3__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_1__["SelectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _view_patient__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-patient */ "./src/app/views/patients/view-patient/index.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _edit_patient__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-patient */ "./src/app/views/patients/edit-patient/index.ts");
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
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"]].concat(_shared__WEBPACK_IMPORTED_MODULE_3__["PrimeNg"], [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _patients_routing__WEBPACK_IMPORTED_MODULE_0__["PatientsRoutes"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"]]),
            declarations: [_list_patients__WEBPACK_IMPORTED_MODULE_7__["ListPatientsComponent"], _add_patient__WEBPACK_IMPORTED_MODULE_8__["AddPatientComponent"], _view_patient__WEBPACK_IMPORTED_MODULE_10__["ViewPatientComponent"], _edit_patient__WEBPACK_IMPORTED_MODULE_12__["EditPatientComponent"]],
            exports: _shared__WEBPACK_IMPORTED_MODULE_3__["PrimeNg"].slice(),
            providers: [_services__WEBPACK_IMPORTED_MODULE_9__["PatientService"], primeng_api__WEBPACK_IMPORTED_MODULE_11__["ConfirmationService"]]
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
/* harmony import */ var _view_patient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-patient */ "./src/app/views/patients/view-patient/index.ts");
/* harmony import */ var _edit_patient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-patient */ "./src/app/views/patients/edit-patient/index.ts");
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
    },
    {
        path: 'view/:id', component: _view_patient__WEBPACK_IMPORTED_MODULE_4__["ViewPatientComponent"]
    },
    {
        path: 'edit/:id', component: _edit_patient__WEBPACK_IMPORTED_MODULE_5__["EditPatientComponent"]
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



/***/ }),

/***/ "./src/app/views/patients/view-patient/index.ts":
/*!******************************************************!*\
  !*** ./src/app/views/patients/view-patient/index.ts ***!
  \******************************************************/
/*! exports provided: ViewPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_patient_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-patient.component */ "./src/app/views/patients/view-patient/view-patient.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewPatientComponent", function() { return _view_patient_component__WEBPACK_IMPORTED_MODULE_0__["ViewPatientComponent"]; });




/***/ }),

/***/ "./src/app/views/patients/view-patient/view-patient.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/patients/view-patient/view-patient.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'View Patient'\" [icon]=\"'fa-user'\"></app-page-header>\r\n  <p-growl [(value)]=\"msgs\"></p-growl>\r\n  <p-confirmDialog header=\"Confirmation\" icon=\"pi pi-exclamation-triangle\" width=\"425\"></p-confirmDialog>\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n        </div>\r\n        <div class=\"card-body table-responsive\">\r\n          <div class=\"col-lg-10 offset-1\">\r\n            <table class=\"table\">\r\n              <thead class=\"mdb-color darken-3\">\r\n                <tr>\r\n                  <th>Details</th>\r\n                  <th>Value</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody *ngIf=\"patient$ | async as patient\">\r\n                <tr>\r\n                  <td>Full Name:</td>\r\n                  <td>{{patient[0].FirstName}} {{patient[0].Surname}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Contact Number:</td>\r\n                  <td>{{patient[0].Cellphone}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Email:</td>\r\n                  <td>{{patient[0].Email}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td></td>\r\n                  <td>\r\n                    <a class=\"btn rounded-btn\"  (click)=\"appointment()\" ><li class=\"fa fa-calendar\"></li> Create Appointment</a>    &nbsp;\r\n                    <a class=\"btn rounded-btn\"  (click)=\"edit(patient[0])\" ><li class=\"fa fa-edit\"></li> Edit</a>    &nbsp;\r\n                    <a class=\"btn rounded-btn\"  (click)=\"archivePatient(patient[0])\" ><li class=\"fa fa-trash\"></li> Archive</a>              \r\n\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n      <div class=\"card mb-3\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <h3>Patient's Appointments</h3>\r\n            </div>\r\n            <div class=\"input-group mb-3 col-md-6\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                  <li class=\"fa fa-search\"></li>\r\n                </span>\r\n              </div>\r\n              <input type=\"text\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"Search...\"\r\n                aria-label=\"Search\" aria-describedby=\"basic-addon1\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body table-responsive\">\r\n          <table class=\"table table-bordered\" *ngIf=\"appointments$ | async as appointments\">\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>                \r\n                <th>Appointment Date</th>\r\n                <th>Description</th>\r\n                <th>Actions</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of appointments | filter: searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n                <th scope=\"row\">{{item.AppointmentId}}</th>                \r\n                <td>Date: {{item.StartDate}}  From: {{item.FromTime}} To: {{item.ToTime}}</td>\r\n                <td>{{item.Description}}</td>\r\n                <td><a class=\"btn rounded-btn\" [routerLink]=\"['/appointments/edit']\" (click)=\"editAppointment(item)\" ><li class=\"fa fa-edit\"></li> Edit</a> &nbsp;\r\n                  <a class=\"btn rounded-btn\"  (click)=\"archiveAppointment(item)\" ><li class=\"fa fa-trash\"></li> Archive</a>              \r\n                </td>\r\n                \r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"justify-content-center\">\r\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n          </div>           \r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/patients/view-patient/view-patient.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/views/patients/view-patient/view-patient.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".justify-content-center {\n  display: flex !important;\n  justify-content: center !important;\n  padding-top: 2%; }\n\n.rounded-btn {\n  border-radius: 50px;\n  color: #0c0c0c;\n  border: 2px solid rgba(14, 13, 13, 0.8);\n  font-size: 18px;\n  line-height: 40px;\n  padding: 0 25px; }\n\n.rounded-btn:hover,\n.rounded-btn:focus,\n.rounded-btn:active,\n.rounded-btn:visited {\n  color: #0c0c0c;\n  border: 2px solid #04034d;\n  outline: none; }\n"

/***/ }),

/***/ "./src/app/views/patients/view-patient/view-patient.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/patients/view-patient/view-patient.component.ts ***!
  \***********************************************************************/
/*! exports provided: ViewPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPatientComponent", function() { return ViewPatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_patient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/patient */ "./src/app/services/patient/index.ts");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewPatientComponent = /** @class */ (function () {
    function ViewPatientComponent(selectService, route, router, confirmationService, patientService, appointmentService) {
        this.selectService = selectService;
        this.route = route;
        this.router = router;
        this.confirmationService = confirmationService;
        this.patientService = patientService;
        this.appointmentService = appointmentService;
        this.msgs = [];
    }
    ViewPatientComponent.prototype.ngOnInit = function () {
        this.patientId = parseInt(this.route.snapshot.paramMap.get("id"));
        this.patient$ = this.selectService.select("patient WHERE  PatientId = " + this.patientId);
        this.appointments$ = this.selectService.select("appointment WHERE  PatientId = " + this.patientId + " AND StatusId = 1 ORDER BY ModifyDate DESC");
    };
    ViewPatientComponent.prototype.showSuccess = function (msg) {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Success Message', detail: msg });
    };
    ViewPatientComponent.prototype.archivePatient = function (patient) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: function () {
                _this.patientArchive(patient);
            }
        });
    };
    ViewPatientComponent.prototype.patientArchive = function (patient) {
        var _this = this;
        var data = {
            FirstName: patient.FirstName,
            Surname: patient.Surname,
            Email: patient.Email,
            Cellphone: patient.Cellphone,
            AddressLine1: patient.AddressLine1,
            AddressLine2: patient.AddressLine2,
            AddressLine3: patient.AddressLine3,
            City: patient.City,
            PostCode: patient.PostCode,
            GlobalKey: patient.GlobalKey,
            ModifyUserId: 1,
            StatusId: 2,
        };
        this.patientService.updatePatient(data)
            .subscribe(function (response) {
            if (response == 1) {
                _this.showSuccess("Customer Archived Successfully!");
                setTimeout(function () {
                    _this.router.navigate(['/patients']);
                }, 2000);
            }
        });
    };
    ViewPatientComponent.prototype.edit = function (patient) {
        this.router.navigate(['/patients/edit', patient.PatientId]);
    };
    ViewPatientComponent.prototype.appointment = function () {
        this.router.navigate(['/appointments/add', this.patientId]);
    };
    ViewPatientComponent.prototype.editAppointment = function (appointment) {
        this.router.navigate(['/appointments/edit', appointment.AppointmentId]);
    };
    ViewPatientComponent.prototype.archiveAppointment = function (appointment) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: function () {
                _this.appointmentArchive(appointment);
            }
        });
    };
    ViewPatientComponent.prototype.appointmentArchive = function (appointment) {
        var _this = this;
        var _objStartDate = JSON.parse(JSON.stringify(appointment.StartDate));
        var date = _objStartDate.year + '-' + _objStartDate.month + '-' + _objStartDate.day;
        var _objfromTime = JSON.parse(JSON.stringify(appointment.FromTime));
        var _objtoTime = JSON.parse(JSON.stringify(appointment.ToTime));
        var data = {
            Description: appointment.Description,
            AppointmentId: appointment.AppointmentId,
            PatientId: appointment.PatientId,
            StartDate: date,
            EndDate: date,
            FromTime: _objfromTime.hour + ':' + _objfromTime.minute,
            ToTime: _objtoTime.hour + ':' + _objtoTime.minute,
            CreateUserId: appointment.CreateUserId,
            CreateDate: appointment.CreateDate,
            ModifyUserId: 1,
            StatusId: 2,
        };
        debugger;
        this.appointmentService.editAppointment(data)
            .subscribe(function (response) {
            if (response == 1) {
                _this.showSuccess("Appointment Archived Successfully!");
                setTimeout(function () {
                    _this.router.navigate(['/patients']);
                }, 2000);
            }
        });
    };
    ViewPatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-patient',
            template: __webpack_require__(/*! ./view-patient.component.html */ "./src/app/views/patients/view-patient/view-patient.component.html"),
            styles: [__webpack_require__(/*! ./view-patient.component.scss */ "./src/app/views/patients/view-patient/view-patient.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_5__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_1__["SelectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            primeng_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            _services_patient__WEBPACK_IMPORTED_MODULE_4__["PatientService"],
            _services__WEBPACK_IMPORTED_MODULE_6__["AppointmentService"]])
    ], ViewPatientComponent);
    return ViewPatientComponent;
}());



/***/ })

}]);
//# sourceMappingURL=patients-patients-module.js.map