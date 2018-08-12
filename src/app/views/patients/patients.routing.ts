import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { ListPatientsComponent } from './list-patients/list-patients.component';
 

const routes: Routes = [
  { 
    path: '', component : ListPatientsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PatientsRoutes {}
