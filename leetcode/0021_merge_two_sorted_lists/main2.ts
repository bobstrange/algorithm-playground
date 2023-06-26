import { assertEquals } from "../deps.ts";
import { ListNode, createList } from "./util.ts";

// With recursion
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }
  list2.next = mergeTwoLists(list1, list2.next);
  return list2;
}

Deno.test("mergeTwoLists(list1 = [1,2,4], list2 = [1,3,4])", () => {
  const list1 = createList([1, 2, 4]);
  const list2 = createList([1, 3, 4]);
  const expected = createList([1, 1, 2, 3, 4, 4]);
  assertEquals(mergeTwoLists(list1, list2), expected);
});

Deno.test("mergeTwoLists(list1 = [], list2 = [])", () => {
  const list1 = createList([]);
  const list2 = createList([]);
  const expected = createList([]);
  assertEquals(mergeTwoLists(list1, list2), expected);
});

Deno.test("mergeTwoLists(list1 = [], list2 = [0])", () => {
  const list1 = createList([]);
  const list2 = createList([0]);
  const expected = createList([0]);
  assertEquals(mergeTwoLists(list1, list2), expected);
});
