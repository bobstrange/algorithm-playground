package main

import (
	"fmt"
	"math"
)

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func abs(a, b int) int {
	return int(math.Abs(float64(a) - float64(b)))
}

func main() {
	var n int
	fmt.Scan(&n)

	h := make([]int, n)
	for i := 0; i < n; i++ {
		fmt.Scan(&h[i])
	}

	dp := make([]int, n)

	for i := 0; i < n; i++ {
		if i == 0 {
			dp[i] = 0
		}
		if i == 1 {
			dp[i] = abs(h[i-1], h[i])
		}
		if i >= 2 {
			v1 := dp[i-1] + abs(h[i-1], h[i])
			v2 := dp[i-2] + abs(h[i-2], h[i])
			dp[i] = min(v1, v2)
		}
	}

	fmt.Println(dp[n-1])
}
