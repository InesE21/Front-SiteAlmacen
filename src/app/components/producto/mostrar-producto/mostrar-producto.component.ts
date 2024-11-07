import { Component, OnInit } from '@angular/core';
import { ProductoI } from '../../../models/producto';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-mostrar-producto',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.css']
})
export class MostrarProductoComponent implements OnInit {
  public productos: ProductoI[] = [];

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mostrarProductos();
  }

  mostrarProductos() {
    this.productoService.getAllProductos()
      .subscribe({
        next: (data) => {
          this.productos = data; // Asegúrate que la estructura de datos coincide con la respuesta
          // console.log(this.productos);
        }
      });
  }
}
