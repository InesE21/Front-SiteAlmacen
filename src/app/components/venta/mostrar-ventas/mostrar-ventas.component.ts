import { Component, OnInit } from '@angular/core';
import { VentaI } from '../../../models/venta';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { VentaService } from '../../../services/venta.service';

@Component({
  selector: 'app-mostrar-ventas',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-ventas.component.html',
  styleUrls: ['./mostrar-ventas.component.css']
})
export class MostrarVentaComponent implements OnInit {
  public ventas: VentaI[] = [];
  cols: any[] = [];

  constructor(
    private ventaService: VentaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mostrarVentas();

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'fecha', header: 'Fecha' },
      { field: 'descuento', header: 'Descuento' },
      { field: 'subtotal', header: 'Subtotal' },
      { field: 'total', header: 'Total' }
    ];
  }

  mostrarVentas() {
    this.ventaService.getAllVentas()
      .subscribe({
        next: (data) => {
          this.ventas = data; 
        }
      });
  }

  eliminarVenta(id: number) {
    this.ventaService.deleteVenta(id).subscribe(() => {
      this.mostrarVentas(); // Actualiza la lista después de eliminar
    });
  }
}

