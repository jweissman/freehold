import { WorldPosition } from "../types";
import { pos, neighborsOfPosition, posEq, neighborsOfPositionPlusDiagonals } from "./WorldPosition";
import { PositionSet } from "./PositionSet";

class SimpleGrid<T> {
  values: T[][] = []
  constructor(private valueWhenUndefined: T = undefined) {}
  set(position: WorldPosition, value: T) {
    const [px,py] = position
    this.values[py] = this.values[py] || []
    this.values[py][px] = value
  }
  at(position: WorldPosition): T {
    const [px,py] = position
    this.values[py] = this.values[py] || []
    const value = this.values[py][px] 
    if (value === undefined) {
      return this.valueWhenUndefined
    } else {
      return value
    }
  }
}

export class Dijkstra {
  allPositions: WorldPosition[] = []
  constructor(private dims: [number, number], private isBlocked: (position: WorldPosition) => boolean) {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        this.allPositions.push(pos(x,y))
      }
    }
  }

  get width(): number { return this.dims[0]; }
  get height(): number { return this.dims[1]; }

  shortestPath(source: WorldPosition, destination: WorldPosition): WorldPosition[] {
    const unvisitedNodes = new PositionSet(this.allPositions);
    const prev = new SimpleGrid<WorldPosition>()
    const dist = new SimpleGrid<number>(Infinity)
    const byDistance = (a: WorldPosition, b: WorldPosition) => {
      const da = dist.at(a)
      const db = dist.at(b)
      return da > db ? 1 : -1
    }
    dist.set(source, 0)
    while (prev.at(destination) === undefined && unvisitedNodes.size() > 0) {
      const sortedUnvisitedNodes = unvisitedNodes.array.sort(byDistance)
      const closestUnvisited = sortedUnvisitedNodes.shift()
      unvisitedNodes.delete(closestUnvisited)
      if (posEq(closestUnvisited, destination)) { break }
      const alt = dist.at(closestUnvisited) + 1
      const neighbors = neighborsOfPositionPlusDiagonals(closestUnvisited, this.dims)
      neighbors.filter(n => !this.isBlocked(n)).forEach(neighbor => {
        if (unvisitedNodes.has(neighbor)) {
          const neighborDistance = dist.at(neighbor)
          if (alt < neighborDistance) {
            dist.set(neighbor, alt)
            prev.set(neighbor, closestUnvisited)
          }
        }
      })
    }
    const path = []
    let current: WorldPosition = destination
    while (!posEq(current, source)) {
      path.unshift(current)
      current = prev.at(current)
      if (current === undefined) {
        console.log("---> No path available...")
        return []
      }
    }
    return path
  }
}