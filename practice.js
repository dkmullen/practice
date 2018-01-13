/*jshint esversion: 6 */

// Reverse ----------------------------1
function reverse1(str) {
  let rev = '';
  for (let char of str) {
    rev = char + rev;
  }
  return rev; // console log it for test
}

// Or...
function reverse(str) {
  console.log('1. ' + str.split('').reverse().join(''));
}
reverse('Heel it now, dig?');


// Palindrome -------------------------2
function palindrome(str) {
  let lcStr = str.toLowerCase();
  let newStr = str.toLowerCase().split('').reverse().join('');
  console.log(`2. T or F: ${newStr} is a palindrome of ${str}. ${lcStr === newStr}`);
}
palindrome('Abba');

// Reverse Int ------------------------3
function reverseInt(int) {
  console.log('3. ' + parseInt(int.toString().split('').reverse().join('')) * Math.sign(int));
}
reverseInt(-1234500);

// Anagrams ---------------------------4
function anagrams(str1, str2) {
  function flatten(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  }
  console.log(`4. Anagrams?' "${str1}" and "${str2}" - ${flatten(str1) === flatten(str2)}`);
}
anagrams('Clint Eastwood', 'Old west action');

// Capitalize--------------------------5
function capitalize(str) {
  let caps = [];
  let words = str.split(' ');
  for (let word of words) {
    caps.push(word[0].toUpperCase() + word.slice(1));
  }
  console.log('5. ' + caps.join(' '));
}
capitalize('Fourscore and seven years ago...');

// MaxChar ----------------------------6
function maxChar(str) {
  let charMap = {};
  for (let char of str.replace(/[\s]/g, '')) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  let max = 0,
    maxChar = '';

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  console.log('6. ' + maxChar + ' : ' + max);
}
maxChar('Jump back! What\'s that sound? Here she comes, full blast and top down!');

// Chunks -----------------------------7
function chunk(arr, size) {
  let chunked = [];
  for (let item in arr) {
    let lastItem = chunked[chunked.length -1];
    if(!lastItem || lastItem.length === size) {
      chunked.push([item]);
    } else {
      lastItem.push(item);
    }
  }
  console.log('7. ');
  console.log(chunked);
}
chunk([1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,2,1], 4);

// Steps ------------------------------8
function steps1(n) {
  for (let row = 1; row <= n; row++) {
    console.log('#'.repeat(row) + '-'.repeat(n-row));
  }
}

function steps(n) {
  console.log('8. ');
  for (let row = 0; row < n; row++) {
    let step = '';
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        step += '#';
      } else {
        step += '-';
      }
    }
    console.log(step);
  }
}
steps(5);

// Pyramid ----------------------------9
function pyramid(n) {
  console.log('9.');
  let midpoint = Math.floor((n*2-1)/2);
  for (let row = 0; row < n; row++) {
    let step = '';
    for (let col = 0; col < n*2-1; col++) {
      if (midpoint - row <= col && midpoint + row >= col) {
        step += '#';
      } else {
        step += '-';
      }
    }
    console.log(step);
  }
}
pyramid(5);

// Vowels ----------------------------10
function vowels(str) {
  let vowelArr = str.match(/[aeiou]/gi);
  console.log(`10. Quanity of vowels: ${vowelArr.length}`);
}
vowels('Count the vowels in this string.');

// FizzBuzz --------------------------11
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i  % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
// fizzBuzz(46);

// Matrix ----------------------------12

function matrix(n) {
  // Make an empty array of empty arrays. We can assign values to indicies in an array
  // that have not been initialized -ie arr[3] = "hi", and this will be assigned
  // to index 3 even though the rest of the array is empty
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1,
    startColumn = 0,
    endColumn = n - 1,
    startRow = 0,
    endRow = n - 1;

  // Once cols and rows meet up, we are done
  while (startColumn <= endColumn && startRow <= endRow) {

    // top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++; // 1

    // right col except first row
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--; // 1

    // // bottom row excluding last col
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--; // 1

    // // A for-loop for the left col excluding last and first row
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  // 123
  // 674
  // 985

  console.log(results);
}
matrix(3);
