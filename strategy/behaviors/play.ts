export interface PlayBehavior {
  play: Function;
}

export class PlayIsolated implements PlayBehavior {
  public play() {
    console.log('I prefer to play alone');
  }
}

export class PlayInPack implements PlayBehavior {
  public play() {
    console.log('I prefer to play in a pack');
  }
}