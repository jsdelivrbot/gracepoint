webpackJsonp([3],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffPageModule", function() { return StaffPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff__ = __webpack_require__(454);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StaffPageModule = (function () {
    function StaffPageModule() {
    }
    return StaffPageModule;
}());
StaffPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__staff__["a" /* StaffPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__staff__["a" /* StaffPage */]),
        ],
    })
], StaffPageModule);

//# sourceMappingURL=staff.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffPage; });
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



var StaffPage = (function () {
    function StaffPage(navCtrl, navParams, greybackProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.greybackProvider = greybackProvider;
        this.greybackProvider.getStaff().subscribe(function (departments) {
            _this.departments = departments.data;
        });
        this.rootUrl = greybackProvider.rootUrl;
    }
    StaffPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StaffPage');
    };
    StaffPage.prototype.mailto = function (staff) {
        console.log('mailto');
    };
    return StaffPage;
}());
StaffPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-staff',template:/*ion-inline-start:"/Users/tonymccallie/Sites/gracepoint/src/pages/staff/staff.html"*/'<ion-header no-border>\n	<ion-navbar color="primary">\n		<ion-title center>Staff</ion-title>\n		<button ion-button icon-only menuToggle right>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div *ngFor="let department of departments">\n		<h3>{{department.StaffDepartment.title}}</h3>\n		<ion-card *ngFor="let staff of department.StaffLink; let i = index">\n			<img src="{{rootUrl}}/img/thumb/{{staff.StaffMember.MediaImage.filename}}/width:600/height:600/crop:true/zoom:auto" />\n			<ion-card-content>\n				<ion-card-title>{{staff.StaffMember.first_name + \' \' + staff.StaffMember.last_name}}</ion-card-title>\n				{{staff.StaffMember.title}}\n				<ion-list no-lines>\n					<ion-item>\n						<a icon-left ion-button small outline item-end *ngIf="staff.StaffMember.email" href="mailto:{{staff.StaffMember.email}}">\n							<ion-icon name="mail-outline"></ion-icon> Email\n						</a>\n					</ion-item>\n				</ion-list>\n			</ion-card-content>\n		</ion-card>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/tonymccallie/Sites/gracepoint/src/pages/staff/staff.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_greyback_greyback__["a" /* GreybackProvider */]])
], StaffPage);

//# sourceMappingURL=staff.js.map

/***/ })

});
//# sourceMappingURL=3.js.map