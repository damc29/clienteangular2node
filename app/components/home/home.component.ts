import { Component, OnInit } from '@angular/core';
import { ServicioDataService } from '../../shared/servicio.dataservice';
import { ServicioItem } from '../../models/servicioItem';

@Component({
    selector: 'home-component',
    templateUrl: 'app/components/home/home.component.html'
})


export class HomeComponent implements OnInit {

    private selectedServicio: ServicioItem;
    private lastUpdatedDate: Date;

    constructor(private _servicioDataService: ServicioDataService) {

    }

    public ngOnInit() {
        this.getServicio();
    }

    public updateServicio = (): void => {
        this.getServicio();
    }

    private getServicio = (): void => {
        this._servicioDataService
            .GetAllServicio()
            .subscribe((response: ServicioItem[]) => {
                let servicioItems: ServicioItem[] = response;
                let randomIndex = Math.floor(Math.random() * servicioItems.length);
                this.selectedServicio = servicioItems[randomIndex];
                this.lastUpdatedDate = new Date();
            },
            error => console.log(error),
            () => console.log(this.selectedServicio));
    }

}