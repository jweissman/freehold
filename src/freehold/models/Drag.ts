import { Dimensions, WorldPosition } from "../types";
import { pos } from "./WorldPosition";
export class Drag {
  origin: WorldPosition;
  private dest: WorldPosition;
  extent: Dimensions;

  get destination(): WorldPosition { return this.dest || this.origin }

  constructor(position: WorldPosition, private forceLines: boolean = false) {
    this.origin = position;
  }
  continue(position: WorldPosition): void {
    const offsetX = 0; //position[0] > this.origin[0] ? 0 : 1;
    const offsetY = 0; //position[1] > this.origin[1] ? 0 : 1;
    this.dest = pos(position[0] - offsetX, position[1] - offsetY);
    this.extent = [
      this.dest[0] - this.origin[0],
      this.dest[1] - this.origin[1]
    ] as Dimensions;
    if (this.forceLines) {
      if (Math.abs(this.extent[0]) > Math.abs(this.extent[1])) {
        this.dest[1] = this.origin[1]
        // this.extent[1] = 0
      } else {
        this.dest[0] = this.origin[0]
        // this.extent[0] = 0
      }
      //this.extent = [
      //  this.destination[0] - this.origin[0],
      //  this.destination[1] - this.origin[1]
      //] as Dimensions;
    }
  }

  get minima(): WorldPosition {
    const minimaX = Math.min(this.origin[0], this.destination[0]);
    const minimaY = Math.min(this.origin[1], this.destination[1]);
    // const minimaX = Math.min(this.origin[0], this.origin[0] + this.extent[0]);
    // const minimaY = Math.min(this.origin[1], this.origin[1] + this.extent[1]);
    return pos(minimaX, minimaY);
  }

  get maxima(): WorldPosition {
    const maximaX = Math.max(this.origin[0], this.destination[0]);
    const maximaY = Math.max(this.origin[1], this.destination[1]);
    // const maximaX = Math.max(this.origin[0], this.origin[0] + this.extent[0]);
    // const maximaY = Math.max(this.origin[1], this.origin[1] + this.extent[1]);
    return pos(maximaX, maximaY);
  }
}
