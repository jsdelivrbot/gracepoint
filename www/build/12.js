webpackJsonp([12],{

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JesusPageModule", function() { return JesusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jesus__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JesusPageModule = (function () {
    function JesusPageModule() {
    }
    return JesusPageModule;
}());
JesusPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__jesus__["a" /* JesusPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__jesus__["a" /* JesusPage */]),
        ],
    })
], JesusPageModule);

//# sourceMappingURL=jesus.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JesusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the JesusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var JesusPage = (function () {
    function JesusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    JesusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JesusPage');
    };
    return JesusPage;
}());
JesusPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-jesus',template:/*ion-inline-start:"/Users/tonymccallie/Sites/gracepoint/src/pages/jesus/jesus.html"*/'<ion-header no-border>\n	<ion-navbar color="primary">\n		<ion-title center>Jesus</ion-title>\n		<button ion-button icon-only menuToggle right>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<img src="assets/img/bible.jpg" />\n	<div padding>\n		<h3>LEARN ABOUT JESUS</h3>\n		<p>God created you to be in perfect relationship with Him, but our sins fracture that relationship and separate us from Him.\n			We can only be forgiven and reconciled back to God through a relationship with His Son, Jesus Christ. We want to help\n			you learn more about what Jesus has done for you and how He wants to be part of your life.</p>\n		<h3>CREATION &amp; SEPARATION</h3>\n\n		<p>God made the world and He created humanity. Man was in relationship with God for the glory of God and to experience God’s\n			love. There was no disease, death, shame, or sorrow. Loving God was at the core of all things and it was good and moral.\n			However, that all changed when man used the free will God had so graciously provided to disobey God. That moment of disobedience,\n			or the fall, is when sin came into the world. With sin came selfishness and crimes against God. Sin also broke man’s perfect\n			fellowship with God and brought death into the world. These sins separate us from a perfect and holy God.</p>\n		<h3>SIN &amp; FORGIVENESS</h3>\n		<p>Our sin is the problem that corrupts the world and everything in it and we are powerless to overcome our sin apart from\n			Jesus Christ. Our attempts to control the situation only increase the chaos around us and within us. That is why we need\n			healing from sin. In spite of our sin, we can know God and be healed back into a right relationship with Him. You can\n			know God personally. The Creator of the universe made you and wants an intimate relationship with you. Jesus is the gift\n			that offers us forgiveness and relationship with God. The way to know the Father is through His Son: “I am the way and\n			the truth and the life. No one comes to the Father except through Me” John 14:6.</p>\n		<h3>THE GOOD NEWS</h3>\n		<p>The Gospel literally translates as the “good news.” Good news usually comes when something is wrong and we need someone\n			or something to change our circumstances. In our case, sin is the problem that corrupts our hearts, the world and everything\n			in it. We are powerless to overcome that problem apart from Christ. In other words, we can’t earn our own forgiveness\n			or salvation. However, that is where Jesus comes into our lives. He lived a perfect life and died as a sacrifice for our\n			sins. He rose from the grave to conquer sin and death. Through his sacrifice He offers us forgiveness and eternal life\n			with Him. This is a gift offered to each of us out of His love for us. That is the Good News – that Jesus loves us so\n			much He offers us forgiveness of our sins and his spirit to help us change how we live. This healing is only by grace\n			alone, through faith alone, in Christ alone.</p>\n	</div>\n</ion-content>'/*ion-inline-end:"/Users/tonymccallie/Sites/gracepoint/src/pages/jesus/jesus.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], JesusPage);

//# sourceMappingURL=jesus.js.map

/***/ })

});
//# sourceMappingURL=12.js.map