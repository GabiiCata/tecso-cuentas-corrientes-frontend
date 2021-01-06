import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LegalPersonServiceService {

  

  constructor(private http : HttpClient) { }

  endpoint = environment.apiUrl +  "/persona-juridica" ;

  getLegalPersons()
  {
    return this.http.get ( this.endpoint );
  }

  deleteLegalPerson(id: any) {
    return this.http.delete ( this.endpoint + "/" +id );
  }
}
