package main

import "fmt"

func main() {
	var n int
	fmt.Scan(&n)
	dp := make([]int, n)

	for i := 0; i < n; i++ {
		if i == 0 {
			dp[i] = 1
		}
		if i == 1 {
			dp[i] = 2
		}
		if i >= 2 {
			dp[i] = dp[i-1] + dp[i-2]
		}
	}
	fmt.Println(dp[n-1])
}
