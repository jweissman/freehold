import { FreeholdEngine } from "./FreeholdEngine";
import { Play } from "./freehold/Play";
import { Resources } from "./freehold/Resources";
import { Loader, Color } from "excalibur";

console.log("FREEHOLD -- index");

const freehold = new FreeholdEngine();
const play = new Play(freehold);
freehold.backgroundColor = Color.fromRGB(//30,200,150) 
                                         20,180,140) //new Color(40,120,80);
freehold.add('play', play);

const loader = new Loader();
loader.suppressPlayButton = true
for (const key in Resources) { loader.addResource(Resources[key]) }
freehold.start(loader).then(() => freehold.goToScene('play'))
