package main

import "fmt"

// N 枚のカード
// カードの数字は 1 ~ 99999
// 和が 100000 となる 2 枚のカードの選び方

func main() {
	var n int
	fmt.Scan(&n)

	arr := make([]int, 100000)
	for i := 1; i <= n; i++ {
		var num int
		fmt.Scan(&num)
		arr[num] = arr[num] + 1
	}

	var res int
	for i := 1; i <= 49999; i++ {
		num := arr[i]
		c := arr[100000-i]
		res = res + num*c
	}
	res = res + arr[50000]*(arr[50000]-1)/2

	fmt.Println(res)
}
