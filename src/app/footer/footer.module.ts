import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitfooterComponent } from './fitfooter/fitfooter.component';
import { FormModule } from '../form/form.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FitfooterComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    RouterModule
  ],
  exports: [FitfooterComponent]

})
export class FooterModule { }
