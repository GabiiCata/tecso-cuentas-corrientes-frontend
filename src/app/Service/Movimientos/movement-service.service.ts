import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovementServiceService {

  constructor(private http : HttpClient) { }

  endpoint = environment.apiUrl +  "/movement" ;

  getAccounts()
  {
    this.http.get ( this.endpoint );
  }
}
