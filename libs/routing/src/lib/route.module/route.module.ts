import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BaseComponent } from '../pages/base.component/base.component';
import { DetailEmployeComponent } from '../pages/detail-employe.component/detail-employe.component';
import { EmployeComponent } from '../pages/employe.component/employe.component';
import { LoginComponent } from '../pages/login.component/login.component';
import { RegistrationComponent } from '../pages/registration.component/registration.component';
import { Authorized, Public } from '../services/authorized/authorized';

export const routes: Route[] = [
  {
    path: '',
    component: BaseComponent,
  },
  {
    path: 'accounts',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [Public],
      },
      {
        path: 'registration',
        component: RegistrationComponent,
        canActivate: [Public],
      },
    ],
  },
  {
    path: 'employe',
    children: [
      {
        path: '',
        component: DetailEmployeComponent,
        canActivate: [Authorized],
      },
      {
        path: 'list',
        component: EmployeComponent,
        canActivate: [Authorized],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouteModule {}
