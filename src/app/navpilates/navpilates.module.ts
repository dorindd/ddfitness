import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavcpilatesComponent } from './navcpilates/navcpilates.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    NavcpilatesComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ]
  ,exports:[NavcpilatesComponent]
})
export class NavpilatesModule { }
