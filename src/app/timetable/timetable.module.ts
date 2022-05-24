import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { MyscheduleModule } from '../myschedule/myschedule.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    MyscheduleModule,
    RouterModule,
  
  ],
  exports: [CalendarComponent]
})
export class TimetableModule { }
