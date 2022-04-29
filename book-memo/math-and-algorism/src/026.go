package main

import "fmt"

// N 種類のコイン
// 1 回 1 ドル

func main() {
	var n int
	fmt.Scan(&n)

	var res float64
	for i := 1; i <= n; i++ {
		res = res + float64(n)/float64(i)
	}
	fmt.Println(res)
}
