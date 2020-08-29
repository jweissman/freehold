import { PawnToken } from "../actors/PawnToken";
import { posEq } from "./WorldPosition";
import { Game } from "./Game";
import { WorldPosition } from "../types";
import { CELL_SIZE } from "../constants";
import { IActivityManager } from "./IActivityManager";
import { CutTimber } from "./CutTimber";

export class PawnManagement {
  activities: IActivityManager[]
  constructor(private game: Game) {
    this.activities = [
      new CutTimber(this.game)
    ]
  }

  private sendPawnToPosition(token: PawnToken, position: WorldPosition): void {
    if (!posEq(token.pawn.pos, position)) {
      // console.log("---> Send " + token.pawn.name + " to " + position);
      token.pawn.dest = position;
    } else {
      token.pawn.dest = undefined;
    }
  }

  updatePawn(token: PawnToken): void {
    if (token.pawn.dest && !posEq(token.pawn.dest, token.pawn.pos)) {
      // console.log("---> Pawn navigates to " + token.pawn.dest)
      this.handleNavigation(token)
    } else {
      if (!token.pawn.activity) {
        if (this.game.ticks % 2 === 0) {
          for (const activity of this.activities) {
            if (activity.isJobAvailable()) {
              // console.log("---> A job is available: " + activity.title)
              const jobDetails = activity.findJob(token)
              if (jobDetails) {
                // console.log("---> Got job details: " + JSON.stringify(jobDetails))
                token.pawn.activity = activity.title;
                token.pawn.activityTarget = jobDetails.activityTarget;
                this.sendPawnToPosition(token, jobDetails.travelDestination)
                break;
              }
            }
          }
        }
      } else {
        // console.log("---> Pawn " + token.pawn.name + " has an activity...")
        this.pawnTokenWorks(token);
      }
    }
  }

  private handleNavigation(token: PawnToken) {
    if (!token.moving) {
      if (token.path.length) {
        const nextStep = token.path.shift();
        this.pawnTokenMoves(token, nextStep);
      }
      else {
        // console.log("---> Compute path from " + token.pawn.pos + " to " + token.pawn.dest);
        token.path = this.game.computePath(token.pawn.pos, token.pawn.dest);
      }
    }
  }

  private async pawnTokenMoves(token: PawnToken, target: WorldPosition): Promise<void> {
    if (!token.moving) {
      token.moving = true
      await token.actions.moveTo(
        target[0] * CELL_SIZE, target[1] * CELL_SIZE, 100
      ).asPromise()
      token.pawn.pos = target
      token.moving = false
    }
  }

  private async pawnTokenWorks(token: PawnToken): Promise<void> {
    // console.log("---> Pawn works (" + token.pawn.name + ")")
    if (!token.interacting) {
      token.interacting = true
      const activityManager = this.activities.find(activity => activity.title === token.pawn.activity)
      await activityManager.perform(token)
      token.interacting = false
      token.pawn.activity = undefined
    // } else {
      // console.log("---> Pawn is already interacting?")
    }
  }
}
