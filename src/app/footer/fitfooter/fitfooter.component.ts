import { Component, OnInit } from '@angular/core';
@Component({
   selector: 'app-fitfooter',
   templateUrl: './fitfooter.component.html',
   styleUrls: ['./fitfooter.component.scss']
})
export class FitfooterComponent implements OnInit {
   constructor() { }
   ngOnInit(): void {
   }
   getBmi() {
      document.getElementById("bmi")?.scrollIntoView({ behavior: "smooth" })
   }
   getScheduler() {
      document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" })
   }
   getPilates() {
      document.getElementById("pilates")?.scrollIntoView({ behavior: "smooth" })
   }
   getHomeworkout() {
      document.getElementById("workHome")?.scrollIntoView({ behavior: "smooth" })
   }
   getWeightsworkout() {
      document.getElementById("wheighs")?.scrollIntoView({ behavior: "smooth" })
   }
}
