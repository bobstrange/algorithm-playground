package main

import "fmt"

// 2 種類の N 面体サイコロ
// 数値は 0 ~ 100

func main() {
	var n int
	fmt.Scan(&n)

	bArr := make([]int, n+1)
	rArr := make([]int, n+1)

	for i := 1; i <= n; i++ {
		fmt.Scan(&bArr[i])
		fmt.Scan(&rArr[i])
	}

	var bSum, rSum int
	for i := 1; i <= n; i++ {
		bSum = bSum + bArr[i]
		rSum = rSum + rArr[i]
	}

	fmt.Println((bSum + rSum) * 1.0 / n)
}
