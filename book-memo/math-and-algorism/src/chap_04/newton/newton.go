package main

import "fmt"

func main() {
	r := 2.0
	a := 5.0

	for i := 0; i < 5; i++ {
		x := a
		y := a * a

		tlA := 2.0 * x
		tlB := y - tlA*x

		nextA := (r - tlB) / tlA
		fmt.Println("Step", i+1, a, nextA)
		a = nextA
	}
}
