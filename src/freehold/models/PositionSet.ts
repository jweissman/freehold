import { WorldPosition } from "../types";
import { pos, posEq } from "./WorldPosition";
export class PositionSet {
  private arr: WorldPosition[] = [];
  constructor(entries: WorldPosition[] = []) {
    entries.forEach(([x, y]) => this.arr.push(pos(x, y)));
  }
  get array(): WorldPosition[] { return this.arr; }
  add(position: WorldPosition): void {
    this.arr.push(position)
  }
  delete(position: WorldPosition): void {
    this.arr = this.arr.filter(anotherPosition => !posEq(position, anotherPosition));
  }
  has(position: WorldPosition): boolean {
    return this.arr.filter(p => posEq(p, position)).length > 0;
  }
  size(): number {
    return this.arr.length
  }
  empty(): boolean {
    return this.size() === 0
  }

  merge(other: PositionSet): PositionSet {
    const merged = new PositionSet()
    for (const position of this.array) {
      if (!merged.has(position)) {
        merged.add(position)
      }
    }
    for (const position of other.array) {
      if (!merged.has(position)) {
        merged.add(position)
      }
    }
    return merged;
  }

  get fringe(): PositionSet {
    const theFringe = new PositionSet()
    for (let i = 0; i < this.arr.length; i++) {
      const pos = this.arr[i]
      for (const neighbor of PositionSet.neighborsOf(pos).array) {
        if (!theFringe.has(neighbor)) {
          theFringe.add(neighbor)
        }
      }
    }
    return theFringe
  }

  static neighborsOf(location: WorldPosition): PositionSet {
    const [x,y] = location
    const positions = new PositionSet();
    positions.add(pos(x,y+1))
    positions.add(pos(x,y-1))
    positions.add(pos(x+1,y))
    positions.add(pos(x-1,y))
    return positions
  }
}
