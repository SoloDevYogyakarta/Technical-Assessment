import { FormGroup, FormControl, Validators } from '@angular/forms';

export const employeValidationDto = new FormGroup({
  username: new FormControl('', Validators.required),
  firstName: new FormControl('', Validators.required),
  lastName: new FormControl('', Validators.required),
  email: new FormControl('', Validators.email),
  birthDate: new FormControl(
    new Date().toISOString().slice(0, -1),
    Validators.required
  ),
  status: new FormControl('', Validators.required),
  group: new FormControl('', Validators.required),
  description: new FormControl('', Validators.required),
});
