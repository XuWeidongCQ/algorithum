
const swap = (arr, i ,j) => [arr[i], arr[j]] = [arr[j], arr[i]]; 

const quickSort = (arr, left, right) => {
    if (arr.length <= 1) {
        return arr;
    }
    let l = left;
    let r = right;
    // 主元 随便选一个数字就行 做一个参考作用
    const pivot = arr[left];
    while (l <= r) {
        while(arr[l] < pivot) {
            l++
        }
        while(arr[r] > pivot) {
            r--
        }
        if (l <= r) {
            swap(arr, l, r);
            l++;
            r--;
        }
    }
    if (r > left) {
        quickSort(arr, left, r)
    }
    if (l < right) {
        quickSort(arr, l, right)
    }
    return arr
};

const bubbleSort = (arr) => {
    const len = arr.length;
    if (len <= 1) {
        return arr;
    }
    for (let i=0; i<len; i++) {
        for (let j=0; j<len-1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1)
            }
        }
    }
    return arr;
}

let arr = [47,29,71,99,78,19,24,47,56,23,78]
// console.log(quickSort(arr, 0, arr.length-1))
console.log(bubbleSort(arr))