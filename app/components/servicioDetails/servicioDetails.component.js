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
var router_1 = require('@angular/router');
var ServicioDetailsComponent = (function () {
    function ServicioDetailsComponent(_route, _servicioDataService) {
        this._route = _route;
        this._servicioDataService = _servicioDataService;
        this.selectedServicioItem = new servicioItem_1.ServicioItem();
    }
    ServicioDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = _this._route.snapshot.params['servicioId'];
            //let foodId = +params['foodId']; // (+) converts string 'id' to a number
            _this._servicioDataService
                .GetSingleServicio(id)
                .subscribe(function (servicioItem) {
                _this.selectedServicioItem = servicioItem;
            }, function (error) { return console.log(error); });
        });
    };
    ServicioDetailsComponent = __decorate([
        core_1.Component({
            selector: 'servicioDetails-component',
            templateUrl: 'app/components/servicioDetails/servicioDetails.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, servicio_dataservice_1.ServicioDataService])
    ], ServicioDetailsComponent);
    return ServicioDetailsComponent;
}());
exports.ServicioDetailsComponent = ServicioDetailsComponent;
//# sourceMappingURL=servicioDetails.component.js.map