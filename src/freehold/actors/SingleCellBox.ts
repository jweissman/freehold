import { Vector, Actor, Color } from "excalibur";
import { CELL_SIZE } from "../constants";
export class SingleCellBox extends Actor {
  constructor() {
    super({
      color: Color.Gray,
      width: CELL_SIZE,
      height: CELL_SIZE,
      anchor: new Vector(0, 0),
      opacity: 0.5,
    });
  }
}
