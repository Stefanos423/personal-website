webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-me/about-me.component.css":
/***/ (function(module, exports) {

module.exports = ".about-me-container {\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.header {\r\n    font-size: 40px;\r\n    font-weight: 500;\r\n    margin-top: 60px;\r\n    margin-bottom: 0.8em;\r\n    color: #000;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.details {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.personal-information {\r\n    margin-left: 50px;\r\n    width: 575px;\r\n    height: 500px;\r\n    background-image: url('https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-9/23622298_2063068277307336_8372805077311165436_n.jpg?_nc_cat=0&oh=7223a3eaabf4e2e03b0fc2a4fc54d804&oe=5B36657E');\r\n}\r\n\r\n.cv-abstract {\r\n    margin-left: 50px;\r\n    margin-right: 50px;\r\n    width: 675px;\r\n    height: 540px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.introduction {\r\n    font-size: 30px;\r\n    font-weight: 500;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0px;\r\n    color: #00bce4;\r\n}\r\n\r\n.job-title {\r\n    text-transform: capitalize;\r\n    color: #252323;\r\n}\r\n\r\n.study-details {\r\n    line-height: 28px;\r\n    color: #212121;\r\n    letter-spacing: .5px;\r\n    font-size: 14px;\r\n    padding-top: 1em;\r\n    border-top: 1px dashed #646464;\r\n}\r\n\r\n.information {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin: 80px 20px 80px 40px;\r\n    color: #fff;\r\n}\r\n\r\n.field-name {\r\n    font-weight: bold;\r\n}\r\n\r\n.row {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.contact-buttons {\r\n    margin-right: 10px;\r\n    margin-left: 10px;\r\n    width: 122px;\r\n    height: 43px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/about-me/about-me.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='about-me-container'>\r\n  <div style='text-align: center'>\r\n    <h3 class='header'>About Me</h3>      \r\n  </div>\r\n  <div class='details'>\r\n    <div class='personal-information'>\r\n      <div class='information'>\r\n        <div class='row'>\r\n          <span class='field-name'>NAME:</span>\r\n          <span>Argyriou Stefanos Panagiotis</span>\r\n        </div>\r\n        <div class='row'>\r\n          <span class='field-name'>DOB:</span>\r\n          <span>02-11-1994</span>\r\n        </div>\r\n        <div class='row'>\r\n          <span class='field-name'>PHONE:</span>\r\n          <span>xxx-xxx-xxx</span>\r\n        </div>\r\n        <div class='row'>\r\n          <span class='field-name'>JOB:</span>\r\n          <span>Software Developer</span>\r\n        </div>\r\n        <div class='row'>\r\n          <span class='field-name'>EXPERIENCE:</span>\r\n          <span>3+ Year</span>\r\n        </div>\r\n        <div class='row'>\r\n          <span class='field-name'>ADDRESS:</span>\r\n          <span>21 Cameron Street, Belfast, Northern Ireland</span>\r\n        </div>\r\n        <div class='row'>\r\n          <span class='field-name'>E-MAIL:</span>\r\n          <span>stargirio2@yahoo.gr</span>\r\n        </div>\r\n        <div class='row'>\r\n          <span class='field-name'>WEBSITE:</span>\r\n          <span>stefanos.argyriou.com</span>\r\n        </div>  \r\n      </div>\r\n    </div>\r\n    <div class='cv-abstract'>\r\n      <h3 class='introduction'>\r\n        HI, I AM STEFANOS ARGYRIOU\r\n      </h3>\r\n      <h4 class='job-title'>\r\n        Software Developer: 3+ Years of Coding Experience\r\n      </h4>\r\n      <p class='study-details'>\r\n          My strong academic background has helped achieve an extensive knowledge of Computer Programming, Computer Software Design, Artificial Intelligence, Machine Learning, Knowledge Engineering and Biomedicine. During my studies I have successfully completed numerous academic and practical projects resulting in the further enforcement of my skills and abilities.\r\n      </p>\r\n      <p class='study-details'>\r\n          In order to counteract the absence of industry involvement in Greek universities, I decided to complement my Software knowledge by seeking out challenging and rewarding working opportunities offered to young professionals by well known and recognizable companies. I am currently working as a Software Developer for Philips Digital Pathology at Belfast, UK.          \r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/about-me/about-me.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutMeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'about-me',
            template: __webpack_require__("./src/app/about-me/about-me.component.html"),
            styles: [__webpack_require__("./src/app/about-me/about-me.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/animations/slide.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slide; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/@angular/animations.es5.js");

var slide = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('slide', [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('onTheLeft', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
        display: 'none',
        position: 'absolute',
        zIndex: '100',
        transform: 'translateX(-250%)',
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('onTheCenter', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
        opacity: 1,
        position: 'relative',
        zIndex: '100',
        transform: 'translateX(0)',
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('onTheRight', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
        display: 'none',
        position: 'absolute',
        zIndex: '100',
        transform: 'translateX(250%)',
    })),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('onTheLeft => onTheCenter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1.5s ease-in-out')
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('onTheCenter => onTheRight', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1.5s ease-in-out')
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('onTheRight => onTheCenter', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1.5s ease-in-out')
    ]),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])('onTheCenter => onTheLeft', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1.5s ease-in-out')
    ])
]);


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav-bar></nav-bar>\r\n<banner></banner>\r\n<about-me></about-me>\r\n<my-skills></my-skills>\r\n<footer></footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_simple_slideshow__ = __webpack_require__("./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scrollable_info_scrollable_info_component__ = __webpack_require__("./src/app/scrollable-info/scrollable-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav_bar_nav_bar_component__ = __webpack_require__("./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__banner_banner_component__ = __webpack_require__("./src/app/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_me_about_me_component__ = __webpack_require__("./src/app/about-me/about-me.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_skills_my_skills_component__ = __webpack_require__("./src/app/my-skills/my-skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__scrollable_info_scrollable_info_component__["a" /* ScrollableInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_7__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__banner_banner_component__["a" /* BannerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__about_me_about_me_component__["a" /* AboutMeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__my_skills_my_skills_component__["a" /* MySkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng_simple_slideshow__["a" /* SlideshowModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/banner/banner.component.css":
/***/ (function(module, exports) {

module.exports = ".scrollable-info-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    font-family: 'Montserrat', sans-serif;\r\n    /* background-image: url('https://i0.wp.com/birchtree.me/wp-content/uploads/2016/06/swift-header-1.png?w=1100&ssl=1'); */\r\n    background: -webkit-gradient(linear, left top, left bottom, from(rgb(30,87,153)),color-stop(69%, rgb(41,137,216)),color-stop(100%, rgb(32,124,202)),to(rgb(125,185,232)));\r\n    background: linear-gradient(to bottom, rgb(30,87,153) 0%,rgb(41,137,216) 69%,rgb(32,124,202) 100%,rgb(125,185,232) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\n    width: 100%;\r\n    height: 560px;\r\n}\r\n\r\n.content {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\nh1 {\r\n    width: 600px;\r\n    text-align: center;\r\n    font-size: 3em;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    font-weight: 300;\r\n}\r\n\r\n.contact {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    margin-top: 12px;\r\n    color: #fff;\r\n    width: 600px;\r\n}\r\n\r\n.contact-buttons {\r\n    margin-right: 10px;\r\n    margin-left: 10px;\r\n    width: 122px;\r\n    height: 43px;\r\n}\r\n\r\nh1 span {\r\n    font-weight: 700;\r\n    color: #00bce4;\r\n}\r\n\r\n.text-info {\r\n    color: #fff;    \r\n    font-family: 'Montserrat', sans-serif;    \r\n    width: 600px;\r\n    text-align: center;\r\n}\r\n\r\n.text-scroll {\r\n    margin-top: 150px;\r\n    height: 200px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.navigate-button {\r\n    position: relative;\r\n    color: #fff;\r\n    margin-top: 55px;\r\n    width: 80px;\r\n    height: 80px;\r\n}\r\n\r\nimg {\r\n    width: 60px;\r\n    height: 60px;\r\n}\r\n\r\n.dots {\r\n    margin-top: 40px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.dot {\r\n    height: 12px;\r\n    width: 12px;\r\n    margin-right: 12px;\r\n    margin-left: 12px;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n}\r\n\r\n.active {\r\n    border: 3px solid #fff;\r\n    background: #fff;\r\n}\r\n\r\n.inactive {\r\n    border: 3px solid #000;\r\n    background: #000;\r\n}\r\n"

/***/ }),

/***/ "./src/app/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='scrollable-info-container'>\r\n    <div class='content'>\r\n        <div class='text-scroll'>\r\n            <button mat-button class='navigate-button' (click)='previousInfo()'>\r\n                <img alt='linkedin-link' src='assets/navigate-before.svg'/>                \r\n            </button>\r\n            <div id='placeholder'\r\n                [@slide]='states[0]'\r\n                (@slide.done)='slideFinished()'>\r\n                <h1>\r\n                    My name is <span>Stefanos</span>\r\n                </h1>\r\n                <div class='text-info'>\r\n                    {{ genericInfo }}\r\n                </div>\r\n                <div class='contact'>\r\n                    <button mat-raised-button color='primary' class='contact-buttons'>Hire Me</button>\r\n                    <button mat-raised-button color='primary' class='contact-buttons'>Contact Me</button>\r\n                </div>\r\n            </div>\r\n            <div id='placeholder'\r\n                [@slide]='states[1]'\r\n                (@slide.done)='slideFinished()'>\r\n                <h1>\r\n                    I am a <span>Developer</span>\r\n                </h1>\r\n                <div class = 'text-info'>\r\n                    {{ education }}\r\n                </div>\r\n                <div class='contact'>\r\n                    <button mat-raised-button color='primary' class='contact-buttons'>Hire Me</button>\r\n                    <button mat-raised-button color='primary' class='contact-buttons'>Contact Me</button>\r\n                </div>\r\n            </div>\r\n            <div id='placeholder'\r\n                [@slide]='states[2]'\r\n                (@slide.done)='slideFinished()'>\r\n                <h1>\r\n                    Technology is my <span>passion</span>\r\n                </h1>\r\n                <div class = 'text-info'>\r\n                    {{ passion }}\r\n                </div>\r\n                <div class='contact'>\r\n                    <button mat-raised-button color='primary' class='contact-buttons'>Hire Me</button>\r\n                    <button mat-raised-button color='primary' class='contact-buttons'>Contact Me</button>\r\n                </div>\r\n            </div>\r\n            <button mat-button class='navigate-button' (click)='nextInfo()'>\r\n                <img alt='linkedin-link' src='assets/navigate-next.svg'/>                \r\n            </button>\r\n        </div>\r\n        <div class='dots'>\r\n            <span [ngClass]=\"currentInfo === 1 ? 'dot active' : 'dot inactive'\"></span>\r\n            <span [ngClass]=\"currentInfo === 2 ? 'dot active' : 'dot inactive'\"></span>\r\n            <span [ngClass]=\"currentInfo === 3 ? 'dot active' : 'dot inactive'\"></span>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations_slide_animation__ = __webpack_require__("./src/app/animations/slide.animation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
        this.genericInfo = "Born and raised in Athens, Greece, and currently living in Northern Ireland,\n                 I am constantly seeking for new challenges and experiences to broaden my professional and personal knowledge.";
        this.education = "With a Bachellor's in Electrical and Computer Engineering and a Master's in Computer Engineering,\n               I am currently working as a Software Developer for Philips Digital Pathology Belfast.";
        this.passion = "Be it software or hardware, all fields of Computer Engineering belong in my direct interests.\n             Where others are satisfied with cutting-edge, I want to do bleeding-edge.";
        this.currentInfo = 1;
        this.states = ['onTheCenter', 'onTheLeft', 'onTheRight'];
        this.animating = false;
    }
    BannerComponent.prototype.ngOnInit = function () { };
    BannerComponent.prototype.nextInfo = function () {
        if (this.animating) {
            return;
        }
        this.animating = true;
        if (this.currentInfo === 1) {
            this.states[0] = 'onTheRight';
            this.states[1] = 'onTheCenter';
            this.states[2] = 'onTheLeft';
        }
        else if (this.currentInfo === 2) {
            this.states[0] = 'onTheLeft';
            this.states[1] = 'onTheRight';
            this.states[2] = 'onTheCenter';
        }
        else if (this.currentInfo === 3) {
            this.states[0] = 'onTheCenter';
            this.states[1] = 'onTheLeft';
            this.states[2] = 'onTheRight';
        }
        this.currentInfo = this.currentInfo % 3 + 1;
    };
    BannerComponent.prototype.previousInfo = function () {
        if (this.animating) {
            return;
        }
        this.animating = true;
        if (this.currentInfo === 1) {
            this.states[0] = 'onTheLeft';
            this.states[1] = 'onTheRight';
            this.states[2] = 'onTheCenter';
        }
        else if (this.currentInfo === 2) {
            this.states[0] = 'onTheCenter';
            this.states[1] = 'onTheLeft';
            this.states[2] = 'onTheRight';
        }
        else if (this.currentInfo === 3) {
            this.states[0] = 'onTheRight';
            this.states[1] = 'onTheCenter';
            this.states[2] = 'onTheLeft';
        }
        if (this.currentInfo === 1) {
            this.currentInfo = 3;
        }
        else {
            this.currentInfo -= 1;
        }
    };
    BannerComponent.prototype.slideFinished = function () {
        this.animating = false;
    };
    BannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'banner',
            template: __webpack_require__("./src/app/banner/banner.component.html"),
            styles: [__webpack_require__("./src/app/banner/banner.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations_slide_animation__["a" /* slide */]]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 80px;\r\n  background: #191919;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n::ng-deep .mat-button-wrapper {\r\n  padding-top: 0px !important;\r\n}\r\n\r\nbutton {\r\n  position: relative;\r\n  color: #fff;\r\n  width: 40px;\r\n  height: 40px;\r\n  bottom: 27px;\r\n}\r\n\r\nimg {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.content {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.owner {\r\n  color: grey;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\r\n    <div class='content'>\r\n      <button mat-fab color='primary' (click)='scrollToTop()'>\r\n        <img alt='arrow-up' src='assets/arrowUp.svg'/>\r\n      </button>\r\n      <div class='owner'>\r\n        Developed using Angular and Angular Material from scratch by Stefanos Panagiotis Argyriou.\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.scrollToTop = function () {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/my-skills/my-skills.component.css":
/***/ (function(module, exports) {

module.exports = ".my-skills-container {\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.header {\r\n    font-size: 40px;\r\n    font-weight: 500;\r\n    margin-top: 60px;\r\n    margin-bottom: 0.8em;\r\n    color: #000;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.skills {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\n.technical-skills-container {\r\n    width: 50%;\r\n}\r\n\r\n.panes {\r\n    margin: 50px 10px 10px 70px;\r\n}\r\n\r\nh4 {\r\n    font-size: 1.6em;\r\n    color: #232323;\r\n    letter-spacing: 1px;\r\n    margin-bottom: 1.4em;\r\n    padding-bottom: 0em;\r\n    position: relative;\r\n}\r\n\r\nh4:after {\r\n    position: absolute;\r\n    content: '';\r\n    background: #1cc7d0;\r\n    width: 20%;\r\n    height: 2px;\r\n    left: 1%;\r\n    bottom: -40%;\r\n}\r\n\r\np {\r\n    font-size: 14px;\r\n    letter-spacing: 1px;\r\n    color: #333;\r\n    line-height: 28px;\r\n    margin-bottom: 3em;\r\n}\r\n\r\n.progress-bars {\r\n    width: 94%;\r\n}\r\n\r\nmat-progress-bar {\r\n    height: 25px;\r\n}\r\n\r\n.progress-bar {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.my-services-container {\r\n    width: 50%;\r\n}\r\n\r\n.service-icons {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.service-icon {\r\n    width: 33%;\r\n}\r\n\r\n.service-icon img {\r\n    height: 48px;\r\n    width: 48px;\r\n    margin-right: 60px;\r\n    margin-left: 60px;\r\n    margin-top: 30px;\r\n}\r\n\r\n.service {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n}\r\n\r\n.text {\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/my-skills/my-skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='my-skills-container'>\r\n  <div style='text-align: center'>\r\n    <h3 class='header'>My skills</h3>      \r\n  </div>\r\n  <div class='skills'>\r\n    <div class='technical-skills-container'>\r\n      <div class='panes'>\r\n        <h4>\r\n          Technical skills\r\n        </h4>\r\n        <p>\r\n          {{ technicalSkills }}\r\n        </p>\r\n        <div class='progress-bars'>\r\n          <div class='progress-bar'>\r\n            Javascript\r\n            <mat-progress-bar\r\n              [color]=\"'primary'\"\r\n              [mode]=\"'determinate'\"\r\n              [value]=\"90\"\r\n              [bufferValue]=\"0\">\r\n            </mat-progress-bar>\r\n          </div>\r\n          <div class='progress-bar'>\r\n            Typescript\r\n            <mat-progress-bar\r\n              [color]=\"'primary'\"\r\n              [mode]=\"'determinate'\"\r\n              [value]=\"90\"\r\n              [bufferValue]=\"0\">\r\n            </mat-progress-bar>\r\n          </div>\r\n          <div class='progress-bar'>\r\n            C#\r\n            <mat-progress-bar\r\n              [color]=\"'primary'\"\r\n              [mode]=\"'determinate'\"\r\n              [value]=\"85\"\r\n              [bufferValue]=\"0\">\r\n            </mat-progress-bar>\r\n          </div>\r\n          <div class='progress-bar'>\r\n            MSSQL, PostgreSQL\r\n            <mat-progress-bar\r\n              [color]=\"'primary'\"\r\n              [mode]=\"'determinate'\"\r\n              [value]=\"85\"\r\n              [bufferValue]=\"0\">\r\n            </mat-progress-bar>\r\n          </div>\r\n          <div class='progress-bar'>\r\n            Angular 2+\r\n            <mat-progress-bar\r\n              [color]=\"'primary'\"\r\n              [mode]=\"'determinate'\"\r\n              [value]=\"90\"\r\n              [bufferValue]=\"0\">\r\n            </mat-progress-bar>\r\n          </div>\r\n          <div class='progress-bar'>\r\n            .NET Core, Entity Framework Core\r\n            <mat-progress-bar\r\n              [color]=\"'primary'\"\r\n              [mode]=\"'determinate'\"\r\n              [value]=\"80\"\r\n              [bufferValue]=\"0\">\r\n            </mat-progress-bar>\r\n          </div>\r\n          <div class='progress-bar'>\r\n            Software Design and Methodologies\r\n            <mat-progress-bar\r\n              [color]=\"'primary'\"\r\n              [mode]=\"'determinate'\"\r\n              [value]=\"95\"\r\n              [bufferValue]=\"0\">\r\n            </mat-progress-bar>\r\n          </div>\r\n        </div>\r\n        <p>\r\n          Other knowledge: Entity Framework, Bash scripting, Docker, Kubernetes, AWS\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div class='my-services-container'>\r\n      <div class='panes'>\r\n        <h4>\r\n            My Services\r\n        </h4>\r\n        <p>\r\n          {{ services }}\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/my-skills/my-skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MySkillsComponent = /** @class */ (function () {
    function MySkillsComponent() {
        this.technicalSkills = 'The completion of numerous academic projects as well as my experience at the Full Development stack has allowed me to achieve deep knowledge on modern Software Languages and Tools.';
        this.services = 'As an Electrical and Computer Engineer I have come in contact with a multitude of scientific fields and I have cultivated an innate understanding of many heterogeneous Software and non-Software systems.';
    }
    MySkillsComponent.prototype.ngOnInit = function () {
    };
    MySkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'my-skills',
            template: __webpack_require__("./src/app/my-skills/my-skills.component.html"),
            styles: [__webpack_require__("./src/app/my-skills/my-skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MySkillsComponent);
    return MySkillsComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports) {

module.exports = ".nav-bar-container {\r\n    width: 100%;\r\n    height: 68px;\r\n    background-color: #ffffff;\r\n\r\n    display: -webkit-box;\r\n\r\n    display: -ms-flexbox;\r\n\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n\r\n    -webkit-box-sizing: border-box;\r\n\r\n            box-sizing: border-box;\r\n\r\n    padding-top: 8px;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\n.logo {\r\n    padding-left: 80px;\r\n    font-size: 38px;\r\n    font-weight: 400;\r\n    color: #00bce4;\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.cv-logo {\r\n    font-weight: 700;\r\n}\r\n\r\n.links {\r\n    margin-right: 65px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.links a {\r\n    text-decoration: none;\r\n}\r\n\r\nimg {\r\n    margin-left: 4px;\r\n    margin-right: 4px;\r\n    width: 36px;\r\n    height: 36px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='nav-bar-container'>\r\n  <div class='logo'>\r\n    Personal Website\r\n  </div>\r\n  <div class='links'>\r\n    <a target='_blank' href='https://github.com/Stefanos423'>\r\n      <img alt='github-link' src='assets/github.svg'/>\r\n    </a>\r\n    <a target='_blank' href='https://www.linkedin.com/in/stefanos-panagiotis-argyriou-6a2790133/'>\r\n      <img alt='linkedin-link' src='assets/linkedin.svg'/>\r\n    </a>\r\n    <img alt='facebook-link' src='assets/facebook.svg'/>\r\n    <img alt='youtube-link' src='assets/YouTube.svg'/>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'nav-bar',
            template: __webpack_require__("./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__("./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/scrollable-info/scrollable-info.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/scrollable-info/scrollable-info.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color='primary'>Random stuff</button>"

/***/ }),

/***/ "./src/app/scrollable-info/scrollable-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollableInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollableInfoComponent = /** @class */ (function () {
    function ScrollableInfoComponent() {
    }
    ScrollableInfoComponent.prototype.ngOnInit = function () {
    };
    ScrollableInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'scrollable-info',
            template: __webpack_require__("./src/app/scrollable-info/scrollable-info.component.html"),
            styles: [__webpack_require__("./src/app/scrollable-info/scrollable-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScrollableInfoComponent);
    return ScrollableInfoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map