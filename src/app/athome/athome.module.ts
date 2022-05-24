import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitnesshomeComponent } from './fitnesshome/fitnesshome.component';
import { AllworkoutModule } from '../allworkout/allworkout.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FitnesshomeComponent
  ],
  imports: [
    CommonModule,
    AllworkoutModule,
    RouterModule
  ]
  ,exports:[FitnesshomeComponent]
})
export class AthomeModule { }
