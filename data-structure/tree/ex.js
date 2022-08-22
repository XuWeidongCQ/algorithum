import { Tree, TreeNode } from './tree.js'

const tree = new Tree();

const arr = [1,2,3,4,5,6,7]
const treeObj = new TreeNode(0)
while (arr.length > 0) {
    tree.add(treeObj, arr.shift())
}
// console.log(treeObj)

const bfs = (tree) => {
    const queue = [tree]
    const ans = []
    while (queue.length > 0) {
        let node = queue.shift()
        ans.push(node.value)
        node.left ? queue.push(node.left) : ''
        node.right ? queue.push(node.right) : ''
    }
    return ans;
}

/**
 * 深度优先 中序遍历
 */
const dfs = (tree) => {
    const stack = []
    const ans = []
    let node = tree;
    while (stack.length > 0 || node !== null) {
        if (node === null) {
            node = stack.pop()
            ans.push(node.value)
            node = node.right
        } else {
            stack.push(node)
            node = node.left
        }
    }
    return ans 
}

/**
 * 中序遍历 左根右
 */
const dfs1 = (tree) => {
    if (tree === null) {
        return
    }
    dfs1(tree.left)
    console.log(tree.value)
    dfs1(tree.right)
}

/**
 * 前序遍历 根左右
 */
 const dfs2 = (tree) => {
    if (tree === null) {
        return
    }
    console.log(tree.value)
    dfs1(tree.left)
    dfs1(tree.right)
}

/**
 * 后序遍历 左右根
 */
 const dfs3 = (tree) => {
    if (tree === null) {
        return
    }
    dfs3(tree.left)
    dfs3(tree.right)
    console.log(tree.value)
}


const transferNum = (s) => {
    const sArr = s.split('');
    const s1 = []
    let t = '';
    while (sArr.length > 0) {
        let last = sArr.pop()
        t = last + t
        if (t.length === 3) {
            s1.unshift(t)
            t = ''
        }
    }
    t && s1.unshift(t)
    return s1.join(',')
};

function isObjEqual(obj1, obj2) {
    const getType = (obj) => Object.prototype.toString.call(obj).slice(8, -1)
    
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
    }
    for (const key in obj1) {
        if (!obj2[key]) {
            return false
        }
        if (getType(obj2[key]) === 'Object' && getType(obj1[key]) === 'Object') {
           if (!isObjEqual(obj1[key], obj2[key])) {
            return false
           }
        } else {
            if (obj1[key] !== obj2[key]) {
                return false
            }
        }
        
    }
    return true
}
let obj1 = {
    r: 2,
    g: { a: [4]}
}
let obj2 = {
    r: 2,
    g: { a: 4}
}
console.log(isObjEqual(obj1, obj2))

function flatten(arr, index) {
    if (index === 0) {
        return arr
    }
    const ans = []
    for (const v of arr) {
        if (Array.isArray(v)) {
            ans.push(...flatten(v, index - 1))
        } else {
            ans.push(v)
        }
    }
    return ans
}

function parseStr(str) {
    const reExec = /(?<=\${)([\w|.]+)(?=})/g
    const reBound = /[\${|}]/g
    let ans = str.replace(reExec, function(_, $1) {
        console.log($1)
        return eval($1)
    })
    return ans.replace(reBound, '')
}

function deepClone(obj){
    if (Array.isArray(obj)) {
        return obj.map(deepClone)
    } else if (obj && typeof obj === 'object') {
        let ans = {}
        for (const key in obj) {
            ans[key] = deepClone(obj[key])
        }
        return ans
    } else {
        return obj
    }
}

// console.log(deepClone(obj1))

let arr1 = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
]

function list2tree(arr) {
    for (const item of arr) {
        let parent = arr.find(val => val.id === item.pid)
        if (!parent) {
            continue
        }
        if (!parent.children) {
            parent.children = [item]
        } else {
            parent.children.push(item)
        }
    }
    return arr
}

function list2tree1(arr) {
    const res = [];
    const map = {}
    for (const item of arr) {
        map[item.id] = {
            ...item,
            children: []
        }
    }

    for (const item of arr) {
        const id = item.id;
        const pid = item.pid;
        if (pid === 0) {
            res.push(map[id])
        } else {
            map[pid].children.push(map[id])
        }
    }
    return res
}

// console.log(list2tree1(arr1))

let count = 0;
let p;
const getUserInfo = () => {
    if (count > 1) {
        return p
    }
    p = new Promise((resolve, reject) => {
        count++
        axios
            .get()
            .then(r => resolve(r))
            .catch(e => reject(e))
    })
    return p
}
