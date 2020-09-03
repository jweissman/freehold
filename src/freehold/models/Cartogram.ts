import { Terrain, WorldPosition, Dimensions, Vegetation, Sigil, Material } from "../types";
import { Grid } from "./Grid";
import { pos, byDistanceFrom } from "./WorldPosition";
import { pick } from "../util/pick";
import { SimpleGrid } from "./SimpleGrid";
import { take } from "../util/take";
import { TREE_COVER_RATIO } from "../constants";

// type Matter = { kind: Material, amount: number }
export class Cartogram {
  terrain: Grid<Terrain>
  vegetation: Grid<Vegetation>

  rawMaterial: Grid<Material>
  rawMaterialCount: SimpleGrid<number>
  
  sigils: Grid<Sigil>

  constructor(private dims: Dimensions) {
    this.terrain = new Grid<Terrain>(dims, ['land', 'water'])
    this.vegetation = new Grid<Vegetation>(dims, ['nothing', 'grass', 'flower', 'tree'])
    this.rawMaterial = new Grid<Material>(dims, [ 'nothing', 'wood' ])
    this.rawMaterialCount = new SimpleGrid<number>(0)
    this.sigils = new Grid<Sigil>(dims, ['nothing', 'axe'])

    this.terrain.fill('land')
    this.vegetation.fill('nothing')
    this.vegetation.distributeRandomly('tree', TREE_COVER_RATIO)
    this.rawMaterial.fill('nothing')
    this.sigils.fill('nothing')
  }

  get width(): number { return this.dims[0] }
  get height(): number { return this.dims[1] }

  get center(): WorldPosition {
    return [
      this.dims[0] / 2,
      this.dims[1] / 2
    ] as WorldPosition
  }

  pickRandomClearLocation(): WorldPosition {
    const locations: WorldPosition[] = []
    for (let y=0; y<this.height; y++) {
      for (let x=0; x<this.width; x++) {
        if (this.vegetation.at(pos(x,y)) !== 'tree') {
          locations.push(pos(x,y))
        }
      }
    }
    return pick(...locations)
  }

  pickClearLocations(n: number, nearPoint: WorldPosition = this.center): WorldPosition[] {
    const locations: WorldPosition[] = []
    for (let y=0; y<this.height; y++) {
      for (let x=0; x<this.width; x++) {
        if (this.vegetation.at(pos(x,y)) !== 'tree') {
          locations.push(pos(x,y))
        }
      }
    }
    return take(n, locations.sort(byDistanceFrom(nearPoint)))
  }
}