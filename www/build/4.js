webpackJsonp([4],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SermonsPageModule", function() { return SermonsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sermons__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SermonsPageModule = (function () {
    function SermonsPageModule() {
    }
    return SermonsPageModule;
}());
SermonsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sermons__["a" /* SermonsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sermons__["a" /* SermonsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
    })
], SermonsPageModule);

//# sourceMappingURL=sermons.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SermonsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_greyback_greyback__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SermonsPage = (function () {
    function SermonsPage(navCtrl, navParams, greybackProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.greybackProvider = greybackProvider;
        this.greybackProvider.getSeriesById(this.navParams.get('seriesId')).subscribe(function (sermons) {
            _this.sermons = sermons.data;
        });
        this.series = this.navParams.get('series');
        this.rootUrl = greybackProvider.rootUrl;
    }
    SermonsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SermonsPage');
    };
    SermonsPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter SermonsPage');
    };
    SermonsPage.prototype.viewSermon = function (sermon) {
        this.navCtrl.push('SermonPage', {
            series: this.series,
            sermon: sermon,
            sermonId: sermon.id
        });
    };
    return SermonsPage;
}());
SermonsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-sermons',template:/*ion-inline-start:"/Users/tonymccallie/Sites/gracepoint/src/pages/sermons/sermons.html"*/'<ion-header no-border>\n	<ion-navbar color="primary">\n		<ion-title center>Sermons</ion-title>\n		<button ion-button icon-only menuToggle right>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<img src="{{rootUrl}}/img/thumb/{{series.MediaImage.filename}}/width:1000/height:600/crop:true/zoom:auto">\n	<ion-toolbar color="primary">\n		{{series.title}}\n	</ion-toolbar>\n	<ion-list>\n		<button ion-item *ngFor="let sermon of sermons" (click)="viewSermon(sermon)">\n			<div item-start>{{sermon.MessageMessage.start | amDateFormat:\'M/DD\'}}</div>\n			{{sermon.MessageMessage.title}}\n		</button>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/tonymccallie/Sites/gracepoint/src/pages/sermons/sermons.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_greyback_greyback__["a" /* GreybackProvider */]])
], SermonsPage);

//# sourceMappingURL=sermons.js.map

/***/ })

});
//# sourceMappingURL=4.js.map