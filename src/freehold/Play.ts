import { Scene, Vector, Actor, Color, Input, Label, ScreenElement } from "excalibur";
import { Game } from "./models/Game";
import { World } from "./models/World";
import { WorldPosition } from "./types";
import { CELL_SIZE, WORLD_DIMS } from "./constants";
import { FreeholdEngine } from "../FreeholdEngine";
import { pos } from "./models/WorldPosition";
import { Drag } from "./models/Drag";
import { SingleCellBox } from "./actors/SingleCellBox";
import { ZoneView } from "./actors/ZoneView";

class Hud extends ScreenElement {
  title: Label = new Label("Freehold v0.0.1", 20, 20)
  help: Label = new Label("actions: (c)ut timber / create (z)one / (d)elete zone / (b)uild wall", 20, 30)
  currentAction: Label = new Label("...", 20, 40)
  onInitialize() {
    this.title.color = Color.White
    this.title.bold = true
    this.add(this.title)
    this.currentAction.color = Color.White
    this.add(this.currentAction)
    this.help.color = Color.White
    this.add(this.help)
  }
}

type Action = 'cut' | 'build' | 'create-zone' | 'delete-zone' | 'inspect'
export class Play extends Scene {
  game: Game
  cursor: SingleCellBox
  cursorWorldPos: WorldPosition = pos(-1,-1)
  drag?: Drag
  dragEnvelope: Actor
  currentAction: Action = 'cut'

  hud: Hud;
  regionView: ZoneView

  lastMouseButton: Input.PointerButton

  panOrigin: Vector
  panning: boolean

  onInitialize(engine: FreeholdEngine): void {
    // this.back
    console.log("[Play.onInitialize] Hello world!")

    const world = new World(WORLD_DIMS)
    this.game = new Game(world)
    this.game.setup()

    // this.add(this.game.terrain)
    this.add(this.game.vegetation)
    this.add(this.game.rawMaterials)
    this.add(this.game.plannedStructures)
    this.add(this.game.sigils)

    this.regionView = new ZoneView(this.game, this.camera)
    this.add(this.regionView)

    this.hud = new Hud()
    this.add(this.hud)
    this.setAction('cut')

    this.camera.pos =
      new Vector(world.pawns[0].pos[0] * CELL_SIZE, world.pawns[0].pos[1] * CELL_SIZE);
    this.camera.zoom(2)

    const mouse = engine.input.pointers.primary
    mouse.on('move', (e) => {
      this.updateCursorPosition(e.pos)
      if (this.lastMouseButton === Input.PointerButton.Middle) {
        if (this.panning) {
          this.camera.pos.addEqual(
                    this.panOrigin.sub( mouse.lastWorldPos)  //e.pos)
                )
        } else {
          this.camera.vel = new Vector(0,0)
        }
      } else {
        const enforceLines = this.currentAction === 'build'
        this.handleLeftDrag(mouse, enforceLines)
      }
    })
    mouse.on('up', () => {
      if (this.lastMouseButton == Input.PointerButton.Left) {
        const enforceLines = this.currentAction === 'build'
        const { isFinished } = this.handleLeftDrag(mouse, enforceLines)
        if(isFinished) { return this.applyCurrentActionToDragArea() }
      } else if (this.lastMouseButton === Input.PointerButton.Middle) {
        this.panning = false
      }
    })
    mouse.on('down', (e) => {
      this.lastMouseButton = e.button
      if (e.button == Input.PointerButton.Left) {
        if (this.currentAction === 'delete-zone') {
          this.game.deleteZoneAt(this.cursorWorldPos)
        }
        const enforceLines = this.currentAction === 'build'
        this.handleLeftDrag(mouse, enforceLines)
      } else if (e.button == Input.PointerButton.Middle) {
        this.panOrigin = mouse.lastWorldPos
        this.panning = true
      }
    })

    mouse.on('wheel', (e) => {
      if (e.deltaY > 0) {
        this.camera.zoom(Math.max(this.camera.getZoom() - 0.2, 1))
      } else if (e.deltaY < 0) {
        this.camera.zoom(Math.min(this.camera.getZoom() + 0.2, 4))
      }
    })

    this.cursor = new SingleCellBox()
    this.add(this.cursor)

    this.dragEnvelope = new Actor({ color: Color.Gray, opacity: 0.3, anchor: new Vector(0, 0) })
    this.add(this.dragEnvelope)

    this.game.pawnTokens.forEach(pawnToken => this.add(pawnToken))
  }

  setAction(action: Action): void {
    this.hud.currentAction.text = "current action is: " + action
    this.currentAction = action
  }

  updateCursorPosition(position: Vector): void {
    this.cursorWorldPos = pos(
      Math.floor(position.x / CELL_SIZE), // + 1,
      Math.floor(position.y / CELL_SIZE), // + 1,
    )

    this.cursor.pos = new Vector(
      this.cursorWorldPos[0] * CELL_SIZE,
      this.cursorWorldPos[1] * CELL_SIZE,
    )
  }

  onPreUpdate(engine: FreeholdEngine): void {
    if (this.game) { this.game.update() }

    const keys = engine.input.keyboard
    if (keys.isHeld(Input.Keys.B)) {
      this.setAction('build')
    } else if (keys.isHeld(Input.Keys.C)) {
      this.setAction('cut')
    } else if (keys.isHeld(Input.Keys.Z)) {
      this.setAction('create-zone')
    } else if (keys.isHeld(Input.Keys.D)) {
      this.setAction('delete-zone')
    } else if (keys.isHeld(Input.Keys.Esc)) {
      this.setAction('inspect')
      this.drag = null
    }
  }

  applyCurrentActionToDragArea(): void {
       const [originX, originY] = this.drag.minima
      const [destX, destY] = this.drag.maxima
       if (this.currentAction === 'cut') {
         console.log("---> Cut timber from " + originX + "," + originY + " to " + destX + ", " + destY)
         for (let x = originX; x <= destX; x++) {
           for (let y = originY; y <= destY; y++) {
             this.game.markTree(pos(x, y))
           }
         }
       } else if (this.currentAction === 'create-zone') {
         this.game.declareZone(pos(originX, originY), pos(destX, destY))
       } else if (this.currentAction === 'build') {
         this.game.planWall(pos(originX, originY), pos(destX, destY))
       }
 
    //  }
    //}
  }

  private handleLeftDrag(mouse: Input.Pointer, enforceLines: boolean): { isFinished: boolean } {
    let isFinished = false
    if (mouse.isDragStart) {
      this.drag = new Drag(this.cursorWorldPos, enforceLines)
    } else if (mouse.isDragEnd) {
      this.dragEnvelope.visible = false
      isFinished= true
    } else if (mouse.isDragging) {
      this.drag.continue(this.cursorWorldPos)
      const [originX, originY] = this.drag.minima
       const [destX, destY] = this.drag.maxima
      this.dragEnvelope.pos = new Vector(
        (originX * CELL_SIZE), // + 1,
        (originY * CELL_SIZE), // + 1,
      )
      this.dragEnvelope.width = (destX - originX + 1) * CELL_SIZE
      this.dragEnvelope.height = (destY - originY + 1) * CELL_SIZE
      this.dragEnvelope.visible = true
    }
    // }
      return { isFinished}
  }
}