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

   this.listPersonas();

  }

  listPersonas(){
    this.service.getLegalPersons().subscribe(data=>
      {
         this.legalPersons = data;
      }
    )
  }
  
  edit( id )
  {
    localStorage.setItem('id',id);
    this.router.navigate(['editar-persona-juridica']);
  }

  add()
  {
    this.router.navigate(['agregar-persona-juridica']);
  }

  delete( persona : any )
  {
    Swal.fire({
      title: 'Eliminar Persona Juridica',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText : 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
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
