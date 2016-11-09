import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { ServicioDataService } from '../../shared/servicio.dataservice';
import { ServicioItem } from '../../models/servicioItem';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'servicioForm',
    templateUrl: 'app/components/servicioForm/servicioForm.component.html'
})

export class ServicioFormComponent implements OnChanges {
    @Input() servicioItem: ServicioItem;

    @Output() servicioUpdated = new EventEmitter<ServicioItem>();
    @Output() servicioAdded = new EventEmitter<ServicioItem>();

    private currentServicio: ServicioItem;

    constructor() {

    }

    ngOnChanges(changes: any) {
        this.currentServicio = Object.assign(new ServicioItem(), changes.servicioItem.currentValue);
        console.log(this.currentServicio);
    }

    public AddOrUpdateServicio = (): void => {
        if (this.servicioItem.id) {
            console.log("update");
            this.servicioUpdated.emit(this.currentServicio);
        } else {
            console.log("add");
            this.servicioAdded.emit(this.currentServicio);
        }
    }
}