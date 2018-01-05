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
  console.log(str.split('').reverse().join(''));
}
reverse('1. Heel it now, dig?');


// Palindrome -------------------------2
// Reverse Int ------------------------3
// Anagrams ---------------------------4
// Capitalize--------------------------5
// MaxChar ----------------------------6
// Chunks -----------------------------7
// Steps ------------------------------8
// Pyramid ----------------------------9
// Vowels ----------------------------10
function vowels(str) {
  let vowelArr = str.match(/[aeiou]/gi);
  console.log(`10. Quanity of vowels: ${vowelArr.length}`);
}
vowels('Count the vowels in this string.');
// FizzBuzz --------------------------11
// Matrix ----------------------------12
