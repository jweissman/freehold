import { WorldPosition, Direction } from "../types";

export const pos = (x: number, y: number): WorldPosition => {
  return [x, y] as WorldPosition;
}

export const directionFrom = (src: WorldPosition, dst: WorldPosition): Direction => {
  const [sx, sy] = src
  const [dx, dy] = dst
  if (sx === dx) {
    if (sy > dy) { return 'north' }
    if (sy < dy) { return 'south' }
  } else if (sy === dy) {
    if (sx > dx) { return 'west' }
    if (sx < dx) { return 'east' }
  }
  throw new Error('Positions are not neighbors: ' + src + ' / ' + dst)
}

export const adjustPosition = (src: WorldPosition, dir: Direction): WorldPosition => {
  const [sx,sy] = src
  if (dir === 'east') {
    return pos(sx+1,sy)
  } else if (dir === 'west') {
    return pos(sx-1,sy)
  } else if (dir === 'north') {
    return pos(sx,sy-1)
  } else if (dir === 'south') {
    return pos(sx,sy+1)
  }
}

const withinBounds = (src: WorldPosition, dims: [number, number]): boolean => {
  const [sx,sy] = src
  const [w,h] = dims
  return sx >= 0 && sx < w && sy >= 0 && sy < h
}

export const neighborsOfPosition = (src: WorldPosition, dims: [number, number]): WorldPosition[] => {
  const [sx,sy] = src
  return [
                   pos(sx, sy-1), 
    pos(sx-1,sy),                  pos(sx+1,sy),
                   pos(sx, sy+1), 
  ].filter(p => withinBounds(p, dims))
}

export const neighborsOfPositionPlusDiagonals = (src: WorldPosition, dims: [number, number]): WorldPosition[] => {
  const [sx,sy] = src
  return [
    pos(sx-1, sy-1), pos(sx, sy-1),  pos(sx+1, sy-1),
    pos(sx-1,sy),                    pos(sx+1,sy),
    pos(sx-1,sy+1),  pos(sx, sy+1),  pos(sx+1, sy+1),
  ].filter(p => withinBounds(p, dims))
}

export const posEq = (a: WorldPosition, b: WorldPosition): boolean => {
  if (a && b) {
  const [ax,ay] = a
  const [bx,by] = b
  return ax === bx && ay === by
  } else { return false}
}

export const pathEq = (a: WorldPosition[], b: WorldPosition[]): boolean => {
  if (!(a.length === b.length)) { return false }
  for (let i = 0; i < a.length; i++) {
    if (!posEq(a[i], b[i])) { return false }
  }
  return true
}

export const distanceBetween = (a: WorldPosition, b: WorldPosition): number => {
  const [ax,ay] = a
  const [bx,by] = b
  const dx = ax - bx
  const dy = ay - by
  const d = Math.sqrt((dx*dx) + (dy*dy))
  // console.log("Compute distance between", a, b, d)
  return d 
}

export const byDistanceFrom = (target: WorldPosition) => (a: WorldPosition, b: WorldPosition): number => {
  return distanceBetween(target, a) > distanceBetween(target, b) ? 1 : -1
}

export const areaContains = (topLeft: WorldPosition, bottomRight: WorldPosition, trialPos: WorldPosition): boolean => {
  const [ax, ay] = topLeft
  const [bx, by] = bottomRight
  const [x,y] = trialPos
  const contained = ax <= x && x <= bx && ay <= y && y <= by
  // console.log("Does area " + ax + ", " + ay + " to " + bx + ", " + by + " contain " + x + ", " + y + "?", contained)
  return contained
}