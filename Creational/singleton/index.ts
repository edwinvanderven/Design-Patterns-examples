class Singleton {
    private static instance: Singleton;

    private constructor() {
        // the constructor being private means it is protected from external initialization
    }

    public static getInstance(): Singleton {
        if (this.instance === undefined) {
            this.instance = new Singleton();
        }

        return this.instance;
    }
}

class SingletonExample {
    constructor() {
        const firstInstance = Singleton.getInstance();
        const secondInstance = Singleton.getInstance();

        console.log(
            'The singleton class works: ',
            firstInstance === secondInstance
        );
    }
}

const example = new SingletonExample();
