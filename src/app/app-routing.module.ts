import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { 
    path: 'patient', 
    loadChildren: () => import('./patient/patient.module').then((m) => m.PatientModule)
  },
  { 
    path: 'doctor', 
    loadChildren: () => import('./doctor/doctor.module').then((m) => m.DoctorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Only call forRoot in the root module
  exports: [RouterModule]
})
export class AppRoutingModule { }
