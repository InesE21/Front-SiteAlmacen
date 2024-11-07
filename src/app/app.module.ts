import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { AppComponent } from './app.component';
import { CrearTipoProductoComponent } from './components/tipoproducto/crear-tipo-producto/crear-tipo-producto.component';
import { MostrarTipoProductoComponent } from './components/tipoproducto/mostrar-tipo-producto/mostrar-tipo-producto.component';
import { ActualizarTipoProductoComponent } from './components/tipoproducto/actualizar-tipo-producto/actualizar-tipo-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearTipoProductoComponent,
    MostrarTipoProductoComponent,
    ActualizarTipoProductoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // Asegúrate de incluirlo aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
