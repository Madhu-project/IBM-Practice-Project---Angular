import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoutpageRoutingModule } from './logoutpage-routing.module';
import { LogoutpageComponent } from './logoutpage.component';

@NgModule({
  declarations: [LogoutpageComponent],
  imports: [CommonModule, LogoutpageRoutingModule],
})
export class LogoutpageModule {}
