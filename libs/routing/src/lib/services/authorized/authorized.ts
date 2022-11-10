import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Authorized implements CanActivate {
  constructor(private router: Router, private location: Location) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const Authorization = typeof localStorage.getItem('token') === 'string';
    return Authorization;
  }
}

@Injectable({
  providedIn: 'root',
})
export class Public implements CanActivate {
  constructor(private router: Router, private location: Location) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const Unauthorization = typeof localStorage.getItem('token') !== 'string';
    if (!Unauthorization) {
      if (this.location.path() === '') {
        this.router.navigateByUrl('/employe/list');
      }
    }
    return Unauthorization;
  }
}
