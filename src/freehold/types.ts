
export type Dimensions = [number, number] & { unit: 'area dimensions' }

export type Direction = 'north' | 'south' | 'east' | 'west'

export type WorldPosition = [number, number] & { unit: 'world position' }


export type Activity = 'logging'
export type Pawn = { name: string, pos: WorldPosition, dest?: WorldPosition, activity?: Activity, activityTarget?: WorldPosition } 

export type Terrain  = 'land' | 'water'
export type Vegetation = 'nothing' | 'grass' | 'tree' | 'flower'
export type Sigil = 'nothing' | 'axe'

export type Material = 'nothing' | 'wood' | 'stone' | 'iron'
// export type Thing    = 'nothing' | 'bed' | 'chair' | 'table' | 'door'
// export type StructureKind = 'nothing' | 'wall'
// export type Structure = { kind: StructureKind, material: Material }

export type JobDetail = {
  activityTarget: WorldPosition,
  travelDestination: WorldPosition
}