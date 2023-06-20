import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { bubbleSort } from "../bubbleSort.ts";

Deno.test("bubble-sort", function () {
  const arr = [9, 3, 7, 4, 69, 420, 42];

  bubbleSort(arr);
  assertEquals(arr, [3, 4, 7, 9, 42, 69, 420]);
});
