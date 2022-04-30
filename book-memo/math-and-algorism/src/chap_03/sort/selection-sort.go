package main

import "fmt"

func main() {
	a := []int{50, 13, 34, 75, 62, 20, 28, 11}

	for i := 0; i < len(a); i++ {
		min := i
		minV := a[i]

		for j := i + 1; j < len(a); j++ {
			if a[j] < minV {
				min = j
				minV = a[j]
			}
		}
		tmp := a[i]
		a[i] = minV
		a[min] = tmp
	}

	fmt.Println(a)
}
