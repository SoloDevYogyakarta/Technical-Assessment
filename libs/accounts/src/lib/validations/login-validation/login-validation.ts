import { FormGroup, FormControl, Validators } from '@angular/forms';

export const loginValidationDto = new FormGroup({
  email: new FormControl('', Validators.email),
  password: new FormControl('', Validators.minLength(1)),
});
