/* eslint-disable @typescript-eslint/no-var-requires */

import { Texture, SpriteSheet } from "excalibur"
import { CELL_SIZE } from "./constants"

const terrain = require('./images/terrain.png')
const trees = require('./images/trees.png')
const icons = require('./images/icons.png')

const Resources = {
  Terrain: new Texture(terrain),
  Trees: new Texture(trees),
  Icons: new Texture(icons),
}

const sz = CELL_SIZE
const SpriteSheets = {
  Terrain: new SpriteSheet(Resources.Terrain, 4, 4, sz, sz),
  Trees: new SpriteSheet(Resources.Trees, 4, 4, sz, sz),
  Icons: new SpriteSheet(Resources.Icons, 4, 4, sz, sz),
}

export { Resources, SpriteSheets }