import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BaseComponent } from '../pages/base.component/base.component';
import { LoginComponent } from '../pages/login.component/login.component';
import { RegistrationComponent } from '../pages/registration.component/registration.component';

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
      },
      {
        path: 'registration',
        component: RegistrationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouteModule {}
