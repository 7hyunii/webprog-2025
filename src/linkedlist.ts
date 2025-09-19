class Node<T> {
    public data: T;                         // 데이터
    public prev: Node<T> | null = null;     // 이전 노드 포인터
    public next: Node<T> | null = null;     // 다음 노드 포인터

    constructor(data: T) {
        this.data = data;
    }

}

export class LinkedList<T> {
    private head: Node<T> | null = null;    // 첫 번째 노드
    private tail: Node<T> | null = null;    // 마지막 노드
    private length: number = 0;

    // 추가
    append(data: T): void{
        const newNode = new Node<T>(data);

        // 비었을 때
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        // 노드가 이미 있을 때
        else {
            this.tail!.next = newNode;       // ! : null 체크 무시 지시
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
    }

    // 길이
    size(): number {
        return this.length;
    }

    // 정방향 출력
    printList(): T[] {
        const result: T[] = [];
        let cur = this.head;

        while (cur !== null) {
            result.push(cur.data);
            cur = cur.next;
        }

        return result;
    }

    // 삭제
    delete(data: T): void {
        let cur = this.head;

        while (cur !== null) {
            if (cur.data === data) {
                // 이전 노드 연결
                if (cur.prev)
                    cur.prev.next = cur.next;
                else
                    this.head = cur.next;

                // 다음 노드 연결
                if (cur.next)
                    cur.next.prev = cur.prev;
                else
                    this.tail = cur.prev;

                this.length--;
                return;
            }
            
            cur = cur.next;
        }
    }

    // 검색
    search(data: T): T | null {
        let cur = this.head;

        while (cur !== null) {
            if (cur.data === data)
                return cur.data;

            cur = cur.next;
        }
        
        return null;
    }

    // 역방향 출력
    printListReverse(): T[] {
        const result: T[] = [];
        let cur = this.tail;

        while (cur !== null) {
            result.push(cur.data);
            cur = cur.prev;
        }

        return result;
    }

    // 첫 번째 요소
    getFirst(): T | null {
        if (this.head !== null)
            return this.head.data;
        else
            return null;
    }

    // 마지막 요소
    getLast(): T | null {
        if (this.tail !== null)
            return this.tail.data;
        else
            return null;
    }

}
