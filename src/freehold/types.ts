
export type Dimensions = [number, number] & { unit: 'area dimensions' }

export type Direction = 'north' | 'south' | 'east' | 'west'

export type WorldPosition = [number, number] & { unit: 'world position' }


export type Activity = 'logging' | 'hauling'
export type Item = Material // | Thing

export type Pawn = {
  name: string,
  pos: WorldPosition,
  inventory: Item[],

  dest?: WorldPosition,
  activity?: Activity,
  activityTarget?: WorldPosition,
  jobSubtype?: JobSubtype
} 

export type Terrain  = 'land' | 'water'
export type Vegetation = 'nothing' | 'grass' | 'tree' | 'flower'
export type Sigil = 'nothing' | 'axe'

export type Material = 'nothing' | 'wood' | 'stone' | 'iron'
// export type Thing    = 'nothing' | 'bed' | 'chair' | 'table' | 'door'
// export type StructureKind = 'nothing' | 'wall'
// export type Structure = { kind: StructureKind, material: Material }

type JobSubtype = 'haul-gather' | 'haul-store'
export type JobDetail = {
  activityTarget: WorldPosition,
  travelDestination: WorldPosition,
  jobSubtype?: JobSubtype
}