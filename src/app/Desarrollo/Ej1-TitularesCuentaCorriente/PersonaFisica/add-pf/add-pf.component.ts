import { Component, OnInit } from '@angular/core';
 import Swal from 'sweetalert2';
 import { Location } from '@angular/common'
import { PersonaFisica } from '../model/PersonaFisica';
import { PhysicalPersonServiceService } from 'src/app/Service/Persona-Fisica/physical-person-service.service';
@Component({
  selector: 'app-add-pf',
  templateUrl: './add-pf.component.html',
  styleUrls: ['./add-pf.component.css']
})
export class AddPfComponent implements OnInit {

  constructor(  private service: PhysicalPersonServiceService , private location: Location) {
  }

 persona:PersonaFisica=new PersonaFisica();
 
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
       this.back();
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
