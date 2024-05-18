import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TarjetaService } from '../services/tarjeta.service';
import { Tarjeta } from '../Models/tarjeta';

@Component({
  selector: 'app-crear-tarjeta',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crear-tarjeta.component.html',
  styleUrl: './crear-tarjeta.component.css'
})
export class CrearTarjetaComponent {
  form!:FormGroup;

  constructor(private _fb:FormBuilder, private _ts:TarjetaService){
    this.form = this._fb.group({
      titular: ["", [Validators.required, Validators.email]],
      numeroTarjeta: ["", [Validators.required, Validators.pattern(/^\d{16}$/)]],
      fechaCaducidad: ["", [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvv: ["", [Validators.required, Validators.pattern(/^\d{3}$/)]]
    })
  }

  agregarTarjeta(){
    const formValues = this.form.value
    const tarjeta: Tarjeta = new Tarjeta(formValues.titular, formValues.numeroTarjeta, formValues.fechaCaducidad, formValues.cvv)
    this._ts.crearTarjeta(tarjeta).subscribe((response)=>{
      alert(response.msg)
    })
    window.location.reload();
  }

/*   private ValidateLength(limit:number){
    return [Validators.required, Validators.minLength(limit), Validators.maxLength(limit)]
  } */
}
