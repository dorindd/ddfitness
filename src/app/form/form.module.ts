import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormcontactComponent } from './formcontact/formcontact.component';


@NgModule({
  declarations: [
    FormcontactComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule
  ]
  ,exports:[FormcontactComponent]
})
export class FormModule { }
