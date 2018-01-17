webpackJsonp([13],{

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(444);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_greyback_greyback__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, navParams, greybackProvider, shared) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.greybackProvider = greybackProvider;
        this.shared = shared;
        this.rootUrl = greybackProvider.rootUrl;
        console.log('contructor HomePage');
    }
    HomePage.prototype.ionViewDidLoad = function () {
        //fired if not cached
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        //fired every time
        console.log('ionViewWillEnter HomePage');
        this.greybackProvider.getNews().subscribe(function (news) {
            _this.news = news.data;
        });
        this.greybackProvider.getCommunity().subscribe(function (posts) {
            _this.posts = posts.data;
        });
        // this.greybackProvider.getCalendars().subscribe(results => {
        // 	console.log(results);
        // }, msg => console.error(`ErrorFOO: ${msg.status} ${msg.statusText}`));
    };
    HomePage.prototype.ionViewDidEnter = function () {
        //fired every time
        console.log('ionViewDidEnter HomePage');
    };
    HomePage.prototype.viewArticle = function (article) {
        this.navCtrl.push('ArticleDetailPage', {
            article: article,
            articleId: article.NewsArticle.id
        });
    };
    HomePage.prototype.viewPost = function (post) {
        this.navCtrl.push('PostDetailPage', {
            post: post,
            postId: post.CommunityPost.id
        });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('doRefresh');
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        console.log('Begin async operation');
        // setTimeout(() => {
        // 	for (let i = 0; i < 30; i++) {
        // 		this.news.push({title:'test',body:'test'});
        // 	}
        // 	console.log('Async operation has ended');
        // 	infiniteScroll.complete();
        // }, 500);
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/tonymccallie/Sites/gracepoint/src/pages/home/home.html"*/'<ion-header no-border>\n	<ion-navbar color="primary">\n		<ion-title start><img src="assets/logo.svg" class="logo"></ion-title>\n		<button ion-button icon-only menuToggle right><ion-icon name="menu"></ion-icon></button>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n	<ion-slides autoplay="5000" loop="true" *ngIf="news && news.length">\n		<ion-slide *ngFor="let article of news" (click)="viewArticle(article)">\n			<img src="{{rootUrl}}/img/thumb/{{article.MediaImage.filename}}/width:1000/height:600/crop:true/zoom:auto" />\n		</ion-slide>\n	</ion-slides>\n	<ion-toolbar color="primary">\n		Community Feed\n	</ion-toolbar>\n	<!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n		<ion-refresher-content></ion-refresher-content>\n	</ion-refresher> -->\n	<ion-card *ngFor="let post of posts; let i = index">\n		<img *ngIf="post.CommunityPost.type!=\'gallery\'" src="{{rootUrl}}/img/thumb/{{post.MediaImage.filename}}/width:1000/height:600/crop:true/zoom:auto" />\n		<div *ngIf="post.CommunityPost.type==\'gallery\'">\n			<ion-slides autoplay="5000" loop="true" *ngIf="post.CommunityPicture && post.CommunityPicture.length">\n				<ion-slide *ngFor="let picture of post.CommunityPicture">\n					<img src="{{rootUrl}}/img/thumb/{{picture.MediaImage.filename}}/width:1000/height:600/crop:true/zoom:auto" />\n				</ion-slide>\n			</ion-slides>\n		</div>\n		<ion-card-content>\n			<ion-card-title>{{post.CommunityPost.title}}</ion-card-title>\n			<div [innerHTML]="post.CommunityPost.body"></div>\n			<!-- <pre>{{post | json}}</pre> -->\n		</ion-card-content>\n	</ion-card>\n	<!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll> -->\n</ion-content>'/*ion-inline-end:"/Users/tonymccallie/Sites/gracepoint/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_greyback_greyback__["a" /* GreybackProvider */], __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=13.js.map