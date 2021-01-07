import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movimiento } from 'src/app/Desarrollo/Ej2-CuentasCorrientes/Movimientos/model/Movimiento';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovementServiceService {

  

  constructor(private http : HttpClient) { }

  endpoint = environment.apiUrl +  "/movement" ;

  add(movement: Movimiento) 
  {
    return this.http.post ( this.endpoint , movement );
  }
  
  getMovements( idAccount )
  {
    return this.http.get <Movimiento[]>( this.endpoint + '/' + idAccount );
  }
}
