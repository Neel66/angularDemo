import { Component, Inject, ViewChild  } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {AddressComponent} from 'src/app/common/address/address.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ROLE } from 'src/app/constants/constant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent {
  form: FormGroup;
  @ViewChild(AddressComponent) addressComponent!: AddressComponent;  // Get reference to app-address component
  error = '';
  editPatientData = {};
  userRole = ROLE.patient;

  constructor(public dialogRef: MatDialogRef<CreatePatientComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      id : Math.floor(Math.random() * 1000) + 1
    });
    if(data){
      this.editPatientData = data;
      this.form.patchValue(data);
    }
  }

  closeModel(){
    this.dialogRef.close();
  }
  onSubmit(){
    if (this.form.invalid) {
      // Mark all controls in the form group as touched to display errors
      this.markFormGroupTouched(this.form);
      return;
    }
    const formData = this.form.value;
    this.dialogRef.close(formData);
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control); // Recursively mark nested form groups
      } else {
        control.markAsTouched();
      }
    });
  }
}
