// https://leetcode.com/problems/3sum/submissions/

function threeSum(nums: number[]): number[][] {
  // 昇順にソートする
  nums.sort((a, b) => a - b);

  const filter: number[] = [];
  const buff: { [k: number]: number } = {};
  const results: [number, number, number][] = [];

  // 重複は、3 個までなら OK (0, 0, 0) のケースなので
  // 4 個以上の重複を取り除く
  for (let i = 0; i < nums.length; i++) {
    if (!buff[nums[i]]) {
      buff[nums[i]] = 1;
      filter.push(nums[i]);
    } else if (buff[nums[i]] && buff[nums[i]] < 4) {
      buff[nums[i]] += 1;
      filter.push(nums[i]);
    }
  }

  // i 固定で、j, k を回す
  // j は小さい方から k は大きい方から回すので、求める値より大きかったら k をデクリメント
  // 求める値より小さかったら j をインクリメント
  // 求める値が合ったら j をインクリメント した
  for (let i = 0; i < filter.length; i++) {
    const comp = -filter[i];
    let j = i + 1;
    let k = filter.length - 1;
    while (j < k) {
      const sum = filter[j] + filter[k];
      if (sum === comp) {
        results.push([filter[i], filter[j], filter[k]]);
        j = j + 1;
      }
      if (sum > comp) {
        k = k - 1;
      }
      if (sum < comp) {
        j = j + 1;
      }
    }
  }
  const res: [number, number, number][] = [];

  // 結果から重複を排除
  results.forEach((r) => {
    if (!res.some((v) => isEqual(v, r))) {
      res.push(r);
    }
  });
  return res;
}

function isEqual(
  a: [number, number, number],
  b: [number, number, number]
): boolean {
  return a.every((v, i) => v === b[i]);
}

const input = [-1, 0, 1, 2, -1, -4];
const input2 = [0, 0, 0, 0];
const input3 = [-2, 0, 1, 1, 2];

console.log(threeSum(input));
console.log(threeSum(input2));
console.log(threeSum(input3));
