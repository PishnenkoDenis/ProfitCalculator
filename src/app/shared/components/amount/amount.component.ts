import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss']
})
export class AmountComponent {

  @Output() Changed = new EventEmitter<number>();

  constructor() { }

  getAmountValue(event: number) {
    this.Changed.emit(event);
  }

}
