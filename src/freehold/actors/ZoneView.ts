import { Vector, Actor, Camera, Color, Traits } from "excalibur";
import { Game } from "../models/Game";
import { CELL_SIZE } from "../constants";
import { pos } from "../models/WorldPosition";
export class ZoneView extends Actor {
  constructor(private game: Game, private camera: Camera) {
    super({ pos: new Vector(0, 0) });
    this.traits = this.traits.filter(trait => !(trait instanceof Traits.OffscreenCulling))
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.game.zones.forEach(zone => {
      // console.log("Draw zone " + zone)
      const [x0, y0] = zone.topLeft;
      const [x1, y1] = zone.bottomRight;

      this.gridAlignedRect(ctx, x0, y0, x1, y1, zone.color)

      ctx.fillStyle = '#fff'
      // ctx.
      for (let x=x0; x<=x1; x++) {
        for (let y=y0; y<=y1; y++) {
          const count = this.game.rawMaterialCountAtLocation(pos(x,y))
          ctx.fillText("x" + count, x*CELL_SIZE + CELL_SIZE/2, y*CELL_SIZE + CELL_SIZE)
        }
      }
    });
  }

  private gridAlignedRect(ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number, color: Color) {

      const x = x0 * CELL_SIZE; //+ this.camera.x
      const y = y0 * CELL_SIZE; //+ this.camera.y
      const w = (x1 - x0 + 1) * CELL_SIZE;
      const h = (y1 - y0 + 1) * CELL_SIZE;

      ctx.fillStyle = color.toRGBA();
      ctx.fillRect(x, y, w, h);
  }
}
