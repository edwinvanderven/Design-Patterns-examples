class StateContext {
    private state: State;

    constructor(state: State) {
        this.transitionTo(state);
    }

    public transitionTo(state: State): void {
        console.log('StateContext: Transition to', state.toString());
        this.state = state;
        this.state.setContext(this);
    }

    public request1(): void {
        this.state.handle1();
    }

    public request2(): void {
        this.state.handle2();
    }
}

abstract class State {
    protected context: StateContext;

    public setContext(context: StateContext) {
        this.context = context;
    }

    public abstract handle1(): void;
    public abstract handle2(): void;

    public abstract toString(): string;
}

class StateA extends State {
    public handle1(): void {
        console.log('StateA : Changing to StateB');
        this.context.transitionTo(new StateB());
    }

    public handle2(): void {
        console.log('StateA : Handle me');
    }

    public toString(): string {
        return 'StateA';
    }
}

class StateB extends State {
    public handle1(): void {
        console.log('StateB : Handle me');
    }

    public handle2(): void {
        console.log('StateB : Changing to StateA');
        this.context.transitionTo(new StateA());
    }

    public toString(): string {
        return 'StateB';
    }
}

const stateContext = new StateContext(new StateA());
stateContext.request2();
stateContext.request1();
stateContext.request1();
stateContext.request2();
