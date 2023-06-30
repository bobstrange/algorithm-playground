import { assertEquals } from "../deps.ts";

function climbStairs(n: number): number {
  if (n < 3) {
    return n;
  }

  let p2 = 1;
  let p1 = 2;
  let curr = 0;

  for (let i = 2; i < n; i++) {
    curr = p2 + p1;
    p2 = p1;
    p1 = curr;
  }
  return curr;
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
