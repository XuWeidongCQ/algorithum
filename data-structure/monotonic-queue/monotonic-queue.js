
/**
 * 单调递减队列 [4,3,2,1]
 * 该数据结构似乎只能用于解决滑动窗口最值问题
 */
export class MonotonicQueue {
    data = [];
    
    /**
     * 在队列中添加一个元素，
     */
    push(number) {
        while (this.data.length !== 0 && this.data[this.data.length - 1] < number) {
            this.data.pop()
        }
        this.data.push(number)
    }

    /**
     * 返回队列中的最大值
     */
    max() {
        return this.data[0]
    }

    /**
     * 队列中如果最大的元素等于number就删除???
     */
    pop(number) {
        if (this.data.length !==0 && this.data[0] === number) {
            this.data.shift()
        }
    }

};
