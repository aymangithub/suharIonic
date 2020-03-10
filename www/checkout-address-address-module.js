(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-address-address-module"],{

/***/ "./src/app/checkout/address/address.module.ts":
/*!****************************************************!*\
  !*** ./src/app/checkout/address/address.module.ts ***!
  \****************************************************/
/*! exports provided: CheckoutAddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutAddressPageModule", function() { return CheckoutAddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address.page */ "./src/app/checkout/address/address.page.ts");
/* harmony import */ var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipe.module */ "./src/app/pipes/pipe.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _address_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutAddressPage"]
    }
];
var CheckoutAddressPageModule = /** @class */ (function () {
    function CheckoutAddressPageModule() {
    }
    CheckoutAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__["KeysPipeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_address_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutAddressPage"]]
        })
    ], CheckoutAddressPageModule);
    return CheckoutAddressPageModule;
}());



/***/ }),

/***/ "./src/app/checkout/address/address.page.html":
/*!****************************************************!*\
  !*** ./src/app/checkout/address/address.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n    <ion-toolbar color=\"{{settings.theme.header}}\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/tabs/cart\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>{{\"Address\" | translate}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <div class=\"spinner\" *ngIf=\"loader\">\n        <ion-spinner> </ion-spinner>\n    </div>\n\n    <div *ngIf=\"!loader\">\n        <ion-list no-margin>\n\n            <ion-list-header>\n                <ion-label>{{\"Billing Address\" | translate}}</ion-label>\n            </ion-list-header>\n\n            <ion-item>\n                <ion-label position=\"stacked\">{{\"First Name\" | translate}}</ion-label>\n                <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_first_name\" name=\"firstname\">\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">{{\"Last Name\" | translate}}</ion-label>\n                <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_last_name\" name=\"lastname\">\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">{{\"Phone\" | translate}}</ion-label>\n                <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.billing_phone\" name=\"telephone\">\n                </ion-input>\n            </ion-item>\n            <ion-item style=\"display: none;\">\n                <ion-label position=\"stacked\">{{\"Company\" | translate}}</ion-label>\n                <ion-input required type=\"text\" value='none' [(ngModel)]=\"checkoutData.form.billing_company\"\n                    name=\"company\"> </ion-input>\n            </ion-item>\n            <ion-item >\n                <ion-label position=\"stacked\">{{\"Street Address\" | translate}}</ion-label>\n                <ion-input required type=\"text\"  [(ngModel)]=\"checkoutData.form.billing_address_1\"\n                    name=\"street1\"> </ion-input>\n            </ion-item>\n            <ion-item style=\"display: none;\">\n                <ion-label position=\"stacked\">{{\"Street Address\" | translate}} 2</ion-label>\n                <ion-input required type=\"text\" value='none' [(ngModel)]=\"checkoutData.form.billing_address_2\"\n                    name=\"street2\">\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">{{\"Email\" | translate}}</ion-label>\n                <ion-input required type=\"email\" [(ngModel)]=\"checkoutData.form.billing_email\" name=\"email\">\n                </ion-input>\n            </ion-item>\n            <ion-item style=\"display: none;\">\n                <ion-label position=\"stacked\">{{\"City\" | translate}}</ion-label>\n                <ion-input required type=\"text\" value='none' [(ngModel)]=\"checkoutData.form.billing_city\" name=\"city\">\n                </ion-input>\n            </ion-item>\n\n            <ion-item style=\"display: none;\">\n                <ion-label position=\"stacked\">{{\"Postcode\" | translate}}</ion-label>\n                <ion-input required type=\"text\" value='00000' [(ngModel)]=\"checkoutData.form.billing_postcode\"\n                    name=\"postcode\">\n                </ion-input>\n            </ion-item>\n\n\n            <ion-item *ngIf=\"countries?.options\">\n                <ion-label>{{\"Country\" | translate}}</ion-label>\n                <ion-select [(ngModel)]=\"checkoutData.form.billing_country\"  (ngModelChange)=\"getBillingRegion()\"\n                    name=\"billing_country\">\n                    <div *ngFor=\"let field of countries.options | keys\">\n                        <ion-select-option *ngIf=\"field.key == 'OM' \"  value=\"{{field.key}}\"><span [innerHTML]=\"field.value\"></span>\n                        </ion-select-option>\n                    </div>\n                </ion-select>\n            </ion-item>\n\n            <div *ngIf=\"checkoutData.form?.billing_country\">\n                <ion-item *ngIf=\"checkoutData.billingStates\">\n                    <ion-label>{{\"State\" | translate}}</ion-label>\n                    <ion-select [(ngModel)]=\"checkoutData.form.billing_state\" name=\"billing_state\">\n                        <div *ngFor=\"let field of checkoutData.billingStates | keys\">\n                            <ion-select-option value=\"{{field.key}}\"><span [innerHTML]=\"field.value\"></span>\n                            </ion-select-option>\n                        </div>\n                    </ion-select>\n                </ion-item>\n\n\n                <ion-item *ngIf=\"!checkoutData.billingStates\" style=\"display: none;\">\n                    <ion-label position=\"stacked\">{{\"State\" | translate}}</ion-label>\n                    <ion-input required type=\"text\"  [(ngModel)]=\"checkoutData.form.billing_state\"\n                        name=\"billing_state\">\n                    </ion-input>\n                </ion-item>\n            </div>\n\n            <ion-item>\n                <ion-label>{{\"Ship to different address\" | translate}}</ion-label>\n                <ion-toggle color=\"{{settings.theme.button}}\" [(ngModel)]=\"checkoutData.form.ship_to_different_address\">\n                </ion-toggle>\n            </ion-item>\n\n\n\n        </ion-list>\n\n\n        <ion-list no-margin *ngIf=\"checkoutData.form.ship_to_different_address\">\n\n            <ion-list-header>\n                <ion-label>{{\"Shipping Address\" | translate}}</ion-label>\n            </ion-list-header>\n\n            <ion-item>\n                <ion-label position=\"stacked\">{{\"First Name\" | translate}}</ion-label>\n                <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_first_name\" name=\"firstname\">\n                </ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">{{\"Last Name\" | translate}}</ion-label>\n                <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_last_name\" name=\"lastname\">\n                </ion-input>\n            </ion-item>\n            <ion-item style=\"display: none;\">\n                <ion-label position=\"stacked\">{{\"Company\" | translate}}</ion-label>\n                <ion-input required type=\"text\" value=\"none\" [(ngModel)]=\"checkoutData.form.shipping_company\" name=\"company\">\n                </ion-input>\n            </ion-item>\n            <ion-item  style=\"display: none;\">\n                <ion-label position=\"stacked\">{{\"Street Address\" | translate}}</ion-label>\n                <ion-input required type=\"text\" value='none' [(ngModel)]=\"checkoutData.form.shipping_address_1\" name=\"street1\">\n                </ion-input>\n            </ion-item>\n            <ion-item  style=\"display: none;\">\n                <ion-label position=\"stacked\">{{\"Street Address\" | translate}} 2</ion-label>\n                <ion-input required type=\"text\" value='none' [(ngModel)]=\"checkoutData.form.shipping_address_2\" name=\"street2\">\n                </ion-input>\n            </ion-item>\n            <ion-item style=\"display: none;\">\n                <ion-label position=\"stacked\">{{\"City\" | translate}}</ion-label>\n                <ion-input required type=\"text\" value='none' [(ngModel)]=\"checkoutData.form.shipping_city\" name=\"city\"> </ion-input>\n            </ion-item>\n\n            <ion-item style=\"display: none;\">\n                <ion-label position=\"stacked\">{{\"Postcode\" | translate}}</ion-label>\n                <ion-input required type=\"number\" value='00000' [(ngModel)]=\"checkoutData.form.shipping_postcode\" name=\"postcode\">\n                </ion-input>\n            </ion-item>\n\n\n            <ion-item *ngIf=\"countries?.options\">\n                <ion-label>{{\"Country\" | translate}}</ion-label>\n                <ion-select [(ngModel)]=\"checkoutData.form.shipping_country\" (ngModelChange)=\"getShippingRegion()\"\n                    name=\"shipping_country\">\n                    <div *ngFor=\"let field of countries.options | keys\">\n                        <ion-select-option value=\"{{field.key}}\"><span [innerHTML]=\"field.value\"></span>\n                        </ion-select-option>\n                    </div>\n                </ion-select>\n            </ion-item>\n\n            <div *ngIf=\"checkoutData.form?.shipping_country\">\n                <ion-item *ngIf=\"checkoutData.form?.state[checkoutData.form.shipping_country]\">\n                    <ion-label>{{\"State\" | translate}}</ion-label>\n                    <ion-select [(ngModel)]=\"checkoutData.form.shipping_state\" name=\"shipping_state\">\n                        <div *ngFor=\"let field of checkoutData.form.state[checkoutData.form.shipping_country] | keys\">\n                            <ion-select-option value=\"{{field.key}}\"><span [innerHTML]=\"field.value\"></span>\n                            </ion-select-option>\n                        </div>\n                    </ion-select>\n                </ion-item>\n\n\n                <ion-item *ngIf=\"!checkoutData.shippingStates\">\n                    <ion-label position=\"stacked\">{{\"State\" | translate}}</ion-label>\n                    <ion-input required type=\"text\" [(ngModel)]=\"checkoutData.form.shipping_state\"\n                        name=\"shipping_state\"> </ion-input>\n                </ion-item>\n            </div>\n\n\n        </ion-list>\n\n        <div *ngIf=\"errorMessage\">\n            <h2 [innerHTML]=\"errorMessage\" style=\"font-size: 14px;  color: red;margin: 16px;\"></h2>\n        </div>\n\n        <ion-button color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"continueCheckout()\">\n            {{\"Continue\" | translate}}</ion-button>\n    </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/checkout/address/address.page.scss":
/*!****************************************************!*\
  !*** ./src/app/checkout/address/address.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2FkZHJlc3MvYWRkcmVzcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/checkout/address/address.page.ts":
/*!**************************************************!*\
  !*** ./src/app/checkout/address/address.page.ts ***!
  \**************************************************/
/*! exports provided: CheckoutAddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutAddressPage", function() { return CheckoutAddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/checkout */ "./src/app/data/checkout.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");







var CheckoutAddressPage = /** @class */ (function () {
    function CheckoutAddressPage(api, checkoutData, router, navCtrl, settings, route) {
        this.api = api;
        this.checkoutData = checkoutData;
        this.router = router;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.route = route;
        this.loader = false;
    }
    CheckoutAddressPage.prototype.ngOnInit = function () {
        this.getCheckoutForm();
        this.getCountries();
    };
    CheckoutAddressPage.prototype.getCheckoutForm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader = true;
                        return [4 /*yield*/, this.api.postItem('get_checkout_form').subscribe(function (res) {
                                _this.checkoutData.form = res;
                                _this.checkoutData.form.sameForShipping = true;
                                _this.getBillingRegion();
                                _this.loader = false;
                            }, function (err) {
                                console.log(err);
                                _this.loader = false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckoutAddressPage.prototype.getCountries = function () {
        var _this = this;
        this.api.getItem('settings/general/woocommerce_specific_allowed_countries').subscribe(function (res) {
            _this.countries = res;
        }, function (err) {
            console.log(err);
        });
    };
    CheckoutAddressPage.prototype.getBillingRegion = function () {
        if (this.checkoutData.form.state[this.checkoutData.form.billing_country] && 0 !== this.checkoutData.form.state[this.checkoutData.form.billing_country].length)
            this.checkoutData.billingStates = this.checkoutData.form.state[this.checkoutData.form.billing_country];
        else
            this.checkoutData.billingStates = undefined;
        //this.updateOrderReview();
    };
    CheckoutAddressPage.prototype.getShippingRegion = function () {
        if (this.checkoutData.form.state[this.checkoutData.form.shipping_country] && 0 !== this.checkoutData.form.state[this.checkoutData.form.shipping_country].length)
            this.checkoutData.shippingStates = this.checkoutData.form.state[this.checkoutData.form.shipping_country];
        else
            this.checkoutData.shippingStates = undefined;
        //this.updateOrderReview();
    };
    CheckoutAddressPage.prototype.updateOrderReview = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('update_order_review').subscribe(function (res) {
                            _this.checkoutData.orderReview = res;
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckoutAddressPage.prototype.continueCheckout = function () {
        this.errorMessage = '';
        if (this.validateForm()) {
            if (!this.checkoutData.form.ship_to_different_address)
                this.assgnShippingAddress();
            this.navCtrl.navigateForward('/tabs/cart/checkout');
        }
    };
    CheckoutAddressPage.prototype.validateForm = function () {
        if (this.checkoutData.form.billing_first_name == '' || this.checkoutData.form.billing_first_name == undefined) {
            this.errorMessage = 'Billing first name is a required field';
            return false;
        }
        if (this.checkoutData.form.billing_last_name == '' || this.checkoutData.form.billing_last_name == undefined) {
            this.errorMessage = 'Billing last name is a required field';
            return false;
        }
        if (this.checkoutData.form.billing_phone == '' || this.checkoutData.form.billing_phone == undefined) {
            this.errorMessage = 'Billing phone is a required field';
            return false;
        }
        if (this.checkoutData.form.billing_address_1 == '' || this.checkoutData.form.billing_address_1 == undefined) {
            this.errorMessage = 'Billing Street address is a required field';
            return false;
        }
        this.checkoutData.form.billing_city = 'none';
        if (this.checkoutData.form.billing_city == '' || this.checkoutData.form.billing_city == undefined) {
            this.errorMessage = 'Billing city is a required field';
            return false;
        }
        this.checkoutData.form.billing_postcode = '0000';
        if (this.checkoutData.form.billing_postcode == '' || this.checkoutData.form.billing_postcode == undefined) {
            this.errorMessage = 'Billing post code is a required field';
            return false;
        }
        if (this.checkoutData.form.billing_country == '' || this.checkoutData.form.billing_country == undefined) {
            this.errorMessage = 'Billing country is a required field';
            return false;
        }
        this.checkoutData.form.billing_state = 'none';
        if (this.checkoutData.form.billing_state == '' || this.checkoutData.form.billing_state == undefined) {
            this.errorMessage = 'Billing state is a required field';
            return false;
        }
        if (this.checkoutData.form.ship_to_different_address) {
            if (this.checkoutData.form.shipping_first_name == '' || this.checkoutData.form.shipping_first_name == undefined) {
                this.errorMessage = 'Shipping first name is a required field';
                return false;
            }
            if (this.checkoutData.form.shipping_last_name == '' || this.checkoutData.form.shipping_last_name == undefined) {
                this.errorMessage = 'Shipping last name is a required field';
                return false;
            }
            if (this.checkoutData.form.shipping_address_1 == '' || this.checkoutData.form.shipping_address_1 == undefined) {
                this.errorMessage = 'Shipping Street address is a required field';
                return false;
            }
            if (this.checkoutData.form.shipping_city == '' || this.checkoutData.form.shipping_city == undefined) {
                this.errorMessage = 'Shipping city is a required field';
                return false;
            }
            if (this.checkoutData.form.shipping_postcode == '' || this.checkoutData.form.shipping_postcode == undefined) {
                this.errorMessage = 'Shipping post code is a required field';
                return false;
            }
            if (this.checkoutData.form.shipping_country == '' || this.checkoutData.form.shipping_country == undefined) {
                this.errorMessage = 'Shipping country is a required field';
                return false;
            }
            if (this.checkoutData.form.shipping_state == '' || this.checkoutData.form.shipping_state == undefined) {
                this.errorMessage = 'Shipping state is a required field';
                return false;
            }
            return true;
        }
        else
            return true;
    };
    CheckoutAddressPage.prototype.assgnShippingAddress = function () {
        this.checkoutData.form.shipping_first_name = this.checkoutData.form.billing_first_name;
        this.checkoutData.form.shipping_last_name = this.checkoutData.form.billing_last_name;
        this.checkoutData.form.shipping_company = this.checkoutData.form.billing_company;
        this.checkoutData.form.shipping_address_1 = this.checkoutData.form.billing_address_1;
        this.checkoutData.form.shipping_address_2 = this.checkoutData.form.billing_address_2;
        this.checkoutData.form.shipping_city = this.checkoutData.form.billing_city;
        this.checkoutData.form.shipping_postcode = this.checkoutData.form.billing_postcode;
        this.checkoutData.form.shipping_country = this.checkoutData.form.billing_country;
        this.checkoutData.form.shipping_state = this.checkoutData.form.billing_state;
        return true;
    };
    CheckoutAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-address',
            template: __webpack_require__(/*! ./address.page.html */ "./src/app/checkout/address/address.page.html"),
            styles: [__webpack_require__(/*! ./address.page.scss */ "./src/app/checkout/address/address.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_checkout__WEBPACK_IMPORTED_MODULE_5__["CheckoutData"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CheckoutAddressPage);
    return CheckoutAddressPage;
}());



/***/ })

}]);
//# sourceMappingURL=checkout-address-address-module.js.map