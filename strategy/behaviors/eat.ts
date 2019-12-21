export interface EatBehavior {
  eat: Function;
}

export class EatWithGrace implements EatBehavior {
  public eat() {
    console.log('I eat with grace');
  }
}

export class EatLikeManiac implements EatBehavior {
  public eat() {
    console.log('I eat like a maniac');
  }
}