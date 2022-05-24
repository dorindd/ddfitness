import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AllworkoutModule } from '../allworkout/allworkout.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,AllworkoutModule,RouterModule
  ],
  exports: [NavbarComponent]
})
export class HeaderModule { }
