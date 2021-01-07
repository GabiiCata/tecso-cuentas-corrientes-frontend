import { Component, OnInit } from '@angular/core';
 import Swal from 'sweetalert2';
 import { Location } from '@angular/common'
import { AccountServiceService } from 'src/app/Service/Cuenta/account-service.service';
import { Cuenta } from '../model/Cuenta';
@Component({
  selector: 'app-add-cuenta',
  templateUrl: './add-cuenta.component.html',
  styleUrls: ['./add-cuenta.component.css']
})
export class AddCuentaComponent implements OnInit {

  constructor(  
    private service: AccountServiceService , 
    private location: Location) {
   }
  
   cuenta:Cuenta=new Cuenta();
  
  add( )
  {
    console.log ( this.cuenta );
 
    this.service.add ( this.cuenta  ).subscribe ( data => 
      {
        Swal.fire({
           icon: 'success',
          title: 'Cuenta agregada correctamente',
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
