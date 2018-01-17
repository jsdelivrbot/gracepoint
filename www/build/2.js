webpackJsonp([2],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesPageModule", function() { return StoriesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stories__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StoriesPageModule = (function () {
    function StoriesPageModule() {
    }
    return StoriesPageModule;
}());
StoriesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__stories__["a" /* StoriesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__stories__["a" /* StoriesPage */]),
        ],
    })
], StoriesPageModule);

//# sourceMappingURL=stories.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoriesPage; });
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



var StoriesPage = (function () {
    function StoriesPage(navCtrl, navParams, greybackProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.greybackProvider = greybackProvider;
        this.greybackProvider.getSeriesById(52).subscribe(function (stories) {
            _this.stories = stories.data;
            _this.topStory = stories.data[0];
            _this.source = _this.rootUrl + '/play/vid/' + _this.topStory.MediaVideo.id + '/vid.mp4';
            _this.poster = _this.rootUrl + '/img/thumb/' + _this.topStory.MediaVideo.preview + '/width:854/height:480/crop:true/zoom:auto/image.jpg';
        });
        this.rootUrl = greybackProvider.rootUrl;
    }
    StoriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StoriesPage');
    };
    StoriesPage.prototype.viewStory = function (story) {
        this.source = this.rootUrl + '/play/vid/' + story.MediaVideo.id + '/vid.mp4';
        this.poster = this.rootUrl + '/img/thumb/' + story.MediaVideo.preview + '/width:854/height:480/crop:true/zoom:auto/image.jpg';
    };
    return StoriesPage;
}());
StoriesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-stories',template:/*ion-inline-start:"/Users/tonymccallie/Sites/gracepoint/src/pages/stories/stories.html"*/'<ion-header no-border>\n	<ion-navbar color="primary">\n		<ion-title center>Stories</ion-title>\n		<button ion-button icon-only menuToggle right><ion-icon name="menu"></ion-icon></button>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div *ngIf="!topStory">\n		<img src="assets/loading_media.png" />\n	</div>\n	<div *ngIf="topStory">\n		<video [src]="source" [poster]="poster" controls style="width: 100%;"></video>\n	</div>\n	<ion-toolbar color="primary">\n		Latest Series\n	</ion-toolbar>\n	<ion-list>\n		<button ion-item *ngFor="let story of stories; let i = index" (click)="viewStory(story)">\n			<div item-start>{{i+1}}</div>\n			{{story.MessageMessage.title}}\n		</button>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/tonymccallie/Sites/gracepoint/src/pages/stories/stories.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_greyback_greyback__["a" /* GreybackProvider */]])
], StoriesPage);

//# sourceMappingURL=stories.js.map

/***/ })

});
//# sourceMappingURL=2.js.map