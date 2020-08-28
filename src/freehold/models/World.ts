import { Cartogram } from "../models/Cartogram";
import { Pawn, Dimensions, Terrain, Vegetation, WorldPosition, Sigil } from "../types";
import { Grid } from "./Grid";
import { Dijkstra } from "./Dijkstra";

export class World {
  public pawns: Pawn[]
  private map: Cartogram
  private dijkstra: Dijkstra
  makePawn = (name: string): Pawn => {
    return {
      name,
      pos: this.map.pickClearLocation(),
      activity: 'ready',
    }
  }

  constructor(public dimensions: Dimensions) {
    this.map = new Cartogram(dimensions);
    this.dijkstra = new Dijkstra(dimensions, position => {
      return this.isBlocked(position)
    });
    this.pawns = [this.makePawn('Samwell'), this.makePawn('Frodi'), this.makePawn('Gendelf'), this.makePawn('Argor')]
  }

  get width(): number { return this.dimensions[0] }
  get height(): number { return this.dimensions[1] }

  get terrain(): Grid<Terrain> { return this.map.terrain }
  get vegetation(): Grid<Vegetation> { return this.map.vegetation }
  get sigils(): Grid<Sigil> { return this.map.sigils }

  update(): void {
    //
  }

  forEachPosition(fn: (x: number, y: number) => void): void {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        fn(x,y)
      }
    }
  }

  shortestPath(src: WorldPosition, dst: WorldPosition): WorldPosition[] {
    return this.dijkstra.shortestPath(src, dst)
  }

  isBlocked(position: WorldPosition): boolean {
    return this.map.vegetation.at(position) === 'tree'
  }
}