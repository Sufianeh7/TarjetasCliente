import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cliente } from './Models/cliente';
import { CrearTarjetaComponent } from './crear-tarjeta/crear-tarjeta.component';
import { ListarTarjetaComponent } from './listar-tarjeta/listar-tarjeta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrearTarjetaComponent, ListarTarjetaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TarjetasCredito';

  showData(){
    let cliente = new Cliente("Ramón", 34);
    console.log(cliente.name);
    cliente.name= "Pedro"
    console.log(cliente.name);
  }
}
