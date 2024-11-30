import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patient.component';
import {CommonSharedModule} from '../common/commonShared.module';
import {PatientRoutingModule} from './patient-routing.module';
import {SharedModule} from '../shared/shared.module';
import { CreatePatientComponent } from './create-patient/create-patient.component';

@NgModule({
  declarations: [
    PatientComponent,
    CreatePatientComponent
    ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    SharedModule,
    CommonSharedModule,
  ]
})
export class PatientModule { }
