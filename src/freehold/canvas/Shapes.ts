import { Color } from "excalibur"

export class Shapes {
  static ellipse(ctx: CanvasRenderingContext2D, x: number, y: number, radiusX: number, radiusY: number, color: Color): void {
    ctx.beginPath()
    ctx.ellipse(x, y, radiusX, radiusY,0,0,2*Math.PI)
    ctx.closePath()

    // const oldStyle = ctx.fillStyle
    ctx.fillStyle = color.toRGBA()
    ctx.fill()
    // ctx.fillStyle = oldStyle
  }

}