import { Location } from '@angular/common';
import { TestBed, TestBedStatic } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BaseComponent } from '../pages/base.component/base.component';
import { LoginComponent } from '../pages/login.component/login.component';
import { RegistrationComponent } from '../pages/registration.component/registration.component';
import { routes } from './route.module';

describe('RouteModule', () => {
  let container: TestBedStatic;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    container = await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [BaseComponent, LoginComponent, RegistrationComponent],
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
  });

  it('page should at accounts/login', () => {
    router.navigate(['/accounts/login']).then(() => {
      expect(location.path()).toEqual('/accounts/login');
    });
  });

  afterEach(async () => {
    await jest.clearAllMocks();
  });
});
