import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyschedulecalendarComponent } from './myschedulecalendar/myschedulecalendar.component';
import { RecurrenceEditorModule, ScheduleModule ,DayService,WeekService, WorkWeekService, MonthService, MonthAgendaService,} from '@syncfusion/ej2-angular-schedule';


@NgModule({
  declarations: [
    MyschedulecalendarComponent
  ],
  imports: [
    CommonModule,
     ScheduleModule,
    RecurrenceEditorModule
  ],
  exports:[MyschedulecalendarComponent],
   providers: [ DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService,],

})
export class MyscheduleModule { }
