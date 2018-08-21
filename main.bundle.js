webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pokedex_pokedex_component__ = __webpack_require__("../../../../../src/app/pokedex/pokedex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__poketeam_poketeam_component__ = __webpack_require__("../../../../../src/app/poketeam/poketeam.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__suggesties_suggesties_component__ = __webpack_require__("../../../../../src/app/suggesties/suggesties.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__pokedex_pokedex_component__["a" /* PokedexComponent */]
    },
    {
        path: 'my-team',
        component: __WEBPACK_IMPORTED_MODULE_4__poketeam_poketeam_component__["a" /* PoketeamComponent */]
    },
    {
        path: 'suggestions',
        component: __WEBPACK_IMPORTED_MODULE_5__suggesties_suggesties_component__["a" /* SuggestiesComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
        ],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-link {\n    padding: 5px 12px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "    <nav class=\"navbar navbar-dark bg-primary sticky-top\">\n      <div class=\"container\" id=\"exCollapsingNavbar2\">\n        <ul class=\"nav navbar-nav navbar-collapse flex-row\">\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['']\">Pokédex <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n            <a class=\"nav-link\" [routerLink]=\"['/my-team']\">My Team</a>\n          </li>\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n            <a class=\"nav-link\" [routerLink]=\"['/suggestions']\">Suggestions</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n    <router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pokemon_pokemon_component__ = __webpack_require__("../../../../../src/app/pokemon/pokemon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pokedex_pokedex_component__ = __webpack_require__("../../../../../src/app/pokedex/pokedex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__poketeam_poketeam_component__ = __webpack_require__("../../../../../src/app/poketeam/poketeam.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pokeapi_service__ = __webpack_require__("../../../../../src/app/pokeapi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__poketeam_shared_service__ = __webpack_require__("../../../../../src/app/poketeam.shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__suggesties_service__ = __webpack_require__("../../../../../src/app/suggesties.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__capitalize_pipe__ = __webpack_require__("../../../../../src/app/capitalize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__lowercase_array_pipe__ = __webpack_require__("../../../../../src/app/lowercase_array.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__suggesties_suggesties_component__ = __webpack_require__("../../../../../src/app/suggesties/suggesties.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__suggestieform_suggestieform_component__ = __webpack_require__("../../../../../src/app/suggestieform/suggestieform.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pokemon_pokemon_component__["a" /* PokemonComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pokedex_pokedex_component__["a" /* PokedexComponent */],
            __WEBPACK_IMPORTED_MODULE_12__poketeam_poketeam_component__["a" /* PoketeamComponent */],
            __WEBPACK_IMPORTED_MODULE_16__capitalize_pipe__["a" /* CapitalizePipe */],
            __WEBPACK_IMPORTED_MODULE_17__lowercase_array_pipe__["a" /* LowercaseArrayPipe */],
            __WEBPACK_IMPORTED_MODULE_18__suggesties_suggesties_component__["a" /* SuggestiesComponent */],
            __WEBPACK_IMPORTED_MODULE_19__suggestieform_suggestieform_component__["a" /* SuggestieformComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_ng2_dnd__["a" /* DndModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__pokeapi_service__["a" /* PokeapiService */],
            __WEBPACK_IMPORTED_MODULE_14__poketeam_shared_service__["a" /* PoketeamSharedService */],
            __WEBPACK_IMPORTED_MODULE_15__suggesties_service__["a" /* SuggestiesService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        if (!value)
            return value;
        return value.charAt(0).toUpperCase() + value.slice(1);
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'capitalize'
    })
], CapitalizePipe);

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return poketeam; });
var poketeam = (localStorage.getItem('pkt')) ? JSON.parse(localStorage.getItem('pkt')) : [];
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ "../../../../../src/app/lowercase_array.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LowercaseArrayPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LowercaseArrayPipe = (function () {
    function LowercaseArrayPipe() {
    }
    LowercaseArrayPipe.prototype.transform = function (value, args) {
        if (!value)
            return value;
        for (var i = 0; i < value.length; i++) {
            value[i] = value[i].toLowerCase();
        }
        return value;
    };
    return LowercaseArrayPipe;
}());
LowercaseArrayPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'lowercase_array' })
], LowercaseArrayPipe);

//# sourceMappingURL=lowercase_array.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pokeapi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokeapiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PokeapiService = (function () {
    function PokeapiService(http) {
        this.http = http;
        this.url = 'assets/data/pokemon.json';
    }
    PokeapiService.prototype.getPokemon = function () {
        return this.http.get(this.url)
            .map(function (res) { return res.json(); });
    };
    return PokeapiService;
}());
PokeapiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PokeapiService);

var _a;
//# sourceMappingURL=pokeapi.service.js.map

/***/ }),

/***/ "../../../../../src/app/pokedex/pokedex.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pokedex/pokedex.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h1>\n        Pokédex\n    </h1>\n    <!-- get all pokemon of first generation from pokeapi -->\n     <div class=\"pokedex--container row align-items-center justify-content-center\" *ngIf=\"pokedex\">\n        <app-pokemon class=\"col-2 col-sm-12 col-md-3\" *ngFor=\"let pokemon of pokedex\" [pokemon]=\"pokemon\" (pokemonToAdd)=\"addPokemonToTeam($event)\" [isPokedex]=\"isPokedex\"></app-pokemon>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pokedex/pokedex.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokedexComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pokemon_model__ = __webpack_require__("../../../../../src/app/pokemon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pokeapi_service__ = __webpack_require__("../../../../../src/app/pokeapi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__poketeam_shared_service__ = __webpack_require__("../../../../../src/app/poketeam.shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PokedexComponent = (function () {
    function PokedexComponent(pokeapiService, poketeamService) {
        this.pokeapiService = pokeapiService;
        this.poketeamService = poketeamService;
        this.pokedex = [];
        this.isPokedex = true;
        this.poketeam = __WEBPACK_IMPORTED_MODULE_4__globals__["a" /* poketeam */];
        this.isDragging = false;
    }
    PokedexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokeapiService.getPokemon()
            .subscribe(function (data) {
            _this.createPokemonObjects(data);
        });
    };
    PokedexComponent.prototype.createPokemonObjects = function (data) {
        var count = Object.keys(data).length;
        for (var i = 0; i < count; i++) {
            this.pokedex.push(new __WEBPACK_IMPORTED_MODULE_1__pokemon_model__["a" /* Pokemon */](i, data[i]['Name'], data[i]['MaxCP'], data[i]['Height']['Minimum'] + ' - ' + data[i]['Height']['Maximum'], data[i]['Weight']['Minimum'] + ' - ' + data[i]['Weight']['Maximum'], data[i]['Number'], data[i]['Types'], this.removeSpecialCharacters(data[i]['Name'])));
        }
    };
    PokedexComponent.prototype.removeSpecialCharacters = function (string) {
        return string.replace(/(?!\w|\s)./g, '')
            .replace(/\s+/g, '')
            .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
    };
    PokedexComponent.prototype.addPokemonToTeam = function (pokemon) {
        this.poketeamService.addPokemonToTeam(pokemon);
    };
    PokedexComponent.prototype.removePokemonFromTeam = function (pokemon) {
        return false;
    };
    return PokedexComponent;
}());
PokedexComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-pokedex',
        template: __webpack_require__("../../../../../src/app/pokedex/pokedex.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pokedex/pokedex.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__pokeapi_service__["a" /* PokeapiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__pokeapi_service__["a" /* PokeapiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__poketeam_shared_service__["a" /* PoketeamSharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__poketeam_shared_service__["a" /* PoketeamSharedService */]) === "function" && _b || Object])
], PokedexComponent);

var _a, _b;
//# sourceMappingURL=pokedex.component.js.map

/***/ }),

/***/ "../../../../../src/app/pokemon.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pokemon; });
var Pokemon = (function () {
    function Pokemon(id, name, base_experience, height, weight, order, types, name_raw) {
        this.id = id;
        this.name = name;
        this.base_experience = base_experience;
        this.height = height;
        this.weight = weight;
        this.order = order;
        this.types = types;
        this.name_raw = name_raw;
    }
    return Pokemon;
}());

//# sourceMappingURL=pokemon.model.js.map

/***/ }),

/***/ "../../../../../src/app/pokemon/pokemon.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\nGRASS: rgb(105, 194, 61);\nPOISON: rgb(146, 58, 146);\nFIRE: rgb(237, 109, 18);\nFLYING: rgb(142, 111, 235);\nWATER: rgb(69, 120, 237);\nBUG: rgb(151, 165, 29);\nNORMAL: rgb(156, 156, 99);\nELECTRIC: rgb(246, 201, 19);\nGROUND: rgb(219, 181, 77);\nFAIRY: rgb(232, 120, 144);\nFIGHTING: rgb(174, 42, 36);\nPSYCHIC: rgb(247, 54, 112);\nROCK: rgb(164, 143, 50);\nSTEEL: rgb(160, 160, 192);\nICE: rgb(126, 206, 206);\nGHOST: rgb(100, 78, 136);\nDRAGON: rgb(94, 29, 247);\n */\n\nimg {\n    max-width: 65%;\n    display: block;\n    margin: 10px auto;\n}\n\n.pokemon-image {\n    position: relative;\n}\n\n.pokemon-image a {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    cursor: pointer;\n}\n\n:host {\n    padding: 5px;\n}\n\nh2 {\n    text-transform: uppercase;\n    font-size: 1.1rem;\n    text-align: center;\n    margin-bottom: 15px;\n}\n\nh2 span {\n    display: inline-block;\n    vertical-align: middle;\n    background-color: #f1f1f1;\n    padding: 5px;\n    font-size: 0.7rem;\n    text-transform: uppercase;\n    color: #000;\n    margin-right: 10px;\n}\n\n.types {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    text-align: center;\n    margin-top: 20px;\n}\n\n.types li {\n    display: inline-block;\n    vertical-align: middle;\n    padding: 5px;\n    font-size: 0.7rem;\n    text-transform: uppercase;\n    color: #fff;\n}\n\n.types li + li {\n    margin-left: 7px;\n}\n\nbutton {\n    outline: none;\n    border: 0;\n    text-transform: uppercase;\n    font-size: 0.8rem;\n    margin-top: 15px;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    padding: 5px 12px;\n    background-color: #f1f1f1;\n    border: 1px solid #f1f1f1;\n    transition: 0.3s ease;\n    box-sizing: border-box;\n}\n\nbutton:hover {\n    cursor: pointer;\n    background-color: #fefefe;\n}\n\nbutton[disabled] {\n    opacity: 0.5;\n}\n\nbutton[disabled]:hover {\n    cursor: default;\n    background-color: #f1f1f1;\n}\n\n.grass {\n    border-color: rgb(105, 194, 61);\n    color: rgb(105, 194, 61);\n    background-color: rgb(105, 194, 61);\n}\n\n.poison {\n    border-color: rgb(146, 58, 146);\n    color: rgb(146, 58, 146);\n    background-color: rgb(146, 58, 146);\n}\n\n.fire {\n    border-color: rgb(237, 109, 18);\n    color: rgb(237, 109, 18);\n    background-color: rgb(237, 109, 18);\n}\n\n.flying {\n    border-color: rgb(142, 111, 235);\n    color: rgb(142, 111, 235);\n    background-color: rgb(142, 111, 235);\n}\n\n.water {\n    border-color: rgb(69, 120, 237);\n    color: rgb(69, 120, 237);\n    background-color: rgb(69, 120, 237);\n}\n\n.bug {\n    border-color: rgb(151, 165, 29);\n    color: rgb(151, 165, 29);\n    background-color: rgb(151, 165, 29);\n}\n\n.normal {\n    border-color: rgb(156, 156, 99);\n    color: rgb(156, 156, 99);\n    background-color: rgb(156, 156, 99);\n}\n\n.electric {\n    border-color: rgb(246, 201, 19);\n    color: rgb(246, 201, 19);\n    background-color: rgb(246, 201, 19);\n}\n\n.ground {\n    border-color: rgb(219, 181, 77);\n    color: rgb(219, 181, 77);\n    background-color: rgb(219, 181, 77);\n}\n\n.fairy {\n    border-color: rgb(232, 120, 144);\n    color: rgb(232, 120, 144);\n    background-color: rgb(232, 120, 144);\n}\n\n.fighting {\n    border-color: rgb(174, 42, 36);\n    color: rgb(174, 42, 36);\n    background-color: rgb(174, 42, 36);\n}\n\n.psychic {\n    border-color: rgb(247, 54, 112);\n    color: rgb(247, 54, 112);\n    background-color: rgb(247, 54, 112);\n}\n\n.rock {\n    border-color: rgb(164, 143, 50);\n    color: rgb(164, 143, 50);\n    background-color: rgb(164, 143, 50);\n}\n\n.steel {\n    border-color: rgb(160, 160, 192);\n    color: rgb(160, 160, 192);\n    background-color: rgb(160, 160, 192);\n}\n\n.ice {\n    border-color: rgb(126, 206, 206);\n    color: rgb(126, 206, 206);\n    background-color: rgb(126, 206, 206);\n}\n\n.ghost {\n    border-color: rgb(100, 78, 136);\n    color: rgb(100, 78, 136);\n    background-color: rgb(100, 78, 136);\n}\n\n.dragon {\n    border-color: rgb(94, 29, 247);\n    color: rgb(94, 29, 247);\n    background-color: rgb(94, 29, 247);\n}\n\n.pokemon {\n    border: 10px solid;\n    padding: 15px;\n    transition: border 0.3s ease;\n    background-color: #fff;\n}\n\n/*.pokemon:hover {\n    border: 5px solid;\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pokemon/pokemon.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pokemon\" [ngClass]=\"pokemon.types|lowercase_array|slice:0:1\">\n    <h2><span>{{pokemon.order}}</span>{{pokemon.name}}</h2>\n    <div class=\"pokemon-image\">\n        <a (click)=\"open(content)\"></a>\n        <img src=\"assets/data/img/{{pokemon.order}}{{pokemon.name_raw}}.png\" alt=\"{{pokemon.name}}\">\n    </div>\n    <ul class=\"types\">\n        <li *ngFor=\"let type of pokemon.types\" [ngClass]=\"type|lowercase\">\n            {{type|uppercase}}\n        </li>\n    </ul>\n    <button *ngIf=\"isPokedex\" type=\"button\" class=\"add-to-team\" (click)=\"addToTeam(pokemon);\" [disabled]=\"poketeam.length > 5 || isPartOfTeam(pokemon)\">\n        <span *ngIf=\"!isPartOfTeam(pokemon) && poketeam.length < 6\">Add to my team</span>\n        <span *ngIf=\"!isPartOfTeam(pokemon) && poketeam.length > 5\">Team is full</span>\n        <span *ngIf=\"isPartOfTeam(pokemon)\">Added to my team</span>\n    </button>\n    <button *ngIf=\"isPoketeam\" type=\"button\" class=\"remove-from-team\" (click)=\"removeFromTeam(pokemon)\">Remove from my team</button>\n</div>\n\n<ng-template #content let-c=\"close\">\n    <div class=\"modal-header\">\n        {{pokemon.name}}\n    </div>\n    <div class=\"modal-body\">\n        <ul class=\"properties\">\n            <li>\n                <strong>Name:</strong>\n                {{pokemon.name}}\n            </li>\n            <li>\n                <strong>Combat Power:</strong>\n                {{pokemon.base_experience}}\n            </li>\n            <li>\n                <strong>Height:</strong>\n                {{pokemon.height}}\n            </li>\n            <li>\n                <strong>Weight:</strong>\n                {{pokemon.weight}}\n            </li>\n            <li>\n                <strong>Types:</strong>\n                <ul>\n                    <li *ngFor=\"let type of pokemon.types\">\n                        {{type|capitalize}}\n                    </li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn\" (click)=\"c('Close click')\">Close</button>\n    </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/pokemon/pokemon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokemonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pokemon_model__ = __webpack_require__("../../../../../src/app/pokemon.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__poketeam_shared_service__ = __webpack_require__("../../../../../src/app/poketeam.shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PokemonComponent = (function () {
    function PokemonComponent(modalService, poketeamService) {
        this.modalService = modalService;
        this.poketeamService = poketeamService;
        this.pokemonToAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.poketeam = __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* poketeam */];
    }
    PokemonComponent.prototype.ngOnInit = function () {
    };
    PokemonComponent.prototype.addToTeam = function (pokemon) {
        if (!this.isPartOfTeam(pokemon)) {
            this.pokemonToAdd.emit(pokemon);
        }
    };
    PokemonComponent.prototype.removeFromTeam = function (pokemon) {
        this.pokemonToAdd.emit(pokemon);
    };
    PokemonComponent.prototype.open = function (content) {
        this.modalService.open(content);
    };
    PokemonComponent.prototype.isPartOfTeam = function (pokemon) {
        return this.poketeamService.checkByAttribute(this.poketeam, 'id', pokemon['id']);
    };
    return PokemonComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__pokemon_model__["a" /* Pokemon */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__pokemon_model__["a" /* Pokemon */]) === "function" && _a || Object)
], PokemonComponent.prototype, "pokemon", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], PokemonComponent.prototype, "isPokedex", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], PokemonComponent.prototype, "isPoketeam", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('content'),
    __metadata("design:type", Object)
], PokemonComponent.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], PokemonComponent.prototype, "pokemonToAdd", void 0);
PokemonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-pokemon',
        template: __webpack_require__("../../../../../src/app/pokemon/pokemon.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pokemon/pokemon.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__poketeam_shared_service__["a" /* PoketeamSharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__poketeam_shared_service__["a" /* PoketeamSharedService */]) === "function" && _d || Object])
], PokemonComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=pokemon.component.js.map

/***/ }),

/***/ "../../../../../src/app/poketeam.shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoketeamSharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PoketeamSharedService = (function () {
    function PoketeamSharedService() {
    }
    PoketeamSharedService.prototype.getPoketeam = function () {
        var localPoketeam = localStorage.getItem('pkt');
        if (localPoketeam) {
            return JSON.parse(localPoketeam);
        }
        else {
            return [];
        }
    };
    PoketeamSharedService.prototype.addPokemonToTeam = function (pokemon) {
        // check if length isn't over 6
        // check if current pokemon isn't already in array
        if (__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* poketeam */].length >= 6)
            return false;
        __WEBPACK_IMPORTED_MODULE_1__globals__["a" /* poketeam */].push(pokemon);
        localStorage.setItem('pkt', JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* poketeam */]));
        return true;
    };
    PoketeamSharedService.prototype.removePokemonFromTeam = function (pokemon) {
        this.removeByAttribute(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* poketeam */], 'id', pokemon.id);
        localStorage.setItem('pkt', JSON.stringify(__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* poketeam */]));
    };
    PoketeamSharedService.prototype.removeByAttribute = function (array, attribute, value) {
        var i = array.length;
        while (i--) {
            if (array[i]
                && array[i].hasOwnProperty(attribute)
                && (arguments.length > 2 && array[i][attribute] === value)) {
                array.splice(i, 1);
            }
        }
        return array;
    };
    PoketeamSharedService.prototype.checkByAttribute = function (array, attribute, value) {
        var i = array.length;
        while (i--) {
            if (array[i]
                && array[i].hasOwnProperty(attribute)
                && (arguments.length > 2 && array[i][attribute] === value)) {
                return true;
            }
        }
        return false;
    };
    return PoketeamSharedService;
}());
PoketeamSharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PoketeamSharedService);

//# sourceMappingURL=poketeam.shared.service.js.map

/***/ }),

/***/ "../../../../../src/app/poketeam/poketeam.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host-context(.pokedex--dropzone) p {\n    display: none;\n}\n\n:host {\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/poketeam/poketeam.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h1>\n        Pokéteam\n    </h1>\n    <!-- get all pokemon of first generation from pokeapi -->\n     <div class=\"poketeam--container row\" *ngIf=\"poketeam\" dnd-sortable-container [sortableData]=\"poketeam\">\n        <app-pokemon class=\"col col-3\" *ngFor=\"let pokemon of poketeam;let x = index\" [pokemon]=\"pokemon\" (pokemonToAdd)=\"removePokemonFromTeam($event)\" [isPoketeam]=\"isPoketeam\" dnd-sortable [dragData]=\"pokemon\" [sortableIndex]=\"x\" [dragEnabled]=\"!dragOperation\"></app-pokemon>\n    </div>\n    <div class=\"poketeam--container container row\" *ngIf=\"poketeam.length == 0\">\n        <p>\n            You haven't added any Pokémon to your team yet! Add some by going back to the <a href=\"/\">Pokédex</a> and click \"Add to my team\".\n        </p>\n    </div>\n    <!--<div class=\"total container\" *ngIf=\"totalPower\">\n        Your total experience with this team is <strong>{{totalPower}}</strong>\n    </div>-->\n</div>"

/***/ }),

/***/ "../../../../../src/app/poketeam/poketeam.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoketeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__poketeam_shared_service__ = __webpack_require__("../../../../../src/app/poketeam.shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PoketeamComponent = (function () {
    function PoketeamComponent(poketeamService) {
        this.poketeamService = poketeamService;
        this.poketeam = __WEBPACK_IMPORTED_MODULE_2__globals__["a" /* poketeam */];
        this.isPoketeam = true;
        this.totalPower = 0;
        this.dragOperation = false;
    }
    PoketeamComponent.prototype.ngOnInit = function () {
        //this.calculateTotalPower();
        this.getPoketeam();
    };
    PoketeamComponent.prototype.ngAfterContentChecked = function () {
        //this.calculateTotalPower();
    };
    PoketeamComponent.prototype.getPoketeam = function () {
        this.poketeam = this.poketeamService.getPoketeam();
    };
    PoketeamComponent.prototype.addPokemonToTeam = function (pokemon) {
        return false;
    };
    PoketeamComponent.prototype.removePokemonFromTeam = function (pokemon) {
        this.poketeamService.removePokemonFromTeam(pokemon);
        this.getPoketeam(); // Update Pokéteam
    };
    PoketeamComponent.prototype.calculateTotalPower = function () {
        this.totalPower = 0;
        if (this.poketeam.length < 1)
            return;
        for (var i = 0; i < this.poketeam.length; i++) {
            this.totalPower += this.poketeam[i]['base_experience'];
        }
    };
    return PoketeamComponent;
}());
PoketeamComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-poketeam',
        template: __webpack_require__("../../../../../src/app/poketeam/poketeam.component.html"),
        styles: [__webpack_require__("../../../../../src/app/poketeam/poketeam.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__poketeam_shared_service__["a" /* PoketeamSharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__poketeam_shared_service__["a" /* PoketeamSharedService */]) === "function" && _a || Object])
], PoketeamComponent);

var _a;
//# sourceMappingURL=poketeam.component.js.map

/***/ }),

/***/ "../../../../../src/app/suggestieform/suggestieform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    margin-top: 55px;\n    display: block;\n}\n\nlabel {\n    font-weight: bold;\n    display: block;\n}\n\ninput, textarea {\n    border: 0;\n    outline: 0;\n    margin-bottom: 1em;\n    width: 100%;\n    max-width: 300px;\n    background-color: #f1f1f1;\n    padding: 5px 12px;\n}\n\nbutton {\n    outline: none;\n    border: 0;\n    text-transform: uppercase;\n    font-size: 0.8rem;\n    padding: 5px 12px;\n    background-color: #f1f1f1;\n    border: 1px solid #f1f1f1;\n    transition: 0.3s ease;\n    box-sizing: border-box;\n}\n\nbutton:hover {\n    cursor: pointer;\n    background-color: #fefefe;\n}\n\nbutton[disabled] {\n    opacity: 0.5;\n}\n\nbutton[disabled]:hover {\n    cursor: default;\n    background-color: #f1f1f1;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/suggestieform/suggestieform.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>\n    Add a suggestion\n</h2>\n<p>\n    You got an idea for a new feature? Let us know!\n</p>\n<form (ngSubmit)=\"onSubmit(suggestieForm)\" #suggestieForm=\"ngForm\" novalidate>\n    <div>\n        <label for=\"nameField\">Name</label>\n        <input type=\"text\" name=\"nameField\" id=\"nameField\" [ngModel]=\"suggestieForm.nameField\" required>\n    </div>\n    <div>\n        <label for=\"suggestionField\">Suggestion</label>\n        <textarea name=\"suggestionField\" id=\"suggestionField\" [ngModel]=\"suggestieForm.suggestionField\" required></textarea>\n    </div>\n    <div>\n        <button type=\"submit\" [disabled]=\"!suggestieForm.form.valid\">Add suggestion</button>\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/suggestieform/suggestieform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestieformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuggestieformComponent = (function () {
    function SuggestieformComponent() {
        this.submitted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SuggestieformComponent.prototype.ngOnInit = function () {
    };
    SuggestieformComponent.prototype.onSubmit = function (form) {
        // In theory I can call the function from the SuggestiesService here
        // But I'll call an EventEmitter just because :)
        this.submitted.emit({
            name: form.value.nameField,
            suggestion: form.value.suggestionField
        });
        form.resetForm();
    };
    return SuggestieformComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SuggestieformComponent.prototype, "submitted", void 0);
SuggestieformComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-suggestieform',
        template: __webpack_require__("../../../../../src/app/suggestieform/suggestieform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/suggestieform/suggestieform.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SuggestieformComponent);

//# sourceMappingURL=suggestieform.component.js.map

/***/ }),

/***/ "../../../../../src/app/suggesties.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuggestiesService = (function () {
    function SuggestiesService() {
        this.suggesties = [
            {
                name: 'Nathalie Maes',
                suggestion: 'Ik zou het leuk vinden als je de tweede generatie zou kunnen toevoegen!'
            },
            {
                name: 'Bastogne Duo',
                suggestion: 'Ik ben maar een koekje.'
            },
            {
                name: 'Suzy Lotus',
                suggestion: 'Nice.'
            }
        ];
    }
    SuggestiesService.prototype.getSuggesties = function () {
        return this.suggesties;
    };
    SuggestiesService.prototype.addSuggestie = function (suggestie) {
        this.suggesties.unshift(suggestie);
    };
    return SuggestiesService;
}());
SuggestiesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SuggestiesService);

//# sourceMappingURL=suggesties.service.js.map

/***/ }),

/***/ "../../../../../src/app/suggesties/suggesties.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\n    font-style: italic;\n    padding-left: 1.5em;\n    border-left: 10px solid #f1f1f1;\n}\n\nh1 {\n    margin-bottom: 2em;\n}\n\nh2 {\n    font-size: 1.2rem;\n    font-weight: bold;\n}\n\n.suggestie {\n    margin-bottom: 1em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/suggesties/suggesties.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid container\">\n    <h1>Feature Requests</h1>\n    <div class=\"suggestie\" *ngFor=\"let suggestie of suggesties\">\n        <h2>{{suggestie.name}}</h2>\n        <p>{{suggestie.suggestion}}</p>\n    </div>\n    <app-suggestieform (submitted)=\"addSuggestie($event)\"></app-suggestieform>\n</div>"

/***/ }),

/***/ "../../../../../src/app/suggesties/suggesties.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__suggesties_service__ = __webpack_require__("../../../../../src/app/suggesties.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuggestiesComponent = (function () {
    function SuggestiesComponent(suggestiesService) {
        this.suggestiesService = suggestiesService;
        this.suggesties = [];
    }
    SuggestiesComponent.prototype.ngOnInit = function () {
        this.suggesties = this.suggestiesService.getSuggesties();
    };
    SuggestiesComponent.prototype.addSuggestie = function (suggestie) {
        this.suggestiesService.addSuggestie(suggestie);
    };
    return SuggestiesComponent;
}());
SuggestiesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-suggesties',
        template: __webpack_require__("../../../../../src/app/suggesties/suggesties.component.html"),
        styles: [__webpack_require__("../../../../../src/app/suggesties/suggesties.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__suggesties_service__["a" /* SuggestiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__suggesties_service__["a" /* SuggestiesService */]) === "function" && _a || Object])
], SuggestiesComponent);

var _a;
//# sourceMappingURL=suggesties.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map