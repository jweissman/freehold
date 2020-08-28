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
}
