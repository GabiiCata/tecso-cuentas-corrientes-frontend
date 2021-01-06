import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonaJuridica } from 'src/app/Desarrollo/Ej1-TitularesCuentaCorriente/PersonaJuridica/model/PersonaJuridica';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LegalPersonServiceService {
  getById(id: string) {
    return this.http.get <PersonaJuridica> ( this.endpoint + "/" +id);
  }

  edit(persona: PersonaJuridica) {
    return this.http.put <PersonaJuridica> ( this.endpoint + "/" + persona.id , persona);
  }
  
  add( persona : PersonaJuridica )
  {
    return this.http.post ( this.endpoint , persona );
  }
  

  constructor(private http : HttpClient) { }

  endpoint = environment.apiUrl +  "/persona-juridica" ;

  getLegalPersons()
  {
    return this.http.get ( this.endpoint );
  }

  delete(id: any) {
    return this.http.delete ( this.endpoint + "/" +id );
  }
}
