import { IActivity } from "../IActivity";
import { PawnToken } from "../../actors/PawnToken";
import { JobDetail } from "../../types";
import { Game } from "../Game";

export class Haul implements IActivity {
  title: "hauling";

  constructor(private game: Game) {}

  isJobAvailable(): boolean {
    // are there outstanding items to haul?
    this.game.rawMaterialLocations

    // is there space available in a region?
    return false
  }

  findJob(token: PawnToken): JobDetail {
    throw new Error("Method not implemented.");
  }

  perform(token: PawnToken): Promise<void> {
    throw new Error("Method not implemented.");
  }

}