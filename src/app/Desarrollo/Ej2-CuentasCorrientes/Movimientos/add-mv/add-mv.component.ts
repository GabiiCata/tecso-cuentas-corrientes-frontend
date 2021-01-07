import { Component, OnInit } from '@angular/core';
 import Swal from 'sweetalert2';
 import { Location } from '@angular/common'
 import { MovementServiceService } from 'src/app/Service/Movimientos/movement-service.service';
import { Movimiento } from '../model/Movimiento';
import { AccountServiceService } from 'src/app/Service/Cuenta/account-service.service';
import { Cuenta } from '../../Cuenta/model/Cuenta';
 @Component({
  selector: 'app-add-mv',
  templateUrl: './add-mv.component.html',
  styleUrls: ['./add-mv.component.css']
})
export class AddMvComponent implements OnInit {

  movement:Movimiento= new Movimiento();

  constructor(  
    private service: MovementServiceService , 
    private location: Location , 
    private accountService : AccountServiceService
    ) { 
    }

   add( )
   {
      console.log ( this.movement );
    
     this.service.add ( this.movement  ).subscribe ( data => 
       {
         Swal.fire({
            icon: 'success',
           title: 'Movimiento agregado correctamente',
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
     this.accountService.getById ( localStorage.getItem ( 'accountNumber' ) ).subscribe ( data => {
       let account : Cuenta = data;
       this.movement.originAccountNumber = account.accountNumber;
     })

     this.movement.originAccountNumber = parseInt ( localStorage.getItem ( 'id ') );
    }
 
    back () 
    {
      this.location.back();
    }
}
