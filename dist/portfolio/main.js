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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  margin-top: 50px;\n  /*text-align: center;*/\n}\n\n#motto{\n  text-align: center;\n}\n\n#motto #name{\n  font-size: 3em;\n}\n\n.row{\n  justify-content: center;\n}\n\nimg{\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 1px solid #001f3f;\n}\n\na{\n  margin: 15px;\n}\n"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div id=\"motto\">\n    <p id=\"name\">Hello, </p>\n    <p>Thanks for visiting me, I think you know my name as you are here.</p>\n  </div>\n  <p style=\"font-size: 28px\">Anyway, I am <b>Rupesh yadav</b>. I am a final year student currently pursuing my B-Tech in\n    <b>Information Technology </b> from KIET Group of institutions, Muradnagar, Ghaziabad, India.\n  </p>\n\n  <p style=\"font-size: 28px; margin-top: 25px\">\n    As a web developer, I started doing development from 3rd year of my college (2017) and from then\n    I learned many technologies till now.\n    I’ve always sought out opportunities and challenges that are meaningful to me.\n  </p>\n\n  <p style=\"font-size: 28px; margin-top: 25px\">\n    I've never stopped engaging my passion to help others and solve problems.\n  </p>\n\n  <div style=\"text-align: center; font-size: 20px; margin: 25px 0 50px 0\">\n    <p>If you want to say hello or need any help, feel free to contact me on any of my social accounts.</p>\n    <div class=\"row\">\n      <a href=\"https://twitter.com/rupesh9401\" target=\"_blank\"><img src=\"../../assets/images/twitter.png\"></a>\n      <a href=\"https://github.com/shido94\" target=\"_blank\"><img src=\"../../assets/images/github-logo.png\"></a>\n      <a href=\"https://www.linkedin.com/in/rupesh-yadav-977575137/\" target=\"_blank\"><img src=\"../../assets/images/link.png\"></a>\n      <a href=\"https://www.facebook.com/profile.php?id=100009204218285\" target=\"_blank\"><img src=\"../../assets/images/facebook.png\"></a>\n      <a href=\"https://www.instagram.com/rupesh94yadav/\" target=\"_blank\"><img src=\"../../assets/images/insta.jpg\"></a>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_11__["ExperienceComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_12__["SkillsComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_14__["EducationComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_15__["ContactsComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_16__["ResumeComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_17__["MessageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_5__["myRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: myRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myRoutes", function() { return myRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");







var myRoutes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"]
    },
    {
        path: 'experience',
        component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceComponent"]
    },
    {
        path: 'skills',
        component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"]
    },
    {
        path: 'projects',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]
    },
    {
        path: 'education',
        component: _education_education_component__WEBPACK_IMPORTED_MODULE_5__["EducationComponent"]
    },
    {
        path: 'contact',
        component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_6__["ContactsComponent"]
    }
];


/***/ }),

/***/ "./src/app/contacts/contacts.component.css":
/*!*************************************************!*\
  !*** ./src/app/contacts/contacts.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  margin-top: 50px;\n  padding-left: 20px;\n}\n\n\nimg{\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin: 20px;\n}\n\n\na{\n  margin: 50px;\n}\n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cover\">\n  <app-header></app-header>\n  <!--<app-other-header [heading]=\"heading\"></app-other-header>-->\n  <div class=\"container\">\n      <a><img src=\"../../assets/images/584856bce0bb315b0f7675ad.png\"></a>\n      <a href=\"\" >rupeshyadav94.ryy@gmail.com</a>\n     <br>\n    <a href=\"https://github.com/shido94\"><img src=\"../../assets/images/github-logo.png\"></a>\n    <a href=\"https://github.com/shido94\"  target=\"_blank\">https://github.com/shido94</a>\n    <br>\n    <a href=\"https://www.linkedin.com/in/rupesh-yadav-977575137/\"><img src=\"../../assets/images/link.png\"></a>\n    <a href=\"https://www.linkedin.com/in/rupesh-yadav-977575137/\" target=\"_blank\" >https://www.linkedin.com/in/rupesh-yadav-977575137/</a>\n    <br>\n    <a href=\"https://www.facebook.com/profile.php?id=100009204218285\"><img src=\"../../assets/images/facebook.png\"></a>\n    <a href=\"https://www.facebook.com/profile.php?id=100009204218285\" target=\"_blank\" >https://www.facebook.com/profile.php?id=100009204218285</a>\n    <br>\n    <a href=\"https://www.instagram.com/rupesh94yadav/\"><img src=\"../../assets/images/insta.jpg\"></a>\n    <a href=\"https://www.instagram.com/rupesh94yadav/\" target=\"_blank\" >https://www.instagram.com/rupesh94yadav/</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
        this.heading = 'CONTACT';
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/contacts/contacts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/education/education.component.css":
/*!***************************************************!*\
  !*** ./src/app/education/education.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  margin-top: 50px;\n  /*display: flex;*/\n  justify-content: center;\n}\n\n.row{\n  display: flex;\n  justify-content: center;\n}\n\n.card-header{\n  background-color: #475869;\n  color: white;\n}\n\n.graduate{\n  width: 80%;\n  margin-bottom: 30px;\n}\n\n.graduate .card{\n  width: 350px;\n  margin: 20px;\n}\n"

/***/ }),

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cover\">\n  <app-header></app-header>\n  <!--<app-other-header [heading]=\"heading\"></app-other-header>-->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"card graduate\">\n        <div class=\"card-header\">\n          Graduation\n        </div>\n        <div class=\"card-body\">\n              <a href=\"https://www.kiet.edu/#/Home\" target=\"_blank\" class=\"nav-link\" >\n                <h5>KIET Group of Institutions</h5>\n              </a>\n              <p>Ghaziabad, Uttarpradesh</p>\n              <li><b>B-Tech</b> in Information Technology (2015-2019)</li>\n              <li>Pursuing</li>\n        </div>\n      </div>\n      <div class=\"card graduate\">\n        <div class=\"card-header\">\n          School\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"card first\">\n              <div class=\"card-body\">\n                <a href=\"https://www.kiet.edu/#/Home\" target=\"_blank\" class=\"nav-link\" >\n                  <h5>MS. Sr. secondary Academy</h5>\n                </a>\n                <p>Orai, jalaun, Uttarpradesh</p>\n                <li><b>Senior Secondary</b> (2013-2014)</li>\n                <li>secured 70%</li>\n              </div>\n            </div>\n            <div class=\"card second\">\n              <div class=\"card-body\">\n                <a href=\"https://www.kiet.edu/#/Home\" target=\"_blank\" class=\"nav-link\" >\n                  <h5>MS. Sr. secondary Academy</h5>\n                </a>\n                <p>Orai, jalaun, Uttarpradesh</p>\n                <li><b>Higher Secondary</b> (2011-2012)</li>\n                <li>secured 9.4 CGPA</li>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
        this.heading = 'EDUCATION';
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/education/education.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n  /*text-align: center;*/\n}\n\n.cover{\n  /*background-color: #F3F3F3;*/\n  height: 100%;\n}\n\n.card {\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nimg {\n  height: 50px;\n  width: 50px;\n}\n\n.card-header{\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cover\">\n  <app-header></app-header>\n  <div class=\"container\">\n      <div class=\"card \">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"center\">\n              <img class=\"card-img-top\" src=\"../../assets/images/apnicare.png\" alt=\"Card image cap\">\n              <p><b><a class=\"nav-link\" href=\"https://www.apnicare.com/\" target=\"_blank\">Apnicare</a></b></p>\n              <p>Backend developer</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <p class=\"card-text\"><em>Platform which provide users to direct interact with doctors online and also can get\n            the tablet, disease information\n          </em></p>\n          <br>\n          <li class=\"nav-item\">Company- Soni Brothers Ecom. Pvt Ltd <em>(Startup based company)</em></li>\n          <li class=\"nav-item\">Internship at ApniCare</li>\n          <li class=\"nav-item\">Technology used- <b>MongoDb & Nodejs</b></li>\n          <li class=\"nav-item\">Total <b>6</b> meambers team</li>\n          <br>\n          <em style=\"font-style: italic\">september-2017 -  february-2018</em>\n        </div>\n      </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
        this.heading = 'EXPERIENCE';
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav{\n  background: #475869;\n}\n\na img{\n  /*margin: 5px 50px 0 0;*/\n  width: 60px;\n  height: 60px;\n  border: 1px solid #428bca;\n  border-radius: 50%;\n}\n\na{\n  margin-left: 30px;\n  color: #ffff;\n}\n\n.navbar-nav .nav-item .nav-link:hover{\n  color: #ffff;\n}\n\n.nav-link{\n  color: #ffff;\n}\n\n#hello{\n  text-decoration: none;\n  font-family: 'Lato', sans-serif;\n  font-weight: 700;\n  /*color: #E5E5E5;*/\n  border-radius: 45px;\n  color: #ffffff;\n  border: 2px solid white;\n}\n\n.nav-item .nav-link{\n  color: #ffffff;\n  /*border: 1px solid #ffffff;*/\n  border-radius: 8px;\n}\n\n.nav-item .nav-link:hover{\n  color: #001f3f;\n  background-color: white;\n}\n\n/*#nav-content #nav > .active > a {*/\n\n/*color: black;*/\n\n/*!*background-color: black;*!*/\n\n/*}*/\n\n.nav-item .class-name{\n  color: #001f3f;\n  background-color: white;\n}\n\n#says a{\n  margin-right: 20px;\n}\n\n#says a:hover{\n  background-color: #428bca;\n  color: white;\n}\n\n#last{\n  margin-right: 20px;\n}\n\nhr{\n  margin: 0;\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-light bg-faded\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-content\" aria-controls=\"nav-content\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <!-- Brand -->\n  <a class=\"navbar-brand\" routerLink=\"/\">\n    <img src=\"../../assets/images/rupi.png\">\n  </a>\n\n  <!-- Links -->\n  <div class=\"collapse navbar-collapse justify-content-end\" id=\"nav-content\">\n    <ul class=\"navbar-nav\" id=\"nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"class-name\" routerLinkActiveOptions=\"{exact:true}\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/experience\" routerLinkActive=\"class-name\" routerLinkActiveOptions=\"{exact:true}\">Experience</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/skills\" routerLinkActive=\"class-name\" routerLinkActiveOptions=\"{exact:true}\">Skills</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/projects\" routerLinkActive=\"class-name\" routerLinkActiveOptions=\"{exact:true}\">Projects</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/education\" routerLinkActive=\"class-name\" routerLinkActiveOptions=\"{exact:true}\">Education</a>\n      </li>\n      <li class=\"nav-item\" id=\"last\">\n        <a class=\"nav-link\" href=\"https://www.dropbox.com/s/ef9rz0hc554tapr/Rupesh_made_cv.pdf?dl=0\" target=\"_blank\">Resume</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<hr>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        //   $(function() {
        //     console.log('reaches');
        //     $('#nav li a').click(function() {
        //       // $('#nav li').removeClass();
        //       // $($(this).attr('routerLink')).addClass('active');
        //       $(this).addClass('active').siblings().removeClass('active');
        //   });
        //
        // });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n.page-header {\n  /*background-image: url(\"../../assets/images/blue.png\");*/\n  /*background-color: #001f3f;*/\n  /* Full height */\n  height: 86.5%;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  /*color: white;*/\n}\n\n#motto{\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 200px;\n  flex-basis: 0;\n  /*width: 50%;*/\n  margin: auto;\n  text-align: center;\n\n}\n\n#hello{\n  text-decoration: none;\n  font-family: 'Lato', sans-serif;\n  font-weight: 700;\n  /*color: #E5E5E5;*/\n  border-radius: 45px;\n  color: #001f3f;\n  border: 2px solid #001f3f;\n}\n\n#help{\n  -webkit-font-smoothing: antialiased;\n  line-height:1em;\n  margin:-20px 0 -15px 0;\n\n}\n\n.innerText #help{\n  width: 100%;\n  font-size: 8em;\n}\n\n#spaceSpan{\n  flex-basis: 100%;\n}\n\n#p2{\n  text-align: right;\n  width: 65%;\n  flex-basis: 0;\n  font-style: italic;\n}\n\n#p1{\n  margin: 20px 0 0 0;\n  width: 44%;\n  text-align: right;\n  font-style: italic;\n\n}\n\n.wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n#footer{\n  margin: 0 20px;\n}\n\n#footer p{\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  color: #E5E5E5;\n  text-align: center;\n  flex-wrap: wrap;\n  overflow-wrap: break-word;\n}\n\n#motto .wrap a:hover{\n  color: white;\n  background-color: #001f3f;\n}\n\n#motto #name{\n  font-size: 3em;\n}\n\n#menu div {\n  width: 35px;\n  height: 5px;\n  background-color: white;\n  margin: 6px 0;\n}\n\n@media only screen and (min-width : 990px) {\n  #login {\n    display: none;\n  }\n}\n\n@media only screen and (min-width : 980px) and (max-width : 990px){\n  /*#login {*/\n  /*display: block;*/\n  /*}*/\n\n  #newdiv{\n    display: block;\n  }\n  #changeSize {\n    font-size: 3em;\n  }\n}\n\n@media only screen and (min-width : 564px) and (max-width : 979px){\n  #changeSize {\n    font-size: 2em;\n  }\n\n  #p2{\n    text-align: right;\n    width: 80%;\n    flex-basis: 0;\n  }\n\n  #p1{\n    margin: 20px 0 0 0;\n    width: 35%;\n    text-align: right;\n  }\n}\n\n@media only screen and (min-width : 301px) and (max-width : 563px) {\n  #changeSize {\n    font-size: 1em;\n  }\n\n\n  #p1{\n    margin: 20px 0 0 0;\n    width: 30%;\n    text-align: right;\n  }\n\n  #p2{\n    text-align: right;\n    width: 95%;\n    flex-basis: 0;\n  }\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<!--<div class=\"container\">-->\n  <!--<div class=\"row\">-->\n    <!--<div id=\"center\">-->\n      <!--<h1>Hey, I am Rupesh yadav</h1>-->\n      <!--<p class=\"font\">I design and code beautifully simple things, and I love what I do.</p>-->\n      <!--<div>-->\n        <!--<img src=\"../../assets/images/pics.jpeg\" >-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n\n\n<div class=\"page-header\">\n  <div class=\"filter\"></div>\n  <div class=\"content-center\">\n    <div id=\"motto\">\n      <p id=\"name\">Hello, I am Rupesh Yadav</p>\n      <span class=\"spaceSpan\"></span>\n      <div class=\"innerText\">\n        <p id=\"p1\">If you want to</p>\n        <p id=\"help\">Know</p>\n        <p id=\"p2\">Me, You are @ right place</p>\n      </div>\n      <span class=\"spaceSpan\"></span>\n      <div class=\"wrap\">\n        <a class=\"btn btn-round\" routerLink=\"/about\" id=\"hello\">Say hello</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  message works!\n</p>\n"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  margin-top: 100px;\n}\n\n/*.card{*/\n\n/*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/\n\n/*!*width: 100%;*!*/\n\n/*width: 300px;*/\n\n/*height: 300px;*/\n\n/*}*/\n\n.card{\n  width: 18rem;\n  height: 18rem;\n  margin: 25px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.card p{\n  color: #353535;\n  line-height: 10px;\n}\n\n.card img{\n  height: 220px;\n\n}\n\na{\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"card\" >\n      <img  class=\"card-img-top\" src=\"../../assets/images/coll.png\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <p><a href=\"https://colloque.herokuapp.com/\" target=\"_blank\">A Chat app to talk with strangers</a></p>\n      </div>\n    </div>\n    <div class=\"card\" >\n      <img  class=\"card-img-top\" src=\"../../assets/images/apni.png\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n        <p><a href=\"https://www.apnicare.com/\" target=\"_blank\">App to interact users and doctors</a></p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.css":
/*!*********************************************!*\
  !*** ./src/app/resume/resume.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  height: 80px;\n  background-color: #428bca;\n  color: white;\n}\n\n\n.alignleft {\n  float: left;\n  text-align:left;\n  width:33.33333%;\n}\n\n\n.alignleft .nav-link{\n  color: white;\n}\n\n\ni{\n  margin-top: 12px;\n  font-size: 3em;\n}\n\n\n.aligncenter {\n  font-size: 3em;\n  float: left;\n  text-align:center;\n  width:33.33333%;\n}\n"

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cover{\n  /*background-color: #F3F3F3;*/\n  height: 100%;\n}\n\nimg{\n  width: 100px;\n  height: 100px;\n  margin: 50px;\n}\n\np{\n  margin-left: 60px;\n}\n\n.card{\n  margin-top: 50px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.card .card-header{\n  background-color: #475869;\n  color: white;\n}\n\n.card .card-body {\n  display: flex;\n  justify-content: center;\n}\n\n#last{\n  margin-bottom: 20px;\n}\n\n@media screen and (max-width: 600px) {\n  img{\n    width: 200px;\n    height: 150px;\n    margin: 50px;\n  }\n  p{\n    margin-left: 115px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cover\">\n  <app-header></app-header>\n  <!--<app-other-header [heading]=\"heading\"></app-other-header>-->\n  <div class=\"container\">\n\n    <div class=\"card\">\n      <div class=\"card-header\">\n        JAVASCRIPT\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"flex-column\">\n            <img src=\"../../assets/images/js.png\">\n            <p>Javascript</p>\n          </div>\n          <div class=\"flex-column\">\n            <img src=\"../../assets/images/jquery.jpg\">\n            <p>Jquery</p>\n          </div>\n          <div class=\"flex-column\">\n            <img src=\"../../assets/images/angul.jpg\">\n            <p>Angular 4</p>\n          </div>\n          <div class=\"flex-column\">\n            <img src=\"../../assets/images/node.png\">\n            <p>NodeJs</p>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        HTML\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"flex-column\">\n            <img src=\"../../assets/images/html.png\">\n            <p>HTML 5</p>\n          </div>\n          <div class=\"flex-column\">\n            <img src=\"../../assets/images/jade.png\">\n            <p>Jade</p>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-header\">\n        CSS\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"flex-column\">\n            <img src=\"../../assets/images/css.png\">\n            <p>CSS 3</p>\n          </div>\n          <div class=\"flex-column\">\n            <img src=\"../../assets/images/boot.png\">\n            <p>Bootstrap 4</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Backend\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"flex-column\">\n            <img src=\"../../assets/images/mongo.webp\">\n            <p>MongoDb</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card\" id=\"last\">\n      <div class=\"card-header\">\n        Other\n      </div>\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"flex-column\">\n            <img src=\"../../assets/images/github-logo.png\">\n            <p>Github</p>\n          </div>\n          <div class=\"flex-column\">\n            <img src=\"../../assets/images/hero.png\">\n            <p>Heroku</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
        this.heading = 'SKILLS';
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/shido/Desktop/rupesh-portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map