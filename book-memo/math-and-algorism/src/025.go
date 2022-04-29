package main

import "fmt"

// N 日
// i 日目の勉強時間
// サイコロ 1, 2 の場合 A[i]
// サイコロ 3 ~ 6 の場合 B[i]

func main() {
	var n int
	fmt.Scan(&n)

	a := make([]int, n+1)
	b := make([]int, n+1)

	for i := 1; i <= n; i++ {
		fmt.Scan(&a[i])
	}
	for i := 1; i <= n; i++ {
		fmt.Scan(&b[i])
	}

	var res float64
	for i := 1; i <= n; i++ {
		res = res + float64(a[i])/3.0 + 2.0*float64(b[i])/3.0
	}
	fmt.Println(res)
}
