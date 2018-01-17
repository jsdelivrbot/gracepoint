webpackJsonp([14],{

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageModule", function() { return EventsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_module__ = __webpack_require__(335);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__events__["a" /* EventsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__events__["a" /* EventsPage */]),
            __WEBPACK_IMPORTED_MODULE_3__app_shared_module__["a" /* SharedModule */]
        ],
    })
], EventsPageModule);

//# sourceMappingURL=events.module.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_greyback_greyback__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
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
    function EventsPage(navCtrl, navParams, greybackProvider, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.greybackProvider = greybackProvider;
        this.loadingCtrl = loadingCtrl;
        this.monthIndex = 0;
        this.dayIndex = 0;
        this.pageIndex = 0;
        console.log('constructor EventsPage');
        this.rootUrl = greybackProvider.rootUrl;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        this.greybackProvider.getCalendar(this.pageIndex).then(function (events) {
            //this.events = events.Page;
            console.log(events);
            _this.events = [];
            _this.addEvents(events);
            loader.dismiss();
        });
    }
    EventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsPage');
    };
    EventsPage.prototype.convertDate = function (date) {
        var newDate = Date.parse(date.substr(0, date.length - 4).replace(' ', 'T'));
        return newDate;
    };
    EventsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('doInfinite');
        this.pageIndex++;
        this.greybackProvider.getCalendar(this.pageIndex).then(function (events) {
            _this.addEvents(events);
            infiniteScroll.complete();
        });
    };
    EventsPage.prototype.viewEvent = function (event) {
        this.navCtrl.push('EventDetailPage', {
            event: event,
            eventId: event.EventId
        });
    };
    EventsPage.prototype.addEvents = function (events) {
        var _this = this;
        events.forEach(function (event, index) {
            var tmpMonth = __WEBPACK_IMPORTED_MODULE_3_moment__["utc"](event.OccurrenceStartTime).format('MMMM');
            var tmpDay = __WEBPACK_IMPORTED_MODULE_3_moment__["utc"](event.OccurrenceStartTime).format('dddd, MMM Do');
            if (_this.curMonth != tmpMonth) {
                _this.monthIndex = _this.events.length;
                _this.events.push({
                    name: tmpMonth,
                    days: []
                });
                _this.curMonth = tmpMonth;
            }
            if (_this.curDay != tmpDay) {
                _this.dayIndex = _this.events[_this.monthIndex].days.length;
                _this.events[_this.monthIndex].days.push({
                    name: tmpDay,
                    events: []
                });
                _this.curDay = tmpDay;
            }
            _this.events[_this.monthIndex].days[_this.dayIndex].events.push(event);
        });
    };
    return EventsPage;
}());
EventsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-events',template:/*ion-inline-start:"/Users/tonymccallie/Sites/gracepoint/src/pages/events/events.html"*/'<ion-header no-border>\n	<ion-navbar color="primary">\n		<ion-title center>Events</ion-title>\n		<button ion-button icon-only menuToggle right>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list>\n		<div *ngFor="let month of events">\n			<!-- <ion-item-divider>{{month.name}}</ion-item-divider> -->\n			<div *ngFor="let day of month.days">\n				<ion-item-divider color="primary">{{day.name}}</ion-item-divider>\n				<div *ngFor="let event of day.events">\n					<ion-item>\n						<div item-start>{{event.OccurrenceStartTime | amLocal | amDateFormat:\'h:mma\'}}</div>\n						{{event.Name}}\n					</ion-item>\n				</div>\n			</div>\n		</div>\n	</ion-list>\n	<!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n		<ion-infinite-scroll-content></ion-infinite-scroll-content>\n	</ion-infinite-scroll> -->\n</ion-content>'/*ion-inline-end:"/Users/tonymccallie/Sites/gracepoint/src/pages/events/events.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_greyback_greyback__["a" /* GreybackProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], EventsPage);

//# sourceMappingURL=events.js.map

/***/ })

});
//# sourceMappingURL=14.js.map