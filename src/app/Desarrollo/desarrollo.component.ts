import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desarrollo',
  templateUrl: './desarrollo.component.html',
  styleUrls: ['./desarrollo.component.css']
})
export class DesarrolloComponent implements OnInit {

  title = 'titulares-cuentas-corrientes';

  constructor ( private router : Router){}

  list(){
     this.router.navigate(['listar-personas-juridicas']);
  }

  add(){
     this.router.navigate(['agregar-personas-juridicas']);
  }

  ngOnInit() {
  }

}
