(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");
/* harmony import */ var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/pipe.module */ "./src/app/pipes/pipe.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__["KeysPipeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"] }])
            ],
            declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
        })
    ], CartPageModule);
    return CartPageModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.page.html":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      {{\"Cart\" | translate}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"cart\">\n  <div class=\"spinner\" *ngIf=\"!cart?.cart_contents\"><ion-spinner> </ion-spinner></div>\n<div *ngIf=\"cart.cart_contents?.length == 0\" class=\"empty\">\n  <ion-icon name=\"basket\" mode=\"md\"></ion-icon>\n</div>\n\n<div *ngIf=\"cart.cart_contents\">\n<div *ngIf=\"cart.cart_contents?.length != 0\">\n  <ion-item *ngFor=\"let item of cart.cart_contents | keys\">\n    <ion-thumbnail slot=\"start\" (click)=\"getProduct(item.value.product_id)\">\n      <img src=\"{{item.value.thumb}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\">\n    </ion-thumbnail>\n    <ion-label class=\"name-label\">\n      <ion-text style=\"font-size:14px;\" text-wrap class=\"clamp\">{{item.value.name}}</ion-text>\n      <p *ngFor=\"let variation of item.value.variation | keys\" style=\"font-size:13px;\">{{variation.value}}</p>\n      <p style=\"font-size:13px;\">{{item.value.tax_price | currency:settings.currency:symbol:'1.2-2'}} x {{item.value.quantity}}</p>\n      <span *ngIf=\"item.value.addons?.length\">Addons</span>\n      <span *ngFor=\"let items of item.value.addons\">\n        <p style=\"font-size:13px;\">{{items.value}} {{items.price | currency:settings.currency:symbol:'1.2-2'}}</p>\n      </span>\n       \n      <div class=\"add-remove-button\"> \n          <ion-button color=\"{{settings.theme.button}}\" fill=\"clear\" (click)=\"deleteFromCart(item.value.product_id, item.key)\">\n              <ion-icon slot=\"icon-only\" name=\"remove\" mode=\"md\"></ion-icon>\n          </ion-button> \n          <ion-button color=\"{{settings.theme.button}}\" fill=\"clear\">{{item.value.quantity}}</ion-button> \n          <ion-button color=\"{{settings.theme.button}}\" fill=\"clear\" (click)=\"addToCart(item.value.product_id, item.key)\">\n              <ion-icon slot=\"icon-only\" name=\"add\" mode=\"md\">\n              </ion-icon>\n          </ion-button> \n      </div>\n    </ion-label>\n\n    <ion-button fill=\"clear\" (click)=\"deleteItem(item.key, item.value.quantity)\" slot=\"end\" class=\"trash\"><ion-icon name=\"md-trash\" color=\"{{settings.theme.button}}\" style=\"font-size:22px;\"></ion-icon></ion-button>\n    \n  </ion-item>\n\n<form #f=\"ngForm\" class=\"coupon\">\n    <ion-item>\n        <ion-input type=\"text\" [(ngModel)]=\"cart.coupon\" name=\"coupon\" placeholder=\"{{'Enter coupon here' | translate}}\"> </ion-input>\n        <h2 item-right> \n            <ion-button block color=\"{{settings.theme.button}}\" type=\"submit\" text-uppercase [disabled]='disableSubmitCoupon' (click)=\"submitCoupon(cart.coupon)\">{{\"Apply\" | translate}}\n            </ion-button>\n        </h2>\n    </ion-item>\n</form>\n\n      <div class=\"redeem\">\n\n      <div *ngIf=\"cart && settings.reward > '0' \" style=\"margin-bottom: 3px\">\n      <ion-item>\n          <ion-label>{{\"Complete this order and you will earn\" | translate}} <span style=\"font-size: 16px; font-weight: 600\">{{cart.purchase_point}}</span> {{\"points\" | translate}}, {{\"you can use on future order.\" | translate}}</ion-label>\n      </ion-item>\n      </div>\n\n      <div *ngIf=\"settings.reward > '0' \" style=\"background: #fff;padding: 10px 0;\">\n      <ion-item>\n          <ion-label>{{\"Use\" | translate}} <span style=\"font-size: 16px; font-weight: 600\">{{cart.points.points}}</span> {{\"Reward Points for a\" | translate}} <span style=\"font-size: 16px; font-weight: 600\">{{cart.points.discount_available}}Ks</span> {{\"discount on this order!\" | translate}}\n          <ion-button color=\"{{settings.theme.button}}\" fill=\"solid\" type=\"submit\" text-uppercase small (click)=\"redeem()\"> {{\"Redeem Points\" | translate}}\n        </ion-button> \n          </ion-label>\n      </ion-item>\n\n      \n      </div>\n\n  </div>\n\n<ion-list lines=\"none\">\n  <ion-item>\n    <ion-label>\n     {{\"Sub total\" | translate}} <span class=\"totals-amount\">{{1*cart.cart_totals.subtotal | currency:settings.currency:symbol:'1.2-2'}}</span>\n    </ion-label>\n  </ion-item>\n  <ion-item *ngIf=\"cart.cart_totals.discount_total != 0\">\n    <ion-label>\n      {{\"Tax total\" | translate}} <span class=\"totals-amount\">{{1*cart.cart_totals.total_tax | currency:settings.currency:symbol:'1.2-2'}}</span>\n    </ion-label>\n  </ion-item>\n\n  <ion-item *ngFor=\"let coupon of cart.coupon_discount_totals | keys\">\n    <ion-label>\n      {{\"Coupon\" | translate}} - {{coupon.key}} <ion-text (click)=\"removeCoupon(coupon.key)\" color=\"{{settings.theme.button}}\">(Remove)</ion-text><span class=\"totals-amount\">-{{1*coupon.value | currency:settings.currency:symbol:'1.2-2'}}</span>\n    </ion-label>\n  </ion-item>\n\n  <ion-item *ngIf=\"cart.cart_totals.discount_total != 0\">\n    <ion-label>\n      {{\"Discount\" | translate}}<span class=\"totals-amount\">-{{1*cart.cart_totals.discount_total | currency:settings.currency:symbol:'1.2-2'}}</span>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      {{\"Shipping\" | translate}} <span class=\"totals-amount\">{{1*cart.cart_totals.shipping_total | currency:settings.currency:symbol:'1.2-2'}}</span>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label class=\"grand-total\">\n      {{\"Grand Total\" | translate}} <span class=\"totals-amount\">{{1*cart.cart_totals.total | currency:settings.currency:symbol:'1.2-2'}}</span>\n    </ion-label>\n  </ion-item>\n\n</ion-list>\n\n<ion-button color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" (click)=\"checkout()\" style=\"margin: 16px;\">{{\"Continue\" | translate}}</ion-button>\n</div>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cart ion-thumbnail {\n  height: auto;\n  width: 100px; }\n\n.cart .empty {\n  margin-top: 50px;\n  text-align: center; }\n\n.cart .empty ion-icon {\n    font-size: 7.2em; }\n\n.cart .grand-total {\n  font-weight: 500; }\n\n.cart .coupon h2 {\n  margin: 10px; }\n\n.cart .clamp {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n  -webkit-box-orient: vertical; }\n\n.button-native {\n  padding: 0; }\n\n.redeem {\n  margin: 3px 0; }\n\n.redeem .item {\n    margin: 0; }\n\n.redeem ion-label {\n    margin: 16px 0;\n    overflow: visible;\n    white-space: normal;\n    font-size: 15px; }\n\n.redeem .item.item-block .item-inner {\n    border-bottom: 0; }\n\n.redeem .button {\n    margin: 0 30px;\n    width: calc(100% - 60px);\n    border-radius: 4px; }\n\n.name-label {\n  margin-right: 16px; }\n\n.name-label ion-button {\n    --box-shadow: none;\n    height: 24px;\n    width: 24px;\n    --padding-start: 0;\n    --padding-end: 0; }\n\n.name-label ion-button ion-icon {\n      font-size: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heW1hbmVsc2hhcmthd3kvUHJvZ3JhbW1pbmcvUHJvamVjdHMvSW9uaWNfc29oYXIvc3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFIcEI7RUFNUSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBUDFCO0lBU1ksZ0JBQWdCLEVBQUE7O0FBVDVCO0VBYVEsZ0JBQWdCLEVBQUE7O0FBYnhCO0VBaUJZLFlBQVksRUFBQTs7QUFqQnhCO0VBcUJRLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLDRCQUE0QixFQUFBOztBQU1wQztFQUNJLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGFBQWEsRUFBQTs7QUFEakI7SUFHUSxTQUFTLEVBQUE7O0FBSGpCO0lBTVEsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZSxFQUFBOztBQVR2QjtJQVlRLGdCQUFnQixFQUFBOztBQVp4QjtJQWVRLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsa0JBQWtCLEVBQUE7O0FBUTFCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBR1Esa0JBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFnQjtJQUNoQixnQkFBYyxFQUFBOztBQVB0QjtNQVNZLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydCB7XG4gICAgaW9uLXRodW1ibmFpbCB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgICAuZW1wdHkge1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNy4yZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmdyYW5kLXRvdGFsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgLmNvdXBvbiB7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2xhbXAge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIH1cbiAgICAuYWRkLXJlbW92ZS1idXR0b24ge1xuICAgICAgIC8vIGZsb2F0OiByaWdodDtcbiAgICB9XG59XG4uYnV0dG9uLW5hdGl2ZSB7XG4gICAgcGFkZGluZzogMDtcbn1cbi5yZWRlZW0ge1xuICAgIG1hcmdpbjogM3B4IDA7XG4gICAgLml0ZW0ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbiAgICAuaXRlbS5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICB9XG4gICAgLmJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMCAzMHB4O1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG59XG4udHJhc2gge1xuICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgLy8gdG9wOiAxMHB4O1xuICAgLy8gcmlnaHQ6IDA7XG59XG4ubmFtZS1sYWJlbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/product */ "./src/app/data/product.ts");










var CartPage = /** @class */ (function () {
    function CartPage(config, api, data, router, settings, loadingController, navCtrl, route, productData) {
        this.config = config;
        this.api = api;
        this.data = data;
        this.router = router;
        this.settings = settings;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.productData = productData;
        this.cart = {};
    }
    CartPage.prototype.ngOnInit = function () { };
    CartPage.prototype.ionViewDidEnter = function () {
        this.getCart();
        console.log(this.settings.reward);
    };
    CartPage.prototype.getCart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('cart').subscribe(function (res) {
                            _this.cart = res;
                            _this.data.updateCart(_this.cart.cart_contents);
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
    CartPage.prototype.checkout = function () {
        this.navCtrl.navigateForward('/tabs/cart/address');
    };
    CartPage.prototype.getProduct = function (id) {
        this.productData.product = {};
        this.navCtrl.navigateForward(this.router.url + '/product/' + id);
    };
    CartPage.prototype.deleteItem = function (itemKey, qty) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('remove_cart_item&item_key=' + itemKey).subscribe(function (res) {
                            _this.cart = res;
                            _this.data.updateCart(_this.cart.cart_contents);
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
    CartPage.prototype.submitCoupon = function (coupon) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('apply_coupon', {
                            coupon_code: coupon
                        }).subscribe(function (res) {
                            _this.couponMessage = res;
                            _this.getCart();
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
    CartPage.prototype.removeCoupon = function (coupon) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('remove_coupon', {
                            coupon: coupon
                        }).subscribe(function (res) {
                            _this.getCart();
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
    CartPage.prototype.addToCart = function (id, key) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.data.cartItem[key].quantity != undefined && this.data.cartItem[key].quantity == 0) {
                            this.data.cartItem[key].quantity = 0;
                        }
                        else {
                            this.data.cartItem[key].quantity += 1;
                        }
                        ;
                        if (this.data.cart[id] != undefined && this.data.cart[id] == 0) {
                            this.data.cart[id] = 0;
                        }
                        else {
                            this.data.cart[id] += 1;
                        }
                        ;
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpParams"]();
                        params = params.set('cart[' + key + '][qty]', this.data.cartItem[key].quantity);
                        params = params.set('_wpnonce', this.cart.cart_nonce);
                        params = params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
                        params = params.set('update_cart', 'Update Cart');
                        return [4 /*yield*/, this.api.updateCart('/cart/', params).subscribe(function (res) {
                                console.log(res);
                                _this.cart = res;
                                _this.data.updateCart(_this.cart.cart_contents);
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
    CartPage.prototype.deleteFromCart = function (id, key) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var params;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.data.cartItem[key].quantity != undefined && this.data.cartItem[key].quantity == 0) {
                            this.data.cartItem[key].quantity = 0;
                        }
                        else {
                            this.data.cartItem[key].quantity -= 1;
                        }
                        ;
                        if (this.data.cart[id] != undefined && this.data.cart[id] == 0) {
                            this.data.cart[id] = 0;
                        }
                        else {
                            this.data.cart[id] -= 1;
                        }
                        ;
                        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpParams"]();
                        params = params.set('cart[' + key + '][qty]', this.data.cartItem[key].quantity);
                        params = params.set('_wpnonce', this.cart.cart_nonce);
                        params = params.set('_wp_http_referer', this.config.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
                        params = params.set('update_cart', 'Update Cart');
                        return [4 /*yield*/, this.api.updateCart('/cart/', params).subscribe(function (res) {
                                console.log(res);
                                _this.cart = res;
                                _this.data.updateCart(_this.cart.cart_contents);
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
    //----------Rewrad-----------------//
    CartPage.prototype.redeem = function () {
        var _this = this;
        // wc_points_rewards_apply_discount_amount: 
        // wc_points_rewards_apply_discount: Apply Discount
        this.api.postItem('ajax_maybe_apply_discount').subscribe(function (res) {
            console.log(res);
            _this.getCart();
        });
    };
    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.page.html */ "./src/app/cart/cart.page.html"),
            styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_5__["Config"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_6__["Data"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_settings__WEBPACK_IMPORTED_MODULE_7__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _data_product__WEBPACK_IMPORTED_MODULE_9__["Product"]])
    ], CartPage);
    return CartPage;
}());



/***/ })

}]);
//# sourceMappingURL=cart-cart-module.js.map