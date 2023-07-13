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

function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const leftMaxDepth = maxDepth(root.left);
  const rightMaxDepth = maxDepth(root.right);

  return Math.max(leftMaxDepth, rightMaxDepth) + 1;
}

Deno.test("maxDepth([3,9,20,null,null,15,7]) returns 3", () => {
  const input = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
  );
  assertEquals(maxDepth(input), 3);
});

Deno.test("maxDepth([3,9,20,null,null,15,7]) returns 3", () => {
  const input = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
  );
  assertEquals(maxDepth(input), 3);
});

Deno.test("maxDepth([1,null,2]) returns 2", () => {
  const input = new TreeNode(1, null, new TreeNode(2));
  assertEquals(maxDepth(input), 2);
});
