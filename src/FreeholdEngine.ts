/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Engine, DisplayMode, Loader } from 'excalibur';

export class FreeholdEngine extends Engine {
  constructor() {
    super({ displayMode: DisplayMode.FullScreen })
  }

  public start(loader: Loader) { return super.start(loader) }
}
