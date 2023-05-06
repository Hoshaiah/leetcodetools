class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

function createListNode(listOfNodes) {
    let answer = new ListNode()
    let runningAnswer = answer

    while(listOfNodes.length > 0) {
        runningAnswer.next = new ListNode(listOfNodes.shift())
        runningAnswer = runningAnswer.next
    }

    return answer.next
}

function createArrayFromNode(root) {
    let answer = []

    while (root) {
        answer.push(root.val)
        root = root.next
    }
    return answer
}





list1 = [1,2,4,5]
list2 = []
let x = createListNode(list1)
let y = createArrayFromNode(x)
console.log('test')