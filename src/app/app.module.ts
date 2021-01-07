import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './MainComponents/navbar/navbar.component';
import { ModeladoComponent } from './Modelado/modelado.component';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListPjComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaJuridica/list-pj/list-pj.component';
import { AddPjComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaJuridica/add-pj/add-pj.component';
import { EditPjComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaJuridica/edit-pj/edit-pj.component';
import { AddPfComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaFisica/add-pf/add-pf.component';
import { EditPfComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaFisica/edit-pf/edit-pf.component';
import { ListPfComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaFisica/list-pf/list-pf.component';
import { AddCuentaComponent } from './Desarrollo/Ej2-CuentasCorrientes/Cuenta/add-cuenta/add-cuenta.component';
import { ListCuentaComponent } from './Desarrollo/Ej2-CuentasCorrientes/Cuenta/list-cuenta/list-cuenta.component';
import { EditCuentaComponent } from './Desarrollo/Ej2-CuentasCorrientes/Cuenta/edit-cuenta/edit-cuenta.component';
import { AddMvComponent } from './Desarrollo/Ej2-CuentasCorrientes/Movimientos/add-mv/add-mv.component';
import { ListMvComponent } from './Desarrollo/Ej2-CuentasCorrientes/Movimientos/list-mv/list-mv.component';
import { DesarrolloComponent } from './Desarrollo/desarrollo.component';
import { DashboardComponent } from './MainComponents/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModeladoComponent,
    ListPjComponent,
    AddPjComponent,
    EditPjComponent,
    AddPfComponent,
    EditPfComponent,
    ListPfComponent,
    AddCuentaComponent,
    ListCuentaComponent,
    EditCuentaComponent,
    AddMvComponent,
    ListMvComponent ,
    DesarrolloComponent,
     DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     BrowserAnimationsModule  ,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
