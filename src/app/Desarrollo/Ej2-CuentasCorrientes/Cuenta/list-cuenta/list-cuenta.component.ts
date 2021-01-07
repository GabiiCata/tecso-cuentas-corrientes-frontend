import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
  import Swal from 'sweetalert2';
 import { Location } from '@angular/common'
import { AccountServiceService } from 'src/app/Service/Cuenta/account-service.service';
import { Cuenta } from '../model/Cuenta';
@Component({
  selector: 'app-list-cuenta',
  templateUrl: './list-cuenta.component.html',
  styleUrls: ['./list-cuenta.component.css']
})
export class ListCuentaComponent implements OnInit {

  accounts: Cuenta[];
  
  constructor(
    private service : AccountServiceService ,  
    private router : Router,
    private location : Location) { 
  }

  ngOnInit() {

    this.list();
 
   }
 
   list(){
     this.service.getAccounts().subscribe(data=>
       {
          this.accounts = data;
       }
     )
   }
   
   edit( id )
   {
     console.log ( id )
     localStorage.setItem('id',id ) ;
     this.router.navigate(['editar-cuenta']);
   }
 
   add()
   {
     this.router.navigate(['agregar-cuenta']);
   }
 
   delete( cuenta : Cuenta )
   {
     Swal.fire({
       title: 'Eliminar cuenta ' + cuenta.accountNumber,
       text: "Esta accion es irrevesible.",
       icon: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#d33',
       cancelButtonColor: ' #F0000',
       confirmButtonText: 'Eliminar',
       cancelButtonText : 'Cancelar'
     }).then((result) => {
       if (result.isConfirmed) {
         console.log ( cuenta )
         this.service.delete ( cuenta.id ).subscribe(data => {
           this.accounts = this.accounts.filter ( p=>p!==cuenta);
           Swal.fire(
             'Elimnado',
             'Cuenta ' + cuenta.accountNumber + ' fue eliminada con éxito.',
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

   movements ( id )
   {
     localStorage.setItem ( 'id' , id );
     this.router.navigate ( [ 'listar-movimientos' ]);
   }

}
