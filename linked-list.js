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
			while (current.next) {
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

	size() {
		let size = 0;
		if (!this.head) {
			return size;
		} else {
			let current = this.head;
			while (current) {
				current = current.next;
				size++;
			}
		}
		return size;
	}

	headNode() {
		return this.head;
	}

	tail() {
		if (!this.head) {
			return this.head;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			return current;
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

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("hourse");

console.log(list.tail());
