import { assertEquals } from "$std/testing/asserts.ts";

function lengthOfLastWord(s: string): number {
  const words = s.split(" ").filter((word) => word.length > 0);
  return words[words.length - 1].length;
}

Deno.test("lengthOfLastWord('Hello World') returns 5", () => {
  assertEquals(lengthOfLastWord("Hello World"), 5);
});

Deno.test("   fly me   to   the moon  returns 4", () => {
  assertEquals(lengthOfLastWord("   fly me   to   the moon  "), 4);
});

Deno.test("luffy is still joyboy returns 6", () => {
  assertEquals(lengthOfLastWord("luffy is still joyboy"), 6);
});
