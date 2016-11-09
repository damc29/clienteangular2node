import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ServicioItem } from '../models/ServicioItem';
import { Configuration } from '../shared/app.configuration';

@Injectable()
export class ServicioDataService {

    private actionUrl: string;

    @Output() servicioAdded: EventEmitter<any> = new EventEmitter();
    @Output() servicioDeleted: EventEmitter<any> = new EventEmitter();

    constructor(private _http: Http, private _configuration: Configuration) {
        this.actionUrl = _configuration.baseUrl + 'servicios/';
    }

    public GetAllServicio = (): Observable<ServicioItem[]> => {
        return this._http.get(this.actionUrl)
            .map((response: Response) => <ServicioItem[]>response.json())
            .catch(this.handleError);
    }

    public GetSingleServicio = (id: number): Observable<ServicioItem> => {
        return this._http.get(this.actionUrl + id)
            .map((response: Response) => <ServicioItem>response.json())
            .catch(this.handleError);
    }

    public AddServicio = (servicioItem: ServicioItem): Observable<ServicioItem> => {
        let toAdd: string = JSON.stringify(
            {
                nombre: servicioItem.nombre,
                estado: servicioItem.estado,
                descripcion: servicioItem.descripcion
            });

        let options = this.prepareOptions(null);

        return this._http.post(this.actionUrl, toAdd, options)
            .map((response: Response) => <ServicioItem>response.json())
            .do(() => this.servicioAdded.emit(null))
            .catch(this.handleError);
    }

    public UpdateServicio = (id: number, servicioToUpdate: ServicioItem): Observable<ServicioItem> => {
        let options = this.prepareOptions(null);

        return this._http.put(this.actionUrl + id, JSON.stringify(servicioToUpdate), options)
            .map((response: Response) => <ServicioItem>response.json())
            .catch(this.handleError);
    }

    public DeleteServicio = (id: number): Observable<Response> => {
        return this._http.delete(this.actionUrl + id)
            .do(() => this.servicioDeleted.emit(null))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


    private prepareOptions = (options: RequestOptionsArgs): RequestOptionsArgs => {
        options = options || {};

        if (!options.headers) {
            options.headers = new Headers();
        }

        options.headers.append('Content-Type', 'application/json');

        return options;
    }
}
