webpackJsonp([10],{

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = (function () {
    function MenuPageModule() {
    }
    return MenuPageModule;
}());
MenuPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], MenuPageModule);

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_audio_audio__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuPage = (function () {
    function MenuPage(navCtrl, navParams, audioProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.audioProvider = audioProvider;
        // Basic root for our content view
        this.rootPage = 'TabsPage';
        this.pages = [
            { title: 'Home', pageName: 'TabsPage', tabComponent: 'HomePage', index: 0, icon: 'ios-home-outline' },
            { title: 'Jesus', pageName: 'JesusPage', icon: 'ios-heart-outline' },
            { title: 'About', pageName: 'AboutPage', icon: 'ios-information-circle-outline' },
            { title: 'Sermons', pageName: 'TabsPage', tabComponent: 'SeriesPage', index: 1, icon: 'ios-headset-outline' },
            { title: 'Events', pageName: 'TabsPage', tabComponent: 'EventsPage', index: 2, icon: 'ios-calendar-outline' },
            { title: 'Giving', pageName: 'TabsPage', tabComponent: 'StoriesPage', index: 3, icon: 'ios-cash-outline' },
            { title: 'Service Times', pageName: 'TabsPage', tabComponent: 'TimesPage', index: 4, icon: 'ios-time-outline' },
            { title: 'Staff', pageName: 'StaffPage', icon: 'ios-contact-outline' },
            { title: 'Location', pageName: 'LocationPage', icon: 'ios-pin-outline' },
            // { title: 'Prayer', pageName: 'PrayerPage', icon: 'ios-chatboxes-outline' },
            { title: 'Credits', pageName: 'CreditsPage', icon: 'ios-ribbon-outline' },
        ];
        this.player = audioProvider;
    }
    MenuPage.prototype.openPage = function (page) {
        var params = {};
        // The index is equal to the order of our tabs inside tabs.ts
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // The active child nav is our Tabs Navigation
        if (this.nav.getActiveChildNavs()[0] && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            // Tabs are not active, so reset the root page 
            // In this case: moving to or from SpecialPage
            //this.nav.setRoot(page.pageName, params);
            //this.nav.getActiveChildNavs()[0].select(5);
            //this.nav.getActiveChildNavs()[0].getByIndex(5).push(page.pageName);
            this.nav.getActiveChildNavs()[0].getSelected().push(page.pageName);
            //this.nav.push(page.pageName);
        }
    };
    MenuPage.prototype.isActive = function (page) {
        // Again the Tabs Navigation
        var childNav = this.nav.getActiveChildNavs()[0];
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        // Fallback needed when there is no active childnav (tabs not active)
        if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
            return 'primary';
        }
        return;
    };
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.pause = function () {
        this.audioProvider.pause();
    };
    MenuPage.prototype.scrub = function (percent) {
        this.audioProvider.scrub(percent);
    };
    return MenuPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MenuPage.prototype, "nav", void 0);
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-menu',template:/*ion-inline-start:"/Users/tonymccallie/Sites/gracepoint/src/pages/menu/menu.html"*/'<!-- <ion-split-pane> -->\n<ion-menu [content]="content" side="right" type="reveal" persistent="true">\n	<ion-header no-border>\n		<ion-toolbar color="primary">\n			<ion-title *ngIf="!player.title">Menu</ion-title>\n			<ion-title *ngIf="player.title">\n				<ion-icon name="volume-up"></ion-icon> Now Playing</ion-title>\n		</ion-toolbar>\n	</ion-header>\n\n	<ion-content>\n		<ion-list>\n			<div *ngIf="player.title">\n				<ion-item (click)="pause()">\n					<ion-icon item-start *ngIf="player.playing && !player.loading" name="threeleaf-pause"></ion-icon>\n					<ion-icon item-start *ngIf="!player.playing && !player.loading" name="threeleaf-play"></ion-icon>\n					<ion-icon item-start *ngIf="player.loading" name="refresh" ></ion-icon>\n					{{player.title}}<br />{{player.speaker}}\n				</ion-item>\n				<ion-item>\n					<ion-range [(ngModel)]="player.percentage" (ionChange)="scrub($event)">\n						<ion-label range-left>{{player.current | date:\'mm:ss\' }}</ion-label>\n						<ion-label range-right>{{player.duration | date:\'mm:ss\' }}</ion-label>\n					</ion-range>\n				</ion-item>\n\n				<ion-list-header color="primary">Menu</ion-list-header>\n			</div>\n			<button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n				<ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n				{{ p.title }}\n			</button>\n		</ion-list>\n	</ion-content>\n</ion-menu>\n<!-- main navigation -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n<!-- </ion-split-pane> -->'/*ion-inline-end:"/Users/tonymccallie/Sites/gracepoint/src/pages/menu/menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_audio_audio__["a" /* AudioProvider */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ })

});
//# sourceMappingURL=10.js.map