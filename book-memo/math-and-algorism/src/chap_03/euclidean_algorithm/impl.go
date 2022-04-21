package main

import "fmt"

func gcd(a, b int) int {
	for a >= 1 && b >= 1 {
		if a < b {
			b = b % a
		} else {
			a = a % b
		}
	}
	if a >= 1 {
		return a
	}
	return b
}

func main() {
	var a, b int
	fmt.Println("Please input two numbers")
	fmt.Scan(&a, &b)

	fmt.Println("gcd of ", a, "and", b, "is", gcd(a, b))
}
