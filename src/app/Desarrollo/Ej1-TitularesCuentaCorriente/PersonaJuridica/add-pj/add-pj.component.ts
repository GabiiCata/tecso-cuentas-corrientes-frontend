import { Component, OnInit } from '@angular/core';
import { LegalPersonServiceService } from 'src/app/Service/Persona-Juridica/legal-person-service.service';
import Swal from 'sweetalert2';
import { PersonaJuridica } from '../model/PersonaJuridica';
import { Location } from '@angular/common'


@Component({
  selector: 'app-add-pj',
  templateUrl: './add-pj.component.html',
  styleUrls: ['./add-pj.component.css']
})
export class AddPjComponent implements OnInit {

 
  constructor(  
    private service: LegalPersonServiceService , 
    private location: Location) {
   }
 
  persona:PersonaJuridica=new PersonaJuridica();
  
  add( )
  {
    console.log ( this.persona );
 
    this.service.add ( this.persona  ).subscribe ( data => 
      {
        Swal.fire({
           icon: 'success',
          title: 'Persona agregada correctamente',
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

   back () 
   {
     this.location.back();
   }

}
