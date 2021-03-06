import { Navigator } from "./Navigator"
import { pos, pathEq } from "./WorldPosition"
import { WorldPosition } from "../types"

describe('Navigation', () => {
  describe('shortest path', () => {
    const nav = new Navigator([10,10], () => false) //, neighborsOfPosition)
    // describe('dijkstra', () => {
    //   it('horizontal', () => {
    //     const expected = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5]] as WorldPosition[]
    //     const actual = nav.dijkstra(pos(0, 0), pos(0, 5))
    //     console.log("actual was " + actual)
    //     expect(pathEq(actual, expected)).toBe(true)
    //   })

    //   it('vertical', () => {
    //     const expected = [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0]] as WorldPosition[]
    //     const actual = nav.dijkstra(pos(0, 0), pos(5, 0))
    //     expect(pathEq(actual, expected)).toBe(true)
    //   })

    //   // sure this changes when diagonals are available :)
    //   it('diagonal', () => {
    //     const expected = [[0, 1], [1, 1], [1, 2], [2, 2], [2, 3], [3,3]] as WorldPosition[]
    //     const actual = nav.dijkstra(pos(0,0), pos(3,3))
    //     console.log("actual diag", actual)
    //     expect(pathEq(actual, expected)).toBe(true)
    //   })
    // })
    describe('aStar', () => {
      it('horizontal', () => {
        const expected = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5]] as WorldPosition[]
        const { path: actual } = nav.aStar(pos(0, 0), pos(0, 5))
        // console.log("actual was " + actual)
        expect(pathEq(actual, expected)).toBe(true)
      })

      it('vertical', () => {
        const expected = [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0]] as WorldPosition[]
        const { path: actual } = nav.aStar(pos(0, 0), pos(5, 0))
        expect(pathEq(actual, expected)).toBe(true)
      })

      // sure this changes when diagonals are available :)
      it('diagonal', () => {
        const expected = [[1, 0], [1, 1], [2, 1], [2, 2], [3, 2], [3,3]] as WorldPosition[]
        const { path: actual } = nav.aStar(pos(0,0), pos(3,3))
        // console.log("actual diag", actual)
        expect(pathEq(actual, expected)).toBe(true)
      })
    })
  
  })
})