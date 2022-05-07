package main

import "fmt"

func dfs(pos int, visited []bool, graph [][]int) {
	visited[pos] = true

	for _, i := range graph[pos] {
		if visited[i] == false {
			dfs(i, visited, graph)
		}
	}
}

func main() {
	var n, m int
	fmt.Scan(&n, &m)

	g := make([][]int, n+1)
	visited := make([]bool, n+1)

	for i := 1; i <= m; i++ {
		var a, b int
		fmt.Scan(&a, &b)
		g[a] = append(g[a], b)
		g[b] = append(g[b], a)
	}
	dfs(1, visited, g)

	res := true

	for i := 1; i <= n; i++ {
		if visited[i] == false {
			res = false
			break
		}
	}

	fmt.Println(res)
}
