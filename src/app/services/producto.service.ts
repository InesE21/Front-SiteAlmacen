import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoI } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/productos/`;

  constructor(private http: HttpClient) { }

  getAllProductos(): Observable<ProductoI[]> {
    return this.http.get<ProductoI[]>(this.base_path);
  }

  getOneProducto(id: number): Observable<ProductoI> {
    return this.http.get<ProductoI>(`${this.base_path}${id}`);
  }

  createProducto(data: any): Observable<ProductoI> {
    return this.http.post<ProductoI>(this.base_path, data);
  }

  updateProducto(id: number, data: any): Observable<ProductoI> {
    return this.http.put<ProductoI>(`${this.base_path}${id}`, data);
  }

  deleteProducto(id: number): Observable<ProductoI> {
    return this.http.delete<ProductoI>(`${this.base_path}${id}`);
  }
}
