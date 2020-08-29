import { WorldPosition } from "../types";
import { neighborsOfPosition, posEq, distanceBetween, neighborsOfPositionPlusDiagonals } from "./WorldPosition";
import { PositionSet } from "./PositionSet";
import { SimpleGrid } from "./SimpleGrid";

type NavigationResult = { path: WorldPosition[], found: boolean }

export class Navigator {
  constructor(private dims: [number, number], private isBlocked: (position: WorldPosition) => boolean) {}

  get width(): number { return this.dims[0]; }
  get height(): number { return this.dims[1]; }

  private reconstructPath(prev: SimpleGrid<WorldPosition>, destination: WorldPosition): WorldPosition[] {
    const path = [destination]
    let current: WorldPosition = destination
    while (prev.at(current)) {
      current = prev.at(current)
      path.unshift(current)
    } 
    path.shift()
    return path
  }

  aStar(source: WorldPosition, destination: WorldPosition): NavigationResult { 
    const fringe = new PositionSet([source])
    const prev = new SimpleGrid<WorldPosition>()
    const gScore = new SimpleGrid<number>(Infinity)
    const fScore = new SimpleGrid<number>(Infinity)
    const byFScore = (a: WorldPosition, b: WorldPosition) => {
      const da = fScore.at(a)
      const db = fScore.at(b)
      return da < db ? -1 : 1
    }
    const heuristic = (a: WorldPosition): number => distanceBetween(a, destination)
    gScore.set(source, 0)
    fScore.set(source, heuristic(source))
    while (!fringe.empty()) {
      const current: WorldPosition = fringe.array.sort(byFScore)[0]
      if (posEq(current, destination)) {
        return { path: this.reconstructPath(prev, current), found: true }
      }
      fringe.delete(current)
      const neighbors = neighborsOfPositionPlusDiagonals(current, this.dims)
      neighbors.filter(neighbor => !this.isBlocked(neighbor)).forEach(neighbor => {
        const tentativeGScore = gScore.at(current) + distanceBetween(current, neighbor)
        if (tentativeGScore < gScore.at(neighbor)) {
          prev.set(neighbor, current)
          gScore.set(neighbor, tentativeGScore)
          fScore.set(neighbor, gScore.at(neighbor) + heuristic(neighbor))
          if (!fringe.has(neighbor)) {
            fringe.add(neighbor)
          }
        }
      })
    }

    return { path: [], found: false }
    // throw new Error("No path found!")
  }
}