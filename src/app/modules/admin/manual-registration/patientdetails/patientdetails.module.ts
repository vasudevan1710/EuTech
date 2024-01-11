import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientdetailsComponent } from './patientdetails.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MaterialModule } from 'app/modules/admin/material/material.module';



const routes: Route[] = [
  {
      path     : '',
      component: PatientdetailsComponent
  }
];

@NgModule({
  declarations: [
      PatientdetailsComponent
  ],
  imports     : [
      RouterModule.forChild(routes),
      CommonModule,SharedModule,MaterialModule,NgxMaterialTimepickerModule
  ]
 
})
export class patientdetailsModule { }