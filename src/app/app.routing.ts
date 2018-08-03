import { HomeComponent } from './views/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AddPatientComponent } from './views/patients';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboards/v1' },
  {
    path: 'dashboards', children:
      [
        { path: 'v1', component: HomeComponent },
      ]
  },
  {
    path: 'patients',children: 
    [
      {path:'add', component: AddPatientComponent}
    ]
  }
];
// export const AppRoutes = RouterModule.forChild(routes);
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });