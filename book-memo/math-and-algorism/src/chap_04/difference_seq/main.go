package main

import "fmt"

func main() {
	var n, q int

	fmt.Scan(&n, &q)

	arr := make([][]int, q+1)
	for i := 1; i <= q; i++ {
		arr[i] = make([]int, n+1)
		for j := 1; j <= n; j++ {
			fmt.Scan(&arr[i][j])
		}
	}

	diff := make([]int, n+1)
	for i := 1; i <= q; i++ {
		for j := 1; j <= n; j++ {
			diff[j] = diff[j] + arr[i][j] - arr[i][j-1]
		}
	}

	fmt.Println(diff)

	for i := 1; i <= n; i++ {
		if diff[i] > 0 {
			fmt.Print("<")
		}
		if diff[i] == 0 {
			fmt.Print("=")
		}
		if diff[i] < 0 {
			fmt.Print(">")
		}
	}
}
