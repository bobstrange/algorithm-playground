package main

import (
	"fmt"
	"math"
)

func isPrime(n int) bool {
	rootN := math.Sqrt(float64(n))

	for i := 2; i <= int(rootN)-1; i++ {
		if n%i == 0 {
			return false
		}
	}
	return true
}

func main() {
	var n int

	fmt.Println("Please input a number")

	fmt.Scan(&n)

	result := isPrime(n)

	fmt.Println(n, "is prime:", result)
}
