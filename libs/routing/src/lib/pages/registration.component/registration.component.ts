import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'registration-component',
  templateUrl: 'registration.component.html',
})
export class RegistrationComponent {
  title = 'RegistrationComponent';

  @Input() fullname = '';
  @Input() email = '';
  @Input() password = '';
  @Input() confirmation = '';

  constructor(private router: Router) {}

  onNavigate(path: string) {
    this.router.navigateByUrl(path);
  }

  submit() {}
}
