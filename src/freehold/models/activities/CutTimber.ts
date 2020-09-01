import { PawnToken } from "../../actors/PawnToken";
import { byDistanceFrom, neighborsOfPosition, distanceBetween } from "../WorldPosition";
import { Game } from "../Game";
import { Activity, JobDetail } from "../../types";
import { PositionSet } from "../PositionSet";
import { IActivity } from "../IActivity";

export class CutTimber implements IActivity {
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
    // if (this.game.ticks % 50 !== 0) return;
    const treePositions = [...this.game.markedTreePositions]
      .filter(pos => !this.assignedTreePositions.has(pos))
      .filter(pos => this.game.computePath(pos, token.pawn.pos).length > 0)
    
    if (treePositions.length > 0) {

    const treePosition = //treePositions.pop();
      treePositions.sort(byDistanceFrom(token.pawn.pos)).pop()
    const accessible = //distanceBetween(token.pawn.pos, treePosition) == 1 ||
      this.game.computePath(treePosition, token.pawn.pos).length > 0
    // console.log("---> Consider tree position ", treePosition, " is accessible ", accessible, " by pawn at ", token.pawn.pos)
    
    if (treePosition && accessible) {
      const neighbors = neighborsOfPosition(treePosition, this.game.dims)
        .filter(neighbor => !this.game.isBlocked(neighbor))
        .filter(neighbor => distanceBetween(token.pawn.pos, neighbor) == 0 ||
                            this.game.computePath(neighbor, token.pawn.pos).length > 0)
        .sort(byDistanceFrom(token.pawn.pos));
      if (neighbors.length > 0) {
        this.assignedTreePositions.add(treePosition);
        const travelDestination = neighbors.pop();
        return { activityTarget: treePosition, travelDestination };
      } else {
        console.log("---> No neighbor found that is accessible + unblocked")
      }
    }
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
