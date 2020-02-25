interface Command {
    execute(): void;
    undo(): void;
    destroy(): void;
}

class SimpleCommand implements Command {
    private operation: string;

    constructor(operation: string) {
        this.operation = operation;
    }

    public execute(): void {
        console.log('Execute the SimpleCommand: ', this.operation);
    }

    public undo(): void {
        console.log('Undo the SimpleCommand: ', this.operation);
    }

    public destroy(): void {
        this.operation = undefined;
    }
}

class Invoker {
    private commands: Command[] = [];

    public addCommand(command: Command) {
        this.commands.push(command);
    }

    public clearCommands() {
        this.commands.forEach((command: Command) => {
            command.destroy();
        });
        this.commands = [];
    }

    public runCommands(): void {
        this.commands.forEach((command: Command) => {
            command.execute();
        });
    }
}

const invoker = new Invoker();
invoker.addCommand(new SimpleCommand('Say Hi!'));
invoker.runCommands();
