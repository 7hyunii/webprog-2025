export class Queue<T> {
    private items: T[] = [];
    private _size: number = 0;

    push(item: T): void {
        this._size++;
        this.items.push(item);
    }

    pop(): T | undefined {
        if (this._size > 0)
            this._size--;

        return this.items.pop();
    }

    top(): T | undefined {
        return this.items[this.items.length-1];

    }

    isEmpty(): boolean {
        return this._size === 0;
    }

    get size(): number {
        return this._size;
    }

    set size(length: number) {
        throw new Error("Error");
    }

    enqueue(item: T): void {
        this._size++;
        this.items.push(item);
    }

    dequeue(): T | undefined {
        if (this._size > 0)
            this._size--;

        return this.items.shift();      // popleft
    }

    front(): T | undefined {
        return this.items[0];
    }


}

