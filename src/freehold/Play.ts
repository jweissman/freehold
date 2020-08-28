import { Scene, Vector, Actor, Color } from "excalibur";
import { Game } from "./models/Game";
import { World } from "./models/World";
import { Dimensions, WorldPosition } from "./types";
import { CELL_SIZE } from "./constants";
import { FreeholdEngine } from "../FreeholdEngine";
import { pos } from "./models/WorldPosition";
import { Drag } from "./models/Drag";
import { SingleCellBox } from "./actors/SingleCellBox";

export class Play extends Scene {
  game: Game
  cursor: SingleCellBox
  cursorWorldPos: WorldPosition = pos(-1,-1)
  drag?: Drag
  dragEnvelope: Actor

  onInitialize(engine: FreeholdEngine): void {
    console.log("Play.onInitialize")

    const world = new World([40,40] as Dimensions);
    this.game = new Game(world)
    this.game.setup()

    this.add(this.game.terrain)
    this.add(this.game.vegetation)
    this.add(this.game.sigils)

    engine.input.pointers.primary.on('move', (e) => this.updateCursorPosition(e.pos))
    this.cursor = new SingleCellBox()
    this.add(this.cursor)

    this.dragEnvelope = new Actor({ color: Color.Gray, opacity: 0.3, anchor: new Vector(0,0) })
    this.add(this.dragEnvelope)

    this.game.pawnTokens.forEach(pawnToken => this.add(pawnToken))
  }

  updateCursorPosition(position: Vector): void {
    this.cursorWorldPos = pos(
      Math.floor(position.x / CELL_SIZE) + 1,
      Math.floor(position.y / CELL_SIZE) + 1,
    )

    this.cursor.pos = new Vector(
      this.cursorWorldPos[0] * CELL_SIZE,
      this.cursorWorldPos[1] * CELL_SIZE,
    )
  }

  onPreUpdate(engine: FreeholdEngine): void {
    if (this.game) {
      this.game.update()
    }
    const mouse = engine.input.pointers.primary
    if (mouse.isDragStart) {
      this.drag = new Drag(this.cursorWorldPos)
    } else if (mouse.isDragEnd) {
      const [originX,originY] = this.drag.minima
      const [destX,destY] = this.drag.maxima
      for (let x = originX; x < destX; x++) {
        for (let y = originY; y < destY; y++) {
          this.game.markTree(pos(x,y))
        }
      }
      this.dragEnvelope.visible = false
    } else if (mouse.isDragging) {
      this.drag.continue(this.cursorWorldPos)
      this.dragEnvelope.pos = new Vector(
        (this.drag.origin[0] * CELL_SIZE) + 1,
        (this.drag.origin[1] * CELL_SIZE) + 1,
      )
      this.dragEnvelope.width = (this.drag.extent[0] * CELL_SIZE)
      this.dragEnvelope.height = (this.drag.extent[1] * CELL_SIZE)
      this.dragEnvelope.visible = true
    }
  }
}