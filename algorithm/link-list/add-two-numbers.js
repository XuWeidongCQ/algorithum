import { LinkList, LinkListNode } from "../../data-structure/link-list/link-list.js";

/**
 * 输入的链表表示的数字是逆序的
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 */
const addTwoNumbers = function(l1, l2) {
    let l1Cur = l1;
    let l2Cur = l2;
    let ans = new LinkListNode('$'); // 初始化结果链表，存放一个哑节点
    let ansCur = ans;
    let addin = 0;
    let v1, v2;
    while(l1Cur || l2Cur) {
        // 1.分别拿到当前节点的值(需要考虑链表不是一样长的情况)
        v1 = l1Cur ? l1Cur.value : 0;
        v2 = l2Cur ? l2Cur.value : 0;
        // 2.计算两个数字相加
        if (v1 + v2 + addin >= 10) {
            ansCur.next = new LinkListNode(v1 + v2 - 10);
            addin = 1;
        } else {
            ansCur.next = new LinkListNode(v1 + v2 + addin);
            addin = 0
        }
        // 3.移动指针(最后一个节点拿不到next)
        l1Cur ? l1Cur = l1Cur.next : '';
        l2Cur ? l2Cur = l2Cur.next : '';
        ansCur = ansCur.next;
    }
    if (addin === 1) {
        ansCur.next = new LinkListNode(1)
    }
    return ans.next; // 结果要去掉哑节点
};


const l1 = new LinkList([2,4,3]).head;
const l2 = new LinkList([5,6,4]).head;

console.log(l1);
console.log(l2);
console.log(addTwoNumbers(l1, l2));