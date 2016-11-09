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
var HomeComponent = (function () {
    function HomeComponent(_servicioDataService) {
        var _this = this;
        this._servicioDataService = _servicioDataService;
        this.updateServicio = function () {
            _this.getServicio();
        };
        this.getServicio = function () {
            _this._servicioDataService
                .GetAllServicio()
                .subscribe(function (response) {
                var servicioItems = response;
                var randomIndex = Math.floor(Math.random() * servicioItems.length);
                _this.selectedServicio = servicioItems[randomIndex];
                _this.lastUpdatedDate = new Date();
            }, function (error) { return console.log(error); }, function () { return console.log(_this.selectedServicio); });
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getServicio();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-component',
            templateUrl: 'app/components/home/home.component.html'
        }), 
        __metadata('design:paramtypes', [servicio_dataservice_1.ServicioDataService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map