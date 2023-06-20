import { assertEquals } from "https://deno.land/std@0.171.0/testing/asserts.ts";
import { search } from "../searchTwoCrystalBalls.ts";

Deno.test("two crystal balls", function () {
  let idx = Math.floor(Math.random() * 10000);
  const data = new Array(10000).fill(false);

  for (let i = idx; i < 10000; ++i) {
    data[i] = true;
  }

  assertEquals(search(data), idx);
  assertEquals(search(new Array(821).fill(false)), -1);
});
