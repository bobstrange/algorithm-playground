package main

import "fmt"

type question struct {
	l, r int
}

func main() {
	var n int
	fmt.Scan(&n)

	counts := make([]int, n+1)

	for i := 1; i <= n; i++ {
		fmt.Scan(&counts[i])
	}

	var qnum int
	fmt.Scan(&qnum)
	q := make([]question, qnum+1)

	for i := 1; i <= qnum; i++ {
		var l, r int
		fmt.Scan(&l, &r)
		q[i] = question{l, r}
	}

	acc := make([]int, n+1)

	// 累積和
	for i := 1; i <= n; i++ {
		acc[i] = acc[i-1] + counts[i]
	}

	res := make([]int, qnum+1)
	for i := 1; i <= qnum; i++ {
		l, r := q[i].l, q[i].r
		res[i] = acc[r] - acc[l-1]
	}

	fmt.Println(res)
}
