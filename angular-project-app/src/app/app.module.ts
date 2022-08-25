import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginpageComponent } from './Components/loginpage/loginpage.component';
// import { EmployeeDashboardPageComponent } from './Components/employee-dashboard-page/employee-dashboard-page.component';
// import { CreateEmployeeScreenPageComponent } from './Components/create-employee-screen-page/create-employee-screen-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './Components/Guards/auth.guard';
// import { HomepageComponent } from './Components/homepage/homepage.component';

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
