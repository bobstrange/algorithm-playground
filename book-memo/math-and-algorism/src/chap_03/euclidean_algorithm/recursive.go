package main

import "fmt"

// ユークリッドの互除法を再帰で
// euclidean algorithm

func gcd(a, b int) int {
	if b == 0 {
		return a
	}
	return gcd(b, a%b)
}

func main() {
	var a, b int
	fmt.Scan(&a, &b)

	fmt.Println(gcd(a, b))
}