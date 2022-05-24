import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cursor: any;
  constructor() { }
  ngOnInit(): void {
    $('.menu-btn').click(function () {
      $('.menu-btn').toggleClass('active');
      $('.overlay').toggleClass('active');
      $('.menu-container').toggleClass('active');
    });
  }
  //
}
