import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  endpoint = environment.apiUrl +  "/persona-juridica" ;

  getLegalPerson()
  {
     return this.http.get ( this.endpoint );
  }
}
