package main

import (
	"fmt"
	"math"
)

func main() {
	// var ax, ay, bx, by, cx, cy int
	// fmt.Scan(&ax, &ay, &bx, &by, &cx, &cy)
	ax, ay, bx, by, cx, cy := 3, 3, 2, 1, 6, 4

	baX := (ax - bx)
	baY := (ay - by)
	bcX := (cx - bx)
	bcY := (cy - by)
	caX := (ax - cx)
	caY := (ay - cy)
	cbX := (bx - cx)
	cbY := (by - cy)

	pattern := 2
	if baX*bcX+baY*bcY < 0 {
		pattern = 1
	}
	if caX*cbX+caY*cbY < 0 {
		pattern = 3
	}

	var res float64
	switch pattern {
	case 1:
		res = math.Sqrt(float64(baX*baX + baY*baY))
		break
	case 2:
		s := math.Abs(float64(baX*caY - baY*caX))
		bcLength := math.Sqrt(float64(bcX*bcX + bcY*bcY))
		res = s / bcLength
		break
	case 3:
		res = math.Sqrt(float64(caX*caX + caY*caY))
		break
	}

	fmt.Println(res)
}
