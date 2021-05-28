// https://leetcode.com/problems/two-sum

function twoSum(nums: number[], target: number): number[] {
  // Brute force
  // for (let i = 0; i < nums.length - 1; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     const first = nums[i];
  //     const second = nums[j];
  //     if (first + second === target) {
  //       return [i, j];
  //     }
  //   }
  // }

  // My Solution
  // Hash Table を利用して、対応する値の lookup のオーダーを O(1) にする
  // Two-pass Hash Table と言うらしい
  const numMap = nums.reduce((acc, cur, idx) => {
    acc[cur] = idx;
    return acc;
  }, {});

  for (let i = 0; i < nums.length - 1; i++) {
    const first = nums[i];
    const diff = target - first; // 解答例では complement となっていた
    const idx = numMap[diff];

    if (idx && i !== idx) {
      // 解答例では Map が キーを保持するか？ と 取得された index が i と異なるかをチェックしていた
      return [i, idx];
    }
  }
  // ループを 2 回回さずに、1 回にすることもできる
}

// 1 回ループバージョン
function toSumModified(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [i, map.get(complement) as number];
    }
    map.set(nums[i], i);
  }

  throw new Error("No solution");
}
