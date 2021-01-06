import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhysicalPersonServiceService } from 'src/app/Service/Persona-Fisica/physical-person-service.service';
import { Location } from '@angular/common'
import Swal from 'sweetalert2';
import { PersonaFisica } from '../model/PersonaFisica';
@Component({
  selector: 'app-list-pf',
  templateUrl: './list-pf.component.html',
  styleUrls: ['./list-pf.component.css']
})
export class ListPfComponent implements OnInit {

  constructor(
    private service : PhysicalPersonServiceService ,  
    private router : Router,
    private location : Location) { 
    
  }

  persons : PersonaFisica[];

  ngOnInit() {
console.log("ngoninit")
    this.list();
 
   }

   list(){
    console.log("list")

    this.service.getPhysicalPersons().subscribe(data=>
      {
       

         this.persons = data;
         console.log( this.persons )
      }
    )
  }

  edit( id )
  {
    console.log ( id )
    localStorage.setItem('id',id ) ;
    this.router.navigate(['editar-persona-fisica']);
  }

  add()
  {
    this.router.navigate(['agregar-persona-fisica']);
  }

  delete( persona : PersonaFisica )
  {
    Swal.fire({
      title: 'Eliminar a ' + persona.firstName + " " + persona.lastName,
      text: "Esta accion es irrevesible.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: ' #F0000',
      confirmButtonText: 'Eliminar',
      cancelButtonText : 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log ( persona )
        this.service.delete ( persona.id ).subscribe(data => {
          this.persons = this.persons.filter ( p=>p!==persona);
          Swal.fire(
            'Elimnado',
            persona.firstName + " " + persona.lastName + ' fue eliminado con éxito.',
            'success'
          )
        });
        
      }
    })
  }

  back () 
  {
    this.location.back();
  }

}
