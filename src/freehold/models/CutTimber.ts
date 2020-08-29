import { PawnToken } from "../actors/PawnToken";
import { byDistanceFrom, neighborsOfPosition } from "./WorldPosition";
import { Game } from "./Game";
import { Activity, JobDetail } from "../types";
import { PositionSet } from "./PositionSet";
import { IActivityManager } from "./IActivityManager";

export class CutTimber implements IActivityManager {
  title: Activity = 'logging';
  constructor(private game: Game) { }

  private assignedTreePositions: PositionSet = new PositionSet();

  isJobAvailable(): boolean {
    const treePositions = this.game.markedTreePositions
      .filter(pos => !this.assignedTreePositions.has(pos));
    const available = treePositions.length > 0;
    // console.log("---> Checking if there is a logging job available...", available)
    return available;
  }

  findJob(token: PawnToken): JobDetail {
    const treePositions = [...this.game.markedTreePositions]
      .filter(pos => !this.assignedTreePositions.has(pos))
      .sort(byDistanceFrom(token.pawn.pos))

    const treePosition = treePositions.pop();
    const accessible = this.game.computePath(treePosition, token.pawn.pos).length > 0
    
    if (treePosition && accessible) {
      this.assignedTreePositions.add(treePosition);
      const neighbors = neighborsOfPosition(treePosition, this.game.dims)
        .filter(neighbor => !this.game.isBlocked(neighbor))
        .sort(byDistanceFrom(token.pawn.pos));
      const travelDestination = neighbors.pop();
      return { activityTarget: treePosition, travelDestination };
    }
  }

  async perform(token: PawnToken): Promise<void> {
    // console.log("---> " + token.pawn.name + " is felling timber!");
    // token.interacting = true;
    await token.actions.delay(250).asPromise();
    this.game.chopTree(token.pawn.activityTarget);
    this.assignedTreePositions.delete(token.pawn.activityTarget);
    // token.pawn.activity = undefined; //'ready'
    // token.interacting = false;
  }
}
