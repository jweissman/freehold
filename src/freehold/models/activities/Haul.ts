/* eslint-disable @typescript-eslint/no-unused-vars */
import { IActivity } from "../IActivity";
import { PawnToken } from "../../actors/PawnToken";
import { JobDetail, Activity } from "../../types";
import { Game } from "../Game";

export class Haul implements IActivity {
  title: Activity = "hauling";

  constructor(private game: Game) {}

  isJobAvailable(): boolean {
    // console.log("---> Is hauling job available?")
    // return false
    const outstandingItems = this.game.rawMaterialLocations('wood').filter(location =>
      !this.game.isLocationWithinAnyZone(location)
    )
    return outstandingItems.length > 0 && !this.game.areAllZonesFull()
  }

  findJob(token: PawnToken): JobDetail {
    console.log("would find hauling job for " + token.pawn.name)
    return undefined
    // throw new Error("Method not implemented.");
  }

  perform(_token: PawnToken): Promise<void> {
    throw new Error("Method not implemented.");
  }

}