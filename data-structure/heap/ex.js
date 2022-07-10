import { Heap, Heap1 } from "./heap.js";

let arr = [200,3,4,1,5,16,12,8,16,37,25,21,100,102];
// let arr1 = [];
// // let res = new Heap().heapSort(arr);
// // let res = new Heap().heapHeapify(arr, 0, arr.length)
// let res = new Heap().insertElm(arr1, 2)
// res = new Heap().insertElm(arr1, 4)
// res = new Heap().insertElm(arr1, 14)
// res = new Heap().insertElm(arr1, 5)
// res = new Heap().insertElm(arr1, 11)
// res = new Heap().insertElm(arr1, 1)
const heap = new Heap1();
const heapArr = []
// 将一个数组堆化
for(let i=0; i<arr.length;i++) {
    heap.addElement(heapArr, arr[i])
}
console.log(heapArr);
// console.log(heap.pop(heapArr))
// console.log(heap.pop(heapArr))
// console.log(heap.pop(heapArr))
while (heapArr.length > 0) {
    let max = heap.pop(heapArr);
    console.log(max)
}
