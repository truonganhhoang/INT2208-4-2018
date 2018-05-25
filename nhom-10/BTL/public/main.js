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

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _octicon_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./octicon.directive */ "./src/app/octicon.directive.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _deck_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./deck.service */ "./src/app/deck.service.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _learn_learn_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./learn/learn.component */ "./src/app/learn/learn.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _octicon_directive__WEBPACK_IMPORTED_MODULE_4__["OcticonDirective"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_10__["CreateComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_19__["ViewComponent"],
                _learn_learn_component__WEBPACK_IMPORTED_MODULE_20__["LearnComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]]
                    },
                    {
                        path: 'login',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                    },
                    {
                        path: 'logout',
                        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_12__["LogoutComponent"],
                    },
                    {
                        path: 'register',
                        component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                    },
                    {
                        path: 'create',
                        component: _create_create_component__WEBPACK_IMPORTED_MODULE_10__["CreateComponent"],
                        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]]
                    },
                    {
                        path: 'profile',
                        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]]
                    },
                    {
                        path: 'dashboard',
                        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]]
                    },
                    {
                        path: 'view/:deckId',
                        component: _view_view_component__WEBPACK_IMPORTED_MODULE_19__["ViewComponent"],
                        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]]
                    },
                    {
                        path: 'learn/:deckId/:lesson',
                        component: _learn_learn_component__WEBPACK_IMPORTED_MODULE_20__["LearnComponent"],
                        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]]
                    },
                    {
                        path: 'edit/:deckId',
                        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"],
                        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]]
                    }
                ])
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"], _deck_service__WEBPACK_IMPORTED_MODULE_18__["DeckService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        if (this.authService.getLoggedInStatus()) {
            return true;
        }
        return this.authService.checkLoginStatus().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            if (res.status) {
                _this.authService.setLoggedInStatus(true);
                return true;
            }
            else {
                _this.router.navigate(['login']);
                return false;
            }
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.loggedInStatus = false;
    }
    AuthService.prototype.setLoggedInStatus = function (value) {
        this.loggedInStatus = value;
    };
    AuthService.prototype.getLoggedInStatus = function () {
        return this.loggedInStatus;
    };
    AuthService.prototype.logIn = function (username, password) {
        return this.http.post('http://localhost:3000/api/login', {
            username: username,
            password: password
        });
    };
    AuthService.prototype.logOut = function () {
        return this.http.get('http://localhost:3000/api/logout');
    };
    AuthService.prototype.register = function (username, password) {
        return this.http.post('http://localhost:3000/api/register', {
            username: username,
            password: password
        });
    };
    AuthService.prototype.checkLoginStatus = function () {
        return this.http.get('http://localhost:3000/api/loginstatus');
    };
    AuthService.prototype.getCurrentUser = function () {
        return this.http.get('http://localhost:3000/api/currentuser');
    };
    AuthService.prototype.changePassword = function (oldPassword, newPassword) {
        return this.http.post('http://localhost:3000/api/changepassword', {
            oldPassword: oldPassword,
            newPassword: newPassword
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/create/create.component.css":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/create/create.component.html":
/*!**********************************************!*\
  !*** ./src/app/create/create.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row mt-3\">\n    <h1 class=\"display-4\">Tạo bộ thẻ mới</h1>\n  </div>\n\n  <div class=\"row mt-3\">\n    <ngb-alert class=\"text-center\" *ngIf=\"message\" type=\"danger\" [dismissible]=\"true\" (close)=\"message = ''\">\n        <strong>Lỗi!</strong> {{ message }}\n    </ngb-alert>\n  </div>\n\n  <div class=\"row my-3\">\n    <div class=\"input-group input-group-lg\">\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"title\" id=\"title\" placeholder=\"Tiêu đề\">\n    </div>\n  </div>\n\n  <div class=\"row my-3\">\n    <div class=\"input-group input-group-lg\">\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"description\" id=\"description\" placeholder=\"Mô tả\">\n    </div>\n  </div>\n\n  <div class=\"row mt-2 mb-4\">\n    <button class=\"btn btn-success mr-2\" (click)=\"saveDeck()\">Lưu lại</button>\n    <button class=\"btn btn-dark\" routerLink=\"/dashboard\">Huỷ bỏ</button>\n  </div>\n  \n  <hr>\n\n  <div class=\"row mt-4\">\n    <h1 class=\"lead\">Thêm thẻ mới</h1>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"input-group\">\n        <input class=\"form-control\" [(ngModel)]=\"newFront\" type=\"text\" id=\"front\" placeholder=\"Mặt trước\">\n        <input class=\"form-control\" [(ngModel)]=\"newBack\" type=\"text\" id=\"front\" placeholder=\"Mặt sau\">\n        <button class=\"btn btn-info ml-2\" (click)=\"addCard()\">Thêm</button>\n    </div>\n  </div>\n\n  <div class=\"row mt-4 mb-2\">\n      <h1 class=\"lead\">Chỉnh sửa thẻ đã tạo</h1>\n  </div>\n\n<ng-container *ngFor=\"let card of this.allCards.slice().reverse()\">\n  <div class=\"row mt-2\">\n    <div class=\"input-group\">\n      <input class=\"form-control\" [(ngModel)]=\"card.front\" type=\"text\" id=\"front\" placeholder=\"Mặt trước\">\n      <input class=\"form-control\" [(ngModel)]=\"card.back\" type=\"text\" id=\"back\" placeholder=\"Mặt sau\">\n      <button class=\"btn btn-danger ml-2\" (click)=\"deleteCard(card)\">Xoá</button>\n    </div>\n  </div>\n</ng-container>\n\n  <div class=\"row mb-5\"></div>\n\n</div>"

/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _deck_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../deck.service */ "./src/app/deck.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateComponent = /** @class */ (function () {
    function CreateComponent(route, deckService, location, router) {
        this.route = route;
        this.deckService = deckService;
        this.location = location;
        this.router = router;
        this.deckId = '';
        this.deck = {};
        this.lessons = [];
        this.allCards = [];
        this.message = '';
        this.title = '';
        this.description = '';
        this.newFront = '';
        this.newBack = '';
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.updateAllCards();
    };
    CreateComponent.prototype.saveDeck = function () {
        var _this = this;
        if (this.title === '') {
            this.message = 'Tiêu đề bộ thẻ không được để trống.';
        }
        else {
            if (this.allCards.length < 3) {
                this.message = 'Một bộ thẻ cần có ít nhất 3 thẻ khởi đầu.';
            }
            else {
                this.deckService.newDeck(this.title, this.description, JSON.stringify(this.lessons)).subscribe(function (data) {
                    if (data.success) {
                        console.log('new deck added');
                    }
                    _this.deckId = data.deckId;
                    _this.router.navigate(['view/' + _this.deckId]);
                });
            }
        }
        // this.router.navigate...
    };
    CreateComponent.prototype.addCard = function () {
        if (this.newFront === '' || this.newBack === '') {
            this.message = 'Không được thêm một thẻ trống.';
        }
        else {
            for (var i = 0; i < this.allCards.length; ++i) {
                if (this.allCards[i].front === this.newFront
                    && this.allCards[i].back === this.newBack) {
                    this.message = 'Thẻ này đã tồn tại';
                    return;
                }
            }
            var isAdded = false;
            var newCard = { front: this.newFront, back: this.newBack, box: 0 };
            for (var _i = 0, _a = this.lessons; _i < _a.length; _i++) {
                var lesson = _a[_i];
                if (lesson.cards.length < 5) {
                    lesson.cards.push(newCard);
                    isAdded = true;
                    break;
                }
            }
            if (!isAdded) {
                var newLesson = { orderNum: this.lessons.length + 1, cards: [] };
                newLesson.cards.push(newCard);
                if (this.lessons.length === 0) {
                }
                else {
                    var len = this.lessons.length;
                    newLesson.cards.push(this.lessons[len - 1].cards[4]);
                    this.lessons[0].cards.splice(4, 1);
                    newLesson.cards.push(this.lessons[len - 1].cards[3]);
                    this.lessons[0].cards.splice(3, 1);
                }
                this.lessons.push(newLesson);
            }
            this.updateAllCards();
            this.newFront = '';
            this.newBack = '';
        }
    };
    CreateComponent.prototype.deleteCard = function (cardToDelete) {
        for (var _i = 0, _a = this.lessons; _i < _a.length; _i++) {
            var lesson = _a[_i];
            var isDeleted = false;
            var i = 0;
            for (var _b = 0, _c = lesson.cards; _b < _c.length; _b++) {
                var card = _c[_b];
                if (card.front === cardToDelete.front) {
                    lesson.cards.splice(i, 1);
                    isDeleted = true;
                    break;
                }
                ++i;
            }
            if (isDeleted) {
                break;
            }
        }
        // optimizing lessons
        this.updateAllCards();
    };
    CreateComponent.prototype.updateAllCards = function () {
        this.allCards.splice(0, this.allCards.length);
        for (var _i = 0, _a = this.lessons; _i < _a.length; _i++) {
            var lesson = _a[_i];
            for (var _b = 0, _c = lesson.cards; _b < _c.length; _b++) {
                var card = _c[_b];
                this.allCards.push(card);
            }
        }
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _deck_service__WEBPACK_IMPORTED_MODULE_3__["DeckService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n<div class=\"text-center mt-4\">\n    <h1 class=\"display-4\">Các bộ thẻ của bạn</h1>\n</div>\n<div class=\"row justify-content-center align-self-center\" >\n    <div *ngFor=\"let deck of decks\" >\n    <div class=\"card text-center shadow border border-primary\" style=\"float: left; width: 180px; height: 280px;\" [ngStyle]=\"{'margin-top.px': '100', 'margin-right.px': '20'}\">\n        <div class=\"card-header\">\n            <h5 class=\"card-title\">{{deck.title}}</h5>\n        </div>\n        <div class=\"card-body\">\n            <p class=\"card-text\">{{deck.description}}</p>\n            <a class=\"btn btn-primary my-5 mx-3 border border-primary rounded shadow\" routerLink=\"/view/{{ deck._id }}\">Xem</a>            \n        </div>\n    </div>\n    </div>\n</div>\n</div>\n      "

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _deck_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../deck.service */ "./src/app/deck.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(deckService) {
        this.deckService = deckService;
        this.decks = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deckService.getDecks().subscribe(function (data) {
            _this.decks = data;
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_deck_service__WEBPACK_IMPORTED_MODULE_1__["DeckService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/deck.service.ts":
/*!*********************************!*\
  !*** ./src/app/deck.service.ts ***!
  \*********************************/
/*! exports provided: DeckService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckService", function() { return DeckService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeckService = /** @class */ (function () {
    function DeckService(http) {
        this.http = http;
    }
    DeckService.prototype.getDecks = function () {
        return this.http.get('http://localhost:3000/api/getdecks');
    };
    DeckService.prototype.getDeckById = function (id) {
        return this.http.post('http://localhost:3000/api/getdeckbyid', {
            id: id
        });
    };
    DeckService.prototype.getLesson = function (deckId, lessonOrderNum) {
        return this.http.post('http://localhost:3000/api/getlesson', {
            deckId: deckId,
            lessonOrderNum: lessonOrderNum
        });
    };
    DeckService.prototype.updateLesson = function (deckId, lessons) {
        return this.http.post('http://localhost:3000/api/updatelesson', {
            deckId: deckId,
            lessons: lessons
        });
    };
    DeckService.prototype.updateDeck = function (deckId, title, description, lessons) {
        return this.http.post('http://localhost:3000/api/updatedeck', {
            deckId: deckId,
            title: title,
            description: description,
            lessons: lessons
        });
    };
    DeckService.prototype.newDeck = function (title, description, lessons) {
        return this.http.post('http://localhost:3000/api/newdeck', {
            title: title,
            description: description,
            lessons: lessons
        });
    };
    DeckService.prototype.deleteDeck = function (deckId) {
        return this.http.post('http://localhost:3000/api/deletedeck', {
            deckId: deckId
        });
    };
    DeckService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DeckService);
    return DeckService;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<div class=\"container\">\n  <div class=\"row mt-3\">\n    <h1 class=\"display-4\">Chỉnh sửa bộ thẻ</h1>\n  </div>\n  \n  <div class=\"row mt-3\">\n    <ngb-alert class=\"text-center\" *ngIf=\"message\" type=\"danger\" [dismissible]=\"true\" (close)=\"message = ''\">\n        <strong>Lỗi!</strong> {{ message }}\n    </ngb-alert>\n  </div>\n  <div class=\"row my-3\">\n    <div class=\"input-group input-group-lg\">\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"title\" id=\"title\" placeholder=\"Tiêu đề\">\n    </div>\n  </div>\n\n  <div class=\"row my-3\">\n    <div class=\"input-group input-group-lg\">\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"description\" id=\"description\" placeholder=\"Mô tả\">\n    </div>\n  </div> \n\n  <div class=\"row mt-2 mb-4\">\n    <button class=\"btn btn-success mr-2\" (click)=\"saveChanges()\">Lưu lại</button>\n    <button class=\"btn btn-dark mr-5\" routerLink=\"/view/{{ deckId }}\">Huỷ bỏ</button>\n    <button class=\"btn btn-danger\" routerLink=\"/dashboard\" (click)=\"deleteDeck()\">Xoá bộ thẻ</button>\n  </div>\n  \n  <hr>\n\n  <div class=\"row mt-4\">\n    <h1 class=\"lead\">Thêm thẻ mới</h1>\n  </div>\n\n  <div class=\"row mt-2\">\n    <div class=\"input-group\">\n        <input class=\"form-control\" [(ngModel)]=\"newFront\" type=\"text\" id=\"front\" placeholder=\"Mặt trước\">\n        <input class=\"form-control\" [(ngModel)]=\"newBack\" type=\"text\" id=\"front\" placeholder=\"Mặt sau\">\n        <button class=\"btn btn-info ml-2\" (click)=\"addCard()\">Thêm</button>\n    </div>\n  </div>\n\n  <div class=\"row mt-4 mb-2\">\n      <h1 class=\"lead\">Chỉnh sửa thẻ đã tạo</h1>\n  </div>\n\n  <ng-container *ngFor=\"let card of this.allCards\">\n    <div class=\"row mt-2\">\n      <div class=\"input-group\">\n        <input class=\"form-control\" [(ngModel)]=\"card.front\" type=\"text\" id=\"front\" placeholder=\"Mặt trước\">\n        <input class=\"form-control\" [(ngModel)]=\"card.back\" type=\"text\" id=\"back\" placeholder=\"Mặt sau\">\n        <button class=\"btn btn-danger ml-2\" (click)=\"deleteCard(card)\">Xoá</button>\n      </div>\n    </div>\n  </ng-container>\n\n  <div class=\"row mb-5\"></div>\n  \n</div>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _deck_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../deck.service */ "./src/app/deck.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = /** @class */ (function () {
    function EditComponent(route, deckService, location, router) {
        this.route = route;
        this.deckService = deckService;
        this.location = location;
        this.router = router;
        this.allCards = [];
        this.message = '';
        this.newFront = '';
        this.newBack = '';
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deckId = this.route.snapshot.paramMap.get('deckId');
        this.deckService.getDeckById(this.deckId).subscribe(function (data) {
            _this.deck = data;
            _this.title = _this.deck.title;
            _this.description = _this.deck.description;
            _this.updateAllCards();
        });
    };
    EditComponent.prototype.saveChanges = function () {
        if (this.title === '') {
            this.message = 'Tiêu đề bộ thẻ không được để trống.';
        }
        else {
            this.deck.title = this.title;
            this.deck.description = this.description;
            if (this.allCards.length < 3) {
                this.message = 'A deck must have at least 3 cards! Please add more.';
            }
            else {
                this.deckService.updateDeck(this.deck._id, this.title, this.description, JSON.stringify(this.deck.lessons)).subscribe(function (data) {
                    if (data.success) {
                    }
                });
                this.router.navigate(['view/' + this.deckId]);
            }
        }
        // this.router.navigate...
    };
    EditComponent.prototype.addCard = function () {
        if (this.newFront === '' || this.newBack === '') {
            this.message = 'Can not add a blank card!';
        }
        else {
            for (var i = 0; i < this.allCards.length; ++i) {
                if (this.allCards[i].front === this.newFront
                    && this.allCards[i].back === this.newBack) {
                    this.message = 'This card exists!';
                    return;
                }
            }
            var isAdded = false;
            var newCard = { front: this.newFront, back: this.newBack, box: 0 };
            for (var _i = 0, _a = this.deck.lessons; _i < _a.length; _i++) {
                var lesson = _a[_i];
                if (lesson.cards.length < 5) {
                    lesson.cards.push(newCard);
                    isAdded = true;
                    break;
                }
            }
            if (!isAdded) {
                var newLesson = { orderNum: this.deck.lessons.length + 1, cards: [] };
                newLesson.cards.push(newCard);
                if (this.deck.lessons.length === 0) {
                }
                else {
                    var len = this.deck.lessons.length;
                    newLesson.cards.push(this.deck.lessons[len - 1].cards[4]);
                    this.deck.lessons[0].cards.splice(4, 1);
                    newLesson.cards.push(this.deck.lessons[len - 1].cards[3]);
                    this.deck.lessons[0].cards.splice(3, 1);
                }
                this.deck.lessons.push(newLesson);
            }
            this.updateAllCards();
            this.newFront = '';
            this.newBack = '';
        }
    };
    EditComponent.prototype.deleteCard = function (cardToDelete) {
        for (var _i = 0, _a = this.deck.lessons; _i < _a.length; _i++) {
            var lesson = _a[_i];
            var isDeleted = false;
            var i = 0;
            for (var _b = 0, _c = lesson.cards; _b < _c.length; _b++) {
                var card = _c[_b];
                if (card.front === cardToDelete.front) {
                    lesson.cards.splice(i, 1);
                    isDeleted = true;
                    break;
                }
                ++i;
            }
            if (isDeleted) {
                break;
            }
        }
        // optimizing lessons
        this.updateAllCards();
    };
    EditComponent.prototype.deleteDeck = function () {
        this.deckService.deleteDeck(this.deckId).subscribe(function (data) {
            //
        });
    };
    EditComponent.prototype.updateAllCards = function () {
        this.allCards.splice(0, this.allCards.length);
        for (var _i = 0, _a = this.deck.lessons; _i < _a.length; _i++) {
            var lesson = _a[_i];
            for (var _b = 0, _c = lesson.cards; _b < _c.length; _b++) {
                var card = _c[_b];
                this.allCards.push(card);
            }
        }
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _deck_service__WEBPACK_IMPORTED_MODULE_3__["DeckService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/learn/learn.component.css":
/*!*******************************************!*\
  !*** ./src/app/learn/learn.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.flipable-card {\r\n    float: left;\r\n\t-webkit-perspective: 600px;\r\n}\r\n\r\n.front, .back {\r\n\ttransition: -webkit-transform 0.8s;\r\n\t-webkit-transform-style: preserve-3d;\r\n\t-webkit-backface-visibility: hidden;\r\n}\r\n\r\n.front {\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n}\r\n\r\n.back {\r\n\t-webkit-transform: rotateY(-180deg);\r\n}\r\n\r\n.flipable-card:hover .back {\r\n\t-webkit-transform: rotateY(0);\r\n}\r\n\r\n.flipable-card:hover .front {\r\n\t-webkit-transform: rotateY(180deg);\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/learn/learn.component.html":
/*!********************************************!*\
  !*** ./src/app/learn/learn.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!isCompleted\">\r\n<div class=\"container\">\r\n\r\n    <div id=\"viewCards\" *ngIf=\"isViewing\">\r\n        <div class=\"row justify-content-center align-self-center\">\r\n            <h1 class=\"display-4\">Thẻ mới</h1>\r\n        </div>\r\n        <div class=\"row justify-content-center align-self-center\">\r\n            <div class=\"flipable-card mt-4\">\r\n                <div class=\"front card text-center shadow border border-primary mt-4\" style=\"float: left; width: 180px; height: 280px;\">\r\n                    <div class=\"card-body\">\r\n                        <p class=\"card-text mx-3\">{{ viewingCard.front }}</p>  \r\n                    </div>\r\n                </div>\r\n                <div class=\"back card text-center shadow border border-primary mt-4\" style=\"float: left; width: 180px; height: 280px;\">\r\n                    <div class=\"card-body\">\r\n                        <p class=\"card-text mx-3\">{{ viewingCard.back }}</p>  \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row justify-content-center align-self-center mt-5\">\r\n            <button class=\"btn btn-danger\" (click)=\"nextCard()\">Tiếp theo</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"container\" *ngIf=\"!isViewing\" >\r\n        <ng-container id=\"checkCards\" class=\"my-5\">\r\n            <div class=\"row justify-content-center align-self-center my-5\">\r\n                <h1 class=\"display-4\">{{ question }}?</h1>\r\n            </div>\r\n            <div class=\"row my-5\">\r\n                <div class=\"input-group mx-5 my-3 input-group-lg justify-content-center align-self-center\">\r\n                    <input [(ngModel)]=\"userAnswer\" type=\"text\" aria-label=\"Large\" class=\"form-control\" style=\"width: 300px\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row justify-content-center align-self-center my-4\">\r\n                <button class=\"btn btn-success\" (click)=\"checkAnswer()\">Trả lời</button>\r\n            </div>\r\n        </ng-container>\r\n</div>\r\n</ng-container>\r\n\r\n<ng-container id=\"complete\" *ngIf=\"isCompleted\" class=\"my-5\">\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center align-self-center my-5\">\r\n            <h1 class=\"display-4\">Chúc mừng! Bạn đã hoàn thành bài học.</h1>\r\n        </div>\r\n        <div class=\"row justify-content-center align-self-center my-5\">\r\n            <button class=\"btn btn-info\" (click)=\"saveData()\">Trở về bộ thẻ</button>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/learn/learn.component.ts":
/*!******************************************!*\
  !*** ./src/app/learn/learn.component.ts ***!
  \******************************************/
/*! exports provided: LearnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnComponent", function() { return LearnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _deck_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../deck.service */ "./src/app/deck.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LearnComponent = /** @class */ (function () {
    function LearnComponent(route, deckService, location, router) {
        this.route = route;
        this.deckService = deckService;
        this.location = location;
        this.router = router;
        this.userAnswer = '';
    }
    LearnComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deckId = this.route.snapshot.paramMap.get('deckId');
        this.lessonOrderNum = this.route.snapshot.paramMap.get('lesson');
        this.deckService.getDeckById(this.deckId).subscribe(function (data) {
            _this.deck = data;
            for (var _i = 0, _a = _this.deck.lessons; _i < _a.length; _i++) {
                var lesson = _a[_i];
                if (lesson.orderNum === Number(_this.lessonOrderNum)) {
                    _this.lessonToLearn = lesson;
                }
            }
            _this.cardsToLearn = _this.lessonToLearn.cards.slice();
            _this.mixCards(_this.cardsToLearn);
            for (var _b = 0, _c = _this.cardsToLearn; _b < _c.length; _b++) {
                var card = _c[_b];
                card.box = 1;
            }
            for (var _d = 0, _e = _this.cardsToLearn; _d < _e.length; _d++) {
                var card = _e[_d];
                if (card.box === 1) {
                    _this.viewingCard = card;
                    _this.isViewing = true;
                    _this.viewingCard.box = 2;
                    break;
                }
            }
        });
    };
    LearnComponent.prototype.mixCards = function (cards) {
        for (var i = cards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [cards[j], cards[i]], cards[i] = _a[0], cards[j] = _a[1];
        }
        var _a;
    };
    LearnComponent.prototype.initQuestion = function () {
        console.log('init quest!');
        for (var _i = 0, _a = this.cardsToLearn; _i < _a.length; _i++) {
            var card = _a[_i];
            if (card.box === 2) {
                this.questingCard = card;
                if (Math.round(Math.random()) === 1) {
                    this.question = this.questingCard.front;
                    this.answer = this.questingCard.back;
                }
                else {
                    this.question = this.questingCard.back;
                    this.answer = this.questingCard.front;
                }
                console.log(this.question);
                console.log(this.answer);
                break;
            }
        }
    };
    LearnComponent.prototype.checkAnswer = function () {
        if (this.userAnswer === this.answer) {
            this.questingCard.box = 3;
            console.log('right');
        }
        else {
            console.log('wrong!');
        }
        this.userAnswer = '';
        console.log('next quest');
        this.nextQuestingCard();
    };
    LearnComponent.prototype.nextQuestingCard = function () {
        this.mixCards(this.cardsToLearn);
        for (var _i = 0, _a = this.cardsToLearn; _i < _a.length; _i++) {
            var card = _a[_i];
            if (card.box === 2) {
                this.questingCard = card;
                if (Math.round(Math.random()) === 1) {
                    this.question = this.questingCard.front;
                    this.answer = this.questingCard.back;
                }
                else {
                    this.question = this.questingCard.back;
                    this.answer = this.questingCard.front;
                }
                console.log(this.question);
                console.log(this.answer);
                return;
            }
            console.log(this.question);
            console.log(this.answer);
        }
        this.isCompleted = true;
        return;
    };
    LearnComponent.prototype.nextCard = function () {
        this.viewingCard.box = 2;
        for (var _i = 0, _a = this.cardsToLearn; _i < _a.length; _i++) {
            var card = _a[_i];
            if (card.box === 1) {
                this.viewingCard = card;
                return;
            }
        }
        console.log('end viewing!');
        this.mixCards(this.cardsToLearn);
        this.initQuestion();
        this.isViewing = false;
        return;
    };
    LearnComponent.prototype.saveData = function () {
        this.deckService.updateLesson(this.deck._id, JSON.stringify(this.deck.lessons)).subscribe(function (data) {
            if (data.success) {
            }
        });
        this.router.navigate(['view/' + this.deckId]);
    };
    LearnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-learn',
            template: __webpack_require__(/*! ./learn.component.html */ "./src/app/learn/learn.component.html"),
            styles: [__webpack_require__(/*! ./learn.component.css */ "./src/app/learn/learn.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _deck_service__WEBPACK_IMPORTED_MODULE_1__["DeckService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LearnComponent);
    return LearnComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 100px\">\n  <ngb-alert class=\"text-center\" *ngIf=\"notification\" type=\"danger\" [dismissible]=\"true\" (close)=\"notification = ''\">\n      <strong>Lỗi!</strong> {{ notification }}\n  </ngb-alert>\n  <div class=\"border border-primary rounded bg-light clearfix\" >\n    <div class=\"row justify-content-center\" style=\"margin-top: 50px; height: 300px \">\n      <form (submit)=\"logIn($event)\">\n        <div class=\"form-group\">\n          <label>Tài khoản</label>\n          <input type=\"text\" id=\"username\"  class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Mật khẩu</label>\n            <input type=\"password\" id=\"password\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\">\n        </div>\n        <div class=\"text-center\">\n          <button type=\"submit\" style=\"margin-right.px: 30\" class=\"btn btn-success\">Đăng nhập</button>\n          <br>\n          <br>\n          hoặc nhấn vào đây để <button type=\"button\" routerLink=\"/register\" class=\"ml-2 btn btn-info\">Đăng ký</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.notification = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.notification = '';
    };
    LoginComponent.prototype.logIn = function (event) {
        var _this = this;
        event.preventDefault();
        var username = event.target.querySelector('#username').value;
        var password = event.target.querySelector('#password').value;
        this.authService.logIn(username, password).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['dashboard']);
                _this.authService.setLoggedInStatus(true);
            }
            else {
                _this.notification = 'Đăng nhập thất bại. Tài khoản hoặc mật khẩu không đúng.';
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Log out?\n<button (click)=\"logOut()\">Yes</button>\n<button routerLink=\"/dashboard\">No</button>"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.logOut = function () {
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-primary navbar-expand-sm mb-3 shadow\">\n<!-- Logo and brand name -->\n<a href=\"#\" class=\"navbar-brand\">TyniCards<span octicon=\"rocket\"></span></a>\n<!-- Toggler/collapsible Button -->\n<button *ngIf=\"this.authService.getLoggedInStatus()\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n</button>\n<!-- Navbar links -->\n<div *ngIf=\"this.authService.getLoggedInStatus()\" class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item\" style=\"margin: 0px 5px;\">\n        <a class=\"nav-link\" routerLink=\"/\"><span octicon=\"home\" style=\"margin-right: 8px;\"></span>Trang chủ</a>\n    </li>\n    <li class=\"nav-item\" style=\"margin: 0px 5px;\">\n        <a class=\"nav-link\" routerLink=\"/create\"><span octicon=\"plus\" style=\"margin-right: 8px;\"></span>Tạo bộ thẻ</a>\n    </li>\n    <li class=\"nav-item\" style=\"margin: 0px 5px;\">\n        <a class=\"nav-link\" routerLink=\"/profile\"><span octicon=\"person\" style=\"margin-right: 8px;\"></span>Cá nhân</a>\n    </li>\n    </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/octicon.directive.ts":
/*!**************************************!*\
  !*** ./src/app/octicon.directive.ts ***!
  \**************************************/
/*! exports provided: OcticonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcticonDirective", function() { return OcticonDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var octicons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! octicons */ "./node_modules/octicons/index.js");
/* harmony import */ var octicons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(octicons__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// tslint:disable-next-line:directive-selector
var OcticonDirective = /** @class */ (function () {
    function OcticonDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    OcticonDirective.prototype.ngOnInit = function () {
        var el = this.elementRef.nativeElement;
        el.innerHTML = octicons__WEBPACK_IMPORTED_MODULE_1__[this.octicon].toSVG();
        var icon = el.firstChild;
        if (this.color) {
            this.renderer.setStyle(icon, 'color', this.color);
        }
        if (this.width) {
            this.renderer.setStyle(icon, 'width', this.width);
            this.renderer.setStyle(icon, 'height', '100%');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OcticonDirective.prototype, "octicon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OcticonDirective.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], OcticonDirective.prototype, "width", void 0);
    OcticonDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[octicon]' }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], OcticonDirective);
    return OcticonDirective;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row mt-3\">\n        <ngb-alert class=\"text-center\" *ngIf=\"message && !changeSuccess\" [dismissible]=\"true\" (close)=\"message = ''\">\n            <strong>Thông báo</strong> {{ message }}\n        </ngb-alert>\n    </div>\n\n    <div class=\"row mt-3\">\n        <ngb-alert class=\"text-center\" *ngIf=\"message && changeSuccess\" type=\"success\" [dismissible]=\"true\" (close)=\"message = ''\">\n            <strong>Thông báo</strong> {{ message }}\n        </ngb-alert>\n    </div>\n\n    <div class=\"row mt-5\">\n        <h1 class=\"lead\">Đổi mật khẩu</h1>\n    </div>\n\n    <div class=\"row mt-3\">\n        <div class=\"input-group\">\n            <input class=\"form-control\" type=\"password\" [(ngModel)]=\"oldPassword\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\" placeholder=\"Mật khẩu hiện tại\">\n            <input class=\"form-control\" type=\"password\" [(ngModel)]=\"newPassword\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\" placeholder=\"Mật khẩu mới\">\n            <input class=\"form-control\" type=\"password\" [(ngModel)]=\"newCPassword\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\" placeholder=\"Xác nhận mật khẩu mới\">\n            <button (click)=\"changePassword()\" class=\"btn btn-info ml-2\" type=\"button\">Thay đổi</button>\n        </div>\n    </div>\n\n    <div class=\"row mt-3\">\n        <h1 class=\"lead\">hoặc</h1>\n    </div>\n\n    <div class=\"row\">\n        <button class=\"btn btn-danger\" (click)=\"logOut()\">Đăng xuất</button>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.message = '';
        this.oldPassword = '';
        this.newPassword = '';
        this.newCPassword = '';
        this.changeSuccess = false;
    }
    ProfileComponent.prototype.logOut = function () {
        var _this = this;
        return this.authService.logOut().subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['login']);
                _this.authService.setLoggedInStatus(false);
            }
            else {
                window.alert('Some problems!');
            }
        });
    };
    ProfileComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.oldPassword === '' || this.newPassword === '' || this.newCPassword === '') {
            this.message = 'Không được để trống mật khẩu';
            this.changeSuccess = false;
        }
        else {
            if (this.newPassword !== this.newCPassword) {
                this.message = 'Mật khẩu mới không khớp.';
                this.changeSuccess = false;
            }
            else {
                return this.authService.changePassword(this.oldPassword, this.newPassword).subscribe(function (data) {
                    _this.message = data.message;
                    _this.changeSuccess = data.success;
                });
            }
        }
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 100px\">\n    <ngb-alert class=\"text-center\" *ngIf=\"notification\" type=\"danger\" [dismissible]=\"true\" (close)=\"notification = ''\">\n        <strong>Lỗi!</strong> {{ notification }}\n    </ngb-alert>\n    <div class=\"border border-info rounded bg-light clearfix\" >\n      <div class=\"row justify-content-center\" style=\"margin-top: 50px; height: 400px \">\n        <form (submit)=\"register($event)\">\n          <div class=\"form-group\">\n            <label>Tài khoản</label>\n            <input type=\"text\" id=\"username\"  class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\">\n          </div>\n          <div class=\"form-group\">\n              <label for=\"password\">Mật khẩu</label>\n              <input type=\"password\" id=\"password\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\">\n          </div>\n          <div class=\"form-group\">\n              <label for=\"cpassword\">Xác nhận mật khẩu</label>\n              <input type=\"password\" id=\"cpassword\" class=\"form-control\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\">\n          </div>\n          <div class=\"text-center\">\n            <button type=\"submit\" style=\"margin-right.px: 30\" class=\"btn btn-info\">Đăng ký</button>\n            <br>\n            <br>\n            hoặc nhấn vào đây để <button type=\"button\" routerLink=\"/login\" class=\"ml-2 btn btn-success\">Đăng nhập</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.notification = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.notification = '';
    };
    RegisterComponent.prototype.register = function (event) {
        var _this = this;
        event.preventDefault();
        var username = event.target.querySelector('#username').value;
        var password = event.target.querySelector('#password').value;
        var cpassword = event.target.querySelector('#cpassword').value;
        if (username === '') {
            this.notification = 'Tài khoản hoặc mật khẩu không được để trống.';
        }
        else {
            if (cpassword === password) {
                this.authService.register(username, password).subscribe(function (data) {
                    if (data.success) {
                        _this.router.navigate(['dashboard']);
                        _this.authService.setLoggedInStatus(true);
                    }
                    else {
                        _this.notification = data.message;
                    }
                });
            }
            else {
                this.notification = 'Mật khẩu không khớp!';
            }
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/view/view.component.css":
/*!*****************************************!*\
  !*** ./src/app/view/view.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.flipable-card {\r\n    float: left;\r\n\t-webkit-perspective: 600px;\r\n}\r\n\r\n.front, .back {\r\n\ttransition: -webkit-transform 0.8s;\r\n\t-webkit-transform-style: preserve-3d;\r\n\t-webkit-backface-visibility: hidden;\r\n}\r\n\r\n.front {\r\n\toverflow: hidden;\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n}\r\n\r\n.back {\r\n\t-webkit-transform: rotateY(-180deg);\r\n}\r\n\r\n.flipable-card:hover .back {\r\n\t-webkit-transform: rotateY(0);\r\n}\r\n\r\n.flipable-card:hover .front {\r\n\t-webkit-transform: rotateY(180deg);\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/view/view.component.html":
/*!******************************************!*\
  !*** ./src/app/view/view.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"text-center mt-4\">\n    <h1 class=\"display-4\">{{ deck.title }}</h1>\n    <p class=\"lead\">{{ deck.description }}</p>\n    <button type=\"button\" class=\"btn btn-light\" routerLink=\"/edit/{{ deck._id }}\" ><span octicon=\"pencil\" style=\"margin-right: 8px;\"></span>Chỉnh sửa</button>\n  </div>\n  <div class=\"my-4\">\n    <ngb-progressbar type=\"warning\" [value]=\"70\" [striped]=\"true\"></ngb-progressbar>\n  </div>\n  <ngb-tabset type=\"pills\">\n    <ngb-tab title=\"Các bài học\">\n      <ng-template ngbTabContent>\n          <div class=\"align-self-center\">\n              <div *ngFor=\"let lesson of deck.lessons\" >\n              <div class=\"card text-center shadow border border-primary mt-4 mr-4\" style=\"float: left; width: 180px; height: 280px;\">\n                  <div class=\"card-header\">\n                      <h5 class=\"card-title\">Bài {{lesson.orderNum}}</h5>\n                  </div>\n                  <div class=\"card-body\">\n                      <a class=\"btn btn-primary my-4 mx-3 border border-primary rounded shadow\" routerLink=\"/learn/{{ deck._id }}/{{ lesson.orderNum }}\">Học</a>            \n                  </div>\n              </div>\n              </div>\n          </div>\n      </ng-template>\n    </ngb-tab>\n    <ngb-tab title=\"Tất cả các thẻ\">\n        <ng-template ngbTabContent>\n          <div *ngFor=\"let lesson of deck.lessons\">\n            <div *ngFor=\"let card of lesson.cards\">\n\n              <div class=\"flipable-card mt-4\">\n                  <div class=\"front card text-center shadow border border-primary mt-4 mr-4\" style=\"float: left; width: 180px; height: 280px;\">\n                      <div class=\"card-body\">\n                          <p class=\"card-text mx-3\">{{ card.front }}</p>  \n                      </div>\n                  </div>\n                  <div class=\"back card text-center shadow border border-primary mt-4 mr-4\" style=\"float: left; width: 180px; height: 280px;\">\n                      <div class=\"card-body\">\n                          <p class=\"card-text mx-3\">{{ card.back }}</p>  \n                      </div>\n                  </div>\n              </div>\n              \n            </div>\n          </div>\n        </ng-template>\n    </ngb-tab>\n  </ngb-tabset>\n</div>"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _deck_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../deck.service */ "./src/app/deck.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewComponent = /** @class */ (function () {
    function ViewComponent(route, deckService, location) {
        this.route = route;
        this.deckService = deckService;
        this.location = location;
        this.deck = {};
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deckService.getDeckById(this.route.snapshot.paramMap.get('deckId')).subscribe(function (data) {
            _this.deck = data;
        });
    };
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _deck_service__WEBPACK_IMPORTED_MODULE_1__["DeckService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], ViewComponent);
    return ViewComponent;
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

module.exports = __webpack_require__(/*! D:\Desktop\BTL-dev\tynicards\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map