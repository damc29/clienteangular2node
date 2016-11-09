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
var servicio_dataservice_1 = require('../../shared/servicio.dataservice');
var servicioItem_1 = require('../../models/servicioItem');
var MainServicioComponent = (function () {
    function MainServicioComponent(_servicioDataService) {
        var _this = this;
        this._servicioDataService = _servicioDataService;
        this.addServicio = function (servicioItem) {
            _this._servicioDataService
                .AddServicio(servicioItem)
                .subscribe(function (response) {
                console.log("added servicio");
                _this.getServicio();
            }, function (error) { return console.log(error); });
        };
        this.updateServicio = function (servicioItem) {
            _this._servicioDataService
                .UpdateServicio(servicioItem.id, servicioItem)
                .subscribe(function (response) {
                console.log("updated Servicio");
                _this.getServicio();
            }, function (error) { return console.log(error); });
        };
        this.getServicio = function () {
            _this._servicioDataService
                .GetAllServicio()
                .subscribe(function (response) {
                _this.servicios = response;
            }, function (error) { return console.log(error); }, function () { return console.log(_this.servicios); });
        };
        this.setCurrentlySelectedServicio(new servicioItem_1.ServicioItem());
        this._servicioDataService.servicioAdded.subscribe(function () { return _this.getServicio(); });
        this._servicioDataService.servicioDeleted.subscribe(function () { return _this.getServicio(); });
    }
    MainServicioComponent.prototype.ngOnInit = function () {
        this.getServicio();
    };
    MainServicioComponent.prototype.setCurrentlySelectedServicio = function (servicioItem) {
        this.servicioSelectedFromList = servicioItem;
    };
    MainServicioComponent.prototype.deleteServicio = function (servicioItem) {
        var _this = this;
        this._servicioDataService
            .DeleteServicio(servicioItem.id)
            .subscribe(function () {
            console.log('Servicio deleted');
            _this.getServicio();
        }, function (error) { return console.log(error); });
    };
    MainServicioComponent = __decorate([
        core_1.Component({
            selector: 'mainServicio-component',
            templateUrl: 'app/components/mainServicio/mainServicio.component.html'
        }), 
        __metadata('design:paramtypes', [servicio_dataservice_1.ServicioDataService])
    ], MainServicioComponent);
    return MainServicioComponent;
}());
exports.MainServicioComponent = MainServicioComponent;
//# sourceMappingURL=mainServicio.component.js.map