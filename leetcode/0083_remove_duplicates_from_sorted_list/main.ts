import { assertEquals } from "$std/testing/asserts.ts";

type ListNode = {
  val: number;
  next: ListNode | null;
};

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  let curr = head;
  while (curr.next !== null) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return head;
}

function arrayToListNode(arr: number[]): ListNode | null {
  if (arr.length === 0) {
    return null;
  }

  const head = {
    val: arr[0],
    next: null,
  };

  let curr: ListNode = head;
  for (let i = 1; i < arr.length; i++) {
    curr.next = {
      val: arr[i],
      next: null,
    };
    curr = curr.next;
  }

  return head;
}

function listNodeToArray(head: ListNode | null): number[] {
  const arr: number[] = [];
  let curr = head;
  while (curr !== null) {
    arr.push(curr.val);
    curr = curr.next;
  }
  return arr;
}

Deno.test("deleteDuplicates(1->1->2) returns 1->2", () => {
  const input = arrayToListNode([1, 1, 2]);
  const expected = [1, 2];
  assertEquals(listNodeToArray(deleteDuplicates(input)), expected);
});

Deno.test("deleteDuplicates(1->1->2->3->3) returns 1->2->3", () => {
  const input = arrayToListNode([1, 1, 2, 3, 3]);
  const expected = [1, 2, 3];
  assertEquals(listNodeToArray(deleteDuplicates(input)), expected);
});
