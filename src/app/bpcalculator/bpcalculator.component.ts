import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-bpcalculator',
  templateUrl: './bpcalculator.component.html',
  styleUrls: ['./bpcalculator.component.scss'],
})
export class BpcalculatorComponent implements OnInit {
  word: any = 'Result';
  height: any = '';
  weight: any = '';
  total: any;
  value1: boolean = false;
  value2: boolean = false;
  value3: boolean = false;
  value4: boolean = false;
  value5 = false;
  value6 = false;
  value7 = false;
  value8 = false;
  value9 = false;
  value10 = false;
  value11 = false;
  value12 = false;
  value13 = false;
  value14 = false;
  // male/female age
  agem: any
  agef: any
  malecalc: any
  femalecalc: any
  constructor() {
  }
  ngOnInit(): void {
  }
  message: any = 'age requied'
  getData() {
    this.total = this.weight / (((this.height / 100) * this.height) / 100);
    this.malecalc = (1.39 * this.total) + (0.16 * this.agem) - (10.34 * 1) - 9
    this.femalecalc = (1.39 * this.total) + (0.16 * this.agef) - (10.34 * 0) - 9
  }
  getClear() {
    this.total = '';
    this.weight = '';
    this.height = '';
    this.value1 = false;
    this.value2 = false;
    this.value3 = false;
    this.value4 = false;
    this.value5 = false;
    this.value6 = false;
    this.value7 = false;
    this.value8 = false;
    this.value9 = false;
    this.value10 = false;
    this.value11 = false;
    this.value12 = false;
    this.value13 = false;
    this.value14 = false;
    this.agem = '';
    this.malecalc = ''
    this.agef = '';
    this.femalecalc = ''
  }
  getColor() {
    if (this.total >= 1 && this.total <= 18.5) {
      this.value1 = true;
      return '#FCAF41';
    } else if (this.total >= 18.5 && this.total <= 25) {
      this.value2 = true;
      return '#2FA23C';
    } else if (this.total >= 25 && this.total <= 30) {
      this.value3 = true;
      return '#E75D2C';
    } else if (this.total >= 30) {
      this.value4 = true;
      return '#BF011E';
    } else {
      return 'transparent';
    }
  }
  getColor1() {
    if (this.malecalc >= 2 && this.malecalc <= 6) {
      this.value5 = true;
      return '#890004 ';
    } else if (this.malecalc >= 6 && this.malecalc <= 14) {
      this.value6 = true;
      return '#00FF78';
    } else if (this.malecalc >= 14 && this.malecalc <= 18) {
      this.value7 = true;
      return '#00813C';
    } else if (this.malecalc >= 18 && this.malecalc <= 25) {
      this.value8 = true;
      return '#FDE335';
    }
    else if (this.malecalc >= 25 && this.malecalc <= 100) {
      this.value9 = true;
      return 'red';
    }
    else {
      return 'transparent';
    }
  }
  getColor2() {
    if (this.femalecalc >= 10 && this.femalecalc <= 14) {
      this.value10 = true;
      return '#890004 ';
    } else if (this.femalecalc >= 14 && this.femalecalc <= 21) {
      this.value11 = true;
      return '#00FF78';
    } else if (this.femalecalc >= 21 && this.femalecalc <= 25) {
      this.value12 = true;
      return '#00813C';
    } else if (this.femalecalc >= 25 && this.femalecalc <= 32) {
      this.value13 = true;
      return '#FDE335';
    }
    else if (this.femalecalc >= 32 && this.femalecalc <= 100) {
      this.value14 = true;
      return 'red';
    }
    else {
      return 'transparent';
    }
  }
  showvalue = true;
  showAge1() {
    this.showvalue = true;
  }
  showAge() {
    this.showvalue = false;
  }
}
