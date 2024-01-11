import { NgModule } from '@angular/core';

import { Route, RouterModule } from '@angular/router';
import { ManualRegistrationComponent } from './manual-registration.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from 'app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { patientdetailsModule } from './patientdetails/patientdetails.module';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';


const routes: Route[] = [
  
      {path     : '',component: ManualRegistrationComponent},
      { path: 'add', component: PatientdetailsComponent },
      { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
      ManualRegistrationComponent
  ],
  imports     : [
      RouterModule.forChild(routes),
      CommonModule,SharedModule,MaterialModule,NgxMaterialTimepickerModule, 
  ]
 
})
export class ManualRegistrationModule { }
