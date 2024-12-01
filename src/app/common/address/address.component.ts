import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COUNTRIES, STATES } from '../../constants/constant';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent {
  form: FormGroup;
  countries: string[] = COUNTRIES;
  states: string[] = STATES;
  @Input() editData: any; // Input data from the parent component
  @Input() role: any;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      name: ['', Validators.required],
      registrationNumber: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      id : Math.floor(Math.random() * 1000) + 1
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
    } else {
      console.log('Form Invalid');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editData'] && this.editData) {
      this.form.patchValue(this.editData); // Patch the form with the passed data
    }
    console.log('this.role :>> ', this.role);

    if (this.role === 'patient') {
      this.form?.get('firstName')?.setValidators(Validators.required);
      this.form?.get('lastName')?.setValidators(Validators.required);
      this.form?.get('name')?.clearValidators();
      this.form?.get('registrationNumber')?.clearValidators();
    } else if (this.role === 'doctor') {
      this.form?.get('name')?.setValidators(Validators.required);
      this.form?.get('registrationNumber')?.setValidators([
        Validators.required,
        Validators.pattern(/^\d+$/)
      ]);
      this.form?.get('firstName')?.clearValidators();
      this.form?.get('lastName')?.clearValidators();
    }
  }
}
