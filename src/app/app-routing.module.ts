import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesarrolloComponent } from './Desarrollo/desarrollo.component';
import { AddPfComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaFisica/add-pf/add-pf.component';
import { DeletePfComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaFisica/delete-pf/delete-pf.component';
import { EditPfComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaFisica/edit-pf/edit-pf.component';
import { ListPfComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaFisica/list-pf/list-pf.component';
import { AddPjComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaJuridica/add-pj/add-pj.component';
import { DeletePjComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaJuridica/delete-pj/delete-pj.component';
import { EditPjComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaJuridica/edit-pj/edit-pj.component';
import { ListPjComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaJuridica/list-pj/list-pj.component';
import { AddCuentaComponent } from './Desarrollo/Ej2-CuentasCorrientes/Cuenta/add-cuenta/add-cuenta.component';
import { DeleteCuentaComponent } from './Desarrollo/Ej2-CuentasCorrientes/Cuenta/delete-cuenta/delete-cuenta.component';
import { EditCuentaComponent } from './Desarrollo/Ej2-CuentasCorrientes/Cuenta/edit-cuenta/edit-cuenta.component';
import { ListCuentaComponent } from './Desarrollo/Ej2-CuentasCorrientes/Cuenta/list-cuenta/list-cuenta.component';
import { AddMvComponent } from './Desarrollo/Ej2-CuentasCorrientes/Movimientos/add-mv/add-mv.component';
import { ListMvComponent } from './Desarrollo/Ej2-CuentasCorrientes/Movimientos/list-mv/list-mv.component';
import { DashboardComponent } from './MainComponents/dashboard/dashboard.component';
import { LandPageComponent } from './MainComponents/landing-page/land-page.component';
import { ModeladoComponent } from './Modelado/modelado.component';

const routes: Routes = [
  {path:'', component: DashboardComponent}, 
  {path:'landing-page', component: LandPageComponent}, 
  {path:'desarrollo', component: DesarrolloComponent}, 
  {path:'modelado', component: ModeladoComponent}, 

  {path:'listar-personas-juridicas', component: ListPjComponent},
  {path:'agregar-persona-juridica', component: AddPjComponent},
  {path:'editar-persona-juridica', component: EditPjComponent},
  {path:'eliminar-persona-juridica', component: DeletePjComponent},

  {path:'listar-personas-fisicas', component: ListPfComponent},
  {path:'agregar-persona-fisica', component: AddPfComponent},
  {path:'editar-persona-fisica', component: EditPfComponent},
  {path:'eliminar-persona-fisica', component: DeletePfComponent},

  {path:'listar-cuentas', component: ListCuentaComponent},
  {path:'agregar-cuenta', component: AddCuentaComponent},
  {path:'editar-cuenta', component: EditCuentaComponent},
  {path:'eliminar-cuenta', component: DeleteCuentaComponent},

  {path:'listar-movimientos', component: ListMvComponent},
  {path:'agregar-movimiento', component: AddMvComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
