import { ElementRef, Injectable } from '@angular/core';
import { AnimationBuilder, AnimationPlayer, style, animate } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  public player: AnimationPlayer;

  private amount = 0;

  constructor(private builder: AnimationBuilder) { }

  runAnimation(value: number, grade: ElementRef) {

    const lastValue = this.amount;
    this.amount = value;

    const factory = this.builder.build([
      style({height: (lastValue * 1.92) + 'px'}),
      animate('300ms ease-in-out', style({height: (value * 1.92) + 'px'}))
    ]);

    this.player = factory.create(grade.nativeElement, {});
    this.player.play();
  }
}
