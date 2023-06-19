import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";

import { linearSearch } from "../linearSearch.ts";

Deno.test("linearSearch", () => {
  const arr = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
  assertEquals(linearSearch(arr, 69), true);
  assertEquals(linearSearch(arr, 1336), false);
  assertEquals(linearSearch(arr, 69420), true);
  assertEquals(linearSearch(arr, 69421), false);
  assertEquals(linearSearch(arr, 1), true);
  assertEquals(linearSearch(arr, 0), false);
});
