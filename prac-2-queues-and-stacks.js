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

// Stack -----------------------

// Very similar to queue except last in first out, like a stack where you add
// and remove stuff from the top.

class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record); // adds record to the array at the end
  }

  pop() {
    return this.data.pop(); // Removes the last record
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);

s.pop(); // Removers and returns the last item
s.peek(); // Returns the last record without removing it

//-----------------------------------

// Using two stacks as if they were one queue

/*
The following is probably of little practical use, but it is an exercise in
how queues and stacks work. Create a queue that interacts not with an array
but with two stacks, but build the queue so a user can call add, remove and peek
and expect queue behavior (ie, first in, first out)
*/

class Queue2 {
  constructor() {
    /*
    Create two stacks instead of an array. The first will be the main one and
    the second a sort of holding bin.
    */
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    // NOTE that this 'peek' calls the Stack peak method, not the one below
    while (this.first.peek()) {
      // Push items one by one from first to second stack
      this.second.push(this.first.pop());
    }
    // Pop of the 'top' record of the second stack (which came off the bottom
    // of the first, and hold it)
    let holdRecord = this.second.pop();

    // Put all of the other records back
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    // then return this one
    return holdRecord;
  }

  peek() {
    // NOTE: This 'peek' below calls the Stack peak method
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    // Much the same as above, except we hold this one AND put it back...
    let holdRecord = this.second.peek();

    while(this.second.peek()) {
      this.first.push(this.second.pop());
    }
    // then return it (w/o deleting it)
    return holdRecord;
  }
}
