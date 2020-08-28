import { Actor, Color, Vector } from "excalibur";
import { CELL_SIZE } from "../constants";
import { Pawn, WorldPosition } from "../types";
import { pick } from "../util/pick";

export class PawnToken extends Actor {
  moving = false;
  interacting = false;
  path: WorldPosition[] = []

  constructor(public pawn: Pawn) {
    super({
      width: CELL_SIZE,
      height: CELL_SIZE,
      color: pick(Color.Blue, Color.Red, Color.Green, Color.Yellow, Color.Chartreuse, Color.Magenta),
      opacity: 0.5,
      anchor: new Vector(0,0),
      pos: new Vector(pawn.pos[0] * CELL_SIZE, pawn.pos[1] * CELL_SIZE),
    });
  }

  // onPreUpdate(): void {
    // if (!this.moving) {
    // this.pos = new Vector(this.pawn.pos[0] * CELL_SIZE, this.pawn.pos[1] * CELL_SIZE);
    // }
  // }
}