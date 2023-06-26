export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function getListValues(list: ListNode | null): number[] {
  const values: number[] = [];
  while (list) {
    values.push(list.val);
    list = list.next;
  }
  return values;
}

export function createList(values: number[]): ListNode | null {
  let list: ListNode | null = null;
  for (let i = values.length - 1; i >= 0; i--) {
    list = new ListNode(values[i], list);
  }
  return list;
}
