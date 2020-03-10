(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-blogs-blogs-module"],{

/***/ "./src/app/account/blogs/blogs.module.ts":
/*!***********************************************!*\
  !*** ./src/app/account/blogs/blogs.module.ts ***!
  \***********************************************/
/*! exports provided: BlogsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsPageModule", function() { return BlogsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/pipe.module */ "./src/app/pipes/pipe.module.ts");
/* harmony import */ var _blogs_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blogs.page */ "./src/app/account/blogs/blogs.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");









var routes = [
    {
        path: '',
        component: _blogs_page__WEBPACK_IMPORTED_MODULE_7__["BlogsPage"]
    }
];
var BlogsPageModule = /** @class */ (function () {
    function BlogsPageModule() {
    }
    BlogsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _pipes_pipe_module__WEBPACK_IMPORTED_MODULE_6__["KeysPipeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_blogs_page__WEBPACK_IMPORTED_MODULE_7__["BlogsPage"]]
        })
    ], BlogsPageModule);
    return BlogsPageModule;
}());



/***/ }),

/***/ "./src/app/account/blogs/blogs.page.html":
/*!***********************************************!*\
  !*** ./src/app/account/blogs/blogs.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios' >\n  <ion-toolbar color=\"{{settings.theme.header}}\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/account\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{\"Blogs\" | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"blogs\">\n\n<div class=\"spinner\" *ngIf=\"!posts?.posts\"><ion-spinner> </ion-spinner></div>\n\n<div *ngIf=\"posts?.posts\">\n<div *ngIf=\"posts.posts.length == 0\" text-center class=\"empty\">\n  <ion-icon name=\"document\"></ion-icon>\n</div>\n\n\n<ion-card class=\"ion-activatable ion-focusable hydrated\" *ngFor=\"let post of posts.posts\" (click)=\"getDetail(post)\">\n  <div *ngIf=\"post.thumbnail_images?.medium?.url\">\n    <ion-img alt=\"\" src=\"{{post.thumbnail_images?.medium?.url}}\"></ion-img>\n  </div>\n  <div *ngIf=\"post.thumbnail_images?.full?.url && !post.thumbnail_images?.medium?.url\">\n    <ion-img alt=\"\" src=\"{{post.thumbnail_images?.full?.url}}\"></ion-img>\n  </div>\n  <ion-card-header>\n    <ion-card-subtitle>{{post.date | datepipe}}</ion-card-subtitle>\n    <ion-card-title>{{post.title}}</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content [innerHTML]=\"post.excerpt\">\n  </ion-card-content>\n</ion-card>\n\n<ion-infinite-scroll threshold=\"100px\" *ngIf=\"hasMoreItems && posts.posts.length\" (ionInfinite)=\"loadData($event)\">\n  <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\"\n    loadingText=\"Loading more data...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/account/blogs/blogs.page.scss":
/*!***********************************************!*\
  !*** ./src/app/account/blogs/blogs.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blogs a {\n  pointer-events: none;\n  cursor: default;\n  text-decoration: none; }\n\n.blogs .activated {\n  opacity: 0.4; }\n\n.blogs .empty {\n  margin-top: 50px;\n  text-align: center; }\n\n.blogs .empty ion-icon {\n    font-size: 7.2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9ibG9ncy9DOlxcZGF0YVxcd29ya1xcQ2xpZW50c1xcZ2hhc3NhblxcaW9uaWM0Q29tbWVyY2VBUFBcXGFwcC9zcmNcXGFwcFxcYWNjb3VudFxcYmxvZ3NcXGJsb2dzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YscUJBQXFCLEVBQUE7O0FBSjdCO0VBUVEsWUFBWSxFQUFBOztBQVJwQjtFQVdRLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFaMUI7SUFjWSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYmxvZ3MvYmxvZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2dzIHtcbiAgICBhIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAvL2NvbG9yOiAjMTExMTExO1xuICAgIH1cbiAgICAuYWN0aXZhdGVkIHtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cbiAgICAuZW1wdHkge1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNy4yZW07XG4gICAgICAgICAgICAvL2NvbG9yOiAjZWNlY2VjO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/account/blogs/blogs.page.ts":
/*!*********************************************!*\
  !*** ./src/app/account/blogs/blogs.page.ts ***!
  \*********************************************/
/*! exports provided: BlogsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsPage", function() { return BlogsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../data/post */ "./src/app/data/post.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../data/settings */ "./src/app/data/settings.ts");







var BlogsPage = /** @class */ (function () {
    function BlogsPage(api, router, post, settings, navCtrl) {
        this.api = api;
        this.router = router;
        this.post = post;
        this.settings = settings;
        this.navCtrl = navCtrl;
        this.posts = {};
        this.filter = {};
        this.results = {};
        this.hasMoreItems = true;
        this.filter.page = 1;
    }
    BlogsPage.prototype.ngOnInit = function () {
        this.getPosts();
    };
    BlogsPage.prototype.getPosts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.getPosts('/api/core/get_recent_posts/?page=' + this.filter.page).subscribe(function (res) {
                            if (res)
                                _this.posts = res;
                            else
                                _this.posts.posts = [];
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
    BlogsPage.prototype.loadData = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.filter.page = this.filter.page + 1;
                        return [4 /*yield*/, this.api.getPosts('/api/core/get_recent_posts/?page=' + this.filter.page).subscribe(function (res) {
                                _this.results = res;
                                _this.posts.posts.push.apply(_this.posts.posts, _this.results.posts);
                                event.target.complete();
                                if (_this.results.posts.length == 0)
                                    _this.hasMoreItems = false;
                            }, function (err) {
                                event.target.complete();
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BlogsPage.prototype.getDetail = function (post) {
        this.post.post.post = post;
        this.navCtrl.navigateForward('/tabs/account/blogs/blog/' + post.id);
    };
    BlogsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blogs',
            template: __webpack_require__(/*! ./blogs.page.html */ "./src/app/account/blogs/blogs.page.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./blogs.page.scss */ "./src/app/account/blogs/blogs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _data_post__WEBPACK_IMPORTED_MODULE_5__["Post"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], BlogsPage);
    return BlogsPage;
}());



/***/ })

}]);
//# sourceMappingURL=account-blogs-blogs-module.js.map