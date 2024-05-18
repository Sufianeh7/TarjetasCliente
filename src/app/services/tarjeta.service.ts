import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarjeta } from '../Models/tarjeta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  private _URL:string = "https://tarjetas-servidor.vercel.app/api/";

  constructor(private _http: HttpClient) {

  }
  crearTarjeta(tarjeta:Tarjeta):Observable<any>{
    return this._http.post(this._URL+"addCard",tarjeta);
  }

  mostrarTarjetas():Observable<any>{
    return this._http.get(this._URL)
  }
}
