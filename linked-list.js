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

	at(index) {
		if (index < 0) {
			return `index out of range`;
		}

		let counter = 0;
		let current = this.head;
		while (current) {
			if (counter === index) {
				return current;
			}
			current = current.next;
			counter++;
		}
		return "index out of range";
	}

	pop() {
		if (!this.head) {
			return this.head;
		}

		let current = this.head;
		if (!current.next) {
			let poppedValue = current.value;
			this.head = null;
			return poppedValue;
		}

		while (current.next) {
			if (!current.next.next) {
				let poppedValue = current.next.value;
				current.next = null;
				return poppedValue;
			}
			current = current.next;
		}
	}

	contains(value) {
		if (!this.head) {
			return false;
		}
		let current = this.head;
		while (current.next) {
			if (current.value === value) {
				return true;
			}
			current = current.next;
		}
		if (!current.next && current.value === value) {
			return true;
		}
		if (!current.next && current.value !== value) {
			return false;
		}
	}

	find(value) {
		if (!this.head) {
			return null;
		}
		let current = this.head;
		let index = 0;
		while (current) {
			if (current.value === value) {
				return index;
			}
			index++;
			current = current.next;
		}
		return null;
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

console.log(list.find("turtle"));

let value = list.pop();

console.log(list.find("turtle"));
