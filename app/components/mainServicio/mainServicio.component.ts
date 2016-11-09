import { Component, Input, OnInit } from '@angular/core';
import { ServicioFormComponent } from '../servicioForm/servicioForm.component';
import { ServicioListComponent } from '../servicioList/servicioList.component';
import { ServicioDetailsComponent } from '../servicioDetails/servicioDetails.component';
import { ServicioDataService } from '../../shared/servicio.dataservice';
import { ServicioItem } from '../../models/servicioItem';

@Component({
    selector: 'mainServicio-component',
    templateUrl: 'app/components/mainServicio/mainServicio.component.html'
})

export class MainServicioComponent implements OnInit {
    public servicioSelectedFromList: ServicioItem;
    public servicios: ServicioItem[];

    constructor(private _servicioDataService: ServicioDataService) {
        this.setCurrentlySelectedServicio(new ServicioItem());
        this._servicioDataService.servicioAdded.subscribe(() => this.getServicio());
        this._servicioDataService.servicioDeleted.subscribe(() => this.getServicio());
    }

    ngOnInit() {
        this.getServicio();
    }

    public setCurrentlySelectedServicio(servicioItem: ServicioItem) {
        this.servicioSelectedFromList = servicioItem;
    }

    public addServicio = (servicioItem: ServicioItem): void => {
        this._servicioDataService
            .AddServicio(servicioItem)
            .subscribe((response: ServicioItem) => {
                console.log("added servicio");
                this.getServicio();
            },
            error => console.log(error));
    }

    public updateServicio = (servicioItem: ServicioItem): void => {
        this._servicioDataService
            .UpdateServicio(servicioItem.id, servicioItem)
            .subscribe((response: ServicioItem) => {
                console.log("updated Servicio");
                this.getServicio();
            },
            error => console.log(error));
    }

    public deleteServicio(servicioItem: ServicioItem) {
        this._servicioDataService
            .DeleteServicio(servicioItem.id)
            .subscribe(() => {
                console.log('Servicio deleted');
                this.getServicio();
            },
            error => console.log(error));
    }

    private getServicio = (): void => {
        this._servicioDataService
            .GetAllServicio()
            .subscribe((response: ServicioItem[]) => {
                this.servicios = response;
            },
            error => console.log(error),
            () => console.log(this.servicios));
    }
}