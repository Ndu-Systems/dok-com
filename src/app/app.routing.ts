
import { HomeComponent } from './views/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AddPatientComponent, PatientsComponent } from './views/patients';
import { LoginComponent } from './views/accounts';
import { AuthGaurd } from './shared/authentication';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'accounts' },
  {
    path: 'accounts', children:
      [
        { path: '', component: LoginComponent },
        { path: 'login', component: LoginComponent },
      ]
  },
  {
    path: 'dashboard', children:
      [
        { path: '', component: HomeComponent, canActivate: [AuthGaurd] },
      ]
  },
  {
    path: 'patients', children:
      [
        { path: '', component: PatientsComponent, canActivate: [AuthGaurd] },
        { path: 'add', component: AddPatientComponent, canActivate: [AuthGaurd] }
      ]
  }
];
// export const AppRoutes = RouterModule.forChild(routes);
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });