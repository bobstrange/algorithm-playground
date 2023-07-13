import { assertEquals } from "$std/testing/asserts.ts";

function plusOne(digits: number[]): number[] {
  let carry = 1; // 初めの +1 を carry = 1 で表現する

  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += carry;
    if (digits[i] > 9) {
      digits[i] = 0;
      carry = 1;
    } else {
      carry = 0;
      break;
    }
  }
  if (carry === 1) {
    digits.unshift(1);
  }

  return digits;
}

Deno.test("plusOne([1, 2, 3]) returns [1, 2, 4]", () => {
  assertEquals(plusOne([1, 2, 3]), [1, 2, 4]);
});

Deno.test("plusOne([4, 3, 2, 1]) returns [4, 3, 2, 2]", () => {});

Deno.test("plusOne([9]) returns [1, 0]", () => {});
