package main

import "fmt"

func isPrime(n int) bool {
	for i := 2; i <= n; i++ {
		if n%i == 0 {
			return false
		}
	}
	return true
}

func main() {
	var n int

	fmt.Scan(&n)

	for i := 2; i <= n; i++ {
		if isPrime(i) {
			fmt.Println(i)
		}
	}
}
