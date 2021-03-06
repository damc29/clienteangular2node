"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var app_configuration_1 = require('../shared/app.configuration');
var ServicioDataService = (function () {
    function ServicioDataService(_http, _configuration) {
        var _this = this;
        this._http = _http;
        this._configuration = _configuration;
        this.servicioAdded = new core_1.EventEmitter();
        this.servicioDeleted = new core_1.EventEmitter();
        this.GetAllServicio = function () {
            return _this._http.get(_this.actionUrl)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.GetSingleServicio = function (id) {
            return _this._http.get(_this.actionUrl + id)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.AddServicio = function (servicioItem) {
            var toAdd = JSON.stringify({
                nombre: servicioItem.nombre,
                estado: servicioItem.estado,
                descripcion: servicioItem.descripcion
            });
            var options = _this.prepareOptions(null);
            return _this._http.post(_this.actionUrl, toAdd, options)
                .map(function (response) { return response.json(); })
                .do(function () { return _this.servicioAdded.emit(null); })
                .catch(_this.handleError);
        };
        this.UpdateServicio = function (id, servicioToUpdate) {
            var options = _this.prepareOptions(null);
            return _this._http.put(_this.actionUrl + id, JSON.stringify(servicioToUpdate), options)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.DeleteServicio = function (id) {
            return _this._http.delete(_this.actionUrl + id)
                .do(function () { return _this.servicioDeleted.emit(null); })
                .catch(_this.handleError);
        };
        this.prepareOptions = function (options) {
            options = options || {};
            if (!options.headers) {
                options.headers = new http_1.Headers();
            }
            options.headers.append('Content-Type', 'application/json');
            return options;
        };
        this.actionUrl = _configuration.baseUrl + 'servicios/';
    }
    ServicioDataService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ServicioDataService.prototype, "servicioAdded", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ServicioDataService.prototype, "servicioDeleted", void 0);
    ServicioDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_configuration_1.Configuration])
    ], ServicioDataService);
    return ServicioDataService;
}());
exports.ServicioDataService = ServicioDataService;
//# sourceMappingURL=servicio.dataservice.js.map