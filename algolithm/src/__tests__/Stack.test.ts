import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";

import { Stack } from "../Stack.ts";

Deno.test("stack", function () {
  const list = new Stack<number>();

  list.push(5);
  list.push(7);
  list.push(9);

  assertEquals(list.pop(), 9);
  assertEquals(list.length, 2);

  list.push(11);
  assertEquals(list.pop(), 11);
  assertEquals(list.pop(), 7);
  assertEquals(list.peek(), 5);
  assertEquals(list.pop(), 5);
  assertEquals(list.pop(), undefined);

  list.push(69);
  assertEquals(list.peek(), 69);
  assertEquals(list.length, 1);
});
