import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
 import { Location } from '@angular/common'
import { PhysicalPersonServiceService } from 'src/app/Service/Persona-Fisica/physical-person-service.service';
import { PersonaFisica } from '../model/PersonaFisica';
@Component({
  selector: 'app-edit-pf',
  templateUrl: './edit-pf.component.html',
  styleUrls: ['./edit-pf.component.css']
})
export class EditPfComponent implements OnInit {

  constructor(private router: Router, private service: PhysicalPersonServiceService , private location: Location) {}

  ngOnInit() {
    this.getPhysicalPerson();
  }

  persona : PersonaFisica = new PersonaFisica();

  getPhysicalPerson() {
    let id = localStorage.getItem('id');
    console.log ( id );
    this.service.getById(id)
      .subscribe(data => {
        this.persona = data ;
      });
  }

  edit(persona: PersonaFisica) {
    this.service.edit(persona)
      .subscribe(data => {
        this.persona = data ;
        Swal.fire(
          'Actualzado!',
          persona.firstName + ' ' + persona.lastName + ' fue actualizado con éxito.',
          'success'
        )
        this.back();
      })
  }

  back () 
  {
    this.location.back();
  }

}
