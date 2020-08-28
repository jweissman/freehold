import { Dimensions, WorldPosition } from "../types";
import { pos } from "./WorldPosition";
export class Drag {
  origin: WorldPosition;
  destination: WorldPosition;
  extent: Dimensions;
  constructor(position: WorldPosition) {
    this.origin = position;
  }
  continue(position: WorldPosition): void {
    const offsetX = position[0] > this.origin[0] ? 0 : 1;
    const offsetY = position[1] > this.origin[1] ? 0 : 1;
    this.destination = pos(position[0] - offsetX, position[1] - offsetY);
    this.extent = [
      this.destination[0] - this.origin[0],
      this.destination[1] - this.origin[1]
    ] as Dimensions;
  }

  get minima(): WorldPosition {
    const minimaX = Math.min(this.origin[0], this.destination[0]);
    const minimaY = Math.min(this.origin[1], this.destination[1]);
    return pos(minimaX, minimaY);
  }

  get maxima(): WorldPosition {
    const maximaX = Math.max(this.origin[0], this.destination[0]);
    const maximaY = Math.max(this.origin[1], this.destination[1]);
    return pos(maximaX, maximaY);
  }
}
