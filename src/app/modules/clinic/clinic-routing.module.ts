import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { DoctorComponent } from './doctor/doctor.component';

import { PageNotFoundComponent } from '../shared/shared_components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'doctor',
    component: DoctorComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicRoutingModule { }
