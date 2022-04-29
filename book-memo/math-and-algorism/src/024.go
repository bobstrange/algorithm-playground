package main

import "fmt"

// N 問のテスト
// 選択肢の数 P[i]
// 配点 Q[i]

func main() {
	var n int
	fmt.Scan(&n)

	p := make([]int, n+1)
	q := make([]int, n+1)

	for i := 1; i <= n; i++ {
		fmt.Scan(&p[i])
	}
	for i := 1; i <= n; i++ {
		fmt.Scan(&q[i])
	}

	var res float64
	for i := 1; i <= n; i++ {
		res = res + float64(q[i])/float64(p[i])
	}
	fmt.Println(res)
}
