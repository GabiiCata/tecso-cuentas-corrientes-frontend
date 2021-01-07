import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
  import Swal from 'sweetalert2';
 import { Location } from '@angular/common'
 import { Movimiento } from '../model/Movimiento';
import { MovementServiceService } from 'src/app/Service/Movimientos/movement-service.service';
 @Component({
  selector: 'app-list-mv',
  templateUrl: './list-mv.component.html',
  styleUrls: ['./list-mv.component.css']
})
export class ListMvComponent implements OnInit {

  movements: Movimiento[];
  
  constructor(
    private service : MovementServiceService ,  
    private router : Router,
    private location : Location) { 
  }

  idAccount = localStorage.getItem('id');
  ngOnInit() {
 
    this.list();
 
   }
 
   list(){
     this.service.getMovements( this.idAccount ).subscribe(data=>
       {
          this.movements = data;
          localStorage.setItem ( 'accountNumber' , this.idAccount );          
       }
     )
   }
   
   add()
   {
     this.router.navigate(['agregar-movimiento']);
   }
 
   back () 
   {
     this.location.back();
   }

 

}
