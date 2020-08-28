import { Terrain, WorldPosition, Dimensions, Vegetation, Sigil } from "../types";
import { Grid } from "./Grid";
import { pos } from "./WorldPosition";
import { pick } from "../util/pick";

export class Cartogram {
  terrain: Grid<Terrain>
  vegetation: Grid<Vegetation>
  sigils: Grid<Sigil>

  constructor(private dims: Dimensions) {
    this.terrain = new Grid<Terrain>(dims, ['land', 'water'])
    this.vegetation = new Grid<Vegetation>(dims, ['nothing', 'grass', 'flower', 'tree'])
    this.sigils = new Grid<Sigil>(dims, ['nothing', 'axe'])

    this.terrain.fill('land')
    this.vegetation.fill('nothing')
    this.vegetation.distributeRandomly('tree', 0.4)
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

  pickLocation(): WorldPosition {
    return this.center as WorldPosition
  }

  pickClearLocation(): WorldPosition {
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
}