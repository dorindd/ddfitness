import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MytextComponent } from './mytext/mytext.component';




@NgModule({
  declarations: [
    MytextComponent
  ],
  imports: [
    CommonModule,


  ],
  exports:[MytextComponent]
})
export class TextModule { }
