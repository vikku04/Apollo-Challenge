// Angular Related
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ClinicRoutingModule } from './clinic-routing.module';

import { UserComponent } from './user/user.component';
import { DoctorComponent } from './doctor/doctor.component';
import { LoginModalComponent } from './doctor/login-modal/login-modal.component';

import { PatientModalComponent } from './user/patient-modal/patient-modal.component';



@NgModule({
  declarations: [UserComponent, DoctorComponent, PatientModalComponent, LoginModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClinicRoutingModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserComponent,
    DoctorComponent
  ],
  entryComponents: [LoginModalComponent, PatientModalComponent],
  providers: [DatePipe]
})
export class ClinicModule { }
