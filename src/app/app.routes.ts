import { Routes } from '@angular/router';

import { MostrarClienteComponent } from './components/cliente/mostrar-cliente/mostrar-cliente.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
// import { ActualizarClienteComponent } from './components/cliente/actualizar-cliente/actualizar-cliente.component';

import { MostrarProductoComponent } from './components/producto/mostrar-producto/mostrar-producto.component';
import { CrearProductoComponent } from './components/producto/crear-producto/crear-producto.component';
import { ActualizarProductoComponent } from './components/producto/actualizar-producto/actualizar-producto.component';

import { MostrarTipoProductoComponent } from './components/tipoproducto/mostrar-tipo-producto/mostrar-tipo-producto.component';
import { CrearTipoProductoComponent } from './components/tipoproducto/crear-tipo-producto/crear-tipo-producto.component';
import { ActualizarTipoProductoComponent } from './components/tipoproducto/actualizar-tipo-producto/actualizar-tipo-producto.component';

import { MostrarVentaComponent } from './components/venta/mostrar-ventas/mostrar-ventas.component';

import { Consulta1Component } from './components/queryadv/consulta1/consulta1.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/', 
        pathMatch: 'full' 
    },
    // Rutas para Clientes
    { path: "clientes/mostrar", component: MostrarClienteComponent },
    { path: "clientes/crear", component: CrearClienteComponent },
    // { path: "clientes/edit/:id", component: ActualizarClienteComponent },
    
    
    // Rutas para Productos
    { path: "productos/mostrar", component: MostrarProductoComponent },
    { path: "productos/crear", component: CrearProductoComponent },
    { path: "productos/edit/:id", component: ActualizarProductoComponent },
    
    
    // Rutas para Tipo de Producto
    { path: "tipoproductos/mostrar", component: MostrarTipoProductoComponent },
    { path: "tipoproductos/crear", component: CrearTipoProductoComponent },
    { path: "tipoproductos/edit/:id", component: ActualizarTipoProductoComponent },
    
    
    // Rutas para Ventas
    { path: "ventas/mostrar", component: MostrarVentaComponent },
    
    //Rutas para Consultas
    { path: "queryadv/consulta1", component: Consulta1Component },
];

