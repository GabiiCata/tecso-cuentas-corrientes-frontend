import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cuenta } from 'src/app/Desarrollo/Ej2-CuentasCorrientes/Cuenta/model/Cuenta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  endpoint = environment.apiUrl +  "/account" ;

  constructor(private http : HttpClient) { }


  getById(id: string) {
    return this.http.get <Cuenta> ( this.endpoint + "/" +id);
  }

  edit(cuenta: Cuenta) {
    return this.http.put <Cuenta> ( this.endpoint + "/" + cuenta.id , cuenta);
  }
  
  add( cuenta : Cuenta )
  {
    return this.http.post ( this.endpoint , cuenta );
  }

  getAccounts()
  {
    return this.http.get <Cuenta[]>( this.endpoint );
  }

  delete(id: any) {
    return this.http.delete ( this.endpoint + "/" +id );
  }

}
