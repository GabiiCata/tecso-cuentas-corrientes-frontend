import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesarrolloComponent } from './Desarrollo/desarrollo.component';
import { AddPjComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaJuridica/add-pj/add-pj.component';
import { DeletePjComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaJuridica/delete-pj/delete-pj.component';
import { EditPjComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaJuridica/edit-pj/edit-pj.component';
import { ListPjComponent } from './Desarrollo/Ej1-TitularesCuentaCorriente/PersonaJuridica/list-pj/list-pj.component';
import { DashboardComponent } from './MainComponents/dashboard/dashboard.component';
import { LandPageComponent } from './MainComponents/landing-page/land-page.component';
import { ModeladoComponent } from './Modelado/modelado.component';

const routes: Routes = [
  {path:'', component: DashboardComponent}, 
  {path:'landing-page', component: LandPageComponent}, 
  {path:'listar-personas-juridicas', component: ListPjComponent},
  {path:'agregar-personas-juridicas', component: AddPjComponent},
  {path:'editar-personas-juridicas', component: EditPjComponent},
  {path:'eliminar-personas-juridicas', component: DeletePjComponent},
  {path:'desarrollo', component: DesarrolloComponent}, 
  {path:'modelado', component: ModeladoComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
