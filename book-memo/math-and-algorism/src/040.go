package main

import "fmt"

func main() {
	var n, m int
	fmt.Scan(&n, &m)

	a := make([]int, n+1)
	for i := 1; i <= n; i++ {
		fmt.Scan(&a[i])
	}

	b := make([]int, m+1)
	for i := 1; i <= m; i++ {
		fmt.Scan(&b[i])
	}

	cum := make([]int, n+1)
	for i := 1; i <= n; i++ {
		cum[i] = a[i]
		cum[i] = cum[i-1] + a[i]
	}

	res := 0
	for i := 1; i <= m-1; i++ {
		if b[i] <= b[i+1] {
			res = res + cum[b[i+1]] - cum[b[i]]
		} else {
			res = res + cum[b[i]] - cum[b[i+1]]
		}
	}

	fmt.Println(res)
}
