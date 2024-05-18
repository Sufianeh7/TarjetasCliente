import { Component, OnInit } from '@angular/core';
import { Tarjeta } from '../Models/tarjeta';
import { TarjetaService } from '../services/tarjeta.service';

@Component({
  selector: 'app-listar-tarjeta',
  standalone: true,
  imports: [],
  templateUrl: './listar-tarjeta.component.html',
  styleUrl: './listar-tarjeta.component.css'
})
export class ListarTarjetaComponent implements OnInit{

  public tarjetas: any[] = [];

  public mostrar:boolean = true;

  constructor(private _ts: TarjetaService) {}

  ngOnInit(): void {
/*     this._ts.mostrarTarjetas().subscribe((data) => {this.tarjetas = data;
      console.log(this.tarjetas);
    }
  );*/
  }

  mostrarTarjetas() {
    this._ts.mostrarTarjetas().subscribe((data) => {this.tarjetas = data;
    });
    this.mostrar = !this.mostrar
  }

  ocultarTarjetas(){
    this.tarjetas = [];
    this.mostrar = !this.mostrar
  }
}
