export class HashTable<K, V> {
    private map: Map<K, V>;

    constructor() {
        this.map = new Map<K, V>();
    }

    set(key: K, val: V) {
        this.map.set(key, val);
    }

    get(key: K): V | undefined {
        return this.map.get(key);

    }

    entries(): [K, V][] {
        return Array.from(this.map.entries());
    }

    has(key: K): boolean {
        return this.map.has(key);
    }

    clear() {
        this.map.clear();
    }


}