import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeScreenPageComponent } from './Components/create-employee-screen-page/create-employee-screen-page.component';
import { EmployeeDashboardPageComponent } from './Components/employee-dashboard-page/employee-dashboard-page.component';
import { AuthGuard } from './Components/Guards/auth.guard';

import { LoginpageComponent } from './Components/loginpage/loginpage.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
const routes: Routes = [
  {
    path: 'logoutpage',
    loadChildren: () =>
      import('./Components/logoutpage/logoutpage.module').then(
        (m) => m.LogoutpageModule
      ),
  },
  {
    path: 'loginpage',
    component: LoginpageComponent,
  },

  {
    path: 'employee-dashboard-page',
    component: EmployeeDashboardPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-employee-screen-page',
    component: CreateEmployeeScreenPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'navbar', component: NavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  LoginpageComponent,
  EmployeeDashboardPageComponent,
  CreateEmployeeScreenPageComponent,
  NavbarComponent,
];
