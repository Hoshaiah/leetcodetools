class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left===undefined ? null : left;
        this.right = right===undefined ? null : right;
    }
}



function createTreeNode(listOfNodes, indexOfNode = 0) {
    let answer;
    if (listOfNodes[indexOfNode]) {
        answer = new TreeNode(listOfNodes[indexOfNode])
    } else {
        return null
    }

    left = listOfNodes[2*indexOfNode +1]
    if(left) {
        answer.left = createTreeNode(listOfNodes, 2*indexOfNode + 1)
    } else {
        answer.left = null
    }

    right = listOfNodes[2*indexOfNode + 2]
    if(right) {
        answer.right = createTreeNode(listOfNodes, 2*indexOfNode + 2)
    } else {
        answer.right = null
    }

    return answer
}

function createArrayFromTreeNode(root) {

}




list1 = [1,2,3,4,null,6,7,8]

let x = createTreeNode(list1)

console.log('test')