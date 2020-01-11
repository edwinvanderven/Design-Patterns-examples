interface Observable {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}

class ConcreteObservable implements Observable {
  public state: number;

  private observers: Observer[] = [];

  public attach(observer: Observer): void {
    this.observers.push(observer);
  }

  public detach(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    this.observers.splice(observerIndex, 1);
  }

  public notify(): void {
    this.state = Math.floor(Math.random() * (10 + 1));
    for (const observer of this.observers) {
      const event: StateEvent = { state: this.state };
      observer.update(event);
    }
  }
}

interface Observer {
  update(event: StateEvent): void;
}

interface StateEvent {
  state: number;
}

class ConcreteObserverA implements Observer {
  public update(event: StateEvent): void {
    console.log('ConcreteObserverA - update: ', event.state);
  }
}

class ConcreteObserverB implements Observer {
  public update(event: StateEvent): void {
    console.log('ConcreteObserverB - update:  ', event.state);
  }
}

// new ConcreteObservable()
// new ConcreteObserverA().attach;
// new ConcreteObserverB().attach;

// notify()

