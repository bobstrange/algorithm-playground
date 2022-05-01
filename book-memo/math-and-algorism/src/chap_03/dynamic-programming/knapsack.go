package main

import "fmt"

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	var n, m int
	fmt.Scanf("%d %d", &n, &m)
	v, w := make([]int, n), make([]int, n)
	for i := 0; i < n; i++ {
		fmt.Scanf("%d %d", &w[i], &v[i])
	}

	dp := make([][]int, n+1)
	for i := 0; i < n+1; i++ {
		dp[i] = make([]int, m+1)
	}

	for i := 1; i <= n; i++ {
		for j := 0; j <= m; j++ {
			dp[i][j] = dp[i-1][j]
			if j >= w[i-1] {
				dp[i][j] = max(dp[i][j], dp[i-1][j-w[i-1]]+v[i-1])
			}
		}
	}
	fmt.Println(dp[n][m])
}
