(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-checkout-module"],{

/***/ "./src/app/checkout/checkout/checkout.module.ts":
/*!******************************************************!*\
  !*** ./src/app/checkout/checkout/checkout.module.ts ***!
  \******************************************************/
/*! exports provided: CheckoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _checkout_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkout.page */ "./src/app/checkout/checkout/checkout.page.ts");
/* harmony import */ var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/pipe.module */ "./src/app/pipes/pipe.module.ts");









var routes = [
    {
        path: '',
        component: _checkout_page__WEBPACK_IMPORTED_MODULE_7__["CheckoutPage"]
    }
];
var CheckoutPageModule = /** @class */ (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_8__["KeysPipeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_7__["CheckoutPage"]]
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());



/***/ }),

/***/ "./src/app/checkout/checkout/checkout.page.html":
/*!******************************************************!*\
  !*** ./src/app/checkout/checkout/checkout.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/cart/address\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Checkout\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\n\n<div class=\"spinner\" *ngIf=\"!orderReview\"><ion-spinner></ion-spinner></div>\n\n<div *ngIf=\"orderReview\">\n<ion-list>\n\t<ion-list-header>\n    <ion-label>{{\"Billing Address\" | translate}}</ion-label>\n  </ion-list-header>\n\n  <ion-item>\n    <ion-label text-wrap>\n      <p>\n    <span>{{checkoutData.form.billing_first_name}}</span>&nbsp;<span>{{checkoutData.form.billing_last_name}}</span>&nbsp;<span>{{checkoutData.form.billing_company}}</span>&nbsp;<span>{{checkoutData.form.billing_address_1}}</span>&nbsp;<span>{{checkoutData.form.billing_address_2}}</span>&nbsp;<span>{{checkoutData.form.billing_city}}</span>\n    <span>{{checkoutData.form.billing_state}}</span>&nbsp;<span>{{checkoutData.form.billing_postcode}}</span>&nbsp;<span>{{checkoutData.form.billing_country}}</span>\n    &nbsp;<span>{{checkoutData.form.billing_email}}</span>&nbsp;<span>{{checkoutData.form.billing_phone}}</span>\n  </p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n<ion-list>\n  <ion-list-header>\n    <ion-label>{{\"Shipping Address\" | translate}}</ion-label>\n  </ion-list-header>\n\n  <ion-item>\n    <ion-label text-wrap>\n      <p>\n    <span>{{checkoutData.form.shipping_first_name}}</span>&nbsp;<span>{{checkoutData.form.shipping_last_name}}</span>&nbsp;<span>{{checkoutData.form.shipping_company}}</span>&nbsp;<span>{{checkoutData.form.shipping_address_1}}</span>&nbsp;<span>{{checkoutData.form.shipping_address_2}}</span>&nbsp;<span>{{checkoutData.form.shipping_city}}</span>&nbsp;\n    <span>{{checkoutData.form.shipping_state}}</span>&nbsp;<span>{{checkoutData.form.shipping_postcode}}</span>&nbsp;<span>{{checkoutData.form.shipping_country}}</span>&nbsp;\n    <span>{{checkoutData.form.shipping_email}}</span>&nbsp;<span>{{checkoutData.form.shipping_phone}}</span>\n  </p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n\n<ion-list *ngIf=\"orderReview?.shipping\">\n  <ion-radio-group *ngFor=\"let package of orderReview.shipping\" [(ngModel)]=\"package.chosen_method\" (ngModelChange)=\"updateOrderReview()\">\n    <ion-list-header>\n      <span [innerHTML]=\"package.package_name\"></span>\n    </ion-list-header>\n    <ion-item *ngIf=\"isEmptyObject(package.shipping)\">\n      <ion-label><p>{{\"No Shipping Available\" | translate}}</p></ion-label>\n    </ion-item>\n    <ion-item *ngFor=\"let method of package.shipping | keys\">\n      <ion-label><span [innerHTML]=\"method.value.label\"></span> <b>-</b> <span>{{method.value.cost | currency:settings.currency:true:'1.2-2'}}</span></ion-label>\n      <ion-radio color=\"{{settings.theme.button}}\" value=\"{{method.value.id}}\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n</ion-list>\n\n<ion-list *ngIf=\"orderReview?.payment\">\n  <ion-radio-group [(ngModel)]=\"checkoutData.form.payment_method\" (ngModelChange)=\"onChangePayment()\">\n    <ion-list-header>\n      {{\"Payment Method\" | translate}}\n    </ion-list-header>\n    <ion-item *ngFor=\"let method of orderReview.payment | keys\">\n      <ion-label text-wrap class=\"ion-text-nowrap\"><span [innerHTML]=\"method.value.title\"></span></ion-label>\n      <ion-radio color=\"{{settings.theme.button}}\" value=\"{{method.value.id}}\"></ion-radio>\n     \n    </ion-item>\n    <ion-item class=\"payment-description\" *ngIf=\"orderReview.payment[checkoutData.form.payment_method]?.description\" lines=\"none\">\n    <ion-label text-wrap> \n    <span [innerHTML]=\"orderReview.payment[checkoutData.form.payment_method]?.description\"></span>\n     </ion-label>\n   </ion-item>\n  </ion-radio-group>\n</ion-list>\n\n  <div *ngIf=\"cardResponse.cardNumber && checkoutData.form.payment_method == 'stripe'\">\n      <ion-card mode=\"md\">\n          <ion-item *ngIf=\"cardResponse.cardNumber\">\n            <ion-label text-wrap>\n              <ion-text>\n                <h3>{{\"Card Number\" | translate}}</h3>\n              </ion-text>\n              <p>{{cardResponse.cardNumber}}</p>\n            </ion-label>\n          </ion-item>\n\n            <ion-item>\n            <ion-label text-wrap>\n              <ion-text>\n                <h3>{{\"Expiry Date\" | translate}}</h3>\n              </ion-text>\n              <p>{{cardResponse.expiryMonth}}/{{cardResponse.expiryYear}}</p>\n            </ion-label>\n          </ion-item>\n\n            <ion-item>\n            <ion-label text-wrap>\n              <ion-text>\n                <h3>{{\"CVV\" | translate}}</h3>\n              </ion-text>\n              <p>{{cardResponse.cvv}}</p>\n            </ion-label>\n          </ion-item>\n        </ion-card>\n  </div>\n\n<div *ngIf=\"errorMessage\">\n  <h2 [innerHTML]=\"errorMessage\" style=\"font-size: 14px;  color: red; text-align: center;\"></h2>\n  </div>\n\n<ion-button [disabled]=\"disableButton\" color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"placeOrder()\">{{'Place order' | translate}}</ion-button>\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/checkout/checkout/checkout.page.scss":
/*!******************************************************!*\
  !*** ./src/app/checkout/checkout/checkout.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".payment-description {\n  --ion-background-color: var(--ion-color-step-50,#f2f2f2);\n  margin: 10px 0 0;\n  --border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heW1hbmVsc2hhcmthd3kvUHJvZ3JhbW1pbmcvUHJvamVjdHMvSW9uaWNfc29oYXIvc3JjL2FwcC9jaGVja291dC9jaGVja291dC9jaGVja291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3REFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG9CQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheW1lbnQtZGVzY3JpcHRpb24ge1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTUwLCNmMmYyZjIpO1xuICAgIG1hcmdpbjogMTBweCAwIDA7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/checkout/checkout/checkout.page.ts":
/*!****************************************************!*\
  !*** ./src/app/checkout/checkout/checkout.page.ts ***!
  \****************************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/checkout */ "./src/app/data/checkout.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var _ionic_native_card_io_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/card-io/ngx */ "./node_modules/@ionic-native/card-io/ngx/index.js");










//import { Braintree, ApplePayOptions, PaymentUIOptions, PaymentUIResult } from '@ionic-native/braintree/ngx';
var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(oneSignal, platform, cardIO, api, checkoutData, settings, router, iab, loadingController, navCtrl, route /*, private braintree: Braintree*/) {
        this.oneSignal = oneSignal;
        this.platform = platform;
        this.cardIO = cardIO;
        this.api = api;
        this.checkoutData = checkoutData;
        this.settings = settings;
        this.router = router;
        this.iab = iab;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.results = {};
        this.disableButton = false;
        this.cardResponse = {};
        this.stripeForm = {};
    }
    CheckoutPage.prototype.ngOnInit = function () {
        this.updateOrder();
    };
    CheckoutPage.prototype.updateOrder = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkoutData.form.security = this.checkoutData.form.nonce.update_order_review_nonce;
                        return [4 /*yield*/, this.api.postItem('update_order_review', this.checkoutData.form).subscribe(function (res) {
                                _this.orderReview = res;
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
    CheckoutPage.prototype.updateOrderReview = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkoutData.form.shipping_method = [];
                        this.orderReview.shipping.forEach(function (item, index) {
                            _this.checkoutData.form['shipping_method[' + index + ']'] = item.chosen_method;
                        });
                        this.checkoutData.form.security = this.checkoutData.form.nonce.update_order_review_nonce;
                        return [4 /*yield*/, this.api.postItem('update_order_review', this.checkoutData.form).subscribe(function (res) {
                                _this.handleData(res);
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
    CheckoutPage.prototype.handleData = function (results) {
        console.log(results);
        //
    };
    CheckoutPage.prototype.placeOrder = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('ayman');
                        this.disableButton = true;
                        this.errorMessage = undefined;
                        if (!this.platform.is('cordova')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.oneSignal.getIds().then(function (data) {
                                _this.checkoutData.form.onesignal_user_id = data.userId;
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!(this.checkoutData.form.payment_method === 'stripe')) return [3 /*break*/, 4];
                        this.setStripeForm();
                        return [4 /*yield*/, this.api.getExternalData('https://api.stripe.com/v1/tokens', this.stripeForm).subscribe(function (res) {
                                _this.handleStipeToken(res);
                            }, function (err) {
                                if (err.error.error.message) {
                                    _this.errorMessage = err.error.error.message;
                                }
                                _this.disableButton = false;
                            })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.api.ajaxCall('/checkout?wc-ajax=checkout', this.checkoutData.form).subscribe(function (res) {
                            _this.results = res;
                            _this.handleOrder();
                        }, function (err) {
                            _this.disableButton = false;
                            console.log(err);
                        })];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    CheckoutPage.prototype.handleOrder = function () {
        if (this.results.result == 'success') {
            if (this.checkoutData.form.payment_method == 'wallet' || this.checkoutData.form.payment_method == 'paypalpro' || this.checkoutData.form.payment_method == 'stripe' || this.checkoutData.form.payment_method == 'bacs' || this.checkoutData.form.payment_method == 'cheque' || this.checkoutData.form.payment_method == 'cod') {
                this.orderSummary(this.results.redirect);
            }
            else if (this.checkoutData.form.payment_method == 'payuindia') {
                this.handlePayUPayment();
            }
            else if (this.checkoutData.form.payment_method == 'paytm') {
                this.handlePaytmPayment();
            }
            else
                this.handlePayment();
        }
        else if (this.results.result == 'failure') {
            this.disableButton = false;
            this.errorMessage = this.results.messages;
        }
    };
    CheckoutPage.prototype.orderSummary = function (address) {
        var str = address;
        var pos1 = str.lastIndexOf("/order-received/");
        var pos2 = str.lastIndexOf("/?key=wc_order");
        var pos3 = pos2 - (pos1 + 16);
        var order_id = str.substr(pos1 + 16, pos3);
        this.navCtrl.navigateRoot('/order-summary/' + order_id);
    };
    CheckoutPage.prototype.handlePayment = function () {
        var _this = this;
        var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
        var browser = this.iab.create(this.results.redirect, '_blank', options);
        browser.show();
        browser.on('loadstart').subscribe(function (data) {
            if (data.url.indexOf('/order-received/') != -1 && data.url.indexOf('key=wc_order_') != -1) {
                _this.orderSummary(data.url);
                browser.hide();
            }
            else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancelled') != -1) {
                browser.close();
                _this.disableButton = false;
            }
        });
        browser.on('exit').subscribe(function (data) {
            _this.disableButton = false;
        });
    };
    CheckoutPage.prototype.handlePayUPayment = function () {
        var _this = this;
        var options = "location=no,hidden=yes,toolbar=no,hidespinner=yes";
        var browser = this.iab.create(this.results.redirect, '_blank', options);
        var str = this.results.redirect;
        var pos1 = str.lastIndexOf("/order-pay/");
        var pos2 = str.lastIndexOf("/?key=wc_order");
        var pos3 = pos2 - (pos1 + 11);
        this.orderId = str.substr(pos1 + 11, pos3);
        browser.on('loadstart').subscribe(function (data) {
            var browserActive = false;
            if (data.url.indexOf('payumoney.com/transact') != -1 && !browserActive) {
                browserActive = true;
                browser.show();
            }
            else if (data.url.indexOf('/order-received/') != -1 && data.url.indexOf('key=wc_order_') != -1) {
                if (_this.orderId)
                    _this.navCtrl.navigateRoot('/order-summary/' + _this.orderId);
                browser.hide();
            }
            else if (data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled=1') != -1 || data.url.indexOf('cancelled') != -1) {
                browser.close();
                _this.disableButton = false;
            }
        });
        browser.on('exit').subscribe(function (data) {
            _this.disableButton = false;
        });
    };
    CheckoutPage.prototype.handlePaytmPayment = function () {
        var _this = this;
        var str = this.results.redirect;
        var pos1 = str.lastIndexOf("/order-pay/");
        var pos2 = str.lastIndexOf("/?key=wc_order");
        var pos3 = pos2 - (pos1 + 11);
        this.orderId = str.substr(pos1 + 11, pos3);
        if (this.results.result == 'success') {
            var options = "location=no,hidden=yes,toolbar=yes";
            var browser_1 = this.iab.create(this.results.redirect, '_blank', options);
            browser_1.on('loadstart').subscribe(function (data) {
                var browserActive = false;
                if (data.url.indexOf('securegw-stage.paytm.in/theia') != -1 && !browserActive) {
                    browserActive = true;
                    browser_1.show();
                }
                else if (data.url.indexOf('type=success') != -1) {
                    if (_this.orderId)
                        _this.navCtrl.navigateRoot('/order-summary/' + _this.orderId);
                    browser_1.hide();
                }
                else if (data.url.indexOf('type=error') != -1 || data.url.indexOf('Failed') != -1 || data.url.indexOf('cancel_order=true') != -1 || data.url.indexOf('cancelled') != -1) {
                    browser_1.close();
                    _this.disableButton = false;
                }
                else if (data.url.indexOf('Thank+you+for+your+order') != -1) {
                    browser_1.close();
                    _this.disableButton = false;
                }
            });
            browser_1.on('exit').subscribe(function (data) {
                _this.disableButton = false;
            });
        }
        else if (this.results.result == 'failure') {
            this.errorMessage = this.results.messages;
            this.disableButton = false;
        }
    };
    CheckoutPage.prototype.onChangePayment = function () {
        this.disableButton = false;
        if ((this.checkoutData.form.payment_method == 'stripe' || this.checkoutData.form.payment_method == 'paypalpro') && this.platform.is('cordova')) {
            this.enterCard();
        }
    };
    CheckoutPage.prototype.enterCard = function () {
        var _this = this;
        this.cardIO.canScan()
            .then(function (res) {
            if (res) {
                var options = {
                    requireExpiry: true,
                    requireCVV: true,
                    scanInstructions: "Scan the front of your card",
                    scanExpiry: true,
                    hideCardIOLogo: true,
                    noCamera: true,
                };
                _this.cardIO.scan(options)
                    .then(function (data) {
                    _this.cardResponse = data;
                    _this.setCardData();
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    CheckoutPage.prototype.setCardData = function () {
        if (this.checkoutData.form.payment_method == 'stripe') {
            this.checkoutData.form['moneris-card-number'] = this.cardResponse.cardNumber;
            this.cardResponse.expiryYear = this.cardResponse.expiryYear.slice(0, 2); //2030
            this.checkoutData.form['moneris-card-expiry'] = this.cardResponse.expiryMonth + ' / ' + this.cardResponse.expiryYear; //;'04 / 30'
            this.checkoutData.form['moneris-card-cvc'] = this.cardResponse.cvv;
        }
        else if (this.checkoutData.form.payment_method == 'paypalpro') {
            this.checkoutData.form['billing_credircard'] = this.cardResponse.cardNumber;
            this.checkoutData.form['billing_cardtype'] = this.cardResponse.cardType;
            this.checkoutData.form['moneris-card-expiry'] = this.cardResponse.expiryYear;
            this.checkoutData.form['billing_expdatemonth'] = this.cardResponse.expiryMonth;
            this.checkoutData.form['billing_ccvnumber'] = this.cardResponse.cvv;
        }
    };
    CheckoutPage.prototype.setStripeForm = function () {
        this.stripeForm.key = this.orderReview.payment.stripe.publishable_key;
        this.stripeForm.payment_user_agent = 'stripe.js/6ea8d55';
        this.stripeForm['card[number]'] = this.cardResponse.cardNumber; //'4242424242424242';//this.cardResponse.cardNumber;
        this.stripeForm['card[exp_month]'] = this.cardResponse.expiryMonth; //'04';//this.cardResponse.expiryMonth;
        this.stripeForm['card[exp_year]'] = this.cardResponse.expiryYear; ////this.cardResponse.expiryYear;
        this.stripeForm['card[cvc]'] = this.cardResponse.cvv; //this.cardResponse.cvc;
        this.stripeForm['card[name]'] = this.checkoutData.form.billing_first_name + this.checkoutData.form.billing_last_name;
        this.stripeForm['card[address_line1]'] = this.checkoutData.form.billing_address_1;
        this.stripeForm['card[address_line2]'] = this.checkoutData.form.billing_address_2;
        this.stripeForm['card[address_state]'] = this.checkoutData.form.billing_state;
        this.stripeForm['card[address_city]'] = this.checkoutData.form.billing_city;
        this.stripeForm['card[address_zip]'] = this.checkoutData.form.billing_postcode;
        this.stripeForm['card[address_country]'] = this.checkoutData.form.billing_country;
        return true;
    };
    CheckoutPage.prototype.handleStipeToken = function (token) {
        var _this = this;
        if (token && token.id) {
            var form = { type: 'card', token: '', key: '' };
            form.type = 'card';
            form.token = token.id;
            form.key = this.orderReview.payment.stripe.publishable_key;
            this.checkoutData.form['wc-stripe-payment-token'] = token.id; //For Existing Cards add api
            this.api.getExternalData('https://api.stripe.com/v1/sources', form).subscribe(function (res) {
                _this.stripePlaceOrder(res);
            }, function (err) {
                if (err.error.error.message)
                    _this.errorMessage = err.error.error.message;
                _this.disableButton = false;
            });
        }
        else {
            this.disableButton = false;
            this.errorMessage = 'Cannot handle payment, Please check card details';
        }
    };
    CheckoutPage.prototype.stripePlaceOrder = function (src) {
        var _this = this;
        if (src && src.id) {
            this.checkoutData.form['stripe_source'] = src.id;
            this.api.ajaxCall('/checkout?wc-ajax=checkout', this.checkoutData.form).subscribe(function (res) {
                _this.results = res;
                _this.handleOrder();
            }, function (err) {
                _this.disableButton = false;
                console.log(err);
            });
        }
        else {
            this.disableButton = false;
            this.errorMessage = 'Cannot handle payment, Please check card details';
        }
    };
    CheckoutPage.prototype.isEmptyObject = function (obj) {
        return Object.keys(obj).length === 0;
    };
    CheckoutPage.prototype.brainTreePayment = function () {
        /*console.log('Braintree payment.......');
        
        const BRAINTREE_TOKEN = 'sandbox_7b74zrbp_zm8j7dwnjqqzzgxn';
        
        const appleOptions: ApplePayOptions = {
          merchantId: 'zm8j7dwnjqqzzgxn',
          currency: 'USD',
          country: 'US'
        }

        const paymentOptions: PaymentUIOptions = {
          amount: '14.99',
          primaryDescription: 'Your product or service (per /item, /month, /week, etc)',
        }

        this.braintree.initialize(BRAINTREE_TOKEN)
          .then(() => this.braintree.setupApplePay(appleOptions))
          .then(() => this.braintree.presentDropInPaymentUI(paymentOptions))
          .then((result: PaymentUIResult) => {
            if (result.userCancelled) {
              console.log("User cancelled payment dialog.");
            } else {
              console.log("User successfully completed payment!");
              console.log("Payment Nonce: " + result.nonce);
              console.log("Payment Result.", result);
            }
          })
          .catch((error: string) => console.error(error));*/
    };
    CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.page.html */ "./src/app/checkout/checkout/checkout.page.html"),
            styles: [__webpack_require__(/*! ./checkout.page.scss */ "./src/app/checkout/checkout/checkout.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_card_io_ngx__WEBPACK_IMPORTED_MODULE_9__["CardIO"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data_checkout__WEBPACK_IMPORTED_MODULE_5__["CheckoutData"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] /*, private braintree: Braintree*/])
    ], CheckoutPage);
    return CheckoutPage;
}());



/***/ })

}]);
//# sourceMappingURL=checkout-checkout-checkout-module.js.map