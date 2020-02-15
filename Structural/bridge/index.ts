class Abstraction {
    protected implementation: Implementation;

    constructor(implementation: Implementation) {
        this.implementation = implementation;
    }

    public operation(): string {
        const result = this.implementation.operationImplementation();
        return 'Abstraction: Base operation with: ' + result;
    }
}

class ExtendedAbstraction extends Abstraction {
    public operation(): string {
        const result = this.implementation.operationImplementation();
        return 'ExtendedAbstraction: Extended operation with: ' + result;
    }
}

interface Implementation {
    operationImplementation(): string;
}

class ImplementationA implements Implementation {
    public operationImplementation(): string {
        return 'ImplementationA';
    }
}

class ImplementationB implements Implementation {
    public operationImplementation(): string {
        return 'ImplementationB';
    }
}

let implementation = new ImplementationA();
let abstraction = new Abstraction(implementation);
console.log(abstraction.operation());

implementation = new ImplementationB();
abstraction = new ExtendedAbstraction(implementation);
console.log(abstraction.operation());
