import { assertEquals } from "$std/testing/asserts.ts";

type Roman = "I" | "V" | "X" | "L" | "C" | "D" | "M";
function romanToInt(s: string): number {
  const map = new Map<Roman, number>([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let target = s.replace("IV", "IIII").replace("IX", "VIIII");
  target = target.replace("XL", "XXXX").replace("XC", "LXXXX");
  target = target.replace("CD", "CCCC").replace("CM", "DCCCC");

  return target.split("").reduce((total, current) => {
    const num = map.get(current as Roman) as number;
    return total + num;
  }, 0);
}

Deno.test("romanToInt('III') returns 3", () => {
  assertEquals(romanToInt("III"), 3);
});

Deno.test("romanToInt('LVIII') returns 58", () => {
  assertEquals(romanToInt("LVIII"), 58);
});

Deno.test("romanToInt('MCMXCIV') returns 1994", () => {
  assertEquals(romanToInt("MCMXCIV"), 1994);
});
