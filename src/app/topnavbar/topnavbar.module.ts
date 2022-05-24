import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstnavbarComponent } from './firstnavbar/firstnavbar.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    FirstnavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [FirstnavbarComponent]
})
export class TopnavbarModule { }
