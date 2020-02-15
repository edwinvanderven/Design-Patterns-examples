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

const simpleDecorator = new ConcreteComponent();
console.log('A simple component:');
console.log(`RESULT: ${simpleDecorator.operation()}`);

const complexDecorator1 = new ConcreteDecoratorA(simpleDecorator);
const complexDecorator2 = new ConcreteDecoratorB(complexDecorator1);
console.log('A decorated component:');
console.log(`RESULT: ${complexDecorator2.operation()}`);
