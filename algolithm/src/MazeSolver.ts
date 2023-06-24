export type Point = {
  x: number;
  y: number;
};

const dir = [
  [-1, 0], // left
  [1, 0], // right
  [0, -1], // down
  [0, 1], // up
];

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  visited: boolean[][],
  path: Point[]
): boolean {
  // off the map
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }

  // on a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  // at the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(curr);
    return true;
  }

  // already visited
  if (visited[curr.y][curr.x]) {
    return false;
  }

  // pre condition
  visited[curr.y][curr.x] = true;
  path.push(curr);

  // recurse
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    if (
      walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, visited, path)
    ) {
      return true;
    }
  }

  // post condition
  path.pop();
  return false;
}

export function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {
  const visited: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    visited.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, visited, path);
  return path;
}
