import { EatBehavior, EatLikeManiac, EatWithGrace } from "./behaviors/eat"
import { PlayBehavior, PlayInPack, PlayIsolated } from "./behaviors/play";

export class Animal {
  eatBehavior: EatBehavior;
  playBehavior: PlayBehavior;

  setEatBehavior = (behavior: EatBehavior) => this.eatBehavior = behavior;
  setPlayBehavior = (behavior: PlayBehavior) => this.playBehavior = behavior;

  performEat = () => this.eatBehavior.eat();
  performPlay = () => this.playBehavior.play();
}

export class Dog extends Animal {
  constructor() {
    super();

    this.setEatBehavior(new EatLikeManiac());
    this.setPlayBehavior(new PlayInPack());
  }
}

export class Cat extends Animal {
  constructor() {
    super();

    this.setEatBehavior(new EatWithGrace());
    this.setPlayBehavior(new PlayIsolated());
  }
}