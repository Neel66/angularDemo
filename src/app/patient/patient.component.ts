import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';  // Import MatDialog
import {CreatePatientComponent} from './create-patient/create-patient.component';
import { Patient } from '../constants/constant';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})

export class PatientComponent {
  
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
  patients: Patient[] = [ ]

  constructor(public dialog: MatDialog) {}

  editRow(patient : Object) {
    const dialogRef = this.dialog.open(CreatePatientComponent, {
      width: '60%',
      data : patient
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.patients = this.patients.map(patient => 
          patient.id === result.id ? result : patient
        );   
      }
    });
  }
  createPatient(){
    const dialogRef = this.dialog.open(CreatePatientComponent, {
      width: '60%',  // Set the modal size
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.patients = [...this.patients, result];
      }
    });
  }
}
