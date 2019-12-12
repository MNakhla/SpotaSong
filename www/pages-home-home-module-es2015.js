(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/genres-view/genres-view.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/genres-view/genres-view.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div color=\"secondary\">\n      <!-- <ion-card-header class=\"ion-text-center\" text-transform= \"uppercase\">\n        {{ parentData.label }} \n      \n      </ion-card-header> -->\n      <div (click)= \"navigate(parentData)\">\n          <img [src]=\"parentData.img\" width=\"100%\" height=\"100%\" />\n      </div>\n    </div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"native-class\">\n      Music Genres\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg-image\" >\n  <div class=\"container-of-all-cards\" >\n\n<app-genres-view  class=\"container-of-each-card\"  *ngFor=\"let genre of GenreArr\" \n  [parentData]=\"genre\"  >\n</app-genres-view>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/components/genres-view/genres-view.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/genres-view/genres-view.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2VucmVzLXZpZXcvZ2VucmVzLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/genres-view/genres-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/genres-view/genres-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: GenresViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenresViewComponent", function() { return GenresViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let GenresViewComponent = class GenresViewComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    navigate(genre) {
        console.log(genre);
        this.router.navigate(['songs'], { queryParams: { g: genre.label } });
    }
};
GenresViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GenresViewComponent.prototype, "parentData", void 0);
GenresViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-genres-view',
        template: __webpack_require__(/*! raw-loader!./genres-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/genres-view/genres-view.component.html"),
        styles: [__webpack_require__(/*! ./genres-view.component.scss */ "./src/app/components/genres-view/genres-view.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], GenresViewComponent);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _components_genres_view_genres_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/genres-view/genres-view.component */ "./src/app/components/genres-view/genres-view.component.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _components_genres_view_genres_view_component__WEBPACK_IMPORTED_MODULE_7__["GenresViewComponent"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".native-class {\n  background: black;\n  color: white;\n}\n\n.ion-class {\n  --background: red;\n}\n\n.custom-div {\n  border: 1px solid black;\n  border-radius: 35px;\n  width: 20px;\n}\n\n.bg-image {\n  --background: none;\n  background-image: url('move.gif');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.ion-content {\n  --ion-background-color: #eee;\n}\n\n.container-of-all-cards {\n  padding: 20px;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  height: auto;\n  -webkit-box-align: center;\n          align-items: center;\n  overflow: auto;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.container-of-each-card {\n  border: 1px solid black;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  width: 50%;\n  height: 168px;\n  background: linear-gradient(45deg, #0cc2e8, transparent);\n}\n\n.col {\n  size: 8;\n}\n\n.ion-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 50% !important;\n  margin: 0 !important;\n}\n\n.genre-header {\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJpYS9zcG90aWZ5TXVzaWMvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQkFBQTtBQ0VGOztBREFBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNHRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNHRjs7QURBQTtFQUNFLDRCQUFBO0FDR0Y7O0FEQUE7RUFFSSxhQUFBO0VBQ0EsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0VKOztBREFBO0VBQ0ksdUJBQUE7RUFDQSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFFQSx3REFBQTtBQ0VKOztBREFBO0VBQ0UsT0FBQTtBQ0dGOztBREFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQ0dGOztBREFBO0VBQ0UseUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF0aXZlLWNsYXNzIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5pb24tY2xhc3Mge1xuICAtLWJhY2tncm91bmQ6IHJlZDtcbn1cbi5jdXN0b20tZGl2IHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4uYmctaW1hZ2Uge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvbW92ZS5naWZcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5pb24tY29udGVudCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIFxufVxuLmNvbnRhaW5lci1vZi1hbGwtY2FyZHN7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGFpbmVyLW9mLWVhY2gtY2FyZHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMTY4cHg7XG4gICAgLy8gbWFyZ2luOiAxMXB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzBjYzJlOCwgdHJhbnNwYXJlbnQpO1xufVxuLmNvbCB7XG4gIHNpemU6IDg7XG59XG5cbi5pb24tY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5nZW5yZS1oZWFkZXJ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4iLCIubmF0aXZlLWNsYXNzIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmlvbi1jbGFzcyB7XG4gIC0tYmFja2dyb3VuZDogcmVkO1xufVxuXG4uY3VzdG9tLWRpdiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICB3aWR0aDogMjBweDtcbn1cblxuLmJnLWltYWdlIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL21vdmUuZ2lmXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuXG4uY29udGFpbmVyLW9mLWFsbC1jYXJkcyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci1vZi1lYWNoLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTY4cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzBjYzJlOCwgdHJhbnNwYXJlbnQpO1xufVxuXG4uY29sIHtcbiAgc2l6ZTogODtcbn1cblxuLmlvbi1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLmdlbnJlLWhlYWRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _service_spotify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/spotify.service */ "./src/app/service/spotify.service.ts");





let HomePage = class HomePage {
    constructor(router, http, spotifyService) {
        this.router = router;
        this.http = http;
        this.spotifyService = spotifyService;
        this.genreImages = [];
        this.genres = [];
        this.GenreArr = [];
    }
    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit() {
        this.spotifyService.getAllGenres().subscribe((response) => {
            if (response) {
                this.genres = response.genres;
                this.genres.forEach(element => {
                    this.spotifyService.getGenreImages(element).subscribe((res) => {
                        if (res) {
                            const url = res.playlists.items[0].images[0].url;
                            // console.log(url);
                            this.genreImages.push(url);
                            let newGenre = new Genre(element, url);
                            this.GenreArr.push(newGenre);
                        }
                        else {
                            this.genreImages = [];
                        }
                        console.log(this.genreImages);
                        console.log(this.GenreArr);
                    });
                    // ,
                    // console.log(this.genres);
                });
            }
            else {
                this.genres = [];
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _service_spotify_service__WEBPACK_IMPORTED_MODULE_4__["SpotifyService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _service_spotify_service__WEBPACK_IMPORTED_MODULE_4__["SpotifyService"]])
], HomePage);

class Genre {
    constructor(label, img) {
        this.img = img;
        this.label = label;
    }
}
Genre.ctorParameters = () => [
    null,
    null
];


/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map