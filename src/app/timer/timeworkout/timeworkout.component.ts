import { Component, OnInit } from '@angular/core';
declare var $: any;
import { interval } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-timeworkout',
  templateUrl: './timeworkout.component.html',
  styleUrls: ['./timeworkout.component.scss']
})
export class TimeworkoutComponent implements OnInit {
  counter: any = 0;
  mycounter: any;
  value: any;
  constructor() { }
  ngOnInit(): void {
    $('.menu-btn').click(function () {
      $('.menu-btn').toggleClass('active');
      $('.overlay').toggleClass('active');
      $('.menu-container').toggleClass('active');
    });
  }
  start() {
    this.counter = this.value;
    this.mycounter = interval(2000).subscribe((data) => {
      this.value = data;
      this.counter--;
      this.value = '';
      if (this.counter < 0) {
        this.mycounter.unsubscribe(this.counter = 0);
        this.value = '';
        Swal.fire({
          backdrop: false,
          position: 'center',
          width: 400,
          icon: 'success',
          title: 'End Workout',
        });
        let audio = new Audio();
        audio.src = '../assets/sound2.wav';
        audio.load();
        audio.play();
      }
    });
  }
  stop() {
    this.mycounter.unsubscribe();
    this.counter = 0
    if (this.counter === 0) {
      setTimeout(() => {
        this.counter = ''
      }, 1000)
    }
  }
}
