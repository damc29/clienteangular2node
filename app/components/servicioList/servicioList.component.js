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
var ServicioListComponent = (function () {
    function ServicioListComponent() {
        var _this = this;
        this.servicioSelected = new core_1.EventEmitter();
        this.servicioDeleted = new core_1.EventEmitter();
        this.setServicioItemForEdit = function (servicioItem) {
            _this.servicioSelected.emit(servicioItem);
        };
        this.deleteServicio = function (servicioItem) {
            _this.servicioDeleted.emit(servicioItem);
        };
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ServicioListComponent.prototype, "servicios", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ServicioListComponent.prototype, "servicioSelected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ServicioListComponent.prototype, "servicioDeleted", void 0);
    ServicioListComponent = __decorate([
        core_1.Component({
            selector: 'servicioList',
            templateUrl: 'app/components/servicioList/servicioList.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ServicioListComponent);
    return ServicioListComponent;
}());
exports.ServicioListComponent = ServicioListComponent;
//# sourceMappingURL=servicioList.component.js.map