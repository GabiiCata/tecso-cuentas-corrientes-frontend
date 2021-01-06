import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LegalPersonServiceService } from 'src/app/Service/Persona-Juridica/legal-person-service.service';
import Swal from 'sweetalert2';
import { PersonaJuridica } from '../model/PersonaJuridica';
import { Location } from '@angular/common'

@Component({
  selector: 'app-edit-pj',
  templateUrl: './edit-pj.component.html',
  styleUrls: ['./edit-pj.component.css']
})
export class EditPjComponent implements OnInit {

  persona: PersonaJuridica = new PersonaJuridica();

  constructor(private router: Router, private service: LegalPersonServiceService , private location: Location) {

  }

  ngOnInit() {
    this.getLegalPerson();
  }

  getLegalPerson() {
    let id = localStorage.getItem('id');
    console.log ( id );
    this.service.getById(id)
      .subscribe(data => {
        this.persona = data ;
      });
  }

  edit(persona: PersonaJuridica) {
    this.service.edit(persona)
      .subscribe(data => {
        this.persona = data ;
        Swal.fire(
          'Actualzado!',
          persona.businessName + ' fue actualizado con éxito.',
          'success'
        )
        this.router.navigate(["listar-personas-juridicas"]);
      })
  }

  back () 
  {
    this.location.back();
  }

}
