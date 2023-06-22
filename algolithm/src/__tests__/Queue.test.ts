import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import Queue from "../Queue.ts";

Deno.test("queue", function () {
  const list = new Queue<number>();

  list.enqueue(5);
  list.enqueue(7);
  list.enqueue(9);

  assertEquals(list.dequeue(), 5);
  assertEquals(list.length, 2);

  list.enqueue(11);

  assertEquals(list.dequeue(), 7);
  assertEquals(list.dequeue(), 9);
  assertEquals(list.peek(), 11);
  assertEquals(list.dequeue(), 11);
  assertEquals(list.dequeue(), undefined);
  assertEquals(list.length, 0);

  list.enqueue(69);
  assertEquals(list.peek(), 69);
  assertEquals(list.length, 1);
});
