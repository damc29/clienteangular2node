import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import { Configuration } from './shared/app.configuration';
import { AppRoutes } from './app.routes';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './modules/shared.module';

import { HomeComponent } from  './components/home/home.component';
import { MainServicioComponent } from  './components/mainServicio/mainServicio.component';
import { ServicioDetailsComponent } from './components/servicioDetails/servicioDetails.component';
import { ServicioListComponent } from './components/servicioList/servicioList.component';
import { ServicioFormComponent } from './components/servicioForm/servicioForm.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { ServicioDataService } from './shared/servicio.dataservice';


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule,
        JsonpModule,
        FormsModule,
        SharedModule
    ],

    declarations: [
        AppComponent,
        HomeComponent,
        MainServicioComponent,
        ServicioDetailsComponent,
        ServicioListComponent,
        ServicioFormComponent,
        NavigationComponent
    ],

    providers: [
        Configuration,
        ServicioDataService
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }