"use strict";
var home_component_1 = require('./components/home/home.component');
var mainServicio_component_1 = require('./components/mainServicio/mainServicio.component');
var servicioDetails_component_1 = require('./components/servicioDetails/servicioDetails.component');
exports.AppRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'servicio', component: mainServicio_component_1.MainServicioComponent },
    { path: 'servicio/:servicioId', component: servicioDetails_component_1.ServicioDetailsComponent }
];
//# sourceMappingURL=app.routes.js.map