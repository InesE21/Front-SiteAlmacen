import { Component, OnInit } from '@angular/core';
import { TipoProductoI } from '../../../models/tipoproducto';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TipoProductoService } from '../../../services/tipo-producto.service';

@Component({
  selector: 'app-mostrar-tipo-producto',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-tipo-producto.component.html',
  styleUrls: ['./mostrar-tipo-producto.component.css']
})
export class MostrarTipoProductoComponent implements OnInit {
  public tiposProductos: TipoProductoI[] = [];

  constructor(
    private tipoProductoService: TipoProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mostrarTiposProductos();
  }

  mostrarTiposProductos() {
    this.tipoProductoService.getAllTipoProductos()
      .subscribe({
        next: (data) => {
          this.tiposProductos = data; // Asegúrate que la estructura de datos coincide con la respuesta
          // console.log(this.tiposProductos);
        }
      });
  }
}
