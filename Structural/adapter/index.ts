class Target {
    public request(): string {
        return 'Target: The target\'s behavior.';
    }
}

class Adaptee {
    public notTheTargetRequest(): string {
        return 'Adeptee: The adeptee\'s behavior';
    }
}

class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.notTheTargetRequest();
        return 'Adapter: ' + result;
    }
}

const target = new Target();
console.log('Target object: ', target.request());

const adaptee = new Adaptee();
console.log('Adeptee object: ', adaptee.notTheTargetRequest());

const adapter = new Adapter(adaptee);
console.log('When making use of the Adapter: ', adapter.request());
