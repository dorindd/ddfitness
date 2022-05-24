import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeinfoRoutingModule } from './homeinfo-routing.module';
import { InfohomeComponent } from './infohome/infohome.component';

import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    InfohomeComponent
  ],
  imports: [
    CommonModule,
    HomeinfoRoutingModule,
HeaderModule,
    FooterModule

  ]
})
export class HomeinfoModule { }
