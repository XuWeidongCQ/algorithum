
export class TreeNode {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

export class Tree {
    
    add(tree, element) {
        const last = this.getLast(tree)
        // if (last === tree) {
        //     tree.value = element;
        //     tree.left = null;
        //     tree.right = null
        //     return
        // }
        if (!last.left) {
            last.left = new TreeNode(element)
        } else {
            last.right = new TreeNode(element)
        }
    }

    /**
     * 获取最后一个没有满的节点
     */
    getLast(tree) {
        const queue = [tree]
        let ans;
        while (queue.length > 0) {
            ans = queue.shift()
            // console.log(ans)
            if (ans.left && ans.right) {
                queue.push(ans.left)
                queue.push(ans.right)
            } else {
                return ans
            }
        }
    }
};