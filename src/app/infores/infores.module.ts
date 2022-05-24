import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InforesRoutingModule } from './infores-routing.module';
import { InfoComponent } from './info/info.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    InforesRoutingModule,
    HeaderModule,
    FooterModule

  ],

})
export class InforesModule { }
