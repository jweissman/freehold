import { Vector, Actor, Camera } from "excalibur";
import { Game } from "../models/Game";
import { CELL_SIZE } from "../constants";
export class ZoneView extends Actor {
  constructor(private game: Game, private camera: Camera) {
    super({ pos: new Vector(0, 0) });
  }
  draw(ctx: CanvasRenderingContext2D) {
    this.game.zones.forEach(zone => {
      // console.log("Draw zone " + zone)
      const [x0, y0] = zone.topLeft;
      const [x1, y1] = zone.bottomRight;

      const x = x0 * CELL_SIZE; //+ this.camera.x
      const y = y0 * CELL_SIZE; //+ this.camera.y
      const w = (x1 - x0) * CELL_SIZE;
      const h = (y1 - y0) * CELL_SIZE;

      ctx.fillStyle = zone.color.toRGBA();
      ctx.fillRect(x, y, w, h);
    });
  }
}
