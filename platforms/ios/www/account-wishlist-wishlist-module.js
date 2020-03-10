(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-wishlist-wishlist-module"],{

/***/ "./src/app/account/wishlist/wishlist.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/account/wishlist/wishlist.module.ts ***!
  \*****************************************************/
/*! exports provided: WishlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function() { return WishlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _wishlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wishlist.page */ "./src/app/account/wishlist/wishlist.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var routes = [
    {
        path: '',
        component: _wishlist_page__WEBPACK_IMPORTED_MODULE_6__["WishlistPage"]
    }
];
var WishlistPageModule = /** @class */ (function () {
    function WishlistPageModule() {
    }
    WishlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_6__["WishlistPage"]]
        })
    ], WishlistPageModule);
    return WishlistPageModule;
}());



/***/ }),

/***/ "./src/app/account/wishlist/wishlist.page.html":
/*!*****************************************************!*\
  !*** ./src/app/account/wishlist/wishlist.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios'>\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Wishlist\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"wishlist\">\n\n<div class=\"spinner\" *ngIf=\"!wishlist && settings.customer?.id\"><ion-spinner> </ion-spinner></div>\n\n<div *ngIf=\"!settings.customer?.id\" class=\"empty\">\n  <ion-icon name=\"heart-empty\"></ion-icon>\n</div>\n\n<div *ngIf=\"settings.customer?.id\">\n    <div *ngIf=\"wishlist\">\n        <div *ngIf=\"!wishlist.length\" text-center class=\"empty\">\n            <ion-icon name=\"heart-empty\"></ion-icon>\n        </div>\n        <div *ngIf=\"wishlist.length\">\n            <ion-item *ngFor=\"let item of wishlist\">\n                <ion-thumbnail slot=\"start\" (click)=\"getProduct(item.id)\">\n                    <img *ngIf=\"item.images?.length\" src=\"{{item.images[0].src}}\">\n                </ion-thumbnail>\n                <ion-label class=\"name-label\" (click)=\"getProduct(item.id)\">\n                    <ion-text text-wrap>{{item.name}}</ion-text>\n                    <p class=\"price\">\n                    <span class=\"price\">{{1*item.price | currency:settings.currency:symbol:'1.2-2'}}</span>\n                    <span *ngIf=\"item.sale_price\" class=\"special-price\"><del>{{1*item.sale_price | currency:settings.currency:symbol:'1.2-2'}}</del></span>\n                    </p>\n                </ion-label>\n                <ion-button fill=\"clear\" (click)=\"removeFromWishlist(item.id)\" class=\"trash\"><ion-icon name=\"close\" style=\"font-size:22px;\"></ion-icon></ion-button>\n\n            </ion-item>\n        </div>\n    </div>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/account/wishlist/wishlist.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/account/wishlist/wishlist.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wishlist ion-thumbnail {\n  height: auto;\n  width: 100px; }\n\n.wishlist .empty {\n  margin-top: 50px;\n  text-align: center; }\n\n.wishlist .empty ion-icon {\n    font-size: 7.2em; }\n\n.wishlist .empty h4, .wishlist .empty h5 {\n    font-size: 15px;\n    margin: 10px 20px; }\n\n.wishlist .price {\n  font-weight: bold;\n  font-size: 14px; }\n\n.wishlist .special-price {\n  padding-left: 5px;\n  font-size: 12px;\n  font-weight: 400; }\n\n.wishlist ion-text {\n  font-size: 15px; }\n\n.name-label {\n  margin-right: 16px; }\n\n.name-label ion-button {\n    --box-shadow: none;\n    height: 26px;\n    width: 26px;\n    --padding-start: 0;\n    --padding-end: 0; }\n\n.name-label ion-button ion-icon {\n      font-size: 22px; }\n\n.trash {\n  position: absolute;\n  top: 16px;\n  right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC93aXNobGlzdC9DOlxcZGF0YVxcd29ya1xcQ2xpZW50c1xcZ2hhc3NhblxcaW9uaWM0Q29tbWVyY2VBUFBcXGFwcC9zcmNcXGFwcFxcYWNjb3VudFxcd2lzaGxpc3RcXHdpc2hsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLFlBQVk7RUFDWixZQUFZLEVBQUE7O0FBSHBCO0VBTVEsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQVAxQjtJQVNZLGdCQUFnQixFQUFBOztBQVQ1QjtJQWFZLGVBQWU7SUFDZixpQkFBaUIsRUFBQTs7QUFkN0I7RUFrQlEsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFuQnZCO0VBc0JRLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBeEJ4QjtFQTRCUSxlQUFlLEVBQUE7O0FBSXZCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBSVEsa0JBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFnQjtJQUNoQixnQkFBYyxFQUFBOztBQVJ0QjtNQVdZLGVBQWUsRUFBQTs7QUFNM0I7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvd2lzaGxpc3Qvd2lzaGxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpc2hsaXN0IHtcbiAgICBpb24tdGh1bWJuYWlsIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuICAgIC5lbXB0eSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiA3LjJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGg0LCBoNXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5wcmljZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5zcGVjaWFsLXByaWNlIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG5cbiAgICBpb24tdGV4dHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbn1cblxuLm5hbWUtbGFiZWx7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuXG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XG5cbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLnRyYXNoe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE2cHg7XG4gICAgcmlnaHQ6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/account/wishlist/wishlist.page.ts":
/*!***************************************************!*\
  !*** ./src/app/account/wishlist/wishlist.page.ts ***!
  \***************************************************/
/*! exports provided: WishlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPage", function() { return WishlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _data_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../data/product */ "./src/app/data/product.ts");







var WishlistPage = /** @class */ (function () {
    function WishlistPage(api, router, settings, loadingController, navCtrl, route, productData) {
        this.api = api;
        this.router = router;
        this.settings = settings;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.route = route;
        this.productData = productData;
    }
    WishlistPage.prototype.ngOnInit = function () {
    };
    WishlistPage.prototype.ionViewDidEnter = function () {
        if (this.settings.customer.id) {
            this.getWishlist();
        }
    };
    WishlistPage.prototype.getWishlist = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('get_wishlist').subscribe(function (res) {
                            _this.wishlist = res;
                            console.log(_this.wishlist);
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
    WishlistPage.prototype.removeFromWishlist = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.postItem('remove_wishlist', {
                            product_id: id
                        }).subscribe(function (res) {
                            _this.getWishlist();
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
    WishlistPage.prototype.getProduct = function (id) {
        this.productData.product = {};
        this.navCtrl.navigateForward('/tabs/account/wishlist/product/' + id);
    };
    WishlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.page.html */ "./src/app/account/wishlist/wishlist.page.html"),
            styles: [__webpack_require__(/*! ./wishlist.page.scss */ "./src/app/account/wishlist/wishlist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_settings__WEBPACK_IMPORTED_MODULE_5__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _data_product__WEBPACK_IMPORTED_MODULE_6__["Product"]])
    ], WishlistPage);
    return WishlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=account-wishlist-wishlist-module.js.map