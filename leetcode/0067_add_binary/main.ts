import { assertEquals } from "../deps.ts";

function addBinary(a: string, b: string): string {
  let carry = false;
  const result = Array(Math.max(a.length, b.length)).fill("0");

  if (a.length > b.length) {
    b = b.padStart(a.length, "0");
  } else {
    a = a.padStart(b.length, "0");
  }

  for (let i = Math.max(a.length, b.length) - 1; i >= 0; i--) {
    const aDigit = a[i];
    const bDigit = b[i];

    let count = 0;
    if (aDigit === "1") {
      count++;
    }
    if (bDigit === "1") {
      count++;
    }
    if (carry) {
      count++;
    }

    if (count === 3) {
      carry = true;
      result[i] = "1";
    } else if (count === 2) {
      carry = true;
      result[i] = "0";
    } else if (count === 1) {
      carry = false;
      result[i] = "1";
    } else {
      carry = false;
      result[i] = "0";
    }
  }
  if (carry) {
    result.unshift("1");
  }
  return result.join("");
}

Deno.test("addBinary('11', '1') returns '100'", () => {
  assertEquals(addBinary("11", "1"), "100");
});

Deno.test("addBinary('1010', '1011') returns '10101'", () => {
  assertEquals(addBinary("1010", "1011"), "10101");
});
