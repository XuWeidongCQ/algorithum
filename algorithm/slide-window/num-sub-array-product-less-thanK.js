
const numSubarrayProductLessThanK = (arr, k) => {
    let l = 0;
    let r = 0;
    let product = 1;
    let ans = 0;
    while (r < arr.length) {
        product = product * arr[r]
        while(product >= k) {
            product = product / arr[l]
            l++
        }
        ans = ans + r - l + 1
        r++

    }
    return ans
};



let arr = [10,5,2,6];
console.log(numSubarrayProductLessThanK(arr, 100))