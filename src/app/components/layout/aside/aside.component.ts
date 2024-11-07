import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'Mostrar Clientes',
            icon: 'pi pi-fw pi-eye',
            routerLink: '/clientes/mostrar'
          },
          {
            label: 'Crear Cliente',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/clientes/crear'
          },
          {
            label: 'Editar Cliente',
            icon: 'pi pi-fw pi-pencil',
            routerLink: '/clientes/editar'
          },
          {
            label: 'Eliminar Cliente',
            icon: 'pi pi-fw pi-trash',
            routerLink: '/clientes/eliminar'
          }
        ]
      },
      {
        label: 'Tipo Productos',
        icon: 'pi pi-fw pi-qrcode',
        items: [
          {
            label: 'Mostrar Tipo Productos',
            icon: 'pi pi-fw pi-eye',
            routerLink: '/tipo-productos/mostrar'
          },
          {
            label: 'Crear Tipo Producto',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/tipo-productos/crear'
          },
          {
            label: 'Editar Tipo Producto',
            icon: 'pi pi-fw pi-pencil',
            routerLink: '/tipo-productos/editar'
          },
          {
            label: 'Eliminar Tipo Producto',
            icon: 'pi pi-fw pi-trash',
            routerLink: '/tipo-productos/eliminar'
          }
        ]
      },
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-shopping-bag',
        items: [
          {
            label: 'Mostrar Productos',
            icon: 'pi pi-fw pi-eye',
            routerLink: '/productos/mostrar'
          },
          {
            label: 'Crear Producto',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/productos/crear'
          },
          {
            label: 'Editar Producto',
            icon: 'pi pi-fw pi-pencil',
            routerLink: '/productos/editar'
          },
          {
            label: 'Eliminar Producto',
            icon: 'pi pi-fw pi-trash',
            routerLink: '/productos/eliminar'
          }
        ]
      },
      {
        label: 'Ventas',
        icon: 'pi pi-fw pi-shopping-cart',
        items: [
          {
            label: 'Mostrar Ventas',
            icon: 'pi pi-fw pi-eye',
            routerLink: '/ventas/mostrar'
          },
          {
            label: 'Crear Venta',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/ventas/crear'
          },
          {
            label: 'Editar Venta',
            icon: 'pi pi-fw pi-pencil',
            routerLink: '/ventas/editar'
          },
          {
            label: 'Eliminar Venta',
            icon: 'pi pi-fw pi-trash',
            routerLink: '/ventas/eliminar'
          }
        ]
      },
      {
        label: 'Consultas Avanzadas',
        icon: 'pi pi-fw pi-database',
        items: [
          {
            label: 'Consulta 1',
            icon: 'pi pi-fw pi-eye',
            routerLink: '/queryadv/consulta1'
          }
        ]
      }
    ];
  }
}
