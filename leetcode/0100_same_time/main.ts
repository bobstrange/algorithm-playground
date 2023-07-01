import { assertEquals } from "../deps.ts";

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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true;
  }

  if (p === null || q === null) {
    return false;
  }

  if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

Deno.test("isSameTree([1,2,3], [1,2,3]) returns true", () => {
  const input1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  const input2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  assertEquals(isSameTree(input1, input2), true);
});

Deno.test("isSameTree([1,2], [1,null,2]) returns false", () => {
  const input1 = new TreeNode(1, new TreeNode(2), null);
  const input2 = new TreeNode(1, null, new TreeNode(2));
  assertEquals(isSameTree(input1, input2), false);
});

Deno.test("isSameTree([1,2,1], [1,1,2]) returns false", () => {
  const input1 = new TreeNode(1, new TreeNode(2), new TreeNode(1));
  const input2 = new TreeNode(1, new TreeNode(1), new TreeNode(2));
  assertEquals(isSameTree(input1, input2), false);
});
