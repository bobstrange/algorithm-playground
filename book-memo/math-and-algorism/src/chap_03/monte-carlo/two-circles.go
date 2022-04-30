package main

import (
	"fmt"
	"math/rand"
	"time"
)

// 中心 (3, 7) 半径 2 cm の円 A
// 中心 (3, 3) 半径 3 cm の円 B
// (0, 0) (6, 0) (6, 9) (0, 9) の 6 * 9 の長方形

func main() {
	n := 1000000
	c := 0

	for i := 1; i <= n; i++ {
		rand.Seed(time.Now().UnixNano())
		x := 6.0 * rand.Float64()
		y := 9.0 * rand.Float64()

		dA := (x-3.0)*(x-3.0) + (y-7.0)*(y-7.0)
		dB := (x-3.0)*(x-3.0) + (y-3.0)*(y-3.0)

		if dA <= 4.0 || dB <= 9.0 {
			c = c + 1
		}
	}

	fmt.Println(c)
}
