import { World } from "./World";
import { TileMap, SpriteSheet, TileSprite } from "excalibur";
import { LAND_IMAGES, WATER_IMAGES, TREE_IMAGES, CELL_SIZE, SIGIL_AXE } from "../constants";
import { Grid } from "./Grid";
import { WorldPosition } from "../types";
import { pick } from "../util/pick";
import { PawnToken } from "../actors/PawnToken";
import { SpriteSheets } from "../Resources";
import { pos, neighborsOfPositionPlusDiagonals, byDistanceFrom, posEq } from "./WorldPosition";

class PawnManagement {
}

export class Game {
  terrain: TileMap
  vegetation: TileMap
  sigils: TileMap
  pawnTokens: PawnToken[]
  markedTreePositions: WorldPosition[] = []

  constructor(private world: World) {}

  setup(): void {
    console.log("Game.setup")

    const terrainImageMap = { 'land': LAND_IMAGES, 'water': WATER_IMAGES }
    this.terrain = this.assembleTiles(
      'terrain',
      SpriteSheets.Terrain,
      this.world.terrain,
      terrainImageMap
    )

    const vegetationImageMap = { 'tree': TREE_IMAGES }
    this.vegetation = this.assembleTiles(
      'vegetation', SpriteSheets.Trees,
      this.world.vegetation,
      vegetationImageMap
    )

    const sigilImageMap = { 'nothing': [], 'axe': [SIGIL_AXE] }
    this.sigils = this.assembleTiles(
      'sigils', SpriteSheets.Icons,
      this.world.sigils,
      sigilImageMap
    )

    this.pawnTokens = this.world.pawns.map(pawn => new PawnToken(pawn))
  }

  update(): void {
    this.world.update()
    for (const token of this.pawnTokens) {
      if (token.pawn.dest && !posEq(token.pawn.dest, token.pawn.pos)) {
        if (!token.moving) {
          if (token.path.length) {
            const nextStep = token.path.shift()
            // console.log("---> Move pawn to " + nextStep)
            this.pawnTokenMoves(token, nextStep)
          } else {
            console.log("---> Compute path from " + token.pawn.pos + " to " + token.pawn.dest)
            token.path = this.computePath(token.pawn.pos, token.pawn.dest)
          }
        }
      } else {
        if (!token.interacting) {
          if (token.pawn.activity !== 'ready') {
            // console.log("---> We have an activity, and we are at the location...?")
            // console.log("---> Activity target is " + token.pawn.activityTarget + " and position is " + token.pawn.pos)
            this.pawnTokenWorks(token) //pawn.token) //token.pawn)

          } else {
            if (this.markedTreePositions.length > 0) {
              const treePositions = this.markedTreePositions
                // .filter(treePos => this.world.shortestPath(treePos, token.pawn.pos).length > 0)
                .sort(byDistanceFrom(token.pawn.pos))
              const treePosition = treePositions.pop() //pick(...this.markedTreePositions)
              if (treePosition && this.world.shortestPath(treePosition, token.pawn.pos).length > 0) {
                token.pawn.activity = 'logging'
                token.pawn.activityTarget = treePosition
                const neighbors = neighborsOfPositionPlusDiagonals(treePosition, this.world.dimensions)
                  .filter(neighbor => !this.world.isBlocked(neighbor))
                  .sort(byDistanceFrom(token.pawn.pos))
                // .sort(neighbor => distanceBetween(token.pawn.pos, neighbor))
                const newTarget = neighbors.pop() //pick(...neighbors)
                if (!posEq(token.pawn.pos, newTarget)) {
                  console.log("---> Send " + token.pawn.name + " to " + newTarget)
                  token.pawn.dest = newTarget
                } else {
                  token.pawn.dest = undefined
                }
              }
            } else {
              // console.warn("---> No trees marked (or closest tree is inaccessible)")
            }
          }
        }
      }
    }
  }

  computePath(pos: WorldPosition, dest: WorldPosition): WorldPosition[] {
    return this.world.shortestPath(pos, dest)
  }

  markTree(pos: WorldPosition): void {
    if (this.inBounds(pos) && this.world.vegetation.at(pos) === 'tree') {
      this.markedTreePositions.push(pos)
      const [x, y] = pos
      this.sigils.getCell(x, y).pushSprite(new TileSprite('sigils', SIGIL_AXE))
    }
  }

  private inBounds(pos: WorldPosition): boolean {
    const [x, y] = pos
    return (x >= 0 && y >= 0 && x < this.world.width && y < this.world.height)
  }

  private async pawnTokenMoves(token: PawnToken, target: WorldPosition) {
    if (!token.moving) {
      token.moving = true
      await token.actions.moveTo(
        target[0] * CELL_SIZE, target[1] * CELL_SIZE, 100
      ).asPromise()
      token.pawn.pos = target
      token.moving = false
    }
  }

  private async pawnTokenWorks(token: PawnToken) {
    if (token.pawn.activity === 'logging') {
      // chop tree at activity target, remove from marked trees...
      token.interacting = true
      const [ax, ay] = token.pawn.activityTarget
      await token.actions.delay(250).asPromise()
      this.vegetation.getCell(ax, ay).clearSprites()
      this.world.vegetation.set(token.pawn.activityTarget, 'nothing')
      this.sigils.getCell(ax, ay).clearSprites()
      this.world.sigils.set(token.pawn.activityTarget, 'nothing')
      this.markedTreePositions = this.markedTreePositions.filter(treePos => treePos !== token.pawn.activityTarget)
      token.pawn.activity = 'ready'
      token.interacting = false
    }
  }

  private assembleTiles<T>(
    layerName: string,
    spritesheet: SpriteSheet,
    grid: Grid<T>,
    imageMap: { [value: string]: number[] },
  ): TileMap {
    const map = new TileMap(
      0, 0,
      CELL_SIZE, CELL_SIZE,
      this.world.width, this.world.height
    )
    map.registerSpriteSheet(layerName, spritesheet)
    this.world.forEachPosition((x, y) => {
      const value = grid.at(pos(x,y)) as unknown as string
      if (value !== undefined && value !== 'nothing') {
        const cell = map.getCell(x, y)
        const spriteId = pick(...imageMap[value])
        cell.pushSprite(new TileSprite(layerName, spriteId))
      }
    })
    return map
  }
}