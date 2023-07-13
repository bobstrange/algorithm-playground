import { assertEquals } from "$std/testing/asserts.ts";

function removeDuplicates(nums: number[]): number {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      nums[i + 1] = nums[j];
      i++;
    }
  }

  return i + 1;
}

Deno.test("removeDuplicates([1,1,2])", () => {
  const nums = [1, 1, 2];
  const expected = [1, 2];
  for (let i = 0; i < expected.length; i++) {
    assertEquals(nums[i], expected[i]);
  }
});

Deno.test("removeDuplicates([0,0,1,1,1,2,2,3,3,4])", () => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  const expected = [0, 1, 2, 3, 4];
  assertEquals(removeDuplicates(nums), expected.length);
  for (let i = 0; i < expected.length; i++) {
    assertEquals(nums[i], expected[i]);
  }
});
