
/**
 * 单向链表的节点构造器
 */
export class LinkListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class LinkList {
    /**
     * 链表的元素个数
     */
    count = 0;
    /**
     * 链表的头部指针
     */
    head = null;

    constructor(arr) {
        this.#generateLinkList(arr);
    }

    /**
     * 从一个数组生成一个链表
     */
    #generateLinkList(arr) {
        const len = arr.length
        if (len === 0) return null;
        this.head = new LinkListNode(arr[0])
        this.count = 1;
        let pCur = this.head;
        for (let i=1; i<=len; i++) {
            const nextNode = new LinkListNode(arr[i]);
            pCur.next = nextNode;
            pCur = nextNode;
            this.count++;
        }
        return this.head
    }
}