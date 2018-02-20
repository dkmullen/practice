/*jshint esversion: 6 */

const nodeOne = {
  data: 123
};

const nodeTwo = {
  data: 456
};

nodeOne.next = nodeTwo;

/*
console.log(nodeOne) produces: { data: 123, next: { data: 456 } }
*/

// console.log(nodeOne);

/*
Link list: Ordered collection of data, made up of nodes. Each node contains some
data plus a reference to the next node.

Each node has a 'data bucket' and a ref to next.

Head node: First in list
Tail node: Last, and can be identified by the fact that it has no ref to next node
*/

class Node {
  // By convention, setting default of next to null rather than letting it be
  // undefined indicates we intentionally wanted to default to null
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  // Func to insert data in the head position, pushing other data (if any) down the chain
  insertFirst(data) { //Before this function runs,
    // this.head refers a previously-created node. Our function below creates a
    // new node, inserts it into the head position, and then the previous this.head
    // becomes 'next' as per the Node constructor, above
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    // If there is a head node...
    while (node) {
      counter++;
      // next will be either null or the next node
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if(!this.head) {
      return null;
    }
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  /*
  For clear(), remember that without the head pointing to next, there is no
  linked list, so no need to delete the nodes. Just disconnect them.
  */
  clear() {
    this.head = null;
  }

  // Likewise, 'remove' the first node simply by pointing the head to the next one
  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
  }

  removeLast() {
    if(!this.head) { // if zero nodes...
      return;
    }
    if(!this.head.next) { // if only one node...
      this.head = null;
      return;
    }
    // if two or more nodes
    let previous = this.head; // ie, the first node
    let node = this.head.next; // ie, the second node

    // The loop runs only if node 2 points to another node
    while (node.next) {
      previous = node; // advance previous one node
      node = node.next; // and advance node one node
    }
    // When you get to the last node, make previous the last node by
    // changing its 'next' ref
    previous.next = null;
  }

  // Building the method independent of other methods
  insertLast2(data) {
    if(!this.head) {
      this.head = new Node(data, null);
    }
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = new Node(data, null);
  }

// Using the previously-created getLast()
  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data); // Remember 'next' is 'null' by default in our constructor
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    // 'while node' handles an index that is out of range. Could call size() to
    // ensure we're in range but size iterates over the whole list, and then
    // if we're in range, we have to start interating again.
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return null;
    }
    if (index === 0 && !this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.getAt(index - 1);
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (index === 0) { // Takes care of an empty list OR one with links
      return this.insertFirst(data);
    }

    let node = this.getAt(index);
    let previous = this.getAt(index - 1);
    let newNode = new Node(data, node); // Set to point at the node that
                                        // previously held the index
    if (!node) { // If index is out of range
      this.insertLast(data); // just put it at the end
      return;
    }
    // Barring the above edge case, point 'previous' to the new node
    previous.next = newNode;
  }

  forEach(func) {
    let node = this.head;
    while (node) {
      func(node);
      node = node.next;
    }
  }

  // Some built-in types have their own iterator. Object doesn't. We can set
// it up like this
/* This generator below allows us to use a for of loop to iterate thru the linked list
*/
*[Symbol.iterator]() {
  let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

} // End of the LinkedList class

// A little data to test...
let myList = new LinkedList();
myList.insertFirst('red');
myList.insertFirst('blue');
myList.insertFirst('green');
myList.insertFirst('orange');
myList.insertFirst('white');

myList.forEach((node, index) => {
  console.log(node, 'index');
});
// // myList.removeLast();
// console.log(myList.getAt(2));
// myList.removeAt(1);
// console.log(myList.getAt(2));

// Generators
  function *list() { // generators are marked w/an *
    yield 1; // When a generator hits a yield statement, it returns the value & pauses
    yield 2;
  }

const generator = list();
generator.next(); // returns value: 1, done: false
generator.next(); // returns v 2 done false
generator.next(); // returns done: true
