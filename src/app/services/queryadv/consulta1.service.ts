import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consulta1I } from '../../models/queryadv';

@Injectable({
  providedIn: 'root'
})
export class Consulta1Service {
    api_uri_node = 'http://localhost:8000';
    base_path = `${this.api_uri_node}/productos/consulta-clase/`


  constructor(
    private http:HttpClient
  ) { }


  getAllConsulta1():Observable<Consulta1I[]>{
    return this.http
      .get<Consulta1I[]>(this.base_path)
  }
}
