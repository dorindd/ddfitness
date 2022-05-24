import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TxtmotivatedComponent } from './txtmotivated/txtmotivated.component';



@NgModule({
  declarations: [
    TxtmotivatedComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[TxtmotivatedComponent],
})
export class MotivatedModule { }
