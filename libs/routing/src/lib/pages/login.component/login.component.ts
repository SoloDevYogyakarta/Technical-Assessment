import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login-component',
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  title = 'LoginComponent';

  @Input() email = '';
  emailInvalid = false;
  @Input() password = '';
  passwordInvalid = false;

  constructor(private router: Router) {}

  onNavigate(path: string) {
    this.router.navigateByUrl(path);
  }

  submit() {
    if (this.email !== 'technical@admin.com' && this.password !== 'password') {
    } else {
    }
  }
}
