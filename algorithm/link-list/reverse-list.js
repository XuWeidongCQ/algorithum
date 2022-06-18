import { LinkList, LinkListNode } from "../../data-structure/link-list/link-list.js";

/**
 * 翻转链表，需要三个指针
 */
const reverseList = function(list) {
    let ans = null;
    let cur = list;
    // 遍历链表
    while(cur) {
        let tmp = cur.next;
        // 将ans赋值给当前节点的下一个
        cur.next = ans;
        // 移动指针
        ans = cur
        cur = tmp;
    }
    return ans;
}

/**
 * 翻转链表，使用栈
 */
const reverseListUseStack = function(list) {
    let pCur = list;
    let stack = [];
    let ans = new LinkListNode('$');
    let pAns = ans;
    while(pCur) {
        stack.push(pCur.value);
        pCur = pCur.next;
    }
    while(stack.length > 0) {
        pAns.next = new LinkListNode(stack.pop())
        pAns = pAns.next;
    }
    return ans.next;
}

/**
 * K个一组翻转链表
 */
const reverseKGroupList = function(list, k) {
    let ans = new LinkListNode('$');
    let pCur = list;
    let pAns = ans;
    let stack = []
    let count = 0;
    while(pCur) {
        count = count + 1
        stack.push(pCur.value)
        // 满足K个
        if (count === k) {
            while(stack.length > 0) {
                pAns.next = new LinkListNode(stack.pop())
                pAns = pAns.next
            }
            count = 0;
        }
        pCur = pCur.next;
    }
    // 处理最后的stack
    while(stack.length > 0) {
        pAns.next = new LinkListNode(stack.pop())
        pAns = pAns.next
    }
    return ans.next;
}

const list = new LinkList([1,2,3,4]).head;
console.log(list);
console.log(reverseKGroupList(list, 4));