import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { trigger, transition, useAnimation } from '@angular/animations';
import { pulse } from 'ng-animate';
@Component({
  selector: 'app-sunday',
  templateUrl: './sunday.component.html',
  styleUrls: ['./sunday.component.scss'],
  animations: [
    trigger('bounce', [transition('* => *', useAnimation(pulse))])
  ],
})
export class SundayComponent implements OnInit {
  bounce: any;
  showNot: boolean = false;
  todo: any = [];
  done: any = [];
  value: any;
  message: any = 'you have no workout schedule today';
  mycolor: boolean = false;
  constructor() { }
  ngOnInit(): void {
    this.todo = JSON.parse(localStorage.getItem('token7')!);
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  add() {
    this.todo = this.todo || [];
    this.todo.push(this.value);
    this.message = ' you added a workout plan ';
    this.mycolor = true;
    let audio = new Audio();
    audio.src = '../assets/sound1.wav';
    audio.load();
    audio.play();
    this.value = '';
    localStorage.setItem('token7', JSON.stringify(this.todo));
  }
  delate(index: any) {
    this.done.splice(index, 1);
    if (this.done == 0 && this.todo == 0) {
      this.message = 'you have no workout schedule today';
      this.mycolor = false;
    }
    let audio = new Audio();
    audio.src = '../assets/sound.wav';
    audio.load();
    audio.play();
    localStorage.setItem('token7', JSON.stringify(this.todo));
  }
  getdelate(index: any) {
    this.todo.splice(index, 1);
    if (this.done == 0 && this.todo == 0) {
      this.message = 'you have no workout schedule today';
      this.mycolor = false;
    }
    let audio = new Audio();
    audio.src = '../assets/sound.wav';
    audio.load();
    audio.play();
    localStorage.setItem('token7', JSON.stringify(this.todo));
  }
  getInfo() {
    this.showNot = true;
  }
  getClosed() {
    this.showNot = false;
  }
}
