import { NgModule } from '@angular/core';

import { Route, RouterModule } from '@angular/router';
import { ManualRegistrationComponent } from './manual-registration.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from 'app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';


const routes: Route[] = [
  {
      path     : '',
      component: ManualRegistrationComponent
  }
];

@NgModule({
  declarations: [
      ManualRegistrationComponent
  ],
  imports     : [
      RouterModule.forChild(routes),
      CommonModule,SharedModule,MaterialModule,NgxMaterialTimepickerModule
  ]
 
})
export class ManualRegistrationModule { }
