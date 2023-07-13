import { assertEquals } from "$std/testing/asserts.ts";

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) {
    return null;
  }

  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid]);

  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
}

Deno.test(
  "sortedArrayToBST([-10,-3,0,5,9]) returns [0,-3,9,-10,null,5]",
  () => {
    const input = [-10, -3, 0, 5, 9];
    const output = new TreeNode(
      0,
      new TreeNode(-3, new TreeNode(-10)),
      new TreeNode(9, new TreeNode(5))
    );
    assertEquals(sortedArrayToBST(input), output);
  }
);

Deno.test("sortedArrayToBST([1,3]) returns [3,1]", () => {
  const input = [1, 3];
  const output = new TreeNode(3, new TreeNode(1));
  assertEquals(sortedArrayToBST(input), output);
});
