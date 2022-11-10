import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteModule } from './route.module/route.module';
import { BaseComponent } from './pages/base.component/base.component';
import { LoginComponent } from './pages/login.component/login.component';
import { RegistrationComponent } from './pages/registration.component/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeComponent } from './pages/employe.component/employe.component';
import { DetailEmployeComponent } from './pages/detail-employe.component/detail-employe.component';
import { MomentModule } from 'ngx-moment';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';

@NgModule({
  imports: [
    CommonModule,
    RouteModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    NgHeroiconsModule,
  ],
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
