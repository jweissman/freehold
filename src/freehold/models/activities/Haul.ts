/* eslint-disable @typescript-eslint/no-unused-vars */
import { IActivity } from "../IActivity";
import { PawnToken } from "../../actors/PawnToken";
import { JobDetail, Activity, WorldPosition } from "../../types";
import { Game } from "../Game";
import { byDistanceFrom } from "../WorldPosition";
import { PositionSet } from "../PositionSet";
import { INVENTORY_LIMIT, STACK_MAX } from "../../constants";

export class Haul implements IActivity {
  title: Activity = "hauling";

  private assignedItemLocations: PositionSet = new PositionSet();
  // private assignedZoneLocations: PositionSet = new PositionSet();

  constructor(private game: Game) {}

  get outstandingItemLocations(): WorldPosition[] {
    const timber = this.game.rawMaterialLocations('wood')
    // console.log("---> Outstanding wood is at ", timber)
    return timber.filter(location =>
      !this.game.isLocationWithinAnyZone(location)
    ).filter(location => !this.assignedItemLocations.has(location))
  }

  get freeZoneLocations(): WorldPosition[] {
    return this.game.findUnfilledZonePositions()
      // .filter(location => !this.assignedZoneLocations.has(location))
  }

  isJobAvailable(token: PawnToken): boolean {
    const canGather = (this.outstandingItemLocations.length > 0 && !this.game.areAllZonesFull())
    const canStore = (!this.game.areAllZonesFull() && token.pawn.inventory.length > 0)
    // console.log("---> Is a hauling job available for " + token.pawn.name + "?", { canGather, canStore });
    return canGather || canStore
  }

  findJob(token: PawnToken): JobDetail {
    const hasRoomInInventory = token.pawn.inventory.length < INVENTORY_LIMIT
    // console.log("---> Does " + token.pawn.name  + " have room in inventory? " + hasRoomInInventory)
    const thereExistOutstandingItems = this.outstandingItemLocations.length > 0
    if (hasRoomInInventory && thereExistOutstandingItems) {
      const nearestAccessibleItemLocation = this.outstandingItemLocations
        .sort(byDistanceFrom(token.pawn.pos))
        .find(pos => this.game.canPathBetween(pos, token.pawn.pos))
      if (nearestAccessibleItemLocation) {
        this.assignedItemLocations.add(nearestAccessibleItemLocation)
        return {
          activityTarget: nearestAccessibleItemLocation,
          travelDestination: nearestAccessibleItemLocation,
          jobSubtype: 'haul-gather'
        }
      }
    } else if (token.pawn.inventory.length > 0) { //} && !this.game.areAllZonesFull()) {
      // find an un-filled zone slot...
      const freeZoneSpace = this.freeZoneLocations
        .sort(byDistanceFrom(token.pawn.pos))
        .find(pos => this.game.canPathBetween(pos, token.pawn.pos))
      if (freeZoneSpace) {
        // this.assignedZoneLocations.add(freeZoneSpace)
        return {
          activityTarget: freeZoneSpace,
          travelDestination: freeZoneSpace,
          jobSubtype: 'haul-store'
        }
      }
    }
  }

  async perform(token: PawnToken): Promise<void> {
    if (token.pawn.jobSubtype === 'haul-gather') {
      const { activityTarget } = token.pawn
      const maxToAccept = INVENTORY_LIMIT - token.pawn.inventory.length
      const { kind, amount } = this.game.gatherResource(activityTarget, maxToAccept)
      for (let i = 0; i < amount; i++) {
        token.pawn.inventory.push(kind)
      }
      this.assignedItemLocations.delete(activityTarget)
    } else if (token.pawn.jobSubtype === 'haul-store') {
      const { activityTarget } = token.pawn
      const kind = this.game.rawMaterialKindAtLocation(activityTarget) //=== 'nothing'
        ? this.game.rawMaterialKindAtLocation(activityTarget)
        : token.pawn.inventory[0]
      const amountLocationCanAccept = STACK_MAX - this.game.rawMaterialCountAtLocation(activityTarget)
      let amountToStore = token.pawn.inventory.filter(k => kind === k).length
      if (amountToStore > amountLocationCanAccept) {
        amountToStore = amountLocationCanAccept
      }
      for (let i = 0; i < amountToStore; i++) {
        const indexToRemove = token.pawn.inventory.findIndex(k => kind === k)
        token.pawn.inventory = token.pawn.inventory.filter((_,i) => i!==indexToRemove)
      }
      this.game.storeResource(kind, activityTarget, amountToStore)
      // this.assignedZoneLocations.delete(activityTarget)
    }
  }

}