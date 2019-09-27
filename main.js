(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/angular-details/angular-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/angular-details/angular-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXItZGV0YWlscy9hbmd1bGFyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/angular-details/angular-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/angular-details/angular-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  angular-details works!\n</p>\n"

/***/ }),

/***/ "./src/app/angular-details/angular-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/angular-details/angular-details.component.ts ***!
  \**************************************************************/
/*! exports provided: AngularDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularDetailsComponent", function() { return AngularDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AngularDetailsComponent = /** @class */ (function () {
    function AngularDetailsComponent() {
    }
    AngularDetailsComponent.prototype.ngOnInit = function () {
    };
    AngularDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-angular-details',
            template: __webpack_require__(/*! ./angular-details.component.html */ "./src/app/angular-details/angular-details.component.html"),
            styles: [__webpack_require__(/*! ./angular-details.component.css */ "./src/app/angular-details/angular-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AngularDetailsComponent);
    return AngularDetailsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _connect_connect_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connect/connect.component */ "./src/app/connect/connect.component.ts");
/* harmony import */ var _cindy_cindy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cindy/cindy.component */ "./src/app/cindy/cindy.component.ts");
/* harmony import */ var _how_to_how_to_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./how-to/how-to.component */ "./src/app/how-to/how-to.component.ts");
/* harmony import */ var _indoor_details_indoor_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./indoor-details/indoor-details.component */ "./src/app/indoor-details/indoor-details.component.ts");
/* harmony import */ var _outdoor_details_outdoor_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./outdoor-details/outdoor-details.component */ "./src/app/outdoor-details/outdoor-details.component.ts");
/* harmony import */ var _while_working_details_while_working_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./while-working-details/while-working-details.component */ "./src/app/while-working-details/while-working-details.component.ts");


//import { CommonModule } from '@angular/common';








var routes = [
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "howto", component: _how_to_how_to_component__WEBPACK_IMPORTED_MODULE_6__["HowToComponent"] },
    { path: "connect", component: _connect_connect_component__WEBPACK_IMPORTED_MODULE_4__["ConnectComponent"] },
    { path: "cindy", component: _cindy_cindy_component__WEBPACK_IMPORTED_MODULE_5__["CindyComponent"] },
    { path: "indoor", component: _indoor_details_indoor_details_component__WEBPACK_IMPORTED_MODULE_7__["IndoorDetailsComponent"] },
    { path: "outdoor", component: _outdoor_details_outdoor_details_component__WEBPACK_IMPORTED_MODULE_8__["OutdoorDetailsComponent"] },
    { path: "whileworking", component: _while_working_details_while_working_details_component__WEBPACK_IMPORTED_MODULE_9__["WhileWorkingDetailsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pageContentWrapper {\r\n  min-height: calc(100vh - 95px);\r\n}\r\n.footerText {\r\n  color: white;\r\n  margin: 0 auto;\r\n}\r\n.nav-link {\r\n  color: black;\r\n  font-weight: bold;\r\n}\r\n.Revesible {\r\n  color: #8b0000;\r\n  font-size: 30px;\r\n}\r\n.Myopia {\r\n  color: #00688b;\r\n  font-size: 22px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlQ29udGVudFdyYXBwZXIge1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcclxufVxyXG4uZm9vdGVyVGV4dCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5uYXYtbGluayB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5SZXZlc2libGUge1xyXG4gIGNvbG9yOiAjOGIwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4uTXlvcGlhIHtcclxuICBjb2xvcjogIzAwNjg4YjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-expand-lg navbar-dark bg-secondary\"> -->\n<nav class=\"navbar navbar-expand-lg lg-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <span class=\"Myopia\">Myopia is</span>\n    <span class=\"Revesible\"> reversible!</span>\n  </a>\n\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar()\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{ show: navbarOpen }\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/howto\">How?</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/connect\">Connect</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/cindy\">Cindy</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<br />\n<div class=\"w-100 p-7\">\n  <body>\n    <div class=\"pageContentWrapper\">\n      <router-outlet></router-outlet>\n    </div>\n  </body>\n</div>\n\n<div class=\"footer navbar navbar-expand-lg navbar-dark bg-secondary\">\n  <div class=\"footerText\">\n    <p>Copyright &copy; 2019 Myopia is reversible</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "rence-script-website";
        this.navbarOpen = false;
    }
    AppComponent.prototype.toggleNavbar = function () {
        this.navbarOpen = !this.navbarOpen;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _connect_connect_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./connect/connect.component */ "./src/app/connect/connect.component.ts");
/* harmony import */ var _cindy_cindy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cindy/cindy.component */ "./src/app/cindy/cindy.component.ts");
/* harmony import */ var _angular_details_angular_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./angular-details/angular-details.component */ "./src/app/angular-details/angular-details.component.ts");
/* harmony import */ var _how_to_how_to_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./how-to/how-to.component */ "./src/app/how-to/how-to.component.ts");
/* harmony import */ var _indoor_details_indoor_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./indoor-details/indoor-details.component */ "./src/app/indoor-details/indoor-details.component.ts");
/* harmony import */ var _outdoor_details_outdoor_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./outdoor-details/outdoor-details.component */ "./src/app/outdoor-details/outdoor-details.component.ts");
/* harmony import */ var _while_working_details_while_working_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./while-working-details/while-working-details.component */ "./src/app/while-working-details/while-working-details.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _connect_connect_component__WEBPACK_IMPORTED_MODULE_7__["ConnectComponent"],
                _cindy_cindy_component__WEBPACK_IMPORTED_MODULE_8__["CindyComponent"],
                _angular_details_angular_details_component__WEBPACK_IMPORTED_MODULE_9__["AngularDetailsComponent"],
                _how_to_how_to_component__WEBPACK_IMPORTED_MODULE_10__["HowToComponent"],
                _indoor_details_indoor_details_component__WEBPACK_IMPORTED_MODULE_11__["IndoorDetailsComponent"],
                _outdoor_details_outdoor_details_component__WEBPACK_IMPORTED_MODULE_12__["OutdoorDetailsComponent"],
                _while_working_details_while_working_details_component__WEBPACK_IMPORTED_MODULE_13__["WhileWorkingDetailsComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cindy/cindy.component.css":
/*!*******************************************!*\
  !*** ./src/app/cindy/cindy.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  border-radius: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2luZHkvY2luZHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NpbmR5L2NpbmR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/cindy/cindy.component.html":
/*!********************************************!*\
  !*** ./src/app/cindy/cindy.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"media\">\n  <span class=\"media-left\">\n    <img\n      width=\"200\"\n      alt=\"img\"\n      class=\"img-responsive\"\n      src=\"assets/img/cindytwo.jpeg\"\n    /> </span\n  >&nbsp;\n  <div class=\"media-body\">\n    <h4 class=\"media-heading\">\n      <a href=\"https://github.com/\" target=\"_blank\"> GitHub</a>\n    </h4>\n    The most loving caring sexy intelligent thoughtful and faithful girlfriend\n    in the world.\n    <p>The best chef ever!</p>\n    <p>The love of my life!</p>\n  </div>\n</div>\n\n<!-- <div class=\"media\">\n  <span class=\"media-left\">\n    <img\n      width=\"100\"\n      width=\"100\"\n      alt=\"img\"\n      class=\"img-responsive\"\n      src=\"assets/img/cindytwo.jpeg\"\n    /> </span\n  >&nbsp;\n  <div class=\"media-body\">\n    <h4 class=\"media-heading\">\n      <a href=\"https://github.com/\" target=\"_blank\"> GitHub</a>\n    </h4>\n    The most loving,caring,sexy,intelligent,thoughtful and faithful girlfriend\n    in the world.\n    <p>The best chef ever!</p>\n    <p>The love of my life!</p>\n  </div>\n</div> -->\n"

/***/ }),

/***/ "./src/app/cindy/cindy.component.ts":
/*!******************************************!*\
  !*** ./src/app/cindy/cindy.component.ts ***!
  \******************************************/
/*! exports provided: CindyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CindyComponent", function() { return CindyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CindyComponent = /** @class */ (function () {
    function CindyComponent() {
    }
    CindyComponent.prototype.ngOnInit = function () {
    };
    CindyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cindy',
            template: __webpack_require__(/*! ./cindy.component.html */ "./src/app/cindy/cindy.component.html"),
            styles: [__webpack_require__(/*! ./cindy.component.css */ "./src/app/cindy/cindy.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CindyComponent);
    return CindyComponent;
}());



/***/ }),

/***/ "./src/app/connect/connect.component.css":
/*!***********************************************!*\
  !*** ./src/app/connect/connect.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  border-radius: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29ubmVjdC9jb25uZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb25uZWN0L2Nvbm5lY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/connect/connect.component.html":
/*!************************************************!*\
  !*** ./src/app/connect/connect.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"box\">\n  <a href=\"https://github.com/\" id=\"github-header\"> GitHub</a>\n  <img\n    width=\"200\"\n    alt=\"img\"\n    class=\"img-responsive\"\n    src=\"assets/img/rence.jpg\"\n  />\n</div> -->\n\n<div class=\"media\">\n  <span class=\"media-left\">\n    <img\n      width=\"200\"\n      alt=\"img\"\n      class=\"img-responsive\"\n      src=\"assets/img/rence.jpg\"\n    /> </span\n  >&nbsp;\n  <div class=\"media-body\">\n    <h4 class=\"media-heading\">\n      <a href=\"https://github.com/\" target=\"_blank\"> GitHub</a>\n    </h4>\n    We are feeling so proud and pleased to present my repo projects available.\n    <a href=\"https://github.com/FlorenceRence\" target=\"_blank\"> here</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/connect/connect.component.ts":
/*!**********************************************!*\
  !*** ./src/app/connect/connect.component.ts ***!
  \**********************************************/
/*! exports provided: ConnectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectComponent", function() { return ConnectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConnectComponent = /** @class */ (function () {
    function ConnectComponent() {
    }
    ConnectComponent.prototype.ngOnInit = function () { };
    ConnectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-connect",
            template: __webpack_require__(/*! ./connect.component.html */ "./src/app/connect/connect.component.html"),
            styles: [__webpack_require__(/*! ./connect.component.css */ "./src/app/connect/connect.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConnectComponent);
    return ConnectComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">\n  You know what... <br />you can fixed your eyes naturally.\n</h2>\n\n<div style=\"background-color:#787878;color:white;\">\n  <div class=\"container p-4\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <span class=\"media-center\">\n          <img\n            width=\"330\"\n            alt=\"img\"\n            class=\"img-responsive\"\n            src=\"assets/img/renceSmile.jpg\"\n          />\n        </span>\n      </div>\n      <div class=\"col-md-8 p-4\" style=\"background:white;color:black\">\n        <p>\n          In grade school when I first noticed that I am myopic or nearsighted,\n          thats when I happen to go to a Ophthalmologist students to check how\n          bad my eyes were and at the same time get me a pair of glasses (dont\n          exactly remember the diopter but its below -2.00 at both eyes).\n        </p>\n        <p>\n          Every year my eyes gets even worse and my diopter rise up to -2.75 at\n          my right and -3 diopter at my left eye. This led me to think of what\n          will happen if I just let this happen (at the back of my mind, Im\n          thinking I would be blind sooner..).This started me on my journey that\n          has allowed me to restore my vision to 20/20. I will tell you exactly\n          how I did it on this website\n        </p>\n        <p>\n          This website is free for all. I’m not selling courses or any magic\n          pills. I’m providing you with my own experience, how I do it. You can\n          use this knowledge or not. If you try any of this and you have\n          success, Im only asking to help other people as well. Im not an\n          Ophthalmologist or Optometrist but you can be knowledgeable and be\n          like me or other people who successfully reverse their myopia.\n        </p>\n      </div>\n    </div>\n\n    <div class=\"text-left p-2\">\n      <p style=\"font-weight:bolder;font-size:25px;\">\n        How Can You Say That It Is Possible?\n      </p>\n      <p>\n        Have you experience good eye days where you can see a lot better than\n        yesterday?. Do you experience a little blur in your vision when your\n        tired or hungry or not feeling well? That only means that our vision\n        changes and our eyes are adoptive muscles.\n      </p>\n      <p>\n        Good thing our eyes can change an adopt to whatever we do. Think of it\n        as a muscle that needs to train in order to get stronger and stronger.\n      </p>\n      <p style=\"font-weight:bolder;font-size:25px;\">\n        A Little Background..\n      </p>\n\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <span class=\"media-center\">\n            <img\n              height=\"330\"\n              width=\"330\"\n              alt=\"img\"\n              class=\"img-responsive\"\n              src=\"assets/img/Elementary2.jpg\"\n            />\n          </span>\n        </div>\n        <div class=\"col-md-8\">\n          <p>\n            This is me exactly on my grade 6 graduation day probably 2006. I\n            look like a nerd school boy. This is the only picture I got with\n            glasses in grade school coz I dont have phone with camera that time.\n          </p>\n          <p>\n            When I first got my pair of glasses I didnt always wear them cause I\n            dont feel like wearing them all the time, even on my high school and\n            college days the only time I wear glasses is when Im in school\n            listening to my teacher, writing notes..\n          </p>\n          <p>\n            My eyes were gettings stronger every year so once every 2 to 3 years\n            I go to Opetometrist to get me a new pair of glasses which is higher\n            than my normal prescription.\n          </p>\n          <p>\n            I remember get called \"boy labo\"(boy blur vision) in school coz of\n            my eye glasses, I have a friend now who remeber me being called \"boy\n            labo\".\n          </p>\n        </div>\n      </div>\n      <br />\n      <p style=\"font-weight:bold;font-size:25px;\">\n        My Last Pair Of Glasses.\n      </p>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <p>\n            My glasses on my college years. -3 R & -2.75 L. It has damage on the\n            left frame..\n          </p>\n          <img\n            height=\"330\"\n            width=\"330\"\n            alt=\"img\"\n            class=\"img-responsive\"\n            src=\"assets/img/OldGlass.jpg\"\n          />\n        </div>\n        <div class=\"col-md-4\">\n          <p>\n            My last pair of glasses with -2 R & -2 L. Bought this on my first\n            year of my first job.\n          </p>\n          <img\n            height=\"330\"\n            width=\"330\"\n            alt=\"img\"\n            class=\"img-responsive\"\n            src=\"assets/img/NewGlass.jpg\"\n          />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-documentation",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/how-to/how-to.component.css":
/*!*********************************************!*\
  !*** ./src/app/how-to/how-to.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .rotate90 {\r\n  transform: rotate(90deg);\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG93LXRvL2hvdy10by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHIiwiZmlsZSI6InNyYy9hcHAvaG93LXRvL2hvdy10by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLnJvdGF0ZTkwIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbn0gKi9cclxuIl19 */"

/***/ }),

/***/ "./src/app/how-to/how-to.component.html":
/*!**********************************************!*\
  !*** ./src/app/how-to/how-to.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron text-center\">\n    <h3>\n      This Is Not An Exercise, This Is A Habit.\n    </h3>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <h3><a routerLink=\"/outdoor\">Outdoor.</a></h3>\n      <p>\n        This is how I do my daily outdoor routine when I...\n        <a routerLink=\"/outdoor\">see more.</a>\n      </p>\n      <img\n        height=\"200\"\n        width=\"300\"\n        alt=\"img\"\n        class=\"img-responsive rotate90\"\n        src=\"assets/img/Outdoor2.jpg\"\n      />\n    </div>\n    <div class=\"col-sm-4\">\n      <h3><a routerLink=\"/whileworking\">While Working.</a></h3>\n      <p>\n        You might think looking at the computer for hours will...\n        <a routerLink=\"/whileworking\">see more.</a>\n      </p>\n      <img\n        height=\"200\"\n        width=\"300\"\n        alt=\"img\"\n        class=\"img-responsive\"\n        src=\"assets/img/WhileWork.jpg\"\n      />\n    </div>\n    <div class=\"col-sm-4\">\n      <h3><a routerLink=\"/indoor\">Indoor.</a></h3>\n      <p>\n        What I do when Im home is just looking at my snellen...\n        <a routerLink=\"/indoor\">see more.</a>\n      </p>\n      <img\n        height=\"200\"\n        width=\"300\"\n        alt=\"img\"\n        class=\"img-responsive rotate90\"\n        src=\"assets/img/Indoor2.jpg\"\n      />\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/how-to/how-to.component.ts":
/*!********************************************!*\
  !*** ./src/app/how-to/how-to.component.ts ***!
  \********************************************/
/*! exports provided: HowToComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowToComponent", function() { return HowToComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HowToComponent = /** @class */ (function () {
    function HowToComponent() {
    }
    HowToComponent.prototype.ngOnInit = function () {
    };
    HowToComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-how-to',
            template: __webpack_require__(/*! ./how-to.component.html */ "./src/app/how-to/how-to.component.html"),
            styles: [__webpack_require__(/*! ./how-to.component.css */ "./src/app/how-to/how-to.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HowToComponent);
    return HowToComponent;
}());



/***/ }),

/***/ "./src/app/indoor-details/indoor-details.component.css":
/*!*************************************************************!*\
  !*** ./src/app/indoor-details/indoor-details.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZG9vci1kZXRhaWxzL2luZG9vci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/indoor-details/indoor-details.component.html":
/*!**************************************************************!*\
  !*** ./src/app/indoor-details/indoor-details.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"text-center\">\n    <img\n      height=\"400\"\n      width=\"500\"\n      alt=\"img\"\n      class=\"img-responsive rotate90\"\n      src=\"assets/img/Indoor2.jpg\"\n    />\n  </div>\n  <p>\n    What I do when Im home is just looking at my snellen or eye chart focusing\n    on the text where I can see a lit blur and trying to make it clear by being\n    aware of my peripheral images like the curtain, bed, the bulb and everything\n    around the snellen chart.\n  </p>\n  <p>\n    Its perfectly fine if you dont have snellen chart, just look at any objects\n    in your house that you cant see perfectly clear and try to foucs on it , be\n    aware of your peripheral until you can see it crystal clear.\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/indoor-details/indoor-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/indoor-details/indoor-details.component.ts ***!
  \************************************************************/
/*! exports provided: IndoorDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndoorDetailsComponent", function() { return IndoorDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndoorDetailsComponent = /** @class */ (function () {
    function IndoorDetailsComponent() {
    }
    IndoorDetailsComponent.prototype.ngOnInit = function () {
    };
    IndoorDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-indoor-details',
            template: __webpack_require__(/*! ./indoor-details.component.html */ "./src/app/indoor-details/indoor-details.component.html"),
            styles: [__webpack_require__(/*! ./indoor-details.component.css */ "./src/app/indoor-details/indoor-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndoorDetailsComponent);
    return IndoorDetailsComponent;
}());



/***/ }),

/***/ "./src/app/outdoor-details/outdoor-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/outdoor-details/outdoor-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL291dGRvb3ItZGV0YWlscy9vdXRkb29yLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/outdoor-details/outdoor-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/outdoor-details/outdoor-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"text-center\">\n    <img\n      height=\"400\"\n      width=\"600\"\n      alt=\"img\"\n      class=\"img-responsive rotate90\"\n      src=\"assets/img/Outdoor2Details.jpg\"\n    />\n  </div>\n  <p>\n    This is how I do my daily outdoor routine when I go to work. I just look at\n    the cars passing by and trying to focus on each plate numbers while its\n    moving.\n  </p>\n  <p>\n    Im doing active focus by doing this routine but when doing this, also notice\n    your peripheral , it means while looking at the plate number also be aware\n    of the objects around it like the people on the street, sign boards, trees ,\n    cars & etc. Peripheral is what helps you to focus on the plate numbers.\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/outdoor-details/outdoor-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/outdoor-details/outdoor-details.component.ts ***!
  \**************************************************************/
/*! exports provided: OutdoorDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutdoorDetailsComponent", function() { return OutdoorDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OutdoorDetailsComponent = /** @class */ (function () {
    function OutdoorDetailsComponent() {
    }
    OutdoorDetailsComponent.prototype.ngOnInit = function () {
    };
    OutdoorDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-outdoor-details',
            template: __webpack_require__(/*! ./outdoor-details.component.html */ "./src/app/outdoor-details/outdoor-details.component.html"),
            styles: [__webpack_require__(/*! ./outdoor-details.component.css */ "./src/app/outdoor-details/outdoor-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OutdoorDetailsComponent);
    return OutdoorDetailsComponent;
}());



/***/ }),

/***/ "./src/app/while-working-details/while-working-details.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/while-working-details/while-working-details.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3doaWxlLXdvcmtpbmctZGV0YWlscy93aGlsZS13b3JraW5nLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/while-working-details/while-working-details.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/while-working-details/while-working-details.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"text-center\">\n    <img\n      height=\"400\"\n      width=\"550\"\n      alt=\"img\"\n      class=\"img-responsive rotate90\"\n      src=\"assets/img/WhileWork.jpg\"\n    />\n  </div>\n  <p>\n    You might think looking at the computer for hours will not help you to\n    reverse your nearsightedness and might as well make it worse?. Your probably\n    right and wrong..\n  </p>\n  <p style=\"font-weight:bolder;font-size:20px;\">\n    Why your right?\n  </p>\n  <p>\n    People used to looking at their computer or even smart phones with not so\n    near distance, this makes the image or text on the screen so clear that\n    makes your eyes elongated, this makes the image from the front lens of your\n    eye going to the front of the retina, not on the back of the retina which is\n    the normal phase.\n  </p>\n  <p>\n    Also if your looking at your screen and not aware of your peripheral, this\n    makes your ciliary muscles spasm. means your eyes are now lock up when\n    looking at distance or near objects. Coz ciliary muscle changes when we look\n    at things up close and up front.\n  </p>\n  <p style=\"font-weight:bolder;font-size:20px;\">\n    Why your wrong?\n  </p>\n  <p>\n    You can train your eyes while looking at your screen by doing the reverse.\n    Simply adjust your screen distance until you see a little bit of blur\n    challenge on the image or text. Also be aware of your peripheral like your\n    seatmate, cup beside your computer, people walking around, people in your\n    front and etc..\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/while-working-details/while-working-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/while-working-details/while-working-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: WhileWorkingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhileWorkingDetailsComponent", function() { return WhileWorkingDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WhileWorkingDetailsComponent = /** @class */ (function () {
    function WhileWorkingDetailsComponent() {
    }
    WhileWorkingDetailsComponent.prototype.ngOnInit = function () {
    };
    WhileWorkingDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-while-working-details',
            template: __webpack_require__(/*! ./while-working-details.component.html */ "./src/app/while-working-details/while-working-details.component.html"),
            styles: [__webpack_require__(/*! ./while-working-details.component.css */ "./src/app/while-working-details/while-working-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WhileWorkingDetailsComponent);
    return WhileWorkingDetailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\NaturalMethodWithRence\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map