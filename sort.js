/*jshint esversion: 6 */

// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length -i -1); j++) {
      if (arr[j] > arr[j+1]) {
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i; // assumes current index is the lowest value. 'Prove me wrong!'
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) { // if you DO find a lower one...
        indexOfMin = j; // change indexOfMin and prove THAT one wrong
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) { // ie, the point of this is to keep splitting till we get to one
    return arr;
  }

  // Divide arr into two equal halves
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center); // slice doesn't include last value (center)
  const right = arr.slice(center);

// The big recursion!
  return merge(mergeSort(left), mergeSort(right));
}

// merge takes two SORTED arrays and combines them into one
function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  // Essentially the same as concatenating all three
  return [...results, ...left, ...right];
}
