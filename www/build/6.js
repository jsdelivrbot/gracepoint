webpackJsonp([6],{

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesPageModule", function() { return SeriesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__series__ = __webpack_require__(451);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SeriesPageModule = (function () {
    function SeriesPageModule() {
    }
    return SeriesPageModule;
}());
SeriesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__series__["a" /* SeriesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__series__["a" /* SeriesPage */]),
        ],
    })
], SeriesPageModule);

//# sourceMappingURL=series.module.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeriesPage; });
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



var SeriesPage = (function () {
    function SeriesPage(navCtrl, navParams, greybackProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.greybackProvider = greybackProvider;
        console.log('constructor SeriesPage');
        this.rootUrl = greybackProvider.rootUrl;
        this.greybackProvider.getSeries().subscribe(function (series) {
            _this.series = series.data;
        });
    }
    SeriesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SeriesPage');
        this.greybackProvider.getLatestSermon().subscribe(function (latest) {
            _this.latest = latest.data;
        });
    };
    SeriesPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter SeriesPage');
    };
    SeriesPage.prototype.viewSeries = function (series) {
        this.navCtrl.push('SermonsPage', {
            series: series,
            seriesId: series.id
        });
    };
    return SeriesPage;
}());
SeriesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-series',template:/*ion-inline-start:"/Users/tonymccallie/Sites/gracepoint/src/pages/series/series.html"*/'<ion-header no-border>\n	<ion-navbar color="primary">\n		<ion-title center>Series</ion-title>\n		<button ion-button icon-only menuToggle right><ion-icon name="menu"></ion-icon></button>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div *ngIf="!latest">\n		<img src="assets/img/gp_sermon_load.jpg" />\n	</div>\n	<div *ngFor="let recent of latest">\n		<img *ngIf="recent.MessageSeries.MediaImage.filename" src="{{rootUrl}}/img/thumb/{{recent.MessageSeries.MediaImage.filename}}/width:1000/height:600/crop:true/zoom:auto" (click)="viewSeries(recent.MessageSeries)">\n		<img *ngIf="!recent.MessageSeries.MediaImage.filename" src="http://via.placeholder.com/1000x600?text=No+series+image" />\n	</div>\n	<ion-toolbar color="primary">\n		Latest Series\n	</ion-toolbar>\n	<div *ngIf="!series">\n		<ion-row>\n			<ion-col col-6 *ngFor="let image of [0,1,2,3,4,5,6]">\n				<img src="assets/img/gp_sermon_load.jpg" />\n			</ion-col>\n		</ion-row>\n	</div>\n	<ion-grid>\n		<ion-row>\n			<ion-col col-6 *ngFor="let single of series; let i = index" (click)="viewSeries(single)">\n				<img *ngIf="single.MediaImage.filename" src="{{rootUrl}}/img/thumb/{{single.MediaImage.filename}}/width:1000/height:600/crop:true/zoom:auto">\n				<img *ngIf="!single.MediaImage.filename" src="assets/img/gp_sermon_load.jpg" />\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/tonymccallie/Sites/gracepoint/src/pages/series/series.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_greyback_greyback__["a" /* GreybackProvider */]])
], SeriesPage);

//# sourceMappingURL=series.js.map

/***/ })

});
//# sourceMappingURL=6.js.map