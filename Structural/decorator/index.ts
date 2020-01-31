interface OperationComponent {
  operation(): string;
}

class ConcreteComponent implements OperationComponent {
  public operation(): string {
    return 'ConcreteComponent';
  }
}

class Decorator implements OperationComponent {
  protected component: OperationComponent;

  constructor(component: OperationComponent) {
    this.component = component;
  }

  public operation(): string {
    return this.component.operation();
  }
}

class ConcreteDecoratorA extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

class ConcreteDecoratorB extends Decorator {
  public operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}

const simple = new ConcreteComponent();
console.log('A simple component:');
console.log(`RESULT: ${simple.operation()}`);

const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log('A decorated component:');
console.log(`RESULT: ${decorator2.operation()}`);