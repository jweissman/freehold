import { PawnToken } from "../../actors/PawnToken";
import { byDistanceFrom, neighborsOfPosition } from "../WorldPosition";
import { Game } from "../Game";
import { Activity, JobDetail } from "../../types";
import { PositionSet } from "../PositionSet";
import { IActivity } from "../IActivity";
import { TREE_CUT_DURATION } from "../../constants";

export class CutTimber implements IActivity {
  title: Activity = 'logging';
  constructor(private game: Game) { }

  private assignedTreePositions: PositionSet = new PositionSet();

  isJobAvailable(): boolean {
    const treePositions = this.game.markedTreePositions
      .filter(pos => !this.assignedTreePositions.has(pos));
    const available = treePositions.length > 0;
    return available;
  }

  findJob(token: PawnToken): JobDetail {
    // if (this.game.ticks % 50 !== 0) return;
    const treePositions = [...this.game.markedTreePositions]
      .filter(pos => !this.assignedTreePositions.has(pos))

    if (treePositions.length > 0) {
      const treePosition = treePositions
        .sort(byDistanceFrom(token.pawn.pos))
        .find(pos => {
          return neighborsOfPosition(pos, this.game.dims)
            .filter(n => !this.game.isBlocked(n))
            .find(n => this.game.canPathBetween(token.pawn.pos, n))
        })
      if (treePosition) {
        const neighbor = neighborsOfPosition(treePosition, this.game.dims)
          .filter(n => !this.game.isBlocked(n))
          .sort(byDistanceFrom(token.pawn.pos))
          .find(n => this.game.canPathBetween(token.pawn.pos, n))
        if (neighbor) {
          this.assignedTreePositions.add(treePosition);
          const travelDestination = neighbor
          return { activityTarget: treePosition, travelDestination };
        }
      }
    }
  }

  async perform(token: PawnToken): Promise<void> {
    await token.actions.delay(TREE_CUT_DURATION).asPromise();
    this.game.chopTree(token.pawn.activityTarget);
    this.assignedTreePositions.delete(token.pawn.activityTarget);
  }
}
