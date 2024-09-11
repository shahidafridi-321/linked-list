# LinkedList Implementation in JavaScript

This project is a simple implementation of a **Singly Linked List** data structure in JavaScript. It provides basic operations such as appending, prepending, finding, and removing nodes, as well as other useful functionalities.

## Features

- **Append**: Add a new node with a value to the end of the list.
- **Prepend**: Add a new node with a value to the beginning of the list.
- **Size**: Returns the total number of nodes in the list.
- **Head Node**: Returns the first node of the list.
- **Tail Node**: Returns the last node of the list.
- **At**: Retrieve the node at a given index.
- **Pop**: Remove and return the last node of the list.
- **Contains**: Check whether a value exists in the list.
- **Find**: Find the index of the node that contains a specific value.
- **ToString**: Represent the list in a string format, showing all nodes in sequence.

## Project Structure

```plaintext
LinkedList/
├── main.mjs         # Contains testing code 
├── node.mjs         # Contains the Node class used in the linked list
└── linkedlist.mjs   # Contains the LinkedList class with all methods
```

### Node Class (node.mjs)

The `Node` class represents a single node in the list, containing:
- `value`: The data stored in the node.
- `next`: A reference to the next node in the list.

### LinkedList Class (linkedlist.mjs)

The `LinkedList` class manages a collection of `Node` objects, allowing various operations to be performed on the list. It contains the following methods:

- `append(value)`: Appends a new node with the specified value to the end of the list.
- `prepend(value)`: Prepends a new node with the specified value at the beginning of the list.
- `size()`: Returns the number of nodes in the list.
- `headNode()`: Returns the first node in the list.
- `tail()`: Returns the last node in the list.
- `at(index)`: Returns the node at the specified index.
- `pop()`: Removes and returns the last node in the list.
- `contains(value)`: Returns `true` if the specified value is found in the list; otherwise, `false`.
- `find(value)`: Returns the index of the node containing the specified value, or `null` if not found.
- `toString()`: Converts the linked list into a string format, representing the sequence of nodes.

## Usage

1. **Installation**: Clone the repository and navigate to the project directory.
   ```bash
   git clone https://github.com/shahidafridi-321/LinkedList
   cd LinkedList
   ```

2. **Import the Classes**: In your JavaScript file, import the `LinkedList` and `Node` classes.
   ```javascript
   import { Node } from './node.mjs';
   import { LinkedList } from './linkedlist.mjs';
   ```

3. **Example Usage**:
   ```javascript
   const list = new LinkedList();

   list.append("dog");
   list.append("cat");
   list.append("parrot");

   console.log(list.toString());  // ( dog ) -> ( cat ) -> ( parrot ) -> null
   console.log(list.size());      // 3
   ```

## Contributing

Feel free to submit issues or contribute to the project. To contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push your branch and create a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

---
