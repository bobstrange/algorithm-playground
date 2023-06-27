import { assertEquals } from "../deps.ts";

function strStr(haystack: string, needle: string): number {
  return haystack.indexOf(needle);
}

Deno.test("strStr('sadbutsad', 'sad') returns 0", () => {
  assertEquals(strStr("sadbutsad", "sad"), 0);
});

Deno.test("strStr('a', 'a') returns 0", () => {
  assertEquals(strStr("a", "a"), 0);
});

Deno.test("strStr('leetcode', 'leeto') returns -1", () => {
  assertEquals(strStr("leetcode", "leeto"), -1);
});
