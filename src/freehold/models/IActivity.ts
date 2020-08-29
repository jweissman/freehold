import { PawnToken } from "../actors/PawnToken";
import { Activity, JobDetail } from "../types";
export interface IActivity {
  title: Activity;
  isJobAvailable(): boolean;
  findJob(token: PawnToken): JobDetail | undefined;
  perform(token: PawnToken): Promise<void>;
}