export class BinaryTree<T> {
    private tree: number[] = [];
    private size: number = 0;
    
    insert(val: number) {
        this.tree.push(val);
        this.size++;
    }

    remove(val: number) {
        const index = this.tree.indexOf(val);
        if (index === -1) {
            return;
        }

        let right = 2*index + 2;
        if (right < this.size) {
            let minIdx = right;
            while (2 * minIdx + 1 < this.size) {
                minIdx = 2*minIdx + 1;
            }

            this.tree[index] = this.tree[minIdx];
            if (minIdx !== this.size - 1) {
                this.tree[minIdx] = this.tree[this.size - 1]!;
            }
            this.tree.pop();
        } 
        else {
            if (index !== this.size - 1) {
                this.tree[index] = this.tree[this.size - 1]!;
            }
            this.tree.pop();
        }

        this.size--;
    }

    search(val: number): number | null {
        const index = this.tree.indexOf(val);
        if (index === -1) {
            return null;
        }
        return this.tree[index]!;

    }

    inOrderTraversal(): number[] {
        const result: number[] = [...this.tree];
        result.sort((a, b) => a - b);
        return result;
    }

    preOrderTraversal(): number[] {
        const result: number[] = [];
        const preOrder = (i: number) => {
            if (i >= this.size) {
                return;
            }
            result.push(this.tree[i]!);
            preOrder(2*i + 1);
            preOrder(2*i + 2);
        }
        preOrder(0);

        return result;
    }

    postOrderTraversal(): number[] {
        const result: number[] = [];
        const postOrder = (i: number) => {
            if (i >= this.size) {
                return;
            }
            postOrder(2*i + 1);
            postOrder(2*i + 2);
            result.push(this.tree[i]!);
        }
        postOrder(0);

        return result;
    }

    levelOrderTraversal(): number[] {
        return [...this.tree];
        
    }
}
