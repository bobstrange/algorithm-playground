import { assertEquals } from "../deps.ts";

function isValid(s: string): boolean {
  const input = s.split("");

  if (input.length % 2 === 1) {
    return false;
  }
  const stack: string[] = [];

  const leftBracket = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  for (let i = 0; i < input.length; i++) {
    const current = input[i];

    if (leftBracket.has(current)) {
      stack.push(current);
    } else {
      if (stack.length === 0) {
        return false;
      }
      if (leftBracket.get(stack.pop() as string) !== current) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

Deno.test("isValid('{([])} returns true", () => {
  assertEquals(isValid("{([][])}"), true);
});
