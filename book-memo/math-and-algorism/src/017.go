package main

import "fmt"

func gcd(a, b int) int {
	for a >= 1 && b >= 1 {
		if a > b {
			a = a % b
		} else {
			b = b % a
		}
	}
	if a >= 1 {
		return a
	}
	return b
}

func lcm(a, b int) int {
	g := gcd(a, b)
	return a * b / g
}

func main() {
	var n int

	fmt.Println("please input a number")
	fmt.Scan(&n)

	arr := make([]int, n)
	for i := 0; i < n; i++ {
		fmt.Scan(&arr[i])
	}

	var l int
	for i := 0; i < n-1; i++ {
		if i == 0 {
			l = lcm(arr[i], arr[i+1])
		} else {
			l = lcm(l, arr[i+1])
		}

	}
	fmt.Println(l)
}
