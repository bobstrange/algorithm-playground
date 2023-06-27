import { assertEquals } from "../deps.ts";

function strStr(haystack: string, needle: string): number {
  if (needle.length === 0) return 0;
  if (needle.length > haystack.length) return -1;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.substring(i, i + needle.length) === needle) {
        return i;
      }
    }
  }
  return -1;
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
