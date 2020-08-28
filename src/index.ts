import { FreeholdEngine } from "./FreeholdEngine";
import { Play } from "./freehold/Play";
import { Resources } from "./freehold/Resources";
import { Loader } from "excalibur";

console.log("FREEHOLD -- index");

const freehold = new FreeholdEngine();
const play = new Play(freehold);
freehold.add('play', play);

const loader = new Loader();
loader.suppressPlayButton = true
for (const key in Resources) { loader.addResource(Resources[key]) }
freehold.start(loader).then(() => freehold.goToScene('play'))
