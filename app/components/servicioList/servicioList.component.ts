import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ServicioDataService } from '../../shared/servicio.dataservice';
import { ServicioItem } from '../../models/servicioItem';

@Component({
    selector: 'servicioList',
    templateUrl: 'app/components/servicioList/servicioList.component.html'
})

export class ServicioListComponent {
    public servicioItem: ServicioItem;

    @Input() servicios: ServicioItem[];
    @Output() servicioSelected = new EventEmitter<ServicioItem>();
    @Output() servicioDeleted = new EventEmitter<ServicioItem>();

    public setServicioItemForEdit = (servicioItem: ServicioItem): void => {
        this.servicioSelected.emit(servicioItem);
    }

    public deleteServicio = (servicioItem: ServicioItem): void => {
        this.servicioDeleted.emit(servicioItem);
    };
}