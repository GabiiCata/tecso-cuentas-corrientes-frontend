import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import Swal from 'sweetalert2';
 import { Location } from '@angular/common'
import { AccountServiceService } from 'src/app/Service/Cuenta/account-service.service';
import { Cuenta } from '../model/Cuenta';

@Component({
  selector: 'app-edit-cuenta',
  templateUrl: './edit-cuenta.component.html',
  styleUrls: ['./edit-cuenta.component.css']
})
export class EditCuentaComponent implements OnInit {

  cuenta: Cuenta = new Cuenta();


  constructor(
    private router: Router, 
    private service: AccountServiceService , 
    private location: Location) {

  }
  
  
  ngOnInit() {
    this.getLegalPerson();
  }

  getLegalPerson() {
    let id = localStorage.getItem('id');
    console.log ( id );
    this.service.getById(id)
      .subscribe(data => {
        this.cuenta = data ;
      });
  }

  edit(account: Cuenta) {
    this.service.edit(account)
      .subscribe(data => {
        this.cuenta = data ;
        Swal.fire(
          'Actualzado!',
          'Cuenta ' + account.accountNumber + ' fue actualizado con éxito.',
          'success'
        )
        this.location.back();
      })
  }

  back () 
  {
    this.location.back();
  }

}
