import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { HomeComponent } from  './components/home/home.component';
import { MainServicioComponent } from  './components/mainServicio/mainServicio.component';
import { Configuration } from  './shared/app.configuration';
import { ServicioDetailsComponent } from './components/servicioDetails/servicioDetails.component';

@Component({
    selector: 'servicioChooser-app',
    templateUrl: 'app/app.component.html'
})


export class AppComponent {

    public title: string;

    constructor(private _configuration: Configuration, private _location: Location) {
        this.title = _configuration.title;
    }
} 