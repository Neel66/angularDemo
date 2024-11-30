import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';  // Import MatDialog
import { Patient } from '../constants/constant';
import {CreateDoctorComponent} from './create-doctor/create-doctor.component';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {
  displayedColumns: string[] = [
    'firstName',
    'middleName',
    'lastName',
    'address1',
    'address2',
    'city',
    'state',
    'country',
    'actions',
  ];
  doctors: Patient[] = [ ]
  isEdit : Boolean = false;
  constructor(public dialog: MatDialog) {}

  editRow(patient : Object) {
    const dialogRef = this.dialog.open(CreateDoctorComponent, {
      width: '60%',
      data : patient
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.doctors = this.doctors.map(doctor => 
          doctor.id === result.id ? result : doctor
        );   
      }
    });
  }
  createDoctor(){
    const dialogRef = this.dialog.open(CreateDoctorComponent, {
      width: '60%',  // Set the modal size
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.doctors = [...this.doctors, result];
      }
    });
  }
}
