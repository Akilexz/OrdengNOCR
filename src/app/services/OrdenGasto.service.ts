import { OrdenGastos } from './../model/OrdenGasto';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
const URL = 'http://localhost:8080/';
const API_URL = URL + '/getOrdenGastos';
const API_URL_CREATE = URL + 'saveOrUpdateOrdenGastos';
const API_URL_DELETE = URL + 'deleteOrdenGastos';
@Injectable()

export class OrdenGastoService {
    apiUrl: string;
    constructor(private http: HttpClient) { }

    buscarOrdenGasto(): Observable<OrdenGastos[]> {
        return this.http.get<OrdenGastos[]>(API_URL);
    }

    crearOActualizarOrdenGasto(ordenGastos: OrdenGastos): Observable<OrdenGastos[]> {
        return this.http.post<OrdenGastos[]>(API_URL_CREATE, ordenGastos);
        }
    deleteOrdenGasto(ordenGastos: OrdenGastos): Observable<OrdenGastos[]> {
        return this.http.post<OrdenGastos[]>(API_URL_DELETE, ordenGastos);
    }
    getOrdenGastoid(id_orden: number): Observable<OrdenGastos[]> {
        return this.http.get<OrdenGastos[]>(API_URL );
    }
}
