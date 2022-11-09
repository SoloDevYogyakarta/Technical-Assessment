import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { loginValidationDto } from '@nov9-technical-assessment/accounts';

@Component({
  selector: 'login-component',
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
  title = 'LoginComponent';
  form: FormGroup = loginValidationDto;

  constructor(private router: Router) {}

  onNavigate(path: string) {
    this.router.navigateByUrl(path);
  }

  submit() {}

  ngOnInit(): void {
    this.form = loginValidationDto;
  }
}
