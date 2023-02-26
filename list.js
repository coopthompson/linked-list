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

    pop() {
        if (this.hasOwnProperty('next')) {
            return removeNode(this)
        }
        this.head = null   
    }

    at(index) {
        return toIndex(this, index)
    }

    contains(value) {
        return recValue(this, value)
    }

    find(value) {
        if (this.contains(value) === true) {
            return (runThrough(this) - 1)
        } else if (this.contains(value) === false) {
            return "Value not found"
        }
    }

    toString() {
       return grabValues(this);

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
    if(obj.head === null) {
        const listNode = new Node;
        listNode.setValue(value);
        listNode.setNextNode(null);
        obj.head = listNode;
        return listNode;
    }

    if (obj.hasOwnProperty('head') && obj.head.next === null) {
        const listNode = new Node;
        listNode.setValue(value);
        listNode.setNextNode(null);
        obj.head.next = listNode;
        return listNode;
    }

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
    if (obj.hasOwnProperty('head') && obj.head === null) {
        return count - 1;
    }

    if (obj.head !== undefined) {
        curNode = obj.head
    } else {
        curNode = obj
    }

    if (Object.values(curNode).indexOf(null) > -1) {
        return count;     
    }
    count++;
    return runThrough(curNode.next, count)
}
   
function findLast(obj) {
    if (obj.hasOwnProperty('head') && obj.head === null) {
        return obj;
    }

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
    if (obj.hasOwnProperty('head') && obj.head === null) {
        return 'No node found';
    }

    if (obj.head !== undefined) {
        curNode = obj.head
    } else {
        curNode = obj
    }

    if (Object.values(curNode).indexOf(null) > -1 && curIndex !== index) {
        return "No node found";     
    }

    if (curIndex === index) {
        return curNode;     
    }
    curIndex++
    return toIndex(curNode.next, index, curIndex)
}
//working
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

function grabValues(obj, array = []) {
    if (obj.head !== undefined) {
        curNode = obj.head
    } else {
        curNode = obj
    }

    if(Object.values(curNode).indexOf(curNode.value) > -1) {
        let target = curNode.value
        array.push(target);
    }

    if (Object.values(curNode).indexOf(null) > -1) {
        let string = array.toString();
        console.log(string)
        return string;
    }

    return grabValues(curNode.next, array)
}

function removeNode(obj) {
    if (obj.head !== undefined) {
        curNode = obj.head
    } else {
        curNode = obj
    }

    if (curNode.next.next === null) {
        curNode.next = null
        return;
    }
    return removeNode(curNode.next)
}

function checkIfZero(obj, value) {
    if(obj.hasOwnProperty('next') === false) {
        const listNode = new Node;
        listNode.setValue(value);
        listNode.setNextNode(null);
        obj.next = listNode;
        return listNode;
    }
}

const newList1 = new LinkedList;

newList1.append("30 billion")
console.log(newList1.at(0))
