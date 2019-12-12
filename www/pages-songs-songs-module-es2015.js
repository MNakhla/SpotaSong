(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-songs-songs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/songs-view/songs-view.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/songs-view/songs-view.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a\n  class=\"each-song\"\n  *ngIf=\"parentData2.preview_url != null\"\n  [href]=\"parentData2.preview_url\"\n>\n  <img [src]=\"parentData2.album.images[0].url\" width=\"86px\" height=\"86px\" />\n  {{ parentData2.name }} <br>\n  {{ \"By: \" + parentData2.artists[0].name }}\n</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/songs/songs.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/songs/songs.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <!-- <ion-toolbar> -->\n    <!-- <ion-title class=\"native-class\"> -->\n      {{ genre.toUpperCase() }}\n    <!-- </ion-title> -->\n  <!-- </ion-toolbar> -->\n</ion-header>\n\n<ion-content>\n  <div class=\"all-songs\">\n    <div *ngFor=\"let track of data\" class=\"all-songs-container\">\n      <app-songs-view [parentData2]=\"track\"></app-songs-view>\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/songs-view/songs-view.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/songs-view/songs-view.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".each-song {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  color: white;\n  width: 100%;\n  height: 86px;\n  margin: 11px;\n  background: linear-gradient(45deg, #0cc2e8, transparent);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpYS9zcG90aWZ5TXVzaWMvc3JjL2FwcC9jb21wb25lbnRzL3NvbmdzLXZpZXcvc29uZ3Mtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zb25ncy12aWV3L3NvbmdzLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdEQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvbmdzLXZpZXcvc29uZ3Mtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lYWNoLXNvbmd7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgICAvLyBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4NnB4O1xuICAgIG1hcmdpbjogMTFweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwY2MyZTgsIHRyYW5zcGFyZW50KTtcbn0iLCIuZWFjaC1zb25nIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODZweDtcbiAgbWFyZ2luOiAxMXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMwY2MyZTgsIHRyYW5zcGFyZW50KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/songs-view/songs-view.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/songs-view/songs-view.component.ts ***!
  \***************************************************************/
/*! exports provided: SongsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsViewComponent", function() { return SongsViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SongsViewComponent = class SongsViewComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SongsViewComponent.prototype, "parentData2", void 0);
SongsViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-songs-view',
        template: __webpack_require__(/*! raw-loader!./songs-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/songs-view/songs-view.component.html"),
        styles: [__webpack_require__(/*! ./songs-view.component.scss */ "./src/app/components/songs-view/songs-view.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SongsViewComponent);



/***/ }),

/***/ "./src/app/pages/songs/songs.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/songs/songs.module.ts ***!
  \*********************************************/
/*! exports provided: SongsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsPageModule", function() { return SongsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _songs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./songs.page */ "./src/app/pages/songs/songs.page.ts");
/* harmony import */ var _components_songs_view_songs_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/songs-view/songs-view.component */ "./src/app/components/songs-view/songs-view.component.ts");








const routes = [
    {
        path: '',
        component: _songs_page__WEBPACK_IMPORTED_MODULE_6__["SongsPage"]
    }
];
let SongsPageModule = class SongsPageModule {
};
SongsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_songs_page__WEBPACK_IMPORTED_MODULE_6__["SongsPage"], _components_songs_view_songs_view_component__WEBPACK_IMPORTED_MODULE_7__["SongsViewComponent"]]
    })
], SongsPageModule);



/***/ }),

/***/ "./src/app/pages/songs/songs.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/songs/songs.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".native-class {\n  background: black;\n  color: white;\n}\n\n.all-songs {\n  background: black;\n  padding: 20px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n  height: auto;\n  overflow: auto;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.each-song {\n  color: white;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  width: 100%;\n  height: 86px;\n  margin: 11px;\n  background: linear-gradient(45deg, #0cc2e8, transparent);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpYS9zcG90aWZ5TXVzaWMvc3JjL2FwcC9wYWdlcy9zb25ncy9zb25ncy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NvbmdzL3NvbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBRUksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsY0FBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNGSjs7QURJQTtFQUdJLFlBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esd0RBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NvbmdzL3NvbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXRpdmUtY2xhc3Mge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4uYWxsLXNvbmdze1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLy8gZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmVhY2gtc29uZ3tcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICAgIC8vIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDg2cHg7XG4gICAgbWFyZ2luOiAxMXB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzBjYzJlOCwgdHJhbnNwYXJlbnQpO1xufSIsIi5uYXRpdmUtY2xhc3Mge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWxsLXNvbmdzIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5lYWNoLXNvbmcge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4NnB4O1xuICBtYXJnaW46IDExcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzBjYzJlOCwgdHJhbnNwYXJlbnQpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/songs/songs.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/songs/songs.page.ts ***!
  \*******************************************/
/*! exports provided: SongsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongsPage", function() { return SongsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/spotify.service */ "./src/app/service/spotify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SongsPage = class SongsPage {
    // tslint:disable-next-line: variable-name
    constructor(_spotifyService, route) {
        this._spotifyService = _spotifyService;
        this.route = route;
        this.data = [];
    }
    ngOnInit() {
        this.route.queryParams
            .subscribe(params => {
            this.genre = params.g;
        });
        this._spotifyService
            .searchMusic(this.genre)
            .subscribe((response) => {
            if (response) {
                this.data = response.tracks;
            }
            else {
                this.data = [];
            }
            console.log(this.data);
        });
    }
};
SongsPage.ctorParameters = () => [
    { type: _service_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
SongsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-songs',
        template: __webpack_require__(/*! raw-loader!./songs.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/songs/songs.page.html"),
        providers: [_service_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"]],
        styles: [__webpack_require__(/*! ./songs.page.scss */ "./src/app/pages/songs/songs.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], SongsPage);



/***/ })

}]);
//# sourceMappingURL=pages-songs-songs-module-es2015.js.map