package main

import (
	"fmt"
	"math/rand"
	"time"
)

// 円周率をモンテカルロ法で求める

func main() {
	var n int
	fmt.Scan(&n)

	var c int

	for i := 1; i <= n; i++ {
		rand.Seed(time.Now().UnixNano())
		px := rand.Float64()
		py := rand.Float64()

		if px*px+py*py <= 1.0 {
			c = c + 1
		}
	}
	fmt.Println(4.0 * float64(c) / float64(n))
}
