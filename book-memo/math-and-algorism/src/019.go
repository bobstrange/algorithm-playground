package main

import "fmt"

// N 枚のカード
// カードの数字は 1 or 2 or 3
// 同じ数字のカードを 2 枚選ぶ方法

func factorial(n int) int {
	if n == 1 {
		return 1
	}
	return n * factorial(n-1)
}

func combination(n, r int) int {
	return factorial(n) / (factorial(r) * factorial(n-r))
}

func main() {
	var n int
	fmt.Scan(&n)

	arr := make([]int, n)
	for i := 0; i < n; i++ {
		fmt.Scan(&arr[i])
	}

	var one, two, three int

	for i := 0; i < n; i++ {
		switch arr[i] {
		case 1:
			one = one + 1
		case 2:
			two = two + 1
		case 3:
			three = three + 1
		}
	}
	res := combination(one, 2) + combination(two, 2) + combination(three, 2)
	fmt.Println(res)
}
