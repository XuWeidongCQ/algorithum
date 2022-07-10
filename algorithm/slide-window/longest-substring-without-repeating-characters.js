
/**
 * 无重复的最长子串
 */
const lengthOfLongestSubstring = (s) => {
    let l = 0;
    let r = 0;
    // 用来检测窗口中的数据是否合法
    let set = new Set();
    let ans = 0;
    while(r < s.length) {
        // 合法继续向右扩大窗口
        if (!set.has(s[r])) {
            set.add(s[r])
        } else {
            // 不合法左边收缩窗口
            while(set.has(s[l])) {
                set.delete(s[l])
                l++
            }
        }
        ans = Math.max(ans, r-l+1)
        r++
    }
    return ans;
};

const maxSlidingWindow = (arr, k) => {
    let l = 0;
    let r = k - 1;
    let ans = [];
    let maxVal = Math.max(...arr.slice(i, r+1))
    while(r < arr.length) {
        while(l < r) {
            maxVal = maxVal > arr[l]:
        }
        ans.push()
        r++;
        ll++;
    }
    return ans
}

let s = 'abcadf';
console.log(lengthOfLongestSubstring(s))