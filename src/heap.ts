export class Heap<T> {
    private heap: T[] = [];
    private cmp: (a: T, b: T) => number;

    constructor(comparator: (a: T, b: T) => number) {
        this.cmp = comparator;
    }

    size(): number {
        return this.heap.length;
    }

    isEmpty(): boolean {
        return this.heap.length === 0;
    }

    peek(): T {
        if (this.isEmpty()) 
            throw new Error('Empty');

        return this.heap[0]!;
    }

    push(value: T): void {
        this.heap.push(value);
        let idx = this.heap.length - 1

        while (idx > 0) {
            const p = Math.floor((idx - 1) / 2);
            if (this.cmp(this.heap[idx], this.heap[p]) < 0) {
                [this.heap[idx], this.heap[p]] = [this.heap[p], this.heap[idx]];
                idx = p;
            } 
            else {
                break;
            }
        }
    }

    pop(): T {
        if (this.isEmpty())
            throw new Error('Empty');

        const first = this.heap[0]!;
        const last = this.heap.pop()!;
        if (this.heap.length > 0) {
            this.heap[0] = last;

            const n = this.heap.length;
            let idx = 0;
            while (true) {
                const l = 2*idx + 1;
                const r = 2*idx + 2;
                let smallest = idx;

                if (l < n && this.cmp(this.heap[l], this.heap[smallest]) < 0) 
                    smallest = l;
                if (r < n && this.cmp(this.heap[r], this.heap[smallest]) < 0) 
                    smallest = r;

                if (smallest === idx)
                    break;

                [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
                idx = smallest;
            }
        }
        return first;
    }

}