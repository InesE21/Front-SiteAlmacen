import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VentaI } from '../models/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  api_uri_django = 'http://localhost:8000';
  base_path = `${this.api_uri_django}/ventas/`;

  constructor(private http: HttpClient) { }

  
  getAllVentas(): Observable<VentaI[]> {
    return this.http.get<VentaI[]>(this.base_path);
  }

  getOneVenta(id: number): Observable<VentaI> {
    return this.http.get<VentaI>(`${this.base_path}${id}/`);
  }

  createVenta(data: VentaI): Observable<VentaI> {
    return this.http.post<VentaI>(this.base_path, data);
  }

  updateVenta(id: number, data: VentaI): Observable<VentaI> {
    return this.http.put<VentaI>(`${this.base_path}${id}/`, data);
  }

  deleteVenta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base_path}${id}/`);
  }
}

