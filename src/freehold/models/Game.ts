import { World } from "./World";
import { TileMap, SpriteSheet, TileSprite, Color } from "excalibur";
import { LAND_IMAGES, WATER_IMAGES, TREE_IMAGES, CELL_SIZE, SIGIL_AXE, WOOD_PIECE_IMAGES, STACK_MAX, WOOD_STACK_IMAGES, MATERIAL_IMAGES, MATERIAL_STACK_IMAGES } from "../constants";
import { Grid } from "./Grid";
import { WorldPosition, Dimensions, Material, Item } from "../types";
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
    const terrainImageMap = { 'land': LAND_IMAGES, 'water': WATER_IMAGES }
    this.terrain = this.assembleTiles(
      'terrain',
      SpriteSheets.Terrain,
      this.world.terrain,
      terrainImageMap
    )
    // this.terrain.

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
  }

  rawMaterialKindAtLocation(location: WorldPosition): Material {
    return this.world.rawMaterial.at(location)
  }

  rawMaterialCountAtLocation(location: WorldPosition): number {
    return this.world.rawMaterialCount.at(location)
  }

  isBlocked(position: WorldPosition): boolean {
    return this.world.isBlocked(position)
  }

  computePath(pos: WorldPosition, dest: WorldPosition): WorldPosition[] {
    return this.world.shortestPath(pos, dest)
  }

  canPathBetween(a: WorldPosition, b: WorldPosition): boolean {
    return posEq(a,b) || this.computePath(a, b).length > 0
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
    this.world.rawMaterialCount.set(position, 1) //pick(1,2,3))
    this.rawMaterials.getCell(ax,ay).pushSprite(
      new TileSprite('matter', pick(...WOOD_PIECE_IMAGES)))
    
  }

  gatherResource(position: WorldPosition, maxToRemove: number): { kind: Item, amount: number } {
    const kind = this.world.rawMaterial.at(position)
    const amountAtPosition = this.world.rawMaterialCount.at(position)
    const amountRemoved = Math.min(amountAtPosition, maxToRemove)
    const amountRemaining = amountAtPosition - amountRemoved
    this.world.rawMaterialCount.set(position, amountRemaining)
    if (amountRemaining === 0) {
      this.world.rawMaterial.set(position, 'nothing')
    }
    const [ax, ay] = position
    this.rawMaterials.getCell(ax, ay).clearSprites()
    if (amountRemaining > 0) {
      let sprite = new TileSprite('matter', pick(...MATERIAL_IMAGES[kind]))
      if (amountRemaining > STACK_MAX / 2) {
        sprite = new TileSprite('matter', pick(...MATERIAL_STACK_IMAGES[kind]))
      }
      this.rawMaterials.getCell(ax, ay).pushSprite(sprite)
    }
    return { kind, amount: amountRemoved }
  }

  storeResource(kind: Material, position: WorldPosition, amount: number): void {
    // what kind of resource is here? add to it...
    const [ax, ay] = position

    this.world.rawMaterial.set(position, kind)
    const currentCount = this.world.rawMaterialCount.at(position)
    const newAmount = currentCount + amount
    this.world.rawMaterialCount.set(position,
      newAmount
    )

    this.rawMaterials.getCell(ax, ay).clearSprites()
    let sprite = new TileSprite('matter', pick(...MATERIAL_IMAGES[kind]))
    if (newAmount > STACK_MAX / 2) {
      sprite = new TileSprite('matter', pick(...MATERIAL_STACK_IMAGES[kind]))
    }
    this.rawMaterials.getCell(ax, ay).pushSprite(
      sprite
    )
  }

  planWall(origin: WorldPosition, destination: WorldPosition): void {
    console.log("---> Would build wall from " + origin + " to " + destination)
    // throw new Error("Method not implemented.");
  }

  declareZone(topLeft: WorldPosition, bottomRight: WorldPosition): void {
    topLeft = this.enforceBounds(topLeft)
    bottomRight = this.enforceBounds(bottomRight)
    const color = new Color(pick(60, 90, 120), pick(60, 90, 120), pick(60, 90, 120), 0.5)
    if (topLeft[0] <= bottomRight[0] && topLeft[1] <= bottomRight[1]) {
      console.log("---> Creating zone from " + topLeft + " to " + bottomRight)
      this.zones.push({
        topLeft, bottomRight, color
      })
    } else {
      console.log("---> Not creating zone; zone had no size?")
    }
    // throw new Error("Method not implemented.");
  }

  deleteZoneAt(location: WorldPosition): void {
    this.zones = this.zones.filter(zone =>
      !areaContains(
        pos(zone.topLeft[0], zone.topLeft[1]),
        pos(zone.bottomRight[0], zone.bottomRight[1]),
        location
      )
    )
  }

  isLocationWithinAnyZone(location: WorldPosition): boolean {
    const containingZone = this.zones.find(zone =>
      areaContains(zone.topLeft, zone.bottomRight, location)
    )

    if (containingZone) {
      // console.log("---> Zone " + containingZone + " contains " + location)
      return true
    }
    // console.log("---> No zone contains " + location)
    return false
  }

  areAllZonesFull(): boolean {
    if (this.zones.length === 0) { return true }
    for (const zone of this.zones) {
      for (let y = zone.topLeft[1]; y <= zone.bottomRight[1]; y++) {
        for (let x = zone.topLeft[0]; x <= zone.bottomRight[0]; x++) {
          if (this.world.rawMaterialCount.at(pos(x,y)) < STACK_MAX) {
            return false
          }
        }
      }
    }
    return true
  }

  findUnfilledZonePositions(): WorldPosition[] {
    const positions: WorldPosition[] = []
    for (const zone of this.zones) {
      for (let y = zone.topLeft[1]; y <= zone.bottomRight[1]; y++) {
        for (let x = zone.topLeft[0]; x <= zone.bottomRight[0]; x++) {
          if (this.world.rawMaterialCount.at(pos(x,y)) < STACK_MAX) {
            // return false
            positions.push(pos(x,y))
          }
        }
      }
    }
    return positions;
  }

  private inBounds(pos: WorldPosition): boolean {
    const [x, y] = pos
    return (x >= 0 && y >= 0 && x < this.world.width && y < this.world.height)
  }

  private enforceBounds(position: WorldPosition): WorldPosition {
    let [x, y] = position
    if (x < 0) { x = 0; }
    if (x >= this.world.width) { x = this.world.width-1 }
    if (y < 0) { y = 0; }
    if (y >= this.world.height) { y = this.world.height-1 }
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