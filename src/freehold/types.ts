
export type Dimensions = [number, number] & { unit: 'area dimensions' }

export type Direction = 'north' | 'south' | 'east' | 'west'

export type WorldPosition = [number, number] & { unit: 'world position' }
export type Action = 'cut' | 'build' | 'create-zone' | 'delete-zone' | 'inspect' | 'cancel'

export type Activity = 'logging' | 'hauling' | 'building'
export type Item = Material // | Thing

export type Pawn = {
  name: string,
  pos: WorldPosition,
  inventory: Item[],

  priorities: Activity[],

  dest?: WorldPosition,
  activity?: Activity,
  activityTarget?: WorldPosition,
  jobSubtype?: JobSubtype
} 

export type Terrain  = 'land' | 'water'
export type Vegetation = 'grass' | 'tree' | 'flower'
export type Sigil = 'axe'

export type Material = 'wood' | 'stone' | 'iron'
// export type Thing    = 'nothing' | 'bed' | 'chair' | 'table' | 'door'
export type Structure = 'wall'
// export type Structure = { kind: StructureKind, material: Material }

type JobSubtype = 'haul-gather' | 'haul-store'
export type JobDetail = {
  activityTarget: WorldPosition,
  travelDestination: WorldPosition,
  jobSubtype?: JobSubtype
}

export type Language = {
  name: string,
  // prefixes: string[],
  stems: string[],
  suffixes: string[],
}