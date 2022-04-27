package main

import "fmt"

func main() {
	var n, r int
	fmt.Println("Please input two numbers")
	fmt.Scan(&n, &r)

	if n > 20 || r > 20 {
		fmt.Println("Please input two numbers less than 20")
		return
	}

	if r > n {
		n, r = r, n
	}

	var a, b = 1, 1
	for i := 0; i < r; i++ {
		a = a * (n - i)
		b = b * (i + 1)
	}
	fmt.Println(a, b)
	fmt.Println(a / b)
}
