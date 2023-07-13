import { assertEquals } from "$std/testing/asserts.ts";

// with splice (slower)
function removeDuplicates(nums: number[]): number {
  if (nums.length === 1) {
    return 1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
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
