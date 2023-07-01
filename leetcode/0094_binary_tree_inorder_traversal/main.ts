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

function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }

  const result: number[] = [];
  const stack: TreeNode[] = [];

  let curr: TreeNode | null = root;

  while (curr !== null || stack.length > 0) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop()!;
    result.push(curr.val);
    curr = curr.right;
  }

  return result;
}

Deno.test("inorderTraversal([1,null,2,3]) returns [1,3,2]", () => {
  const input = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
  const expected = [1, 3, 2];
  assertEquals(inorderTraversal(input), expected);
});

Deno.test("inorderTraversal([]) returns []", () => {
  const input = null;
  const expected: number[] = [];
  assertEquals(inorderTraversal(input), expected);
});

Deno.test("inorderTraversal([1]) returns [1]", () => {
  const input = new TreeNode(1);
  const expected = [1];
  assertEquals(inorderTraversal(input), expected);
});
