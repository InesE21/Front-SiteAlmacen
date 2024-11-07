import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoProductoI } from '../models/tipoproducto';

@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/tipoproductos/`;

  constructor(private http: HttpClient) { }

  getAllTipoProductos(): Observable<TipoProductoI[]> {
    return this.http.get<TipoProductoI[]>(this.base_path);
  }

  getOneTipoProducto(id: number): Observable<TipoProductoI> {
    return this.http.get<TipoProductoI>(`${this.base_path}${id}`);
  }

  createTipoProducto(data: any): Observable<TipoProductoI> {
    return this.http.post<TipoProductoI>(this.base_path, data);
  }

  updateTipoProducto(id: number, data: any): Observable<TipoProductoI> {
    return this.http.put<TipoProductoI>(`${this.base_path}${id}`, data);
  }

  deleteTipoProducto(id: number): Observable<TipoProductoI> {
    return this.http.delete<TipoProductoI>(`${this.base_path}${id}`);
  }
}
