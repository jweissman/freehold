import { IActivity } from "../IActivity";
import { Activity, JobDetail } from "../../types";
import { PawnToken } from "../../actors/PawnToken";

/**
 *  this is actually a 'three part' activity:
 * 
 *   1. gather requirements
 *   2. haul to target
 *   3. once all reqs are gathered, construct
 * 
 */
export class Construction implements IActivity {
  title: Activity = 'building'

  isJobAvailable(token: PawnToken): boolean {
    // are there any of the material requirements for any outstanding planned buildings anywhere?
    throw new Error("Method not implemented.");
  }
  findJob(token: PawnToken): JobDetail {
    throw new Error("Method not implemented.");
  }
  perform(token: PawnToken): Promise<void> {
    throw new Error("Method not implemented.");
  }
}