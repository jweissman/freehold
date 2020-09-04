/* eslint-disable @typescript-eslint/no-var-requires */

import { Texture, SpriteSheet } from "excalibur"
import { CELL_SIZE } from "./constants"

const terrain = require('./images/terrain.png')
const trees = require('./images/trees.png')
const icons = require('./images/icons.png')
const matter = require('./images/matter.png')
const structure = require('./images/structure.png')
const structureTransparent = require('./images/structure-transparent.png')

const Resources = {
  Terrain: new Texture(terrain),
  Trees: new Texture(trees),
  Matter: new Texture(matter),
  Icons: new Texture(icons),
  Structure: new Texture(structure),
  StructureTransparent: new Texture(structureTransparent),
}

const sz = CELL_SIZE
const SpriteSheets = {
  Terrain: new SpriteSheet(Resources.Terrain, 4, 4, sz, sz),
  Trees: new SpriteSheet(Resources.Trees, 4, 4, sz, sz),
  Matter: new SpriteSheet(Resources.Matter, 4, 4, sz, sz),
  Icons: new SpriteSheet(Resources.Icons, 4, 4, sz, sz),
  Structure: new SpriteSheet(Resources.Structure, 4, 4, sz, sz),
  StructureTransparent: new SpriteSheet(Resources.StructureTransparent, 4, 4, sz, sz),
}

export { Resources, SpriteSheets }