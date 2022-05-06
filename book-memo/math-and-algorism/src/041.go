package main

import "fmt"

type workHour struct {
	start, end int
}

func main() {
	var n, t int
	fmt.Scan(&n, &t)

	workHours := make([]workHour, n+1)
	for i := 1; i <= n; i++ {
		var start, end int
		fmt.Scan(&start, &end)

		workHours[i] = workHour{start, end}
	}

	b := make([]int, t+1)

	for i := 1; i <= n; i++ {
		b[workHours[i].start] = b[workHours[i].start] + 1
		b[workHours[i].end] = b[workHours[i].end] - 1
	}

	acc := make([]int, t+1)

	for i := 1; i <= t; i++ {
		acc[i] = acc[i-1] + b[i]
	}
	fmt.Println(acc)
}
