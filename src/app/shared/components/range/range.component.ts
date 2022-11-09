import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IRange } from 'src/app/model/IRange';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

  rangeValue: any;

  @Output() Changed = new EventEmitter<any>();

  @Input() properties: IRange;

  constructor() { }

  ngOnInit(): void {
  }

  getRangeValue(event: any) {
    this.Changed.emit(event);
  }

  getProgress(event: any) {
    if (event < 100) {
    this.rangeValue = `${(event * (100 / 12)) - (100 / 12)}%`;
    }
    if (event > 100) { this.rangeValue = `${(event / 1000) - 1}%`; }
    console.log(event, this.rangeValue);
  }

}
