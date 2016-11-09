import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    baseUrl: string = "http://localhost:8084/api/";
    //baseUrl: string = "http://localhost:5000/api/";
    title: string = "Cliente Angular 2 De Servicios";
}