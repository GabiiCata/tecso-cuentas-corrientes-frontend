import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhysicalPersonServiceService {

  constructor(private http : HttpClient) { }

  endpoint = environment.apiUrl +  "/persona-fisica" ;

  getPhysicalPersons()
  {
    this.http.get ( this.endpoint );
  }
}
