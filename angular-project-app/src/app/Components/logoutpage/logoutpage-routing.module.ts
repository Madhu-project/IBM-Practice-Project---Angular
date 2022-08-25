import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutpageComponent } from './logoutpage.component';
const routes: Routes = [
  {
    path: '',
    component: LogoutpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogoutpageRoutingModule {}
