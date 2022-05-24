import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bigdata',
  templateUrl: './bigdata.component.html',
  styleUrls: ['./bigdata.component.scss'],
})
export class BigdataComponent implements OnInit {
  constructor(private route: Router) { }
  ngOnInit(): void { }
  getData(value: any) {
    if (value) {
      this.route.navigate([value]);
    }
  }
}
