(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./src/app/account/account.module.ts":
/*!*******************************************!*\
  !*** ./src/app/account/account.module.ts ***!
  \*******************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account.page */ "./src/app/account/account.page.ts");








var AccountPageModule = /** @class */ (function () {
    function AccountPageModule() {
    }
    AccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _account_page__WEBPACK_IMPORTED_MODULE_7__["AccountPage"] }])
            ],
            declarations: [_account_page__WEBPACK_IMPORTED_MODULE_7__["AccountPage"]]
        })
    ], AccountPageModule);
    return AccountPageModule;
}());



/***/ }),

/***/ "./src/app/account/account.page.html":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n    <ion-grid class=\"my-account-header\">\n        <ion-row>\n            <ion-col>\n                <ion-item color=\"transperant\" lines=\"none\">\n                    <ion-icon class=\"icon-header-icon ion-margin-end\" name=\"person\" slot=\"start\"></ion-icon>\n                    <ion-label class=\"account-name\">{{\"Account\" | translate}}</ion-label>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-row class=\"header-menus\" justify-content-between=\"\">\n            <ion-col>\n                <ion-item color=\"transperant\" lines=\"none\" (click)=\"goTo('tabs/account/wishlist')\" *ngIf=\"settings.customer?.id\" class=\"ion-activatable\">\n                    <ion-icon class=\"ion-margin-end\" name=\"heart\" slot=\"start\"></ion-icon>\n                    <ion-label>{{\"Wishlist\" | translate}}</ion-label>\n                </ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item color=\"transperant\" lines=\"none\" (click)=\"goTo('tabs/account/wallet')\" *ngIf=\"settings.customer?.id && settings.settings?.enable_wallet\" class=\"ion-activatable\">\n                    <ion-icon class=\"ion-margin-end\" name=\"wallet\" slot=\"start\"></ion-icon>\n                    <ion-label>{{\"Wallet\" | translate}}</ion-label>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-header>\n<ion-content>\n    <ion-list>\n        <ion-item (click)=\"goTo('tabs/account/login')\" lines=\"inset\" *ngIf=\"!settings.customer?.id\" class=\"ion-activatable\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"log-in\" mode=\"md\" slot=\"start\"></ion-icon>\n              <ion-label>{{\"Login\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n        <ion-item (click)=\"goTo('tabs/account/register')\" lines=\"inset\" *ngIf=\"!settings.customer?.id\" class=\"ion-activatable\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"person\" slot=\"start\"></ion-icon>\n            <ion-label>{{\"Register\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n        <ion-item (click)=\"goTo('tabs/account/points')\" lines=\"inset\" *ngIf=\"settings.reward\" class=\"ion-activatable\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"cash\" slot=\"start\"></ion-icon>\n            <ion-label>{{\"Points\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n        <ion-item (click)=\"goTo('tabs/account/address')\" lines=\"inset\" *ngIf=\"settings.customer?.id\" class=\"ion-activatable\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"pin\" slot=\"start\"></ion-icon>\n            <ion-label>{{\"Address\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n        <ion-item (click)=\"goTo('tabs/account/orders')\" lines=\"inset\" *ngIf=\"settings.customer?.id\" class=\"ion-activatable\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"document\" slot=\"start\"></ion-icon>\n            <ion-label>{{\"Orders\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n        <a href=\"https://wa.me/{{settings.settings?.whatsapp_number}}\">\n       <ion-item lines=\"inset\" class=\"ion-activatable\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"logo-whatsapp\" slot=\"start\"></ion-icon>\n            <ion-label>{{\"Whatsapp us\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n        </a>\n        <ion-item (click)=\"email(settings?.settings?.support_email)\" *ngIf=\"settings?.settings?.support_email\" lines=\"inset\" class=\"ion-activatable\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"mail\" slot=\"start\"></ion-icon>\n            <ion-label>{{\"Email us\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n\n        <ion-item lines=\"inset\" (click)=\"goTo('tabs/account/map')\" class=\"ion-activatable\" *ngIf=\"settings.settings?.switchLocations\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"compass\" slot=\"start\"></ion-icon>\n            <ion-label>{{\"Locations\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"inset\" class=\"ion-activatable\" (click)=\"shareApp()\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"share-alt\" slot=\"start\"></ion-icon>\n            <ion-label>{{\"Invite Friends\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"inset\" class=\"ion-activatable\" (click)=\"rateApp()\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"star\" slot=\"start\"></ion-icon>\n            <ion-label>{{\"Rate us\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"inset\" (click)=\"goTo('tabs/account/blogs')\" lines=\"inset\" class=\"ion-activatable\">\n          <ion-icon class=\"icon-start ion-margin-end\" name=\"document\" slot=\"start\"></ion-icon>\n        <ion-label>{{\"Blog\" | translate}}</ion-label>\n           <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n      <ion-item *ngIf=\"settings.languages?.length\" lines=\"inset\" (click)=\"goTo('tabs/account/setting')\" lines=\"inset\" class=\"ion-activatable\">\n\n        <ion-label>{{\"Language\" | translate}}</ion-label>\n           <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n      </ion-item>\n        <ion-item *ngIf=\"settings.languages?.length\" lines=\"inset\" (click)=\"goTo('tabs/account/setting')\" lines=\"inset\" class=\"ion-activatable\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"globe\" slot=\"start\"></ion-icon>\n            <ion-label>{{\"Language\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n\n        <div *ngFor=\"let page of settings.pages\">\n        <ion-item lines=\"inset\" *ngIf=\"page.url\" (click)=\"goTo('/tabs/account/post/'+page.url)\" lines=\"inset\" class=\"ion-activatable\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"document\" slot=\"start\"></ion-icon>\n            <ion-label>{{page.title}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n        </div>\n        <ion-item lines=\"inset\" class=\"ion-activatable\" (click)=\"log_out()\" *ngIf=\"settings.customer?.id\">\n            <ion-icon class=\"icon-start ion-margin-end\" name=\"log-out\" mode=\"md\" slot=\"start\"></ion-icon>\n            <ion-label>{{\"Logout\" | translate}}</ion-label>\n            <ion-icon name=\"arrow-forward\" mode=\"ios\" color=\"medium\"></ion-icon>\n        </ion-item>\n      </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/account/account.page.scss":
/*!*******************************************!*\
  !*** ./src/app/account/account.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-start {\n  padding: 6px;\n  background-color: var(--account-header, #36454f);\n  color: var(--account-header-text, #000);\n  border-radius: 50%;\n  font-size: 15px; }\n\n.my-account-header {\n  background-color: var(--account-header, #36454f);\n  color: var(--account-header-text, #000);\n  padding-top: 20px; }\n\n.my-account-header .account-name {\n    font-size: 22px;\n    font-weight: 600;\n    color: var(--account-header-text, #000); }\n\n.my-account-header .header-menus ion-item {\n    color: var(--account-header-text, #000); }\n\n.my-account-header .header-menus ion-icon {\n    margin-right: 10px; }\n\n.icon-header-icon {\n  padding: 15px;\n  background-color: var(--account-header-text, #000);\n  border-radius: 50%;\n  font-size: xx-large;\n  color: var(--account-header, #36454f);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\nion-list a {\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heW1hbmVsc2hhcmthd3kvUHJvZ3JhbW1pbmcvUHJvamVjdHMvSW9uaWNfc29oYXIvc3JjL2FwcC9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLGdEQUFnRDtFQUNoRCx1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxnREFBZ0Q7RUFDaEQsdUNBQXVDO0VBQ3ZDLGlCQUFpQixFQUFBOztBQUhyQjtJQUtRLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUNBQXVDLEVBQUE7O0FBUC9DO0lBV1ksdUNBQXVDLEVBQUE7O0FBWG5EO0lBY1ksa0JBQWtCLEVBQUE7O0FBSTlCO0VBQ0ksYUFBYTtFQUNiLGtEQUFrRDtFQUNsRCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQywrR0FBK0csRUFBQTs7QUFFbkg7RUFFUSxrQ0FBMEI7VUFBMUIsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tc3RhcnQge1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NvdW50LWhlYWRlciwgIzM2NDU0Zik7IC8vIFVuQ29tbWVudCB0aGlzIHRvIGFkZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIGljb25cbiAgICBjb2xvcjogdmFyKC0tYWNjb3VudC1oZWFkZXItdGV4dCwgIzAwMCk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyAvLyBUdW5lIHRoaXMgdG8gYWRkIHJvdW5kZWQgY29ybmVyIHdoZW4gYWRkZWQgYmFja2dyb3VuZCBjb2xvclxuICAgIGZvbnQtc2l6ZTogMTVweDsgLy8gQWRqdXN0IHRoZSBzaXplIG9mIHRoZSBpY29uXG59XG4ubXktYWNjb3VudC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY291bnQtaGVhZGVyLCAjMzY0NTRmKTtcbiAgICBjb2xvcjogdmFyKC0tYWNjb3VudC1oZWFkZXItdGV4dCwgIzAwMCk7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgLmFjY291bnQtbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWFjY291bnQtaGVhZGVyLXRleHQsICMwMDApO1xuICAgIH1cbiAgICAuaGVhZGVyLW1lbnVzIHtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY291bnQtaGVhZGVyLXRleHQsICMwMDApO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5pY29uLWhlYWRlci1pY29uIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY291bnQtaGVhZGVyLXRleHQsICMwMDApO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgIGNvbG9yOiB2YXIoLS1hY2NvdW50LWhlYWRlciwgIzM2NDU0Zik7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuaW9uLWxpc3Qge1xuICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/account/account.page.ts":
/*!*****************************************!*\
  !*** ./src/app/account/account.page.ts ***!
  \*****************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/app-rate/ngx */ "./node_modules/@ionic-native/app-rate/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../config */ "./src/app/config.ts");









var AccountPage = /** @class */ (function () {
    function AccountPage(config, api, navCtrl, settings, platform, appRate, emailComposer, socialSharing) {
        this.config = config;
        this.api = api;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.platform = platform;
        this.appRate = appRate;
        this.emailComposer = emailComposer;
        this.socialSharing = socialSharing;
    }
    AccountPage.prototype.ngOnInit = function () {
    };
    AccountPage.prototype.goTo = function (path) {
        this.navCtrl.navigateForward(path);
    };
    AccountPage.prototype.log_out = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.settings.customer.id = undefined;
                        this.settings.vendor = false;
                        this.settings.wishlist = [];
                        return [4 /*yield*/, this.api.postItem('logout').subscribe(function (res) { }, function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AccountPage.prototype.rateApp = function () {
        if (this.platform.is('cordova')) {
            this.appRate.preferences.storeAppURL = {
                ios: this.settings.settings.rate_app_ios_id,
                android: this.settings.settings.rate_app_android_id,
                windows: 'ms-windows-store://review/?ProductId=' + this.settings.settings.rate_app_windows_id
            };
            this.appRate.promptForRating(true);
        }
    };
    AccountPage.prototype.shareApp = function () {
        if (this.platform.is('cordova')) {
            var url = '';
            if (this.platform.is('android'))
                url = this.settings.settings.share_app_android_link;
            else
                url = this.settings.settings.share_app_ios_link;
            var options = {
                message: '',
                subject: '',
                files: ['', ''],
                url: url,
                chooserTitle: ''
            };
            this.socialSharing.shareWithOptions(options);
        }
    };
    AccountPage.prototype.email = function (contact) {
        var email = {
            to: contact,
            attachments: [],
            subject: '',
            body: '',
            isHtml: true
        };
        this.emailComposer.open(email);
    };
    AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.page.html */ "./src/app/account/account.page.html"),
            styles: [__webpack_require__(/*! ./account.page.scss */ "./src/app/account/account.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_config__WEBPACK_IMPORTED_MODULE_8__["Config"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_5__["AppRate"], _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_7__["EmailComposer"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"]])
    ], AccountPage);
    return AccountPage;
}());



/***/ })

}]);
//# sourceMappingURL=account-account-module.js.map