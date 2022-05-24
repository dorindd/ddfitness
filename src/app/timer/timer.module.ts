import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeworkoutComponent } from './timeworkout/timeworkout.component';
import { FormsModule } from '@angular/forms';
import { MinutesPipe } from './minutes.pipe';



@NgModule({
  declarations: [
    TimeworkoutComponent,
    MinutesPipe
  ],
  imports: [
    CommonModule,FormsModule,
  ],
  exports: [TimeworkoutComponent],
})
export class TimerModule { }
