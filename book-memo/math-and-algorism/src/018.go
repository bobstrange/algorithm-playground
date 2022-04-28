package main

import (
	"fmt"
)

// N 個の品物
// 各品物の値段は 100, 200, 300, 400 円
// 異なる 2 つの品物を選んで合計金額が 500 円

func main() {
	var n int

	fmt.Println("Please input N")
	fmt.Scan(&n)

	fmt.Println("Please input N items")

	arr := make([]int, n)
	for i := 0; i < n; i++ {
		fmt.Scan(&arr[i])
	}

	fmt.Println(n)
	fmt.Println(arr)

	var c100, c200, c300, c400 int

	for i := 0; i < n; i++ {
		price := arr[i]
		switch price {
		case 100:
			c100 = c100 + 1
			break
		case 200:
			c200 = c200 + 1
			break
		case 300:
			c300 = c300 + 1
			break
		case 400:
			c400 = c400 + 1
		}
	}
	fmt.Println(c100, c200, c300, c400)

	res := c100*c400 + c200*c300
	fmt.Println(res)
}
