import { WorldPosition } from "../types";
// A very basic grid that doesn't worry about bounds or indexing etc
export class SimpleGrid<T> {
  values: T[][] = [];
  constructor(private valueWhenUndefined: T = undefined) { }
  set(position: WorldPosition, value: T): void {
    const [px, py] = position;
    this.values[py] = this.values[py] || [];
    this.values[py][px] = value;
  }
  at(position: WorldPosition): T {
    const [px, py] = position;
    this.values[py] = this.values[py] || [];
    const value = this.values[py][px];
    if (value === undefined) {
      return this.valueWhenUndefined;
    }
    else {
      return value;
    }
  }
}
