import { Tree, TreeNode } from './tree.js'

const tree = new Tree();

const arr = [1,2,3,4,5,6,7]
const treeObj = new TreeNode(0)
while (arr.length > 0) {
    tree.add(treeObj, arr.shift())
}
console.log(treeObj)

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


console.log(bfs(treeObj))
console.log(dfs3(treeObj))
