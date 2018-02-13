/*jshint esversion: 6 */

const nodeOne = {
  data: 123
};

const nodeTwo = {
  data: 456
};

nodeOne.next = nodeTwo;

/*
The above produces: { data: 123, next: { data: 456 } }
*/

console.log(nodeOne);

/*
Link list: Ordered collection of data, made up of nodes. Each node contains some
data plus a reference to the next node.

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
}
