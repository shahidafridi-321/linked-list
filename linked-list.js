// linked list manager class resposible for different operation on the list
class LinkedList {
	constructor() {
		// initializd head as null
		this.head = null;
	}

	// takes a value and appends a new node with that value it at the end of the list
	append(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode; // if the list is empty,add node at start
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next; // move to last node
			}
			current.next = newNode; // append at the end
		}
	}

	// appends value at the start of the list
	prepend(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode; //if the list is empty,add node at start
		} else {
			let currentList = this.head;
			this.head = newNode;
			newNode.next = currentList; // append the node at the start of the currentList
		}
	}

	// returns the size of the list
	size() {
		let size = 0;
		if (!this.head) {
			// checks if list is empty
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

	// returns the first node of the list
	headNode() {
		return this.head;
	}

	// returns the last node of the list
	tail() {
		if (!this.head) {
			return this.head; // if the list is empty return the head which will be the last node as well
		} else {
			let current = this.head;
			while (current.next) {
				// traverse the list until the last node
				current = current.next;
			}
			return current; // return last node
		}
	}

	// returns value at the given index
	at(index) {
		// if the index is negetive returns a message
		if (index < 0) {
			return `index out of range`;
		}

		let counter = 0;
		let current = this.head;
		while (current) {
			if (counter === index) {
				// traverse the list until found the node
				return current; // if found return the node
			}
			current = current.next;
			counter++;
		}
		return "index out of range"; // if not found returns a message
	}

	// removes a node at the end of the list
	pop() {
		// if the list is empty returns empty list
		if (!this.head) {
			return this.head;
		}
		// the list has only a single node
		let current = this.head;
		if (!current.next) {
			let poppedValue = current.value;
			this.head = null; // make the list empty
			return poppedValue; // returns the value removed
		}

		while (current.next) {
			// travese the list
			if (!current.next.next) {
				// checks if the last node is null
				let poppedValue = current.next.value; // store the value at the second last node
				current.next = null; // remove the second last node
				return poppedValue; // return the removed value
			}
			current = current.next;
		}
	}

	// returns true if the given value is found in list otherwise returns false
	contains(value) {
		if (!this.head) {
			// Return false if the list is empty
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

	// returns index of the given value if found otherwise returns null
	find(value) {
		if (!this.head) {
			return null; // Return null if the list is empty
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
	// formates the lsit
	toString() {
		if (!this.head) {
			// Return null if the list is empty
			return null;
		}
		let current = this.head;
		let string = "";
		while (current) {
			// traverse the list
			string += `( ${current.value} ) -> `; // add the current value to the string
			current = current.next;
		}
		string += "null";
		return string; // returns the final template string
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

/* let value = list.pop(); */

console.log(list.toString());
