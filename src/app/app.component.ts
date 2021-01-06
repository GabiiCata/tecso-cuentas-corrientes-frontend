import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'titulares-cuentas-corrientes';

  constructor ( private router : Router){}

  list(){
     this.router.navigate(['listar-personas-juridicas']);
  }

  add(){
     this.router.navigate(['agregar-personas-juridicas']);
  }
}
