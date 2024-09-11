class LinkedList {
	constructor() {
		this.head = null;
	}
	append(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			if (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
	}

	prepend(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			let nextNode = this.head;
			this.head = newNode;
			newNode.next = nextNode;
		}
	}
}

class Node {
	constructor(value = null, next = null) {
		this.value = value;
		this.next = null;
	}
}

const list = new LinkedList();
/* console.log(list); */

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("hourse");
console.log(list);

/* function findperson(list, name) {
	if (!list.next) {
		return -1;
	}
	if (list.value == name) {
		return name;
	}

	return findperson(list.next, name);
}

console.log(findperson(list.head, "cat"));
 */
