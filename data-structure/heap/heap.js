

/**
 * 堆 用于实现任务调度中的优先队列
 */
export class Heap {
    // constructor(arr) {
    //     this.data = arr
    // }

    /**
     * 将最大的元素放到顶部
     */
    makeTopMax(arr) {
        const len = arr.length;
        for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
            this.heapHeapify(arr, i, len)
        }
    }

    /**
     * 从节点i的两个子节点中找出最大的放到节点i的位置
     */
    heapHeapify(arr, i, size) {
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        // let largest = i;
        let mini = i
        // if (l < size && arr[l]  arr[largest]) {
        //     largest = l;
        // }
        // if (r < size && arr[r] > arr[largest]) {
        //     largest = r;
        // }
        // if (largest !== i) {
        //     this.swap(arr, i, largest)
        //     this.heapHeapify(arr, largest, size)
        // }
        if (l < size && arr[l] < arr[mini]) {
            mini = l;
        }
        if (r < size && arr[r] < arr[mini]) {
            mini = r;
        }
        if (mini !== i) {
            this.swap(arr, i, mini)
            this.heapHeapify(arr, mini, size)
        }
    }

    /**
     * 构造堆
     */
    heapSort(arr) {
        let len = arr.length;
        if (len <= 1) {
            return arr;
        }
        this.makeTopMax(arr)
        for (let i=len-1; i>0;i--) {
            // 将堆顶和最后一个元素交换
            this.swap(arr, 0, i)
            // 然后长度减1，因为最后一个不需要再排
            len = len - 1;
            // 对后面的序列重复操作
            this.heapHeapify(arr, 0, len);
        }
    }

    /**
     * 交换数组中的两个元素的位置
     */
    swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    insertElm(arr, value) {
        arr.push(value);
        // 这样不好
        this.heapSort(arr);
    }
}

/**
 * 大顶堆，参考react实现
 */
export class Heap1 {

    /**
     * 返回当前节点索引的父节点的索引
     */
    parent(idx) {
        if (idx === 0) {
            return 0
        }
        return Math.floor((idx - 1) / 2)
    }

    /**
     * 返回当前节点的索引的左边节点的索引
     */
    left(heap, idx) {
        const leftIdx = 2 * idx + 1
        if (heap.length <= leftIdx) {
            return -1;
        }
        return leftIdx
    }

    /**
     * 返回当前节点的索引的左边节点的索引
     */
    right(heap, idx) {
        const rightIdx = 2 * idx + 2
        if (heap.length <= rightIdx) {
            return -1;
        }
        return rightIdx
    }

    /**
     * 交换数组中的两个元素的位置
     */
    swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    /**
     * 往堆中添加一个元素
     */
    addElement(heap, value) {
        // 新加入的元素的索引，所以这里没有减1
        const lastIdx = heap.length;
        heap.push(value);
        this.up(heap, value, lastIdx);
    }

    /**
     * 将堆中的一个节点从idx处往上浮, 直到该元素的父节点比它大为止
     */
    up(heap, value, idx) {
        let i = idx;
        // i = 0是没有父节点的
        while (i > 0) {
            const parentIdx = this.parent(i);
            const parent = heap[parentIdx];
            if (parent < value) {
                this.swap(heap, parentIdx, i)
                i = parentIdx
            } else {
                return
            }
        }
    }

    /**
     * 将堆中的一个节点从idx往下沉, 直到该元素的父节点比它小为止
     */
    down(heap, value, idx) {
        let i = idx;
        let halfLen = Math.floor(heap.length / 2);
        // 只有当前节点的索引小于halfLen才能下沉
        while (i < halfLen) {
            const leftIdx = this.left(heap, i)
            const left = heap[leftIdx]
            const rightIdx = this.right(heap, i)
            const right = heap[rightIdx]
            let max = left
            let maxIdx = leftIdx
            // 始终和左右节点中较大的那一个进行交换
            if (rightIdx !== -1 && left < right && leftIdx !== -1) {
                max = right
                maxIdx = rightIdx
            }
            if (value < max) {
                this.swap(heap, i, maxIdx)
                i = maxIdx
            } else {
                break
            }
        }
    }

    /**
     * 获取堆顶的元素
     */
    peek(heap) {
        return heap[0] !== undefined ? heap[0] : null;
    }

    /**
     * 弹出堆顶的元素, 同时需要保证堆的性质
     */
    pop(heap) {
        if (heap.length === 0) {
            return null;
        }
        const first = heap[0];
        const last = heap.pop();
        if (last !== first) {
            heap[0] = last;
            this.down(heap, last, 0)
        }
        return first
    }

    // compare(a, b) {
    //     return a - b;
    // }
}
