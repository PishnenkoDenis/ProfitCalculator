import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() options: Array<string>;

  @Output() Changed = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  getOptionValue(value: string) {
      this.Changed.emit(value);
  }

}
