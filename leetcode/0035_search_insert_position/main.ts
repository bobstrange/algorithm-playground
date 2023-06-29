import { assertEquals } from "../deps.ts";

function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // if not found, left is the index of the first element that is larger than target
  return left;
}

Deno.test("searchInsert([1,3,5,6], 5) returns 2", () => {
  assertEquals(searchInsert([1, 3, 5, 6], 5), 2);
});

Deno.test("searchInsert([1,3,5,6], 2) returns 1", () => {
  assertEquals(searchInsert([1, 3, 5, 6], 2), 1);
});

Deno.test("searchInsert([1,3,5,6], 7) returns 4", () => {
  assertEquals(searchInsert([1, 3, 5, 6], 7), 4);
});
