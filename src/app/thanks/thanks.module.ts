import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThanksRoutingModule } from './thanks-routing.module';
import { TanksyouComponent } from './tanksyou/tanksyou.component';


@NgModule({
  declarations: [
    TanksyouComponent
  ],
  imports: [
    CommonModule,
    ThanksRoutingModule
  ],
  exports: [TanksyouComponent]
})
export class ThanksModule { }
