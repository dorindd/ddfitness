import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectdayRoutingModule } from './selectday-routing.module';

import { MondayComponent } from './monday/monday.component';
import { TuesdayComponent } from './tuesday/tuesday.component';
import { WednesdayComponent } from './wednesday/wednesday.component';
import { ThursdayComponent } from './thursday/thursday.component';
import { FridayComponent } from './friday/friday.component';
import { SaturdayComponent } from './saturday/saturday.component';
import { SundayComponent } from './sunday/sunday.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule} from '@angular/forms';
import { DataModule } from '../data/data.module';
import { HeaderModule } from '../header/header.module';


import { FooterModule } from '../footer/footer.module';
import { TextModule } from '../text/text.module';
import { TexttwoModule } from '../texttwo/texttwo.module';
import { MotivatedModule } from '../motivated/motivated.module';

import { RouterModule } from '@angular/router';












@NgModule({
  declarations: [
    MondayComponent,
    TuesdayComponent,
    WednesdayComponent,
    ThursdayComponent,
    FridayComponent,
    SaturdayComponent,
    SundayComponent,





  ],
  imports: [
    CommonModule,
    SelectdayRoutingModule,
    DragDropModule,
    MatNativeDateModule,
    FormsModule,
    DataModule,
    HeaderModule,


   FormsModule,

   FooterModule,
   TextModule,
   TexttwoModule,
   MotivatedModule,
   RouterModule





  ],


})
export class SelectdayModule {



}
