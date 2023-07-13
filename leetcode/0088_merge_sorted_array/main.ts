import { assertEquals } from "$std/testing/asserts.ts";

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
}

Deno.test(
  "merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3) returns [1, 2, 2, 3, 5, 6]",
  () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const m = 3;
    const nums2 = [2, 5, 6];
    const n = 3;
    merge(nums1, m, nums2, n);
    assertEquals(nums1, [1, 2, 2, 3, 5, 6]);
  }
);

Deno.test("merge([1], 1, [], 0) returns [1]", () => {
  const nums1 = [1];
  const m = 1;
  const nums2: number[] = [];
  const n = 0;
  merge(nums1, m, nums2, n);
  assertEquals(nums1, [1]);
});

Deno.test("merge([0], 0, [1], 1) returns [1]", () => {
  const nums1 = [0];
  const m = 0;
  const nums2 = [1];
  const n = 1;
  merge(nums1, m, nums2, n);
  assertEquals(nums1, [1]);
});
