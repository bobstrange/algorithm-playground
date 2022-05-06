package main

import "fmt"

func search(l, r float64, c int) float64 {
	m := (l + r) / 2

	if c == 10 {
		return m
	}

	if m*m < 2 {
		return search(m, r, c+1)
	} else {
		return search(l, m, c+1)
	}
}

func main() {
	l, r := 1.0, 2.0

	fmt.Println(search(l, r, 0))
}
