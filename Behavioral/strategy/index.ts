class StrategyContext {
    private behavior: Behavior;

    constructor(behavior: Behavior) {
        this.behavior = behavior;
    }

    public setBehavior(behavior: Behavior) {
        this.behavior = behavior;
    }

    public doAction(): string {
        return this.behavior.run();
    }
}

interface Behavior {
    run(): string;
}

class FirstBehavior implements Behavior {
    public run(): string {
        return 'This is the first behavior.';
    }
}

class SecondBehavior implements Behavior {
    public run(): string {
        return 'This is the second behavior.';
    }
}

const strategyContext = new StrategyContext(new FirstBehavior());
console.log(strategyContext.doAction());
strategyContext.setBehavior(new SecondBehavior());
console.log(strategyContext.doAction());
