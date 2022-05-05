package main

import "fmt"

// N 枚のカード
// A[i]
// 合計 S
// d[i][j] 左から i 番目のカードまでの中から、和が j になる組み合わせが存在するなら true

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	var n, s int
	fmt.Scan(&n, &s)

	a := make([]int, n+1)
	for i := 1; i <= n; i++ {
		fmt.Scan(&a[i])
	}

	dp := make([][]int, n+1)
	for i := 0; i <= n; i++ {
		dp[i] = make([]int, s+1)
		for j := 0; j <= s; j++ {
			dp[i][j] = -10000
		}
	}
	for i := 0; i <= s; i++ {
		dp[0][i] = 0
	}
	fmt.Println(dp)

	for i := 1; i <= n; i++ {
		for j := 0; j <= s; j++ {
			if j < a[i] {
				dp[i-1][j] = dp[i][j]
			}
			if j >= a[i] {
				dp[i-1][j] = max(dp[i-1][j], dp[i-1][j-a[i]])
			}
		}
	}
	fmt.Println(dp)
}
