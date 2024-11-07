import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoProductoService } from '../../../services/tipo-producto.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { TipoProductoI } from '../../../models/tipoproducto';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-crear-tipo-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './crear-tipo-producto.component.html',
  styleUrls: ['./crear-tipo-producto.component.css']
})
export class CrearTipoProductoComponent implements OnInit {
  public form!: FormGroup;

  tipoProductoService = inject(TipoProductoService);
  
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Por favor complete el formulario correctamente', life: 5000 });
      return;
    }

    const formValue: TipoProductoI = this.form.value;
    console.log(formValue);
    this.tipoProductoService.createTipoProducto(formValue).subscribe(
      () => {
        setTimeout(() => {
          this.messageService.add({ severity: 'success', summary: 'Notificación', detail: 'Tipo de Producto Creado', life: 5000 });
        }, 0);
        this.router.navigateByUrl('/tipoproductos');
      },
      (err: any) => {
        console.log(err);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se ha podido crear el tipo de producto', life: 5000 });
      }
    );
  }

  cancel(): void {
    this.router.navigateByUrl('/tipoproductos');
  }

  get nombre() { return this.form.get('nombre'); }
}
