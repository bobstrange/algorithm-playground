package main

import "fmt"

func main() {
	var n int
	fmt.Scan(&n)

	f := make([]int, n+1)

	for i := 1; i <= n; i++ {
		for j := i; j <= n; j = j + i {
			f[j] = f[j] + 1
		}
	}

	res := 0
	for i := 1; i <= n; i++ {
		res = res + i*f[i]
	}

	fmt.Println(res)
}
