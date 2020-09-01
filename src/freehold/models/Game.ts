import { World } from "./World";
import { TileMap, SpriteSheet, TileSprite, Color } from "excalibur";
import { LAND_IMAGES, WATER_IMAGES, TREE_IMAGES, CELL_SIZE, SIGIL_AXE, WOOD_PIECE_IMAGES } from "../constants";
import { Grid } from "./Grid";
import { WorldPosition, Dimensions, Material } from "../types";
import { pick } from "../util/pick";
import { PawnToken } from "../actors/PawnToken";
import { SpriteSheets } from "../Resources";
import { pos, posEq, areaContains } from "./WorldPosition";
import { PawnManagement } from "./PawnManagement";

type Region = { topLeft: WorldPosition, bottomRight: WorldPosition, color: Color }

export class Game {
  terrain: TileMap
  vegetation: TileMap
  rawMaterials: TileMap
  sigils: TileMap
  zones: Region[] = []
  pawnTokens: PawnToken[]
  markedTreePositions: WorldPosition[] = []
  pawnManager: PawnManagement = new PawnManagement(this);
  ticks = 0;

  constructor(private world: World) { }

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

    const rawMaterialsImageMap = { 'nothing': [], 'wood_piece': WOOD_PIECE_IMAGES }
    this.rawMaterials = this.assembleTiles(
      'matter', SpriteSheets.Matter,
      this.world.rawMaterial,
      rawMaterialsImageMap
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
    this.ticks++
    for (const token of this.pawnTokens) {
      this.pawnManager.updatePawn(token)
    }
  }

  get dims(): Dimensions { return this.world.dimensions }

  rawMaterialLocations(kind: Material): WorldPosition[] {
    return this.world.rawMaterial.occupiedLocations(kind)
    // return []
  }

  isBlocked(position: WorldPosition): boolean {
    return this.world.isBlocked(position)
  }

  

  computePath(pos: WorldPosition, dest: WorldPosition): WorldPosition[] {
    return this.world.shortestPath(pos, dest)
  }

  markTree(position: WorldPosition): void {
    if (this.inBounds(position) && this.world.vegetation.at(position) === 'tree') {
      this.markedTreePositions.push(position)
      const [x, y] = position
      this.sigils.getCell(x, y).pushSprite(new TileSprite('sigils', SIGIL_AXE))
      this.world.sigils.set(position, 'axe')
    }
  }

  chopTree(position: WorldPosition): void {
    const [ax, ay] = position
    this.vegetation.getCell(ax, ay).clearSprites()
    this.world.vegetation.set(position, 'nothing')

    this.sigils.getCell(ax, ay).clearSprites()
    this.world.sigils.set(position, 'nothing')

    this.markedTreePositions = this.markedTreePositions.filter(treePos => !posEq(treePos, position))

    this.world.rawMaterial.set(position, 'wood')
    this.world.rawMaterialCount.set(position, pick(1,2,3))
    this.rawMaterials.getCell(ax,ay).pushSprite(
      new TileSprite('matter', pick(...WOOD_PIECE_IMAGES)))
    
  }

  createZone(topLeft: WorldPosition, bottomRight: WorldPosition): void {
    topLeft = this.enforceBounds(topLeft)
    bottomRight = this.enforceBounds(bottomRight)
    const color = new Color(pick(60, 90, 120), pick(60, 90, 120), pick(60, 90, 120), 0.2)
    if (topLeft[0] < bottomRight[0] && topLeft[1] < bottomRight[1]) {
      console.log("---> Creating zone from " + topLeft + " to " + bottomRight)
      this.zones.push({
        topLeft, bottomRight, color
      })
    } else {
      console.log("---> Not creating zone; zone had no size?")
    }
    // throw new Error("Method not implemented.");
  }

  isLocationWithinAnyZone(location: WorldPosition): boolean {
    return Boolean(
      this.zones.find(zone => {
        areaContains(zone.topLeft, zone.bottomRight, location)
      })
    )
  }

  areAllZonesFull(): boolean {
    if (this.zones.length === 0) { return true }
    for (const zone of this.zones) {
      for (let y = zone.topLeft[1]; y <= zone.bottomRight[1]; y++) {
        for (let x = zone.topLeft[0]; x <= zone.bottomRight[0]; x++) {
          if (this.world.rawMaterialCount.at(pos(x,y)) < 50) {
            return false
          }
        }
      }
    }
    return true
  }

  private inBounds(pos: WorldPosition): boolean {
    const [x, y] = pos
    return (x >= 0 && y >= 0 && x < this.world.width && y < this.world.height)
  }

  private enforceBounds(position: WorldPosition): WorldPosition {
    let [x, y] = position
    if (x < 0) { x = 0; }
    if (x > this.world.width) { x = this.world.width }
    if (y < 0) { y = 0; }
    if (y > this.world.height) { y = this.world.height }
    return pos(x,y)
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
      this.world.height, this.world.width
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