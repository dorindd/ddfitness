import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  constructor(private route: Router) { }
  ngOnInit(): void {
  }
  getData(value: any) {
    if (value) {
      this.route.navigate([value]);
    }
  }
}
