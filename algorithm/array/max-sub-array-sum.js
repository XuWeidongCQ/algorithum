
const maxSubArr = (arr) => {
    const len = arr.length;
    if (len <= 1) {
        return arr[1]
    }
    let dp = [arr[1]];
    let res = -Infinity;
    for (let i = 1; i < len; i++) {
        dp[i] = Math.max(dp[i-1] + arr[i], arr[i])
        res = Math.max(res, dp[i]);
    }
    return res;
};

console.log(maxSubArr([-2,1,-3,4,-1,2,1,-5,4]))
