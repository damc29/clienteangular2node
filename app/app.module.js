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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var router_1 = require('@angular/router');
var app_configuration_1 = require('./shared/app.configuration');
var app_routes_1 = require('./app.routes');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var shared_module_1 = require('./modules/shared.module');
var home_component_1 = require('./components/home/home.component');
var mainServicio_component_1 = require('./components/mainServicio/mainServicio.component');
var servicioDetails_component_1 = require('./components/servicioDetails/servicioDetails.component');
var servicioList_component_1 = require('./components/servicioList/servicioList.component');
var servicioForm_component_1 = require('./components/servicioForm/servicioForm.component');
var navigation_component_1 = require('./components/navigation/navigation.component');
var servicio_dataservice_1 = require('./shared/servicio.dataservice');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(app_routes_1.AppRoutes),
                http_1.HttpModule,
                http_1.JsonpModule,
                forms_1.FormsModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                mainServicio_component_1.MainServicioComponent,
                servicioDetails_component_1.ServicioDetailsComponent,
                servicioList_component_1.ServicioListComponent,
                servicioForm_component_1.ServicioFormComponent,
                navigation_component_1.NavigationComponent
            ],
            providers: [
                app_configuration_1.Configuration,
                servicio_dataservice_1.ServicioDataService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map