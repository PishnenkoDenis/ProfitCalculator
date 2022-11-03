import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IRange } from 'src/app/model/IRange';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

  @Output() Changed = new EventEmitter<any>();

  @Input() properties: IRange;

  constructor() { }

  ngOnInit(): void {
  }

  getRangeValue(event: any) {
    this.Changed.emit(event);
  }

}
