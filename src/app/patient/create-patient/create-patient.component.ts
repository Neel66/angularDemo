import { Component, Inject, ViewChild  } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {AddressComponent} from 'src/app/common/address/address.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ROLE } from 'src/app/constants/constant';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent {

  @ViewChild(AddressComponent) addressComponent!: AddressComponent;  // Get reference to app-address component
  error = '';
  editPatientData = {};
  userRole = ROLE.patient;

  constructor(public dialogRef: MatDialogRef<CreatePatientComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('this.role :>> ', this.userRole);
    if(data){
      this.editPatientData = data;
    }
  }

  closeModel(){
    this.dialogRef.close();
  }
  onSubmit(){
    if (this.addressComponent.form.valid) {
      const addressData = this.addressComponent.form.value;
      this.dialogRef.close(addressData);
    } else {
      this.error = "Please fill all the details!"
    }
  }
}
