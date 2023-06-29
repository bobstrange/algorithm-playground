import { assertEquals } from "../deps.ts";

function mySqrt(x: number): number {
  let z = x;

  while (Math.abs(x - z * z) > 0.1) {
    z = z - (z * z - x) / (2 * z);
  }
  return Math.floor(z);
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
