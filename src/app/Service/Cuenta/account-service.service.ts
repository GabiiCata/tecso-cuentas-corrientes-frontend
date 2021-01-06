import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private http : HttpClient) { }

  endpoint = environment.apiUrl +  "/account" ;

  getAccounts()
  {
    this.http.get ( this.endpoint );
  }

  add( persona )
  {
    return this.http.post ( this.endpoint , persona );
  }


}
