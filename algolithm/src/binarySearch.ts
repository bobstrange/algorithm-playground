export function binarySearch(arr: number[], value: number): boolean {
  let lo = 0;
  let hi = arr.length;

  do {
    const m = Math.floor(lo + (hi - lo) / 2);
    const v = arr[m];

    if (v === value) {
      return true;
    } else if (v > value) {
      hi = m;
    } else {
      lo = m + 1;
    }
  } while (lo < hi);
  return false;
}
