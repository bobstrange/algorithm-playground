package main

import (
	"fmt"
	"math"
)

// 2 つの円
// x1, y1, r1
// x2, y2, r2

// 位置関係を出力

type circle struct {
	p point
	r float64
}

type point struct {
	x, y float64
}

func distance(p1, p2 point) float64 {
	return math.Sqrt((p1.x-p2.x)*(p1.x-p2.x) + (p1.y-p2.y)*(p1.y-p2.y))
}

func rdiff(r1, r2 float64) float64 {
	return math.Abs(r1 - r2)
}

func rel(c1, c2 circle) int {
	dist := distance(c1.p, c2.p)
	rdiff := rdiff(c1.r, c2.r)

	if dist < rdiff {
		return 1
	}

	if dist == rdiff {
		return 2
	}

	if dist > rdiff && dist < c1.r+c2.r {
		return 3
	}

	if dist == c1.r+c2.r {
		return 4
	}

	if dist > c1.r+c2.r {
		return 5
	}

	return -1
}

func main() {
	var x1, y1, r1, x2, y2, r2 float64

	// 2 が 1 を包含
	x1, y1, r1 = 0, 0, 1
	x2, y2, r2 = 0, 0, 3

	c1 := circle{point{x1, y1}, r1}
	c2 := circle{point{x2, y2}, r2}

	fmt.Println("pattern 1")
	fmt.Println(rel(c1, c2))

	// 2 が 1 を包含(内接)
	x1, y1, r1 = 2, 0, 1
	x2, y2, r2 = 0, 0, 3

	c1 = circle{point{x1, y1}, r1}
	c2 = circle{point{x2, y2}, r2}

	fmt.Println("pattern 2")
	fmt.Println(rel(c1, c2))

	// 1 と 2 が交差
	x1, y1, r1 = 2.5, 0, 1
	x2, y2, r2 = 0, 0, 3

	c1 = circle{point{x1, y1}, r1}
	c2 = circle{point{x2, y2}, r2}

	fmt.Println("pattern 3")
	fmt.Println(rel(c1, c2))

	// 1 と 2 が外接
	x1, y1, r1 = 4, 0, 1
	x2, y2, r2 = 0, 0, 3

	c1 = circle{point{x1, y1}, r1}
	c2 = circle{point{x2, y2}, r2}

	fmt.Println("pattern 4")
	fmt.Println(rel(c1, c2))

	//
	x1, y1, r1 = 5, 0, 1
	x2, y2, r2 = 0, 0, 3

	c1 = circle{point{x1, y1}, r1}
	c2 = circle{point{x2, y2}, r2}

	fmt.Println("pattern 5")
	fmt.Println(rel(c1, c2))
}
