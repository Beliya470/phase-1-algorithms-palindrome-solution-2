// Explanation: This function checks if a given word is palindrome or not by comparing characters from start to end and end to start simultaneously.
// If at any point, these characters do not match, function returns false indicating word is not a palindrome. 
// If all characters match till we reach the middle of word, function returns true indicating word is a palindrome.

function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }
  return true;
}

// Test cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
