import { FormRegister } from './form';
import { FormBuilder } from '@angular/forms';

describe('Forms', () => {
  let component: FormRegister;

  beforeEach( () => {
    component = new FormRegister(new FormBuilder);
  });

  it('Should create form with two fiels (Email and password)', () => {

    expect(  component.form.contains('email') ).toBeTruthy();
    expect(  component.form.contains('password') ).toBeTruthy();

  });

  it('Should require email', () => {
    const control = component.form.get('email');
    control.setValue('');

    expect( control.valid ).toBeFalsy();
  });

  it('Should have valid email', () => {
    const control = component.form.get('email');
    control.setValue('didier@mail.com');

    console.log('control valid', control.valid);

    expect( control.valid ).toBeTruthy();
  });

});
