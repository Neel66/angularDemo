import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyMaterialModule } from './material.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MyMaterialModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MyMaterialModule
    ]
})
export class SharedModule {
}
