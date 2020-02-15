interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): string;
}

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return null;
    }
}

class MonkeyHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'Banana') {
            return `Monkey: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}

class SquirrelHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'Nut') {
            return `Squirrel: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}

class DogHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'MeatBall') {
            return `Dog: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}

function handleChain(handler: Handler) {
    const foods = ['Nut', 'Banana', 'Cup of coffee'];
    for (const food of foods) {
        console.log(`Client: Who wants a ${food}?`);
        const result = handler.handle(food);
        const answer = result ? `  ${result}` : `  ${food} was left untouched.`;
        console.log(answer);
    }
}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

console.log('Chain: Monkey > Squirrel > Dog\n');
handleChain(monkey);

console.log('Subchain: Squirrel > Dog\n');
handleChain(squirrel);
