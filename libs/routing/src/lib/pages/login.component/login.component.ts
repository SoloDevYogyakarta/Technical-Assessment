import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { loginValidationDto } from '@nov9-technical-assessment/accounts';
import { NotificationService } from '@nov9-technical-assessment/shared/ui';

@Component({
  selector: 'login-component',
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
  title = 'LoginComponent';
  form: FormGroup = loginValidationDto;

  constructor(
    private router: Router,
    private notification: NotificationService
  ) {}

  onNavigate(path: string) {
    this.router.navigateByUrl(path);
  }

  submit() {
    if (
      this.form.get('email')?.value === 'technical@admin.com' &&
      this.form.get('password')?.value === 'admin'
    ) {
      localStorage.setItem('token', 'token');
      window.location.reload();
    } else
      this.notification.state.next({
        open: 1,
        title: 'Failed',
        message: 'Inccorect username or password, please check again',
        status: false,
      });
  }

  ngOnInit(): void {
    this.form = loginValidationDto;
  }
}
