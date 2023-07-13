import { assertEquals } from "$std/testing/asserts.ts";

function climbStairs(n: number): number {
  if (n < 3) {
    return n;
  }

  return 2 * climbStairs(n - 2) + climbStairs(n - 3);
}

Deno.test("climbStairs(2) returns 2", () => {
  assertEquals(climbStairs(2), 2);
});

Deno.test("climbStairs(3) returns 3", () => {
  assertEquals(climbStairs(3), 3);
});

Deno.test("climbStairs(4) returns 5", () => {
  assertEquals(climbStairs(4), 5);
});
