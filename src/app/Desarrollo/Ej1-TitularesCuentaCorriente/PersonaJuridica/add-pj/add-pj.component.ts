import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from 'src/app/Service/Cuenta/account-service.service';
import { LegalPersonServiceService } from 'src/app/Service/Persona-Juridica/legal-person-service.service';
import { ServiceService } from 'src/app/Service/service.service';
import Swal from 'sweetalert2';
import { PersonaJuridica } from '../model/PersonaJuridica';


@Component({
  selector: 'app-add-pj',
  templateUrl: './add-pj.component.html',
  styleUrls: ['./add-pj.component.css']
})
export class AddPjComponent implements OnInit {

 
  constructor(  private service: LegalPersonServiceService) {
   }
 
  persona:PersonaJuridica=new PersonaJuridica();
  
  add( )
  {
    console.log ( this.persona );
 
    this.service.add ( this.persona  ).subscribe ( data => 
      {
        Swal.fire({
           icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error => {
        console.log ( error );
      });
    
  }
  ngOnInit() {
   }



}
