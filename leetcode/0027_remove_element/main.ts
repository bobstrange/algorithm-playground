import { assertEquals } from "$std/testing/asserts.ts";

function removeElement(nums: number[], val: number): number {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}

Deno.test("removeElement([3, 2, 2, 3], 3) to eq 2", () => {
  assertEquals(removeElement([3, 2, 2, 3], 3), 2);
});

Deno.test("removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2) to eq 5", () => {
  assertEquals(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);
});
