interface Iterator<T> {
    current(): any;
    next(): T;
    key(): number;
    valid(): boolean;
}

interface Aggregator {
    getIterator(): Iterator<string>;
}

class AlphabeticalOrderIterator implements Iterator<string> {
    private collection: WordsCollection;
    private position: number = 0;

    constructor(collection: WordsCollection) {
        this.collection = collection;
    }

    public current(): any {
        return this.collection.getItems()[this.position];
    }

    public key(): number {
        return this.position;
    }

    public next(): any {
        const item = this.collection.getItems()[this.position];
        this.position += 1;
        return item;
    }

    public valid(): boolean {
        return this.position < this.collection.getCount();
    }
}

class WordsCollection implements Aggregator {
    private items: string[] = [];

    public getItems(): string[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: string): void {
        this.items.push(item);
    }

    public getIterator(): Iterator<string> {
        return new AlphabeticalOrderIterator(this);
    }
}

const collection = new WordsCollection();
collection.addItem('One');
collection.addItem('Two');
collection.addItem('Three');
const iterator = collection.getIterator();

console.log('Iterator content:');
while (iterator.valid()) {
    console.log('Key: ', iterator.key(), ' Value: ', iterator.next());
}
