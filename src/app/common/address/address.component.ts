import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
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
  @Input() editData: any = {}; // Input data from the parent component
  @Input() parentForm!: FormGroup; // Accept parent form from parent component
  @Output() addressValueChange = new EventEmitter<FormGroup>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required]
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
      this.form.patchValue(this.editData.address); // Patch the form with the passed data
    }
    if (changes['parentForm'] && this.parentForm) {
      this.parentForm.addControl('address', this.form);
    }
  }
}
