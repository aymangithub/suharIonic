(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "./src/app/product/md5.ts":
/*!********************************!*\
  !*** ./src/app/product/md5.ts ***!
  \********************************/
/*! exports provided: md5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "md5", function() { return md5; });
var md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};


/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.page */ "./src/app/product/product.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");








var ProductPageModule = /** @class */ (function () {
    function ProductPageModule() {
    }
    ProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"] }])
            ],
            declarations: [_product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]]
        })
    ], ProductPageModule);
    return ProductPageModule;
}());



/***/ }),

/***/ "./src/app/product/product.page.html":
/*!*******************************************!*\
  !*** ./src/app/product/product.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header mode='ios' class=\"product-header\" >\n   <ion-toolbar color=\"{{settings.theme.header}}\">\n      <ion-buttons slot=\"start\">\n         <ion-back-button defaultHref=\"/tabs/categories/products\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n         {{product?.name}}\n      </ion-title>\n      <ion-buttons slot=\"end\" (click)=\"share()\">\n         <ion-icon name=\"share\" style=\"margin-right: 8px;font-size: 23px\"></ion-icon>\n      </ion-buttons>\n   </ion-toolbar>\n</ion-header>\n<ion-content class=\"product\">\n   <div class=\"spinner\" *ngIf=\"!product.id\">\n      <ion-spinner> </ion-spinner>\n   </div>\n   <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"settings.settings?.enable_product_chat\">\n      <a href=\"https://wa.me/{{settings.settings?.whatsapp_number}}\">\n         <ion-fab-button size=\"small\" color=\"whatsapp\">\n            <ion-icon name=\"logo-whatsapp\"></ion-icon>\n         </ion-fab-button>\n      </a>\n   </ion-fab>\n   <div *ngIf=\"product.id\">\n      <ion-slides pager=\"true\" [options]=\"slideOpts\" *ngIf=\"!product.image\" dir=\"{{settings.dir}}\">\n      <ion-slide *ngFor=\"let item of product.images\">\n         <img src=\"{{item.src}}\"/>\n      </ion-slide>\n      </ion-slides>\n      <div *ngIf=\"product.image\">\n         <ion-img src=\"{{product.image}}\"></ion-img>\n      </div>\n      <ion-button color=\"danger\" class=\"stock\" *ngIf=\"product.stock_status == 'outofstock'\">{{\"No Stock\" | translate}}</ion-button>\n      <div class=\"product-details\">\n         <ion-item lines=\"none\">\n            <ion-label text-wrap>\n               {{product.name}}\n            </ion-label>\n            <ion-icon name=\"heart-empty\" class=\"heartempty onpress\" slot=\"end\" (click)=\"settings.addToWishlist(product.id)\" *ngIf=\"!settings.wishlist[product.id]\"></ion-icon>\n            <ion-icon name=\"md-heart\" class=\"heartempty onpress\" slot=\"end\" color=\"{{settings.theme.button}}\" (click)=\"settings.removeFromWishlist(product.id)\" *ngIf=\"settings.wishlist[product.id]\"></ion-icon>\n         </ion-item>\n\n         <!--WCMP-->\n         <ion-chip (click)='getDetail(product.vendor)' *ngIf=\"product.vendor\">\n         <ion-icon name=\"person\"></ion-icon>\n         <ion-label>{{\"SoldBy\" | translate }} - {{product.store_name}}</ion-label>\n         </ion-chip>\n         <ion-item lines=\"none\">\n            <ion-label *ngIf=\"product.sale_price\">\n               <span class=\"price\">{{product.sale_price | currency:settings.currency:symbol:'1.2-2'}}</span><span class=\"special-price\"><del>{{product.regular_price | currency:settings.currency:symbol:'1.2-2'}}</del></span>\n            </ion-label>\n            <ion-label *ngIf=\"!product.sale_price\">\n               <span class=\"price\">{{product.price | currency:settings.currency:symbol:'1.2-2'}}</span>\n            </ion-label>\n         </ion-item>\n         <div class=\"variation-block\" *ngIf=\"variations.length\">\n            <div *ngFor=\"let attribute of usedVariationAttributes\" class=\"variation-product\">\n               <h6 style=\"margin-left: 16px;font-size: 14px;\">{{\"Select\" | translate}} {{attribute.name}}</h6>\n               <div *ngIf=\"attribute.options.length\" class=\"option-box\">\n                  <ion-button class=\"option-button\" fill=\"outline\" color=\"{{settings.theme.button}}\" *ngFor=\"let option of attribute.options\" (click)=\"chooseVariation(attribute, option)\" [ngClass]=\"{'selected-option': attribute.selected == option}\">{{option}}</ion-button>\n               </div>\n            </div>\n         </div>\n\n         <!-- Product Addons -->\n         <div *ngIf=\"addonsList.length\">\n            <div *ngFor=\"let item of addonsList; let i = index\">\n               <ion-item lines=\"none\" *ngIf=\"item.description !== ''\"><ion-label>{{item.description}}</ion-label></ion-item>\n               <ion-item *ngIf=\"item.type == 'checkbox' || item.type == 'multiple_choice' || item.type == 'radiobutton'  || item.type == 'select'\" class=\"addons\" lines=\"none\">\n                  <ion-label>{{item.name}}</ion-label>\n                  <ion-select [(ngModel)]=\"item.selected\" multiple=\"true\" *ngIf=\"(item.type == 'checkbox' || item.type == 'multiple_choice') && item.options.length\">\n                  <ion-select-option *ngFor=\"let option of item.options\" value=\"{{option.label}}\">{{option.label}}<span *ngIf=\"option.price\"> + {{option.price | currency:settings.currency:true:'1.2-2'}}</span></ion-select-option>\n                  </ion-select>\n                  <ion-select [(ngModel)]=\"item.selected\" *ngIf=\"item.type == 'radiobutton' && item.options.length\">\n                  <ion-select-option *ngFor=\"let option of item.options\" value=\"{{option.label}}\">{{option.label}}<span *ngIf=\"option.price\"> + {{option.price | currency:settings.currency:true:'1.2-2'}}</span></ion-select-option>\n                  </ion-select>\n                  <ion-select [(ngModel)]=\"item.selected\" *ngIf=\"item.type == 'select' && item.options.length\">\n                  <ion-select-option *ngFor=\"let option of item.options\" value=\"{{option.label}}\">{{option.label}}<span *ngIf=\"option.price\"> + {{option.price | currency:settings.currency:true:'1.2-2'}}</span></ion-select-option>\n                  </ion-select>\n               </ion-item>\n               <div style=\"padding: 0 16px;\" *ngFor=\"let option of item.options; let j = index\">\n                  <div *ngIf=\"item.type == 'custom_textarea'\">\n                  <textarea [(ngModel)]=\"item.options[j].input\" placeholder=\"{{item.name}}\" type =\"text\" style=\"width: 100%; height: 80px;\"></textarea>\n                  </div>\n               </div>\n            </div>\n            <div *ngFor=\"let item of addonsList; let i = index\">\n               <div *ngFor=\"let option of item.options; let j = index\">\n                  <ion-item *ngIf=\"item.type == 'custom' && item.options.length\" class=\"addon-options\">\n                     <ion-label floating>{{option.label}} {{option.price}}</ion-label>\n                     <ion-input required type=\"text\" name=\"data\" [(ngModel)]=\"item.options[j].input\">\n                     </ion-input>\n                  </ion-item>\n               </div>\n            </div>\n            <div *ngFor=\"let item of addonsList; let i = index\">\n               <ion-item *ngIf=\"item.type == 'custom_text'\" class=\"addon-options\">\n                  <ion-label floating>{{item.name}} {{item.price}}</ion-label>\n                  <ion-input required type=\"text\" name=\"data\" [(ngModel)]=\"item.input\">\n                  </ion-input>\n               </ion-item>\n            </div>\n         </div>\n\n         <ion-item lines=\"none\" *ngIf=\"product.showPoints\">\n            <ion-label>Earn {{product.showPoints}} Royalty Points</ion-label>\n         </ion-item>\n         <ion-button *ngIf=\"product.type != 'external'\" class=\"add-to-cart-button\" color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" [disabled]=\"disableButton || product.stock_status == 'outofstock'\" (click)=\"addToCart()\">{{\"ADD TO CART\" | translate}}</ion-button>\n         <ion-button *ngIf=\"product.type == 'external'\" class=\"add-to-cart-button\" color=\"{{settings.theme.button}}\" expand=\"block\" fill=\"solid\" [disabled]=\"disableButton || product.stock_status == 'outofstock'\" (click)=\"buyExternalProduct(product.id)\">{{\"BUY NOW\" | translate}}</ion-button>\n         <ion-item *ngIf=\"product.short_description\">\n            <ion-label text-justify text-wrap [innerHTML]=\"product.short_description\">\n            </ion-label>\n         </ion-item>\n         <ion-item *ngIf=\"product.description\">\n            <ion-label text-justify text-wrap [innerHTML]=\"product.description\">\n            </ion-label>\n         </ion-item>\n      </div>\n      <div *ngIf=\"relatedProducts?.length\" class=\"related-products\">\n         <ion-list-header>\n            <ion-label>{{\"More like this\" | translate}}</ion-label>\n         </ion-list-header>\n         <div class=\"scroll-related-products\">\n            <div class=\"product\" *ngFor=\"let item of relatedProducts\" [style.width.px]=\"settings.dimensions.productSliderWidth\">\n            <ion-card class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\">\n               <ion-img (click)=\"goToProduct(item)\" alt=\"\" [style.height.px]=\"settings.dimensions.homeSliderHeight\" src=\"{{item?.images[0]?.src}}\"></ion-img><ion-icon name=\"heart-empty\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id)\"></ion-icon>\n               <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id)\"></ion-icon>\n               <ion-card-header (click)=\"goToProduct(item)\">\n                  <ion-card-subtitle mode=\"md\">{{item.name}}</ion-card-subtitle>\n               </ion-card-header>\n               <ion-card-content (click)=\"goToProduct(item)\">\n                  <p class=\"price\">\n                     <span class=\"regular-price\" *ngIf=\"!item.sale_price\">{{item.price | currency:settings.currency:symbol:'1.2-2'}}</span>\n                     <span class=\"regular-price\" *ngIf=\"item.sale_price\">{{item.sale_price | currency:settings.currency:symbol:'1.2-2'}}<span class=\"special-price\"><del>{{item.regular_price | currency:settings.currency:symbol:'1.2-2'}}</del></span></span>\n                  </p>\n               </ion-card-content>\n            </ion-card>\n         </div>\n      </div>\n   </div>\n   <div *ngIf=\"upsellProducts?.length\" class=\"related-products\">\n      <ion-list-header>\n         <ion-label>{{\"You might love\" | translate}}</ion-label>\n      </ion-list-header>\n      <div class=\"scroll-related-products\">\n         <div class=\"product\" *ngFor=\"let item of upsellProducts\" [style.width.px]=\"settings.dimensions.productSliderWidth\">\n         <ion-card class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\">\n            <ion-img alt=\"\" [style.height.px]=\"settings.dimensions.homeSliderHeight\" src=\"{{item?.images[0]?.src}}\"></ion-img>\n            <ion-icon name=\"heart-empty\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id)\"></ion-icon>\n            <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id)\"></ion-icon> \n            <ion-card-header (click)=\"goToProduct(item)\">\n               <ion-card-subtitle mode=\"md\">{{item.name}}</ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content (click)=\"goToProduct(item)\">\n               <p class=\"price\">\n                  <span class=\"regular-price\" *ngIf=\"!item.sale_price\">{{item.price | currency:settings.currency:symbol:'1.2-2'}}</span>\n                  <span class=\"regular-price\" *ngIf=\"item.sale_price\">{{item.sale_price | currency:settings.currency:symbol:'1.2-2'}}<span class=\"special-price\"><del>{{item.regular_price | currency:settings.currency:symbol:'1.2-2'}}</del></span></span>\n               </p>\n            </ion-card-content>\n         </ion-card>\n      </div>\n   </div>\n   </div>\n   <div *ngIf=\"crossSellProducts?.length\" class=\"related-products\">\n      <ion-list-header>\n         <ion-label>{{\"Recommended\" | translate}}</ion-label>\n      </ion-list-header>\n      <div class=\"scroll-related-products\">\n         <div class=\"product\" *ngFor=\"let item of crossSellProducts\" [style.width.px]=\"settings.dimensions.productSliderWidth\">\n         <ion-card class=\"ion-activatable ion-focusable hydrated {{settings.settings.product_shadow}}\" [style.border-radius.px]=\"settings.dimensions.productBorderRadius\">\n            <ion-img alt=\"\" (click)=\"goToProduct(item)\" [style.height.px]=\"settings.dimensions.homeSliderHeight\" src=\"{{item?.images[0]?.src}}\"></ion-img><ion-icon name=\"heart-empty\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"!settings.wishlist[item.id]\" (click)=\"settings.addToWishlist(item.id)\"></ion-icon>\n            <ion-icon name=\"heart\" color=\"{{settings.theme.button}}\" mode=\"md\" class=\"wishlist-button-grid\" *ngIf=\"settings.wishlist[item.id]\" (click)=\"settings.removeFromWishlist(item.id)\"></ion-icon>\n            <ion-card-header (click)=\"goToProduct(item)\">\n               <ion-card-subtitle mode=\"md\">{{item.name}}</ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content (click)=\"goToProduct(item)\">\n               <p class=\"price\">\n                  <span class=\"regular-price\" *ngIf=\"!item.sale_price\">{{item.price | currency:settings.currency:symbol:'1.2-2'}}</span>\n                  <span class=\"regular-price\" *ngIf=\"item.sale_price\">{{item.sale_price | currency:settings.currency:symbol:'1.2-2'}}<span class=\"special-price\"><del>{{item.regular_price | currency:settings.currency:symbol:'1.2-2'}}</del></span></span>\n               </p>\n            </ion-card-content>\n         </ion-card>\n      </div>\n   </div>\n   </div>\n   <ion-item (click)=\"getReviewsPage()\" *ngIf=\"reviews?.length\" class=\"review-item ion-activatable\">\n   <ion-label>{{reviews.length}} {{\"Customer Reviews\" | translate}}</ion-label>\n   <ion-icon name=\"ios-arrow-forward\" item-end></ion-icon>\n   </ion-item>\n   <div *ngFor=\"let item of reviews\">\n      <ion-item lines=\"none\">\n         <ion-avatar slot=\"start\">\n            <ion-img alt=\"\" src=\"https://www.gravatar.com/avatar/{{item.avatar}}\"></ion-img>\n         </ion-avatar>\n         <ion-label>\n            {{item.name}}\n            <span class=\"rating review-star\">\n            <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 1, half: item.rating == 0.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 2, half: item.rating == 1.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 3, half: item.rating == 2.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 4, half: item.rating == 3.5}\">&#x2605;</span> <span class=\"star-icon\" [ngClass]=\"{full: item.rating >= 5, half: item.rating == 4.5}\">&#x2605;</span></span>\n            <p>{{item.date_created | date:'MMM d, y hh:mm a'}}</p>\n         </ion-label>\n      </ion-item>\n      <ion-item>\n         <ion-label>\n            <p text-wrap>{{item.review}}</p>\n         </ion-label>\n      </ion-item>\n   </div>\n   </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/product/product.page.scss":
/*!*******************************************!*\
  !*** ./src/app/product/product.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-header .badge {\n  position: absolute;\n  margin-top: -10px;\n  margin-left: 9px; }\n\n.product-header .cart-icon {\n  font-size: 30px; }\n\nion-card-title {\n  font-size: 40px; }\n\nion-card-header {\n  padding: 10px; }\n\nion-card-content {\n  padding: 0; }\n\nion-card-content .price {\n    padding: 0 10px 10px 10px;\n    font-weight: bold;\n    font-size: 14px; }\n\nion-card-content .price .special-price {\n      padding-left: 5px;\n      font-size: 10px;\n      font-weight: 300; }\n\nion-card-subtitle {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 300;\n  font-size: small; }\n\n.product .product-details ion-chip {\n  margin-left: 10px; }\n\n.product .price {\n  font-weight: bold;\n  font-size: 16px; }\n\n.product .special-price {\n  padding-left: 5px;\n  font-size: 14px;\n  font-weight: 400; }\n\n.product .add-to-cart-button {\n  margin: 16px; }\n\n.product .variation-block {\n  margin: 13px 0px 0 0px; }\n\n.product .variation-block .variation-product {\n    margin-bottom: 5px; }\n\n.product .variation-block .variation-product ion-label {\n      color: #000; }\n\n.product .variation-block .variation-product .item {\n      border: 2px solid #fff;\n      background-color: #f9f9f9; }\n\n.product .variation-block .variation-product ion-select {\n      font-size: 12px;\n      color: #ffa41c; }\n\n.product .variation-block .variation-product .option-box {\n      padding: 0 10px; }\n\n.product .variation-block .variation-product .option-box .option-button {\n        color: #111111;\n        height: 1.8em;\n        --border-width: 1px;\n        font-weight: 400;\n        --border-radius: 25px;\n        font-size: 12px;\n        opacity: 0.5; }\n\n.product .variation-block .variation-product .option-box .selected-option {\n        --border-width: 2px;\n        font-weight: 600;\n        opacity: 1; }\n\n.product .variation-block .variation-product .option-box textarea {\n        border: 1px solid #f4f4f4;\n        border-radius: 3px;\n        width: 100%; }\n\n.product .related-products .price {\n  padding: 0 10px 10px 10px;\n  font-weight: bold;\n  font-size: 14px; }\n\n.product .related-products .price .special-price {\n    padding-left: 5px;\n    font-size: 10px;\n    font-weight: 300; }\n\n.product .related-products .related-item-name {\n  padding: 16px 0 0 0;\n  font-weight: 400; }\n\n.product .related-products .scroll-related-products {\n  padding: 16px 0;\n  overflow: auto;\n  white-space: nowrap; }\n\n.product .related-products .scroll-related-products .product {\n    display: inline-block;\n    text-decoration: none;\n    width: 50%;\n    margin: 0 0 0 10px; }\n\n.product .related-products .scroll-related-products .product:last-child {\n    margin-right: 10px; }\n\n@media (min-width: 481px) and (max-width: 768px) {\n    .product .related-products .scroll-related-products .product {\n      width: 33.333%; } }\n\n@media (min-width: 769px) and (max-width: 1024px) {\n    .product .related-products .scroll-related-products .product {\n      width: 25%; } }\n\n@media (min-width: 1025px) {\n    .product .related-products .scroll-related-products .product {\n      width: 20%; } }\n\n.product .related-products .scroll-related-products ion-img {\n    height: auto;\n    width: 100%; }\n\n.product .related-products .scroll-related-products ion-card {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    margin-left: 2px; }\n\n.product .review-star {\n  float: right; }\n\n.product .review-star .star-icon {\n    color: #f7f7f7;\n    font-size: 1em;\n    position: relative; }\n\n.product .review-star .star-icon.full:before {\n    color: #ffce00;\n    content: '\\2605';\n    position: absolute;\n    left: 0; }\n\n.product .review-star .star-icon.half:before {\n    color: #ffce00;\n    content: '\\2605';\n    position: absolute;\n    left: 0;\n    width: 50%;\n    overflow: hidden; }\n\n@-moz-document url-prefix() {\n  .product .review-star .star-icon {\n    font-size: 50px;\n    line-height: 34px; } }\n\n.onpress {\n  white-space: nowrap;\n  -webkit-transform: scale(1, 1);\n          transform: scale(1, 1);\n  -webkit-transition-timing-function: ease-in;\n          transition-timing-function: ease-in;\n  -webkit-transition: 0.3s;\n  transition: 0.3s; }\n\n.onpress:active {\n  -webkit-transition-timing-function: ease-out;\n          transition-timing-function: ease-out;\n  -webkit-transition: .3s;\n  transition: .3s;\n  -webkit-transform: scale(2, 2);\n          transform: scale(2, 2); }\n\n.review-item h2 {\n  font-size: 18px;\n  width: 100%; }\n\n.stock {\n  margin-left: 0px;\n  z-index: 5;\n  position: absolute;\n  --box-shadow: none;\n  left: 0px;\n  top: 80px;\n  width: 73px;\n  font-size: 10px;\n  height: 24px;\n  --border-radius: 0 10px 10px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heW1hbmVsc2hhcmthd3kvUHJvZ3JhbW1pbmcvUHJvamVjdHMvSW9uaWNfc29oYXIvc3JjL2FwcC9wcm9kdWN0L3Byb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBQTs7QUFKeEI7RUFPUSxlQUFlLEVBQUE7O0FBR3ZCO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxVQUFVLEVBQUE7O0FBRGQ7SUFHUSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBRWpCLGVBQWUsRUFBQTs7QUFOdkI7TUFTWSxpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGdCQUFnQixFQUFBOztBQUk1QjtFQUNJLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFHWSxpQkFBaUIsRUFBQTs7QUFIN0I7RUFPUSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQVJ2QjtFQVdRLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBYnhCO0VBZ0JRLFlBQVksRUFBQTs7QUFoQnBCO0VBbUJRLHNCQUFzQixFQUFBOztBQW5COUI7SUFzQlksa0JBQWtCLEVBQUE7O0FBdEI5QjtNQXdCZ0IsV0FBVyxFQUFBOztBQXhCM0I7TUEyQmdCLHNCQUFzQjtNQUN0Qix5QkFBeUIsRUFBQTs7QUE1QnpDO01BK0JnQixlQUFlO01BQ2YsY0FBYyxFQUFBOztBQWhDOUI7TUFtQ2dCLGVBQWUsRUFBQTs7QUFuQy9CO1FBcUNvQixjQUFjO1FBQ2QsYUFBYTtRQUNiLG1CQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHFCQUFnQjtRQUNoQixlQUFlO1FBQ2YsWUFBWSxFQUFBOztBQTNDaEM7UUE4Q29CLG1CQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLFVBQVUsRUFBQTs7QUFoRDlCO1FBbURvQix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLFdBQVcsRUFBQTs7QUFyRC9CO0VBNERZLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFFakIsZUFBZSxFQUFBOztBQS9EM0I7SUFrRWdCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7O0FBcEVoQztFQXdFWSxtQkFBbUI7RUFFbkIsZ0JBQWdCLEVBQUE7O0FBMUU1QjtFQTZFWSxlQUFlO0VBRWYsY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQWhGL0I7SUFrRmdCLHFCQUFxQjtJQUVyQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGtCQUFrQixFQUFBOztBQXRGbEM7SUF5RmdCLGtCQUNKLEVBQUE7O0FBQ0E7SUEzRlo7TUE2Rm9CLGNBQWMsRUFBQSxFQUNqQjs7QUFFTDtJQWhHWjtNQWtHb0IsVUFBVSxFQUFBLEVBQ2I7O0FBRUw7SUFyR1o7TUF1R29CLFVBQVUsRUFBQSxFQUNiOztBQXhHakI7SUEyR2dCLFlBQVk7SUFDWixXQUFXLEVBQUE7O0FBNUczQjtJQStHZ0IsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsZ0JBQWdCLEVBQUE7O0FBbEhoQztFQXVIUSxZQUFZLEVBQUE7O0FBdkhwQjtJQXlIWSxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQixFQUFBOztBQTNIOUI7SUE4SFksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsT0FBTyxFQUFBOztBQWpJbkI7SUFvSVksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFVBQVU7SUFDVixnQkFBZ0IsRUFBQTs7QUFFcEI7RUEzSVI7SUE2SWdCLGVBQWU7SUFDZixpQkFBaUIsRUFBQSxFQUNwQjs7QUFJYjtFQUNJLG1CQUFtQjtFQUNuQiw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLDJDQUFtQztVQUFuQyxtQ0FBbUM7RUFDbkMsd0JBQWdCO0VBQWhCLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLDRDQUFvQztVQUFwQyxvQ0FBb0M7RUFDcEMsdUJBQWU7RUFBZixlQUFlO0VBQ2YsOEJBQXNCO1VBQXRCLHNCQUFzQixFQUFBOztBQUUxQjtFQUVRLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBR25CO0VBQ0ksZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWE7RUFDYixTQUFTO0VBQ1QsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLDhCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWhlYWRlciB7XG4gICAgLmJhZGdlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgICB9XG4gICAgLmNhcnQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG59XG5pb24tY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xufVxuaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuaW9uLWNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZzogMDtcbiAgICAucHJpY2Uge1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgLy9jb2xvcjogIzAwMDAwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAuc3BlY2lhbC1wcmljZSB7XG4gICAgICAgICAgICAvL2NvbG9yOiAjODY4Njg2O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICB9XG4gICAgfVxufVxuaW9uLWNhcmQtc3VidGl0bGUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgLy9jb2xvcjogYmxhY2s7XG59XG4ucHJvZHVjdCB7XG4gICAgLnByb2R1Y3QtZGV0YWlscyB7XG4gICAgICAgIGlvbi1jaGlwIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5wcmljZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIC5zcGVjaWFsLXByaWNlIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gICAgLmFkZC10by1jYXJ0LWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMTZweDtcbiAgICB9XG4gICAgLnZhcmlhdGlvbi1ibG9jayB7XG4gICAgICAgIG1hcmdpbjogMTNweCAwcHggMCAwcHg7XG4gICAgICAgIC8vdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAudmFyaWF0aW9uLXByb2R1Y3Qge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmE0MWM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAub3B0aW9uLWJveCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgICAgIC5vcHRpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMxMTExMTE7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS44ZW07XG4gICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zZWxlY3RlZC1vcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNGY0ZjQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5yZWxhdGVkLXByb2R1Y3RzIHtcbiAgICAgICAgLnByaWNlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIC8vY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAuc3BlY2lhbC1wcmljZSB7XG4gICAgICAgICAgICAgICAgLy9jb2xvcjogIzg2ODY4NjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucmVsYXRlZC1pdGVtLW5hbWUge1xuICAgICAgICAgICAgcGFkZGluZzogMTZweCAwIDAgMDtcbiAgICAgICAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG4gICAgICAgIC5zY3JvbGwtcmVsYXRlZC1wcm9kdWN0cyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6ICNmZmZmZjtcbiAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIC5wcm9kdWN0IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgLy9jb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAwIDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvZHVjdDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgLnByb2R1Y3Qge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzMuMzMzJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgICAgICAucHJvZHVjdCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAgICAgICAgICAgICAgIC5wcm9kdWN0IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24taW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5yZXZpZXctc3RhciB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgLnN0YXItaWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogI2Y3ZjdmNztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5zdGFyLWljb24uZnVsbDpiZWZvcmUge1xuICAgICAgICAgICAgY29sb3I6ICNmZmNlMDA7XG4gICAgICAgICAgICBjb250ZW50OiAnXFwyNjA1JztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXItaWNvbi5oYWxmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmY2UwMDtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdcXDI2MDUnO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gICAgICAgICAgICAuc3Rhci1pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4ub25wcmVzcyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG4ub25wcmVzczphY3RpdmUge1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICB0cmFuc2l0aW9uOiAuM3M7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyLCAyKTtcbn1cbi5yZXZpZXctaXRlbSB7XG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbi5zdG9jayB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICB6LWluZGV4OiA1O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogODBweDtcbiAgICB3aWR0aDogNzNweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/product/product.page.ts":
/*!*****************************************!*\
  !*** ./src/app/product/product.page.ts ***!
  \*****************************************/
/*! exports provided: ProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPage", function() { return ProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data */ "./src/app/data.ts");
/* harmony import */ var _data_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/settings */ "./src/app/data/settings.ts");
/* harmony import */ var _data_product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/product */ "./src/app/data/product.ts");
/* harmony import */ var _md5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./md5 */ "./src/app/product/md5.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _data_vendor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/vendor */ "./src/app/data/vendor.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");














var ProductPage = /** @class */ (function () {
    function ProductPage(translate, toastController, socialSharing, modalCtrl, api, data, productData, settings, router, loadingController, navCtrl, alertController, route, vendor, iab) {
        this.translate = translate;
        this.toastController = toastController;
        this.socialSharing = socialSharing;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.data = data;
        this.productData = productData;
        this.settings = settings;
        this.router = router;
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.route = route;
        this.vendor = vendor;
        this.iab = iab;
        this.filter = {};
        this.usedVariationAttributes = [];
        this.options = {};
        this.variations = [];
        this.relatedProducts = [];
        this.upsellProducts = [];
        this.crossSellProducts = [];
        this.reviews = [];
        this.cart = {};
        this.disableButton = false;
        this.addonsList = []; //ADDONS
        this.lan = {};
        this.filter.page = 1;
        this.quantity = "1";
    }
    ProductPage.prototype.getReviewsPage = function () {
        this.navCtrl.navigateForward(this.router.url + '/review/' + this.product.id);
    };
    ProductPage.prototype.getProduct = function () {
        var _this = this;
        this.api.getItem('products/' + this.id).subscribe(function (res) {
            _this.product = res;
            _this.handleProduct();
        }, function (err) {
            console.log(err);
        });
    };
    ProductPage.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.get(['Oops!', 'Please Select', 'Please wait', 'Options', 'Option', 'Select', 'Item added to cart']).subscribe(function (translations) {
            _this.lan.oops = translations['Oops!'];
            _this.lan.PleaseSelect = translations['Please Select'];
            _this.lan.Pleasewait = translations['Please wait'];
            _this.lan.options = translations['Options'];
            _this.lan.option = translations['Option'];
            _this.lan.select = translations['Select'];
            _this.lan.addToCart = translations['Item added to cart'];
        });
        this.product = this.productData.product;
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.product.id)
            this.handleProduct();
        else
            this.getProduct();
    };
    ProductPage.prototype.handleProduct = function () {
        var _this = this;
        /* Reward Points */
        if (this.settings.settings.switchRewardPoints && this.product != undefined && this.product.meta_data != undefined)
            this.product.meta_data.forEach(function (item) {
                if (item.key == '_wc_points_earned') {
                    _this.product.showPoints = item.value;
                }
            });
        /* Product Addons */
        if (this.settings.settings.switchAddons)
            this.getAddons();
        this.usedVariationAttributes = this.product.attributes.filter(function (attribute) {
            return attribute.variation === true;
        });
        if ((this.product.type === 'variable') && this.product.variations.length) {
            this.getVariationProducts();
        }
        this.getRelatedProducts();
        this.getUpsellProducts();
        this.getCrossSellProducts();
        this.getReviews();
    };
    ProductPage.prototype.getVariationProducts = function () {
        var _this = this;
        this.api.getItem('products/' + this.product.id + '/variations').subscribe(function (res) {
            _this.variations = res;
        }, function (err) { });
    };
    ProductPage.prototype.getRelatedProducts = function () {
        var _this = this;
        if (this.product.related_ids !== 0) {
            var filter = [];
            for (var item in this.product.related_ids) {
                filter['include[' + item + ']'] = this.product.related_ids[item];
            }
            this.api.getItem('products', filter).subscribe(function (res) {
                _this.relatedProducts = res;
            }, function (err) { });
        }
    };
    ProductPage.prototype.getUpsellProducts = function () {
        var _this = this;
        if (this.product.upsell_ids != 0) {
            var filter = [];
            for (var item in this.product.upsell_ids) {
                filter['include[' + item + ']'] = this.product.upsell_ids[item];
            }
            this.api.getItem('products', filter).subscribe(function (res) {
                _this.upsellProducts = res;
            }, function (err) { });
        }
    };
    ProductPage.prototype.getCrossSellProducts = function () {
        var _this = this;
        if (this.product.cross_sell_ids != 0) {
            var filter = [];
            for (var item in this.product.cross_sell_ids) {
                filter['include[' + item + ']'] = this.product.cross_sell_ids[item];
            }
            this.api.getItem('products', filter).subscribe(function (res) {
                _this.crossSellProducts = res;
            }, function (err) { });
        }
    };
    ProductPage.prototype.getReviews = function () {
        var _this = this;
        this.api.getReviews('products/' + this.product.id + '/reviews').subscribe(function (res) {
            _this.reviews = res;
            for (var item in _this.reviews) {
                _this.reviews[item].avatar = Object(_md5__WEBPACK_IMPORTED_MODULE_8__["md5"])(_this.reviews[item].email);
            }
        }, function (err) { });
    };
    ProductPage.prototype.goToProduct = function (product) {
        this.productData.product = product;
        var endIndex = this.router.url.lastIndexOf('/');
        var path = this.router.url.substring(0, endIndex);
        this.navCtrl.navigateForward(path + '/' + product.id);
    };
    ProductPage.prototype.addToCart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.selectAdons() && this.setVariations())) return [3 /*break*/, 2];
                        this.options.product_id = this.product.id;
                        this.disableButton = true;
                        return [4 /*yield*/, this.api.postItem('add_to_cart', this.options).subscribe(function (res) {
                                _this.cart = res;
                                _this.presentToast(_this.lan.addToCart);
                                _this.data.updateCart(_this.cart.cart);
                                _this.disableButton = false;
                            }, function (err) {
                                console.log(err);
                                _this.disableButton = false;
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ProductPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: message,
                            duration: 2000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductPage.prototype.setVariations = function () {
        var _this = this;
        this.product.attributes.forEach(function (item) {
            if (item.selected) {
                _this.options['variation[attribute_pa_' + item.name + ']'] = item.selected;
            }
        });
        for (var i = 0; i < this.product.attributes.length; i++) {
            if (this.product.attributes[i].variation && this.product.attributes[i].selected === undefined) {
                this.presentAlert(this.lan.options, this.lan.select + ' ' + this.product.attributes[i].name + this.lan.option);
                return false;
            }
        }
        return true;
    };
    ProductPage.prototype.chooseVariation = function (att, value) {
        var _this = this;
        this.product.attributes.forEach(function (item) {
            if (item.name === att.name) {
                item.selected = value;
            }
        });
        if (this.usedVariationAttributes.every(function (a) { return a.selected !== undefined; })) {
            this.variations.forEach(function (variation) {
                var test = new Array(_this.usedVariationAttributes.length);
                test.fill(false);
                _this.usedVariationAttributes.forEach(function (attribute) {
                    if (variation.attributes.length == 0) {
                        _this.options.variation_id = variation.id;
                        _this.product.stock_status = variation.stock_status;
                        _this.product.price = variation.price;
                        _this.product.sale_price = variation.sale_price;
                        _this.product.regular_price = variation.regular_price;
                        // this.product.images[0] = variation.image; /* Uncomment this if you want to use variation images */
                    }
                    else {
                        variation.attributes.forEach(function (item, index) {
                            if (item.name == attribute.name && item.option == attribute.selected) {
                                test[index] = true;
                            }
                        });
                        if (test.every(function (v) { return v === true; })) {
                            _this.options.variation_id = variation.id;
                            _this.product.stock_status = variation.stock_status;
                            _this.product.price = variation.price;
                            _this.product.sale_price = variation.sale_price;
                            _this.product.regular_price = variation.regular_price;
                            // this.product.images[0] = variation.image;  /* Uncomment this if you want to use variation images */
                            test.fill(false);
                        }
                        else if (variation.attributes.length !== 1 && variation.attributes.length === _this.usedVariationAttributes.length && test.some(function (v) { return v === false; })) {
                            _this.product.stock_status = 'outofstock';
                        }
                    }
                });
            });
        }
    };
    ProductPage.prototype.presentAlert = function (header, message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: header,
                            message: message,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductPage.prototype.OnDestroy = function () {
        this.productData.product = {};
    };
    ProductPage.prototype.share = function () {
        var options = {
            message: 'Check this out!',
            subject: this.product.name,
            files: ['', ''],
            url: this.product.permalink,
            chooserTitle: 'Choose an App'
        };
        this.socialSharing.shareWithOptions(options);
    };
    ProductPage.prototype.getDetail = function (id) {
        this.vendor.vendor.id = id;
        var pages = this.router.url.split('/');
        this.navCtrl.navigateForward('/tabs/' + pages[2] + '/vendor-products');
    };
    ProductPage.prototype.buyExternalProduct = function (id) {
        var options = 'location=no,hidden=yes,toolbar=no,hidespinner=yes';
        var browser = this.iab.create(this.product.external_url, '_blank', options);
        browser.show();
    };
    /* PRODUCT ADDONS */
    ProductPage.prototype.getAddons = function () {
        var _a;
        if (this.product.meta_data) {
            for (var item in this.product.meta_data) {
                if (this.product.meta_data[item].key === '_product_addons' && this.product.meta_data[item].value.length) {
                    (_a = this.addonsList).push.apply(_a, this.product.meta_data[item].value);
                }
            }
        }
        this.getGlobalAddons();
    };
    ProductPage.prototype.getGlobalAddons = function () {
        var _this = this;
        this.api.getAddonsList('product-add-ons').subscribe(function (res) {
            _this.handleAddonResults(res);
        });
    };
    ProductPage.prototype.handleAddonResults = function (results) {
        var _this = this;
        if (results !== undefined) {
            results.forEach(function (item) {
                var _a;
                (_a = _this.addonsList).push.apply(_a, item.fields);
            });
        }
    };
    ProductPage.prototype.selectAdons = function () {
        var _this = this;
        this.options = {};
        var valid = this.validateform();
        if (valid) {
            this.addonsList.forEach(function (value, i) {
                value.selectedName = value.name.toLowerCase();
                value.selectedName = value.selectedName.split(' ').join('-');
                value.selectedName = value.selectedName.split('.').join('');
                value.selectedName = value.selectedName.replace(':', '');
                value.options.forEach(function (option, j) {
                    option.selectedLabel = option.label.toLowerCase();
                    option.selectedLabel = option.selectedLabel.split(' ').join('-');
                    option.selectedLabel = option.selectedLabel.split('.').join('');
                    option.selectedLabel = option.selectedLabel.replace(':', '');
                    if (value.selected instanceof Array) {
                        if (value.selected.includes(option.label)) {
                            _this.options['addon-' + _this.product.id + '-' + value.selectedName + '-' + i + '[' + j + ']'] = option.selectedLabel;
                        }
                    }
                    else if (option.label === value.selected && value.type === 'select') {
                        _this.options['addon-' + _this.product.id + '-' + value.selectedName + '-' + i] = option.selectedLabel + '-' + (j + 1);
                    }
                    else if (option.label === value.selected && value.type === 'radiobutton') {
                        _this.options['addon-' + _this.product.id + '-' + value.selectedName + '-' + i + '[' + j + ']'] = option.selectedLabel;
                    }
                    else if (value.type === 'custom_textarea' && option.input && option.input !== '') {
                        _this.options['addon-' + _this.product.id + '-' + value.selectedName + '-' + i + '[' + option.selectedLabel + ']'] = option.input;
                    }
                });
                if (value.type === 'custom_text') {
                    var label = value.name;
                    label = label.toLowerCase();
                    label = label.split(' ').join('-');
                    label = label.split('.').join('');
                    label = label.replace(':', '');
                    _this.options['addon-' + _this.product.id + '-' + label + '-' + i] = value.input;
                }
            });
        }
        return valid;
    };
    ProductPage.prototype.validateform = function () {
        if (this.addonsList) {
            for (var addon in this.addonsList) {
                for (var item in this.addonsList[addon].fields) {
                    if (this.addonsList[addon].fields[item].required === 1 && this.addonsList[addon].fields[item].selected === '') {
                        this.presentAlert(this.lan.oops, this.lan.PleaseSelect + ' ' + this.addonsList[addon].fields[item].name);
                        return false;
                    }
                }
                if (this.addonsList[addon].type === 'custom_text') {
                    if (this.addonsList[addon].required === 1 && (!this.addonsList[addon].input || this.addonsList[addon].input === '')) {
                        this.presentAlert(this.lan.oops, this.lan.PleaseSelect + ' ' + this.addonsList[addon].name);
                        return false;
                    }
                }
            }
            return true;
        }
        return true;
    };
    ProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.page.html */ "./src/app/product/product.page.html"),
            styles: [__webpack_require__(/*! ./product.page.scss */ "./src/app/product/product.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_9__["SocialSharing"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _data__WEBPACK_IMPORTED_MODULE_5__["Data"], _data_product__WEBPACK_IMPORTED_MODULE_7__["Product"], _data_settings__WEBPACK_IMPORTED_MODULE_6__["Settings"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _data_vendor__WEBPACK_IMPORTED_MODULE_10__["Vendor"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__["InAppBrowser"]])
    ], ProductPage);
    return ProductPage;
}());



/***/ })

}]);
//# sourceMappingURL=product-product-module.js.map