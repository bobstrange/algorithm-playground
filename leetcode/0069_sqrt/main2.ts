import { assertEquals } from "$std/testing/asserts.ts";

function mySqrt(x: number): number {
  let result = 0;

  let left = 0;
  let right = x;
  while (right >= left) {
    const middle = left + Math.floor((right - left) / 2);
    const square = middle * middle;
    if (square === x) {
      return middle;
    } else if (square < x && square > result) {
      result = middle;
    }
    if (square > x) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return result;
}

Deno.test("mySqrt(4) returns 2", () => {
  assertEquals(mySqrt(4), 2);
});

Deno.test("mySqrt(8) returns 2", () => {
  assertEquals(mySqrt(8), 2);
});

Deno.test("mySqrt(0) returns 0", () => {
  assertEquals(mySqrt(0), 0);
});
