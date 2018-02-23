/*jshint esversion: 6 */

// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null; // ie, the head of the tree
  }

  /* The two methods below traverse the tree either by level (BF) or top to bottom
  then back to top (DF). In each case, you create an array, pull out the first node
  to work on, and add its children. The only diff - add them to front so they get
  pulled out first, or to the end, so they get dealt with last.

  */
  traverseBF(fn) { // breadth first traverse (go across...)
    const arr = [this.root]; // start with the head (root) in an array
    while (arr.length) { // iterate while arr has any length
      const node = arr.shift(); // pull the first element out of the array
      // ...and add its children to the end of the array
      arr.push(...node.children); // spread operator, works like looping over the arr
      fn(node); // run the inputed fn on the node, and move on
    }
  }

  traverseDF(fn) { // depth first traverse (go down the left side)
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children); // Add children to FRONT of arr
      fn(node);
    }
  }
}

// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// My solution
function levelWidth2(root) {
  let arr = [root, 's']; // The 's' is an end-of-line indicator
  let counters = [];
  let counter = 0;
  while (arr.length) {
    const node = arr.shift(); // pull off first node
    if (node !== 's') {
      arr.push(...node.children); // add its children to the end of the arr
      counter++;
    } else { // if we get the 's'...
      counters.push(counter); // add counter to counters arr...
      counter = 0; // and reset it
      if (arr.length) { // check to see if arr is empty or else an infinite loop
      arr.push(node);
      }
    }
  }
  return counters;
}


// Instructor's solution
function levelWidth(root) {
  const arr = [root, 's'];
  const counters = [0];

  while (arr.length > 1) {
    const node = arr.shift();
    if (node === 's') {
      counters.push(0);
      arr.push('s');
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
}
