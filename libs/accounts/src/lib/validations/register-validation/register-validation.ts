import { FormGroup, FormControl, Validators } from '@angular/forms';

export const registerValidationDto = new FormGroup({
  fullname: new FormControl(),
  email: new FormControl('', Validators.email),
  password: new FormControl('', Validators.minLength(1)),
  confirmation: new FormControl('', Validators.minLength(1)),
});
