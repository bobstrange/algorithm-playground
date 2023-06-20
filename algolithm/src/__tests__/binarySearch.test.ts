import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { binarySearch } from "../binarySearch.ts";

Deno.test("binary search", function () {
  const arr = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];

  assertEquals(binarySearch(arr, 69), true);
  assertEquals(binarySearch(arr, 1336), false);
  assertEquals(binarySearch(arr, 69420), true);
  assertEquals(binarySearch(arr, 69421), false);
  assertEquals(binarySearch(arr, 1), true);
  assertEquals(binarySearch(arr, 0), false);
});
