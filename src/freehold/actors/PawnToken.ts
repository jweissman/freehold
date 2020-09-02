import { Actor, Color, Vector } from "excalibur";
import { CELL_SIZE } from "../constants";
import { Pawn, WorldPosition } from "../types";
import { pick } from "../util/pick";
import { Shapes } from "../canvas/Shapes";

export class PawnToken extends Actor {
  moving = false;
  interacting = false;
  path: WorldPosition[] = []
  static speed = 128

  constructor(public pawn: Pawn) {
    super({
      width: CELL_SIZE,
      height: CELL_SIZE,
      color: pick(Color.Blue, Color.Red, Color.Green, Color.Yellow, Color.Chartreuse, Color.Magenta),
      // opacity: 0.5,
      anchor: new Vector(0.5, 0.5),
      pos: new Vector(pawn.pos[0] * CELL_SIZE, pawn.pos[1] * CELL_SIZE),
    });
  }

  skin = Color.Orange.clone().lighten(0.5)
  get shirt(): Color { return this.color.clone().darken(0.5) }
  draw(ctx: CanvasRenderingContext2D): void {
    let {x, y} = this.pos;
    x += CELL_SIZE/2
    y += CELL_SIZE/2
    Shapes.ellipse(ctx,
      x, y, // + CELL_SIZE/4,
      2*CELL_SIZE/8, 2*CELL_SIZE/5,
      this.shirt)

    Shapes.ellipse(ctx,
      x, y - CELL_SIZE/2,
      CELL_SIZE/5, CELL_SIZE/5,
      this.skin)
  }
}