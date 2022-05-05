package main

import (
	"fmt"
	"math"
)

// N 個の点
// 近い 2 点の距離
// N^2 で良い

type point struct {
	x, y int
}

func (p *point) distance(p2 point) float64 {
	return math.Sqrt(float64((p.x-p2.x)*(p.x-p2.x) + (p.y-p2.y)*(p.y-p2.y)))
}

func main() {
	var n int
	fmt.Scan(&n)

	points := make([]point, n)
	for i := 0; i < n; i++ {
		var x, y int
		fmt.Scan(&x, &y)
		points[i] = point{x, y}
	}

	min := math.MaxFloat64
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			if i == j {
				continue
			}
			dist := points[i].distance(points[j])
			if min > dist {
				min = dist
			}
		}
	}

	fmt.Println(min)
}
