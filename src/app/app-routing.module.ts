import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './modules/shared/shared_components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'clinic',
    loadChildren: './modules/clinic/clinic.module#ClinicModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'clinic'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
