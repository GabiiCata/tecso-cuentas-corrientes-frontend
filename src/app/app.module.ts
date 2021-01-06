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
import { DeletePjComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaJuridica/delete-pj/delete-pj.component';
import { AddPfComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaFisica/add-pf/add-pf.component';
import { EditPfComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaFisica/edit-pf/edit-pf.component';
import { ListPfComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaFisica/list-pf/list-pf.component';
import { DeletePfComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaFisica/delete-pf/delete-pf.component';
import { AddCuentaComponent } from './Desarrollo/Ej2-CuentasCorrientes/Cuenta/add-cuenta/add-cuenta.component';
import { ListCuentaComponent } from './Desarrollo/Ej2-CuentasCorrientes/Cuenta/list-cuenta/list-cuenta.component';
import { EditCuentaComponent } from './Desarrollo/Ej2-CuentasCorrientes/Cuenta/edit-cuenta/edit-cuenta.component';
import { DeleteCuentaComponent } from './Desarrollo/Ej2-CuentasCorrientes/Cuenta/delete-cuenta/delete-cuenta.component';
import { AddMvComponent } from './Desarrollo/Ej2-CuentasCorrientes/Movimientos/add-mv/add-mv.component';
import { ListMvComponent } from './Desarrollo/Ej2-CuentasCorrientes/Movimientos/list-mv/list-mv.component';
import { DesarrolloComponent } from './Desarrollo/desarrollo.component';
 import { LandPageComponent } from './MainComponents/landing-page/land-page.component';
import { DashboardComponent } from './MainComponents/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModeladoComponent,
    ListPjComponent,
    AddPjComponent,
    EditPjComponent,
    DeletePjComponent,
    AddPfComponent,
    EditPfComponent,
    ListPfComponent,
    DeletePfComponent,
    AddCuentaComponent,
    ListCuentaComponent,
    EditCuentaComponent,
    DeleteCuentaComponent,
    AddMvComponent,
    ListMvComponent ,
    DesarrolloComponent,
     LandPageComponent,
     DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     BrowserAnimationsModule  
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
