import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddressComponent} from './address/address.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    AddressComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    AddressComponent
  ]
})
export class CommonSharedModule { }
