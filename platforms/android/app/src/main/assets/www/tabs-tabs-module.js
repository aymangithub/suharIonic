(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");








var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_7__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.html":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\"  color=\"{{settings.theme.tabBar}}\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-label>{{'Home' | translate}}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"search\">\n      <ion-icon name=\"search\"></ion-icon>\n      <ion-label>{{'Search' | translate}}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"categories\">\n      <ion-icon name=\"apps\" mode=\"md\"></ion-icon>\n      <ion-label>{{'Category' | translate}}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"cart\">\n      <ion-icon name=\"basket\" mode=\"md\"></ion-icon>\n      <ion-label>{{'Cart' | translate}}</ion-label>\n      <ion-badge color=\"danger\" *ngIf=\"data.count != 0\">{{data.count}}</ion-badge>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"account\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>{{'Account' | translate}}</ion-label>\n    </ion-tab-button>\n    \n  </ion-tab-bar>\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-badge {\n  min-width: 18px;\n  font-size: 12px;\n  left: calc(50% + 3px); }\n\nion-label {\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heW1hbmVsc2hhcmthd3kvUHJvZ3JhbW1pbmcvUHJvamVjdHMvSW9uaWNfc29oYXIvc3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLGVBQWU7RUFDZixxQkFBcUIsRUFBQTs7QUFHekI7RUFDQyw4REFBOEQsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFkZ2Uge1xuICAgIG1pbi13aWR0aDogMThweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGVmdDogY2FsYyg1MCUgKyAzcHgpO1xufVxuXG5pb24tbGFiZWx7XG5cdGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../data/settings */ "./src/app/data/settings.ts");




var TabsPage = /** @class */ (function () {
    function TabsPage(data, settings) {
        this.data = data;
        this.settings = settings;
    }
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data__WEBPACK_IMPORTED_MODULE_2__["Data"], _data_settings__WEBPACK_IMPORTED_MODULE_3__["Settings"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: '../home/home.module#HomePageModule'
                    },
                    {
                        path: 'products/:id',
                        children: [
                            {
                                path: '',
                                loadChildren: '../products/products.module#ProductsPageModule'
                            },
                            {
                                path: 'product/:id',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: '../product/product.module#ProductPageModule'
                                    },
                                    {
                                        path: 'review/:id',
                                        loadChildren: '../review/review.module#ReviewPageModule'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'product/:id',
                        children: [
                            {
                                path: '',
                                loadChildren: '../product/product.module#ProductPageModule'
                            },
                            {
                                path: 'review/:id',
                                loadChildren: '../review/review.module#ReviewPageModule'
                            }
                        ]
                    },
                    {
                        path: 'vendor-products',
                        children: [
                            {
                                path: '',
                                loadChildren: '../products/products.module#ProductsPageModule'
                            },
                            {
                                path: 'product/:id',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: '../product/product.module#ProductPageModule'
                                    },
                                    {
                                        path: 'review/:id',
                                        loadChildren: '../review/review.module#ReviewPageModule'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'post/:id',
                        loadChildren: '../post/post.module#PostPageModule'
                    }
                ]
            },
            {
                path: 'categories',
                children: [
                    {
                        path: '',
                        loadChildren: '../categories/categories.module#CategoriesPageModule'
                    },
                    {
                        path: 'products/:id',
                        children: [
                            {
                                path: '',
                                loadChildren: '../products/products.module#ProductsPageModule'
                            },
                            {
                                path: 'product/:id',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: '../product/product.module#ProductPageModule'
                                    },
                                    {
                                        path: 'review/:id',
                                        loadChildren: '../review/review.module#ReviewPageModule'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'vendor-products',
                        children: [
                            {
                                path: '',
                                loadChildren: '../products/products.module#ProductsPageModule'
                            },
                            {
                                path: 'product/:id',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: '../product/product.module#ProductPageModule'
                                    },
                                    {
                                        path: 'review/:id',
                                        loadChildren: '../review/review.module#ReviewPageModule'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                path: 'search',
                children: [
                    {
                        path: '',
                        loadChildren: '../search/search.module#SearchPageModule'
                    },
                    {
                        path: 'product/:id',
                        children: [
                            {
                                path: '',
                                loadChildren: '../product/product.module#ProductPageModule'
                            },
                            {
                                path: 'review/:id',
                                loadChildren: '../review/review.module#ReviewPageModule'
                            }
                        ]
                    },
                    {
                        path: 'vendor-products',
                        children: [
                            {
                                path: '',
                                loadChildren: '../products/products.module#ProductsPageModule'
                            },
                            {
                                path: 'product/:id',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: '../product/product.module#ProductPageModule'
                                    },
                                    {
                                        path: 'review/:id',
                                        loadChildren: '../review/review.module#ReviewPageModule'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                path: 'cart',
                children: [
                    {
                        path: '',
                        loadChildren: '../cart/cart.module#CartPageModule'
                    },
                    {
                        path: 'address',
                        loadChildren: '../checkout/address/address.module#CheckoutAddressPageModule'
                    },
                    {
                        path: 'checkout',
                        loadChildren: '../checkout/checkout/checkout.module#CheckoutPageModule'
                    },
                    {
                        path: 'product/:id',
                        children: [
                            {
                                path: '',
                                loadChildren: '../product/product.module#ProductPageModule'
                            },
                            {
                                path: 'review/:id',
                                loadChildren: '../review/review.module#ReviewPageModule'
                            }
                        ]
                    }
                ]
            },
            {
                path: 'account',
                children: [
                    {
                        path: '',
                        loadChildren: '../account/account.module#AccountPageModule'
                    },
                    {
                        path: 'address',
                        children: [
                            {
                                path: '',
                                loadChildren: '../account/address/address.module#AddressPageModule'
                            },
                            {
                                path: 'edit-address',
                                loadChildren: '../account/edit-address/edit-address.module#EditAddressPageModule'
                            }
                        ]
                    },
                    {
                        path: 'register',
                        loadChildren: '../account/register/register.module#RegisterPageModule'
                    },
                    {
                        path: 'points',
                        loadChildren: '../account/points/points.module#PointsPageModule'
                    },
                    {
                        path: 'setting',
                        loadChildren: '../account/setting/setting.module#SettingPageModule'
                    },
                    {
                        path: 'wallet',
                        children: [
                            {
                                path: '',
                                loadChildren: '../account/wallet/wallet.module#WalletPageModule'
                            },
                            {
                                path: 'cart',
                                loadChildren: '../cart/cart.module#CartPageModule'
                            }
                        ]
                    },
                    {
                        path: 'post/:id',
                        loadChildren: '../post/post.module#PostPageModule'
                    },
                    {
                        path: 'map',
                        loadChildren: '../account/map/map.module#MapPageModule'
                    },
                    {
                        path: 'orders',
                        children: [
                            {
                                path: '',
                                loadChildren: '../account/orders/orders.module#OrdersPageModule'
                            },
                            {
                                path: 'order/:id',
                                loadChildren: '../account/order/order.module#OrderPageModule'
                            }
                        ]
                    },
                    {
                        path: 'login',
                        children: [
                            {
                                path: '',
                                loadChildren: '../account/login/login.module#LoginPageModule',
                            },
                            {
                                path: 'forgotten',
                                loadChildren: '../account/forgotten/forgotten.module#ForgottenPageModule'
                            }
                        ]
                    },
                    {
                        path: 'wishlist',
                        children: [
                            {
                                path: '',
                                loadChildren: '../account/wishlist/wishlist.module#WishlistPageModule'
                            },
                            {
                                path: 'product/:id',
                                children: [
                                    {
                                        path: '',
                                        loadChildren: '../product/product.module#ProductPageModule'
                                    },
                                    {
                                        path: 'review/:id',
                                        loadChildren: '../review/review.module#ReviewPageModule'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: 'blogs',
                        children: [
                            {
                                path: '',
                                loadChildren: '../account/blogs/blogs.module#BlogsPageModule',
                            },
                            {
                                path: 'blog/:id',
                                loadChildren: '../account/blog/blog.module#BlogPageModule'
                            }
                        ]
                    },
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map