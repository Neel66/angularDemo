import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import {CommonSharedModule} from '../common/commonShared.module';
import {DoctorRoutingModule} from './doctor.routing.module';
import {SharedModule} from '../shared/shared.module';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';

@NgModule({
  declarations: [
    DoctorComponent,
    CreateDoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    CommonSharedModule,
    SharedModule
  ]
})
export class DoctorModule { }
