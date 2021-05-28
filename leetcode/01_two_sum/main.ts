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

  const numMap = nums.reduce((acc, cur, idx) => {
    acc[cur] = idx
    return acc
  }, {})
  for (let i = 0; i < nums.length - 1; i++) {
    const first = nums[i];
    const diff = target - first;
    const idx = numMap[diff];

    if (idx && i !== idx) {
      return [i, idx];
    }
  }
};
