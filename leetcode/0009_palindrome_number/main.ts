// https://leetcode.com/problems/palindrome-number/

function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  const inputString = x.toString();
  const reverseString = inputString.split("").reverse().join("");
  return inputString === reverseString;
}
