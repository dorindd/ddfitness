import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyadvertComponent } from './myadvert/myadvert.component';



@NgModule({
  declarations: [
    MyadvertComponent
  ],
  imports: [
    CommonModule]
     ,
  exports:[MyadvertComponent]

})
export class AdvertModule { }
