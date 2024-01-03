import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AppoinmentsComponent } from './appoinments.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from 'app/shared/shared.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';



const routes: Route[] = [
  {
      path     : '',
      component: AppoinmentsComponent
  }
];

@NgModule({
  declarations: [
    AppoinmentsComponent
  ],
  imports     : [
      RouterModule.forChild(routes),
      CommonModule,SharedModule,MaterialModule,NgxMaterialTimepickerModule
  ]
 
})
export class AppoinmentsModule { }
