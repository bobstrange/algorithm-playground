package main

import (
	"fmt"
	"sort"
)

func divisors(n int) []int {
	var divisors []int

	for i := 1; i*i < n; i++ {
		if n%i != 0 {
			continue
		}

		divisors = append(divisors, i)
		if i != n/i {
			divisors = append(divisors, n/i)
		}
	}
	sort.Slice(divisors, func(i, j int) bool { return i < j })
	return divisors
}
func main() {
	var n int
	fmt.Println("Please input a number")
	fmt.Scan(&n)

	divisors := divisors(n)
	fmt.Println(n, "の約数は", divisors, "です")
}
