webpackJsonp([11],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAtalhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configura_es_configura_es__ = __webpack_require__(59);
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
 * Generated class for the EditAtalhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditAtalhoPage = /** @class */ (function () {
    function EditAtalhoPage(navCtrl, navParams, firebaseService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
        this.atalho = {
            'title': '',
            'gasto': '',
            'categoria': '',
            'pagamento': '',
        };
        this.atalho = this.navParams.get('atalho');
    }
    ;
    EditAtalhoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditAtalhoPage');
    };
    EditAtalhoPage.prototype.atualizar = function (categoria) {
        var _this = this;
        this.firebaseService.update('atalho', categoria).then(function (d) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__configura_es_configura_es__["a" /* ConfiguraçõesPage */]);
        });
    };
    EditAtalhoPage.prototype.deletar = function (categoria) {
        var _this = this;
        this.firebaseService.revome('atalho', categoria).then(function (d) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__configura_es_configura_es__["a" /* ConfiguraçõesPage */]);
        });
    };
    EditAtalhoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-atalho',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\edit-atalho\edit-atalho.html"*/'<!--\n\n  Generated template for the EditAtalhoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar>\n\n      <ion-title>Edição Atalho</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n \n\n      <ion-content>\n\n          <ion-item>\n\n            <ion-label>Nome do Item:</ion-label>\n\n            <ion-input type="text" [(ngModel)]="atalho.title"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label>Valor:</ion-label>\n\n            <ion-input type="number" [(ngModel)]="atalho.gasto"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label>Categoria:</ion-label>\n\n            <ion-input type="text" [(ngModel)]="atalho.categoria"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label>Pagamento:</ion-label>\n\n              <ion-input type="text" [(ngModel)]="atalho.pagamento"></ion-input>\n\n            </ion-item>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-item no-lines></ion-item>\n\n            </ion-row>\n\n            <ion-row justify-content-center >\n\n                <button ion-button round outline class="btn3" col-5 color="danger" (click)="deletar(atalho)">Deletar</button>\n\n            </ion-row>\n\n            <ion-row justify-content-center>\n\n                <button ion-button round outline class="btn3" col-5 (click)="atualizar(atalho)">Atualizar</button>\n\n            </ion-row>\n\n          </ion-grid>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\edit-atalho\edit-atalho.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], EditAtalhoPage);
    return EditAtalhoPage;
}());

//# sourceMappingURL=edit-atalho.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodasAsComprasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_edit__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodasAsComprasPage = /** @class */ (function () {
    function TodasAsComprasPage(navCtrl, dbService) {
        this.navCtrl = navCtrl;
        this.dbService = dbService;
        this.produtos = [];
        this.categorias = this.dbService.getArray('categoria');
        this.compras = (this.dbService.getAllQuantidade('compras', 1000)).map(function (a) { return a.reverse(); });
        this.visual = this.dbService.getAll('visual');
        this.varredura = (this.DefinindoArrays());
        console.log("EAE?");
        console.log(this.visual);
    }
    TodasAsComprasPage.prototype.swipe = function (event) {
        if (event.direction === 2) {
            this.navCtrl.parent.select(2);
        }
        if (event.direction === 4) {
            this.navCtrl.parent.select(0);
        }
    };
    TodasAsComprasPage.prototype.remover = function (key) {
        this.dbService.revome('compras', key).then(function (d) { console.log("removido"); });
    };
    TodasAsComprasPage.prototype.icon = function (categoria) {
        var icon;
        this.categorias.forEach(function (element) { if (element.title == categoria) {
            icon = element.icon;
        } });
        return icon;
    };
    TodasAsComprasPage.prototype.goToSingle = function (compras) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_edit__["a" /* EditPage */], { 'compras': compras });
    };
    TodasAsComprasPage.prototype.somando = function () {
        var _this = this;
        var compras = this.dbService.getAll('compras');
        var soma = 0;
        compras.forEach(function (compras) { compras.forEach(function (compras2) { if (compras2['title'] == "Gremio") {
            return (_this.soma += Number(compras2['payload']));
        } }); });
        return (this.soma);
    };
    ;
    TodasAsComprasPage.prototype.DefinindoArrays2 = function () {
        var compras = this.dbService.getAll('compras');
        console.log(compras, "esse é o primeiro, o observable, mas pode ser defino com o | async no ngFor = let a of itens| async");
        compras.forEach(function (itens) {
            console.log(itens, "esse é o array com todas as iterações"),
                itens.forEach(function (item) { console.log(item), "esse é o item especifico, vai ter varios"; });
        });
    };
    ;
    TodasAsComprasPage.prototype.DefinindoArrays = function () {
        var _this = this;
        var array = [];
        var varredura = [];
        var compras = this.dbService.getAll('compras').map(function (a) { return a.reverse(); });
        compras.forEach(function (itens) {
            itens.forEach(function (item) {
                if (Boolean(_this.verificoSeEstaNaLista(item['ano'], item['mes'], varredura)) == false) {
                    varredura.push(([item['ano'], item['mes']].join(' - ')));
                }
            });
        });
        compras.forEach(function (itens) { array.push(_this.ListaDeListasComKey(varredura, itens)); });
        array.push(varredura);
        console.log(array, "olha essa porra aqui");
        return (varredura);
    };
    ;
    TodasAsComprasPage.prototype.verificoSeEstaNaLista = function (ano, mes, lista) {
        var contador = 0;
        var item = ([ano, mes].join(' - '));
        lista.forEach(function (element) { if (element == item) {
            contador = +1;
        } });
        if (contador > 0) {
            return true;
        }
        return false;
    };
    TodasAsComprasPage.prototype.ListaDeListasComKey = function (lista, itens) {
        var _this = this;
        var arrayPr = [];
        var cont = 0;
        var adicao;
        while (cont < lista.length) {
            arrayPr.push([]);
            cont += 1;
        }
        ;
        itens.forEach(function (item) { adicao = (_this.verificoSeigual(item['ano'], item['mes'], lista)); arrayPr = _this.PUSH(arrayPr, item, adicao); });
        console.log("esse array P completo ", arrayPr);
        return (arrayPr);
    };
    TodasAsComprasPage.prototype.verificoSeigual = function (ano, mes, lista) {
        var contador = -1;
        var espera;
        var item = ([ano, mes].join(' - '));
        lista.forEach(function (element) { contador += 1; if (element == item) {
            espera = contador;
        } });
        return (espera);
    };
    ;
    TodasAsComprasPage.prototype.PUSH = function (lista, item, adicao) {
        lista[adicao][(lista[adicao].length)] = Object(item);
        return (lista);
    };
    ;
    TodasAsComprasPage.prototype.dia = function (dia) {
        var retornavel;
        var fileds = dia.split('/');
        retornavel = fileds[0];
        return (retornavel);
    };
    ;
    TodasAsComprasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-todas-as-compras',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\todas-as-compras\todas-as-compras.html"*/'<!--\n  Generated template for the TodasAsComprasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Todas as compras</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  \n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n  <ion-list>\n    <div >\n    <ion-list-header *ngFor="let a of varredura">{{a}}\n      <div *ngFor="let c of (compras | async )"> \n      <ion-item-sliding *ngIf = "([c.ano,c.mes].join(\' - \')) == a">\n        <ion-item class="altura">\n          <ion-icon item-start [name]=(icon(c.categoria))></ion-icon>\n           <ion-grid>\n            <ion-row>\n              <ion-col col-9>\n                <h2>{{c.title}}</h2>\n                <h3>{{c.categoria}} - {{c.pagamento}} </h3>\n              </ion-col>\n              <ion-col col-3>\n                <ion-row justify-content-center>\n                  <p class="dia">€{{c.payload}}</p>\n                </ion-row>\n                <ion-row justify-content-center>\n                  <h2 class ="dia2">{{dia(c.data)}}/{{c.mes}} </h2>\n                </ion-row>\n                \n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          \n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="primary" (click)="goToSingle(c)" >\n            <ion-icon name="create" ></ion-icon>\n            Edit\n          </button>\n          <button ion-button color="danger"(click)="remover(c)">\n            <ion-icon name="trash"></ion-icon>\n            Del\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </div>\n    </ion-list-header>\n    </div>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\todas-as-compras\todas-as-compras.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], TodasAsComprasPage);
    return TodasAsComprasPage;
}());

//# sourceMappingURL=todas-as-compras.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnaliseCategoriaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_edit__ = __webpack_require__(51);
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
 * Generated class for the AnaliseCategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnaliseCategoriaPage = /** @class */ (function () {
    function AnaliseCategoriaPage(navCtrl, navParams, dbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.compras = this.navParams.get('compra');
        this.dataEnviada = this.navParams.get('data');
        this.categoriaEnviada = this.navParams.get('categoria');
        this.categorias = this.dbService.getArray('categoria');
    }
    AnaliseCategoriaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnaliseCategoriaPage');
    };
    AnaliseCategoriaPage.prototype.remover = function (key) {
        this.dbService.revome('compras', key).then(function (d) { console.log("removido"); });
    };
    AnaliseCategoriaPage.prototype.icon = function (categoria) {
        var icon;
        this.categorias.forEach(function (element) { if (element.title == categoria) {
            icon = element.icon;
        } });
        return icon;
    };
    AnaliseCategoriaPage.prototype.goToSingle = function (compras) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_edit__["a" /* EditPage */], { 'compras': compras });
    };
    AnaliseCategoriaPage.prototype.dia = function (dia) {
        var retornavel;
        var fileds = dia.split('/');
        retornavel = fileds[0];
        return (retornavel);
    };
    AnaliseCategoriaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-analise-categoria',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\analise-categoria\analise-categoria.html"*/'<!--\n  Generated template for the AnaliseCategoriaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Analise da categoria</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n  \n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <ion-list>\n      <div >\n        <ion-list-header >{{dataEnviada}}\n        <div *ngFor="let c of (compras | async )"> \n            <ion-item-sliding *ngIf = "([c.ano,c.mes].join(\' - \')) == dataEnviada && c.categoria == categoriaEnviada">\n              <ion-item class="altura">\n            <ion-icon item-start [name]=(icon(c.categoria))></ion-icon>\n             <ion-grid>\n              <ion-row>\n                <ion-col col-9>\n                  <h2>{{c.title}}</h2>\n                  <h3>{{c.categoria}} - {{c.pagamento}} </h3>\n                </ion-col>\n                <ion-col col-3>\n                  <ion-row justify-content-center>\n                    <p class="dia">€{{c.payload}}</p>\n                  </ion-row>\n                  <ion-row justify-content-center>\n                    <h2 class ="dia2">{{dia(c.data)}}/{{c.mes}} </h2>\n                  </ion-row>\n                  \n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            \n          </ion-item>\n          <ion-item-options side="right">\n            <button ion-button color="primary" (click)="goToSingle(c)" >\n              <ion-icon name="create" ></ion-icon>\n              Edit\n            </button>\n            <button ion-button color="danger"(click)="remover(c)">\n              <ion-icon name="trash"></ion-icon>\n              Del\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </div>\n      </ion-list-header>\n      </div>\n    </ion-list>\n</ion-content>\n\n\n\n\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\analise-categoria\analise-categoria.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], AnaliseCategoriaPage);
    return AnaliseCategoriaPage;
}());

//# sourceMappingURL=analise-categoria.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalisePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__analise_categoria_analise_categoria__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__analise_pagamento_analise_pagamento__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__previs_o_previs_o__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graficos_graficos__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__analise_divida_analise_divida__ = __webpack_require__(391);
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
 * Generated class for the AnalisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnalisePage = /** @class */ (function () {
    ///////////////////////////////////////
    function AnalisePage(navCtrl, navParams, dbService, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.alertCtrl = alertCtrl;
        this.comprasO = {
            'title': '',
            'payload': '',
            'categoria': '',
            'pagamento': '',
            'data': '',
            'ano': '',
            'mes': '',
            'total': '',
        };
        this.showM = false;
        this.categorias = this.dbService.getAll('categoria');
        this.previsaoRef = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.database().ref('previsao').orderByChild("total");
        this.pagamentos = this.dbService.getArray('pagamento');
        this.compras = this.dbService.getAll('compras');
        this.ComprasArray = this.arrayCompras(this.compras);
        this.ShowTarefas = this.dbService.getAll('configuracoes/shows2');
        this.comprasO.mes = String(this.AchaMes());
        this.comprasO.ano = String(this.achaAno());
        this.comprasO.data = this.Criacao(0);
        this.DataO = new Date().toISOString();
        this.comprasO.total = String(Number(Number(this.comprasO.ano) * 10000 + Number(this.comprasO.mes) * 100 + Number(this.AchaDia())));
        this.SomaNuConta = this.SomaNu("NuConta", "Reserva de emergência", "Reserva para metas", "Reserva para estudos");
        this.comprasRef = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.database().ref('/compras').orderByChild("total");
        //chart//
        this.categoriasChart = (this.getChartCat(this.categorias));
        this.ArrayDividas = this.SeriesA();
        this.comprasRef.on('value', function (comprasList) {
            var comprasA = [];
            comprasList.forEach(function (compra) {
                var obj;
                obj = compra.val();
                obj.key = compra.key;
                comprasA.push(obj);
                return false;
            });
            comprasA = comprasA.reverse();
            _this.compraList = comprasA;
            _this.loadedcompraList = comprasA;
        });
        this.previsaoRef.on('value', function (comprasList) {
            var comprasA = [];
            comprasList.forEach(function (compra) {
                var obj;
                obj = compra.val();
                obj.key = compra.key;
                obj.total2 = (Number(Number(obj.ano) * 100 + Number(obj.mes)));
                comprasA.push(obj);
                return false;
            });
            comprasA = comprasA.reverse().sort(function (b, a) { return a.total2 - b.total2; });
            _this.previsaoList = comprasA;
        });
    }
    ////////////////////////////////////////////////CHARTS/////////////////////////////////////
    AnalisePage.prototype.grafico = function (previsao, data, compras, comprasArray) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__graficos_graficos__["a" /* GraficosPage */], { 'previsao': previsao,
            'data': data,
            'compras': compras,
            'comprasArray': comprasArray });
    };
    AnalisePage.prototype.getChartCat = function (categorias) {
        var arrayC = [];
        categorias.forEach(function (element) { element.forEach(function (item) { arrayC.push(item['title']); }); });
        return (arrayC);
    };
    AnalisePage.prototype.VerMais = function () {
        this.showM = !this.showM;
    };
    AnalisePage.prototype.getChart = function (context, charType, data, options) {
        return new __WEBPACK_IMPORTED_MODULE_3_chart_js___default.a(context, {
            data: data,
            options: options,
            type: charType
        });
    };
    AnalisePage.prototype.getBarChart = function () {
        var data = {
            labels: this.categoriasChart,
            datasets: [{
                    label: 'Planejado',
                    data: [0, 0, 0, 0, 0, 0, 0],
                    backgroundColor: '#2f6acf',
                    borderWidth: 2
                }, {
                    label: 'Gasto',
                    data: this.valoresChart,
                    backgroundColor: '#32b9db',
                    borderWidth: 2
                }],
        };
        var options = {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            autoSkip: false,
                        }
                    }],
                xAxes: [{
                        ticks: {
                            autoSkip: false,
                        }
                    }]
            }
        };
        return 0;
    };
    AnalisePage.prototype.getGastoChart = function (data, categorias, compras) {
        var _this = this;
        var linha = [];
        categorias.forEach(function (itens) { itens.forEach(function (item) { linha.push(_this.somaCat2(item.title, data)); }); });
        return (linha);
    };
    ///////////////////////////////////////////////////////////////////////////////////////////
    AnalisePage.prototype.Analisa = function (A, B, C) {
        if (C == "color") {
            if (Number(A) > Number(B)) {
                return "primary";
            }
            if (Number(A) == Number(B)) {
                return "dark";
            }
            if (Number(A) < Number(B)) {
                return "danger";
            }
        }
        else {
            if (Number(A) > Number(B)) {
                return "arrow-dropup";
            }
            if (Number(A) == Number(B)) {
                return "remove";
            }
            if (Number(A) < Number(B)) {
                return "arrow-dropdown";
            }
        }
    };
    AnalisePage.prototype.AlteraValor = function (valor, valor2) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Valor atual',
            message: "Entre com valor atual",
            inputs: [
                {
                    name: 'val',
                    placeholder: 'Valor',
                    type: 'number',
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Guardar',
                    handler: function (data) {
                        var a = Number(valor) - Number(data.val);
                        a = Math.round(a * 100) / 100;
                        _this.comprasO.title = "Ajustando";
                        _this.comprasO.categoria = "Ignorar";
                        _this.comprasO.pagamento = valor2;
                        _this.comprasO.payload = String(a);
                        _this.dbService.save('compras', _this.comprasO);
                    }
                }
            ]
        });
        prompt.present();
    };
    AnalisePage.prototype.Criacao = function (A) {
        var data = new Date();
        var dia = data.getDate() - A;
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        var hora = data.getHours();
        var min = data.getMinutes();
        return ([[dia, mes, ano].join('/'), [hora, min].join(':')].join(' - '));
    };
    AnalisePage.prototype.AchaMes = function () {
        var data = new Date();
        var mes = data.getMonth() + 1;
        return (mes);
    };
    AnalisePage.prototype.AchaDia = function () {
        var data = new Date();
        var dia = data.getDate();
        return dia;
    };
    AnalisePage.prototype.achaAno = function () {
        var data = new Date();
        var ano = data.getFullYear();
        return ((ano));
    };
    AnalisePage.prototype.arrayCompras = function (compras) {
        var array = [];
        var linha = [];
        compras.forEach(function (itens) { return itens.forEach(function (item) { linha = [], linha.push(item.payload, [item.ano, item.mes].join(' - '), item.categoria, item.pagamento, item.total), array.push(linha); }); });
        return (array);
    };
    AnalisePage.prototype.somaCat = function (categoria, data) {
        var valorCat = 0;
        this.ComprasArray.forEach(function (item) {
            if (String(item[2]).includes(String(categoria)) &&
                String(item[1]) == String(data)) {
                valorCat = valorCat + Number(item[0]);
            }
        });
        return (Math.round(valorCat));
    };
    AnalisePage.prototype.somaCat3 = function (categoria, data) {
        var valorCat = 0;
        this.compraList.forEach(function (item) {
            if (String(item['categoria']).includes(String(categoria)) &&
                String([String(item['ano']), String(item['mes'])].join(' - ')) == String(data)) {
                valorCat = valorCat + Number(item['payload']);
            }
        });
        return (Math.round(valorCat));
    };
    AnalisePage.prototype.somaReceita = function (data) {
        var valorCat = 0;
        this.compraList.forEach(function (item) {
            if (String(item['title']).includes(String("Entrou")) &&
                String([String(item['ano']), String(item['mes'])].join(' - ')) == String(data)) {
                valorCat = valorCat + Number(item['payload']);
            }
        });
        return (Math.round(valorCat));
    };
    AnalisePage.prototype.somaCatDiv = function (categoria) {
        var valorCat = 0;
        this.ComprasArray.forEach(function (item) { if (String(item[2]) == String(categoria)) {
            valorCat = valorCat + Number(item[0]);
        } });
        return (Math.round(valorCat));
    };
    AnalisePage.prototype.somaCatDiv2 = function (categoria) {
        var valorCat = 0;
        this.compraList.forEach(function (item) { if (String(item['categoria']) == String(categoria)) {
            valorCat = valorCat + Number(item['payload']);
        } });
        return (Math.round(valorCat));
    };
    AnalisePage.prototype.somaPagDiv = function (pagamento) {
        var valorCat = 0;
        this.ComprasArray.forEach(function (item) { if (String(item[3]) == String(pagamento)) {
            valorCat = valorCat + Number(item[0]);
        } });
        return (Math.round(-valorCat));
    };
    AnalisePage.prototype.somaPagDiv2 = function (pagamento) {
        var valorCat = 0;
        this.compraList.forEach(function (item) { if (String(item['pagamento']) == String(pagamento)) {
            valorCat = valorCat + Number(item['payload']);
        } });
        this.compraList.forEach(function (item) { if (String(item['categoria']) == String(pagamento)) {
            valorCat = valorCat - Number(item['payload']);
        } });
        return (Math.round(-valorCat));
    };
    AnalisePage.prototype.SomaNu = function (pagamento1, pagamento2, pagamento3, pagamento4) {
        var valorCat = 0;
        this.ComprasArray.forEach(function (item) {
            if (String(item[3]) == (pagamento1) || String(item[3]) == (pagamento2) || String(item[3]) == (pagamento3) || String(item[3]) == (pagamento4)) {
                valorCat = valorCat + Number(item[0]);
            }
        });
        return (Math.round(-valorCat));
    };
    AnalisePage.prototype.SomaNu2 = function (pagamento1, pagamento2, pagamento3, pagamento4) {
        var valorCat = 0;
        this.compraList.forEach(function (item) {
            if (String(item['pagamento']) == (pagamento1) || String(item['pagamento']) == (pagamento2) || String(item['pagamento']) == (pagamento3) || String(item['pagamento']) == (pagamento4)) {
                valorCat = valorCat + Number(item['payload']);
            }
        });
        return (Math.round(-valorCat));
    };
    AnalisePage.prototype.cor = function (categoria) {
        if (categoria == "Ignorar") {
            return ("danger");
        }
        else {
            return ("black");
        }
    };
    AnalisePage.prototype.somaCat2 = function (categoria, data) {
        var valorCat = 0;
        this.ComprasArray.forEach(function (item) {
            if (String(item[2]) == String(categoria) &&
                String(item[1]) == String(data)) {
                valorCat = valorCat + Number(item[0]);
            }
        });
        return (Math.round(valorCat));
    };
    AnalisePage.prototype.somaPagamento = function (pagamento, data) {
        var valorPag = 0;
        this.ComprasArray.forEach(function (item) {
            if (String(item[3]) == String(pagamento) &&
                String(item[1]) == String(data) && (String(item[2]) != ("Ignorar"))) {
                valorPag = valorPag + Number(item[0]);
            }
        });
        return (Math.round(valorPag));
    };
    AnalisePage.prototype.somaSemana = function (semana, data) {
        var SemanPag = 0;
        if (semana == 1) {
            var a = 1;
            var b = 7;
        }
        if (semana == 2) {
            var a = 8;
            var b = 14;
        }
        if (semana == 3) {
            var a = 15;
            var b = 21;
        }
        if (semana == 4) {
            var a = 22;
            var b = 31;
        }
        this.ComprasArray.forEach(function (item) { if ((Number(item[4].substr(-2, 2))) >= a && (Number(item[4].substr(-2, 2))) <= b && String(item[1]) == String(data)) {
            if (item[2] != 'Ignorar') {
                SemanPag = SemanPag + Number(item[0]);
            }
        } });
        return (Math.round(SemanPag));
    };
    AnalisePage.prototype.somaTotal = function (data) {
        var valorTotal = 0;
        this.ComprasArray.forEach(function (item) { if (String(item[2]) != ("Pais") && (String(item[2]) != ("Ignorar") && String(item[1])) == String(data)) {
            valorTotal = valorTotal + Number(item[0]);
        } });
        return (Math.round(valorTotal));
    };
    AnalisePage.prototype.swipe = function (event) {
        if (event.direction === 4) {
            this.navCtrl.parent.select(1);
        }
    };
    AnalisePage.prototype.atualiza = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    AnalisePage.prototype.goToAnalise = function (data, categoria) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__analise_categoria_analise_categoria__["a" /* AnaliseCategoriaPage */], { 'data': data,
            'categoria': categoria,
            'compra': this.compras });
    };
    AnalisePage.prototype.goToAnaliseDiv = function (div) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__analise_divida_analise_divida__["a" /* AnaliseDividaPage */], { 'divida': div });
    };
    AnalisePage.prototype.goToAnalisePag = function (data, pagamento) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__analise_pagamento_analise_pagamento__["a" /* AnalisePagamentoPage */], { 'data': data,
            'pagamento': pagamento,
            'compra': this.compras });
    };
    AnalisePage.prototype.previsao = function (compras, prev) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__previs_o_previs_o__["a" /* PrevisãoPage */], { 'ComprasArray': compras,
            'PrevisaoList': prev });
    };
    ///////////////////////////////<< PREVISAO >>////////////////////////////////////
    AnalisePage.prototype.retornaKeys = function (prev) {
        var array;
        array = Object.keys(prev);
        return array;
    };
    AnalisePage.prototype.retornaArray = function (prevv) {
        var cat = this.getCategorias(prevv);
        var a = 0;
        cat.forEach(function (element) { return a += (Number(prevv[element])); });
        return a;
    };
    AnalisePage.prototype.getCategorias = function (previsao) {
        var a = Object.keys(previsao);
        var array = [];
        a.forEach(function (element) {
            if (element != 'key' && element != 'total' && element != 'mes' && element != 'ano' && element != "comentario" && element != "total2") {
                array.push(element);
            }
        });
        return (array);
    };
    AnalisePage.prototype.CorIfTrue = function (dado) {
        if (dado == true) {
            return "primary";
        }
        if (dado != true) {
            return "";
        }
    };
    AnalisePage.prototype.ChangeCheckTarefas = function (tarefa) {
        tarefa.check = !tarefa.check;
        this.dbService.update('configuracoes/shows2', tarefa);
    };
    AnalisePage.prototype.SeriesA = function () {
        var array = [];
        var B = false;
        this.compras.forEach(function (element) {
            element.forEach(function (elem) { if (elem.categoria.includes("Divida")) {
                B = false;
                array.forEach(function (A) { if (A == elem.categoria) {
                    B = true;
                } });
                if (B == false) {
                    array.push(elem.categoria);
                }
            } });
        });
        return (array);
    };
    AnalisePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-analise',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\analise\analise.html"*/'<!--\n\n  Generated template for the AnalisePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<!------------------------------------------------------HEADER-------------------------------------------------------->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Análise </ion-title>\n\n    <ion-buttons end  *ngFor="let f of (ShowTarefas | async) " >\n\n        <button *ngIf="f.title == \'Dividas\'" ion-button icon-only color="{{CorIfTrue(f.check)}}" (click)="ChangeCheckTarefas(f)">\n\n          <ion-icon name="list-box"></ion-icon>\n\n        </button>\n\n      <button ion-button icon-only (click)="atualiza()">\n\n        <ion-icon name="sync"></ion-icon>\n\n      </button>\n\n        <button ion-button icon-only (click)="previsao(ComprasArray, previsaoList)">\n\n          <ion-icon name="clipboard"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!------------------------------------------------------/HEADER-------------------------------------------------------->\n\n\n\n\n\n<!------------------------------------------------------Pagamentos-------------------------------------------------------->\n\n<ion-content padding>\n\n  <div *ngFor="let f of (ShowTarefas | async) ">\n\n      <ion-card no-padding *ngIf="f.check == true">\n\n        <ion-card-header> Faturas: </ion-card-header>\n\n        <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-6>\n\n                Local:\n\n              </ion-col>\n\n              <ion-col col-3>\n\n                Valor:\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n\n\n            <ion-row *ngFor="let pagamento of pagamentos" >\n\n              <ion-col col-6 *ngIf=\'pagamento.title != "Ignorar" && pagamento.title != "Divida"\'>\n\n                {{pagamento.title}}\n\n              </ion-col>\n\n              <ion-col col-6 *ngIf=\'pagamento.title != "Ignorar" && pagamento.title != "Divida"\'  (press)="AlteraValor(somaPagDiv2(pagamento.title),pagamento.title)">\n\n                  {{somaPagDiv2(pagamento.title)}}\n\n              </ion-col> \n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col col-6>\n\n                NuConta Guardado\n\n              </ion-col>\n\n              <ion-col col-6 (press)=\'AlteraValor((somaPagDiv2("NuConta")+somaPagDiv2("Reserva de emergência")+somaPagDiv2("Reserva para metas")+somaPagDiv2("Reserva para estudos")),"NuConta")\'>\n\n                {{+somaPagDiv2("Reserva de emergência")+somaPagDiv2("Reserva para metas")+somaPagDiv2("Reserva para estudos")}}\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col col-6>\n\n                NuConta Total\n\n              </ion-col>\n\n              <ion-col col-4 (press)=\'AlteraValor((somaPagDiv2("NuConta")+somaPagDiv2("Reserva de emergência")+somaPagDiv2("Reserva para metas")+somaPagDiv2("Reserva para estudos")),"NuConta")\'>\n\n                {{somaPagDiv2("NuConta")+somaPagDiv2("Reserva de emergência")+somaPagDiv2("Reserva para metas")+somaPagDiv2("Reserva para estudos")}}\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n          </ion-grid>\n\n\n\n\n\n\n\n<!------------------------------------------------------/DIVIDAS-------------------------------------------------------->\n\n        <ion-card-header> Dividas </ion-card-header>\n\n        <ion-grid>\n\n            <ion-row>\n\n              <ion-col col-6>\n\n                Pessoa:\n\n              </ion-col>\n\n              <ion-col col-3>\n\n                Gasto:\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row *ngFor="let divs of ArrayDividas" (press) =\'goToAnaliseDiv(divs)\'>\n\n                <ion-col col-6>\n\n                    {{divs}}\n\n                  </ion-col>\n\n                  <ion-col col-3>\n\n                    {{somaCatDiv2(divs)}}\n\n                  </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n      </ion-card>\n\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n<!------------------------------------------------------/CARDS DE PREVISÃO-------------------------------------------------------->\n\n  <div class="main-content" (swipe)="swipe($event)">\n\n    <ion-card *ngFor = "let prev of (previsaoList)">\n\n      <ion-row>\n\n        <ion-col col-10>\n\n          <ion-card-header> {{prev.total}} </ion-card-header>  \n\n        </ion-col>\n\n        <ion-col col-2>\n\n        <ion-buttons end>\n\n          <button ion-button icon-only end clear (click)="grafico(prev,prev.total,compras,ComprasArray)">\n\n          <ion-icon name="stats"></ion-icon></button>\n\n        </ion-buttons>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-5 class="titulo">\n\n            Categoria\n\n          </ion-col>\n\n          <ion-col col-3 class=\'center\'>\n\n            Previsto\n\n          </ion-col>\n\n          <ion-col col-3 class=\'center\'>\n\n            Gasto\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <div *ngFor = "let keyy of retornaKeys(prev)">\n\n          <ion-row  *ngIf="keyy != \'key\' && keyy != \'total\' && keyy != \'ano\' && keyy != \'mes\' && keyy != \'Ignorar\' && keyy != \'total2\'  && keyy != \'comentario\'"  (click)="goToAnalise(prev.total,keyy)">\n\n            <ion-col col-5>\n\n                {{keyy}}\n\n            </ion-col>\n\n            <ion-col col-3 class=\'center\'>\n\n                {{prev[keyy]}}\n\n            </ion-col>\n\n            <ion-col col-3 col-3 class=\'center\'>\n\n                {{somaCat3(keyy,prev.total)}}\n\n            </ion-col>\n\n            <ion-col col-1 no-padding >\n\n              <button no-padding small class=\'center\' ion-button clear color="{{Analisa(prev[keyy],somaCat(keyy,prev.total),\'color\')}}">\n\n                <ion-icon name="{{Analisa(prev[keyy],somaCat(keyy,prev.total),\'icone\')}}"> </ion-icon>\n\n              </button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </div>\n\n\n\n        <ion-row class="bold">\n\n            <ion-col col-5 class="bold">\n\n              Total\n\n            </ion-col>\n\n            <ion-col col-3 class=\'center\'>\n\n              {{retornaArray(prev)}}  \n\n            </ion-col>\n\n            <ion-col col-3 class=\'center\'>\n\n              {{somaTotal(prev.total)}}\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row class="bold">\n\n          <ion-col col-5 class="bold">\n\n            Mensal/Reserva\n\n          </ion-col>\n\n          <ion-col col-3 class=\'center\'>\n\n            {{retornaArray(prev)-(somaPagamento("Reserva de emergência",(prev.total))+somaPagamento("Reserva para estudos",(prev.total))+somaPagamento("Reserva para metas",(prev.total)))  }}\n\n          </ion-col>\n\n          <ion-col col-3 class=\'center\'>\n\n            {{somaPagamento("Reserva de emergência",(prev.total))+somaPagamento("Reserva para estudos",(prev.total))+somaPagamento("Reserva para metas",(prev.total))}}\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row class="bold">\n\n          <ion-col col-5 class="bold">\n\n            Receita\n\n          </ion-col>\n\n          <ion-col col-3 class=\'center\'>\n\n            {{-somaReceita(prev.total)}}\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n        <button ion-button clear col-3 padding small (click)="VerMais()">Ver Mais</button>\n\n        <div *ngIf="showM == true">\n\n        <ion-row>\n\n          <ion-col>\n\n            Comentário: {{prev.comentario}}\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngFor="let pagamento of pagamentos" (click)="goToAnalisePag(prev.total,pagamento.title)">\n\n            <ion-col col-5>\n\n              {{pagamento.title}}\n\n            </ion-col>\n\n            <ion-col col-3  class=\'center\'>\n\n                {{somaPagamento(pagamento.title, prev.total)}}\n\n            </ion-col>\n\n            <ion-col>\n\n            </ion-col>\n\n        </ion-row>\n\n        </div>\n\n      </ion-grid>\n\n    \n\n      <!------------------------------------------------------/SOMAS DA SEMANA-------------------------------------------------------->\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-3 justify-content-center>\n\n            <ion-row style="height:20px" justify-content-center>Sem 1</ion-row>\n\n            <ion-row justify-content-center>{{somaSemana(1,prev.total)}}</ion-row>\n\n          </ion-col>\n\n\n\n          <ion-col col-3 justify-content-center>\n\n            <ion-row style="height:20px" justify-content-center>Sem 2</ion-row>\n\n            <ion-row justify-content-center>{{somaSemana(2,prev.total)}}</ion-row>\n\n          </ion-col>\n\n\n\n          <ion-col col-3 justify-content-center>\n\n            <ion-row style="height:20px" justify-content-center>Sem 3</ion-row>\n\n            <ion-row justify-content-center>{{somaSemana(3,prev.total)}}</ion-row>\n\n          </ion-col>\n\n\n\n          <ion-col col-3 justify-content-center>\n\n            <ion-row style="height:20px" justify-content-center>Sem 4</ion-row>\n\n            <ion-row justify-content-center>{{somaSemana(4,prev.total)}}</ion-row>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n      \n\n    </ion-card>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\analise\analise.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AnalisePage);
    return AnalisePage;
}());

//# sourceMappingURL=analise.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalisePagamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_edit__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__ = __webpack_require__(21);
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
 * Generated class for the AnalisePagamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnalisePagamentoPage = /** @class */ (function () {
    function AnalisePagamentoPage(navCtrl, navParams, dbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.compras = this.navParams.get('compra');
        this.dataEnviada = this.navParams.get('data');
        this.pagamentoEnviado = this.navParams.get('pagamento');
        this.categorias = this.dbService.getArray('categoria');
    }
    AnalisePagamentoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnaliseCategoriaPage');
    };
    AnalisePagamentoPage.prototype.remover = function (key) {
        this.dbService.revome('compras', key).then(function (d) { console.log("removido"); });
    };
    AnalisePagamentoPage.prototype.icon = function (categoria) {
        var icon;
        this.categorias.forEach(function (element) { if (element.title == categoria) {
            icon = element.icon;
        } });
        return icon;
    };
    AnalisePagamentoPage.prototype.goToSingle = function (compras) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_edit__["a" /* EditPage */], { 'compras': compras });
    };
    AnalisePagamentoPage.prototype.dia = function (dia) {
        var retornavel;
        var fileds = dia.split('/');
        retornavel = fileds[0];
        return (retornavel);
    };
    AnalisePagamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-analise-pagamento',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\analise-pagamento\analise-pagamento.html"*/'<!--\n  Generated template for the AnalisePagamentoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Analise Pagamento</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  \n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <ion-list>\n      <div >\n        <ion-list-header >{{dataEnviada}}\n        <div *ngFor="let c of (compras | async )"> \n            <ion-item-sliding *ngIf = "([c.ano,c.mes].join(\' - \')) == dataEnviada && c.pagamento == pagamentoEnviado">\n              <ion-item class="altura">\n            <ion-icon item-start [name]=(icon(c.categoria))></ion-icon>\n             <ion-grid>\n              <ion-row>\n                <ion-col col-9>\n                  <h2>{{c.title}}</h2>\n                  <h3>{{c.categoria}} - {{c.pagamento}} </h3>\n                </ion-col>\n                <ion-col col-3>\n                  <ion-row justify-content-center>\n                    <p class="dia">€{{c.payload}}</p>\n                  </ion-row>\n                  <ion-row justify-content-center>\n                    <h2 class ="dia2">{{dia(c.data)}}/{{c.mes}} </h2>\n                  </ion-row>\n                  \n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            \n          </ion-item>\n          <ion-item-options side="right">\n            <button ion-button color="primary" (click)="goToSingle(c)" >\n              <ion-icon name="create" ></ion-icon>\n              Edit\n            </button>\n            <button ion-button color="danger"(click)="remover(c)">\n              <ion-icon name="trash"></ion-icon>\n              Del\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </div>\n      </ion-list-header>\n      </div>\n    </ion-list>\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\analise-pagamento\analise-pagamento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], AnalisePagamentoPage);
    return AnalisePagamentoPage;
}());

//# sourceMappingURL=analise-pagamento.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrevisãoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
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
 * Generated class for the PrevisãoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrevisãoPage = /** @class */ (function () {
    function PrevisãoPage(navCtrl, navParams, dbService, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.alertCtrl = alertCtrl;
        this.previsao = {
            'total': '',
            'ano': '',
            'mes': '',
            'comentario': '',
        };
        this.categorias = this.dbService.getAll('categoria');
        this.addPrevisao(this.categorias);
        this.previsoes = this.dbService.getAll2('previsao').map(function (a) { return a.reverse(); });
        this.previsoes = this.navParams.get("PrevisaoList");
        this.ComprasArray = this.navParams.get('ComprasArray');
        this.prevRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/previsao').orderByChild("total");
        console.log("entrou");
        this.prevRef.on('value', function (prevList) {
            var prevA = [];
            prevList.forEach(function (prev) {
                var obj;
                obj = prev.val();
                obj.key = prev.key;
                obj.total2 = (Number(Number(obj.ano) * 100 + Number(obj.mes)));
                prevA.push(obj);
                return false;
            });
            prevA = prevA.reverse().sort(function (b, a) { return a.total2 - b.total2; });
            _this.prevList = prevA;
            _this.prevList.forEach(function (element) { console.log(element); });
        });
    }
    PrevisãoPage.prototype.CalculaMedia = function (categoria, ano, mes) {
        if (categoria == 'total') {
            return (' ');
        }
        var calc = 0;
        var cont = 0;
        var total = ano * 100 + mes;
        var media;
        this.prevList.forEach(function (item) {
            if (Number(item['ano']) * 100 + Number(item['mes']) > 201902 && Number(item['ano']) * 100 + Number(item['mes']) < Number(total)) {
                if (Number(item[categoria]) != 0) {
                    cont += 1;
                }
                calc += Number(item[categoria]);
            }
        });
        if (cont == 0) {
            return 0;
        }
        else {
            media = calc / cont;
            media = Math.round(media);
            return (media);
        }
    };
    PrevisãoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPrevisãoPage!');
    };
    PrevisãoPage.prototype.criaObjeto = function (prop) {
        Object.defineProperty(this.previsao, prop, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: '0'
        });
        return this.previsao;
    };
    PrevisãoPage.prototype.addPrevisao = function (categorias) {
        var _this = this;
        categorias.forEach(function (element) { element.forEach(function (a) { return _this.criaObjeto(a.title); }); });
    };
    PrevisãoPage.prototype.savePrevisao = function (previsao, categorias) {
        previsao.mes = this.AchaMes();
        previsao.ano = this.achaAno();
        previsao.total = [previsao.ano, previsao.mes].join(' - ');
        this.addPrevisao(categorias);
        this.dbService.save('previsao', previsao);
    };
    PrevisãoPage.prototype.Criacao = function () {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        var hora = data.getHours();
        var min = data.getMinutes();
        return ([[dia, mes, ano].join('/'), [hora, min].join(':')].join(' - '));
    };
    PrevisãoPage.prototype.AchaMes = function () {
        var data = new Date();
        var mes = data.getMonth() + 1;
        return (mes);
    };
    PrevisãoPage.prototype.achaAno = function () {
        var data = new Date();
        var ano = data.getFullYear();
        return ((ano));
    };
    PrevisãoPage.prototype.retornaKeys = function (prev) {
        var array;
        array = Object.keys(prev);
        return array;
    };
    PrevisãoPage.prototype.save = function (item) {
        this.dbService.update('previsao', item);
    };
    PrevisãoPage.prototype.deletar = function (item) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Deletar esse item?',
            message: 'deseja confirmar? essa mudança sera irreversível',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                    }
                },
                {
                    text: 'Confirma',
                    handler: function () {
                        _this.dbService.revome('previsao', item);
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    /////////////////////////// funcoes juntas///////////////////
    PrevisãoPage.prototype.retornaArray = function (prevv) {
        var cat = this.getCategorias(prevv);
        var a = 0;
        cat.forEach(function (element) { return a += (Number(prevv[element])); });
        return a;
    };
    PrevisãoPage.prototype.getCategorias = function (previsao) {
        var a = Object.keys(previsao);
        var array = [];
        a.forEach(function (element) {
            if (element != 'key' && element != 'total' && element != 'mes' && element != 'ano' && element != 'comentario' && element != "total2") {
                array.push(element);
            }
        });
        return (array);
    };
    ////////////////////////////acabou///////////////////
    PrevisãoPage.prototype.somaCat = function (categoria, data) {
        var valorCat = 0;
        this.ComprasArray.forEach(function (item) {
            if (String(item[2]) == String(categoria) &&
                String(item[1]) == String(data)) {
                valorCat = valorCat + Number(item[0]);
            }
        });
        return (Math.round(valorCat));
    };
    PrevisãoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-previsão',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\previsão\previsão.html"*/'<!--\n  Generated template for the PrevisãoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Previsão</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="savePrevisao(previsao, categorias)">\n        <ion-icon name="add"></ion-icon>\n      </button> \n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor = "let prev of (prevList)" >\n    <ion-card-header>{{prev.total}}</ion-card-header>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          Categoria\n        </ion-col>\n        <ion-col>\n          Previsto\n        </ion-col>\n        <ion-col>\n          Gasto\n        </ion-col>\n        <ion-col>\n          Média\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-list>\n      <div *ngFor = "let keyy of retornaKeys(prev)">\n        <ion-item *ngIf="keyy != \'key\' && keyy != \'total2\'">\n          <ion-label fixed>{{keyy}}</ion-label>\n          <ion-input type="text" value="" full no-padding [(ngModel)]="prev[keyy]" class=\'center\'></ion-input>\n          <ion-input type="text"  readonly=\'true\' full no-padding value="{{somaCat(keyy,prev.total)}}" class=\'center\' ></ion-input>\n          <ion-input type="text"  readonly=\'true\' full no-padding value="{{CalculaMedia(keyy,prev[\'ano\'],prev[\'mes\'])}}" class=\'center\' ></ion-input>\n        </ion-item>\n      </div>\n      <ion-item>\n        <ion-label fixed>Soma</ion-label>\n        <ion-input type="text" value="{{retornaArray(prev)}}" readonly=\'true\'></ion-input>\n      </ion-item>\n    </ion-list>\n    \n    <ion-item></ion-item>\n    <ion-grid>\n    <ion-row justify-content-center>\n      <ion-col col-3 justify-content-center>\n        <button ion-button round class="botao" full color ="danger" clear (click)="deletar(prev)">Deletar</button>\n      </ion-col>\n     </ion-row>\n     <ion-row justify-content-center>\n      <ion-col col-3 justify-content-center>\n        <button ion-button round class="botao" clear full (click)="save(prev)" >Atualizar</button>\n      </ion-col>\n    </ion-row>\n    <ion-item></ion-item>\n    </ion-grid>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\previsão\previsão.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PrevisãoPage);
    return PrevisãoPage;
}());

//# sourceMappingURL=previsão.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
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
 * Generated class for the GraficosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GraficosPage = /** @class */ (function () {
    function GraficosPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gradiente = [];
        this.compras = this.navParams.get('compras');
        this.data = this.navParams.get('data');
        this.previsao = this.navParams.get('previsao');
        this.comprasArray = this.navParams.get('comprasArray');
        this.categorias = Object.keys(this.previsao);
        this.categorias = this.getCategorias(this.categorias);
        this.valoresPrevistos = this.getValoresPrevistos(this.categorias, this.previsao);
        this.gradiente = this.Color(11);
        this.prevRef = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.database().ref('/previsao').orderByChild("total");
        this.prevRef.on('value', function (prevList) {
            var prevA = [];
            var Total2 = [];
            prevList.forEach(function (prev) {
                var obj;
                obj = prev.val();
                obj.key = prev.key;
                obj.total2 = (Number(Number(obj.ano) * 100 + Number(obj.mes)));
                if (obj.total2 > 201903) {
                    Total2.push(obj.total2);
                }
                prevA.push(obj);
                return false;
            });
            prevA = prevA.reverse().sort(function (b, a) { return a.total2 - b.total2; });
            _this.prevList = prevA;
            _this.total2 = Total2.sort();
        });
        this.GetValue("Amigos");
    }
    GraficosPage.prototype.GetValue = function (Parametro) {
        var _this = this;
        var array = [];
        this.total2.forEach(function (total2) {
            _this.prevList.forEach(function (element) {
                if (element.total2 == total2) {
                    array.push(element[Parametro]);
                }
            });
        });
        return array;
    };
    GraficosPage.prototype.retornaArray = function (prevv) {
        var cat = this.getCategorias5(prevv);
        var a = 0;
        cat.forEach(function (element) { return a += (Number(prevv[element])); });
        return a;
    };
    GraficosPage.prototype.GastoTotal = function () {
        var _this = this;
        var array = [];
        this.total2.forEach(function (total2) {
            _this.prevList.forEach(function (element) {
                if (element.total2 == total2) {
                    array.push(_this.retornaArray(element));
                }
            });
        });
        return array;
    };
    GraficosPage.prototype.gradienteX = function (val) {
        var b = 47;
        var c = 106;
        var branc1 = 255;
        var incremento1 = (b - branc1) / val.lenght;
        var incremento2 = (b - branc1) / val.lenght;
        var a = 0;
        while (a < (val.lenght)) {
            b += incremento1;
            c += incremento2;
        }
    };
    GraficosPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.barChart = _this.getBarChart();
            _this.pieChart = _this.getPieChart();
            _this.lineChart = _this.getLineChart();
        }, 100);
        setTimeout(function () {
            _this.valoresGastos = _this.getGastoChart(_this.data, _this.categorias, _this.compras);
        }, 50);
    };
    GraficosPage.prototype.getCategorias = function (previsao) {
        var array = [];
        previsao.forEach(function (element) {
            if (element != 'key' && element != 'total' && element != 'mes' && element != 'ano' && element != 'Ignorar' && element != 'total2' && element != 'comentario') {
                array.push(element);
            }
        });
        return (array);
    };
    GraficosPage.prototype.getCategorias5 = function (previsao) {
        var a = Object.keys(previsao);
        var array = [];
        a.forEach(function (element) {
            if (element != 'key' && element != 'total' && element != 'mes' && element != 'ano' && element != "comentario" && element != "total2") {
                array.push(element);
            }
        });
        return (array);
    };
    GraficosPage.prototype.getValoresPrevistos = function (cat, prev) {
        var array = [];
        cat.forEach(function (element) { return array.push(prev[element]); });
        return array;
    };
    GraficosPage.prototype.getGastoChart = function (data, categorias, compras) {
        var _this = this;
        var linha = [];
        categorias.forEach(function (item) { linha.push(_this.somaCat2(item, data)); });
        return (linha);
    };
    GraficosPage.prototype.somaCat2 = function (categoria, data) {
        var valorCat = 0;
        this.comprasArray.forEach(function (item) {
            if (String(item[2]) == String(categoria) &&
                String(item[1]) == String(data)) {
                valorCat = valorCat + Number(item[0]);
            }
        });
        return ((valorCat));
    };
    GraficosPage.prototype.getBarChart = function () {
        var data = {
            labels: this.categorias,
            datasets: [{
                    label: 'Planejado',
                    data: this.valoresPrevistos,
                    backgroundColor: '#2f6acf',
                    borderWidth: 2
                }, {
                    label: 'Gasto',
                    data: this.valoresGastos,
                    backgroundColor: '#32b9db',
                    borderWidth: 2
                }],
        };
        var options = {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            autoSkip: false,
                        }
                    }],
                xAxes: [{
                        ticks: {
                            autoSkip: false,
                        }
                    }]
            }
        };
        return this.getChart(this.barCanvas.nativeElement, 'bar', data, options);
    };
    GraficosPage.prototype.getChart = function (context, charType, data, options) {
        return new __WEBPACK_IMPORTED_MODULE_2_chart_js___default.a(context, {
            data: data,
            options: options,
            type: charType
        });
    };
    GraficosPage.prototype.getPieChart = function () {
        var data = {
            datasets: [{
                    data: this.valoresPrevistos,
                    backgroundColor: ["#ADD8E6", "#87CEEB", "#87CEFA", "#00BFFF", "#1E90FF", "#4169E1", "#6495ED", "#0000FF", "#0000CD", "#00008B", "#191970", "#483D8B", "#6959CD", "#836FFF", "#6A5ACD", "#4682B4"]
                }],
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: this.categorias
        };
        var options = {};
        return this.getChart(this.pieCanvas.nativeElement, 'pie', data, options);
    };
    GraficosPage.prototype.Color = function (a) {
        var array = [];
        var sempre = Math.round(255 / (a - 1));
        var c = 0;
        var b = 0;
        while (b < a) {
            b += 1;
            array.push(('rgba(' + String(c) + ',' + String(c) + ',' + '230)'));
            c += sempre;
        }
        return array;
    };
    GraficosPage.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return String(color);
    };
    GraficosPage.prototype.ArrayColor = function (number) {
        var array = [];
        var a = 0;
        while (a < number) {
            array.push(this.getRandomColor());
            a = a + 1;
        }
        return array;
    };
    GraficosPage.prototype.getCategorias2 = function (previsao) {
        var a = Object.keys(previsao);
        var array = [];
        a.forEach(function (element) {
            if (element != 'key' && element != 'total' && element != 'mes' && element != 'ano' && element != 'comentario' && element != "total2") {
                array.push(element);
            }
        });
        return (array);
    };
    GraficosPage.prototype.getLineChart = function () {
        var data = {
            labels: this.total2,
            datasets: [{
                    label: 'Amigos',
                    data: this.GetValue("Amigos"),
                    borderColor: '#ADD8E6',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 2
                }, {
                    label: 'Date',
                    data: this.GetValue("Date"),
                    borderColor: '#87CEEB',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 2
                }, {
                    label: 'Combustivel',
                    data: this.GetValue("Combustivel"),
                    borderColor: '#87CEFA',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 2
                },
                {
                    label: 'Transporte',
                    data: this.GetValue("Transporte"),
                    borderColor: '#00BFFF',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 2
                },
                {
                    label: 'Extra',
                    data: this.GetValue("Extra"),
                    borderColor: '#1E90FF',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 2
                },
                {
                    label: 'Telefone',
                    data: this.GetValue("Telefone"),
                    borderColor: '#4169E1',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 2
                },
                {
                    label: 'Viagem',
                    data: this.GetValue("Viagem"),
                    borderColor: '#6495ED',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 2
                },
                {
                    label: 'Total',
                    data: this.GastoTotal(),
                    borderColor: '#6495ED',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 2
                }
            ],
        };
        var options = {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            autoSkip: false,
                        }
                    }],
                xAxes: [{
                        ticks: {
                            autoSkip: false,
                        }
                    }]
            }
        };
        return this.getChart(this.lineCanvas.nativeElement, 'line', data, options);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('barCanvas'),
        __metadata("design:type", Object)
    ], GraficosPage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pieCanvas'),
        __metadata("design:type", Object)
    ], GraficosPage.prototype, "pieCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lineCanvas'),
        __metadata("design:type", Object)
    ], GraficosPage.prototype, "lineCanvas", void 0);
    GraficosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-graficos',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\graficos\graficos.html"*/'<!--\n  Generated template for the GraficosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Graficos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div>\n    <canvas #barCanvas height="200vh" ></canvas>\n    <canvas #pieCanvas height="200vh" ></canvas>\n    <canvas #lineCanvas height="200vh" ></canvas>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\graficos\graficos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], GraficosPage);
    return GraficosPage;
}());

//# sourceMappingURL=graficos.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditConfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configura_es_configura_es__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__ = __webpack_require__(21);
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
 * Generated class for the EditConfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditConfPage = /** @class */ (function () {
    function EditConfPage(navCtrl, navParams, firebaseService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
        this.categoria = {
            'title': '',
            'numero': '',
            'icon': '',
        };
        this.categoria = this.navParams.get('categoria');
    }
    EditConfPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditConfPage');
    };
    EditConfPage.prototype.atualizar = function (categoria) {
        var _this = this;
        this.firebaseService.update('categoria', categoria).then(function (d) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__configura_es_configura_es__["a" /* ConfiguraçõesPage */]);
        });
    };
    EditConfPage.prototype.deletar = function (categoria) {
        var _this = this;
        this.firebaseService.revome('categoria', categoria).then(function (d) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__configura_es_configura_es__["a" /* ConfiguraçõesPage */]);
        });
    };
    EditConfPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-conf',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\edit-conf\edit-conf.html"*/'<!--\n\n  Generated template for the EditConfPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Edição</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-item>\n\n    <ion-icon item-start name={{categoria.icon}}></ion-icon>\n\n    <ion-label>Nome do Item:</ion-label>\n\n    <ion-input type="text" [(ngModel)]="categoria.icon"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Nome da categoria:</ion-label>\n\n    <ion-input type="text" [(ngModel)]="categoria.title"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Número da categoria:</ion-label>\n\n    <ion-input type="number" [(ngModel)]="categoria.numero"></ion-input>\n\n  </ion-item>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-item no-lines></ion-item>\n\n    </ion-row>\n\n    <ion-row justify-content-center >\n\n        <button ion-button round outline class="btn3" col-5 color="danger" (click)="deletar(categoria)">Deletar</button>\n\n    </ion-row>\n\n    <ion-row justify-content-center>\n\n        <button ion-button round outline class="btn3" col-5 (click)="atualizar(categoria)">Atualizar</button>\n\n    </ion-row>\n\n  </ion-grid>\n\n    \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\edit-conf\edit-conf.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], EditConfPage);
    return EditConfPage;
}());

//# sourceMappingURL=edit-conf.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPagamentoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configura_es_configura_es__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__ = __webpack_require__(21);
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
 * Generated class for the EditPagamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPagamentoPage = /** @class */ (function () {
    function EditPagamentoPage(navCtrl, navParams, firebaseService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
        this.pagamento = {
            'title': '',
            'numero': '',
            'icon': '',
        };
        this.pagamento = this.navParams.get('pagamento');
    }
    EditPagamentoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditPagamentoPage');
    };
    EditPagamentoPage.prototype.atualizar = function (categoria) {
        var _this = this;
        this.firebaseService.update('pagamento', categoria).then(function (d) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__configura_es_configura_es__["a" /* ConfiguraçõesPage */]);
        });
    };
    EditPagamentoPage.prototype.deletar = function (categoria) {
        var _this = this;
        this.firebaseService.revome('pagamento', categoria).then(function (d) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__configura_es_configura_es__["a" /* ConfiguraçõesPage */]);
        });
    };
    EditPagamentoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-pagamento',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\edit-pagamento\edit-pagamento.html"*/'<!--\n  Generated template for the EditPagamentoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>Edição</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n    <ion-item>\n      <ion-icon item-start name={{pagamento.icon}}></ion-icon>\n      <ion-label>Nome do Item:</ion-label>\n      <ion-input type="text" [(ngModel)]="pagamento.icon"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Nome da categoria:</ion-label>\n      <ion-input type="text" [(ngModel)]="pagamento.title"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Número da categoria:</ion-label>\n      <ion-input type="number" [(ngModel)]="pagamento.numero"></ion-input>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-item no-lines></ion-item>\n      </ion-row>\n      <ion-row justify-content-center >\n        <button ion-button round col-5 (click)="atualizar(pagamento)">Atualizar</button>\n      </ion-row>\n      <ion-row justify-content-center>\n        <button ion-button round col-5 color="danger" (click)="deletar(pagamento)">Deletar</button>\n      </ion-row>\n    </ion-grid>\n      \n  </ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\edit-pagamento\edit-pagamento.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], EditPagamentoPage);
    return EditPagamentoPage;
}());

//# sourceMappingURL=edit-pagamento.js.map

/***/ }),

/***/ 208:
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
webpackEmptyAsyncContext.id = 208;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FirebaseServiceProvider = /** @class */ (function () {
    function FirebaseServiceProvider(db) {
        this.db = db;
    }
    FirebaseServiceProvider.prototype.getAll = function (dado) {
        return this.db.list(dado, function (ref) { return ref.orderByChild('total'); }).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data.map(function (d) { return (__assign({ key: d.key }, d.payload.val())); });
        }));
    };
    FirebaseServiceProvider.prototype.getAllO = function (dado, child) {
        return this.db.list(dado, function (ref) { return ref.orderByChild(child); }).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data.map(function (d) { return (__assign({ key: d.key }, d.payload.val())); });
        }));
    };
    FirebaseServiceProvider.prototype.getAll2 = function (dado) {
        return this.db.list(dado, function (ref) { return ref.orderByChild('total'); }).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data.map(function (d) { return (__assign({ key: d.key }, d.payload.val())); });
        }));
    };
    FirebaseServiceProvider.prototype.getAllQuantidade = function (dado, quantidade) {
        return this.db.list(dado, function (ref) { return ref.orderByChild('total').limitToLast(quantidade); }).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data.map(function (d) { return (__assign({ key: d.key }, d.payload.val())); });
        }));
    };
    FirebaseServiceProvider.prototype.getAllQuantidadeO = function (dado, child, quantidade) {
        return this.db.list(dado, function (ref) { return ref.orderByChild(child).limitToLast(quantidade); }).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data.map(function (d) { return (__assign({ key: d.key }, d.payload.val())); });
        }));
    };
    FirebaseServiceProvider.prototype.getAllchild = function (dado) {
        return this.db.list(dado).snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) {
            return data.map(function (d) { return (__assign({ key: d.key }, d.payload.val())); });
        }));
    };
    FirebaseServiceProvider.prototype.save = function (dado, compras) {
        return this.db.list(dado)
            .push(compras)
            .then(function (r) { return console.log(r); });
    };
    FirebaseServiceProvider.prototype.update = function (dado, compras) {
        return this.db.list(dado)
            .update(compras.key, compras)
            .then(function (r) { return console.log(r); });
    };
    FirebaseServiceProvider.prototype.revome = function (dado, compras) {
        return this.db.list(dado)
            .remove(compras.key)
            .then(function (r) { return console.log('removido', dado, compras); });
    };
    FirebaseServiceProvider.prototype.getArray = function (dado) {
        var teste = this.getAll(dado);
        var array = [];
        teste.forEach(function (dado) { return dado.forEach(function (dado2) { return array.push(dado2); }); });
        return (array);
    };
    FirebaseServiceProvider.prototype.getArray2 = function (dado) {
        var teste = this.getAll(dado);
        return (teste);
    };
    FirebaseServiceProvider.prototype.updateG = function (lista, compras) {
        return this.db.list(lista)
            .update(compras.key, compras)
            .then(function (r) { return console.log(r); });
    };
    FirebaseServiceProvider.prototype.Arredonda = function (val, casas) {
        var b;
        b = (Math.round(val * Math.pow(10, casas)) / (Math.pow(10, casas)));
        return b;
    };
    FirebaseServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseServiceProvider);
    return FirebaseServiceProvider;
}());

//# sourceMappingURL=firebase-service.js.map

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-previsão/add-previsão.module": [
		681,
		10
	],
	"../pages/analise-categoria/analise-categoria.module": [
		682,
		9
	],
	"../pages/analise-pagamento/analise-pagamento.module": [
		684,
		8
	],
	"../pages/analise/analise.module": [
		683,
		7
	],
	"../pages/configurações/configurações.module": [
		687,
		6
	],
	"../pages/edit-atalho/edit-atalho.module": [
		685,
		5
	],
	"../pages/edit-conf/edit-conf.module": [
		686,
		4
	],
	"../pages/edit-pagamento/edit-pagamento.module": [
		689,
		3
	],
	"../pages/edit/edit.module": [
		688,
		2
	],
	"../pages/graficos/graficos.module": [
		691,
		1
	],
	"../pages/previsão/previsão.module": [
		690,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 250;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnaliseDividaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_edit__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todas_as_compras_todas_as_compras__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
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
 * Generated class for the AnaliseDividaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnaliseDividaPage = /** @class */ (function () {
    function AnaliseDividaPage(navCtrl, navParams, dbService, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.alertCtrl = alertCtrl;
        this.produtos = [];
        this.comprass = {
            'title': '',
            'payload': '',
            'categoria': 'Comida',
            'pagamento': 'Nubank',
            'data': '',
            'ano': '',
            'mes': '',
            'total': '',
        };
        this.categorias = this.dbService.getArray('categoria');
        this.DividaCategoria = this.navParams.get('divida');
        this.visual = this.dbService.getAll('visual');
        this.varredura = (this.DefinindoArrays());
        this.countryRef = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.database().ref('/compras').orderByChild("total");
        this.compras = this.dbService.getAllQuantidadeO('compras', 'total', 100).map(function (a) { return a.reverse(); });
        this.criaArray();
        this.somadiv = Number(0);
        this.countryRef.on('value', function (countryList) {
            var countries = [];
            countryList.forEach(function (country) {
                var obj;
                obj = country.val();
                if (obj.categoria == _this.DividaCategoria) {
                    obj.key = country.key;
                    _this.somadiv += Number(obj.payload);
                    obj.soma = _this.somadiv;
                    countries.push(obj);
                }
                return false;
            });
            countries = countries.reverse();
            _this.countryList = countries;
            _this.loadedCountryList = countries;
        });
    }
    AnaliseDividaPage.prototype.criaArray = function () {
        var array = [];
        this.compras.forEach(function (itens) { itens.forEach(function (item) { array.push(item); }); });
        this.comprasA = array;
        this.comprasRef = array;
        return array;
    };
    AnaliseDividaPage.prototype.todos = function () {
        var _this = this;
        this.countryRef = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.database().ref('/compras').limitToLast(1000).orderByChild('total');
        this.countryRef.on('value', function (countryList) {
            var countries = [];
            countryList.forEach(function (country) {
                countries.push(country.val());
                countries.reverse();
                return false;
            });
            _this.countryList = countries;
            _this.loadedCountryList = countries;
        });
    };
    AnaliseDividaPage.prototype.getItems = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.countryList = this.countryList.filter(function (v) {
            if (v.title && q || v.categoria) {
                if (v.title.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
                    v.categoria.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
                    v.total.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
                    v.pagamento.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    AnaliseDividaPage.prototype.initializeItems = function () {
        this.countryList = this.loadedCountryList;
    };
    AnaliseDividaPage.prototype.goToTudo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__todas_as_compras_todas_as_compras__["a" /* TodasAsComprasPage */]);
    };
    AnaliseDividaPage.prototype.swipe = function (event) {
        if (event.direction === 2) {
            this.navCtrl.parent.select(2);
        }
        if (event.direction === 4) {
            this.navCtrl.parent.select(0);
        }
    };
    AnaliseDividaPage.prototype.remover = function (key) {
        this.dbService.revome('compras', key).then(function (d) { console.log("removido"); });
    };
    AnaliseDividaPage.prototype.icon = function (categoria) {
        var icon;
        this.categorias.forEach(function (element) { if (element.title == categoria) {
            icon = element.icon;
        } });
        return icon;
    };
    AnaliseDividaPage.prototype.goToSingle = function (compras) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_edit__["a" /* EditPage */], { 'compras': compras });
    };
    AnaliseDividaPage.prototype.somando = function () {
        var _this = this;
        var compras = this.dbService.getAll('compras');
        var soma = 0;
        compras.forEach(function (compras) { compras.forEach(function (compras2) { if (compras2['title'] == "Gremio") {
            return (_this.soma += Number(compras2['payload']));
        } }); });
        return (this.soma);
    };
    ;
    AnaliseDividaPage.prototype.DefinindoArrays = function () {
        var _this = this;
        var array = [];
        var varredura = [];
        var compras = this.dbService.getAll('compras').map(function (a) { return a.reverse(); });
        compras.forEach(function (itens) {
            itens.forEach(function (item) {
                if (Boolean(_this.verificoSeEstaNaLista(item['ano'], item['mes'], varredura)) == false) {
                    varredura.push(([item['ano'], item['mes']].join(' - ')));
                }
            });
        });
        compras.forEach(function (itens) { array.push(_this.ListaDeListasComKey(varredura, itens)); });
        array.push(varredura);
        return (varredura);
    };
    ;
    AnaliseDividaPage.prototype.verificoSeEstaNaLista = function (ano, mes, lista) {
        var contador = 0;
        var item = ([ano, mes].join(' - '));
        lista.forEach(function (element) { if (element == item) {
            contador = +1;
        } });
        if (contador > 0) {
            return true;
        }
        return false;
    };
    AnaliseDividaPage.prototype.ListaDeListasComKey = function (lista, itens) {
        var _this = this;
        var arrayPr = [];
        var cont = 0;
        var adicao;
        while (cont < lista.length) {
            arrayPr.push([]);
            cont += 1;
        }
        ;
        itens.forEach(function (item) { adicao = (_this.verificoSeigual(item['ano'], item['mes'], lista)); arrayPr = _this.PUSH(arrayPr, item, adicao); });
        return (arrayPr);
    };
    AnaliseDividaPage.prototype.verificoSeigual = function (ano, mes, lista) {
        var contador = -1;
        var espera;
        var item = ([ano, mes].join(' - '));
        lista.forEach(function (element) { contador += 1; if (element == item) {
            espera = contador;
        } });
        return (espera);
    };
    ;
    AnaliseDividaPage.prototype.PUSH = function (lista, item, adicao) {
        lista[adicao][(lista[adicao].length)] = Object(item);
        return (lista);
    };
    ;
    AnaliseDividaPage.prototype.dia = function (dia) {
        var retornavel;
        var fileds = dia.split('/');
        retornavel = fileds[0];
        return (retornavel);
    };
    ;
    AnaliseDividaPage.prototype.cor = function (categoria) {
        if (Number(categoria) < 0) {
            return ("danger");
        }
        else {
            return ("primary");
        }
    };
    AnaliseDividaPage.prototype.copiar = function (item) {
        this.comprass = item;
        delete this.comprass['key'];
        this.dbService.save('compras', this.comprass);
    };
    AnaliseDividaPage.prototype.Arredonda = function (val, val2) {
        return (this.dbService.Arredonda(val, val2));
    };
    AnaliseDividaPage.prototype.copiarDiv = function (item) {
        var _this = this;
        this.comprass = item;
        delete this.comprass['key'];
        this.comprass.pagamento = 'Ignorar';
        this.comprass.payload = String((-1) * Number(this.comprass.payload));
        var prompt = this.alertCtrl.create({
            title: 'Categoria',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Comida',
                    handler: function (data) {
                        _this.comprass.categoria = "Comida";
                        _this.dbService.save('compras', _this.comprass);
                    }
                },
                {
                    text: 'Viagem',
                    handler: function (data) {
                        _this.comprass.categoria = "Viagem";
                        _this.dbService.save('compras', _this.comprass);
                        console.log('Saved clicked');
                    }
                },
                {
                    text: 'Date',
                    handler: function (data) {
                        _this.comprass.categoria = "Date";
                        _this.dbService.save('compras', _this.comprass);
                        console.log('Saved clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.comprass.categoria = data.title;
                        _this.dbService.save('compras', _this.comprass);
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    AnaliseDividaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-analise-divida',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\analise-divida\analise-divida.html"*/'<!--\n  Generated template for the AnaliseDividaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Análise de divida</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  \n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  \n      <ion-list>\n        <div >\n        <ion-list-header *ngFor="let a of varredura">{{a}}\n          <div *ngFor="let c of (countryList)"> \n          <ion-item-sliding *ngIf = "([c.ano,c.mes].join(\' - \')) == a">\n            <ion-item class="altura">\n              <ion-icon *ngIf="(c.categoria.includes(\'Divida\'))" item-start name="contacts" color="{{cor(c.payload)}}"></ion-icon>\n              <ion-icon  *ngIf="(c.categoria.includes(\'Divida\')) == false " item-start color="{{cor(c.payload)}}" [name]=(icon(c.categoria))></ion-icon>\n               <ion-grid>\n                <ion-row>\n                  <ion-col col-9>\n                    <h2>{{c.title}}</h2>\n                    <h3>{{c.categoria}} - {{c.pagamento}} </h3>\n                  </ion-col>\n                  <ion-col col-3>\n                    <ion-row justify-content-center>\n                      <p *ngIf="c.total < 20190300" class="dia">€{{c.payload}}</p>\n                      <p *ngIf="c.total > 20190300" class="dia">${{c.payload}}</p>\n                    </ion-row>\n                    <ion-row justify-content-center>\n                      <h2 *ngIf=\'c.soma >0 \' class=\'diaB\' >{{Arredonda(c.soma,2)}} </h2>\n                      <h2 *ngIf =\'c.soma < 0\' class=\'diaR\' >{{Arredonda(c.soma,2)}} </h2>\n\n                      <h2 class ="dia2">-- {{dia(c.data)}}/{{c.mes}} </h2>\n                    </ion-row>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              \n            </ion-item>\n            <ion-item-options side="right">\n              <button ion-button color="primary" (click)="goToSingle(c)" >\n                <ion-icon name="create" ></ion-icon>\n                Edit\n              </button>\n              <button ion-button color="green" (click)="copiar(c)" >\n                  <ion-icon name="copy" ></ion-icon>\n                  Copy\n                </button>\n              <button ion-button color="danger"(click)="remover(c)">\n                <ion-icon name="trash"></ion-icon>\n                Del\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </div>\n        </ion-list-header>\n        </div>\n      </ion-list>\n  </ion-content>\n  \n'/*ion-inline-end:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\analise-divida\analise-divida.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AnaliseDividaPage);
    return AnaliseDividaPage;
}());

//# sourceMappingURL=analise-divida.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__analise_analise__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__analise_analise__["a" /* AnalisePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Inserir" tabIcon="add"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Recente" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Analise" tabIcon="analytics"></ion-tab>\n</ion-tabs> \n'/*ion-inline-end:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_edit__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__todas_as_compras_todas_as_compras__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, dbService, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.dbService = dbService;
        this.alertCtrl = alertCtrl;
        this.produtos = [];
        this.comprass = {
            'title': '',
            'payload': '',
            'categoria': 'Comida',
            'pagamento': 'Nubank',
            'data': '',
            'ano': '',
            'mes': '',
            'total': '',
        };
        this.categorias = this.dbService.getArray('categoria');
        this.visual = this.dbService.getAll('visual');
        this.varredura = (this.DefinindoArrays());
        this.countryRef = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.database().ref('/compras').limitToLast(100).orderByChild("total");
        this.compras = this.dbService.getAllQuantidadeO('compras', 'total', 100).map(function (a) { return a.reverse(); });
        this.criaArray();
        this.countryRef.on('value', function (countryList) {
            var countries = [];
            countryList.forEach(function (country) {
                var obj;
                obj = country.val();
                obj.key = country.key;
                countries.push(obj);
                return false;
            });
            countries = countries.reverse();
            _this.countryList = countries;
            _this.loadedCountryList = countries;
        });
    }
    AboutPage.prototype.criaArray = function () {
        var array = [];
        this.compras.forEach(function (itens) { itens.forEach(function (item) { array.push(item); }); });
        this.comprasA = array;
        this.comprasRef = array;
        return array;
    };
    AboutPage.prototype.todos = function () {
        var _this = this;
        this.countryRef = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.database().ref('/compras').limitToLast(1000).orderByChild('total');
        this.countryRef.on('value', function (countryList) {
            var countries = [];
            countryList.forEach(function (country) {
                var obj;
                obj = country.val();
                obj.key = country.key;
                countries.push(obj);
                return false;
            });
            _this.countryList = countries;
            _this.loadedCountryList = countries;
        });
    };
    AboutPage.prototype.getItems = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.countryList = this.countryList.filter(function (v) {
            if (v.title && q || v.categoria) {
                if (v.title.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
                    v.categoria.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
                    v.total.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
                    v.pagamento.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    AboutPage.prototype.initializeItems = function () {
        this.countryList = this.loadedCountryList;
    };
    AboutPage.prototype.goToTudo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__todas_as_compras_todas_as_compras__["a" /* TodasAsComprasPage */]);
    };
    AboutPage.prototype.swipe = function (event) {
        if (event.direction === 2) {
            this.navCtrl.parent.select(2);
        }
        if (event.direction === 4) {
            this.navCtrl.parent.select(0);
        }
    };
    AboutPage.prototype.remover = function (key) {
        this.dbService.revome('compras', key).then(function (d) { console.log("removido"); });
    };
    AboutPage.prototype.icon = function (categoria) {
        var icon;
        this.categorias.forEach(function (element) { if (element.title == categoria) {
            icon = element.icon;
        } });
        return icon;
    };
    AboutPage.prototype.goToSingle = function (compras) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_edit__["a" /* EditPage */], { 'compras': compras });
    };
    AboutPage.prototype.somando = function () {
        var _this = this;
        var compras = this.dbService.getAll('compras');
        var soma = 0;
        compras.forEach(function (compras) { compras.forEach(function (compras2) { if (compras2['title'] == "Gremio") {
            return (_this.soma += Number(compras2['payload']));
        } }); });
        return (this.soma);
    };
    ;
    AboutPage.prototype.DefinindoArrays = function () {
        var _this = this;
        var array = [];
        var varredura = [];
        var compras = this.dbService.getAll('compras').map(function (a) { return a.reverse(); });
        compras.forEach(function (itens) {
            itens.forEach(function (item) {
                if (Boolean(_this.verificoSeEstaNaLista(item['ano'], item['mes'], varredura)) == false) {
                    varredura.push(([item['ano'], item['mes']].join(' - ')));
                }
            });
        });
        compras.forEach(function (itens) { array.push(_this.ListaDeListasComKey(varredura, itens)); });
        array.push(varredura);
        return (varredura);
    };
    ;
    AboutPage.prototype.verificoSeEstaNaLista = function (ano, mes, lista) {
        var contador = 0;
        var item = ([ano, mes].join(' - '));
        lista.forEach(function (element) { if (element == item) {
            contador = +1;
        } });
        if (contador > 0) {
            return true;
        }
        return false;
    };
    AboutPage.prototype.ListaDeListasComKey = function (lista, itens) {
        var _this = this;
        var arrayPr = [];
        var cont = 0;
        var adicao;
        while (cont < lista.length) {
            arrayPr.push([]);
            cont += 1;
        }
        ;
        itens.forEach(function (item) { adicao = (_this.verificoSeigual(item['ano'], item['mes'], lista)); arrayPr = _this.PUSH(arrayPr, item, adicao); });
        return (arrayPr);
    };
    AboutPage.prototype.verificoSeigual = function (ano, mes, lista) {
        var contador = -1;
        var espera;
        var item = ([ano, mes].join(' - '));
        lista.forEach(function (element) { contador += 1; if (element == item) {
            espera = contador;
        } });
        return (espera);
    };
    ;
    AboutPage.prototype.PUSH = function (lista, item, adicao) {
        lista[adicao][(lista[adicao].length)] = Object(item);
        return (lista);
    };
    ;
    AboutPage.prototype.dia = function (dia) {
        var retornavel;
        var fileds = dia.split('/');
        retornavel = fileds[0];
        return (retornavel);
    };
    ;
    AboutPage.prototype.cor = function (categoria) {
        if (categoria == "Ignorar") {
            return ("danger");
        }
        else {
            return ("black");
        }
    };
    AboutPage.prototype.copiar = function (item) {
        this.comprass = item;
        delete this.comprass['key'];
        this.dbService.save('compras', this.comprass);
    };
    AboutPage.prototype.copiarDiv = function (item) {
        var _this = this;
        this.comprass = item;
        delete this.comprass['key'];
        this.comprass.pagamento = 'Ignorar';
        this.comprass.payload = String((-1) * Number(this.comprass.payload));
        var prompt = this.alertCtrl.create({
            title: 'Categoria',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Comida',
                    handler: function (data) {
                        _this.comprass.categoria = "Comida";
                        _this.dbService.save('compras', _this.comprass);
                    }
                },
                {
                    text: 'Viagem',
                    handler: function (data) {
                        _this.comprass.categoria = "Viagem";
                        _this.dbService.save('compras', _this.comprass);
                        console.log('Saved clicked');
                    }
                },
                {
                    text: 'Date',
                    handler: function (data) {
                        _this.comprass.categoria = "Date";
                        _this.dbService.save('compras', _this.comprass);
                        console.log('Saved clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.comprass.categoria = data.title;
                        _this.dbService.save('compras', _this.comprass);
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Recente\n\n    </ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="todos()">\n\n        <ion-icon name="infinite"></ion-icon>\n\n      </button>\n\n    </ion-buttons>    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  \n\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n\n\n    <ion-list>\n\n      <div >\n\n      <ion-list-header *ngFor="let a of varredura">{{a}}\n\n        <div *ngFor="let c of (countryList)"> \n\n        <ion-item-sliding *ngIf = "([c.ano,c.mes].join(\' - \')) == a">\n\n          <ion-item class="altura">\n\n            <ion-icon *ngIf="(c.categoria.includes(\'Divida\'))" item-start name="contacts" color="grey"></ion-icon>\n\n            <ion-icon *ngIf="(c.title.includes(\'Entrou\'))" item-start name="cash" color="primary"></ion-icon>\n\n            <ion-icon  *ngIf="(c.categoria.includes(\'Divida\')) == false && (c.title.includes(\'Entrou\')) == false" item-start color="{{cor(c.categoria)}}" [name]=(icon(c.categoria))></ion-icon>\n\n             <ion-grid>\n\n              <ion-row>\n\n                <ion-col col-9>\n\n                  <h2>{{c.title}}</h2>\n\n                  <h3>{{c.categoria}} - {{c.pagamento}} </h3>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                  <ion-row justify-content-center>\n\n                    <p *ngIf="c.total < 20190300" class="dia">€{{c.payload}}</p>\n\n                    <p *ngIf="c.total > 20190300" class="dia">${{c.payload}}</p>\n\n                  </ion-row>\n\n                  <ion-row justify-content-center>\n\n                    <h2 class ="dia2">{{dia(c.data)}}/{{c.mes}} </h2>\n\n                  </ion-row>\n\n                  \n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n            \n\n          </ion-item>\n\n          <ion-item-options side="right">\n\n            <button ion-button color="primary" (click)="goToSingle(c)" >\n\n              <ion-icon name="create" ></ion-icon>\n\n              Edit\n\n            </button>\n\n            <button ion-button color="green" (click)="copiar(c)" >\n\n                <ion-icon name="copy" ></ion-icon>\n\n                Copy\n\n              </button>\n\n            <button ion-button color="danger"(click)="remover(c)">\n\n              <ion-icon name="trash"></ion-icon>\n\n              Del\n\n            </button>\n\n          </ion-item-options>\n\n          <ion-item-options side="left">\n\n            <button ion-button color="primary" (click)="copiarDiv(c)" >\n\n              <ion-icon name="create" ></ion-icon>\n\n              Categorizar Divida\n\n            </button>\n\n          </ion-item-options>\n\n        </ion-item-sliding>\n\n      </div>\n\n      </ion-list-header>\n\n      </div>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configura_es_configura_es__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_atalho_edit_atalho__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, dbService, statusBar, alertCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.dbService = dbService;
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.show = false;
        this.showGraf = false;
        this.compras = {
            'title': '',
            'payload': '',
            'categoria': 'Comida',
            'pagamento': 'Nubank',
            'data': '',
            'ano': '',
            'mes': '',
            'total': '',
        };
        this.categoriaDiv = {
            'title': '',
        };
        this.array1 = [1, 2, 3, 4, 5];
        this.array2 = [5, 6, 7, 1, 2];
        this.a1 = 0;
        this.a2 = 0;
        this.a3 = 0;
        this.a4 = 0;
        this.copia = "oi";
        this.DataO = new Date().toISOString();
        this.Dataa = new Date;
        this.Criacao(0);
        this.statusBar.backgroundColorByHexString('#ffffff');
        this.categorias = this.dbService.getAllO('categoria', 'numero').map(function (a) { return a.reverse(); });
        this.pagamentos = this.dbService.getAllO('pagamento', 'numero').map(function (a) { return a.reverse(); });
        this.atalhos = this.dbService.getAll('atalho');
        this.compras.mes = String(this.AchaMes());
        this.compras.ano = String(this.achaAno());
        this.compras.data = this.Criacao(0);
        this.mes = this.AchaMes();
        this.ano = this.achaAno();
        this.total = this.ano * 10000 + this.mes * 100;
        this.totalMenos = this.ano * 10000 + (this.mes + 1) * 100;
        this.previsto = [];
        this.Compras = [];
        this.favorito = this.dbService.getAllQuantidadeO('categorias', 'numero', 1).map(function (a) { return a.reverse(); });
        this.favorito = this.favorito.forEach(function (itens) { itens.forEach(function (item) { return item.title; }); });
        this.Pessoas = this.dbService.getAll2('configuracoes/pessoas');
        this.diaMes = this.daysInMonth(this.Dataa.getMonth() + 1, this.Dataa.getFullYear());
        this.countryRef = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.database().ref('/compras').limitToLast(100).orderByChild("total");
        this.countryRef2 = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.database().ref('/previsao').limitToLast(30).orderByChild("total");
        this.countryRef.on('value', function (countryList) {
            var countries = [];
            countryList.forEach(function (country) {
                var obj;
                obj = country.val();
                obj.key = country.key;
                countries.push(obj);
                return false;
            });
            countries = countries.reverse();
            _this.loadedCountryList = countries;
            console.log(_this.loadedCountryList);
        });
        this.countryRef2.on('value', function (countryList) {
            var countries = [];
            countryList.forEach(function (country) {
                var obj;
                obj = country.val();
                obj.key = country.key;
                obj.total2 = Number(obj.ano) * 10000 + Number(obj.mes) * 100;
                countries.push(obj);
                return false;
            });
            countries = countries.reverse();
            _this.loadedCountryList2 = countries;
        });
    }
    HomePage.prototype.doRefresh = function (refresher) {
        this.show = !this.show;
        setTimeout(function () {
            refresher.complete();
        }, 50);
    };
    HomePage.prototype.Arredonda = function (item) {
        return Math.round(item);
    };
    HomePage.prototype.SomaCat = function (Categoria) {
        var _this = this;
        var a = 0;
        if (this.loadedCountryList != undefined) {
            this.loadedCountryList.forEach(function (element) {
                if (element.categoria == Categoria && element.total > _this.total && element.total < _this.totalMenos) {
                    a += Number(element.payload);
                }
                if (Categoria == "Total") {
                    a = 0;
                    _this.loadedCountryList.forEach(function (element) {
                        if (element.total > _this.total && element.total < _this.totalMenos &&
                            element.categoria != "Ignorar") {
                            a += Number(element.payload);
                        }
                    });
                }
            });
        }
        return Math.round(a);
    };
    HomePage.prototype.retornaArray = function (prevv) {
        var cat = this.getCategorias(prevv);
        var a = 0;
        cat.forEach(function (element) { return a += (Number(prevv[element])); });
        return a;
    };
    HomePage.prototype.getCategorias = function (previsao) {
        var a = Object.keys(previsao);
        var array = [];
        a.forEach(function (element) {
            if (element != 'key' && element != 'total' && element != 'mes' && element != 'ano' && element != 'comentario' && element != "total2") {
                array.push(element);
            }
        });
        return (array);
    };
    HomePage.prototype.Prev = function (Categoria) {
        var _this = this;
        var a = 0;
        if (this.loadedCountryList2 != undefined) {
            this.loadedCountryList2.forEach(function (element) {
                if (element.total2 == _this.total) {
                    a += Number(element[Categoria]);
                }
                if (Categoria == "Total") {
                    var b = [];
                    _this.loadedCountryList2.forEach(function (element) {
                        if (element.total2 == _this.total) {
                            element.forEach(function (element2) { console.log("aaaah"); });
                        }
                    });
                }
            });
        }
        return Math.round(a);
    };
    HomePage.prototype.teste = function (array) {
        var data = new Date;
        var a1 = (String(array[0] * 100 / array[3]) + '%');
        var a2 = (String((array[1] * 100) / array[3]) + '%');
        var a3 = (String((array[2] * 100 / array[3])) + '%');
        var a4 = (String("100%"));
        var diaMes = this.daysInMonth(data.getMonth() + 1, data.getFullYear());
        var a5 = (String((Number(data.getDate()) / diaMes) * 100) + '%');
        document.getElementById("teste4").style.width = a1;
        document.getElementById("teste3").style.width = a2;
        document.getElementById("teste2").style.width = a3;
        document.getElementById("teste1").style.width = a4;
        document.getElementById("testeDia").style.width = a5;
        document.getElementById("testeMes").style.width = a4;
    };
    HomePage.prototype.daysInMonth = function (month, year) {
        return new Date(year, month, 0).getDate();
    };
    HomePage.prototype.AtalhoDivide = function () {
        var local;
        var valor;
        var categoria;
        var temBarra = false;
        for (var i = 0; i < String(this.atalhoCopia).length; i++) {
            if (String(this.atalhoCopia).charAt(i) == "/") {
                temBarra = true;
            }
            ;
        }
        if (temBarra == true) {
            var array = this.atalhoCopia.split("/");
            array[0] = array[0].replace(",", ".");
            this.compras.title = array[1];
            this.compras.payload = array[0];
            this.compras.categoria = array[2];
        }
    };
    HomePage.prototype.moveFocus = function (nextElement) {
        nextElement.setFocus();
    };
    HomePage.prototype.Fav = function () {
        if (this.compras.pagamento == this.favorito) {
            this.compras.pagamento = "Dinheiro";
            return;
        }
        this.compras.pagamento = this.favorito;
    };
    HomePage.prototype.atualiza = function () {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    HomePage.prototype.Fav2 = function () {
        if (this.compras.categoria == "Mercado") {
            this.compras.categoria = "Comida";
            return;
        }
        this.compras.categoria = "Mercado";
    };
    HomePage.prototype.save = function (compras) {
        var _this = this;
        this.MudandoData(this.DataO);
        if (this.compras.categoria == "Divida") {
            this.compras.categoria = "Divida - " + this.divida;
        }
        if (this.categoriaDiv.title != '' && Number(this.compras.payload) > 0) {
            this.Dividindo();
            this.compras.title += " -Divido Paguei";
            this.PopUp();
            this.dbService.save('compras', compras);
            this.mes = compras.mes;
            this.ano = compras.ano;
            this.compras.categoria = this.categoriaDiv.title;
            this.categoriaDiv.title = '';
        }
        if (this.categoriaDiv.title != '' && this.compras.pagamento == "Divida") {
            this.Dividindo();
            this.compras.title += " -Divido Pagou";
            this.compras.pagamento = "Ignorar";
            this.compras.payload = String(Number(this.compras.payload));
            this.PopUp();
            this.dbService.save('compras', compras);
            this.mes = compras.mes;
            this.ano = compras.ano;
            this.compras.pagamento = "Divida";
            this.compras.categoria = this.categoriaDiv.title;
            this.compras.payload = String(Number(this.compras.payload) * (-1));
            this.categoriaDiv.title = '';
        }
        this.PopUp();
        this.dbService.save('compras', compras);
        this.mes = compras.mes;
        this.ano = compras.ano;
        this.previsto = this.dbService.getAll('previsao');
        this.Compras = (this.dbService.getAllQuantidade('compras', 100)).map(function (a) { return a.reverse(); });
        this.ArrayTotal = this.CriaArrayGrafico(compras.categoria);
        this.showGraf = true;
        setTimeout(function () {
            _this.teste(_this.ArrayTotal);
        }, 1000);
    };
    HomePage.prototype.ontem = function (compras) {
        var date = new Date;
        date.setDate(date.getDate() - 1);
        this.DataO = date.toISOString();
        this.PopUp();
        this.compras.mes = compras.mes;
        this.compras.ano = compras.ano;
        this.save(this.compras);
    };
    HomePage.prototype.save2 = function (teste) {
        this.PopUp();
        this.dbService.save('compras', 'Janeiro');
    };
    HomePage.prototype.NavConfirg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__configura_es_configura_es__["a" /* ConfiguraçõesPage */]);
    };
    HomePage.prototype.Criacao = function (A) {
        var data = new Date();
        var dia = data.getDate() - A;
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        var hora = data.getHours();
        var min = data.getMinutes();
        return ([[dia, mes, ano].join('/'), [hora, min].join(':')].join(' - '));
    };
    HomePage.prototype.AchaMes = function () {
        var data = new Date();
        var mes = data.getMonth() + 1;
        return (mes);
    };
    HomePage.prototype.achaAno = function () {
        var data = new Date();
        var ano = data.getFullYear();
        return ((ano));
    };
    HomePage.prototype.swipe = function (event) {
        if (event.direction == 2) {
            this.navCtrl.parent.select(1);
        }
        if (event.direction == 16) {
            this.show = false;
            return this.show;
        }
        if (event.direction == 16) {
            this.show = true;
            return this.show;
        }
    };
    HomePage.prototype.Louco = function () {
        this.show = false;
    };
    HomePage.prototype.saveAtalho = function (compras, atalho) {
        var _this = this;
        if (atalho.gasto != 0) {
            this.MudandoData(this.DataO);
            compras.title = atalho.title;
            compras.categoria = atalho.categoria;
            compras.payload = atalho.gasto;
            compras.pagamento = atalho.pagamento;
            this.PopUp();
            this.dbService.save('compras', compras);
        }
        if (atalho.gasto == 0) {
            this.MudandoData(this.DataO);
            compras.title = atalho.title;
            compras.categoria = atalho.categoria;
            compras.pagamento = atalho.pagamento;
            {
                var prompt_1 = this.alertCtrl.create({
                    title: 'Valor',
                    inputs: [
                        {
                            name: 'valor',
                            placeholder: 'Valor'
                        },
                    ],
                    buttons: [
                        {
                            text: 'Cancelar',
                            handler: function (data) {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'Salvar',
                            handler: function (data) {
                                compras.payload = data.valor;
                                _this.PopUp();
                                _this.dbService.save('compras', compras);
                                console.log('Saved clicked');
                            }
                        }
                    ]
                });
                prompt_1.present();
            }
        }
        this.show = false;
        this.previsto = this.dbService.getAll('previsao');
        this.Compras = (this.dbService.getAllQuantidade('compras', 100)).map(function (a) { return a.reverse(); });
        this.ArrayTotal = this.CriaArrayGrafico(compras.categoria);
        this.showGraf = true;
        setTimeout(function () {
            _this.teste(_this.ArrayTotal);
        }, 1000);
    };
    HomePage.prototype.atalhoPush = function (atalho) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_atalho_edit_atalho__["a" /* EditAtalhoPage */], {
            'atalho': atalho
        });
    };
    HomePage.prototype.Favorito = function () {
        this.compras.pagamento = "N26";
    };
    HomePage.prototype.arrayCompras = function (compras) {
        var array = [];
        var linha = [];
        compras.forEach(function (itens) { return itens.forEach(function (item) { linha = [], linha.push(item.payload, [item.ano, item.mes].join(' - '), item.categoria, item.pagamento, item.total), array.push(linha); }); });
        return (array);
    };
    HomePage.prototype.CriaArrayGrafico = function (Categoria) {
        var _this = this;
        var ArrayT = [0, 0, 0, 0];
        this.Compras.forEach(function (itens) { return itens.forEach(function (item) { if (item.categoria == Categoria && item.categoria != "Ignorar" && item.ano == _this.ano && Number(item.mes) == Number(_this.mes)) {
            ArrayT[0] += Number(item.payload);
        } }); });
        this.previsto.forEach(function (itens) { return itens.forEach(function (item) { if (item.ano == _this.ano && item.mes == _this.mes) {
            ArrayT[1] += Number(item[Categoria]);
        } }); });
        this.Compras.forEach(function (itens) { return itens.forEach(function (item) { if (item.ano == _this.ano && item.mes == _this.mes && item.categoria != "Ignorar") {
            ArrayT[2] += Number(item.payload);
        } }); });
        this.previsto.forEach(function (itens) { return itens.forEach(function (item) { if (item.ano == _this.ano && item.mes == _this.mes) {
            ArrayT[3] += Number(_this.retornaArray(item));
        } }); });
        return (ArrayT);
    };
    HomePage.prototype.Hoje = function () {
        var data1 = new Date;
        var data = [data1.getFullYear(), Number(data1.getMonth() + 1), data1.getDay()].join('-');
        return data;
    };
    HomePage.prototype.Mostra = function () {
        this.MudandoData(this.DataO);
    };
    HomePage.prototype.MudandoData = function (valor) {
        var fields = valor.split('-');
        var dia = fields[2].split('T');
        this.compras.ano = fields[0];
        this.compras.mes = String(Number(fields[1]));
        this.compras.total = String(Number(Number(this.compras.ano) * 10000 + Number(this.compras.mes) * 100 + Number(dia[0])));
        var data = new Date();
        var hora = data.getHours();
        var min = data.getMinutes();
        this.compras.data = ([[Number(dia[0]), Number(this.compras.mes), Number(this.compras.ano)].join('/'), [hora, min].join(':')].join(' - '));
    };
    HomePage.prototype.Dividindo = function () {
        this.compras.payload = String(Number(this.compras.payload) / 2);
    };
    HomePage.prototype.DividaEu = function (item) {
        item.categoria = "Divida";
        this.divida = "Daniela";
        this.categoriaDiv.title = "Date";
    };
    HomePage.prototype.DividaDani = function (item) {
        item.pagamento = "Divida";
        item.categoria = "Divida";
        this.divida = "Daniela";
        this.categoriaDiv.title = "Date";
        item.payload = -item.payload;
    };
    HomePage.prototype.PopUp = function () {
        var texto = "Adicionado " + this.compras.title;
        var toast = this.toastCtrl.create({
            message: texto,
            duration: 2000
        });
        toast.present();
    };
    HomePage.prototype.Parcelar = function (compras) {
        var _this = this;
        {
            var prompt_2 = this.alertCtrl.create({
                title: 'Parcelamento em quantas vezes?',
                inputs: [
                    {
                        name: 'Num',
                        placeholder: 'Número'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: function (data) {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Salvar',
                        handler: function (data) {
                            ;
                            compras.payload = compras.payload / Number(data.Num);
                            var cont = 1;
                            var inicio = compras.title;
                            while (cont <= Number(data.Num)) {
                                compras.title = inicio + " " + cont + "/" + data.Num;
                                var dataA = new Date();
                                dataA.setMonth(dataA.getMonth() + cont - 1);
                                _this.DataO = dataA.toISOString();
                                cont += 1;
                                _this.save(compras);
                                _this.mes = compras.mes;
                                _this.ano = compras.ano;
                            }
                            console.log('Saved clicked');
                        }
                    }
                ]
            });
            prompt_2.present();
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Inserir</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="NavConfirg()">\n\n        <ion-icon name="settings"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="atualiza()">\n\n        <ion-icon name="sync"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n  <ion-refresher (ionRefresh)="doRefresh($event)"></ion-refresher>\n\n  <div class="main-content" (swipe)="swipe($event)">\n\n\n\n\n\n  <ion-grid>\n\n    <ion-row> \n\n        <ion-item>\n\n            <ion-label fixed>Local: </ion-label>\n\n            <ion-input text-right clearInput="true" autocomplete="on"  value="" [(ngModel)]="compras.title"></ion-input>\n\n          </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-item>\n\n          <ion-label fixed>Valor:</ion-label>\n\n          <ion-input  text-right type="number" clearInput="true" value="" #b  [(ngModel)]="compras.payload"></ion-input>\n\n        </ion-item>\n\n    </ion-row>\n\n    \n\n    <ion-row>\n\n      <ion-item (press)="Favorito()"> \n\n        <ion-label #c>Pagamento</ion-label >\n\n        <ion-select  [(ngModel)]="compras.pagamento" interface="popover">\n\n          <ion-option *ngFor="let pagamento of (pagamentos | async)">{{pagamento.title}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-item> \n\n          <ion-label>Categoria</ion-label >\n\n          <ion-select [(ngModel)]="compras.categoria" interface="popover" >\n\n            <ion-option *ngFor="let categoria of (categorias | async)" value="{{categoria.title}}">{{categoria.title}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-row *ngIf="compras.categoria.includes(\'Divida\')">\n\n      <ion-item> \n\n          <ion-label>Divida</ion-label >\n\n          <ion-select [(ngModel)]="divida" interface="popover" >\n\n            <ion-option *ngFor="let pessoa of (Pessoas | async)" value="{{pessoa.title}}">{{pessoa.title}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-row *ngIf="compras.categoria.includes(\'Divida\')">\n\n      <ion-item> \n\n          <ion-label>Categoria para divisão</ion-label >\n\n          <ion-select [(ngModel)]="categoriaDiv.title" interface="popover" >\n\n            <ion-option *ngFor="let cat of (categorias | async)">{{cat.title}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n    </ion-row>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label (click)="Mostra()">Data</ion-label>\n\n      <ion-datetime  (click)="Mostra()" displayFormat="DDD - DD/MM/YYYY" [(ngModel)]="DataO"\n\n      dayShortNames="Domingo, Segunda, Terça, Quarta, Quinta, Sexta, Sábado"></ion-datetime>\n\n    </ion-item>\n\n\n\n\n\n    <ion-row>\n\n      <ion-item (press)="AtalhoDivide()">\n\n          <ion-label fixed>Atalho:</ion-label>\n\n          <ion-input  text-right type="text" clearInput="true" value="" #b \n\n          (input)=\'AtalhoDivide($event.target.value)\'  [(ngModel)]="atalhoCopia"></ion-input>\n\n        </ion-item>\n\n    </ion-row>\n\n\n\n\n\n    <ion-row>\n\n      <ion-item no-lines>\n\n      </ion-item>\n\n    </ion-row>\n\n\n\n    <p *ngIf="compras.categoria.includes(\'Divida\')">Quando voce estiver dividindo: Colocar valor cheio e categoria das suas compras. havera divisão sozinha <br>\n\n       Quando a pessoa estiver pagando dividido. VALOR NEGATIVO. pagamento deve ser \'dividido\'\n\n      por enqunato ainda esta com falhas, usar só esses dois jeitos, ajustar o resto na mão</p>\n\n\n\n    <ion-row justify-content-center>\n\n        <button class="btn3" ion-button round outline (click)="ontem(compras)">Ontem</button>\n\n        <button class="btn4" ion-button round (click)="save(compras)">Adicionar</button>\n\n        <button class="btn3" ion-button small round outline (click)="DividaEu(compras)" (press)="DividaDani(compras)" >Dividir</button>\n\n    </ion-row>\n\n    <ion-row justify-content-center>\n\n      <button class="btn3" ion-button round outline (click)="Parcelar(compras)">Parcelar</button>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n<!-------------------------------------- ATALHOS ---------------------------------------------------------------------------->  \n\n\n\n  <div *ngIf = "show == true" class="fadeIn"> \n\n    <ion-grid>\n\n      <ion-row justify-content-center >\n\n        <ion-col col-2 *ngFor="let atalho of (atalhos |  async)">\n\n          <button  class="btn2" ion-button outline (click)="saveAtalho(compras,atalho)" (press)="atalhoPush(atalho)">{{atalho.title}}</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n <!-------------------------------------- GRAFICO ---------------------------------------------------------------------------->  \n\n  <div *ngIf="showGraf == true" class="fadeIn">\n\n    <p class="paragrafo">Gasto Total/Previsto -- {{compras.categoria}} -- {{Arredonda(ArrayTotal[0])}}/{{Arredonda(ArrayTotal[1])}}</p>\n\n    <ion-row>\n\n      <ion-col col-1 justify-content-center no-padding>\n\n        <p class="baseG">{{Arredonda(ArrayTotal[2])}}</p>\n\n      </ion-col>\n\n      <ion-col col-10 justify-content-center>\n\n        <div class="progress"  (click)=teste(totalM)>\n\n          <div class="determinate1" style="width: 0%" id="teste1" ></div>\n\n          <div class="determinate2" style="width: 0%" id="teste2" ></div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-1 no-padding>\n\n        <p class="baseG">{{Arredonda(ArrayTotal[3])}}</p>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col col-1 justify-content-center no-padding>\n\n        <p justify-content-center class="baseG">{{Arredonda(ArrayTotal[0])}}</p>\n\n      </ion-col>\n\n      <ion-col col-10 justify-content-center>\n\n        <div class="progress"  (click)=teste(totalM)>\n\n          <div class="determinate1" style="width: 0%" id="teste3" ></div>\n\n          <div class="determinate2" style="width: 0%" id="teste4" ></div>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col col-1 justify-content-center no-padding>\n\n        <p class="baseG">{{Arredonda(ArrayTotal[1])}}</p>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n      <ion-row>\n\n          <ion-col col-1 justify-content-center no-padding>\n\n            <p class="baseG">Mes</p>\n\n          </ion-col>\n\n          <ion-col col-10 justify-content-center>\n\n            <div class="progress3"  (click)=teste(totalM)>\n\n              <div class="determinate1" style="width: 0%" id="testeMes" ></div>\n\n              <div class="determinate2" style="width: 0%" id="testeDia" ></div>\n\n            </div>\n\n          </ion-col>\n\n          <ion-col col-1 no-padding>\n\n            <p class="baseG">{{diaMes}}</p>\n\n          </ion-col>\n\n      </ion-row>\n\n\n\n\n\n  </div>\n\n\n\n  <ion-item no-lines class="Transparente"> </ion-item>\n\n  <ion-item no-lines class="Transparente"> </ion-item>\n\n  <ion-item no-lines class="Transparente"> </ion-item>\n\n  <ion-item no-lines class="Transparente"> </ion-item>\n\n\n\n\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n        Categorias\n\n      </ion-card-header>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <p col-4 col-xl-3>Comida: {{SomaCat("Comida")}}/{{Prev("Comida")}} </p>\n\n          <p col-2 col-xl-1>{{-SomaCat("Comida")+Prev("Comida")}}</p>\n\n\n\n          <p col-4 col-xl-3>Date: {{SomaCat("Date")}}/{{Prev("Date")}}  </p>\n\n          <p col-2 col-xl-1>{{-SomaCat("Date")+Prev("Date")}}</p>\n\n\n\n          <p col-4 col-xl-3>Amigos: {{SomaCat("Amigos")}}/{{Prev("Amigos")}} </p>\n\n          <p col-2 col-xl-1>{{-SomaCat("Amigos")+Prev("Amigos")}}</p>\n\n\n\n          <p col-4 col-xl-3>Combustível: {{SomaCat("Combustivel")}}/{{Prev("Combustivel")}}</p>\n\n          <p col-2 col-xl-1>{{-SomaCat("Combustivel")+Prev("Combustivel")}}</p>\n\n\n\n          <p col-4 col-xl-3>Transporte: {{SomaCat("Transporte")}}/{{Prev("Transporte")}}</p>\n\n          <p col-2 col-xl-1>{{-SomaCat("Transporte")+Prev("Transporte")}}</p>\n\n\n\n          <p col-4 col-xl-3>Extras: {{SomaCat("Extras")}}/{{Prev("Extras")}}</p>\n\n          <p col-2 col-xl-1>{{-SomaCat("Extras")+Prev("Extras")}}</p>\n\n\n\n          <p col-4 col-xl-3>Total: {{SomaCat("Total")}} </p>\n\n        </ion-row>\n\n      \n\n      </ion-grid>\n\n      \n\n\n\n\n\n</ion-card>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n \n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPrevisãoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(21);
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
 * Generated class for the AddPrevisãoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddPrevisãoPage = /** @class */ (function () {
    function AddPrevisãoPage(navCtrl, navParams, dbService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.previsao = {
            'data': '',
            'ano': '',
            'mes': '',
        };
        this.categorias = this.dbService.getArray('categoria');
        this.previsao = this.criaObjeto("testes");
        this.previsao['testes'] = "12";
    }
    AddPrevisãoPage.prototype.criaObjeto = function (prop) {
        Object.defineProperty(this.previsao, prop, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
        return this.previsao;
    };
    AddPrevisãoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-previsão',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\add-previsão\add-previsão.html"*/'<!--\n  Generated template for the AddPrevisãoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Nova Previsão</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\add-previsão\add-previsão.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], AddPrevisãoPage);
    return AddPrevisãoPage;
}());

//# sourceMappingURL=add-previsão.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(561);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(21);
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
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPage = /** @class */ (function () {
    function EditPage(navCtrl, navParams, firebaseService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseService = firebaseService;
        this.compras = {
            'title': '',
            'payload': '',
            'categoria': '',
            'pagamento': '',
            'data': '',
        };
        this.MudaData = false;
        this.compras = this.navParams.get('compras');
        this.categorias = this.firebaseService.getArray('categoria');
        this.pagamentos = this.firebaseService.getArray('pagamento');
        this.DataO = new Date().toISOString();
    }
    EditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditPage');
    };
    EditPage.prototype.update = function (compras) {
        var _this = this;
        this.MudandoData(this.DataO);
        this.firebaseService.update('compras', compras).then(function (d) {
            _this.navCtrl.pop();
        });
    };
    EditPage.prototype.remove = function (compras) {
        var _this = this;
        this.firebaseService.revome('compras', compras).then(function (d) {
            _this.navCtrl.pop();
        });
    };
    EditPage.prototype.Mostra = function () {
        console.log(this.DataO);
        this.MudandoData(this.DataO);
        this.MudaData = true;
    };
    EditPage.prototype.MudandoData = function (valor) {
        if (this.MudaData == true) {
            var fields = valor.split('-');
            var dia = fields[2].split('T');
            console.log(fields, dia);
            this.compras['ano'] = fields[0];
            this.compras['mes'] = String(Number(fields[1]));
            this.compras['total'] = String(Number(Number(this.compras['ano']) * 10000 + Number(this.compras['mes']) * 100 + Number(dia[0])));
            console.log(this.compras['total']);
            var data = new Date();
            var hora = data.getHours();
            var min = data.getMinutes();
            this.compras.data = ([[Number(dia[0]), Number(this.compras['mes']), Number(this.compras['ano'])].join('/'), [hora, min].join(':')].join(' - '));
        }
    };
    EditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\edit\edit.html"*/'<!--\n\n  Generated template for the EditPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Editar</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n\n\n  <ion-grid>\n\n\n\n      <ion-row>\n\n          <ion-item>\n\n              <ion-label fixed>Data: </ion-label>\n\n              <ion-input text-right clearInput="true" autocomplete="on" value="" [(ngModel)]="compras.data"></ion-input>\n\n            </ion-item>\n\n      </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-item>\n\n            <ion-label fixed>Local: </ion-label>\n\n            <ion-input text-right clearInput="true" autocomplete="on" value="" [(ngModel)]="compras.title"></ion-input>\n\n          </ion-item>\n\n    </ion-row>\n\n  \n\n    <ion-row>\n\n      <ion-item>\n\n          <ion-label fixed>Valor:</ion-label>\n\n          <ion-input text-right type="number" clearInput="true" value="" [(ngModel)]="compras.payload"></ion-input>\n\n        </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-item>\n\n          <ion-label fixed>Ano: </ion-label>\n\n          <ion-input text-right clearInput="true" autocomplete="on" value="" [(ngModel)]="compras.ano"></ion-input>\n\n        </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-item>\n\n          <ion-label fixed>Mes </ion-label>\n\n          <ion-input text-right clearInput="true" autocomplete="on" value="" [(ngModel)]="compras.mes"></ion-input>\n\n        </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-item>\n\n          <ion-label fixed>Total: </ion-label>\n\n          <ion-input text-right clearInput="true" autocomplete="on" value="" [(ngModel)]="compras.total"></ion-input>\n\n        </ion-item>\n\n    </ion-row>\n\n    \n\n    <ion-row>\n\n      <ion-item> \n\n        <ion-label>Pagamento</ion-label >\n\n        <ion-select [(ngModel)]="compras.pagamento" interface="popover" >\n\n          <ion-option *ngFor="let pagamento of pagamentos">{{pagamento.title}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-item> \n\n          <ion-label>Categoria</ion-label >\n\n          <ion-select [(ngModel)]="compras.categoria" interface="popover" >\n\n            <ion-option *ngFor="let categoria of categorias" value="{{categoria.title}}">{{categoria.title}}</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-item>\n\n      <ion-label (click)="Mostra()">Date</ion-label>\n\n      <ion-datetime  (click)="Mostra()" displayFormat="DD/MM/YYYY" [(ngModel)]="DataO"></ion-datetime>\n\n    </ion-item>\n\n\n\n\n\n    \n\n\n\n    <ion-row>\n\n      <ion-item no-lines>\n\n\n\n      </ion-item>\n\n    </ion-row>\n\n\n\n    <ion-row justify-content-center>\n\n        <ion-row justify-content-center >\n\n            <button ion-button round outline class="btn3" color="danger" (click)="remove(compras)">Deletar</button>\n\n        </ion-row>\n\n        <ion-row justify-content-center>\n\n            <button ion-button round outline class="btn3" (click)="update(compras)">Atualizar</button>\n\n        </ion-row>\n\n    </ion-row>\n\n  </ion-grid>\n\n      \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\edit\edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */]])
    ], EditPage);
    return EditPage;
}());

//# sourceMappingURL=edit.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_firebase_service_firebase_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_toast_service_toast_service__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_edit__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_configura_es_configura_es__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_edit_conf_edit_conf__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_edit_pagamento_edit_pagamento__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_analise_analise__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_charts__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_analise_categoria_analise_categoria__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_analise_pagamento_analise_pagamento__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_previs_o_previs_o__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_add_previs_o_add_previs_o__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_graficos_graficos__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_edit_atalho_edit_atalho__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_todas_as_compras_todas_as_compras__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_analise_divida_analise_divida__ = __webpack_require__(391);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_analise_analise__["a" /* AnalisePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_edit__["a" /* EditPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_configura_es_configura_es__["a" /* ConfiguraçõesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_edit_conf_edit_conf__["a" /* EditConfPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_edit_pagamento_edit_pagamento__["a" /* EditPagamentoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_analise_categoria_analise_categoria__["a" /* AnaliseCategoriaPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_analise_pagamento_analise_pagamento__["a" /* AnalisePagamentoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_previs_o_previs_o__["a" /* PrevisãoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_add_previs_o_add_previs_o__["a" /* AddPrevisãoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_graficos_graficos__["a" /* GraficosPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_edit_atalho_edit_atalho__["a" /* EditAtalhoPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_todas_as_compras_todas_as_compras__["a" /* TodasAsComprasPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_analise_divida_analise_divida__["a" /* AnaliseDividaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-previsão/add-previsão.module#AddPrevisãoPageModule', name: 'AddPrevisãoPage', segment: 'add-previsão', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/analise-categoria/analise-categoria.module#AnaliseCategoriaPageModule', name: 'AnaliseCategoriaPage', segment: 'analise-categoria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/analise/analise.module#AnalisePageModule', name: 'AnalisePage', segment: 'analise', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/analise-pagamento/analise-pagamento.module#AnalisePagamentoPageModule', name: 'AnalisePagamentoPage', segment: 'analise-pagamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-atalho/edit-atalho.module#EditAtalhoPageModule', name: 'EditAtalhoPage', segment: 'edit-atalho', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-conf/edit-conf.module#EditConfPageModule', name: 'EditConfPage', segment: 'edit-conf', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configurações/configurações.module#ConfiguraçõesPageModule', name: 'ConfiguraçõesPage', segment: 'configurações', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit/edit.module#EditPageModule', name: 'EditPage', segment: 'edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-pagamento/edit-pagamento.module#EditPagamentoPageModule', name: 'EditPagamentoPage', segment: 'edit-pagamento', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/previsão/previsão.module#PrevisãoPageModule', name: 'PrevisãoPage', segment: 'previsão', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/graficos/graficos.module#GraficosPageModule', name: 'GraficosPage', segment: 'graficos', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2__["a" /* AngularFireModule */].initializeApp({
                    apiKey: "AIzaSyCS77TuCe2jrXqmSDh9Ivs7gWedPM7PJ3E",
                    authDomain: "ionic3-gastos-45fd4.firebaseapp.com",
                    databaseURL: "https://ionic3-gastos-45fd4.firebaseio.com",
                    projectId: "ionic3-gastos-45fd4",
                    storageBucket: "ionic3-gastos-45fd4.appspot.com",
                    messagingSenderId: "404912444334"
                }),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_analise_analise__["a" /* AnalisePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_edit__["a" /* EditPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_configura_es_configura_es__["a" /* ConfiguraçõesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_edit_conf_edit_conf__["a" /* EditConfPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_edit_pagamento_edit_pagamento__["a" /* EditPagamentoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_analise_categoria_analise_categoria__["a" /* AnaliseCategoriaPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_analise_pagamento_analise_pagamento__["a" /* AnalisePagamentoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_previs_o_previs_o__["a" /* PrevisãoPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_add_previs_o_add_previs_o__["a" /* AddPrevisãoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_graficos_graficos__["a" /* GraficosPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_edit_atalho_edit_atalho__["a" /* EditAtalhoPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_todas_as_compras_todas_as_compras__["a" /* TodasAsComprasPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_analise_divida_analise_divida__["a" /* AnaliseDividaPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_toast_service_toast_service__["a" /* ToastServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguraçõesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_conf_edit_conf__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_pagamento_edit_pagamento__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_atalho_edit_atalho__ = __webpack_require__(100);
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
 * Generated class for the ConfiguraçõesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfiguraçõesPage = /** @class */ (function () {
    function ConfiguraçõesPage(navCtrl, navParams, dbService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbService = dbService;
        this.alertCtrl = alertCtrl;
        this.categoria = {
            'title': '',
            'numero': '',
            'icon': '',
        };
        this.pagamento = {
            'title': '',
            'numero': '',
            'icon': '',
        };
        this.visual = {
            'ano': '',
            'mes': '',
            'final': '',
        };
        this.atalho = {
            'title': '',
            'gasto': '',
            'categoria': '',
            'pagamento': '',
        };
        this.categorias = this.dbService.getAllO('categoria', "numero").map(function (a) { return a.reverse(); });
        this.pagamentos = this.dbService.getAllO('pagamento', "numero").map(function (a) { return a.reverse(); });
        this.visuals = this.dbService.getAll('visual');
        this.atalhos = this.dbService.getAll('atalho');
    }
    ConfiguraçõesPage.prototype.NovaCategoria = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Nova Categora',
            message: "Entre com o nome, número e icone da categoria",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Nome',
                },
                {
                    name: 'numero',
                    placeholder: "Número"
                },
                {
                    name: 'icon',
                    placeholder: "Ícone"
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Categoria',
                    handler: function (data) {
                        _this.categoria.title = data.title, _this.categoria.numero = data.numero, _this.categoria.icon = data.icon;
                        _this.dbService.save('categoria', _this.categoria);
                    }
                },
                {
                    text: 'Pagamento',
                    handler: function (data) {
                        _this.pagamento.title = data.title, _this.pagamento.numero = data.numero, _this.pagamento.icon = data.icon;
                        _this.dbService.save('pagamento', _this.pagamento);
                    }
                }
            ]
        });
        prompt.present();
    };
    ConfiguraçõesPage.prototype.NovaVisual = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Nova Visualização',
            message: "Entre com ano e mes",
            inputs: [
                {
                    name: 'ano',
                    placeholder: 'Ano',
                    type: 'number',
                },
                {
                    name: 'mes',
                    placeholder: "Mes",
                    type: 'number',
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Adicionar',
                    handler: function (data) {
                        _this.visual.ano = data.ano, _this.visual.mes = data.mes, _this.visual.final = ((data.ano) + (data.mes - 1) / 12);
                        _this.dbService.save('visual', _this.visual);
                    }
                }
            ]
        });
        prompt.present();
    };
    ConfiguraçõesPage.prototype.NovoAtalho = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Novo atalho',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Nome',
                    type: 'text',
                },
                {
                    name: 'Valor',
                    placeholder: "Valor",
                    type: 'number',
                },
                {
                    name: 'Categoria',
                    placeholder: "Categoria",
                    type: 'text',
                },
                {
                    name: 'Pagamentos',
                    placeholder: "Pagamentos",
                    type: 'text',
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Adicionar',
                    handler: function (data) {
                        _this.atalho.title = data.title, _this.atalho.gasto = data.Valor, _this.atalho.categoria = data.Categoria, _this.atalho.pagamento = data.Pagamentos;
                        _this.dbService.save('atalho', _this.atalho);
                    }
                }
            ]
        });
        prompt.present();
    };
    ConfiguraçõesPage.prototype.EditarCategoria = function (categoria) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_conf_edit_conf__["a" /* EditConfPage */], { 'categoria': categoria });
        console.log(categoria);
    };
    ConfiguraçõesPage.prototype.EditarPagamento = function (pagamento) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_pagamento_edit_pagamento__["a" /* EditPagamentoPage */], { 'pagamento': pagamento });
    };
    ConfiguraçõesPage.prototype.remove = function (a) {
        this.dbService.revome('visual', a);
    };
    ConfiguraçõesPage.prototype.EditarAtalho = function (item) {
        console.log(item, "uhu");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__edit_atalho_edit_atalho__["a" /* EditAtalhoPage */], {
            'atalho': item
        });
    };
    ConfiguraçõesPage.prototype.AtualizaPag = function () {
        var _this = this;
        var contagem = 0;
        this.compras = (this.dbService.getAllQuantidade('compras', 30)).map(function (a) { return a.reverse(); });
        this.ComprasArray = this.ArrayTotal();
        console.log(this.ComprasArray, "aqui");
        this.pagamentos.forEach(function (elements) { elements.forEach(function (element) { contagem = 0, contagem = Number(_this.Conta(element.title)), element.numero = String(contagem), _this.dbService.update('pagamento', element); }); });
    };
    ConfiguraçõesPage.prototype.Conta = function (nome) {
        console.log(nome, "dfsd");
        var a = 0;
        this.compras.forEach(function (todo) { console.log(todo, "oi", todo[1]); if (todo[1] == nome) {
            a += 1;
        } });
        console.log(a);
        return a;
    };
    ConfiguraçõesPage.prototype.ArrayTotal = function () {
        var linha = [];
        var coluna = [];
        this.compras.forEach(function (itens) { itens.forEach(function (item) { linha = []; linha.push(item.title); linha.push(item.pagamento); linha.push(item.categoria); coluna.push(linha); }); });
        return coluna;
    };
    ConfiguraçõesPage.prototype.arrayCompras = function (compras) {
        var array = [];
        var linha = [];
        compras.forEach(function (itens) { return itens.forEach(function (item) { linha = [], linha.push(item.payload, [item.ano, item.mes].join(' - '), item.categoria, item.pagamento, item.total), array.push(linha); }); });
        return (array);
    };
    ConfiguraçõesPage.prototype.Inicio = function () {
        var _this = this;
        this.compras = (this.dbService.getAllQuantidade('compras', 100));
        this.ComprasArray = this.arrayCompras(this.compras);
        this.categorias.forEach(function (itens) { return itens.forEach(function (item) { _this.somaCat(item); }); });
        this.pagamentos.forEach(function (itens) { return itens.forEach(function (item) { _this.somaPag(item); }); });
    };
    ConfiguraçõesPage.prototype.somaCat = function (categoria) {
        var valorCat = 0;
        this.ComprasArray.forEach(function (item) { if (String(item[2]) == String(categoria.title)) {
            console.log('foi'), valorCat = valorCat + 1;
        } });
        categoria.numero = Math.round(valorCat);
        this.dbService.update("categoria", categoria);
        return (Math.round(valorCat));
    };
    ConfiguraçõesPage.prototype.somaPag = function (pagamento) {
        var valorCat = 0;
        this.ComprasArray.forEach(function (item) { if (String(item[3]) == String(pagamento.title)) {
            console.log('foi'), valorCat = valorCat + 1;
        } });
        pagamento.numero = Math.round(valorCat);
        this.dbService.update("pagamento", pagamento);
        return (Math.round(valorCat));
    };
    ConfiguraçõesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-configurações',template:/*ion-inline-start:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\configurações\configurações.html"*/'<!--\n  Generated template for the ConfiguraçõesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Configurações</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="Inicio()">\n        <ion-icon name="sync"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      Categorias\n    </ion-list-header>\n    <ion-item *ngFor="let categoria of (categorias|async)" (click)="EditarCategoria(categoria)">\n      <ion-icon (click)="somaCat(categoria)" item-start name={{categoria.icon}}></ion-icon>{{categoria.numero}} - {{categoria.title}}\n    </ion-item>\n    <ion-list-header>\n      Pagamento\n    </ion-list-header>\n    <ion-item *ngFor="let pagamento of (pagamentos|async)" (click)="EditarPagamento(pagamento)">\n      <ion-icon item-start name={{pagamento.icon}}></ion-icon>{{pagamento.numero}} - {{pagamento.title}}\n    </ion-item>\n\n  <ion-list-header>\n      Atalhos\n    </ion-list-header>\n    <ion-item *ngFor="let atalho of (atalhos|async)" (click)="EditarAtalho(atalho)">${{atalho.gasto}} - {{atalho.title}}</ion-item>\n  \n\n  <ion-list-header>\n      Visualização\n    </ion-list-header>\n    <ion-item *ngFor="let a of (visuals|async)" (click)="remove(a)">{{a.ano}} - {{a.mes}}</ion-item>\n  </ion-list>\n\n\n    <ion-fab right bottom>\n      <button ion-fab mini ><ion-icon name="arrow-dropleft"></ion-icon></button>\n      <ion-fab-list side="left">\n        <button ion-fab><ion-icon name="folder" (click)="NovaCategoria()"></ion-icon></button>\n        <button ion-fab><ion-icon name="folder-open" (click)="NovaVisual()"></ion-icon></button>\n        <button ion-fab><ion-icon name="list-box" (click)="NovoAtalho()"></ion-icon></button>\n      </ion-fab-list>\n    </ion-fab>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\pages\configurações\configurações.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_firebase_service_firebase_service__["a" /* FirebaseServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ConfiguraçõesPage);
    return ConfiguraçõesPage;
}());

//# sourceMappingURL=configurações.js.map

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 268,
	"./af.js": 268,
	"./ar": 269,
	"./ar-dz": 270,
	"./ar-dz.js": 270,
	"./ar-kw": 271,
	"./ar-kw.js": 271,
	"./ar-ly": 272,
	"./ar-ly.js": 272,
	"./ar-ma": 273,
	"./ar-ma.js": 273,
	"./ar-sa": 274,
	"./ar-sa.js": 274,
	"./ar-tn": 275,
	"./ar-tn.js": 275,
	"./ar.js": 269,
	"./az": 276,
	"./az.js": 276,
	"./be": 277,
	"./be.js": 277,
	"./bg": 278,
	"./bg.js": 278,
	"./bm": 279,
	"./bm.js": 279,
	"./bn": 280,
	"./bn.js": 280,
	"./bo": 281,
	"./bo.js": 281,
	"./br": 282,
	"./br.js": 282,
	"./bs": 283,
	"./bs.js": 283,
	"./ca": 284,
	"./ca.js": 284,
	"./cs": 285,
	"./cs.js": 285,
	"./cv": 286,
	"./cv.js": 286,
	"./cy": 287,
	"./cy.js": 287,
	"./da": 288,
	"./da.js": 288,
	"./de": 289,
	"./de-at": 290,
	"./de-at.js": 290,
	"./de-ch": 291,
	"./de-ch.js": 291,
	"./de.js": 289,
	"./dv": 292,
	"./dv.js": 292,
	"./el": 293,
	"./el.js": 293,
	"./en-au": 294,
	"./en-au.js": 294,
	"./en-ca": 295,
	"./en-ca.js": 295,
	"./en-gb": 296,
	"./en-gb.js": 296,
	"./en-ie": 297,
	"./en-ie.js": 297,
	"./en-il": 298,
	"./en-il.js": 298,
	"./en-nz": 299,
	"./en-nz.js": 299,
	"./eo": 300,
	"./eo.js": 300,
	"./es": 301,
	"./es-do": 302,
	"./es-do.js": 302,
	"./es-us": 303,
	"./es-us.js": 303,
	"./es.js": 301,
	"./et": 304,
	"./et.js": 304,
	"./eu": 305,
	"./eu.js": 305,
	"./fa": 306,
	"./fa.js": 306,
	"./fi": 307,
	"./fi.js": 307,
	"./fo": 308,
	"./fo.js": 308,
	"./fr": 309,
	"./fr-ca": 310,
	"./fr-ca.js": 310,
	"./fr-ch": 311,
	"./fr-ch.js": 311,
	"./fr.js": 309,
	"./fy": 312,
	"./fy.js": 312,
	"./gd": 313,
	"./gd.js": 313,
	"./gl": 314,
	"./gl.js": 314,
	"./gom-latn": 315,
	"./gom-latn.js": 315,
	"./gu": 316,
	"./gu.js": 316,
	"./he": 317,
	"./he.js": 317,
	"./hi": 318,
	"./hi.js": 318,
	"./hr": 319,
	"./hr.js": 319,
	"./hu": 320,
	"./hu.js": 320,
	"./hy-am": 321,
	"./hy-am.js": 321,
	"./id": 322,
	"./id.js": 322,
	"./is": 323,
	"./is.js": 323,
	"./it": 324,
	"./it.js": 324,
	"./ja": 325,
	"./ja.js": 325,
	"./jv": 326,
	"./jv.js": 326,
	"./ka": 327,
	"./ka.js": 327,
	"./kk": 328,
	"./kk.js": 328,
	"./km": 329,
	"./km.js": 329,
	"./kn": 330,
	"./kn.js": 330,
	"./ko": 331,
	"./ko.js": 331,
	"./ky": 332,
	"./ky.js": 332,
	"./lb": 333,
	"./lb.js": 333,
	"./lo": 334,
	"./lo.js": 334,
	"./lt": 335,
	"./lt.js": 335,
	"./lv": 336,
	"./lv.js": 336,
	"./me": 337,
	"./me.js": 337,
	"./mi": 338,
	"./mi.js": 338,
	"./mk": 339,
	"./mk.js": 339,
	"./ml": 340,
	"./ml.js": 340,
	"./mn": 341,
	"./mn.js": 341,
	"./mr": 342,
	"./mr.js": 342,
	"./ms": 343,
	"./ms-my": 344,
	"./ms-my.js": 344,
	"./ms.js": 343,
	"./mt": 345,
	"./mt.js": 345,
	"./my": 346,
	"./my.js": 346,
	"./nb": 347,
	"./nb.js": 347,
	"./ne": 348,
	"./ne.js": 348,
	"./nl": 349,
	"./nl-be": 350,
	"./nl-be.js": 350,
	"./nl.js": 349,
	"./nn": 351,
	"./nn.js": 351,
	"./pa-in": 352,
	"./pa-in.js": 352,
	"./pl": 353,
	"./pl.js": 353,
	"./pt": 354,
	"./pt-br": 355,
	"./pt-br.js": 355,
	"./pt.js": 354,
	"./ro": 356,
	"./ro.js": 356,
	"./ru": 357,
	"./ru.js": 357,
	"./sd": 358,
	"./sd.js": 358,
	"./se": 359,
	"./se.js": 359,
	"./si": 360,
	"./si.js": 360,
	"./sk": 361,
	"./sk.js": 361,
	"./sl": 362,
	"./sl.js": 362,
	"./sq": 363,
	"./sq.js": 363,
	"./sr": 364,
	"./sr-cyrl": 365,
	"./sr-cyrl.js": 365,
	"./sr.js": 364,
	"./ss": 366,
	"./ss.js": 366,
	"./sv": 367,
	"./sv.js": 367,
	"./sw": 368,
	"./sw.js": 368,
	"./ta": 369,
	"./ta.js": 369,
	"./te": 370,
	"./te.js": 370,
	"./tet": 371,
	"./tet.js": 371,
	"./tg": 372,
	"./tg.js": 372,
	"./th": 373,
	"./th.js": 373,
	"./tl-ph": 374,
	"./tl-ph.js": 374,
	"./tlh": 375,
	"./tlh.js": 375,
	"./tr": 376,
	"./tr.js": 376,
	"./tzl": 377,
	"./tzl.js": 377,
	"./tzm": 378,
	"./tzm-latn": 379,
	"./tzm-latn.js": 379,
	"./tzm.js": 378,
	"./ug-cn": 380,
	"./ug-cn.js": 380,
	"./uk": 381,
	"./uk.js": 381,
	"./ur": 382,
	"./ur.js": 382,
	"./uz": 383,
	"./uz-latn": 384,
	"./uz-latn.js": 384,
	"./uz.js": 383,
	"./vi": 385,
	"./vi.js": 385,
	"./x-pseudo": 386,
	"./x-pseudo.js": 386,
	"./yo": 387,
	"./yo.js": 387,
	"./zh-cn": 388,
	"./zh-cn.js": 388,
	"./zh-hk": 389,
	"./zh-hk.js": 389,
	"./zh-tw": 390,
	"./zh-tw.js": 390
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 628;

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(434);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\j_vxi\Documents\Programas\Financeiro\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
  Generated class for the ToastServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ToastServiceProvider = /** @class */ (function () {
    function ToastServiceProvider() {
    }
    ToastServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ToastServiceProvider);
    return ToastServiceProvider;
}());

//# sourceMappingURL=toast-service.js.map

/***/ })

},[438]);
//# sourceMappingURL=main.js.map