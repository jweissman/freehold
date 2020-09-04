import { WorldPosition, Dimensions } from "../types";
import { pos } from "./WorldPosition";

export class Grid<T> {
  private cells: number[][] = [];

  constructor(private dims: Dimensions, private index: T[]) { }

  get width(): number { return this.dims[0] }
  get height(): number { return this.dims[1] }

  private dereference(reference: number): T {
    return this.index[reference]
  }

  private reference(value: T): number {
    return this.index.indexOf(value)
  }

  at(location: WorldPosition): T {
    const [x, y] = location;
    this.cells[y] = this.cells[y] || [];
    if (this.cells[y][x] !== undefined) {
      return this.dereference(this.cells[y][x]);
    }
  }

  set(location: WorldPosition, value: T): void {
    // console.log("[Grid.set] At location: " + location + ", value: " + value)
    const [x,y] = location;
    this.cells[y] = this.cells[y] || [];
    this.cells[y][x] = this.reference(value);
  }

  unset(location: WorldPosition): void {
    const [x,y] = location;
    this.cells[y] = this.cells[y] || [];
    this.cells[y][x] = undefined; //this.reference(value);
  }

  labelledNeighborsAt(location: WorldPosition): { north: T, south: T, east: T, west: T } {
    const [x,y] = location;
    return {
      east: this.at(pos(x+1,y)),
      west: this.at(pos(x-1,y)),
      north: this.at(pos(x,y-1)),
      south: this.at(pos(x,y+1)),
    }
  }

  forEachPositionXY(fn: (x: number, y: number) => void): void {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        fn(x,y)
      }
    }
  }

  forEachPosition(fn: (position: WorldPosition) => void): void {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        fn(pos(x,y))
      }
    }
  }

  fill(value: T): void {
    this.forEachPosition(position => this.set(position,value))
  }

  distributeRandomly(value: T, rate = 0.1): void {
    this.forEachPosition(position => {
      if (Math.random() < rate) {
        this.set(position, value)
      }
    })
  }

  occupiedLocations(value: T): WorldPosition[] {
    const occupied = []
    this.forEachPosition(position => {
      if (this.at(position) === value) {
        occupied.push(position)
      }
    })
    return occupied
  }
}
