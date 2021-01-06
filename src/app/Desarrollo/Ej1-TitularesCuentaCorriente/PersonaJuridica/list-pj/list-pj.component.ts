import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LegalPersonServiceService } from 'src/app/Service/Persona-Juridica/legal-person-service.service';
 import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-pj',
  templateUrl: './list-pj.component.html',
  styleUrls: ['./list-pj.component.css']
})
export class ListPjComponent implements OnInit {

  legalPersons:any = [];


  constructor(private service : LegalPersonServiceService ,  private router : Router) { 
    
  }
  ngOnInit() {

   this.list();

  }

  list(){
    this.service.getLegalPersons().subscribe(data=>
      {
         this.legalPersons = data;
      }
    )
  }
  
  edit( id )
  {
    console.log ( id )
    localStorage.setItem('id',id ) ;
    this.router.navigate(['editar-persona-juridica']);
  }

  add()
  {
    this.router.navigate(['agregar-persona-juridica']);
  }

  delete( persona : any )
  {
    Swal.fire({
      title: 'Eliminar a ' + persona.businessName,
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
        this.service.deleteLegalPerson ( persona.id ).subscribe(data => {
          this.legalPersons = this.legalPersons.filter ( p=>p!==persona);
          Swal.fire(
            'Elimnado',
            persona.businessName + ' fue eliminado con éxito.',
            'success'
          )
        });
        
      }
    })
  }
}
