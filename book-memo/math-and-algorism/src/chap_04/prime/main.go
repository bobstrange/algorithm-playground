package main

import "fmt"

func main() {
	n := 1000000
	prime := make([]bool, n+1)

	for i := 2; i <= n; i++ {
		prime[i] = true
	}
	for i := 2; i <= n; i++ {
		if prime[i] == true {
			for x := 2 * i; x <= n; x = x + i {
				prime[x] = false
			}
		}
	}
	for i := 2; i <= n; i++ {
		if prime[i] == true {
			fmt.Println(i)
		}
	}
}
