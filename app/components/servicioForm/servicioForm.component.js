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
var servicioItem_1 = require('../../models/servicioItem');
var ServicioFormComponent = (function () {
    function ServicioFormComponent() {
        var _this = this;
        this.servicioUpdated = new core_1.EventEmitter();
        this.servicioAdded = new core_1.EventEmitter();
        this.AddOrUpdateServicio = function () {
            if (_this.servicioItem.id) {
                console.log("update");
                _this.servicioUpdated.emit(_this.currentServicio);
            }
            else {
                console.log("add");
                _this.servicioAdded.emit(_this.currentServicio);
            }
        };
    }
    ServicioFormComponent.prototype.ngOnChanges = function (changes) {
        this.currentServicio = Object.assign(new servicioItem_1.ServicioItem(), changes.servicioItem.currentValue);
        console.log(this.currentServicio);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', servicioItem_1.ServicioItem)
    ], ServicioFormComponent.prototype, "servicioItem", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ServicioFormComponent.prototype, "servicioUpdated", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ServicioFormComponent.prototype, "servicioAdded", void 0);
    ServicioFormComponent = __decorate([
        core_1.Component({
            selector: 'servicioForm',
            templateUrl: 'app/components/servicioForm/servicioForm.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ServicioFormComponent);
    return ServicioFormComponent;
}());
exports.ServicioFormComponent = ServicioFormComponent;
//# sourceMappingURL=servicioForm.component.js.map