import { Component, OnInit } from '@angular/core';
import { Consulta1I } from '../../../models/queryadv';
import { Consulta1Service } from '../../../services/queryadv/consulta1.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-consulta1',
  standalone: true,
  imports: [
    RouterModule,
    CardModule,
    TableModule,
    ButtonModule
  ],
  templateUrl: './consulta1.component.html',
  styleUrl: './consulta1.component.css'
})
export class Consulta1Component implements OnInit{
  public consulta1:Consulta1I[] = []
  constructor(
    private consulta1Service: Consulta1Service,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarConsulta1()
  }
  
  mostrarConsulta1() {
    this.consulta1Service.getAllConsulta1()
      .subscribe({
        next: (data) => {
          this.consulta1 = data
          // console.log(this.clientes)
        }
      })
  }
}

