class LinkedList {
    constructor (head = null) {
        this.head = head
    }
    headGrab() {
        let target = this.head
        return target
    }

    tailGrab() {
        return findLast(this)
    }

    size() {
        return runThrough(this);

    }

    prepend(value) {
        const listNode = new Node;
        listNode.setValue(value);
        listNode.setNextNode(this.head)
        this.head = listNode;

    }
    append(value) {
        appendNode(this, value)
    }

    at(index) {
        return toIndex(this, index)
    }

    contains(value) {
        return recValue(this, value)
    }

    find(value) {
        return recIndexValue(this, value)
    }
}

class Node {
    setValue(value) {
        this.value = value
    }

    setNextNode(next) {
        this.next = next
    }
}


function appendNode(obj, value) {
    if (obj.head !== undefined) {
        curNode = obj.head
    } else {
        curNode = obj
    }

    if (Object.values(curNode).indexOf(null) > -1) {
        const listNode = new Node;
        listNode.setValue(value);
        listNode.setNextNode(null);
        obj.next = listNode;
        return listNode;   
    }
    return appendNode(curNode.next, value)
}

function runThrough(obj, count = 1) {
    if (obj.head !== undefined) {
        curNode = obj.head
    } else {
        curNode = obj
    }

    if (Object.values(curNode).indexOf(null) > -1) {
        console.log(count)
        return count;     
    }
    count++;
    return runThrough(curNode.next, count)
}
    
function findLast(obj) {
    if (obj.head !== undefined) {
        curNode = obj.head
    } else {
        curNode = obj
    }

    if (Object.values(curNode).indexOf(null) > -1) {
        return curNode;     
    }
    return findLast(curNode.next)
}

function toIndex(obj, index, curIndex = 0) {
    if (obj.head !== undefined) {
        curNode = obj.head
    } else {
        curNode = obj
    }

    if (curIndex === index) {
        return curNode;     
    }
    curIndex++
    return toIndex(curNode.next, index, curIndex)
}

function recValue(obj, value) {
    if (obj.head !== undefined) {
        curNode = obj.head
    } else {
        curNode = obj
    }

    if (Object.values(curNode).indexOf(value) > -1) {
        return true;     
    } else if (Object.values(curNode).indexOf(null) > -1) {
        return false;
    }
    
    return recValue(curNode.next, value)
}

function recIndexValue(obj, value) {
    if (obj.head !== undefined) {
        curNode = obj.head
    } else {
        curNode = obj
    }

    if (Object.values(curNode).indexOf(value) > -1) {
        return true;     
    } else if (Object.values(curNode).indexOf(null) > -1) {
        return false;
    }
    
    return recIndexValue(curNode.next, value)
}

const newList1 = new LinkedList;

newList1.prepend(4)
newList1.prepend(5)
newList1.append(3)
newList1.append(2)
console.log(newList1.contains(9))





