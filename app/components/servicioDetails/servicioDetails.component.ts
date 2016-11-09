import { Component, OnInit } from '@angular/core';
import { ServicioDataService } from '../../shared/servicio.dataservice';
import { ServicioItem } from '../../models/servicioItem';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'servicioDetails-component',
    templateUrl: 'app/components/servicioDetails/servicioDetails.component.html'
})

export class ServicioDetailsComponent implements OnInit {

    public selectedServicioItem: ServicioItem = new ServicioItem();

    constructor(private _route: ActivatedRoute, private _servicioDataService: ServicioDataService) {

    }

    ngOnInit() {
        this._route.params.forEach((params: Params) => {
            let id = this._route.snapshot.params['servicioId'];
            //let foodId = +params['foodId']; // (+) converts string 'id' to a number
            this._servicioDataService
                .GetSingleServicio(id)
                .subscribe((servicioItem: ServicioItem) => {
                    this.selectedServicioItem = servicioItem;
                }, error => console.log(error));
        });
    }
}