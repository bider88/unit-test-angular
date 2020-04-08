import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class FormRegister {
  form: FormGroup;

  constructor( fb: FormBuilder ) {
    this.form = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }
}
