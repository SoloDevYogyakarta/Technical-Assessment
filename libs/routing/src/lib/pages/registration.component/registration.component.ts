import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { registerValidationDto } from '@nov9-technical-assessment/accounts';
import { NotificationService } from '@nov9-technical-assessment/shared/ui';

@Component({
  selector: 'registration-component',
  templateUrl: 'registration.component.html',
})
export class RegistrationComponent implements OnInit {
  title = 'RegistrationComponent';
  form: FormGroup = registerValidationDto;

  constructor(
    private router: Router,
    private notification: NotificationService
  ) {}

  onNavigate(path: string) {
    this.router.navigateByUrl(path);
  }

  submit() {
    if (this.form.valid) {
      this.notification.state.next({
        open: 1,
        title: 'Success',
        message: 'Account has been created',
        status: true,
      });
      this.router.navigateByUrl('/accounts/login');
    }
  }

  ngOnInit(): void {
    this.form = registerValidationDto;
  }
}
