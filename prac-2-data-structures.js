/*jshint esversion: 6 */

// Queues ------------------------------------------------

// Here we use ES6 classes and attch specific methods onto an array
// A queue is a first-in first-out structure. Added elements go in at 0
// In an ES6 class, a constructor method is what is automatically called
// when a new instance of class is made.

class Queue {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.unshift(record); // Adds record to index 0
  }
  remove() {
    return this.data.pop(); // Removes and returns last item
  }
  peek() {
    return this.data[this.data.length - 1]; // Returns last item w/o removing it
  }
}

// Using Queues to Weave - 'peek' is used to keep from adding 'undefined'
// to the new queue. The idea is to add to 'results' the last elem of
// sourceOne, then from sourceTwo, alternating till both are empty, w/o
// adding 'undefined' when one or both run out.

function weave(sourceOne, sourceTwo) {
  const results = new Queue();
  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      results.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      results.add(sourceTwo.remove());
    }
  }
  console.log(results);
}

const one = new Queue();
const two = new Queue();

one.add(5);
one.add(4);
one.add(3);
one.add(2);
one.add(1);

two.add('e');
two.add('d');
two.add('c');
two.add('b');

weave(one, two);
