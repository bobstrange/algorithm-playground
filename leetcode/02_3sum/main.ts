function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);

  // 2 回ループまでなら OK
  // 最後の 1 回ループして Complement を取ってくる
  // 2 つ選択したものと同じ index をとってきたらダメ

  const map = new Map<number, Set<number>>();
  const results: [number, number, number][] = [];

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const size = map.get(nums[i])?.size;
      if (size && size < 3) {
        map.get(nums[i])?.add(i);
      }
    } else {
      const val = new Set<number>();
      val.add(i);
      map.set(nums[i], val);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const first = nums[i];
      const second = nums[j];
      const complement = -(first + second);
      if (map.has(complement)) {
        const candidiates = map.get(complement) as Set<number>;

        candidiates.forEach((k) => {
          if (k !== i && k !== j && k > j) {
            results.push([first, second, complement]);
          }
        });
      }
    }
  }

  const obj: [number, number, number][] = [];
  results.forEach((r) => {
    const exists = obj.some((item) => {
      return isEqual(r, item);
    });
    if (!exists) {
      obj.push(r);
    }
  });

  return obj;
}

function isEqual(a: number[], b: number[]): boolean {
  return a.every((v, i) => v === b[i]);
}
