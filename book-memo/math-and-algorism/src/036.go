package main

import (
	"fmt"
	"math"
)

// 時針 a 分針 b
// hh:mm の時の先端の距離

func main() {
	// var a, b float64
	// fmt.Scan(&a, &b)

	// var h, m float64
	// fmt.Scan(&h, &m)

	var a, b, h, m float64
	a, b = 3, 4
	h, m = 9, 0

	angleA := h*30 + m/2
	angleB := m * 6

	aX := a * math.Cos(angleA/180*math.Pi)
	aY := a * math.Sin(angleA/180*math.Pi)
	bX := b * math.Cos(angleB/180*math.Pi)
	bY := b * math.Sin(angleB/180*math.Pi)

	res := math.Sqrt((aX-bX)*(aX-bX) + (aY-bY)*(aY-bY))
	fmt.Println(res)
}
