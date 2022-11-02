import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  numbers: Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12];

  constructor() { }

  ngOnInit(): void {
  }

}
