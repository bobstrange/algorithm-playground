// https://leetcode.com/problems/palindrome-number/

function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  const inputString = x.toString();
  const reverseString = inputString.split("").reverse().join("");
  return inputString === reverseString;
}

// 文字列に変換しない場合
function isPalindrome2(x: number): boolean {
  // 10 の剰余で下一桁を取得
  // 10 で除算で桁を下げる
  // 真ん中の桁にたどり着くまで行う

  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let revertedNumber = 0;

  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // 桁数が奇数の場合
  // 入力 12321 x = 12 revertedNumber = 123 になるので Math.floor(revertedNumber / 10) で真ん中の桁を消すことができる
  return x === revertedNumber || x === Math.floor(revertedNumber / 10);
}
