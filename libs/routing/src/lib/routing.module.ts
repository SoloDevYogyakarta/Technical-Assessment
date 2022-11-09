import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteModule } from './route.module/route.module';
import { BaseComponent } from './pages/base.component/base.component';
import { LoginComponent } from './pages/login.component/login.component';
import { RegistrationComponent } from './pages/registration.component/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeComponent } from './pages/employe.component/employe.component';
import { DetailEmployeComponent } from './pages/detail-employe.component/detail-employe.component';

@NgModule({
  imports: [CommonModule, RouteModule, FormsModule, ReactiveFormsModule],
  exports: [RouteModule],
  declarations: [
    BaseComponent,
    LoginComponent,
    RegistrationComponent,
    EmployeComponent,
    DetailEmployeComponent,
  ],
})
export class RoutingModule {}
