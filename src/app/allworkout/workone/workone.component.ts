import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-workone',
  templateUrl: './workone.component.html',
  styleUrls: ['./workone.component.scss']
})
export class WorkoneComponent implements OnInit {
  panelOpenState = false;
  constructor() {
  }
  ngOnInit(): void {
  }
}
