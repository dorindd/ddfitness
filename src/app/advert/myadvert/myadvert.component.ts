
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-myadvert',
  templateUrl: './myadvert.component.html',
  styleUrls: ['./myadvert.component.scss'],
})
export class MyadvertComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  toBmi() {
    document.getElementById("bmi")?.scrollIntoView({ behavior: "smooth" });
  }
  toSchedule() {
    document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" });
  }
  toClass() {
    document.getElementById("homeclass")?.scrollIntoView({ behavior: "smooth" });
  }
}