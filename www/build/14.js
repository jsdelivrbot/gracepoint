webpackJsonp([14],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageModule", function() { return EventsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventsPageModule = (function () {
    function EventsPageModule() {
    }
    return EventsPageModule;
}());
EventsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__events__["a" /* EventsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__events__["a" /* EventsPage */]),
        ],
    })
], EventsPageModule);

//# sourceMappingURL=events.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_greyback_greyback__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsPage = (function () {
    function EventsPage(navCtrl, navParams, greybackProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.greybackProvider = greybackProvider;
        console.log('constructor EventsPage');
        this.rootUrl = greybackProvider.rootUrl;
        this.greybackProvider.getCalendar().subscribe(function (events) {
            _this.events = events.Page;
        });
    }
    EventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsPage');
    };
    EventsPage.prototype.convertDate = function (date) {
        console.log(date);
        var newDate = Date.parse(date);
        console.log(newDate);
        return newDate;
    };
    EventsPage.prototype.viewEvent = function (event) {
        this.navCtrl.push('EventDetailPage', {
            event: event,
            eventId: event.EventId
        });
    };
    return EventsPage;
}());
EventsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-events',template:/*ion-inline-start:"/Users/tonymccallie/Sites/fbcburleson/src/pages/events/events.html"*/'<ion-header no-border>\n	<ion-navbar color="primary">\n		<ion-title center>Events</ion-title>\n		<button ion-button icon-only menuToggle right>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list>\n		<button ion-item *ngFor="let event of events" (click)="viewEvent(event)">\n			<div item-start>{{convertDate(event.StartDate) | date:\'M/dd j:mma\'}}</div>\n			{{event.EventName}}\n		</button>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/tonymccallie/Sites/fbcburleson/src/pages/events/events.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_greyback_greyback__["a" /* GreybackProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_greyback_greyback__["a" /* GreybackProvider */]) === "function" && _c || Object])
], EventsPage);

var _a, _b, _c;
//# sourceMappingURL=events.js.map

/***/ })

});
//# sourceMappingURL=14.js.map