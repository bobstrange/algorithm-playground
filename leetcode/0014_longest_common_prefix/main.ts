import { assertEquals } from "$std/testing/asserts.ts";

function longestCommonPrefix(strs: string[]): string {
  const minLength =
    strs
      .map((str) => str.length)
      .sort((a, b) => a - b)
      .at(0) || 0;

  const prefix = [];

  for (let i = 0; i < minLength; i++) {
    // 各 str の i 番目の文字が共通であれば、prefix に追加
    const char = strs.at(0)?.charAt(i);
    const isDifferent = strs.some((str) => str.charAt(i) !== char);
    if (isDifferent) {
      break;
    }
    prefix.push(char);
  }
  return prefix.join("");
}

Deno.test("['flower', 'flow', 'flight'] returns 'fl'", () => {
  assertEquals(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
});

Deno.test("['dog', 'racecar', 'car'] returns ''", () => {
  assertEquals(longestCommonPrefix(["dog", "racecar", "car"]), "");
});
