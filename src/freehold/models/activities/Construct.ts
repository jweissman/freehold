import { IActivity } from "../IActivity";
import { Activity, JobDetail } from "../../types";
import { PawnToken } from "../../actors/PawnToken";

export class Construction implements IActivity {
  title: Activity = 'building'

  isJobAvailable(token: PawnToken): boolean {
    throw new Error("Method not implemented.");
  }
  findJob(token: PawnToken): JobDetail {
    throw new Error("Method not implemented.");
  }
  perform(token: PawnToken): Promise<void> {
    throw new Error("Method not implemented.");
  }
}