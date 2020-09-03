import { Cartogram } from "../models/Cartogram";
import { Pawn, Dimensions, Terrain, Vegetation, WorldPosition, Sigil, Material, Activity } from "../types";
import { Grid } from "./Grid";
import { Navigator } from "./Navigator";
import { SimpleGrid } from "./SimpleGrid";
import { pick } from "../util/pick";
import { INITIAL_PAWN_COUNT, NAME_INITIAL_SYLLABLES, NAME_FINAL_SYLLABLES, DWARVEN_LANGUAGE } from "../constants";
import { shuffle } from "../util/shuffle";

export class World {
  public pawns: Pawn[]
  private map: Cartogram
  private nav: Navigator
  

  constructor(public dimensions: Dimensions, public initialPawnCount: number = INITIAL_PAWN_COUNT) {
    this.map = new Cartogram(dimensions);
    this.nav = new Navigator(dimensions, position => {
      return this.isBlocked(position)
    });

    const pawnPositions = this.map.pickClearLocations(initialPawnCount)
    this.pawns = []
    const language = DWARVEN_LANGUAGE
    for (let i = 0; i < initialPawnCount; i++) {
      // const pawnNames = [
      const pawnName = pick(...language.stems) + pick(...language.suffixes)
      //   pick(...language.stems) + pick(...language.suffixes),
      //   pick(...language.stems) + pick(...language.suffixes),
      // ].sort((a,b) => a.length >= b.length ? 1 : -1)
      this.pawns.push( 
        this.makePawn(pawnName, pawnPositions[i])
      )
    }
  }

  get width(): number { return this.dimensions[0] }
  get height(): number { return this.dimensions[1] }

  get terrain(): Grid<Terrain> { return this.map.terrain }
  get vegetation(): Grid<Vegetation> { return this.map.vegetation }
  get sigils(): Grid<Sigil> { return this.map.sigils }
  get rawMaterial(): Grid<Material> { return this.map.rawMaterial } 
  get rawMaterialCount(): SimpleGrid<number> { return this.map.rawMaterialCount } 

  makePawn = (name: string, pos: WorldPosition): Pawn => {
    return {
      name,
      pos,
      // pos: this.map.pickRandomClearLocation(),
      inventory: [],
      priorities: shuffle('logging', 'hauling', 'building') as Activity[]
    }
  }

  forEachPosition(fn: (x: number, y: number) => void): void {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        fn(x,y)
      }
    }
  }

  shortestPath(src: WorldPosition, dst: WorldPosition): WorldPosition[] {
    const { path } = this.nav.aStar(src, dst)
    return path
  }

  isBlocked(position: WorldPosition): boolean {
    return this.map.vegetation.at(position) === 'tree'
  }
}