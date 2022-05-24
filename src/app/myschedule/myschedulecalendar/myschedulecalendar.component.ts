import { Component, OnInit } from '@angular/core';
import {View} from '@syncfusion/ej2-angular-schedule';
@Component({
  selector: 'app-myschedulecalendar',
  templateUrl: './myschedulecalendar.component.html',
  styleUrls: ['./myschedulecalendar.component.scss']
})
export class MyschedulecalendarComponent implements OnInit {
public setView:View='Month';
 public firstDayOfWeek: number = 1;
  constructor() { }
  ngOnInit(): void {
  }
}
