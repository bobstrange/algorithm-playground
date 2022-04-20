package main

import (
	"fmt"
)

func main() {
	var n int

	fmt.Println("Please input a number")
	fmt.Scan(&n)

	var result []int

	for i := 2; i*i <= n; i++ {
		for n%i == 0 {
			n = n / i
			result = append(result, i)
		}
	}

	if n >= 2 {
		result = append(result, n)
	}

	fmt.Println(n, "の約数は", result, "です")
}
