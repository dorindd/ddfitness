import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-firstnavbar',
  templateUrl: './firstnavbar.component.html',
  styleUrls: ['./firstnavbar.component.scss']
})
export class FirstnavbarComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    $(document).ready(function () {
      $('.burger-nav').on('click', function () {
        $('header nav ul').toggleClass('open');
      });
    });
  }
  getBmi() {
    document.getElementById("bmi")?.scrollIntoView({ behavior: "smooth" })
  }
}
