import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonaFisica } from 'src/app/Desarrollo/Ej1-TitularesCuentaCorriente/PersonaFisica/model/PersonaFisica';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhysicalPersonServiceService {
  getById(id: string) {
    return this.http.get <PersonaFisica> ( this.endpoint + "/" + id );
  }

  endpoint = environment.apiUrl +  "/persona-fisica" ;

  
  edit(persona: PersonaFisica) {
    console.log ( persona )
    return this.http.put <PersonaFisica> ( this.endpoint + "/" + persona.id , persona);
  }
  
  add( persona : PersonaFisica )
  {
    return this.http.post ( this.endpoint , persona );
  }


  delete(id: any) {
    return this.http.delete ( this.endpoint + "/" +id );
  }

  constructor(private http : HttpClient) { }


  getPhysicalPersons()
  {
    return this.http.get <PersonaFisica [] > ( this.endpoint );
  }
}
