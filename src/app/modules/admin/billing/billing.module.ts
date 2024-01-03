import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { BillingComponent } from './billing.component';



const routes: Route[] = [
  {
      path     : '',
      component: BillingComponent
  }
];

@NgModule({
  declarations: [
    BillingComponent
  ],
  imports     : [
      RouterModule.forChild(routes)
  ]
 
})
export class BillingModule { }
