import { assertEquals } from "../deps.ts";

function lengthOfLastWord(s: string): number {
  // i を 0 から length までインクリメントする
  // s[i] が空白でない場合 count をインクリメントする
  // s[i] が空白でない場合 s[i-1] が空白の場合 count を 1 にする

  // ループの数が減るのでこちらの方が速度が早い
  // ArrayList の複製も無いのでメモリの使用量も少ない
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      if (s[i - 1] === " ") {
        count = 0;
      }
      count++;
    }
  }
  return count;
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
