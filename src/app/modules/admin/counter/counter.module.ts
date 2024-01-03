import { NgModule } from '@angular/core';

import { Route, RouterModule } from '@angular/router';
import { CounterComponent } from './counter.component';



const routes: Route[] = [
  {
      path     : '',
      component: CounterComponent
  }
];

@NgModule({
  declarations: [
      CounterComponent
  ],
  imports     : [
      RouterModule.forChild(routes)
  ]
 
})
export class CounterModule { }
