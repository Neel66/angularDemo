import { Component, Inject, ViewChild  } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {AddressComponent} from 'src/app/common/address/address.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.scss']
})
export class CreateDoctorComponent {
  @ViewChild(AddressComponent) addressComponent!: AddressComponent;
  error = '';
  editDoctorData = {};
  
  constructor(public dialogRef: MatDialogRef<CreateDoctorComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    if(data){
      this.editDoctorData = data;
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
