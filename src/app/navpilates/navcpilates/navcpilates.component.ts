import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-navcpilates',
  templateUrl: './navcpilates.component.html',
  styleUrls: ['./navcpilates.component.scss']
})
export class NavcpilatesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    $(document).ready(function () {
      $('.burger-nav').on('click', function () {
        $('header nav ul').toggleClass('open');
      });
    });
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
