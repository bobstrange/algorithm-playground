export function search(arr: boolean[]): number {
  const jumpAmount = Math.floor(Math.sqrt(arr.length));

  let i = jumpAmount;
  // Find the first true value
  for (; i < arr.length; i += jumpAmount) {
    if (arr[i]) {
      break;
    }
  }
  // step back to the last false value
  i -= jumpAmount;

  // linear search from the last false value
  for (let j = 0; j < jumpAmount && i < arr.length; j++, i++) {
    if (arr[i]) {
      return i;
    }
  }
  // if we didn't find anything, return -1
  return -1;
}
