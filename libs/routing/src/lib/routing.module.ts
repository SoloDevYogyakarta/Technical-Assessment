import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteModule } from './route.module/route.module';
import { BaseComponent } from './pages/base.component/base.component';
import { LoginComponent } from './pages/login.component/login.component';
import { RegistrationComponent } from './pages/registration.component/registration.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouteModule, FormsModule],
  exports: [RouteModule],
  declarations: [BaseComponent, LoginComponent, RegistrationComponent],
})
export class RoutingModule {}
