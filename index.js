function isPalindrome(word) {
    let backwardWord = word.split("").reverse().join("");
    return word === backwardWord;
  }


/* 
   take an argument of a word
  split the word by letters into an array.
  add each letter of that array into a new array in revers order.
  compare to the two arrays.
*/

/*
  The function takes the word, splits it into an array, reverses the array, then rejoins the array. The original word is compared to the rejoined array and returns a Boolean value. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
