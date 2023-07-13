import { assertEquals } from "$std/testing/asserts.ts";
import { ListNode, getListValues, createList } from "./util.ts";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const sortedList = getListValues(list1)
    .concat(getListValues(list2))
    .sort((a, b) => a - b);
  return createList(sortedList);
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
