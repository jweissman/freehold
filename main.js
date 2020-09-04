/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.ts","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/FreeholdEngine.ts":
/*!*******************************!*\
  !*** ./src/FreeholdEngine.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FreeholdEngine = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const excalibur_1 = __webpack_require__(/*! excalibur */ "./node_modules/excalibur/dist/excalibur.min.js");
class FreeholdEngine extends excalibur_1.Engine {
    constructor() {
        super({ displayMode: excalibur_1.DisplayMode.FullScreen });
    }
    start(loader) { return super.start(loader); }
}
exports.FreeholdEngine = FreeholdEngine;


/***/ }),

/***/ "./src/freehold/Play.ts":
/*!******************************!*\
  !*** ./src/freehold/Play.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Play = void 0;
const excalibur_1 = __webpack_require__(/*! excalibur */ "./node_modules/excalibur/dist/excalibur.min.js");
const Game_1 = __webpack_require__(/*! ./models/Game */ "./src/freehold/models/Game.ts");
const World_1 = __webpack_require__(/*! ./models/World */ "./src/freehold/models/World.ts");
const constants_1 = __webpack_require__(/*! ./constants */ "./src/freehold/constants.ts");
const WorldPosition_1 = __webpack_require__(/*! ./models/WorldPosition */ "./src/freehold/models/WorldPosition.ts");
const Drag_1 = __webpack_require__(/*! ./models/Drag */ "./src/freehold/models/Drag.ts");
const SingleCellBox_1 = __webpack_require__(/*! ./actors/SingleCellBox */ "./src/freehold/actors/SingleCellBox.ts");
const ZoneView_1 = __webpack_require__(/*! ./actors/ZoneView */ "./src/freehold/actors/ZoneView.ts");
class Play extends excalibur_1.Scene {
    constructor() {
        super(...arguments);
        this.cursorWorldPos = WorldPosition_1.pos(-1, -1);
        this.currentAction = 'cut';
    }
    onInitialize(engine) {
        // this.back
        console.log("Play.onInitialize");
        const world = new World_1.World(constants_1.WORLD_DIMS); //[60,40] as Dimensions);
        this.game = new Game_1.Game(world);
        this.game.setup();
        // this.add(this.game.terrain)
        this.add(this.game.vegetation);
        this.add(this.game.rawMaterials);
        this.add(this.game.sigils);
        this.label = new excalibur_1.Label("...", 20, 20);
        this.label.color = excalibur_1.Color.White;
        // this.label.
        // this.label.traits = this.label.traits.filter(trait => !(trait instanceof Traits.OffscreenCulling))
        this.add(this.label);
        this.setAction('cut');
        this.regionView = new ZoneView_1.ZoneView(this.game, this.camera);
        this.add(this.regionView);
        this.camera.pos =
            new excalibur_1.Vector(world.pawns[0].pos[0] * constants_1.CELL_SIZE, world.pawns[0].pos[1] * constants_1.CELL_SIZE);
        const mouse = engine.input.pointers.primary;
        mouse.on('move', (e) => {
            this.updateCursorPosition(e.pos);
            if (this.lastMouseButton === excalibur_1.Input.PointerButton.Middle) {
                // pan camera
                if (this.panning) {
                    console.log("would pan...");
                    // const panVec = this.panOrigin.sub(mouse.lastWorldPos)
                    // this.camera.vel = panVec //(panVec.negate())
                    // this.panOrigin.subEqual(mouse.lastWorldPos)
                    // this.panOrigin = panVec.add(mouse.lastWorldPos) //this.camera.pos.add(panVec)
                    this.camera.pos.addEqual(this.panOrigin.sub(mouse.lastWorldPos) //e.pos)
                    );
                }
                else {
                    this.camera.vel = new excalibur_1.Vector(0, 0);
                }
            }
            else {
                // possible handle drag
                const enforceLines = this.currentAction === 'build';
                this.handleLeftDrag(mouse, enforceLines);
            } //.Right) {}
            // this.handleDrag(mouse)
        });
        mouse.on('up', (e) => {
            if (this.lastMouseButton == excalibur_1.Input.PointerButton.Left) {
                const enforceLines = this.currentAction === 'build';
                // this.handleDrag(mouse, enforceLines)
                const { isFinished } = this.handleLeftDrag(mouse, enforceLines);
                console.log("---> Drag finished?", isFinished);
                if (isFinished) {
                    return this.applyCurrentActionToDragArea();
                }
            }
            else if (this.lastMouseButton === excalibur_1.Input.PointerButton.Middle) {
                this.panning = false;
            }
        });
        mouse.on('down', (e) => {
            this.lastMouseButton = e.button;
            if (e.button == excalibur_1.Input.PointerButton.Left) {
                console.log("---> Mouse down (left-click) at " + this.cursorWorldPos);
                // if (!mouse.isDragStart) {
                // if (this.currentAction === 'cut' && !mouse.isDragStart) {
                // this.game.markTree(this.cursorWorldPos)
                // } else if (this.currentAction === 'create-zone') {
                // this.game.declareZone(this.cursorWorldPos, this.cursorWorldPos)
                // } else 
                if (this.currentAction === 'delete-zone') {
                    this.game.deleteZoneAt(this.cursorWorldPos);
                    //   // }
                } //else {
                // handle drag begin?
                const enforceLines = this.currentAction === 'build';
                this.handleLeftDrag(mouse, enforceLines);
                // }
            }
            else if (e.button == excalibur_1.Input.PointerButton.Middle) {
                console.log("---> would start pan at...");
                this.panOrigin = mouse.lastWorldPos;
                this.panning = true;
            }
        });
        this.cursor = new SingleCellBox_1.SingleCellBox();
        this.add(this.cursor);
        this.dragEnvelope = new excalibur_1.Actor({ color: excalibur_1.Color.Gray, opacity: 0.3, anchor: new excalibur_1.Vector(0, 0) });
        this.add(this.dragEnvelope);
        this.game.pawnTokens.forEach(pawnToken => this.add(pawnToken));
    }
    setAction(action) {
        this.label.text = "action: " + action;
        this.currentAction = action;
    }
    updateCursorPosition(position) {
        this.cursorWorldPos = WorldPosition_1.pos(Math.floor(position.x / constants_1.CELL_SIZE), // + 1,
        Math.floor(position.y / constants_1.CELL_SIZE));
        this.cursor.pos = new excalibur_1.Vector(this.cursorWorldPos[0] * constants_1.CELL_SIZE, this.cursorWorldPos[1] * constants_1.CELL_SIZE);
    }
    onPreUpdate(engine) {
        if (this.game) {
            this.game.update();
        }
        const keys = engine.input.keyboard;
        if (keys.isHeld(excalibur_1.Input.Keys.B)) {
            this.setAction('build');
        }
        else if (keys.isHeld(excalibur_1.Input.Keys.C)) {
            this.setAction('cut');
        }
        else if (keys.isHeld(excalibur_1.Input.Keys.Z)) {
            this.setAction('create-zone');
        }
        else if (keys.isHeld(excalibur_1.Input.Keys.D)) {
            this.setAction('delete-zone');
        }
        else if (keys.isHeld(excalibur_1.Input.Keys.Esc)) {
            this.setAction('inspect');
            this.drag = null;
        }
    }
    applyCurrentActionToDragArea() {
        console.log("---> Apply current action to drag area...");
        // if (!this.drag.origin) { return } // hmm
        //const mouse = engine.input.pointers.primary
        //// if (mouse.)
        //// draggable actions...
        //// if (mouse.)
        //if (this.currentAction === 'cut' || this.currentAction === 'create-zone' || this.currentAction === 'build') {
        //  const enforceLines = this.currentAction === 'build'
        //  const { isFinished } = this.handleDrag(mouse, enforceLines)
        //  if (isFinished) {
        // console.log("==== DRAG COMPLETE ====")
        const [originX, originY] = this.drag.minima;
        //  console.log("---> Drag region: begins at " + originX + "," + originY)
        const [destX, destY] = this.drag.maxima;
        console.log("Current action is " + this.currentAction);
        console.log("Drag area is from " + originX + "," + originY + " to " + destX + ", " + destY);
        if (this.currentAction === 'cut') {
            console.log("---> Cut timber from " + originX + "," + originY + " to " + destX + ", " + destY);
            for (let x = originX; x <= destX; x++) {
                for (let y = originY; y <= destY; y++) {
                    this.game.markTree(WorldPosition_1.pos(x, y));
                }
            }
        }
        else if (this.currentAction === 'create-zone') {
            this.game.declareZone(WorldPosition_1.pos(originX, originY), WorldPosition_1.pos(destX, destY));
        }
        else if (this.currentAction === 'build') {
            this.game.planWall(WorldPosition_1.pos(originX, originY), WorldPosition_1.pos(destX, destY));
        }
        //  }
        //}
    }
    handleLeftDrag(mouse, enforceLines) {
        let isFinished = false;
        if (mouse.isDragStart) {
            this.drag = new Drag_1.Drag(this.cursorWorldPos, enforceLines);
        }
        else if (mouse.isDragEnd) {
            this.dragEnvelope.visible = false;
            isFinished = true;
        }
        else if (mouse.isDragging) {
            this.drag.continue(this.cursorWorldPos);
            const [originX, originY] = this.drag.minima;
            const [destX, destY] = this.drag.maxima;
            this.dragEnvelope.pos = new excalibur_1.Vector((originX * constants_1.CELL_SIZE), // + 1,
            (originY * constants_1.CELL_SIZE));
            this.dragEnvelope.width = (destX - originX + 1) * constants_1.CELL_SIZE;
            this.dragEnvelope.height = (destY - originY + 1) * constants_1.CELL_SIZE;
            this.dragEnvelope.visible = true;
        }
        // }
        return { isFinished };
    }
}
exports.Play = Play;


/***/ }),

/***/ "./src/freehold/Resources.ts":
/*!***********************************!*\
  !*** ./src/freehold/Resources.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-var-requires */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpriteSheets = exports.Resources = void 0;
const excalibur_1 = __webpack_require__(/*! excalibur */ "./node_modules/excalibur/dist/excalibur.min.js");
const constants_1 = __webpack_require__(/*! ./constants */ "./src/freehold/constants.ts");
const terrain = __webpack_require__(/*! ./images/terrain.png */ "./src/freehold/images/terrain.png");
const trees = __webpack_require__(/*! ./images/trees.png */ "./src/freehold/images/trees.png");
const icons = __webpack_require__(/*! ./images/icons.png */ "./src/freehold/images/icons.png");
const matter = __webpack_require__(/*! ./images/matter.png */ "./src/freehold/images/matter.png");
const structure = __webpack_require__(/*! ./images/structure.png */ "./src/freehold/images/structure.png");
const Resources = {
    Terrain: new excalibur_1.Texture(terrain),
    Trees: new excalibur_1.Texture(trees),
    Matter: new excalibur_1.Texture(matter),
    Icons: new excalibur_1.Texture(icons),
    Structure: new excalibur_1.Texture(structure),
};
exports.Resources = Resources;
const sz = constants_1.CELL_SIZE;
const SpriteSheets = {
    Terrain: new excalibur_1.SpriteSheet(Resources.Terrain, 4, 4, sz, sz),
    Trees: new excalibur_1.SpriteSheet(Resources.Trees, 4, 4, sz, sz),
    Matter: new excalibur_1.SpriteSheet(Resources.Matter, 4, 4, sz, sz),
    Icons: new excalibur_1.SpriteSheet(Resources.Icons, 4, 4, sz, sz),
    Structure: new excalibur_1.SpriteSheet(Resources.Structure, 4, 4, sz, sz),
};
exports.SpriteSheets = SpriteSheets;


/***/ }),

/***/ "./src/freehold/actors/PawnToken.ts":
/*!******************************************!*\
  !*** ./src/freehold/actors/PawnToken.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PawnToken = void 0;
const excalibur_1 = __webpack_require__(/*! excalibur */ "./node_modules/excalibur/dist/excalibur.min.js");
const constants_1 = __webpack_require__(/*! ../constants */ "./src/freehold/constants.ts");
const pick_1 = __webpack_require__(/*! ../util/pick */ "./src/freehold/util/pick.ts");
const Shapes_1 = __webpack_require__(/*! ../canvas/Shapes */ "./src/freehold/canvas/Shapes.ts");
class PawnToken extends excalibur_1.Actor {
    constructor(pawn) {
        super({
            width: constants_1.CELL_SIZE,
            height: constants_1.CELL_SIZE,
            color: pick_1.pick(excalibur_1.Color.Blue, excalibur_1.Color.Red, excalibur_1.Color.Green, excalibur_1.Color.Yellow, excalibur_1.Color.Chartreuse, excalibur_1.Color.Magenta),
            // opacity: 0.5,
            anchor: new excalibur_1.Vector(0.5, 0.5),
            pos: new excalibur_1.Vector(pawn.pos[0] * constants_1.CELL_SIZE, pawn.pos[1] * constants_1.CELL_SIZE),
        });
        this.pawn = pawn;
        this.moving = false;
        this.interacting = false;
        this.path = [];
        this.skin = excalibur_1.Color.Orange.clone().lighten(0.5);
    }
    priority(a) {
        return this.pawn.priorities.indexOf(a.title);
        // throw new Error("Method not implemented.");
    }
    get shirt() { return this.color.clone().darken(0.5); }
    draw(ctx) {
        let { x, y } = this.pos;
        ctx.fillStyle = '#fff';
        const textLength = ctx.measureText(this.pawn.name).width;
        ctx.fillText(this.pawn.name, x - textLength / 2 + constants_1.CELL_SIZE / 2, y - 8);
        x += constants_1.CELL_SIZE / 2;
        y += constants_1.CELL_SIZE / 2;
        Shapes_1.Shapes.ellipse(ctx, x, y, // + CELL_SIZE/4,
        2 * constants_1.CELL_SIZE / 8, 2 * constants_1.CELL_SIZE / 5, this.shirt);
        Shapes_1.Shapes.ellipse(ctx, x, y - constants_1.CELL_SIZE / 2, constants_1.CELL_SIZE / 5, constants_1.CELL_SIZE / 5, this.skin);
    }
}
exports.PawnToken = PawnToken;
PawnToken.speed = 128;


/***/ }),

/***/ "./src/freehold/actors/SingleCellBox.ts":
/*!**********************************************!*\
  !*** ./src/freehold/actors/SingleCellBox.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleCellBox = void 0;
const excalibur_1 = __webpack_require__(/*! excalibur */ "./node_modules/excalibur/dist/excalibur.min.js");
const constants_1 = __webpack_require__(/*! ../constants */ "./src/freehold/constants.ts");
class SingleCellBox extends excalibur_1.Actor {
    constructor() {
        super({
            color: excalibur_1.Color.Gray,
            width: constants_1.CELL_SIZE,
            height: constants_1.CELL_SIZE,
            anchor: new excalibur_1.Vector(0, 0),
            opacity: 0.5,
        });
    }
}
exports.SingleCellBox = SingleCellBox;


/***/ }),

/***/ "./src/freehold/actors/ZoneView.ts":
/*!*****************************************!*\
  !*** ./src/freehold/actors/ZoneView.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneView = void 0;
const excalibur_1 = __webpack_require__(/*! excalibur */ "./node_modules/excalibur/dist/excalibur.min.js");
const constants_1 = __webpack_require__(/*! ../constants */ "./src/freehold/constants.ts");
const WorldPosition_1 = __webpack_require__(/*! ../models/WorldPosition */ "./src/freehold/models/WorldPosition.ts");
class ZoneView extends excalibur_1.Actor {
    constructor(game, camera) {
        super({ pos: new excalibur_1.Vector(0, 0) });
        this.game = game;
        this.camera = camera;
        this.traits = this.traits.filter(trait => !(trait instanceof excalibur_1.Traits.OffscreenCulling));
    }
    draw(ctx) {
        this.game.zones.forEach(zone => {
            // console.log("Draw zone " + zone)
            const [x0, y0] = zone.topLeft;
            const [x1, y1] = zone.bottomRight;
            this.gridAlignedRect(ctx, x0, y0, x1, y1, zone.color);
            ctx.fillStyle = '#fff';
            for (let x = x0; x <= x1; x++) {
                for (let y = y0; y <= y1; y++) {
                    const count = this.game.rawMaterialCountAtLocation(WorldPosition_1.pos(x, y));
                    ctx.fillText("x" + count, x * constants_1.CELL_SIZE + constants_1.CELL_SIZE / 2, y * constants_1.CELL_SIZE + constants_1.CELL_SIZE);
                }
            }
        });
    }
    gridAlignedRect(ctx, x0, y0, x1, y1, color) {
        const x = x0 * constants_1.CELL_SIZE; //+ this.camera.x
        const y = y0 * constants_1.CELL_SIZE; //+ this.camera.y
        const w = (x1 - x0 + 1) * constants_1.CELL_SIZE;
        const h = (y1 - y0 + 1) * constants_1.CELL_SIZE;
        ctx.fillStyle = color.toRGBA();
        ctx.fillRect(x, y, w, h);
    }
}
exports.ZoneView = ZoneView;


/***/ }),

/***/ "./src/freehold/canvas/Shapes.ts":
/*!***************************************!*\
  !*** ./src/freehold/canvas/Shapes.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Shapes = void 0;
class Shapes {
    static ellipse(ctx, x, y, radiusX, radiusY, color) {
        ctx.beginPath();
        ctx.ellipse(x, y, radiusX, radiusY, 0, 0, 2 * Math.PI);
        ctx.closePath();
        // const oldStyle = ctx.fillStyle
        ctx.fillStyle = color.toRGBA();
        ctx.fill();
        // ctx.fillStyle = oldStyle
    }
}
exports.Shapes = Shapes;


/***/ }),

/***/ "./src/freehold/constants.ts":
/*!***********************************!*\
  !*** ./src/freehold/constants.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NAME_FINAL_SYLLABLES = exports.NAME_INITIAL_SYLLABLES = exports.DWARVEN_LANGUAGE = exports.TREE_COVER_RATIO = exports.WORLD_DIMS = exports.INITIAL_PAWN_COUNT = exports.TREE_CUT_DURATION = exports.STACK_MAX = exports.INVENTORY_LIMIT = exports.SIGIL_AXE = exports.MATERIAL_STACK_IMAGES = exports.MATERIAL_IMAGES = exports.WOOD_PIECE_IMAGES = exports.WOOD_STACK_IMAGES = exports.TREE_IMAGES = exports.WATER_IMAGES = exports.LAND_IMAGES = exports.CELL_SIZE = void 0;
exports.CELL_SIZE = 16;
exports.LAND_IMAGES = [0, 1, 2, 3];
exports.WATER_IMAGES = [4, 5, 6, 7];
exports.TREE_IMAGES = [0, 1];
exports.WOOD_STACK_IMAGES = [0];
exports.WOOD_PIECE_IMAGES = [4];
// export const IRON_STACK_IMAGES = [1]
// export const IRON_PIECE = [5]
exports.MATERIAL_IMAGES = {
    'wood': exports.WOOD_PIECE_IMAGES,
};
exports.MATERIAL_STACK_IMAGES = {
    'wood': exports.WOOD_STACK_IMAGES,
};
exports.SIGIL_AXE = 1;
/////////////////////////////
exports.INVENTORY_LIMIT = 3;
exports.STACK_MAX = 50;
exports.TREE_CUT_DURATION = 50;
exports.INITIAL_PAWN_COUNT = 8;
exports.WORLD_DIMS = [260, 240];
exports.TREE_COVER_RATIO = 0.5;
/////////////////////////////
exports.DWARVEN_LANGUAGE = {
    name: 'Dwarvish',
    // prefixes: ['Ar',],
    stems: [
        'Azagh',
        'Bal', 'Bif', 'Bof', 'Bomb', 'Born',
        'D', 'Dor', 'Dur', 'Dwal',
        'Fr', 'Far', 'Fund', 'Frer', 'Fl', 'Fil',
        'Giml', 'Gam', 'Gr', 'Gl', 'Gwaih',
        'Ib',
        'Kil', 'Kh',
        'Lon', 'Landrov',
        'M', 'Meneld',
        'N', 'Na', 'Nor', 'Narv',
        'O',
        'Telch', 'Thor', 'Thr', 'Th'
    ],
    suffixes: ['in', 'is', 'i', 'un', 'im', 'or', 'erin', 'ar', 'ain', 'al'],
};
// export const ELVEN_LANGUAGE: Language = {
//   name: 'Elvish',
//   stems
// }
exports.NAME_INITIAL_SYLLABLES = [
    "Adrah", "Amand", "Arath", "Argel", "Atanat", "Arvel", "Arag", "Adel", "Alat", "Alcar", "Aldar", "Alg", "Ameth",
    "Amar", "Amd", "Amar", "Alf", "Aer", "Breg",
    "B", "Bel", "Belecth", "Borom", "Blanc", "Beleph", "Breg", "Briff", "Brytt", "Bucc", "Bung",
    "Calm", "Castam", "Celeb", "Celand", "Calimeht", "Caranth", "Celeg", "Celeph",
    "Da", "Di", "Dais", "Dur", "Deneth", "Dor", "Dud",
    "Earen", "Ecthel", "Egalm", "Eldac", "Edrah", "Earw", "Elgant", "Elan", "Elat", "Erend",
    "Fastr", "Far", "Filib", "Fean",
    "Glo", "Gild", "Gelm", "Gald", "Glorfind", "Gothm", "Griff", "Grim", "Grimb", "Grithn", "Gr",
    "H", "Ham", "Hur", "Hug", "Halfr", "Hald", "Hard", "Holm", "Hild", "Hir", "Herib", "Hirg", "Hirl", "Hobs", "Holf",
    "I", "Irim", "Isengr", "Isumbr", "Isilm", "Ivorw", "Iv",
    "Jag", "Jessam",
    "Kham", "Kh", "Kil",
    "L", "Lil", "Lag", "Lal", "Landrov", "Larg", "Laur", "Lavend", "Lenw", "Le", "Lorg", "Loth", "Luth",
    "Mad", "Maedhr", "Magl", "Mal", "Maht", "Mair", "Malan", "Malv", "Marmad", "Mel", "Minas",
    "Mabl", "Mor", "Mir",
    "Nah", "Nal", "Narv", "Nar",
    "Orgul", "Or", "Oroph", "Oss",
    "Palant", "Palland", "Pans", "Pelend", "Pengol", "Peregr", "Primr",
    "R", "Rum", "Regin", "Ros", "Row", "Ruf",
    "S", "Sad", "Saer", "Sakalth", "Snag", "Saur", "Sur", "Soront",
    "T", "Thor", "Tur", "Tarond", "Thar", "Turg", "Tant", "Tulk", "Turamb",
    "Uff", "Ugl", "Ufth", "Ulr", "Ulw",
    "Valand", "Voronw", "Van", "Vanimeld",
    "Wilib", "Wilcom",
    "Yav",
    "Zam", "Zir", "Zimrah", "Zimrath"
    // "Beo", "Gron", "Sam", "Tim",
    // "Gim", "Glo", "El", "Fi", "Fast",
    // "Fea", "Fara", "Bara", "Boro", "Hur",
    // "Tur", "Isild", "Bilb", "Earen", "Bere",
    // "Di", "Bele", "Calmac", "Da", "Arvel", "Fastr",
];
exports.NAME_FINAL_SYLLABLES = [
    "ad", "am", "as", "ast", "ard", "an", "anth", "ar", "arn", "acil", "adoc", "akh", "ald", "and", "al", "ach", "arth",
    "e", "eg", "ed", "en", "ert",
    "i", "im", "in", "ir", "il", "ich", "ion", "iel", "ian", "ie", "ida", "ian", "ine", "imbor", "indor", "ily",
    "o", "om", "on", "or", "orn", "oth", "ob", "og", "ose", "olas", "orm", "odh",
    "ur", "ung", "und", "ulas", "uin", "us",
    "y", "yst",
];


/***/ }),

/***/ "./src/freehold/images/icons.png":
/*!***************************************!*\
  !*** ./src/freehold/images/icons.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2d8548a08c57835b201991634f48ca2c.png";

/***/ }),

/***/ "./src/freehold/images/matter.png":
/*!****************************************!*\
  !*** ./src/freehold/images/matter.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "be14ad863f76f60d76753cc55e9297db.png";

/***/ }),

/***/ "./src/freehold/images/structure.png":
/*!*******************************************!*\
  !*** ./src/freehold/images/structure.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bcbd6cb3566aec0d15f12fb599b85c30.png";

/***/ }),

/***/ "./src/freehold/images/terrain.png":
/*!*****************************************!*\
  !*** ./src/freehold/images/terrain.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c0255d9d62d89c5f8ec6029e4cc645ed.png";

/***/ }),

/***/ "./src/freehold/images/trees.png":
/*!***************************************!*\
  !*** ./src/freehold/images/trees.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b35568924879ebbea93981899353b629.png";

/***/ }),

/***/ "./src/freehold/models/Cartogram.ts":
/*!******************************************!*\
  !*** ./src/freehold/models/Cartogram.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Cartogram = void 0;
const Grid_1 = __webpack_require__(/*! ./Grid */ "./src/freehold/models/Grid.ts");
const WorldPosition_1 = __webpack_require__(/*! ./WorldPosition */ "./src/freehold/models/WorldPosition.ts");
const pick_1 = __webpack_require__(/*! ../util/pick */ "./src/freehold/util/pick.ts");
const SimpleGrid_1 = __webpack_require__(/*! ./SimpleGrid */ "./src/freehold/models/SimpleGrid.ts");
const take_1 = __webpack_require__(/*! ../util/take */ "./src/freehold/util/take.ts");
const constants_1 = __webpack_require__(/*! ../constants */ "./src/freehold/constants.ts");
// type Matter = { kind: Material, amount: number }
class Cartogram {
    constructor(dims) {
        this.dims = dims;
        this.terrain = new Grid_1.Grid(dims, ['land', 'water']);
        this.vegetation = new Grid_1.Grid(dims, ['nothing', 'grass', 'flower', 'tree']);
        this.rawMaterial = new Grid_1.Grid(dims, ['nothing', 'wood']);
        this.rawMaterialCount = new SimpleGrid_1.SimpleGrid(0);
        this.sigils = new Grid_1.Grid(dims, ['nothing', 'axe']);
        this.terrain.fill('land');
        this.vegetation.fill('nothing');
        this.vegetation.distributeRandomly('tree', constants_1.TREE_COVER_RATIO);
        this.rawMaterial.fill('nothing');
        this.sigils.fill('nothing');
    }
    get width() { return this.dims[0]; }
    get height() { return this.dims[1]; }
    get center() {
        return [
            this.dims[0] / 2,
            this.dims[1] / 2
        ];
    }
    pickRandomClearLocation() {
        const locations = [];
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                if (this.vegetation.at(WorldPosition_1.pos(x, y)) !== 'tree') {
                    locations.push(WorldPosition_1.pos(x, y));
                }
            }
        }
        return pick_1.pick(...locations);
    }
    pickClearLocations(n, nearPoint = this.center) {
        const locations = [];
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                if (this.vegetation.at(WorldPosition_1.pos(x, y)) !== 'tree') {
                    locations.push(WorldPosition_1.pos(x, y));
                }
            }
        }
        return take_1.take(n, locations.sort(WorldPosition_1.byDistanceFrom(nearPoint)));
    }
}
exports.Cartogram = Cartogram;


/***/ }),

/***/ "./src/freehold/models/Drag.ts":
/*!*************************************!*\
  !*** ./src/freehold/models/Drag.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Drag = void 0;
const WorldPosition_1 = __webpack_require__(/*! ./WorldPosition */ "./src/freehold/models/WorldPosition.ts");
class Drag {
    constructor(position, forceLines = false) {
        this.forceLines = forceLines;
        this.origin = position;
    }
    get destination() { return this.dest || this.origin; }
    continue(position) {
        const offsetX = 0; //position[0] > this.origin[0] ? 0 : 1;
        const offsetY = 0; //position[1] > this.origin[1] ? 0 : 1;
        this.dest = WorldPosition_1.pos(position[0] - offsetX, position[1] - offsetY);
        this.extent = [
            this.dest[0] - this.origin[0],
            this.dest[1] - this.origin[1]
        ];
        if (this.forceLines) {
            if (Math.abs(this.extent[0]) > Math.abs(this.extent[1])) {
                this.dest[1] = this.origin[1];
                // this.extent[1] = 0
            }
            else {
                this.dest[0] = this.origin[0];
                // this.extent[0] = 0
            }
            //this.extent = [
            //  this.destination[0] - this.origin[0],
            //  this.destination[1] - this.origin[1]
            //] as Dimensions;
        }
    }
    get minima() {
        const minimaX = Math.min(this.origin[0], this.destination[0]);
        const minimaY = Math.min(this.origin[1], this.destination[1]);
        // const minimaX = Math.min(this.origin[0], this.origin[0] + this.extent[0]);
        // const minimaY = Math.min(this.origin[1], this.origin[1] + this.extent[1]);
        return WorldPosition_1.pos(minimaX, minimaY);
    }
    get maxima() {
        const maximaX = Math.max(this.origin[0], this.destination[0]);
        const maximaY = Math.max(this.origin[1], this.destination[1]);
        // const maximaX = Math.max(this.origin[0], this.origin[0] + this.extent[0]);
        // const maximaY = Math.max(this.origin[1], this.origin[1] + this.extent[1]);
        return WorldPosition_1.pos(maximaX, maximaY);
    }
}
exports.Drag = Drag;


/***/ }),

/***/ "./src/freehold/models/Game.ts":
/*!*************************************!*\
  !*** ./src/freehold/models/Game.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const excalibur_1 = __webpack_require__(/*! excalibur */ "./node_modules/excalibur/dist/excalibur.min.js");
const constants_1 = __webpack_require__(/*! ../constants */ "./src/freehold/constants.ts");
const pick_1 = __webpack_require__(/*! ../util/pick */ "./src/freehold/util/pick.ts");
const PawnToken_1 = __webpack_require__(/*! ../actors/PawnToken */ "./src/freehold/actors/PawnToken.ts");
const Resources_1 = __webpack_require__(/*! ../Resources */ "./src/freehold/Resources.ts");
const WorldPosition_1 = __webpack_require__(/*! ./WorldPosition */ "./src/freehold/models/WorldPosition.ts");
const PawnManagement_1 = __webpack_require__(/*! ./PawnManagement */ "./src/freehold/models/PawnManagement.ts");
class Game {
    constructor(world) {
        this.world = world;
        this.zones = [];
        this.markedTreePositions = [];
        this.pawnManager = new PawnManagement_1.PawnManagement(this);
        this.ticks = 0;
    }
    setup() {
        const terrainImageMap = { 'land': constants_1.LAND_IMAGES, 'water': constants_1.WATER_IMAGES };
        this.terrain = this.assembleTiles('terrain', Resources_1.SpriteSheets.Terrain, this.world.terrain, terrainImageMap);
        // this.terrain.
        const vegetationImageMap = { 'tree': constants_1.TREE_IMAGES };
        this.vegetation = this.assembleTiles('vegetation', Resources_1.SpriteSheets.Trees, this.world.vegetation, vegetationImageMap);
        const rawMaterialsImageMap = { 'nothing': [], 'wood_piece': constants_1.WOOD_PIECE_IMAGES };
        this.rawMaterials = this.assembleTiles('matter', Resources_1.SpriteSheets.Matter, this.world.rawMaterial, rawMaterialsImageMap);
        const sigilImageMap = { 'nothing': [], 'axe': [constants_1.SIGIL_AXE] };
        this.sigils = this.assembleTiles('sigils', Resources_1.SpriteSheets.Icons, this.world.sigils, sigilImageMap);
        this.pawnTokens = this.world.pawns.map(pawn => new PawnToken_1.PawnToken(pawn));
    }
    update() {
        this.ticks++;
        for (const token of this.pawnTokens) {
            this.pawnManager.updatePawn(token);
        }
    }
    get dims() { return this.world.dimensions; }
    rawMaterialLocations(kind) {
        return this.world.rawMaterial.occupiedLocations(kind);
    }
    rawMaterialKindAtLocation(location) {
        return this.world.rawMaterial.at(location);
    }
    rawMaterialCountAtLocation(location) {
        return this.world.rawMaterialCount.at(location);
    }
    isBlocked(position) {
        return this.world.isBlocked(position);
    }
    computePath(pos, dest) {
        return this.world.shortestPath(pos, dest);
    }
    canPathBetween(a, b) {
        return WorldPosition_1.posEq(a, b) || this.computePath(a, b).length > 0;
    }
    markTree(position) {
        if (this.inBounds(position) && this.world.vegetation.at(position) === 'tree') {
            this.markedTreePositions.push(position);
            const [x, y] = position;
            this.sigils.getCell(x, y).pushSprite(new excalibur_1.TileSprite('sigils', constants_1.SIGIL_AXE));
            this.world.sigils.set(position, 'axe');
        }
    }
    chopTree(position) {
        const [ax, ay] = position;
        this.vegetation.getCell(ax, ay).clearSprites();
        this.world.vegetation.set(position, 'nothing');
        this.sigils.getCell(ax, ay).clearSprites();
        this.world.sigils.set(position, 'nothing');
        this.markedTreePositions = this.markedTreePositions.filter(treePos => !WorldPosition_1.posEq(treePos, position));
        this.world.rawMaterial.set(position, 'wood');
        this.world.rawMaterialCount.set(position, 1); //pick(1,2,3))
        this.rawMaterials.getCell(ax, ay).pushSprite(new excalibur_1.TileSprite('matter', pick_1.pick(...constants_1.WOOD_PIECE_IMAGES)));
    }
    gatherResource(position, maxToRemove) {
        const kind = this.world.rawMaterial.at(position);
        const amountAtPosition = this.world.rawMaterialCount.at(position);
        const amountRemoved = Math.min(amountAtPosition, maxToRemove);
        const amountRemaining = amountAtPosition - amountRemoved;
        this.world.rawMaterialCount.set(position, amountRemaining);
        if (amountRemaining === 0) {
            this.world.rawMaterial.set(position, 'nothing');
        }
        const [ax, ay] = position;
        this.rawMaterials.getCell(ax, ay).clearSprites();
        if (amountRemaining > 0) {
            let sprite = new excalibur_1.TileSprite('matter', pick_1.pick(...constants_1.MATERIAL_IMAGES[kind]));
            if (amountRemaining > constants_1.STACK_MAX / 2) {
                sprite = new excalibur_1.TileSprite('matter', pick_1.pick(...constants_1.MATERIAL_STACK_IMAGES[kind]));
            }
            this.rawMaterials.getCell(ax, ay).pushSprite(sprite);
        }
        return { kind, amount: amountRemoved };
    }
    storeResource(kind, position, amount) {
        // what kind of resource is here? add to it...
        const [ax, ay] = position;
        this.world.rawMaterial.set(position, kind);
        const currentCount = this.world.rawMaterialCount.at(position);
        const newAmount = currentCount + amount;
        this.world.rawMaterialCount.set(position, newAmount);
        this.rawMaterials.getCell(ax, ay).clearSprites();
        let sprite = new excalibur_1.TileSprite('matter', pick_1.pick(...constants_1.MATERIAL_IMAGES[kind]));
        if (newAmount > constants_1.STACK_MAX / 2) {
            sprite = new excalibur_1.TileSprite('matter', pick_1.pick(...constants_1.MATERIAL_STACK_IMAGES[kind]));
        }
        this.rawMaterials.getCell(ax, ay).pushSprite(sprite);
    }
    planWall(origin, destination) {
        console.log("---> Would build wall from " + origin + " to " + destination);
        // throw new Error("Method not implemented.");
    }
    declareZone(topLeft, bottomRight) {
        topLeft = this.enforceBounds(topLeft);
        bottomRight = this.enforceBounds(bottomRight);
        const color = new excalibur_1.Color(pick_1.pick(60, 90, 120), pick_1.pick(60, 90, 120), pick_1.pick(60, 90, 120), 0.5);
        if (topLeft[0] <= bottomRight[0] && topLeft[1] <= bottomRight[1]) {
            console.log("---> Creating zone from " + topLeft + " to " + bottomRight);
            this.zones.push({
                topLeft, bottomRight, color
            });
        }
        else {
            console.log("---> Not creating zone; zone had no size?");
        }
        // throw new Error("Method not implemented.");
    }
    deleteZoneAt(location) {
        this.zones = this.zones.filter(zone => !WorldPosition_1.areaContains(WorldPosition_1.pos(zone.topLeft[0], zone.topLeft[1]), WorldPosition_1.pos(zone.bottomRight[0], zone.bottomRight[1]), location));
    }
    isLocationWithinAnyZone(location) {
        const containingZone = this.zones.find(zone => WorldPosition_1.areaContains(zone.topLeft, zone.bottomRight, location));
        if (containingZone) {
            // console.log("---> Zone " + containingZone + " contains " + location)
            return true;
        }
        // console.log("---> No zone contains " + location)
        return false;
    }
    areAllZonesFull() {
        if (this.zones.length === 0) {
            return true;
        }
        for (const zone of this.zones) {
            for (let y = zone.topLeft[1]; y <= zone.bottomRight[1]; y++) {
                for (let x = zone.topLeft[0]; x <= zone.bottomRight[0]; x++) {
                    if (this.world.rawMaterialCount.at(WorldPosition_1.pos(x, y)) < constants_1.STACK_MAX) {
                        return false;
                    }
                }
            }
        }
        return true;
    }
    findUnfilledZonePositions() {
        const positions = [];
        for (const zone of this.zones) {
            for (let y = zone.topLeft[1]; y <= zone.bottomRight[1]; y++) {
                for (let x = zone.topLeft[0]; x <= zone.bottomRight[0]; x++) {
                    if (this.world.rawMaterialCount.at(WorldPosition_1.pos(x, y)) < constants_1.STACK_MAX) {
                        // return false
                        positions.push(WorldPosition_1.pos(x, y));
                    }
                }
            }
        }
        return positions;
    }
    inBounds(pos) {
        const [x, y] = pos;
        return (x >= 0 && y >= 0 && x < this.world.width && y < this.world.height);
    }
    enforceBounds(position) {
        let [x, y] = position;
        if (x < 0) {
            x = 0;
        }
        if (x >= this.world.width) {
            x = this.world.width - 1;
        }
        if (y < 0) {
            y = 0;
        }
        if (y >= this.world.height) {
            y = this.world.height - 1;
        }
        return WorldPosition_1.pos(x, y);
    }
    assembleTiles(layerName, spritesheet, grid, imageMap) {
        const map = new excalibur_1.TileMap(0, 0, constants_1.CELL_SIZE, constants_1.CELL_SIZE, this.world.height, this.world.width);
        map.registerSpriteSheet(layerName, spritesheet);
        this.world.forEachPosition((x, y) => {
            const value = grid.at(WorldPosition_1.pos(x, y));
            if (value !== undefined && value !== 'nothing') {
                const cell = map.getCell(x, y);
                const spriteId = pick_1.pick(...imageMap[value]);
                cell.pushSprite(new excalibur_1.TileSprite(layerName, spriteId));
            }
        });
        return map;
    }
}
exports.Game = Game;


/***/ }),

/***/ "./src/freehold/models/Grid.ts":
/*!*************************************!*\
  !*** ./src/freehold/models/Grid.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
const WorldPosition_1 = __webpack_require__(/*! ./WorldPosition */ "./src/freehold/models/WorldPosition.ts");
class Grid {
    constructor(dims, index) {
        this.dims = dims;
        this.index = index;
        this.cells = [];
    }
    get width() { return this.dims[0]; }
    get height() { return this.dims[1]; }
    dereference(reference) {
        return this.index[reference];
    }
    reference(value) {
        return this.index.indexOf(value);
    }
    at(location) {
        const [x, y] = location;
        return this.dereference(this.cells[y][x]);
    }
    set(location, value) {
        const [x, y] = location;
        this.cells[y] = this.cells[y] || [];
        this.cells[y][x] = this.reference(value);
    }
    forEachPositionXY(fn) {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                fn(x, y);
            }
        }
    }
    forEachPosition(fn) {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                fn(WorldPosition_1.pos(x, y));
            }
        }
    }
    fill(value) {
        this.forEachPosition(position => this.set(position, value));
    }
    distributeRandomly(value, rate = 0.1) {
        this.forEachPosition(position => {
            if (Math.random() < rate) {
                this.set(position, value);
            }
        });
    }
    occupiedLocations(value) {
        const occupied = [];
        this.forEachPosition(position => {
            if (this.at(position) === value) {
                occupied.push(position);
            }
        });
        return occupied;
    }
}
exports.Grid = Grid;


/***/ }),

/***/ "./src/freehold/models/Navigator.ts":
/*!******************************************!*\
  !*** ./src/freehold/models/Navigator.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigator = void 0;
const WorldPosition_1 = __webpack_require__(/*! ./WorldPosition */ "./src/freehold/models/WorldPosition.ts");
const PositionSet_1 = __webpack_require__(/*! ./PositionSet */ "./src/freehold/models/PositionSet.ts");
const SimpleGrid_1 = __webpack_require__(/*! ./SimpleGrid */ "./src/freehold/models/SimpleGrid.ts");
class Navigator {
    constructor(dims, isBlocked) {
        this.dims = dims;
        this.isBlocked = isBlocked;
    }
    get width() { return this.dims[0]; }
    get height() { return this.dims[1]; }
    reconstructPath(prev, destination) {
        const path = [destination];
        let current = destination;
        while (prev.at(current)) {
            current = prev.at(current);
            path.unshift(current);
        }
        path.shift();
        return path;
    }
    aStar(source, destination) {
        const startedAt = new Date().getTime();
        const fringe = new PositionSet_1.PositionSet([source]);
        const prev = new SimpleGrid_1.SimpleGrid();
        const gScore = new SimpleGrid_1.SimpleGrid(Infinity);
        const fScore = new SimpleGrid_1.SimpleGrid(Infinity);
        const byFScore = (a, b) => {
            const da = fScore.at(a);
            const db = fScore.at(b);
            return da < db ? -1 : 1;
        };
        const heuristic = (a) => WorldPosition_1.distanceBetween(a, destination);
        gScore.set(source, 0);
        fScore.set(source, heuristic(source));
        while (!fringe.empty()) {
            const now = new Date().getTime();
            const elapsed = now - startedAt; //- now
            // console.log("a* elapsed: " + elapsed)
            if (elapsed > 50) {
                console.log("a-star hit timeout");
                break;
            }
            const current = fringe.array.sort(byFScore)[0];
            if (WorldPosition_1.posEq(current, destination)) {
                return { path: this.reconstructPath(prev, current), found: true };
            }
            fringe.delete(current);
            const neighbors = WorldPosition_1.neighborsOfPositionPlusDiagonals(current, this.dims);
            neighbors.filter(neighbor => !this.isBlocked(neighbor)).forEach(neighbor => {
                const tentativeGScore = gScore.at(current) + WorldPosition_1.distanceBetween(current, neighbor);
                if (tentativeGScore < gScore.at(neighbor)) {
                    prev.set(neighbor, current);
                    gScore.set(neighbor, tentativeGScore);
                    fScore.set(neighbor, gScore.at(neighbor) + heuristic(neighbor));
                    if (!fringe.has(neighbor)) {
                        fringe.add(neighbor);
                    }
                }
            });
        }
        return { path: [], found: false };
        // throw new Error("No path found!")
    }
}
exports.Navigator = Navigator;


/***/ }),

/***/ "./src/freehold/models/PawnManagement.ts":
/*!***********************************************!*\
  !*** ./src/freehold/models/PawnManagement.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PawnManagement = void 0;
const PawnToken_1 = __webpack_require__(/*! ../actors/PawnToken */ "./src/freehold/actors/PawnToken.ts");
const WorldPosition_1 = __webpack_require__(/*! ./WorldPosition */ "./src/freehold/models/WorldPosition.ts");
const constants_1 = __webpack_require__(/*! ../constants */ "./src/freehold/constants.ts");
const CutTimber_1 = __webpack_require__(/*! ./activities/CutTimber */ "./src/freehold/models/activities/CutTimber.ts");
const Haul_1 = __webpack_require__(/*! ./activities/Haul */ "./src/freehold/models/activities/Haul.ts");
class PawnManagement {
    constructor(game) {
        this.game = game;
        this.activities = [
            new CutTimber_1.CutTimber(this.game),
            new Haul_1.Haul(this.game),
        ];
    }
    sendPawnToPosition(token, position) {
        if (!WorldPosition_1.posEq(token.pawn.pos, position)) {
            // console.log("---> Send " + token.pawn.name + " to " + position);
            token.pawn.dest = position;
        }
        else {
            token.pawn.dest = undefined;
        }
    }
    updatePawn(token) {
        if (token.pawn.dest && !WorldPosition_1.posEq(token.pawn.dest, token.pawn.pos)) {
            // console.log("---> Pawn navigates to " + token.pawn.dest)
            this.handleNavigation(token);
        }
        else {
            if (!token.pawn.activity) {
                // if (this.game.ticks % 2 === 0) {
                for (const activity of this.activities.sort((a, b) => token.priority(a) > token.priority(b) ? -1 : 1)) {
                    if (activity.isJobAvailable(token)) {
                        // console.log("---> A job is available: " + activity.title)
                        const jobDetails = activity.findJob(token);
                        if (jobDetails) {
                            // console.log("---> Got job details: " + JSON.stringify(jobDetails))
                            token.pawn.activity = activity.title;
                            token.pawn.activityTarget = jobDetails.activityTarget;
                            if (jobDetails.jobSubtype) {
                                token.pawn.jobSubtype = jobDetails.jobSubtype;
                            }
                            else {
                                token.pawn.jobSubtype = undefined;
                            }
                            this.sendPawnToPosition(token, jobDetails.travelDestination);
                            break;
                        }
                    }
                    // }
                }
            }
            else {
                // console.log("---> Pawn " + token.pawn.name + " has an activity...")
                this.pawnTokenWorks(token);
            }
        }
    }
    handleNavigation(token) {
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
    pawnTokenMoves(token, target) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!token.moving) {
                token.moving = true;
                yield token.actions.moveTo(target[0] * constants_1.CELL_SIZE, target[1] * constants_1.CELL_SIZE, PawnToken_1.PawnToken.speed).asPromise();
                token.pawn.pos = target;
                token.moving = false;
            }
        });
    }
    pawnTokenWorks(token) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log("---> Pawn works (" + token.pawn.name + ")")
            if (!token.interacting) {
                token.interacting = true;
                const activityManager = this.activities.find(activity => activity.title === token.pawn.activity);
                yield activityManager.perform(token);
                token.interacting = false;
                token.pawn.activity = undefined;
                // } else {
                // console.log("---> Pawn is already interacting?")
            }
        });
    }
}
exports.PawnManagement = PawnManagement;


/***/ }),

/***/ "./src/freehold/models/PositionSet.ts":
/*!********************************************!*\
  !*** ./src/freehold/models/PositionSet.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionSet = void 0;
const WorldPosition_1 = __webpack_require__(/*! ./WorldPosition */ "./src/freehold/models/WorldPosition.ts");
class PositionSet {
    constructor(entries = []) {
        this.arr = [];
        entries.forEach(([x, y]) => this.arr.push(WorldPosition_1.pos(x, y)));
    }
    get array() { return this.arr; }
    add(position) {
        this.arr.push(position);
    }
    delete(position) {
        this.arr = this.arr.filter(anotherPosition => !WorldPosition_1.posEq(position, anotherPosition));
    }
    has(position) {
        return this.arr.filter(p => WorldPosition_1.posEq(p, position)).length > 0;
    }
    size() {
        return this.arr.length;
    }
    empty() {
        return this.size() === 0;
    }
}
exports.PositionSet = PositionSet;


/***/ }),

/***/ "./src/freehold/models/SimpleGrid.ts":
/*!*******************************************!*\
  !*** ./src/freehold/models/SimpleGrid.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleGrid = void 0;
// A very basic grid that doesn't worry about bounds or indexing etc
class SimpleGrid {
    constructor(valueWhenUndefined = undefined) {
        this.valueWhenUndefined = valueWhenUndefined;
        this.values = [];
    }
    set(position, value) {
        const [px, py] = position;
        this.values[py] = this.values[py] || [];
        this.values[py][px] = value;
    }
    at(position) {
        const [px, py] = position;
        this.values[py] = this.values[py] || [];
        const value = this.values[py][px];
        if (value === undefined) {
            return this.valueWhenUndefined;
        }
        else {
            return value;
        }
    }
}
exports.SimpleGrid = SimpleGrid;


/***/ }),

/***/ "./src/freehold/models/World.ts":
/*!**************************************!*\
  !*** ./src/freehold/models/World.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.World = void 0;
const Cartogram_1 = __webpack_require__(/*! ../models/Cartogram */ "./src/freehold/models/Cartogram.ts");
const Navigator_1 = __webpack_require__(/*! ./Navigator */ "./src/freehold/models/Navigator.ts");
const pick_1 = __webpack_require__(/*! ../util/pick */ "./src/freehold/util/pick.ts");
const constants_1 = __webpack_require__(/*! ../constants */ "./src/freehold/constants.ts");
const shuffle_1 = __webpack_require__(/*! ../util/shuffle */ "./src/freehold/util/shuffle.ts");
class World {
    constructor(dimensions, initialPawnCount = constants_1.INITIAL_PAWN_COUNT) {
        this.dimensions = dimensions;
        this.initialPawnCount = initialPawnCount;
        this.makePawn = (name, pos) => {
            return {
                name,
                pos,
                // pos: this.map.pickRandomClearLocation(),
                inventory: [],
                priorities: shuffle_1.shuffle('logging', 'hauling', 'building')
            };
        };
        this.map = new Cartogram_1.Cartogram(dimensions);
        this.nav = new Navigator_1.Navigator(dimensions, position => {
            return this.isBlocked(position);
        });
        const pawnPositions = this.map.pickClearLocations(initialPawnCount);
        this.pawns = [];
        const language = constants_1.DWARVEN_LANGUAGE;
        for (let i = 0; i < initialPawnCount; i++) {
            // const pawnNames = [
            const pawnName = pick_1.pick(...language.stems) + pick_1.pick(...language.suffixes);
            //   pick(...language.stems) + pick(...language.suffixes),
            //   pick(...language.stems) + pick(...language.suffixes),
            // ].sort((a,b) => a.length >= b.length ? 1 : -1)
            this.pawns.push(this.makePawn(pawnName, pawnPositions[i]));
        }
    }
    get width() { return this.dimensions[0]; }
    get height() { return this.dimensions[1]; }
    get terrain() { return this.map.terrain; }
    get vegetation() { return this.map.vegetation; }
    get sigils() { return this.map.sigils; }
    get rawMaterial() { return this.map.rawMaterial; }
    get rawMaterialCount() { return this.map.rawMaterialCount; }
    forEachPosition(fn) {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                fn(x, y);
            }
        }
    }
    shortestPath(src, dst) {
        const { path } = this.nav.aStar(src, dst);
        return path;
    }
    isBlocked(position) {
        return this.map.vegetation.at(position) === 'tree';
    }
}
exports.World = World;


/***/ }),

/***/ "./src/freehold/models/WorldPosition.ts":
/*!**********************************************!*\
  !*** ./src/freehold/models/WorldPosition.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.areaContains = exports.byDistanceFrom = exports.distanceBetween = exports.pathEq = exports.posEq = exports.neighborsOfPositionPlusDiagonals = exports.neighborsOfPosition = exports.adjustPosition = exports.directionFrom = exports.pos = void 0;
exports.pos = (x, y) => {
    return [x, y];
};
exports.directionFrom = (src, dst) => {
    const [sx, sy] = src;
    const [dx, dy] = dst;
    if (sx === dx) {
        if (sy > dy) {
            return 'north';
        }
        if (sy < dy) {
            return 'south';
        }
    }
    else if (sy === dy) {
        if (sx > dx) {
            return 'west';
        }
        if (sx < dx) {
            return 'east';
        }
    }
    throw new Error('Positions are not neighbors: ' + src + ' / ' + dst);
};
exports.adjustPosition = (src, dir) => {
    const [sx, sy] = src;
    if (dir === 'east') {
        return exports.pos(sx + 1, sy);
    }
    else if (dir === 'west') {
        return exports.pos(sx - 1, sy);
    }
    else if (dir === 'north') {
        return exports.pos(sx, sy - 1);
    }
    else if (dir === 'south') {
        return exports.pos(sx, sy + 1);
    }
};
const withinBounds = (src, dims) => {
    const [sx, sy] = src;
    const [w, h] = dims;
    return sx >= 0 && sx < w && sy >= 0 && sy < h;
};
exports.neighborsOfPosition = (src, dims) => {
    const [sx, sy] = src;
    return [
        exports.pos(sx, sy - 1),
        exports.pos(sx - 1, sy), exports.pos(sx + 1, sy),
        exports.pos(sx, sy + 1),
    ].filter(p => withinBounds(p, dims));
};
exports.neighborsOfPositionPlusDiagonals = (src, dims) => {
    const [sx, sy] = src;
    return [
        exports.pos(sx - 1, sy - 1), exports.pos(sx, sy - 1), exports.pos(sx + 1, sy - 1),
        exports.pos(sx - 1, sy), exports.pos(sx + 1, sy),
        exports.pos(sx - 1, sy + 1), exports.pos(sx, sy + 1), exports.pos(sx + 1, sy + 1),
    ].filter(p => withinBounds(p, dims));
};
exports.posEq = (a, b) => {
    if (a && b) {
        const [ax, ay] = a;
        const [bx, by] = b;
        return ax === bx && ay === by;
    }
    else {
        return false;
    }
};
exports.pathEq = (a, b) => {
    if (!(a.length === b.length)) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (!exports.posEq(a[i], b[i])) {
            return false;
        }
    }
    return true;
};
exports.distanceBetween = (a, b) => {
    const [ax, ay] = a;
    const [bx, by] = b;
    const dx = ax - bx;
    const dy = ay - by;
    const d = Math.sqrt((dx * dx) + (dy * dy));
    // console.log("Compute distance between", a, b, d)
    return d;
};
exports.byDistanceFrom = (target) => (a, b) => {
    return exports.distanceBetween(target, a) > exports.distanceBetween(target, b) ? 1 : -1;
};
exports.areaContains = (topLeft, bottomRight, trialPos) => {
    const [ax, ay] = topLeft;
    const [bx, by] = bottomRight;
    const [x, y] = trialPos;
    const contained = ax <= x && x <= bx && ay <= y && y <= by;
    // console.log("Does area " + ax + ", " + ay + " to " + bx + ", " + by + " contain " + x + ", " + y + "?", contained)
    return contained;
};


/***/ }),

/***/ "./src/freehold/models/activities/CutTimber.ts":
/*!*****************************************************!*\
  !*** ./src/freehold/models/activities/CutTimber.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CutTimber = void 0;
const WorldPosition_1 = __webpack_require__(/*! ../WorldPosition */ "./src/freehold/models/WorldPosition.ts");
const PositionSet_1 = __webpack_require__(/*! ../PositionSet */ "./src/freehold/models/PositionSet.ts");
const constants_1 = __webpack_require__(/*! ../../constants */ "./src/freehold/constants.ts");
class CutTimber {
    constructor(game) {
        this.game = game;
        this.title = 'logging';
        this.assignedTreePositions = new PositionSet_1.PositionSet();
    }
    isJobAvailable(token) {
        const treePositions = this.game.markedTreePositions
            .filter(pos => !this.assignedTreePositions.has(pos))
            .sort(WorldPosition_1.byDistanceFrom(token.pawn.pos))
            .find(pos => WorldPosition_1.neighborsOfPosition(pos, this.game.dims)
            .filter(n => !this.game.isBlocked(n))
            .find(n => this.game.canPathBetween(token.pawn.pos, n)));
        const available = treePositions; //.length > 0;
        return Boolean(available);
    }
    findJob(token) {
        // if (this.game.ticks % 5 !== 0) return;
        // console.log("---> Find timber job for " + token.pawn.name)
        const treePositions = [...this.game.markedTreePositions]
            .filter(pos => !this.assignedTreePositions.has(pos));
        if (treePositions.length > 0) {
            const treePosition = treePositions
                .sort(WorldPosition_1.byDistanceFrom(token.pawn.pos))
                .find(pos => {
                return WorldPosition_1.neighborsOfPosition(pos, this.game.dims)
                    .filter(n => !this.game.isBlocked(n))
                    .find(n => this.game.canPathBetween(token.pawn.pos, n));
            });
            if (treePosition) {
                const neighbor = WorldPosition_1.neighborsOfPosition(treePosition, this.game.dims)
                    .filter(n => !this.game.isBlocked(n))
                    .sort(WorldPosition_1.byDistanceFrom(token.pawn.pos))
                    .find(n => this.game.canPathBetween(token.pawn.pos, n));
                if (neighbor) {
                    this.assignedTreePositions.add(treePosition);
                    const travelDestination = neighbor;
                    return { activityTarget: treePosition, travelDestination };
                }
            }
        }
    }
    perform(token) {
        return __awaiter(this, void 0, void 0, function* () {
            yield token.actions.delay(constants_1.TREE_CUT_DURATION).asPromise();
            this.game.chopTree(token.pawn.activityTarget);
            this.assignedTreePositions.delete(token.pawn.activityTarget);
        });
    }
}
exports.CutTimber = CutTimber;


/***/ }),

/***/ "./src/freehold/models/activities/Haul.ts":
/*!************************************************!*\
  !*** ./src/freehold/models/activities/Haul.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Haul = void 0;
const WorldPosition_1 = __webpack_require__(/*! ../WorldPosition */ "./src/freehold/models/WorldPosition.ts");
const PositionSet_1 = __webpack_require__(/*! ../PositionSet */ "./src/freehold/models/PositionSet.ts");
const constants_1 = __webpack_require__(/*! ../../constants */ "./src/freehold/constants.ts");
class Haul {
    // private assignedZoneLocations: PositionSet = new PositionSet();
    constructor(game) {
        this.game = game;
        this.title = "hauling";
        this.assignedItemLocations = new PositionSet_1.PositionSet();
    }
    get outstandingItemLocations() {
        return this.game.rawMaterialLocations('wood').filter(location => !this.game.isLocationWithinAnyZone(location)).filter(location => !this.assignedItemLocations.has(location));
    }
    get freeZoneLocations() {
        return this.game.findUnfilledZonePositions();
        // .filter(location => !this.assignedZoneLocations.has(location))
    }
    isJobAvailable(token) {
        const canGather = (this.outstandingItemLocations.length > 0 && !this.game.areAllZonesFull());
        const canStore = (!this.game.areAllZonesFull() && token.pawn.inventory.length > 0);
        // console.log("---> Is a hauling job available for " + token.pawn.name + "?", { canGather, canStore });
        return canGather || canStore;
    }
    findJob(token) {
        const hasRoomInInventory = token.pawn.inventory.length < constants_1.INVENTORY_LIMIT;
        // console.log("---> Does " + token.pawn.name  + " have room in inventory? " + hasRoomInInventory)
        const thereExistOutstandingItems = this.outstandingItemLocations.length > 0;
        if (hasRoomInInventory && thereExistOutstandingItems) {
            const nearestAccessibleItemLocation = this.outstandingItemLocations
                .sort(WorldPosition_1.byDistanceFrom(token.pawn.pos))
                .find(pos => this.game.canPathBetween(pos, token.pawn.pos));
            if (nearestAccessibleItemLocation) {
                this.assignedItemLocations.add(nearestAccessibleItemLocation);
                return {
                    activityTarget: nearestAccessibleItemLocation,
                    travelDestination: nearestAccessibleItemLocation,
                    jobSubtype: 'haul-gather'
                };
            }
        }
        else if (token.pawn.inventory.length > 0) { //} && !this.game.areAllZonesFull()) {
            // find an un-filled zone slot...
            const freeZoneSpace = this.freeZoneLocations
                .sort(WorldPosition_1.byDistanceFrom(token.pawn.pos))
                .find(pos => this.game.canPathBetween(pos, token.pawn.pos));
            if (freeZoneSpace) {
                // this.assignedZoneLocations.add(freeZoneSpace)
                return {
                    activityTarget: freeZoneSpace,
                    travelDestination: freeZoneSpace,
                    jobSubtype: 'haul-store'
                };
            }
        }
    }
    perform(token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (token.pawn.jobSubtype === 'haul-gather') {
                const { activityTarget } = token.pawn;
                const maxToAccept = constants_1.INVENTORY_LIMIT - token.pawn.inventory.length;
                const { kind, amount } = this.game.gatherResource(activityTarget, maxToAccept);
                for (let i = 0; i < amount; i++) {
                    token.pawn.inventory.push(kind);
                }
                this.assignedItemLocations.delete(activityTarget);
            }
            else if (token.pawn.jobSubtype === 'haul-store') {
                const { activityTarget } = token.pawn;
                const kind = this.game.rawMaterialKindAtLocation(activityTarget) === 'nothing'
                    ? token.pawn.inventory[0]
                    : this.game.rawMaterialKindAtLocation(activityTarget);
                const amountLocationCanAccept = constants_1.STACK_MAX - this.game.rawMaterialCountAtLocation(activityTarget);
                let amountToStore = token.pawn.inventory.filter(k => kind === k).length;
                if (amountToStore > amountLocationCanAccept) {
                    amountToStore = amountLocationCanAccept;
                }
                for (let i = 0; i < amountToStore; i++) {
                    const indexToRemove = token.pawn.inventory.findIndex(k => kind === k);
                    token.pawn.inventory = token.pawn.inventory.filter((_, i) => i !== indexToRemove);
                }
                this.game.storeResource(kind, activityTarget, amountToStore);
                // this.assignedZoneLocations.delete(activityTarget)
            }
        });
    }
}
exports.Haul = Haul;


/***/ }),

/***/ "./src/freehold/util/pick.ts":
/*!***********************************!*\
  !*** ./src/freehold/util/pick.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = void 0;
exports.pick = (...elems) => {
    const index = Math.floor(Math.random() * (elems.length));
    return elems[index];
};


/***/ }),

/***/ "./src/freehold/util/shuffle.ts":
/*!**************************************!*\
  !*** ./src/freehold/util/shuffle.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = void 0;
exports.shuffle = (...arr) => arr.sort(() => Math.random() > 0.5 ? -1 : 1);


/***/ }),

/***/ "./src/freehold/util/take.ts":
/*!***********************************!*\
  !*** ./src/freehold/util/take.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.take = void 0;
exports.take = (n, arr) => {
    if (n >= arr.length) {
        return arr;
    }
    const taken = [];
    for (let i = 0; i < n; i++) {
        taken.push(arr[i]);
    }
    return taken;
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FreeholdEngine_1 = __webpack_require__(/*! ./FreeholdEngine */ "./src/FreeholdEngine.ts");
const Play_1 = __webpack_require__(/*! ./freehold/Play */ "./src/freehold/Play.ts");
const Resources_1 = __webpack_require__(/*! ./freehold/Resources */ "./src/freehold/Resources.ts");
const excalibur_1 = __webpack_require__(/*! excalibur */ "./node_modules/excalibur/dist/excalibur.min.js");
console.log("FREEHOLD -- index");
const freehold = new FreeholdEngine_1.FreeholdEngine();
const play = new Play_1.Play(freehold);
freehold.backgroundColor = excalibur_1.Color.fromRGB(//30,200,150) 
20, 180, 140); //new Color(40,120,80);
freehold.add('play', play);
const loader = new excalibur_1.Loader();
loader.suppressPlayButton = true;
for (const key in Resources_1.Resources) {
    loader.addResource(Resources_1.Resources[key]);
}
freehold.start(loader).then(() => freehold.goToScene('play'));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyZWVob2xkRW5naW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9QbGF5LnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9SZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL2FjdG9ycy9QYXduVG9rZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL2FjdG9ycy9TaW5nbGVDZWxsQm94LnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9hY3RvcnMvWm9uZVZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL2NhbnZhcy9TaGFwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvaW1hZ2VzL2ljb25zLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvaW1hZ2VzL21hdHRlci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL2ltYWdlcy9zdHJ1Y3R1cmUucG5nIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9pbWFnZXMvdGVycmFpbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL2ltYWdlcy90cmVlcy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL21vZGVscy9DYXJ0b2dyYW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL21vZGVscy9EcmFnLnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9tb2RlbHMvR2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvbW9kZWxzL0dyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL21vZGVscy9OYXZpZ2F0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL21vZGVscy9QYXduTWFuYWdlbWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvbW9kZWxzL1Bvc2l0aW9uU2V0LnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9tb2RlbHMvU2ltcGxlR3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvbW9kZWxzL1dvcmxkLnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9tb2RlbHMvV29ybGRQb3NpdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvbW9kZWxzL2FjdGl2aXRpZXMvQ3V0VGltYmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9tb2RlbHMvYWN0aXZpdGllcy9IYXVsLnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC91dGlsL3BpY2sudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL3V0aWwvc2h1ZmZsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvdXRpbC90YWtlLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZKQSxzRUFBc0U7QUFDdEUsMkdBQXdEO0FBRXhELE1BQWEsY0FBZSxTQUFRLGtCQUFNO0lBQ3hDO1FBQ0UsS0FBSyxDQUFDLEVBQUUsV0FBVyxFQUFFLHVCQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVNLEtBQUssQ0FBQyxNQUFjLElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUM7Q0FDNUQ7QUFORCx3Q0FNQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RELDJHQUE4RTtBQUM5RSx5RkFBcUM7QUFDckMsNEZBQXVDO0FBRXZDLDBGQUFvRDtBQUVwRCxvSEFBNkM7QUFDN0MseUZBQXFDO0FBQ3JDLG9IQUF1RDtBQUN2RCxxR0FBNkM7QUFHN0MsTUFBYSxJQUFLLFNBQVEsaUJBQUs7SUFBL0I7O1FBR0UsbUJBQWMsR0FBa0IsbUJBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUcxQyxrQkFBYSxHQUFXLEtBQUs7SUFxTS9CLENBQUM7SUEzTEMsWUFBWSxDQUFDLE1BQXNCO1FBQ2pDLFlBQVk7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBRWhDLE1BQU0sS0FBSyxHQUFHLElBQUksYUFBSyxDQUFDLHNCQUFVLENBQUMsRUFBQyx5QkFBeUI7UUFDN0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFFakIsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxpQkFBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLGlCQUFLLENBQUMsS0FBSztRQUM5QixjQUFjO1FBQ1YscUdBQXFHO1FBRXpHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUVyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksbUJBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRXpCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRztZQUNiLElBQUksa0JBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxxQkFBUyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLHFCQUFTLENBQUMsQ0FBQztRQUVuRixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPO1FBQzNDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDckIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDaEMsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLGlCQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtnQkFDdkQsYUFBYTtnQkFDYixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO29CQUMzQix3REFBd0Q7b0JBQ3hELCtDQUErQztvQkFDL0MsOENBQThDO29CQUM5QyxnRkFBZ0Y7b0JBQ2hGLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FDZCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUUsUUFBUTtxQkFDcEQ7aUJBQ1I7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxrQkFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7aUJBQ2xDO2FBQ0Y7aUJBQU07Z0JBQ0wsdUJBQXVCO2dCQUN2QixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxLQUFLLE9BQU87Z0JBQ25ELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQzthQUN6QyxhQUFZO1lBQ2IseUJBQXlCO1FBQzNCLENBQUMsQ0FBQztRQUNGLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLGlCQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtnQkFDcEQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsS0FBSyxPQUFPO2dCQUNuRCx1Q0FBdUM7Z0JBQ3ZDLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUM7Z0JBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsVUFBVSxDQUFDO2dCQUM5QyxJQUFHLFVBQVUsRUFBRTtvQkFBRSxPQUFPLElBQUksQ0FBQyw0QkFBNEIsRUFBRTtpQkFBRTthQUM5RDtpQkFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssaUJBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO2dCQUM5RCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUs7YUFDckI7UUFDSCxDQUFDLENBQUM7UUFDRixLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLE1BQU07WUFDL0IsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLGlCQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtnQkFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO2dCQUVyRSw0QkFBNEI7Z0JBQzVCLDREQUE0RDtnQkFDMUQsMENBQTBDO2dCQUM1QyxxREFBcUQ7Z0JBQ25ELGtFQUFrRTtnQkFDcEUsVUFBVTtnQkFDVixJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssYUFBYSxFQUFFO29CQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO29CQUMzQyxTQUFTO2lCQUNWLENBQUMsUUFBUTtnQkFDVixxQkFBcUI7Z0JBQ3JCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLEtBQUssT0FBTztnQkFDbkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDO2dCQUN4QyxJQUFJO2FBQ0w7aUJBQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLGlCQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtnQkFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDekMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsWUFBWTtnQkFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJO2FBQ3BCO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDZCQUFhLEVBQUU7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXJCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxpQkFBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLGlCQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksa0JBQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM1RixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7UUFFM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQWM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsVUFBVSxHQUFHLE1BQU07UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNO0lBQzdCLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxRQUFnQjtRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLG1CQUFHLENBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxxQkFBUyxDQUFDLEVBQUUsT0FBTztRQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcscUJBQVMsQ0FBQyxDQUNuQztRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksa0JBQU0sQ0FDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxxQkFBUyxFQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLHFCQUFTLENBQ25DO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtTQUFFO1FBRXJDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUTtRQUNsQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7U0FDeEI7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDdEI7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7U0FDOUI7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7U0FDOUI7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1NBQ2pCO0lBQ0gsQ0FBQztJQUVELDRCQUE0QjtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDO1FBQ3hELDJDQUEyQztRQUMzQyw2Q0FBNkM7UUFDN0MsZ0JBQWdCO1FBQ2hCLHlCQUF5QjtRQUN6QixnQkFBZ0I7UUFDaEIsK0dBQStHO1FBQy9HLHVEQUF1RDtRQUN2RCwrREFBK0Q7UUFDL0QscUJBQXFCO1FBQ2xCLHlDQUF5QztRQUN6QyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtRQUM3Qyx5RUFBeUU7UUFDeEUsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsT0FBTyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsTUFBTSxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQzFGLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxLQUFLLEVBQUU7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxNQUFNLEdBQUcsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7WUFDOUYsS0FBSyxJQUFJLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDckMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzlCO2FBQ0Y7U0FDRjthQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxhQUFhLEVBQUU7WUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsbUJBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDaEU7YUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssT0FBTyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLG1CQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzdEO1FBRUosS0FBSztRQUNMLEdBQUc7SUFDTCxDQUFDO0lBRU8sY0FBYyxDQUFDLEtBQW9CLEVBQUUsWUFBcUI7UUFDaEUsSUFBSSxVQUFVLEdBQUcsS0FBSztRQUN0QixJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQztTQUN4RDthQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxLQUFLO1lBQ2pDLFVBQVUsR0FBRSxJQUFJO1NBQ2pCO2FBQU0sSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDdkMsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDMUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsSUFBSSxrQkFBTSxDQUNoQyxDQUFDLE9BQU8sR0FBRyxxQkFBUyxDQUFDLEVBQUUsT0FBTztZQUM5QixDQUFDLE9BQU8sR0FBRyxxQkFBUyxDQUFDLENBQ3RCO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLHFCQUFTO1lBQzNELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxxQkFBUztZQUM1RCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxJQUFJO1NBQ2pDO1FBQ0QsSUFBSTtRQUNGLE9BQU8sRUFBRSxVQUFVLEVBQUM7SUFDeEIsQ0FBQztDQUNGO0FBM01ELG9CQTJNQzs7Ozs7Ozs7Ozs7Ozs7QUN2TkQsdURBQXVEOzs7QUFFdkQsMkdBQWdEO0FBQ2hELDBGQUF1QztBQUV2QyxNQUFNLE9BQU8sR0FBRyxtQkFBTyxDQUFDLCtEQUFzQixDQUFDO0FBQy9DLE1BQU0sS0FBSyxHQUFHLG1CQUFPLENBQUMsMkRBQW9CLENBQUM7QUFDM0MsTUFBTSxLQUFLLEdBQUcsbUJBQU8sQ0FBQywyREFBb0IsQ0FBQztBQUMzQyxNQUFNLE1BQU0sR0FBRyxtQkFBTyxDQUFDLDZEQUFxQixDQUFDO0FBQzdDLE1BQU0sU0FBUyxHQUFHLG1CQUFPLENBQUMsbUVBQXdCLENBQUM7QUFFbkQsTUFBTSxTQUFTLEdBQUc7SUFDaEIsT0FBTyxFQUFFLElBQUksbUJBQU8sQ0FBQyxPQUFPLENBQUM7SUFDN0IsS0FBSyxFQUFFLElBQUksbUJBQU8sQ0FBQyxLQUFLLENBQUM7SUFDekIsTUFBTSxFQUFFLElBQUksbUJBQU8sQ0FBQyxNQUFNLENBQUM7SUFDM0IsS0FBSyxFQUFFLElBQUksbUJBQU8sQ0FBQyxLQUFLLENBQUM7SUFDekIsU0FBUyxFQUFFLElBQUksbUJBQU8sQ0FBQyxTQUFTLENBQUM7Q0FDbEM7QUFXUSw4QkFBUztBQVRsQixNQUFNLEVBQUUsR0FBRyxxQkFBUztBQUNwQixNQUFNLFlBQVksR0FBRztJQUNuQixPQUFPLEVBQUUsSUFBSSx1QkFBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ3pELEtBQUssRUFBRSxJQUFJLHVCQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDckQsTUFBTSxFQUFFLElBQUksdUJBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUN2RCxLQUFLLEVBQUUsSUFBSSx1QkFBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ3JELFNBQVMsRUFBRSxJQUFJLHVCQUFXLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7Q0FDOUQ7QUFFbUIsb0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QmhDLDJHQUFpRDtBQUNqRCwyRkFBeUM7QUFFekMsc0ZBQW9DO0FBQ3BDLGdHQUEwQztBQUcxQyxNQUFhLFNBQVUsU0FBUSxpQkFBSztJQVVsQyxZQUFtQixJQUFVO1FBQzNCLEtBQUssQ0FBQztZQUNKLEtBQUssRUFBRSxxQkFBUztZQUNoQixNQUFNLEVBQUUscUJBQVM7WUFDakIsS0FBSyxFQUFFLFdBQUksQ0FBQyxpQkFBSyxDQUFDLElBQUksRUFBRSxpQkFBSyxDQUFDLEdBQUcsRUFBRSxpQkFBSyxDQUFDLEtBQUssRUFBRSxpQkFBSyxDQUFDLE1BQU0sRUFBRSxpQkFBSyxDQUFDLFVBQVUsRUFBRSxpQkFBSyxDQUFDLE9BQU8sQ0FBQztZQUM5RixnQkFBZ0I7WUFDaEIsTUFBTSxFQUFFLElBQUksa0JBQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQzVCLEdBQUcsRUFBRSxJQUFJLGtCQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxxQkFBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcscUJBQVMsQ0FBQztTQUNsRSxDQUFDLENBQUM7UUFSYyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBTDdCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixTQUFJLEdBQW9CLEVBQUU7UUFjMUIsU0FBSSxHQUFHLGlCQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFGeEMsQ0FBQztJQWxCRCxRQUFRLENBQUMsQ0FBWTtRQUNuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzVDLDhDQUE4QztJQUNoRCxDQUFDO0lBa0JELElBQUksS0FBSyxLQUFZLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQztJQUM1RCxJQUFJLENBQUMsR0FBNkI7UUFDaEMsSUFBSSxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRXRCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTTtRQUV0QixNQUFNLFVBQVUsR0FBRSxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSztRQUN2RCxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxVQUFVLEdBQUMsQ0FBQyxHQUFHLHFCQUFTLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbkUsQ0FBQyxJQUFJLHFCQUFTLEdBQUMsQ0FBQztRQUNoQixDQUFDLElBQUkscUJBQVMsR0FBQyxDQUFDO1FBQ2hCLGVBQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUNoQixDQUFDLEVBQUUsQ0FBQyxFQUFFLGlCQUFpQjtRQUN2QixDQUFDLEdBQUMscUJBQVMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLHFCQUFTLEdBQUMsQ0FBQyxFQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDO1FBRWIsZUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQ2hCLENBQUMsRUFBRSxDQUFDLEdBQUcscUJBQVMsR0FBQyxDQUFDLEVBQ2xCLHFCQUFTLEdBQUMsQ0FBQyxFQUFFLHFCQUFTLEdBQUMsQ0FBQyxFQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7QUExQ0gsOEJBMkNDO0FBbkNRLGVBQUssR0FBRyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7O0FDZnBCLDJHQUFpRDtBQUNqRCwyRkFBeUM7QUFDekMsTUFBYSxhQUFjLFNBQVEsaUJBQUs7SUFDdEM7UUFDRSxLQUFLLENBQUM7WUFDSixLQUFLLEVBQUUsaUJBQUssQ0FBQyxJQUFJO1lBQ2pCLEtBQUssRUFBRSxxQkFBUztZQUNoQixNQUFNLEVBQUUscUJBQVM7WUFDakIsTUFBTSxFQUFFLElBQUksa0JBQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sRUFBRSxHQUFHO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBVkQsc0NBVUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRCwyR0FBaUU7QUFFakUsMkZBQXlDO0FBQ3pDLHFIQUE4QztBQUM5QyxNQUFhLFFBQVMsU0FBUSxpQkFBSztJQUNqQyxZQUFvQixJQUFVLEVBQVUsTUFBYztRQUNwRCxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxrQkFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFEZixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUVwRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssWUFBWSxrQkFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVELElBQUksQ0FBQyxHQUE2QjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0IsbUNBQW1DO1lBQ25DLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM5QixNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFFbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFckQsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNO1lBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUMsRUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUMsRUFBRSxFQUFFLENBQUMsSUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3pCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsbUJBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVELEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUMscUJBQVMsR0FBRyxxQkFBUyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMscUJBQVMsR0FBRyxxQkFBUyxDQUFDO2lCQUM5RTthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sZUFBZSxDQUFDLEdBQTZCLEVBQUUsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLEtBQVk7UUFFL0csTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLHFCQUFTLENBQUMsQ0FBQyxpQkFBaUI7UUFDM0MsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLHFCQUFTLENBQUMsQ0FBQyxpQkFBaUI7UUFDM0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLHFCQUFTLENBQUM7UUFDcEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLHFCQUFTLENBQUM7UUFFcEMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDL0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0Y7QUFsQ0QsNEJBa0NDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcENELE1BQWEsTUFBTTtJQUNqQixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQTZCLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxPQUFlLEVBQUUsT0FBZSxFQUFFLEtBQVk7UUFDaEgsR0FBRyxDQUFDLFNBQVMsRUFBRTtRQUNmLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDakQsR0FBRyxDQUFDLFNBQVMsRUFBRTtRQUVmLGlDQUFpQztRQUNqQyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDOUIsR0FBRyxDQUFDLElBQUksRUFBRTtRQUNWLDJCQUEyQjtJQUM3QixDQUFDO0NBRUY7QUFaRCx3QkFZQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pZLGlCQUFTLEdBQUcsRUFBRTtBQUVkLG1CQUFXLEdBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7QUFDeEIsb0JBQVksR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUV4QixtQkFBVyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztBQUVuQix5QkFBaUIsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2Qix5QkFBaUIsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNwQyx1Q0FBdUM7QUFDdkMsZ0NBQWdDO0FBRW5CLHVCQUFlLEdBQUc7SUFDN0IsTUFBTSxFQUFFLHlCQUFpQjtDQUMxQjtBQUNZLDZCQUFxQixHQUFHO0lBQ25DLE1BQU0sRUFBRSx5QkFBaUI7Q0FDMUI7QUFFWSxpQkFBUyxHQUFHLENBQUM7QUFFMUIsNkJBQTZCO0FBRWhCLHVCQUFlLEdBQUcsQ0FBQztBQUNuQixpQkFBUyxHQUFHLEVBQUU7QUFFZCx5QkFBaUIsR0FBRyxFQUFFO0FBRXRCLDBCQUFrQixHQUFHLENBQUM7QUFDdEIsa0JBQVUsR0FBRyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQWU7QUFDcEMsd0JBQWdCLEdBQUcsR0FBRztBQUVuQyw2QkFBNkI7QUFFaEIsd0JBQWdCLEdBQWE7SUFDeEMsSUFBSSxFQUFFLFVBQVU7SUFDaEIscUJBQXFCO0lBQ3JCLEtBQUssRUFBRTtRQUNMLE9BQU87UUFDUCxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTTtRQUNuQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxNQUFNO1FBQ3hCLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUN4QyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTztRQUNsQyxJQUFJO1FBQ0osS0FBSyxFQUFFLElBQUk7UUFDWCxLQUFLLEVBQUUsU0FBUztRQUNoQixHQUFHLEVBQUUsUUFBUTtRQUNiLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU07UUFDeEIsR0FBRztRQUNILE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUk7S0FDN0I7SUFDRCxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUM7Q0FDekU7QUFFRCw0Q0FBNEM7QUFDNUMsb0JBQW9CO0FBQ3BCLFVBQVU7QUFDVixJQUFJO0FBRVMsOEJBQXNCLEdBQUc7SUFDcEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTztJQUM3RyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU07SUFDN0MsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU07SUFDM0YsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVE7SUFDN0UsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSztJQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPO0lBQ3ZGLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU07SUFDL0IsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUk7SUFDNUYsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNO0lBQ2pILEdBQUcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUk7SUFDdkQsS0FBSyxFQUFFLFFBQVE7SUFDZixNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUs7SUFDbkIsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTTtJQUNuRyxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTztJQUN2RixNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUs7SUFDdEIsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSztJQUMzQixPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLO0lBQzdCLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU87SUFDbEUsR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO0lBQ3hDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRO0lBQzlELEdBQUcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFHLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUTtJQUN2RSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSztJQUNsQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxVQUFVO0lBQ3JDLE9BQU8sRUFBRSxRQUFRO0lBQ2pCLEtBQUs7SUFDTCxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTO0lBQ2pDLCtCQUErQjtJQUMvQixvQ0FBb0M7SUFDcEMsd0NBQXdDO0lBQ3hDLDJDQUEyQztJQUMzQyxrREFBa0Q7Q0FDbkQ7QUFFWSw0QkFBb0IsR0FBRztJQUNsQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTTtJQUNuSCxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSztJQUM1QixHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLO0lBQzNHLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSztJQUM1RSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUk7SUFDdkMsR0FBRyxFQUFFLEtBQUs7Q0FLWDs7Ozs7Ozs7Ozs7O0FDMUdELGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEM7Ozs7Ozs7Ozs7Ozs7OztBQ0N4QyxrRkFBOEI7QUFDOUIsNkdBQXNEO0FBQ3RELHNGQUFvQztBQUNwQyxvR0FBMEM7QUFDMUMsc0ZBQW9DO0FBQ3BDLDJGQUFnRDtBQUVoRCxtREFBbUQ7QUFDbkQsTUFBYSxTQUFTO0lBU3BCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFdBQUksQ0FBVSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFdBQUksQ0FBYSxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksV0FBSSxDQUFXLElBQUksRUFBRSxDQUFFLFNBQVMsRUFBRSxNQUFNLENBQUUsQ0FBQztRQUNsRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSx1QkFBVSxDQUFTLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksV0FBSSxDQUFRLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLDRCQUFnQixDQUFDO1FBQzVELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksS0FBSyxLQUFhLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0lBQzNDLElBQUksTUFBTSxLQUFhLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO0lBRTVDLElBQUksTUFBTTtRQUNSLE9BQU87WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1NBQ0E7SUFDcEIsQ0FBQztJQUVELHVCQUF1QjtRQUNyQixNQUFNLFNBQVMsR0FBb0IsRUFBRTtRQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDL0IsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxtQkFBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sRUFBRTtvQkFDM0MsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztpQkFDekI7YUFDRjtTQUNGO1FBQ0QsT0FBTyxXQUFJLENBQUMsR0FBRyxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQUVELGtCQUFrQixDQUFDLENBQVMsRUFBRSxZQUEyQixJQUFJLENBQUMsTUFBTTtRQUNsRSxNQUFNLFNBQVMsR0FBb0IsRUFBRTtRQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoQyxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDL0IsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxtQkFBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sRUFBRTtvQkFDM0MsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztpQkFDekI7YUFDRjtTQUNGO1FBQ0QsT0FBTyxXQUFJLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsOEJBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FDRjtBQXhERCw4QkF3REM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUQsNkdBQXNDO0FBQ3RDLE1BQWEsSUFBSTtJQU9mLFlBQVksUUFBdUIsRUFBVSxhQUFzQixLQUFLO1FBQTNCLGVBQVUsR0FBVixVQUFVLENBQWlCO1FBQ3RFLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFKRCxJQUFJLFdBQVcsS0FBb0IsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQztJQUtwRSxRQUFRLENBQUMsUUFBdUI7UUFDOUIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsdUNBQXVDO1FBQzFELE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLHVDQUF1QztRQUMxRCxJQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNoQixDQUFDO1FBQ2hCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixxQkFBcUI7YUFDdEI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDN0IscUJBQXFCO2FBQ3RCO1lBQ0QsaUJBQWlCO1lBQ2pCLHlDQUF5QztZQUN6Qyx3Q0FBd0M7WUFDeEMsa0JBQWtCO1NBQ25CO0lBQ0gsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCw2RUFBNkU7UUFDN0UsNkVBQTZFO1FBQzdFLE9BQU8sbUJBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCw2RUFBNkU7UUFDN0UsNkVBQTZFO1FBQzdFLE9BQU8sbUJBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNGO0FBaERELG9CQWdEQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pERCwyR0FBb0U7QUFDcEUsMkZBQXFMO0FBR3JMLHNGQUFvQztBQUNwQyx5R0FBZ0Q7QUFDaEQsMkZBQTRDO0FBQzVDLDZHQUEyRDtBQUMzRCxnSEFBa0Q7QUFJbEQsTUFBYSxJQUFJO0lBV2YsWUFBb0IsS0FBWTtRQUFaLFVBQUssR0FBTCxLQUFLLENBQU87UUFOaEMsVUFBSyxHQUFhLEVBQUU7UUFFcEIsd0JBQW1CLEdBQW9CLEVBQUU7UUFDekMsZ0JBQVcsR0FBbUIsSUFBSSwrQkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELFVBQUssR0FBRyxDQUFDLENBQUM7SUFFMEIsQ0FBQztJQUVyQyxLQUFLO1FBQ0gsTUFBTSxlQUFlLEdBQUcsRUFBRSxNQUFNLEVBQUUsdUJBQVcsRUFBRSxPQUFPLEVBQUUsd0JBQVksRUFBRTtRQUN0RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQy9CLFNBQVMsRUFDVCx3QkFBWSxDQUFDLE9BQU8sRUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQ2xCLGVBQWUsQ0FDaEI7UUFDRCxnQkFBZ0I7UUFFaEIsTUFBTSxrQkFBa0IsR0FBRyxFQUFFLE1BQU0sRUFBRSx1QkFBVyxFQUFFO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FDbEMsWUFBWSxFQUFFLHdCQUFZLENBQUMsS0FBSyxFQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFDckIsa0JBQWtCLENBQ25CO1FBRUQsTUFBTSxvQkFBb0IsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLDZCQUFpQixFQUFFO1FBQy9FLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FDcEMsUUFBUSxFQUFFLHdCQUFZLENBQUMsTUFBTSxFQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFDdEIsb0JBQW9CLENBQ3JCO1FBRUQsTUFBTSxhQUFhLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLHFCQUFTLENBQUMsRUFBRTtRQUMzRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQzlCLFFBQVEsRUFBRSx3QkFBWSxDQUFDLEtBQUssRUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQ2pCLGFBQWEsQ0FDZDtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxxQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNaLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBRUQsSUFBSSxJQUFJLEtBQWlCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUMsQ0FBQztJQUV2RCxvQkFBb0IsQ0FBQyxJQUFjO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO0lBQ3ZELENBQUM7SUFFRCx5QkFBeUIsQ0FBQyxRQUF1QjtRQUMvQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7SUFDNUMsQ0FBQztJQUVELDBCQUEwQixDQUFDLFFBQXVCO1FBQ2hELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO0lBQ2pELENBQUM7SUFFRCxTQUFTLENBQUMsUUFBdUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUFrQixFQUFFLElBQW1CO1FBQ2pELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztJQUMzQyxDQUFDO0lBRUQsY0FBYyxDQUFDLENBQWdCLEVBQUUsQ0FBZ0I7UUFDL0MsT0FBTyxxQkFBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztJQUN4RCxDQUFDO0lBRUQsUUFBUSxDQUFDLFFBQXVCO1FBQzlCLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssTUFBTSxFQUFFO1lBQzVFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUTtZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksc0JBQVUsQ0FBQyxRQUFRLEVBQUUscUJBQVMsQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxRQUF1QjtRQUM5QixNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFFBQVE7UUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFlBQVksRUFBRTtRQUM5QyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQztRQUU5QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsWUFBWSxFQUFFO1FBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDO1FBRTFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxxQkFBSyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVoRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztRQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUMsY0FBYztRQUMzRCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUN6QyxJQUFJLHNCQUFVLENBQUMsUUFBUSxFQUFFLFdBQUksQ0FBQyxHQUFHLDZCQUFpQixDQUFDLENBQUMsQ0FBQztJQUV6RCxDQUFDO0lBRUQsY0FBYyxDQUFDLFFBQXVCLEVBQUUsV0FBbUI7UUFDekQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNoRCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNqRSxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQztRQUM3RCxNQUFNLGVBQWUsR0FBRyxnQkFBZ0IsR0FBRyxhQUFhO1FBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUM7UUFDMUQsSUFBSSxlQUFlLEtBQUssQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDO1NBQ2hEO1FBQ0QsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxRQUFRO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxZQUFZLEVBQUU7UUFDaEQsSUFBSSxlQUFlLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksTUFBTSxHQUFHLElBQUksc0JBQVUsQ0FBQyxRQUFRLEVBQUUsV0FBSSxDQUFDLEdBQUcsMkJBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JFLElBQUksZUFBZSxHQUFHLHFCQUFTLEdBQUcsQ0FBQyxFQUFFO2dCQUNuQyxNQUFNLEdBQUcsSUFBSSxzQkFBVSxDQUFDLFFBQVEsRUFBRSxXQUFJLENBQUMsR0FBRyxpQ0FBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3hFO1lBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7U0FDckQ7UUFDRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUU7SUFDeEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUFjLEVBQUUsUUFBdUIsRUFBRSxNQUFjO1FBQ25FLDhDQUE4QztRQUM5QyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLFFBQVE7UUFFekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7UUFDMUMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQzdELE1BQU0sU0FBUyxHQUFHLFlBQVksR0FBRyxNQUFNO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFDdEMsU0FBUyxDQUNWO1FBRUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFlBQVksRUFBRTtRQUNoRCxJQUFJLE1BQU0sR0FBRyxJQUFJLHNCQUFVLENBQUMsUUFBUSxFQUFFLFdBQUksQ0FBQyxHQUFHLDJCQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLFNBQVMsR0FBRyxxQkFBUyxHQUFHLENBQUMsRUFBRTtZQUM3QixNQUFNLEdBQUcsSUFBSSxzQkFBVSxDQUFDLFFBQVEsRUFBRSxXQUFJLENBQUMsR0FBRyxpQ0FBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FDMUMsTUFBTSxDQUNQO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFxQixFQUFFLFdBQTBCO1FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxXQUFXLENBQUM7UUFDMUUsOENBQThDO0lBQ2hELENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0IsRUFBRSxXQUEwQjtRQUM1RCxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDckMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1FBQzdDLE1BQU0sS0FBSyxHQUFHLElBQUksaUJBQUssQ0FBQyxXQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxXQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxXQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDckYsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsR0FBRyxPQUFPLEdBQUcsTUFBTSxHQUFHLFdBQVcsQ0FBQztZQUN4RSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDZCxPQUFPLEVBQUUsV0FBVyxFQUFFLEtBQUs7YUFDNUIsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDO1NBQ3pEO1FBQ0QsOENBQThDO0lBQ2hELENBQUM7SUFFRCxZQUFZLENBQUMsUUFBdUI7UUFDbEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUNwQyxDQUFDLDRCQUFZLENBQ1gsbUJBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDckMsbUJBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDN0MsUUFBUSxDQUNULENBQ0Y7SUFDSCxDQUFDO0lBRUQsdUJBQXVCLENBQUMsUUFBdUI7UUFDN0MsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDNUMsNEJBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQ3ZEO1FBRUQsSUFBSSxjQUFjLEVBQUU7WUFDbEIsdUVBQXVFO1lBQ3ZFLE9BQU8sSUFBSTtTQUNaO1FBQ0QsbURBQW1EO1FBQ25ELE9BQU8sS0FBSztJQUNkLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFBRSxPQUFPLElBQUk7U0FBRTtRQUM1QyxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzRCxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsbUJBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxxQkFBUyxFQUFFO3dCQUN4RCxPQUFPLEtBQUs7cUJBQ2I7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsT0FBTyxJQUFJO0lBQ2IsQ0FBQztJQUVELHlCQUF5QjtRQUN2QixNQUFNLFNBQVMsR0FBb0IsRUFBRTtRQUNyQyxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzRCxLQUFLLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsbUJBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxxQkFBUyxFQUFFO3dCQUN4RCxlQUFlO3dCQUNmLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3pCO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFTyxRQUFRLENBQUMsR0FBa0I7UUFDakMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHO1FBQ2xCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUM1RSxDQUFDO0lBRU8sYUFBYSxDQUFDLFFBQXVCO1FBQzNDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsUUFBUTtRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQUU7UUFDckIsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUMsQ0FBQztTQUFFO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7U0FBRTtRQUNyQixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxDQUFDO1NBQUU7UUFDdkQsT0FBTyxtQkFBRyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVPLGFBQWEsQ0FDbkIsU0FBaUIsRUFDakIsV0FBd0IsRUFDeEIsSUFBYSxFQUNiLFFBQXVDO1FBRXZDLE1BQU0sR0FBRyxHQUFHLElBQUksbUJBQU8sQ0FDckIsQ0FBQyxFQUFFLENBQUMsRUFDSixxQkFBUyxFQUFFLHFCQUFTLEVBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUNwQztRQUNELEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsbUJBQUcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQXNCO1lBQ3BELElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUM5QyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzlCLE1BQU0sUUFBUSxHQUFHLFdBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLHNCQUFVLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3JEO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxHQUFHO0lBQ1osQ0FBQztDQUNGO0FBaFFELG9CQWdRQzs7Ozs7Ozs7Ozs7Ozs7OztBQzVRRCw2R0FBc0M7QUFFdEMsTUFBYSxJQUFJO0lBR2YsWUFBb0IsSUFBZ0IsRUFBVSxLQUFVO1FBQXBDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFLO1FBRmhELFVBQUssR0FBZSxFQUFFLENBQUM7SUFFNkIsQ0FBQztJQUU3RCxJQUFJLEtBQUssS0FBYSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUMzQyxJQUFJLE1BQU0sS0FBYSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztJQUVwQyxXQUFXLENBQUMsU0FBaUI7UUFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBRU8sU0FBUyxDQUFDLEtBQVE7UUFDeEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVELEVBQUUsQ0FBQyxRQUF1QjtRQUN4QixNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxHQUFHLENBQUMsUUFBdUIsRUFBRSxLQUFRO1FBQ25DLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFrQztRQUNsRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbkMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7YUFDUjtTQUNGO0lBQ0gsQ0FBQztJQUVELGVBQWUsQ0FBQyxFQUFxQztRQUNuRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbkMsRUFBRSxDQUFDLG1CQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2I7U0FDRjtJQUNILENBQUM7SUFFRCxJQUFJLENBQUMsS0FBUTtRQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBUSxFQUFFLElBQUksR0FBRyxHQUFHO1FBQ3JDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDOUIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxFQUFFO2dCQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7YUFDMUI7UUFDSCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBUTtRQUN4QixNQUFNLFFBQVEsR0FBRyxFQUFFO1FBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDOUIsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssRUFBRTtnQkFDL0IsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDeEI7UUFDSCxDQUFDLENBQUM7UUFDRixPQUFPLFFBQVE7SUFDakIsQ0FBQztDQUNGO0FBaEVELG9CQWdFQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFRCw2R0FBMkY7QUFDM0YsdUdBQTRDO0FBQzVDLG9HQUEwQztBQUkxQyxNQUFhLFNBQVM7SUFDcEIsWUFBb0IsSUFBc0IsRUFBVSxTQUErQztRQUEvRSxTQUFJLEdBQUosSUFBSSxDQUFrQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQXNDO0lBQUcsQ0FBQztJQUV2RyxJQUFJLEtBQUssS0FBYSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVDLElBQUksTUFBTSxLQUFhLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFckMsZUFBZSxDQUFDLElBQStCLEVBQUUsV0FBMEI7UUFDakYsTUFBTSxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDMUIsSUFBSSxPQUFPLEdBQWtCLFdBQVc7UUFDeEMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDWixPQUFPLElBQUk7SUFDYixDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQXFCLEVBQUUsV0FBMEI7UUFDckQsTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7UUFDdEMsTUFBTSxNQUFNLEdBQUcsSUFBSSx5QkFBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsTUFBTSxJQUFJLEdBQUcsSUFBSSx1QkFBVSxFQUFpQjtRQUM1QyxNQUFNLE1BQU0sR0FBRyxJQUFJLHVCQUFVLENBQVMsUUFBUSxDQUFDO1FBQy9DLE1BQU0sTUFBTSxHQUFHLElBQUksdUJBQVUsQ0FBUyxRQUFRLENBQUM7UUFDL0MsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFnQixFQUFFLENBQWdCLEVBQUUsRUFBRTtZQUN0RCxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QixNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7UUFDRCxNQUFNLFNBQVMsR0FBRyxDQUFDLENBQWdCLEVBQVUsRUFBRSxDQUFDLCtCQUFlLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQztRQUMvRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDckIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDdEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDaEMsTUFBTSxPQUFPLEdBQUcsR0FBRyxHQUFHLFNBQVMsRUFBQyxPQUFPO1lBQ3ZDLHdDQUF3QztZQUN4QyxJQUFJLE9BQU8sR0FBRyxFQUFFLEVBQUU7Z0JBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUFDLE1BQUs7YUFBRTtZQUU5RCxNQUFNLE9BQU8sR0FBa0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdELElBQUkscUJBQUssQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLEVBQUU7Z0JBQy9CLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTthQUNsRTtZQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ3RCLE1BQU0sU0FBUyxHQUFHLGdEQUFnQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3RFLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3pFLE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsK0JBQWUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDO2dCQUMvRSxJQUFJLGVBQWUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7b0JBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQztvQkFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQy9ELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUN6QixNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztxQkFDckI7aUJBQ0Y7WUFDSCxDQUFDLENBQUM7U0FDSDtRQUVELE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7UUFDakMsb0NBQW9DO0lBQ3RDLENBQUM7Q0FDRjtBQTNERCw4QkEyREM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRUQseUdBQWdEO0FBQ2hELDZHQUF3QztBQUd4QywyRkFBeUM7QUFFekMsdUhBQW1EO0FBQ25ELHdHQUF5QztBQUV6QyxNQUFhLGNBQWM7SUFFekIsWUFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNoQixJQUFJLHFCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN4QixJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVPLGtCQUFrQixDQUFDLEtBQWdCLEVBQUUsUUFBdUI7UUFDbEUsSUFBSSxDQUFDLHFCQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQUU7WUFDcEMsbUVBQW1FO1lBQ25FLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztTQUM1QjthQUFNO1lBQ0wsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFnQjtRQUN6QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMscUJBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzlELDJEQUEyRDtZQUMzRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ3hCLG1DQUFtQztnQkFDakMsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNwRyxJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ2xDLDREQUE0RDt3QkFDNUQsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7d0JBQzFDLElBQUksVUFBVSxFQUFFOzRCQUNkLHFFQUFxRTs0QkFDckUsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzs0QkFDckMsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQzs0QkFDdEQsSUFBSSxVQUFVLENBQUMsVUFBVSxFQUFFO2dDQUN6QixLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDOzZCQUMvQztpQ0FBTTtnQ0FBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7NkJBQUU7NEJBQzdDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLGlCQUFpQixDQUFDOzRCQUM1RCxNQUFNO3lCQUNQO3FCQUNGO29CQUNILElBQUk7aUJBQ0w7YUFDRjtpQkFBTTtnQkFDTCxzRUFBc0U7Z0JBQ3RFLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUI7U0FDRjtJQUNILENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxLQUFnQjtRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNqQixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNyQixNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQzthQUN0QztpQkFDSTtnQkFDSCxzRkFBc0Y7Z0JBQ3RGLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyRTtTQUNGO0lBQ0gsQ0FBQztJQUVhLGNBQWMsQ0FBQyxLQUFnQixFQUFFLE1BQXFCOztZQUNsRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDakIsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJO2dCQUNuQixNQUFNLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUN4QixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcscUJBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcscUJBQVMsRUFDNUMscUJBQVMsQ0FBQyxLQUFLLENBQ2hCLENBQUMsU0FBUyxFQUFFO2dCQUNiLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU07Z0JBQ3ZCLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSzthQUNyQjtRQUNILENBQUM7S0FBQTtJQUVhLGNBQWMsQ0FBQyxLQUFnQjs7WUFDM0MsMkRBQTJEO1lBQzNELElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFO2dCQUN0QixLQUFLLENBQUMsV0FBVyxHQUFHLElBQUk7Z0JBQ3hCLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDaEcsTUFBTSxlQUFlLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztnQkFDcEMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLO2dCQUN6QixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTO2dCQUNqQyxXQUFXO2dCQUNULG1EQUFtRDthQUNwRDtRQUNILENBQUM7S0FBQTtDQUNGO0FBdEZELHdDQXNGQzs7Ozs7Ozs7Ozs7Ozs7OztBQzlGRCw2R0FBNkM7QUFDN0MsTUFBYSxXQUFXO0lBRXRCLFlBQVksVUFBMkIsRUFBRTtRQURqQyxRQUFHLEdBQW9CLEVBQUUsQ0FBQztRQUVoQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0QsSUFBSSxLQUFLLEtBQXNCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakQsR0FBRyxDQUFDLFFBQXVCO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBQ0QsTUFBTSxDQUFDLFFBQXVCO1FBQzVCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLHFCQUFLLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUNELEdBQUcsQ0FBQyxRQUF1QjtRQUN6QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMscUJBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDRCxJQUFJO1FBQ0YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU07SUFDeEIsQ0FBQztJQUNELEtBQUs7UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0lBQzFCLENBQUM7Q0FDRjtBQXJCRCxrQ0FxQkM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkQsb0VBQW9FO0FBQ3BFLE1BQWEsVUFBVTtJQUVyQixZQUFvQixxQkFBd0IsU0FBUztRQUFqQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWU7UUFEckQsV0FBTSxHQUFVLEVBQUUsQ0FBQztJQUNzQyxDQUFDO0lBQzFELEdBQUcsQ0FBQyxRQUF1QixFQUFFLEtBQVE7UUFDbkMsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBQ0QsRUFBRSxDQUFDLFFBQXVCO1FBQ3hCLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDaEM7YUFDSTtZQUNILE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0NBQ0Y7QUFuQkQsZ0NBbUJDOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJELHlHQUFnRDtBQUdoRCxpR0FBd0M7QUFFeEMsc0ZBQW9DO0FBQ3BDLDJGQUFrSDtBQUNsSCwrRkFBMEM7QUFFMUMsTUFBYSxLQUFLO0lBTWhCLFlBQW1CLFVBQXNCLEVBQVMsbUJBQTJCLDhCQUFrQjtRQUE1RSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUE2QjtRQThCL0YsYUFBUSxHQUFHLENBQUMsSUFBWSxFQUFFLEdBQWtCLEVBQVEsRUFBRTtZQUNwRCxPQUFPO2dCQUNMLElBQUk7Z0JBQ0osR0FBRztnQkFDSCwyQ0FBMkM7Z0JBQzNDLFNBQVMsRUFBRSxFQUFFO2dCQUNiLFVBQVUsRUFBRSxpQkFBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFlO2FBQ3BFO1FBQ0gsQ0FBQztRQXJDQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUkscUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUkscUJBQVMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLEVBQUU7WUFDOUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUM7UUFDbkUsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQ2YsTUFBTSxRQUFRLEdBQUcsNEJBQWdCO1FBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxzQkFBc0I7WUFDdEIsTUFBTSxRQUFRLEdBQUcsV0FBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLFdBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDckUsMERBQTBEO1lBQzFELDBEQUEwRDtZQUMxRCxpREFBaUQ7WUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQzFDO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsSUFBSSxLQUFLLEtBQWEsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDakQsSUFBSSxNQUFNLEtBQWEsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFFbEQsSUFBSSxPQUFPLEtBQW9CLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsQ0FBQztJQUN4RCxJQUFJLFVBQVUsS0FBdUIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBQyxDQUFDO0lBQ2pFLElBQUksTUFBTSxLQUFrQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFDLENBQUM7SUFDcEQsSUFBSSxXQUFXLEtBQXFCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUMsQ0FBQztJQUNqRSxJQUFJLGdCQUFnQixLQUF5QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUMsQ0FBQztJQVkvRSxlQUFlLENBQUMsRUFBa0M7UUFDaEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25DLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO2FBQ1I7U0FDRjtJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsR0FBa0IsRUFBRSxHQUFrQjtRQUNqRCxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUN6QyxPQUFPLElBQUk7SUFDYixDQUFDO0lBRUQsU0FBUyxDQUFDLFFBQXVCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLE1BQU07SUFDcEQsQ0FBQztDQUNGO0FBOURELHNCQThEQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFWSxXQUFHLEdBQUcsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFpQixFQUFFO0lBQ3pELE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFrQixDQUFDO0FBQ2pDLENBQUM7QUFFWSxxQkFBYSxHQUFHLENBQUMsR0FBa0IsRUFBRSxHQUFrQixFQUFhLEVBQUU7SUFDakYsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHO0lBQ3BCLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRztJQUNwQixJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDYixJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFBRSxPQUFPLE9BQU87U0FBRTtRQUMvQixJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFBRSxPQUFPLE9BQU87U0FBRTtLQUNoQztTQUFNLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNwQixJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFBRSxPQUFPLE1BQU07U0FBRTtRQUM5QixJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFBRSxPQUFPLE1BQU07U0FBRTtLQUMvQjtJQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDdEUsQ0FBQztBQUVZLHNCQUFjLEdBQUcsQ0FBQyxHQUFrQixFQUFFLEdBQWMsRUFBaUIsRUFBRTtJQUNsRixNQUFNLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUc7SUFDbkIsSUFBSSxHQUFHLEtBQUssTUFBTSxFQUFFO1FBQ2xCLE9BQU8sV0FBRyxDQUFDLEVBQUUsR0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO0tBQ3BCO1NBQU0sSUFBSSxHQUFHLEtBQUssTUFBTSxFQUFFO1FBQ3pCLE9BQU8sV0FBRyxDQUFDLEVBQUUsR0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO0tBQ3BCO1NBQU0sSUFBSSxHQUFHLEtBQUssT0FBTyxFQUFFO1FBQzFCLE9BQU8sV0FBRyxDQUFDLEVBQUUsRUFBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDO0tBQ3BCO1NBQU0sSUFBSSxHQUFHLEtBQUssT0FBTyxFQUFFO1FBQzFCLE9BQU8sV0FBRyxDQUFDLEVBQUUsRUFBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDO0tBQ3BCO0FBQ0gsQ0FBQztBQUVELE1BQU0sWUFBWSxHQUFHLENBQUMsR0FBa0IsRUFBRSxJQUFzQixFQUFXLEVBQUU7SUFDM0UsTUFBTSxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsR0FBRyxHQUFHO0lBQ25CLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSTtJQUNsQixPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDO0FBQy9DLENBQUM7QUFFWSwyQkFBbUIsR0FBRyxDQUFDLEdBQWtCLEVBQUUsSUFBc0IsRUFBbUIsRUFBRTtJQUNqRyxNQUFNLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUc7SUFDbkIsT0FBTztRQUNVLFdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFDLENBQUMsQ0FBQztRQUM1QixXQUFHLENBQUMsRUFBRSxHQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsRUFBbUIsV0FBRyxDQUFDLEVBQUUsR0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDO1FBQzVCLFdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFDLENBQUMsQ0FBQztLQUM3QixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUVZLHdDQUFnQyxHQUFHLENBQUMsR0FBa0IsRUFBRSxJQUFzQixFQUFtQixFQUFFO0lBQzlHLE1BQU0sQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRztJQUNuQixPQUFPO1FBQ0wsV0FBRyxDQUFDLEVBQUUsR0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFDLENBQUMsQ0FBQyxFQUFFLFdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFDLENBQUMsQ0FBQyxFQUFHLFdBQUcsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBQyxDQUFDLENBQUM7UUFDaEQsV0FBRyxDQUFDLEVBQUUsR0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEVBQXFCLFdBQUcsQ0FBQyxFQUFFLEdBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQztRQUM3QyxXQUFHLENBQUMsRUFBRSxHQUFDLENBQUMsRUFBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLEVBQUcsV0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUMsQ0FBQyxDQUFDLEVBQUcsV0FBRyxDQUFDLEVBQUUsR0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFDLENBQUMsQ0FBQztLQUNqRCxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUVZLGFBQUssR0FBRyxDQUFDLENBQWdCLEVBQUUsQ0FBZ0IsRUFBVyxFQUFFO0lBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNaLE1BQU0sQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUNqQixNQUFNLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDakIsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0tBQzVCO1NBQU07UUFBRSxPQUFPLEtBQUs7S0FBQztBQUN4QixDQUFDO0FBRVksY0FBTSxHQUFHLENBQUMsQ0FBa0IsRUFBRSxDQUFrQixFQUFXLEVBQUU7SUFDeEUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLEtBQUs7S0FBRTtJQUM5QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQyxJQUFJLENBQUMsYUFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUFFLE9BQU8sS0FBSztTQUFFO0tBQ3pDO0lBQ0QsT0FBTyxJQUFJO0FBQ2IsQ0FBQztBQUVZLHVCQUFlLEdBQUcsQ0FBQyxDQUFnQixFQUFFLENBQWdCLEVBQVUsRUFBRTtJQUM1RSxNQUFNLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFDakIsTUFBTSxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsR0FBRyxDQUFDO0lBQ2pCLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQ2xCLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQ2xCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEMsbURBQW1EO0lBQ25ELE9BQU8sQ0FBQztBQUNWLENBQUM7QUFFWSxzQkFBYyxHQUFHLENBQUMsTUFBcUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFnQixFQUFFLENBQWdCLEVBQVUsRUFBRTtJQUN0RyxPQUFPLHVCQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxHQUFHLHVCQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RSxDQUFDO0FBRVksb0JBQVksR0FBRyxDQUFDLE9BQXNCLEVBQUUsV0FBMEIsRUFBRSxRQUF1QixFQUFXLEVBQUU7SUFDbkgsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPO0lBQ3hCLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsV0FBVztJQUM1QixNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVE7SUFDdEIsTUFBTSxTQUFTLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7SUFDMUQscUhBQXFIO0lBQ3JILE9BQU8sU0FBUztBQUNsQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUZELDhHQUF1RTtBQUd2RSx3R0FBNkM7QUFFN0MsOEZBQW9EO0FBRXBELE1BQWEsU0FBUztJQUVwQixZQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUQ5QixVQUFLLEdBQWEsU0FBUyxDQUFDO1FBR3BCLDBCQUFxQixHQUFnQixJQUFJLHlCQUFXLEVBQUUsQ0FBQztJQUY3QixDQUFDO0lBSW5DLGNBQWMsQ0FBQyxLQUFnQjtRQUM3QixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQjthQUNoRCxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbkQsSUFBSSxDQUFDLDhCQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxtQ0FBbUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbEQsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUN4RCxDQUFDO1FBQ0osTUFBTSxTQUFTLEdBQUcsYUFBYSxFQUFDLGNBQWM7UUFDOUMsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFnQjtRQUN0Qix5Q0FBeUM7UUFDekMsNkRBQTZEO1FBQzdELE1BQU0sYUFBYSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDO2FBQ3JELE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV0RCxJQUFJLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLE1BQU0sWUFBWSxHQUFHLGFBQWE7aUJBQy9CLElBQUksQ0FBQyw4QkFBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDVixPQUFPLG1DQUFtQixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztxQkFDNUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDcEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0QsQ0FBQyxDQUFDO1lBQ0osSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLE1BQU0sUUFBUSxHQUFHLG1DQUFtQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztxQkFDL0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDcEMsSUFBSSxDQUFDLDhCQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDcEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pELElBQUksUUFBUSxFQUFFO29CQUNaLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQzdDLE1BQU0saUJBQWlCLEdBQUcsUUFBUTtvQkFDbEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQztpQkFDNUQ7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVLLE9BQU8sQ0FBQyxLQUFnQjs7WUFDNUIsTUFBTSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyw2QkFBaUIsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQy9ELENBQUM7S0FBQTtDQUNGO0FBbkRELDhCQW1EQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RERCw4R0FBa0Q7QUFDbEQsd0dBQTZDO0FBQzdDLDhGQUE2RDtBQUU3RCxNQUFhLElBQUk7SUFJZixrRUFBa0U7SUFFbEUsWUFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFMOUIsVUFBSyxHQUFhLFNBQVMsQ0FBQztRQUVwQiwwQkFBcUIsR0FBZ0IsSUFBSSx5QkFBVyxFQUFFLENBQUM7SUFHOUIsQ0FBQztJQUVsQyxJQUFJLHdCQUF3QjtRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQzlELENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FDN0MsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELElBQUksaUJBQWlCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRTtRQUMxQyxpRUFBaUU7SUFDckUsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFnQjtRQUM3QixNQUFNLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1RixNQUFNLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2xGLHdHQUF3RztRQUN4RyxPQUFPLFNBQVMsSUFBSSxRQUFRO0lBQzlCLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBZ0I7UUFDdEIsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsMkJBQWU7UUFDeEUsa0dBQWtHO1FBQ2xHLE1BQU0sMEJBQTBCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sR0FBRyxDQUFDO1FBQzNFLElBQUksa0JBQWtCLElBQUksMEJBQTBCLEVBQUU7WUFDcEQsTUFBTSw2QkFBNkIsR0FBRyxJQUFJLENBQUMsd0JBQXdCO2lCQUNoRSxJQUFJLENBQUMsOEJBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3RCxJQUFJLDZCQUE2QixFQUFFO2dCQUNqQyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDO2dCQUM3RCxPQUFPO29CQUNMLGNBQWMsRUFBRSw2QkFBNkI7b0JBQzdDLGlCQUFpQixFQUFFLDZCQUE2QjtvQkFDaEQsVUFBVSxFQUFFLGFBQWE7aUJBQzFCO2FBQ0Y7U0FDRjthQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLHNDQUFzQztZQUNsRixpQ0FBaUM7WUFDakMsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjtpQkFDekMsSUFBSSxDQUFDLDhCQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0QsSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLGdEQUFnRDtnQkFDaEQsT0FBTztvQkFDTCxjQUFjLEVBQUUsYUFBYTtvQkFDN0IsaUJBQWlCLEVBQUUsYUFBYTtvQkFDaEMsVUFBVSxFQUFFLFlBQVk7aUJBQ3pCO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFSyxPQUFPLENBQUMsS0FBZ0I7O1lBQzVCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssYUFBYSxFQUFFO2dCQUMzQyxNQUFNLEVBQUUsY0FBYyxFQUFFLEdBQUcsS0FBSyxDQUFDLElBQUk7Z0JBQ3JDLE1BQU0sV0FBVyxHQUFHLDJCQUFlLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTTtnQkFDakUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDO2dCQUM5RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMvQixLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUNoQztnQkFDRCxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQzthQUNsRDtpQkFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLFlBQVksRUFBRTtnQkFDakQsTUFBTSxFQUFFLGNBQWMsRUFBRSxHQUFHLEtBQUssQ0FBQyxJQUFJO2dCQUNyQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGNBQWMsQ0FBQyxLQUFLLFNBQVM7b0JBQzVFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGNBQWMsQ0FBQztnQkFDdkQsTUFBTSx1QkFBdUIsR0FBRyxxQkFBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsY0FBYyxDQUFDO2dCQUNoRyxJQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTTtnQkFDdkUsSUFBSSxhQUFhLEdBQUcsdUJBQXVCLEVBQUU7b0JBQzNDLGFBQWEsR0FBRyx1QkFBdUI7aUJBQ3hDO2dCQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3RDLE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7b0JBQ3JFLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBRyxhQUFhLENBQUM7aUJBQy9FO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsYUFBYSxDQUFDO2dCQUM1RCxvREFBb0Q7YUFDckQ7UUFDSCxDQUFDO0tBQUE7Q0FFRjtBQXRGRCxvQkFzRkM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRlksWUFBSSxHQUFHLENBQUksR0FBRyxLQUFVLEVBQUssRUFBRTtJQUN4QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4RCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDdkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hZLGVBQU8sR0FBRyxDQUFJLEdBQUcsR0FBUSxFQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FoRixZQUFJLEdBQW9DLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzlELElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7UUFBRSxPQUFPLEdBQUc7S0FBRTtJQUNuQyxNQUFNLEtBQUssR0FBRyxFQUFFO0lBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDMUIsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkI7SUFDRCxPQUFPLEtBQUs7QUFDZCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNQRCxnR0FBa0Q7QUFDbEQsb0ZBQXVDO0FBQ3ZDLG1HQUFpRDtBQUNqRCwyR0FBMEM7QUFFMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRWpDLE1BQU0sUUFBUSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO0FBQ3RDLE1BQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hDLFFBQVEsQ0FBQyxlQUFlLEdBQUcsaUJBQUssQ0FBQyxPQUFPLENBQUMsY0FBYztBQUNkLEVBQUUsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUMsdUJBQXVCO0FBQzVFLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRTNCLE1BQU0sTUFBTSxHQUFHLElBQUksa0JBQU0sRUFBRSxDQUFDO0FBQzVCLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxJQUFJO0FBQ2hDLEtBQUssTUFBTSxHQUFHLElBQUkscUJBQVMsRUFBRTtJQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUFFO0FBQ25FLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXMgKi9cclxuaW1wb3J0IHsgRW5naW5lLCBEaXNwbGF5TW9kZSwgTG9hZGVyIH0gZnJvbSAnZXhjYWxpYnVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGcmVlaG9sZEVuZ2luZSBleHRlbmRzIEVuZ2luZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7IGRpc3BsYXlNb2RlOiBEaXNwbGF5TW9kZS5GdWxsU2NyZWVuIH0pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnQobG9hZGVyOiBMb2FkZXIpIHsgcmV0dXJuIHN1cGVyLnN0YXJ0KGxvYWRlcikgfVxyXG59XHJcbiIsImltcG9ydCB7IFNjZW5lLCBWZWN0b3IsIEFjdG9yLCBDb2xvciwgSW5wdXQsIExhYmVsLCBUcmFpdHMgfSBmcm9tIFwiZXhjYWxpYnVyXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9tb2RlbHMvR2FtZVwiO1xyXG5pbXBvcnQgeyBXb3JsZCB9IGZyb20gXCIuL21vZGVscy9Xb3JsZFwiO1xyXG5pbXBvcnQgeyBEaW1lbnNpb25zLCBXb3JsZFBvc2l0aW9uIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgQ0VMTF9TSVpFLCBXT1JMRF9ESU1TIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEZyZWVob2xkRW5naW5lIH0gZnJvbSBcIi4uL0ZyZWVob2xkRW5naW5lXCI7XHJcbmltcG9ydCB7IHBvcyB9IGZyb20gXCIuL21vZGVscy9Xb3JsZFBvc2l0aW9uXCI7XHJcbmltcG9ydCB7IERyYWcgfSBmcm9tIFwiLi9tb2RlbHMvRHJhZ1wiO1xyXG5pbXBvcnQgeyBTaW5nbGVDZWxsQm94IH0gZnJvbSBcIi4vYWN0b3JzL1NpbmdsZUNlbGxCb3hcIjtcclxuaW1wb3J0IHsgWm9uZVZpZXcgfSBmcm9tIFwiLi9hY3RvcnMvWm9uZVZpZXdcIjtcclxuXHJcbnR5cGUgQWN0aW9uID0gJ2N1dCcgfCAnYnVpbGQnIHwgJ2NyZWF0ZS16b25lJyB8ICdkZWxldGUtem9uZScgfCAnaW5zcGVjdCdcclxuZXhwb3J0IGNsYXNzIFBsYXkgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgZ2FtZTogR2FtZVxyXG4gIGN1cnNvcjogU2luZ2xlQ2VsbEJveFxyXG4gIGN1cnNvcldvcmxkUG9zOiBXb3JsZFBvc2l0aW9uID0gcG9zKC0xLC0xKVxyXG4gIGRyYWc/OiBEcmFnXHJcbiAgZHJhZ0VudmVsb3BlOiBBY3RvclxyXG4gIGN1cnJlbnRBY3Rpb246IEFjdGlvbiA9ICdjdXQnXHJcblxyXG4gIGxhYmVsOiBMYWJlbFxyXG4gIHJlZ2lvblZpZXc6IFpvbmVWaWV3XHJcblxyXG4gIGxhc3RNb3VzZUJ1dHRvbjogSW5wdXQuUG9pbnRlckJ1dHRvblxyXG5cclxuICBwYW5PcmlnaW46IFZlY3RvclxyXG4gIHBhbm5pbmc6IGJvb2xlYW5cclxuXHJcbiAgb25Jbml0aWFsaXplKGVuZ2luZTogRnJlZWhvbGRFbmdpbmUpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMuYmFja1xyXG4gICAgY29uc29sZS5sb2coXCJQbGF5Lm9uSW5pdGlhbGl6ZVwiKVxyXG5cclxuICAgIGNvbnN0IHdvcmxkID0gbmV3IFdvcmxkKFdPUkxEX0RJTVMpIC8vWzYwLDQwXSBhcyBEaW1lbnNpb25zKTtcclxuICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKHdvcmxkKVxyXG4gICAgdGhpcy5nYW1lLnNldHVwKClcclxuXHJcbiAgICAvLyB0aGlzLmFkZCh0aGlzLmdhbWUudGVycmFpbilcclxuICAgIHRoaXMuYWRkKHRoaXMuZ2FtZS52ZWdldGF0aW9uKVxyXG4gICAgdGhpcy5hZGQodGhpcy5nYW1lLnJhd01hdGVyaWFscylcclxuICAgIHRoaXMuYWRkKHRoaXMuZ2FtZS5zaWdpbHMpXHJcblxyXG4gICAgdGhpcy5sYWJlbCA9IG5ldyBMYWJlbChcIi4uLlwiLCAyMCwgMjApXHJcbiAgICB0aGlzLmxhYmVsLmNvbG9yID0gQ29sb3IuV2hpdGVcclxuICAgIC8vIHRoaXMubGFiZWwuXHJcbiAgICAgICAgLy8gdGhpcy5sYWJlbC50cmFpdHMgPSB0aGlzLmxhYmVsLnRyYWl0cy5maWx0ZXIodHJhaXQgPT4gISh0cmFpdCBpbnN0YW5jZW9mIFRyYWl0cy5PZmZzY3JlZW5DdWxsaW5nKSlcclxuXHJcbiAgICB0aGlzLmFkZCh0aGlzLmxhYmVsKVxyXG4gICAgdGhpcy5zZXRBY3Rpb24oJ2N1dCcpXHJcblxyXG4gICAgdGhpcy5yZWdpb25WaWV3ID0gbmV3IFpvbmVWaWV3KHRoaXMuZ2FtZSwgdGhpcy5jYW1lcmEpXHJcbiAgICB0aGlzLmFkZCh0aGlzLnJlZ2lvblZpZXcpXHJcblxyXG4gICAgdGhpcy5jYW1lcmEucG9zID1cclxuICAgICAgbmV3IFZlY3Rvcih3b3JsZC5wYXduc1swXS5wb3NbMF0gKiBDRUxMX1NJWkUsIHdvcmxkLnBhd25zWzBdLnBvc1sxXSAqIENFTExfU0laRSk7XHJcblxyXG4gICAgY29uc3QgbW91c2UgPSBlbmdpbmUuaW5wdXQucG9pbnRlcnMucHJpbWFyeVxyXG4gICAgbW91c2Uub24oJ21vdmUnLCAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZUN1cnNvclBvc2l0aW9uKGUucG9zKVxyXG4gICAgICBpZiAodGhpcy5sYXN0TW91c2VCdXR0b24gPT09IElucHV0LlBvaW50ZXJCdXR0b24uTWlkZGxlKSB7XHJcbiAgICAgICAgLy8gcGFuIGNhbWVyYVxyXG4gICAgICAgIGlmICh0aGlzLnBhbm5pbmcpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwid291bGQgcGFuLi4uXCIpXHJcbiAgICAgICAgICAvLyBjb25zdCBwYW5WZWMgPSB0aGlzLnBhbk9yaWdpbi5zdWIobW91c2UubGFzdFdvcmxkUG9zKVxyXG4gICAgICAgICAgLy8gdGhpcy5jYW1lcmEudmVsID0gcGFuVmVjIC8vKHBhblZlYy5uZWdhdGUoKSlcclxuICAgICAgICAgIC8vIHRoaXMucGFuT3JpZ2luLnN1YkVxdWFsKG1vdXNlLmxhc3RXb3JsZFBvcylcclxuICAgICAgICAgIC8vIHRoaXMucGFuT3JpZ2luID0gcGFuVmVjLmFkZChtb3VzZS5sYXN0V29ybGRQb3MpIC8vdGhpcy5jYW1lcmEucG9zLmFkZChwYW5WZWMpXHJcbiAgICAgICAgICB0aGlzLmNhbWVyYS5wb3MuYWRkRXF1YWwoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYW5PcmlnaW4uc3ViKCBtb3VzZS5sYXN0V29ybGRQb3MpICAvL2UucG9zKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNhbWVyYS52ZWwgPSBuZXcgVmVjdG9yKDAsMClcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gcG9zc2libGUgaGFuZGxlIGRyYWdcclxuICAgICAgICBjb25zdCBlbmZvcmNlTGluZXMgPSB0aGlzLmN1cnJlbnRBY3Rpb24gPT09ICdidWlsZCdcclxuICAgICAgICB0aGlzLmhhbmRsZUxlZnREcmFnKG1vdXNlLCBlbmZvcmNlTGluZXMpXHJcbiAgICAgIH0vLy5SaWdodCkge31cclxuICAgICAgLy8gdGhpcy5oYW5kbGVEcmFnKG1vdXNlKVxyXG4gICAgfSlcclxuICAgIG1vdXNlLm9uKCd1cCcsIChlKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmxhc3RNb3VzZUJ1dHRvbiA9PSBJbnB1dC5Qb2ludGVyQnV0dG9uLkxlZnQpIHtcclxuICAgICAgICBjb25zdCBlbmZvcmNlTGluZXMgPSB0aGlzLmN1cnJlbnRBY3Rpb24gPT09ICdidWlsZCdcclxuICAgICAgICAvLyB0aGlzLmhhbmRsZURyYWcobW91c2UsIGVuZm9yY2VMaW5lcylcclxuICAgICAgICBjb25zdCB7IGlzRmluaXNoZWQgfSA9IHRoaXMuaGFuZGxlTGVmdERyYWcobW91c2UsIGVuZm9yY2VMaW5lcylcclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLT4gRHJhZyBmaW5pc2hlZD9cIiwgaXNGaW5pc2hlZClcclxuICAgICAgICBpZihpc0ZpbmlzaGVkKSB7IHJldHVybiB0aGlzLmFwcGx5Q3VycmVudEFjdGlvblRvRHJhZ0FyZWEoKSB9XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5sYXN0TW91c2VCdXR0b24gPT09IElucHV0LlBvaW50ZXJCdXR0b24uTWlkZGxlKSB7XHJcbiAgICAgICAgdGhpcy5wYW5uaW5nID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIG1vdXNlLm9uKCdkb3duJywgKGUpID0+IHtcclxuICAgICAgdGhpcy5sYXN0TW91c2VCdXR0b24gPSBlLmJ1dHRvblxyXG4gICAgICBpZiAoZS5idXR0b24gPT0gSW5wdXQuUG9pbnRlckJ1dHRvbi5MZWZ0KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0+IE1vdXNlIGRvd24gKGxlZnQtY2xpY2spIGF0IFwiICsgdGhpcy5jdXJzb3JXb3JsZFBvcylcclxuXHJcbiAgICAgICAgLy8gaWYgKCFtb3VzZS5pc0RyYWdTdGFydCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmN1cnJlbnRBY3Rpb24gPT09ICdjdXQnICYmICFtb3VzZS5pc0RyYWdTdGFydCkge1xyXG4gICAgICAgICAgLy8gdGhpcy5nYW1lLm1hcmtUcmVlKHRoaXMuY3Vyc29yV29ybGRQb3MpXHJcbiAgICAgICAgLy8gfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRBY3Rpb24gPT09ICdjcmVhdGUtem9uZScpIHtcclxuICAgICAgICAgIC8vIHRoaXMuZ2FtZS5kZWNsYXJlWm9uZSh0aGlzLmN1cnNvcldvcmxkUG9zLCB0aGlzLmN1cnNvcldvcmxkUG9zKVxyXG4gICAgICAgIC8vIH0gZWxzZSBcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50QWN0aW9uID09PSAnZGVsZXRlLXpvbmUnKSB7XHJcbiAgICAgICAgICB0aGlzLmdhbWUuZGVsZXRlWm9uZUF0KHRoaXMuY3Vyc29yV29ybGRQb3MpXHJcbiAgICAgICAgICAvLyAgIC8vIH1cclxuICAgICAgICB9IC8vZWxzZSB7XHJcbiAgICAgICAgLy8gaGFuZGxlIGRyYWcgYmVnaW4/XHJcbiAgICAgICAgY29uc3QgZW5mb3JjZUxpbmVzID0gdGhpcy5jdXJyZW50QWN0aW9uID09PSAnYnVpbGQnXHJcbiAgICAgICAgdGhpcy5oYW5kbGVMZWZ0RHJhZyhtb3VzZSwgZW5mb3JjZUxpbmVzKVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSBlbHNlIGlmIChlLmJ1dHRvbiA9PSBJbnB1dC5Qb2ludGVyQnV0dG9uLk1pZGRsZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tPiB3b3VsZCBzdGFydCBwYW4gYXQuLi5cIilcclxuICAgICAgICB0aGlzLnBhbk9yaWdpbiA9IG1vdXNlLmxhc3RXb3JsZFBvc1xyXG4gICAgICAgIHRoaXMucGFubmluZyA9IHRydWVcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHRoaXMuY3Vyc29yID0gbmV3IFNpbmdsZUNlbGxCb3goKVxyXG4gICAgdGhpcy5hZGQodGhpcy5jdXJzb3IpXHJcblxyXG4gICAgdGhpcy5kcmFnRW52ZWxvcGUgPSBuZXcgQWN0b3IoeyBjb2xvcjogQ29sb3IuR3JheSwgb3BhY2l0eTogMC4zLCBhbmNob3I6IG5ldyBWZWN0b3IoMCwgMCkgfSlcclxuICAgIHRoaXMuYWRkKHRoaXMuZHJhZ0VudmVsb3BlKVxyXG5cclxuICAgIHRoaXMuZ2FtZS5wYXduVG9rZW5zLmZvckVhY2gocGF3blRva2VuID0+IHRoaXMuYWRkKHBhd25Ub2tlbikpXHJcbiAgfVxyXG5cclxuICBzZXRBY3Rpb24oYWN0aW9uOiBBY3Rpb24pOiB2b2lkIHtcclxuICAgIHRoaXMubGFiZWwudGV4dCA9IFwiYWN0aW9uOiBcIiArIGFjdGlvblxyXG4gICAgdGhpcy5jdXJyZW50QWN0aW9uID0gYWN0aW9uXHJcbiAgfVxyXG5cclxuICB1cGRhdGVDdXJzb3JQb3NpdGlvbihwb3NpdGlvbjogVmVjdG9yKTogdm9pZCB7XHJcbiAgICB0aGlzLmN1cnNvcldvcmxkUG9zID0gcG9zKFxyXG4gICAgICBNYXRoLmZsb29yKHBvc2l0aW9uLnggLyBDRUxMX1NJWkUpLCAvLyArIDEsXHJcbiAgICAgIE1hdGguZmxvb3IocG9zaXRpb24ueSAvIENFTExfU0laRSksIC8vICsgMSxcclxuICAgIClcclxuXHJcbiAgICB0aGlzLmN1cnNvci5wb3MgPSBuZXcgVmVjdG9yKFxyXG4gICAgICB0aGlzLmN1cnNvcldvcmxkUG9zWzBdICogQ0VMTF9TSVpFLFxyXG4gICAgICB0aGlzLmN1cnNvcldvcmxkUG9zWzFdICogQ0VMTF9TSVpFLFxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgb25QcmVVcGRhdGUoZW5naW5lOiBGcmVlaG9sZEVuZ2luZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZ2FtZSkgeyB0aGlzLmdhbWUudXBkYXRlKCkgfVxyXG5cclxuICAgIGNvbnN0IGtleXMgPSBlbmdpbmUuaW5wdXQua2V5Ym9hcmRcclxuICAgIGlmIChrZXlzLmlzSGVsZChJbnB1dC5LZXlzLkIpKSB7XHJcbiAgICAgIHRoaXMuc2V0QWN0aW9uKCdidWlsZCcpXHJcbiAgICB9IGVsc2UgaWYgKGtleXMuaXNIZWxkKElucHV0LktleXMuQykpIHtcclxuICAgICAgdGhpcy5zZXRBY3Rpb24oJ2N1dCcpXHJcbiAgICB9IGVsc2UgaWYgKGtleXMuaXNIZWxkKElucHV0LktleXMuWikpIHtcclxuICAgICAgdGhpcy5zZXRBY3Rpb24oJ2NyZWF0ZS16b25lJylcclxuICAgIH0gZWxzZSBpZiAoa2V5cy5pc0hlbGQoSW5wdXQuS2V5cy5EKSkge1xyXG4gICAgICB0aGlzLnNldEFjdGlvbignZGVsZXRlLXpvbmUnKVxyXG4gICAgfSBlbHNlIGlmIChrZXlzLmlzSGVsZChJbnB1dC5LZXlzLkVzYykpIHtcclxuICAgICAgdGhpcy5zZXRBY3Rpb24oJ2luc3BlY3QnKVxyXG4gICAgICB0aGlzLmRyYWcgPSBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcHBseUN1cnJlbnRBY3Rpb25Ub0RyYWdBcmVhKCk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coXCItLS0+IEFwcGx5IGN1cnJlbnQgYWN0aW9uIHRvIGRyYWcgYXJlYS4uLlwiKVxyXG4gICAgLy8gaWYgKCF0aGlzLmRyYWcub3JpZ2luKSB7IHJldHVybiB9IC8vIGhtbVxyXG4gICAgLy9jb25zdCBtb3VzZSA9IGVuZ2luZS5pbnB1dC5wb2ludGVycy5wcmltYXJ5XHJcbiAgICAvLy8vIGlmIChtb3VzZS4pXHJcbiAgICAvLy8vIGRyYWdnYWJsZSBhY3Rpb25zLi4uXHJcbiAgICAvLy8vIGlmIChtb3VzZS4pXHJcbiAgICAvL2lmICh0aGlzLmN1cnJlbnRBY3Rpb24gPT09ICdjdXQnIHx8IHRoaXMuY3VycmVudEFjdGlvbiA9PT0gJ2NyZWF0ZS16b25lJyB8fCB0aGlzLmN1cnJlbnRBY3Rpb24gPT09ICdidWlsZCcpIHtcclxuICAgIC8vICBjb25zdCBlbmZvcmNlTGluZXMgPSB0aGlzLmN1cnJlbnRBY3Rpb24gPT09ICdidWlsZCdcclxuICAgIC8vICBjb25zdCB7IGlzRmluaXNoZWQgfSA9IHRoaXMuaGFuZGxlRHJhZyhtb3VzZSwgZW5mb3JjZUxpbmVzKVxyXG4gICAgLy8gIGlmIChpc0ZpbmlzaGVkKSB7XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhcIj09PT0gRFJBRyBDT01QTEVURSA9PT09XCIpXHJcbiAgICAgICBjb25zdCBbb3JpZ2luWCwgb3JpZ2luWV0gPSB0aGlzLmRyYWcubWluaW1hXHJcbiAgICAgLy8gIGNvbnNvbGUubG9nKFwiLS0tPiBEcmFnIHJlZ2lvbjogYmVnaW5zIGF0IFwiICsgb3JpZ2luWCArIFwiLFwiICsgb3JpZ2luWSlcclxuICAgICAgY29uc3QgW2Rlc3RYLCBkZXN0WV0gPSB0aGlzLmRyYWcubWF4aW1hXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ3VycmVudCBhY3Rpb24gaXMgXCIgKyB0aGlzLmN1cnJlbnRBY3Rpb24pXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRHJhZyBhcmVhIGlzIGZyb20gXCIgKyBvcmlnaW5YICsgXCIsXCIgKyBvcmlnaW5ZICsgXCIgdG8gXCIgKyBkZXN0WCArIFwiLCBcIiArIGRlc3RZKVxyXG4gICAgICAgaWYgKHRoaXMuY3VycmVudEFjdGlvbiA9PT0gJ2N1dCcpIHtcclxuICAgICAgICAgY29uc29sZS5sb2coXCItLS0+IEN1dCB0aW1iZXIgZnJvbSBcIiArIG9yaWdpblggKyBcIixcIiArIG9yaWdpblkgKyBcIiB0byBcIiArIGRlc3RYICsgXCIsIFwiICsgZGVzdFkpXHJcbiAgICAgICAgIGZvciAobGV0IHggPSBvcmlnaW5YOyB4IDw9IGRlc3RYOyB4KyspIHtcclxuICAgICAgICAgICBmb3IgKGxldCB5ID0gb3JpZ2luWTsgeSA8PSBkZXN0WTsgeSsrKSB7XHJcbiAgICAgICAgICAgICB0aGlzLmdhbWUubWFya1RyZWUocG9zKHgsIHkpKVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRBY3Rpb24gPT09ICdjcmVhdGUtem9uZScpIHtcclxuICAgICAgICAgdGhpcy5nYW1lLmRlY2xhcmVab25lKHBvcyhvcmlnaW5YLCBvcmlnaW5ZKSwgcG9zKGRlc3RYLCBkZXN0WSkpXHJcbiAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudEFjdGlvbiA9PT0gJ2J1aWxkJykge1xyXG4gICAgICAgICB0aGlzLmdhbWUucGxhbldhbGwocG9zKG9yaWdpblgsIG9yaWdpblkpLCBwb3MoZGVzdFgsIGRlc3RZKSlcclxuICAgICAgIH1cclxuIFxyXG4gICAgLy8gIH1cclxuICAgIC8vfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVMZWZ0RHJhZyhtb3VzZTogSW5wdXQuUG9pbnRlciwgZW5mb3JjZUxpbmVzOiBib29sZWFuKTogeyBpc0ZpbmlzaGVkOiBib29sZWFuIH0ge1xyXG4gICAgbGV0IGlzRmluaXNoZWQgPSBmYWxzZVxyXG4gICAgaWYgKG1vdXNlLmlzRHJhZ1N0YXJ0KSB7XHJcbiAgICAgIHRoaXMuZHJhZyA9IG5ldyBEcmFnKHRoaXMuY3Vyc29yV29ybGRQb3MsIGVuZm9yY2VMaW5lcylcclxuICAgIH0gZWxzZSBpZiAobW91c2UuaXNEcmFnRW5kKSB7XHJcbiAgICAgIHRoaXMuZHJhZ0VudmVsb3BlLnZpc2libGUgPSBmYWxzZVxyXG4gICAgICBpc0ZpbmlzaGVkPSB0cnVlXHJcbiAgICB9IGVsc2UgaWYgKG1vdXNlLmlzRHJhZ2dpbmcpIHtcclxuICAgICAgdGhpcy5kcmFnLmNvbnRpbnVlKHRoaXMuY3Vyc29yV29ybGRQb3MpXHJcbiAgICAgIGNvbnN0IFtvcmlnaW5YLCBvcmlnaW5ZXSA9IHRoaXMuZHJhZy5taW5pbWFcclxuICAgICAgIGNvbnN0IFtkZXN0WCwgZGVzdFldID0gdGhpcy5kcmFnLm1heGltYVxyXG4gICAgICB0aGlzLmRyYWdFbnZlbG9wZS5wb3MgPSBuZXcgVmVjdG9yKFxyXG4gICAgICAgIChvcmlnaW5YICogQ0VMTF9TSVpFKSwgLy8gKyAxLFxyXG4gICAgICAgIChvcmlnaW5ZICogQ0VMTF9TSVpFKSwgLy8gKyAxLFxyXG4gICAgICApXHJcbiAgICAgIHRoaXMuZHJhZ0VudmVsb3BlLndpZHRoID0gKGRlc3RYIC0gb3JpZ2luWCArIDEpICogQ0VMTF9TSVpFXHJcbiAgICAgIHRoaXMuZHJhZ0VudmVsb3BlLmhlaWdodCA9IChkZXN0WSAtIG9yaWdpblkgKyAxKSAqIENFTExfU0laRVxyXG4gICAgICB0aGlzLmRyYWdFbnZlbG9wZS52aXNpYmxlID0gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy8gfVxyXG4gICAgICByZXR1cm4geyBpc0ZpbmlzaGVkfVxyXG4gIH1cclxufSIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXMgKi9cclxuXHJcbmltcG9ydCB7IFRleHR1cmUsIFNwcml0ZVNoZWV0IH0gZnJvbSBcImV4Y2FsaWJ1clwiXHJcbmltcG9ydCB7IENFTExfU0laRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiXHJcblxyXG5jb25zdCB0ZXJyYWluID0gcmVxdWlyZSgnLi9pbWFnZXMvdGVycmFpbi5wbmcnKVxyXG5jb25zdCB0cmVlcyA9IHJlcXVpcmUoJy4vaW1hZ2VzL3RyZWVzLnBuZycpXHJcbmNvbnN0IGljb25zID0gcmVxdWlyZSgnLi9pbWFnZXMvaWNvbnMucG5nJylcclxuY29uc3QgbWF0dGVyID0gcmVxdWlyZSgnLi9pbWFnZXMvbWF0dGVyLnBuZycpXHJcbmNvbnN0IHN0cnVjdHVyZSA9IHJlcXVpcmUoJy4vaW1hZ2VzL3N0cnVjdHVyZS5wbmcnKVxyXG5cclxuY29uc3QgUmVzb3VyY2VzID0ge1xyXG4gIFRlcnJhaW46IG5ldyBUZXh0dXJlKHRlcnJhaW4pLFxyXG4gIFRyZWVzOiBuZXcgVGV4dHVyZSh0cmVlcyksXHJcbiAgTWF0dGVyOiBuZXcgVGV4dHVyZShtYXR0ZXIpLFxyXG4gIEljb25zOiBuZXcgVGV4dHVyZShpY29ucyksXHJcbiAgU3RydWN0dXJlOiBuZXcgVGV4dHVyZShzdHJ1Y3R1cmUpLFxyXG59XHJcblxyXG5jb25zdCBzeiA9IENFTExfU0laRVxyXG5jb25zdCBTcHJpdGVTaGVldHMgPSB7XHJcbiAgVGVycmFpbjogbmV3IFNwcml0ZVNoZWV0KFJlc291cmNlcy5UZXJyYWluLCA0LCA0LCBzeiwgc3opLFxyXG4gIFRyZWVzOiBuZXcgU3ByaXRlU2hlZXQoUmVzb3VyY2VzLlRyZWVzLCA0LCA0LCBzeiwgc3opLFxyXG4gIE1hdHRlcjogbmV3IFNwcml0ZVNoZWV0KFJlc291cmNlcy5NYXR0ZXIsIDQsIDQsIHN6LCBzeiksXHJcbiAgSWNvbnM6IG5ldyBTcHJpdGVTaGVldChSZXNvdXJjZXMuSWNvbnMsIDQsIDQsIHN6LCBzeiksXHJcbiAgU3RydWN0dXJlOiBuZXcgU3ByaXRlU2hlZXQoUmVzb3VyY2VzLlN0cnVjdHVyZSwgNCwgNCwgc3osIHN6KSxcclxufVxyXG5cclxuZXhwb3J0IHsgUmVzb3VyY2VzLCBTcHJpdGVTaGVldHMgfSIsImltcG9ydCB7IEFjdG9yLCBDb2xvciwgVmVjdG9yIH0gZnJvbSBcImV4Y2FsaWJ1clwiO1xyXG5pbXBvcnQgeyBDRUxMX1NJWkUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFBhd24sIFdvcmxkUG9zaXRpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgcGljayB9IGZyb20gXCIuLi91dGlsL3BpY2tcIjtcclxuaW1wb3J0IHsgU2hhcGVzIH0gZnJvbSBcIi4uL2NhbnZhcy9TaGFwZXNcIjtcclxuaW1wb3J0IHsgSUFjdGl2aXR5IH0gZnJvbSBcIi4uL21vZGVscy9JQWN0aXZpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXduVG9rZW4gZXh0ZW5kcyBBY3RvciB7XHJcbiAgcHJpb3JpdHkoYTogSUFjdGl2aXR5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXduLnByaW9yaXRpZXMuaW5kZXhPZihhLnRpdGxlKVxyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgfVxyXG4gIG1vdmluZyA9IGZhbHNlO1xyXG4gIGludGVyYWN0aW5nID0gZmFsc2U7XHJcbiAgcGF0aDogV29ybGRQb3NpdGlvbltdID0gW11cclxuICBzdGF0aWMgc3BlZWQgPSAxMjhcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHBhd246IFBhd24pIHtcclxuICAgIHN1cGVyKHtcclxuICAgICAgd2lkdGg6IENFTExfU0laRSxcclxuICAgICAgaGVpZ2h0OiBDRUxMX1NJWkUsXHJcbiAgICAgIGNvbG9yOiBwaWNrKENvbG9yLkJsdWUsIENvbG9yLlJlZCwgQ29sb3IuR3JlZW4sIENvbG9yLlllbGxvdywgQ29sb3IuQ2hhcnRyZXVzZSwgQ29sb3IuTWFnZW50YSksXHJcbiAgICAgIC8vIG9wYWNpdHk6IDAuNSxcclxuICAgICAgYW5jaG9yOiBuZXcgVmVjdG9yKDAuNSwgMC41KSxcclxuICAgICAgcG9zOiBuZXcgVmVjdG9yKHBhd24ucG9zWzBdICogQ0VMTF9TSVpFLCBwYXduLnBvc1sxXSAqIENFTExfU0laRSksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNraW4gPSBDb2xvci5PcmFuZ2UuY2xvbmUoKS5saWdodGVuKDAuNSlcclxuICBnZXQgc2hpcnQoKTogQ29sb3IgeyByZXR1cm4gdGhpcy5jb2xvci5jbG9uZSgpLmRhcmtlbigwLjUpIH1cclxuICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XHJcbiAgICBsZXQge3gsIHl9ID0gdGhpcy5wb3M7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmJ1xyXG5cclxuICAgIGNvbnN0IHRleHRMZW5ndGggPWN0eC5tZWFzdXJlVGV4dCh0aGlzLnBhd24ubmFtZSkud2lkdGhcclxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnBhd24ubmFtZSwgeCAtIHRleHRMZW5ndGgvMiArIENFTExfU0laRS8yLCB5IC0gOClcclxuXHJcbiAgICB4ICs9IENFTExfU0laRS8yXHJcbiAgICB5ICs9IENFTExfU0laRS8yXHJcbiAgICBTaGFwZXMuZWxsaXBzZShjdHgsXHJcbiAgICAgIHgsIHksIC8vICsgQ0VMTF9TSVpFLzQsXHJcbiAgICAgIDIqQ0VMTF9TSVpFLzgsIDIqQ0VMTF9TSVpFLzUsXHJcbiAgICAgIHRoaXMuc2hpcnQpXHJcblxyXG4gICAgU2hhcGVzLmVsbGlwc2UoY3R4LFxyXG4gICAgICB4LCB5IC0gQ0VMTF9TSVpFLzIsXHJcbiAgICAgIENFTExfU0laRS81LCBDRUxMX1NJWkUvNSxcclxuICAgICAgdGhpcy5za2luKVxyXG4gIH1cclxufSIsImltcG9ydCB7IFZlY3RvciwgQWN0b3IsIENvbG9yIH0gZnJvbSBcImV4Y2FsaWJ1clwiO1xyXG5pbXBvcnQgeyBDRUxMX1NJWkUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmV4cG9ydCBjbGFzcyBTaW5nbGVDZWxsQm94IGV4dGVuZHMgQWN0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICBjb2xvcjogQ29sb3IuR3JheSxcclxuICAgICAgd2lkdGg6IENFTExfU0laRSxcclxuICAgICAgaGVpZ2h0OiBDRUxMX1NJWkUsXHJcbiAgICAgIGFuY2hvcjogbmV3IFZlY3RvcigwLCAwKSxcclxuICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvciwgQWN0b3IsIENhbWVyYSwgQ29sb3IsIFRyYWl0cyB9IGZyb20gXCJleGNhbGlidXJcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9tb2RlbHMvR2FtZVwiO1xyXG5pbXBvcnQgeyBDRUxMX1NJWkUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHBvcyB9IGZyb20gXCIuLi9tb2RlbHMvV29ybGRQb3NpdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgWm9uZVZpZXcgZXh0ZW5kcyBBY3RvciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnYW1lOiBHYW1lLCBwcml2YXRlIGNhbWVyYTogQ2FtZXJhKSB7XHJcbiAgICBzdXBlcih7IHBvczogbmV3IFZlY3RvcigwLCAwKSB9KTtcclxuICAgIHRoaXMudHJhaXRzID0gdGhpcy50cmFpdHMuZmlsdGVyKHRyYWl0ID0+ICEodHJhaXQgaW5zdGFuY2VvZiBUcmFpdHMuT2Zmc2NyZWVuQ3VsbGluZykpXHJcbiAgfVxyXG5cclxuICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XHJcbiAgICB0aGlzLmdhbWUuem9uZXMuZm9yRWFjaCh6b25lID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJEcmF3IHpvbmUgXCIgKyB6b25lKVxyXG4gICAgICBjb25zdCBbeDAsIHkwXSA9IHpvbmUudG9wTGVmdDtcclxuICAgICAgY29uc3QgW3gxLCB5MV0gPSB6b25lLmJvdHRvbVJpZ2h0O1xyXG5cclxuICAgICAgdGhpcy5ncmlkQWxpZ25lZFJlY3QoY3R4LCB4MCwgeTAsIHgxLCB5MSwgem9uZS5jb2xvcilcclxuXHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZidcclxuICAgICAgZm9yIChsZXQgeD14MDsgeDw9eDE7IHgrKykge1xyXG4gICAgICAgIGZvciAobGV0IHk9eTA7IHk8PXkxOyB5KyspIHtcclxuICAgICAgICAgIGNvbnN0IGNvdW50ID0gdGhpcy5nYW1lLnJhd01hdGVyaWFsQ291bnRBdExvY2F0aW9uKHBvcyh4LHkpKVxyXG4gICAgICAgICAgY3R4LmZpbGxUZXh0KFwieFwiICsgY291bnQsIHgqQ0VMTF9TSVpFICsgQ0VMTF9TSVpFLzIsIHkqQ0VMTF9TSVpFICsgQ0VMTF9TSVpFKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdyaWRBbGlnbmVkUmVjdChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDA6IG51bWJlciwgeTA6IG51bWJlciwgeDE6IG51bWJlciwgeTE6IG51bWJlciwgY29sb3I6IENvbG9yKSB7XHJcblxyXG4gICAgICBjb25zdCB4ID0geDAgKiBDRUxMX1NJWkU7IC8vKyB0aGlzLmNhbWVyYS54XHJcbiAgICAgIGNvbnN0IHkgPSB5MCAqIENFTExfU0laRTsgLy8rIHRoaXMuY2FtZXJhLnlcclxuICAgICAgY29uc3QgdyA9ICh4MSAtIHgwICsgMSkgKiBDRUxMX1NJWkU7XHJcbiAgICAgIGNvbnN0IGggPSAoeTEgLSB5MCArIDEpICogQ0VMTF9TSVpFO1xyXG5cclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yLnRvUkdCQSgpO1xyXG4gICAgICBjdHguZmlsbFJlY3QoeCwgeSwgdywgaCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbG9yIH0gZnJvbSBcImV4Y2FsaWJ1clwiXHJcblxyXG5leHBvcnQgY2xhc3MgU2hhcGVzIHtcclxuICBzdGF0aWMgZWxsaXBzZShjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1c1g6IG51bWJlciwgcmFkaXVzWTogbnVtYmVyLCBjb2xvcjogQ29sb3IpOiB2b2lkIHtcclxuICAgIGN0eC5iZWdpblBhdGgoKVxyXG4gICAgY3R4LmVsbGlwc2UoeCwgeSwgcmFkaXVzWCwgcmFkaXVzWSwwLDAsMipNYXRoLlBJKVxyXG4gICAgY3R4LmNsb3NlUGF0aCgpXHJcblxyXG4gICAgLy8gY29uc3Qgb2xkU3R5bGUgPSBjdHguZmlsbFN0eWxlXHJcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3IudG9SR0JBKClcclxuICAgIGN0eC5maWxsKClcclxuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBvbGRTdHlsZVxyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBEaW1lbnNpb25zLCBMYW5ndWFnZSB9IGZyb20gXCIuL3R5cGVzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBDRUxMX1NJWkUgPSAxNlxyXG5cclxuZXhwb3J0IGNvbnN0IExBTkRfSU1BR0VTICA9IFswLDEsMiwzXVxyXG5leHBvcnQgY29uc3QgV0FURVJfSU1BR0VTID0gWzQsNSw2LDddXHJcblxyXG5leHBvcnQgY29uc3QgVFJFRV9JTUFHRVMgPSBbMCwxXVxyXG5cclxuZXhwb3J0IGNvbnN0IFdPT0RfU1RBQ0tfSU1BR0VTID0gWzBdXHJcbmV4cG9ydCBjb25zdCBXT09EX1BJRUNFX0lNQUdFUyA9IFs0XVxyXG4vLyBleHBvcnQgY29uc3QgSVJPTl9TVEFDS19JTUFHRVMgPSBbMV1cclxuLy8gZXhwb3J0IGNvbnN0IElST05fUElFQ0UgPSBbNV1cclxuXHJcbmV4cG9ydCBjb25zdCBNQVRFUklBTF9JTUFHRVMgPSB7XHJcbiAgJ3dvb2QnOiBXT09EX1BJRUNFX0lNQUdFUyxcclxufVxyXG5leHBvcnQgY29uc3QgTUFURVJJQUxfU1RBQ0tfSU1BR0VTID0ge1xyXG4gICd3b29kJzogV09PRF9TVEFDS19JTUFHRVMsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTSUdJTF9BWEUgPSAxXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IGNvbnN0IElOVkVOVE9SWV9MSU1JVCA9IDNcclxuZXhwb3J0IGNvbnN0IFNUQUNLX01BWCA9IDUwXHJcblxyXG5leHBvcnQgY29uc3QgVFJFRV9DVVRfRFVSQVRJT04gPSA1MFxyXG5cclxuZXhwb3J0IGNvbnN0IElOSVRJQUxfUEFXTl9DT1VOVCA9IDhcclxuZXhwb3J0IGNvbnN0IFdPUkxEX0RJTVMgPSBbMjYwLDI0MF0gYXMgRGltZW5zaW9uc1xyXG5leHBvcnQgY29uc3QgVFJFRV9DT1ZFUl9SQVRJTyA9IDAuNVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmV4cG9ydCBjb25zdCBEV0FSVkVOX0xBTkdVQUdFOiBMYW5ndWFnZSA9IHtcclxuICBuYW1lOiAnRHdhcnZpc2gnLFxyXG4gIC8vIHByZWZpeGVzOiBbJ0FyJyxdLFxyXG4gIHN0ZW1zOiBbXHJcbiAgICAnQXphZ2gnLFxyXG4gICAgJ0JhbCcsICdCaWYnLCAnQm9mJywgJ0JvbWInLCAnQm9ybicsXHJcbiAgICAnRCcsICdEb3InLCAnRHVyJywnRHdhbCcsXHJcbiAgICAnRnInLCAnRmFyJywgJ0Z1bmQnLCAnRnJlcicsICdGbCcsICdGaWwnLFxyXG4gICAgJ0dpbWwnLCAnR2FtJywgJ0dyJywgJ0dsJywgJ0d3YWloJyxcclxuICAgICdJYicsXHJcbiAgICAnS2lsJywgJ0toJyxcclxuICAgICdMb24nLCAnTGFuZHJvdicsXHJcbiAgICAnTScsICdNZW5lbGQnLFxyXG4gICAgJ04nLCAnTmEnLCAnTm9yJywgJ05hcnYnLFxyXG4gICAgJ08nLFxyXG4gICAgJ1RlbGNoJywgJ1Rob3InLCAnVGhyJywgJ1RoJ1xyXG4gIF0sXHJcbiAgc3VmZml4ZXM6IFsnaW4nLCAnaXMnLCAnaScsICd1bicsICdpbScsICdvcicsICdlcmluJywgJ2FyJywgJ2FpbicsICdhbCddLFxyXG59XHJcblxyXG4vLyBleHBvcnQgY29uc3QgRUxWRU5fTEFOR1VBR0U6IExhbmd1YWdlID0ge1xyXG4vLyAgIG5hbWU6ICdFbHZpc2gnLFxyXG4vLyAgIHN0ZW1zXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBjb25zdCBOQU1FX0lOSVRJQUxfU1lMTEFCTEVTID0gW1xyXG4gIFwiQWRyYWhcIiwgXCJBbWFuZFwiLCBcIkFyYXRoXCIsIFwiQXJnZWxcIiwgXCJBdGFuYXRcIiwgXCJBcnZlbFwiLCBcIkFyYWdcIiwgXCJBZGVsXCIsIFwiQWxhdFwiLCBcIkFsY2FyXCIsIFwiQWxkYXJcIiwgXCJBbGdcIiwgXCJBbWV0aFwiLFxyXG4gICAgXCJBbWFyXCIsIFwiQW1kXCIsIFwiQW1hclwiLCBcIkFsZlwiLCBcIkFlclwiLCBcIkJyZWdcIixcclxuICBcIkJcIiwgXCJCZWxcIiwgXCJCZWxlY3RoXCIsIFwiQm9yb21cIiwgXCJCbGFuY1wiLCBcIkJlbGVwaFwiLCBcIkJyZWdcIiwgXCJCcmlmZlwiLCBcIkJyeXR0XCIsIFwiQnVjY1wiLCBcIkJ1bmdcIixcclxuICBcIkNhbG1cIiwgXCJDYXN0YW1cIiwgXCJDZWxlYlwiLCBcIkNlbGFuZFwiLCBcIkNhbGltZWh0XCIsIFwiQ2FyYW50aFwiLCBcIkNlbGVnXCIsIFwiQ2VsZXBoXCIsXHJcbiAgXCJEYVwiLCBcIkRpXCIsIFwiRGFpc1wiLCBcIkR1clwiLCBcIkRlbmV0aFwiLCBcIkRvclwiLCBcIkR1ZFwiLFxyXG4gIFwiRWFyZW5cIiwgXCJFY3RoZWxcIiwgXCJFZ2FsbVwiLCBcIkVsZGFjXCIsIFwiRWRyYWhcIiwgXCJFYXJ3XCIsIFwiRWxnYW50XCIsIFwiRWxhblwiLCBcIkVsYXRcIiwgXCJFcmVuZFwiLFxyXG4gIFwiRmFzdHJcIiwgXCJGYXJcIiwgXCJGaWxpYlwiLCBcIkZlYW5cIixcclxuICBcIkdsb1wiLCBcIkdpbGRcIiwgXCJHZWxtXCIsIFwiR2FsZFwiLCBcIkdsb3JmaW5kXCIsIFwiR290aG1cIiwgXCJHcmlmZlwiLCBcIkdyaW1cIiwgXCJHcmltYlwiLCBcIkdyaXRoblwiLCBcIkdyXCIsXHJcbiAgXCJIXCIsIFwiSGFtXCIsIFwiSHVyXCIsIFwiSHVnXCIsIFwiSGFsZnJcIiwgXCJIYWxkXCIsIFwiSGFyZFwiLCBcIkhvbG1cIiwgXCJIaWxkXCIsIFwiSGlyXCIsIFwiSGVyaWJcIiwgXCJIaXJnXCIsIFwiSGlybFwiLCBcIkhvYnNcIiwgXCJIb2xmXCIsXHJcbiAgXCJJXCIsIFwiSXJpbVwiLCBcIklzZW5nclwiLCBcIklzdW1iclwiLCBcIklzaWxtXCIsIFwiSXZvcndcIiwgXCJJdlwiLFxyXG4gIFwiSmFnXCIsIFwiSmVzc2FtXCIsXHJcbiAgXCJLaGFtXCIsIFwiS2hcIiwgXCJLaWxcIixcclxuICBcIkxcIiwgXCJMaWxcIiwgXCJMYWdcIiwgXCJMYWxcIiwgXCJMYW5kcm92XCIsIFwiTGFyZ1wiLCBcIkxhdXJcIiwgXCJMYXZlbmRcIiwgXCJMZW53XCIsIFwiTGVcIiwgXCJMb3JnXCIsIFwiTG90aFwiLCBcIkx1dGhcIixcclxuICBcIk1hZFwiLCBcIk1hZWRoclwiLCBcIk1hZ2xcIiwgXCJNYWxcIiwgXCJNYWh0XCIsIFwiTWFpclwiLCBcIk1hbGFuXCIsIFwiTWFsdlwiLCBcIk1hcm1hZFwiLCBcIk1lbFwiLCBcIk1pbmFzXCIsXHJcbiAgICBcIk1hYmxcIiwgXCJNb3JcIiwgXCJNaXJcIiwgXHJcbiAgXCJOYWhcIiwgXCJOYWxcIiwgXCJOYXJ2XCIsIFwiTmFyXCIsXHJcbiAgXCJPcmd1bFwiLCBcIk9yXCIsIFwiT3JvcGhcIiwgXCJPc3NcIiwgXHJcbiAgXCJQYWxhbnRcIiwgXCJQYWxsYW5kXCIsIFwiUGFuc1wiLCBcIlBlbGVuZFwiLCBcIlBlbmdvbFwiLCBcIlBlcmVnclwiLCBcIlByaW1yXCIsXHJcbiAgXCJSXCIsIFwiUnVtXCIsIFwiUmVnaW5cIiwgXCJSb3NcIiwgXCJSb3dcIiwgXCJSdWZcIixcclxuICBcIlNcIiwgXCJTYWRcIiwgXCJTYWVyXCIsIFwiU2FrYWx0aFwiLCBcIlNuYWdcIiwgXCJTYXVyXCIsIFwiU3VyXCIsIFwiU29yb250XCIsXHJcbiAgXCJUXCIsIFwiVGhvclwiLCBcIlR1clwiLCBcIlRhcm9uZFwiLCBcIlRoYXJcIiwgXCJUdXJnXCIsICBcIlRhbnRcIiwgXCJUdWxrXCIsIFwiVHVyYW1iXCIsXHJcbiAgXCJVZmZcIiwgXCJVZ2xcIiwgXCJVZnRoXCIsIFwiVWxyXCIsIFwiVWx3XCIsXHJcbiAgXCJWYWxhbmRcIiwgXCJWb3JvbndcIiwgXCJWYW5cIiwgXCJWYW5pbWVsZFwiLFxyXG4gIFwiV2lsaWJcIiwgXCJXaWxjb21cIixcclxuICBcIllhdlwiLFxyXG4gIFwiWmFtXCIsIFwiWmlyXCIsIFwiWmltcmFoXCIsIFwiWmltcmF0aFwiXHJcbiAgLy8gXCJCZW9cIiwgXCJHcm9uXCIsIFwiU2FtXCIsIFwiVGltXCIsXHJcbiAgLy8gXCJHaW1cIiwgXCJHbG9cIiwgXCJFbFwiLCBcIkZpXCIsIFwiRmFzdFwiLFxyXG4gIC8vIFwiRmVhXCIsIFwiRmFyYVwiLCBcIkJhcmFcIiwgXCJCb3JvXCIsIFwiSHVyXCIsXHJcbiAgLy8gXCJUdXJcIiwgXCJJc2lsZFwiLCBcIkJpbGJcIiwgXCJFYXJlblwiLCBcIkJlcmVcIixcclxuICAvLyBcIkRpXCIsIFwiQmVsZVwiLCBcIkNhbG1hY1wiLCBcIkRhXCIsIFwiQXJ2ZWxcIiwgXCJGYXN0clwiLFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgTkFNRV9GSU5BTF9TWUxMQUJMRVMgPSBbXHJcbiAgXCJhZFwiLCBcImFtXCIsIFwiYXNcIiwgXCJhc3RcIiwgXCJhcmRcIiwgXCJhblwiLCBcImFudGhcIiwgXCJhclwiLCBcImFyblwiLCBcImFjaWxcIiwgXCJhZG9jXCIsIFwiYWtoXCIsIFwiYWxkXCIsIFwiYW5kXCIsIFwiYWxcIiwgXCJhY2hcIiwgXCJhcnRoXCIsXHJcbiAgXCJlXCIsIFwiZWdcIiwgXCJlZFwiLCBcImVuXCIsIFwiZXJ0XCIsXHJcbiAgXCJpXCIsIFwiaW1cIiwgXCJpblwiLCBcImlyXCIsIFwiaWxcIiwgXCJpY2hcIiwgXCJpb25cIiwgXCJpZWxcIiwgXCJpYW5cIiwgXCJpZVwiLCBcImlkYVwiLCBcImlhblwiLCBcImluZVwiLCBcImltYm9yXCIsIFwiaW5kb3JcIiwgXCJpbHlcIixcclxuICBcIm9cIiwgXCJvbVwiLCBcIm9uXCIsIFwib3JcIiwgXCJvcm5cIiwgXCJvdGhcIiwgXCJvYlwiLCBcIm9nXCIsIFwib3NlXCIsIFwib2xhc1wiLCBcIm9ybVwiLCBcIm9kaFwiLFxyXG4gIFwidXJcIiwgXCJ1bmdcIiwgXCJ1bmRcIiwgXCJ1bGFzXCIsIFwidWluXCIsIFwidXNcIixcclxuICBcInlcIiwgXCJ5c3RcIixcclxuICAvL1wiblwiLCBcImxpXCIsIFwid2VsbFwiLCBcIndpc2VcIiwgXCJzeVwiLCBcImtpblwiLFxyXG4gIC8vXCJzb25cIiwgXCJub3JcIiwgXCJpY2hcIiwgXCJ3dWxmXCIsIFwiaW5cIiwgXCJpbVwiLFxyXG4gIC8vXCJkdXJcIiwgXCJncmltXCIsIFwiaGlsXCIsIFwiZGlsXCIsIFwicmVkXCIsIFwiYm9cIixcclxuICAvL1wibWlyXCIsIFwiaWxcIiwgXCJvclwiLCBcInVyXCJcclxuXSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjJkODU0OGEwOGM1NzgzNWIyMDE5OTE2MzRmNDhjYTJjLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJlMTRhZDg2M2Y3NmY2MGQ3Njc1M2NjNTVlOTI5N2RiLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImJjYmQ2Y2IzNTY2YWVjMGQxNWYxMmZiNTk5Yjg1YzMwLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImMwMjU1ZDlkNjJkODljNWY4ZWM2MDI5ZTRjYzY0NWVkLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImIzNTU2ODkyNDg3OWViYmVhOTM5ODE4OTkzNTNiNjI5LnBuZ1wiOyIsImltcG9ydCB7IFRlcnJhaW4sIFdvcmxkUG9zaXRpb24sIERpbWVuc2lvbnMsIFZlZ2V0YXRpb24sIFNpZ2lsLCBNYXRlcmlhbCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIi4vR3JpZFwiO1xyXG5pbXBvcnQgeyBwb3MsIGJ5RGlzdGFuY2VGcm9tIH0gZnJvbSBcIi4vV29ybGRQb3NpdGlvblwiO1xyXG5pbXBvcnQgeyBwaWNrIH0gZnJvbSBcIi4uL3V0aWwvcGlja1wiO1xyXG5pbXBvcnQgeyBTaW1wbGVHcmlkIH0gZnJvbSBcIi4vU2ltcGxlR3JpZFwiO1xyXG5pbXBvcnQgeyB0YWtlIH0gZnJvbSBcIi4uL3V0aWwvdGFrZVwiO1xyXG5pbXBvcnQgeyBUUkVFX0NPVkVSX1JBVElPIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5cclxuLy8gdHlwZSBNYXR0ZXIgPSB7IGtpbmQ6IE1hdGVyaWFsLCBhbW91bnQ6IG51bWJlciB9XHJcbmV4cG9ydCBjbGFzcyBDYXJ0b2dyYW0ge1xyXG4gIHRlcnJhaW46IEdyaWQ8VGVycmFpbj5cclxuICB2ZWdldGF0aW9uOiBHcmlkPFZlZ2V0YXRpb24+XHJcblxyXG4gIHJhd01hdGVyaWFsOiBHcmlkPE1hdGVyaWFsPlxyXG4gIHJhd01hdGVyaWFsQ291bnQ6IFNpbXBsZUdyaWQ8bnVtYmVyPlxyXG4gIFxyXG4gIHNpZ2lsczogR3JpZDxTaWdpbD5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaW1zOiBEaW1lbnNpb25zKSB7XHJcbiAgICB0aGlzLnRlcnJhaW4gPSBuZXcgR3JpZDxUZXJyYWluPihkaW1zLCBbJ2xhbmQnLCAnd2F0ZXInXSlcclxuICAgIHRoaXMudmVnZXRhdGlvbiA9IG5ldyBHcmlkPFZlZ2V0YXRpb24+KGRpbXMsIFsnbm90aGluZycsICdncmFzcycsICdmbG93ZXInLCAndHJlZSddKVxyXG4gICAgdGhpcy5yYXdNYXRlcmlhbCA9IG5ldyBHcmlkPE1hdGVyaWFsPihkaW1zLCBbICdub3RoaW5nJywgJ3dvb2QnIF0pXHJcbiAgICB0aGlzLnJhd01hdGVyaWFsQ291bnQgPSBuZXcgU2ltcGxlR3JpZDxudW1iZXI+KDApXHJcbiAgICB0aGlzLnNpZ2lscyA9IG5ldyBHcmlkPFNpZ2lsPihkaW1zLCBbJ25vdGhpbmcnLCAnYXhlJ10pXHJcblxyXG4gICAgdGhpcy50ZXJyYWluLmZpbGwoJ2xhbmQnKVxyXG4gICAgdGhpcy52ZWdldGF0aW9uLmZpbGwoJ25vdGhpbmcnKVxyXG4gICAgdGhpcy52ZWdldGF0aW9uLmRpc3RyaWJ1dGVSYW5kb21seSgndHJlZScsIFRSRUVfQ09WRVJfUkFUSU8pXHJcbiAgICB0aGlzLnJhd01hdGVyaWFsLmZpbGwoJ25vdGhpbmcnKVxyXG4gICAgdGhpcy5zaWdpbHMuZmlsbCgnbm90aGluZycpXHJcbiAgfVxyXG5cclxuICBnZXQgd2lkdGgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuZGltc1swXSB9XHJcbiAgZ2V0IGhlaWdodCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5kaW1zWzFdIH1cclxuXHJcbiAgZ2V0IGNlbnRlcigpOiBXb3JsZFBvc2l0aW9uIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHRoaXMuZGltc1swXSAvIDIsXHJcbiAgICAgIHRoaXMuZGltc1sxXSAvIDJcclxuICAgIF0gYXMgV29ybGRQb3NpdGlvblxyXG4gIH1cclxuXHJcbiAgcGlja1JhbmRvbUNsZWFyTG9jYXRpb24oKTogV29ybGRQb3NpdGlvbiB7XHJcbiAgICBjb25zdCBsb2NhdGlvbnM6IFdvcmxkUG9zaXRpb25bXSA9IFtdXHJcbiAgICBmb3IgKGxldCB5PTA7IHk8dGhpcy5oZWlnaHQ7IHkrKykge1xyXG4gICAgICBmb3IgKGxldCB4PTA7IHg8dGhpcy53aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmVnZXRhdGlvbi5hdChwb3MoeCx5KSkgIT09ICd0cmVlJykge1xyXG4gICAgICAgICAgbG9jYXRpb25zLnB1c2gocG9zKHgseSkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGljayguLi5sb2NhdGlvbnMpXHJcbiAgfVxyXG5cclxuICBwaWNrQ2xlYXJMb2NhdGlvbnMobjogbnVtYmVyLCBuZWFyUG9pbnQ6IFdvcmxkUG9zaXRpb24gPSB0aGlzLmNlbnRlcik6IFdvcmxkUG9zaXRpb25bXSB7XHJcbiAgICBjb25zdCBsb2NhdGlvbnM6IFdvcmxkUG9zaXRpb25bXSA9IFtdXHJcbiAgICBmb3IgKGxldCB5PTA7IHk8dGhpcy5oZWlnaHQ7IHkrKykge1xyXG4gICAgICBmb3IgKGxldCB4PTA7IHg8dGhpcy53aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmVnZXRhdGlvbi5hdChwb3MoeCx5KSkgIT09ICd0cmVlJykge1xyXG4gICAgICAgICAgbG9jYXRpb25zLnB1c2gocG9zKHgseSkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFrZShuLCBsb2NhdGlvbnMuc29ydChieURpc3RhbmNlRnJvbShuZWFyUG9pbnQpKSlcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBEaW1lbnNpb25zLCBXb3JsZFBvc2l0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IHBvcyB9IGZyb20gXCIuL1dvcmxkUG9zaXRpb25cIjtcclxuZXhwb3J0IGNsYXNzIERyYWcge1xyXG4gIG9yaWdpbjogV29ybGRQb3NpdGlvbjtcclxuICBwcml2YXRlIGRlc3Q6IFdvcmxkUG9zaXRpb247XHJcbiAgZXh0ZW50OiBEaW1lbnNpb25zO1xyXG5cclxuICBnZXQgZGVzdGluYXRpb24oKTogV29ybGRQb3NpdGlvbiB7IHJldHVybiB0aGlzLmRlc3QgfHwgdGhpcy5vcmlnaW4gfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogV29ybGRQb3NpdGlvbiwgcHJpdmF0ZSBmb3JjZUxpbmVzOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIHRoaXMub3JpZ2luID0gcG9zaXRpb247XHJcbiAgfVxyXG4gIGNvbnRpbnVlKHBvc2l0aW9uOiBXb3JsZFBvc2l0aW9uKTogdm9pZCB7XHJcbiAgICBjb25zdCBvZmZzZXRYID0gMDsgLy9wb3NpdGlvblswXSA+IHRoaXMub3JpZ2luWzBdID8gMCA6IDE7XHJcbiAgICBjb25zdCBvZmZzZXRZID0gMDsgLy9wb3NpdGlvblsxXSA+IHRoaXMub3JpZ2luWzFdID8gMCA6IDE7XHJcbiAgICB0aGlzLmRlc3QgPSBwb3MocG9zaXRpb25bMF0gLSBvZmZzZXRYLCBwb3NpdGlvblsxXSAtIG9mZnNldFkpO1xyXG4gICAgdGhpcy5leHRlbnQgPSBbXHJcbiAgICAgIHRoaXMuZGVzdFswXSAtIHRoaXMub3JpZ2luWzBdLFxyXG4gICAgICB0aGlzLmRlc3RbMV0gLSB0aGlzLm9yaWdpblsxXVxyXG4gICAgXSBhcyBEaW1lbnNpb25zO1xyXG4gICAgaWYgKHRoaXMuZm9yY2VMaW5lcykge1xyXG4gICAgICBpZiAoTWF0aC5hYnModGhpcy5leHRlbnRbMF0pID4gTWF0aC5hYnModGhpcy5leHRlbnRbMV0pKSB7XHJcbiAgICAgICAgdGhpcy5kZXN0WzFdID0gdGhpcy5vcmlnaW5bMV1cclxuICAgICAgICAvLyB0aGlzLmV4dGVudFsxXSA9IDBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmRlc3RbMF0gPSB0aGlzLm9yaWdpblswXVxyXG4gICAgICAgIC8vIHRoaXMuZXh0ZW50WzBdID0gMFxyXG4gICAgICB9XHJcbiAgICAgIC8vdGhpcy5leHRlbnQgPSBbXHJcbiAgICAgIC8vICB0aGlzLmRlc3RpbmF0aW9uWzBdIC0gdGhpcy5vcmlnaW5bMF0sXHJcbiAgICAgIC8vICB0aGlzLmRlc3RpbmF0aW9uWzFdIC0gdGhpcy5vcmlnaW5bMV1cclxuICAgICAgLy9dIGFzIERpbWVuc2lvbnM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbWluaW1hKCk6IFdvcmxkUG9zaXRpb24ge1xyXG4gICAgY29uc3QgbWluaW1hWCA9IE1hdGgubWluKHRoaXMub3JpZ2luWzBdLCB0aGlzLmRlc3RpbmF0aW9uWzBdKTtcclxuICAgIGNvbnN0IG1pbmltYVkgPSBNYXRoLm1pbih0aGlzLm9yaWdpblsxXSwgdGhpcy5kZXN0aW5hdGlvblsxXSk7XHJcbiAgICAvLyBjb25zdCBtaW5pbWFYID0gTWF0aC5taW4odGhpcy5vcmlnaW5bMF0sIHRoaXMub3JpZ2luWzBdICsgdGhpcy5leHRlbnRbMF0pO1xyXG4gICAgLy8gY29uc3QgbWluaW1hWSA9IE1hdGgubWluKHRoaXMub3JpZ2luWzFdLCB0aGlzLm9yaWdpblsxXSArIHRoaXMuZXh0ZW50WzFdKTtcclxuICAgIHJldHVybiBwb3MobWluaW1hWCwgbWluaW1hWSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbWF4aW1hKCk6IFdvcmxkUG9zaXRpb24ge1xyXG4gICAgY29uc3QgbWF4aW1hWCA9IE1hdGgubWF4KHRoaXMub3JpZ2luWzBdLCB0aGlzLmRlc3RpbmF0aW9uWzBdKTtcclxuICAgIGNvbnN0IG1heGltYVkgPSBNYXRoLm1heCh0aGlzLm9yaWdpblsxXSwgdGhpcy5kZXN0aW5hdGlvblsxXSk7XHJcbiAgICAvLyBjb25zdCBtYXhpbWFYID0gTWF0aC5tYXgodGhpcy5vcmlnaW5bMF0sIHRoaXMub3JpZ2luWzBdICsgdGhpcy5leHRlbnRbMF0pO1xyXG4gICAgLy8gY29uc3QgbWF4aW1hWSA9IE1hdGgubWF4KHRoaXMub3JpZ2luWzFdLCB0aGlzLm9yaWdpblsxXSArIHRoaXMuZXh0ZW50WzFdKTtcclxuICAgIHJldHVybiBwb3MobWF4aW1hWCwgbWF4aW1hWSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFdvcmxkIH0gZnJvbSBcIi4vV29ybGRcIjtcclxuaW1wb3J0IHsgVGlsZU1hcCwgU3ByaXRlU2hlZXQsIFRpbGVTcHJpdGUsIENvbG9yIH0gZnJvbSBcImV4Y2FsaWJ1clwiO1xyXG5pbXBvcnQgeyBMQU5EX0lNQUdFUywgV0FURVJfSU1BR0VTLCBUUkVFX0lNQUdFUywgQ0VMTF9TSVpFLCBTSUdJTF9BWEUsIFdPT0RfUElFQ0VfSU1BR0VTLCBTVEFDS19NQVgsIFdPT0RfU1RBQ0tfSU1BR0VTLCBNQVRFUklBTF9JTUFHRVMsIE1BVEVSSUFMX1NUQUNLX0lNQUdFUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCIuL0dyaWRcIjtcclxuaW1wb3J0IHsgV29ybGRQb3NpdGlvbiwgRGltZW5zaW9ucywgTWF0ZXJpYWwsIEl0ZW0gfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgcGljayB9IGZyb20gXCIuLi91dGlsL3BpY2tcIjtcclxuaW1wb3J0IHsgUGF3blRva2VuIH0gZnJvbSBcIi4uL2FjdG9ycy9QYXduVG9rZW5cIjtcclxuaW1wb3J0IHsgU3ByaXRlU2hlZXRzIH0gZnJvbSBcIi4uL1Jlc291cmNlc1wiO1xyXG5pbXBvcnQgeyBwb3MsIHBvc0VxLCBhcmVhQ29udGFpbnMgfSBmcm9tIFwiLi9Xb3JsZFBvc2l0aW9uXCI7XHJcbmltcG9ydCB7IFBhd25NYW5hZ2VtZW50IH0gZnJvbSBcIi4vUGF3bk1hbmFnZW1lbnRcIjtcclxuXHJcbnR5cGUgUmVnaW9uID0geyB0b3BMZWZ0OiBXb3JsZFBvc2l0aW9uLCBib3R0b21SaWdodDogV29ybGRQb3NpdGlvbiwgY29sb3I6IENvbG9yIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lIHtcclxuICB0ZXJyYWluOiBUaWxlTWFwXHJcbiAgdmVnZXRhdGlvbjogVGlsZU1hcFxyXG4gIHJhd01hdGVyaWFsczogVGlsZU1hcFxyXG4gIHNpZ2lsczogVGlsZU1hcFxyXG4gIHpvbmVzOiBSZWdpb25bXSA9IFtdXHJcbiAgcGF3blRva2VuczogUGF3blRva2VuW11cclxuICBtYXJrZWRUcmVlUG9zaXRpb25zOiBXb3JsZFBvc2l0aW9uW10gPSBbXVxyXG4gIHBhd25NYW5hZ2VyOiBQYXduTWFuYWdlbWVudCA9IG5ldyBQYXduTWFuYWdlbWVudCh0aGlzKTtcclxuICB0aWNrcyA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd29ybGQ6IFdvcmxkKSB7IH1cclxuXHJcbiAgc2V0dXAoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0ZXJyYWluSW1hZ2VNYXAgPSB7ICdsYW5kJzogTEFORF9JTUFHRVMsICd3YXRlcic6IFdBVEVSX0lNQUdFUyB9XHJcbiAgICB0aGlzLnRlcnJhaW4gPSB0aGlzLmFzc2VtYmxlVGlsZXMoXHJcbiAgICAgICd0ZXJyYWluJyxcclxuICAgICAgU3ByaXRlU2hlZXRzLlRlcnJhaW4sXHJcbiAgICAgIHRoaXMud29ybGQudGVycmFpbixcclxuICAgICAgdGVycmFpbkltYWdlTWFwXHJcbiAgICApXHJcbiAgICAvLyB0aGlzLnRlcnJhaW4uXHJcblxyXG4gICAgY29uc3QgdmVnZXRhdGlvbkltYWdlTWFwID0geyAndHJlZSc6IFRSRUVfSU1BR0VTIH1cclxuICAgIHRoaXMudmVnZXRhdGlvbiA9IHRoaXMuYXNzZW1ibGVUaWxlcyhcclxuICAgICAgJ3ZlZ2V0YXRpb24nLCBTcHJpdGVTaGVldHMuVHJlZXMsXHJcbiAgICAgIHRoaXMud29ybGQudmVnZXRhdGlvbixcclxuICAgICAgdmVnZXRhdGlvbkltYWdlTWFwXHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgcmF3TWF0ZXJpYWxzSW1hZ2VNYXAgPSB7ICdub3RoaW5nJzogW10sICd3b29kX3BpZWNlJzogV09PRF9QSUVDRV9JTUFHRVMgfVxyXG4gICAgdGhpcy5yYXdNYXRlcmlhbHMgPSB0aGlzLmFzc2VtYmxlVGlsZXMoXHJcbiAgICAgICdtYXR0ZXInLCBTcHJpdGVTaGVldHMuTWF0dGVyLFxyXG4gICAgICB0aGlzLndvcmxkLnJhd01hdGVyaWFsLFxyXG4gICAgICByYXdNYXRlcmlhbHNJbWFnZU1hcFxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHNpZ2lsSW1hZ2VNYXAgPSB7ICdub3RoaW5nJzogW10sICdheGUnOiBbU0lHSUxfQVhFXSB9XHJcbiAgICB0aGlzLnNpZ2lscyA9IHRoaXMuYXNzZW1ibGVUaWxlcyhcclxuICAgICAgJ3NpZ2lscycsIFNwcml0ZVNoZWV0cy5JY29ucyxcclxuICAgICAgdGhpcy53b3JsZC5zaWdpbHMsXHJcbiAgICAgIHNpZ2lsSW1hZ2VNYXBcclxuICAgIClcclxuXHJcbiAgICB0aGlzLnBhd25Ub2tlbnMgPSB0aGlzLndvcmxkLnBhd25zLm1hcChwYXduID0+IG5ldyBQYXduVG9rZW4ocGF3bikpXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRpY2tzKytcclxuICAgIGZvciAoY29uc3QgdG9rZW4gb2YgdGhpcy5wYXduVG9rZW5zKSB7XHJcbiAgICAgIHRoaXMucGF3bk1hbmFnZXIudXBkYXRlUGF3bih0b2tlbilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBkaW1zKCk6IERpbWVuc2lvbnMgeyByZXR1cm4gdGhpcy53b3JsZC5kaW1lbnNpb25zIH1cclxuXHJcbiAgcmF3TWF0ZXJpYWxMb2NhdGlvbnMoa2luZDogTWF0ZXJpYWwpOiBXb3JsZFBvc2l0aW9uW10ge1xyXG4gICAgcmV0dXJuIHRoaXMud29ybGQucmF3TWF0ZXJpYWwub2NjdXBpZWRMb2NhdGlvbnMoa2luZClcclxuICB9XHJcblxyXG4gIHJhd01hdGVyaWFsS2luZEF0TG9jYXRpb24obG9jYXRpb246IFdvcmxkUG9zaXRpb24pOiBNYXRlcmlhbCB7XHJcbiAgICByZXR1cm4gdGhpcy53b3JsZC5yYXdNYXRlcmlhbC5hdChsb2NhdGlvbilcclxuICB9XHJcblxyXG4gIHJhd01hdGVyaWFsQ291bnRBdExvY2F0aW9uKGxvY2F0aW9uOiBXb3JsZFBvc2l0aW9uKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLndvcmxkLnJhd01hdGVyaWFsQ291bnQuYXQobG9jYXRpb24pXHJcbiAgfVxyXG5cclxuICBpc0Jsb2NrZWQocG9zaXRpb246IFdvcmxkUG9zaXRpb24pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLndvcmxkLmlzQmxvY2tlZChwb3NpdGlvbilcclxuICB9XHJcblxyXG4gIGNvbXB1dGVQYXRoKHBvczogV29ybGRQb3NpdGlvbiwgZGVzdDogV29ybGRQb3NpdGlvbik6IFdvcmxkUG9zaXRpb25bXSB7XHJcbiAgICByZXR1cm4gdGhpcy53b3JsZC5zaG9ydGVzdFBhdGgocG9zLCBkZXN0KVxyXG4gIH1cclxuXHJcbiAgY2FuUGF0aEJldHdlZW4oYTogV29ybGRQb3NpdGlvbiwgYjogV29ybGRQb3NpdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHBvc0VxKGEsYikgfHwgdGhpcy5jb21wdXRlUGF0aChhLCBiKS5sZW5ndGggPiAwXHJcbiAgfVxyXG5cclxuICBtYXJrVHJlZShwb3NpdGlvbjogV29ybGRQb3NpdGlvbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5Cb3VuZHMocG9zaXRpb24pICYmIHRoaXMud29ybGQudmVnZXRhdGlvbi5hdChwb3NpdGlvbikgPT09ICd0cmVlJykge1xyXG4gICAgICB0aGlzLm1hcmtlZFRyZWVQb3NpdGlvbnMucHVzaChwb3NpdGlvbilcclxuICAgICAgY29uc3QgW3gsIHldID0gcG9zaXRpb25cclxuICAgICAgdGhpcy5zaWdpbHMuZ2V0Q2VsbCh4LCB5KS5wdXNoU3ByaXRlKG5ldyBUaWxlU3ByaXRlKCdzaWdpbHMnLCBTSUdJTF9BWEUpKVxyXG4gICAgICB0aGlzLndvcmxkLnNpZ2lscy5zZXQocG9zaXRpb24sICdheGUnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hvcFRyZWUocG9zaXRpb246IFdvcmxkUG9zaXRpb24pOiB2b2lkIHtcclxuICAgIGNvbnN0IFtheCwgYXldID0gcG9zaXRpb25cclxuICAgIHRoaXMudmVnZXRhdGlvbi5nZXRDZWxsKGF4LCBheSkuY2xlYXJTcHJpdGVzKClcclxuICAgIHRoaXMud29ybGQudmVnZXRhdGlvbi5zZXQocG9zaXRpb24sICdub3RoaW5nJylcclxuXHJcbiAgICB0aGlzLnNpZ2lscy5nZXRDZWxsKGF4LCBheSkuY2xlYXJTcHJpdGVzKClcclxuICAgIHRoaXMud29ybGQuc2lnaWxzLnNldChwb3NpdGlvbiwgJ25vdGhpbmcnKVxyXG5cclxuICAgIHRoaXMubWFya2VkVHJlZVBvc2l0aW9ucyA9IHRoaXMubWFya2VkVHJlZVBvc2l0aW9ucy5maWx0ZXIodHJlZVBvcyA9PiAhcG9zRXEodHJlZVBvcywgcG9zaXRpb24pKVxyXG5cclxuICAgIHRoaXMud29ybGQucmF3TWF0ZXJpYWwuc2V0KHBvc2l0aW9uLCAnd29vZCcpXHJcbiAgICB0aGlzLndvcmxkLnJhd01hdGVyaWFsQ291bnQuc2V0KHBvc2l0aW9uLCAxKSAvL3BpY2soMSwyLDMpKVxyXG4gICAgdGhpcy5yYXdNYXRlcmlhbHMuZ2V0Q2VsbChheCxheSkucHVzaFNwcml0ZShcclxuICAgICAgbmV3IFRpbGVTcHJpdGUoJ21hdHRlcicsIHBpY2soLi4uV09PRF9QSUVDRV9JTUFHRVMpKSlcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZ2F0aGVyUmVzb3VyY2UocG9zaXRpb246IFdvcmxkUG9zaXRpb24sIG1heFRvUmVtb3ZlOiBudW1iZXIpOiB7IGtpbmQ6IEl0ZW0sIGFtb3VudDogbnVtYmVyIH0ge1xyXG4gICAgY29uc3Qga2luZCA9IHRoaXMud29ybGQucmF3TWF0ZXJpYWwuYXQocG9zaXRpb24pXHJcbiAgICBjb25zdCBhbW91bnRBdFBvc2l0aW9uID0gdGhpcy53b3JsZC5yYXdNYXRlcmlhbENvdW50LmF0KHBvc2l0aW9uKVxyXG4gICAgY29uc3QgYW1vdW50UmVtb3ZlZCA9IE1hdGgubWluKGFtb3VudEF0UG9zaXRpb24sIG1heFRvUmVtb3ZlKVxyXG4gICAgY29uc3QgYW1vdW50UmVtYWluaW5nID0gYW1vdW50QXRQb3NpdGlvbiAtIGFtb3VudFJlbW92ZWRcclxuICAgIHRoaXMud29ybGQucmF3TWF0ZXJpYWxDb3VudC5zZXQocG9zaXRpb24sIGFtb3VudFJlbWFpbmluZylcclxuICAgIGlmIChhbW91bnRSZW1haW5pbmcgPT09IDApIHtcclxuICAgICAgdGhpcy53b3JsZC5yYXdNYXRlcmlhbC5zZXQocG9zaXRpb24sICdub3RoaW5nJylcclxuICAgIH1cclxuICAgIGNvbnN0IFtheCwgYXldID0gcG9zaXRpb25cclxuICAgIHRoaXMucmF3TWF0ZXJpYWxzLmdldENlbGwoYXgsIGF5KS5jbGVhclNwcml0ZXMoKVxyXG4gICAgaWYgKGFtb3VudFJlbWFpbmluZyA+IDApIHtcclxuICAgICAgbGV0IHNwcml0ZSA9IG5ldyBUaWxlU3ByaXRlKCdtYXR0ZXInLCBwaWNrKC4uLk1BVEVSSUFMX0lNQUdFU1traW5kXSkpXHJcbiAgICAgIGlmIChhbW91bnRSZW1haW5pbmcgPiBTVEFDS19NQVggLyAyKSB7XHJcbiAgICAgICAgc3ByaXRlID0gbmV3IFRpbGVTcHJpdGUoJ21hdHRlcicsIHBpY2soLi4uTUFURVJJQUxfU1RBQ0tfSU1BR0VTW2tpbmRdKSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJhd01hdGVyaWFscy5nZXRDZWxsKGF4LCBheSkucHVzaFNwcml0ZShzcHJpdGUpXHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBraW5kLCBhbW91bnQ6IGFtb3VudFJlbW92ZWQgfVxyXG4gIH1cclxuXHJcbiAgc3RvcmVSZXNvdXJjZShraW5kOiBNYXRlcmlhbCwgcG9zaXRpb246IFdvcmxkUG9zaXRpb24sIGFtb3VudDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAvLyB3aGF0IGtpbmQgb2YgcmVzb3VyY2UgaXMgaGVyZT8gYWRkIHRvIGl0Li4uXHJcbiAgICBjb25zdCBbYXgsIGF5XSA9IHBvc2l0aW9uXHJcblxyXG4gICAgdGhpcy53b3JsZC5yYXdNYXRlcmlhbC5zZXQocG9zaXRpb24sIGtpbmQpXHJcbiAgICBjb25zdCBjdXJyZW50Q291bnQgPSB0aGlzLndvcmxkLnJhd01hdGVyaWFsQ291bnQuYXQocG9zaXRpb24pXHJcbiAgICBjb25zdCBuZXdBbW91bnQgPSBjdXJyZW50Q291bnQgKyBhbW91bnRcclxuICAgIHRoaXMud29ybGQucmF3TWF0ZXJpYWxDb3VudC5zZXQocG9zaXRpb24sXHJcbiAgICAgIG5ld0Ftb3VudFxyXG4gICAgKVxyXG5cclxuICAgIHRoaXMucmF3TWF0ZXJpYWxzLmdldENlbGwoYXgsIGF5KS5jbGVhclNwcml0ZXMoKVxyXG4gICAgbGV0IHNwcml0ZSA9IG5ldyBUaWxlU3ByaXRlKCdtYXR0ZXInLCBwaWNrKC4uLk1BVEVSSUFMX0lNQUdFU1traW5kXSkpXHJcbiAgICBpZiAobmV3QW1vdW50ID4gU1RBQ0tfTUFYIC8gMikge1xyXG4gICAgICBzcHJpdGUgPSBuZXcgVGlsZVNwcml0ZSgnbWF0dGVyJywgcGljayguLi5NQVRFUklBTF9TVEFDS19JTUFHRVNba2luZF0pKVxyXG4gICAgfVxyXG4gICAgdGhpcy5yYXdNYXRlcmlhbHMuZ2V0Q2VsbChheCwgYXkpLnB1c2hTcHJpdGUoXHJcbiAgICAgIHNwcml0ZVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcGxhbldhbGwob3JpZ2luOiBXb3JsZFBvc2l0aW9uLCBkZXN0aW5hdGlvbjogV29ybGRQb3NpdGlvbik6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coXCItLS0+IFdvdWxkIGJ1aWxkIHdhbGwgZnJvbSBcIiArIG9yaWdpbiArIFwiIHRvIFwiICsgZGVzdGluYXRpb24pXHJcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICB9XHJcblxyXG4gIGRlY2xhcmVab25lKHRvcExlZnQ6IFdvcmxkUG9zaXRpb24sIGJvdHRvbVJpZ2h0OiBXb3JsZFBvc2l0aW9uKTogdm9pZCB7XHJcbiAgICB0b3BMZWZ0ID0gdGhpcy5lbmZvcmNlQm91bmRzKHRvcExlZnQpXHJcbiAgICBib3R0b21SaWdodCA9IHRoaXMuZW5mb3JjZUJvdW5kcyhib3R0b21SaWdodClcclxuICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKHBpY2soNjAsIDkwLCAxMjApLCBwaWNrKDYwLCA5MCwgMTIwKSwgcGljayg2MCwgOTAsIDEyMCksIDAuNSlcclxuICAgIGlmICh0b3BMZWZ0WzBdIDw9IGJvdHRvbVJpZ2h0WzBdICYmIHRvcExlZnRbMV0gPD0gYm90dG9tUmlnaHRbMV0pIHtcclxuICAgICAgY29uc29sZS5sb2coXCItLS0+IENyZWF0aW5nIHpvbmUgZnJvbSBcIiArIHRvcExlZnQgKyBcIiB0byBcIiArIGJvdHRvbVJpZ2h0KVxyXG4gICAgICB0aGlzLnpvbmVzLnB1c2goe1xyXG4gICAgICAgIHRvcExlZnQsIGJvdHRvbVJpZ2h0LCBjb2xvclxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCItLS0+IE5vdCBjcmVhdGluZyB6b25lOyB6b25lIGhhZCBubyBzaXplP1wiKVxyXG4gICAgfVxyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgfVxyXG5cclxuICBkZWxldGVab25lQXQobG9jYXRpb246IFdvcmxkUG9zaXRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuem9uZXMgPSB0aGlzLnpvbmVzLmZpbHRlcih6b25lID0+XHJcbiAgICAgICFhcmVhQ29udGFpbnMoXHJcbiAgICAgICAgcG9zKHpvbmUudG9wTGVmdFswXSwgem9uZS50b3BMZWZ0WzFdKSxcclxuICAgICAgICBwb3Moem9uZS5ib3R0b21SaWdodFswXSwgem9uZS5ib3R0b21SaWdodFsxXSksXHJcbiAgICAgICAgbG9jYXRpb25cclxuICAgICAgKVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgaXNMb2NhdGlvbldpdGhpbkFueVpvbmUobG9jYXRpb246IFdvcmxkUG9zaXRpb24pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGNvbnRhaW5pbmdab25lID0gdGhpcy56b25lcy5maW5kKHpvbmUgPT5cclxuICAgICAgYXJlYUNvbnRhaW5zKHpvbmUudG9wTGVmdCwgem9uZS5ib3R0b21SaWdodCwgbG9jYXRpb24pXHJcbiAgICApXHJcblxyXG4gICAgaWYgKGNvbnRhaW5pbmdab25lKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiLS0tPiBab25lIFwiICsgY29udGFpbmluZ1pvbmUgKyBcIiBjb250YWlucyBcIiArIGxvY2F0aW9uKVxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coXCItLS0+IE5vIHpvbmUgY29udGFpbnMgXCIgKyBsb2NhdGlvbilcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgYXJlQWxsWm9uZXNGdWxsKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuem9uZXMubGVuZ3RoID09PSAwKSB7IHJldHVybiB0cnVlIH1cclxuICAgIGZvciAoY29uc3Qgem9uZSBvZiB0aGlzLnpvbmVzKSB7XHJcbiAgICAgIGZvciAobGV0IHkgPSB6b25lLnRvcExlZnRbMV07IHkgPD0gem9uZS5ib3R0b21SaWdodFsxXTsgeSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHpvbmUudG9wTGVmdFswXTsgeCA8PSB6b25lLmJvdHRvbVJpZ2h0WzBdOyB4KyspIHtcclxuICAgICAgICAgIGlmICh0aGlzLndvcmxkLnJhd01hdGVyaWFsQ291bnQuYXQocG9zKHgseSkpIDwgU1RBQ0tfTUFYKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGZpbmRVbmZpbGxlZFpvbmVQb3NpdGlvbnMoKTogV29ybGRQb3NpdGlvbltdIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uczogV29ybGRQb3NpdGlvbltdID0gW11cclxuICAgIGZvciAoY29uc3Qgem9uZSBvZiB0aGlzLnpvbmVzKSB7XHJcbiAgICAgIGZvciAobGV0IHkgPSB6b25lLnRvcExlZnRbMV07IHkgPD0gem9uZS5ib3R0b21SaWdodFsxXTsgeSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHpvbmUudG9wTGVmdFswXTsgeCA8PSB6b25lLmJvdHRvbVJpZ2h0WzBdOyB4KyspIHtcclxuICAgICAgICAgIGlmICh0aGlzLndvcmxkLnJhd01hdGVyaWFsQ291bnQuYXQocG9zKHgseSkpIDwgU1RBQ0tfTUFYKSB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICBwb3NpdGlvbnMucHVzaChwb3MoeCx5KSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwb3NpdGlvbnM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluQm91bmRzKHBvczogV29ybGRQb3NpdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgW3gsIHldID0gcG9zXHJcbiAgICByZXR1cm4gKHggPj0gMCAmJiB5ID49IDAgJiYgeCA8IHRoaXMud29ybGQud2lkdGggJiYgeSA8IHRoaXMud29ybGQuaGVpZ2h0KVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbmZvcmNlQm91bmRzKHBvc2l0aW9uOiBXb3JsZFBvc2l0aW9uKTogV29ybGRQb3NpdGlvbiB7XHJcbiAgICBsZXQgW3gsIHldID0gcG9zaXRpb25cclxuICAgIGlmICh4IDwgMCkgeyB4ID0gMDsgfVxyXG4gICAgaWYgKHggPj0gdGhpcy53b3JsZC53aWR0aCkgeyB4ID0gdGhpcy53b3JsZC53aWR0aC0xIH1cclxuICAgIGlmICh5IDwgMCkgeyB5ID0gMDsgfVxyXG4gICAgaWYgKHkgPj0gdGhpcy53b3JsZC5oZWlnaHQpIHsgeSA9IHRoaXMud29ybGQuaGVpZ2h0LTEgfVxyXG4gICAgcmV0dXJuIHBvcyh4LHkpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzc2VtYmxlVGlsZXM8VD4oXHJcbiAgICBsYXllck5hbWU6IHN0cmluZyxcclxuICAgIHNwcml0ZXNoZWV0OiBTcHJpdGVTaGVldCxcclxuICAgIGdyaWQ6IEdyaWQ8VD4sXHJcbiAgICBpbWFnZU1hcDogeyBbdmFsdWU6IHN0cmluZ106IG51bWJlcltdIH0sXHJcbiAgKTogVGlsZU1hcCB7XHJcbiAgICBjb25zdCBtYXAgPSBuZXcgVGlsZU1hcChcclxuICAgICAgMCwgMCxcclxuICAgICAgQ0VMTF9TSVpFLCBDRUxMX1NJWkUsXHJcbiAgICAgIHRoaXMud29ybGQuaGVpZ2h0LCB0aGlzLndvcmxkLndpZHRoXHJcbiAgICApXHJcbiAgICBtYXAucmVnaXN0ZXJTcHJpdGVTaGVldChsYXllck5hbWUsIHNwcml0ZXNoZWV0KVxyXG4gICAgdGhpcy53b3JsZC5mb3JFYWNoUG9zaXRpb24oKHgsIHkpID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBncmlkLmF0KHBvcyh4LHkpKSBhcyB1bmtub3duIGFzIHN0cmluZ1xyXG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gJ25vdGhpbmcnKSB7XHJcbiAgICAgICAgY29uc3QgY2VsbCA9IG1hcC5nZXRDZWxsKHgsIHkpXHJcbiAgICAgICAgY29uc3Qgc3ByaXRlSWQgPSBwaWNrKC4uLmltYWdlTWFwW3ZhbHVlXSlcclxuICAgICAgICBjZWxsLnB1c2hTcHJpdGUobmV3IFRpbGVTcHJpdGUobGF5ZXJOYW1lLCBzcHJpdGVJZCkpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gbWFwXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgV29ybGRQb3NpdGlvbiwgRGltZW5zaW9ucyB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBwb3MgfSBmcm9tIFwiLi9Xb3JsZFBvc2l0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3JpZDxUPiB7XHJcbiAgcHJpdmF0ZSBjZWxsczogbnVtYmVyW11bXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpbXM6IERpbWVuc2lvbnMsIHByaXZhdGUgaW5kZXg6IFRbXSkgeyB9XHJcblxyXG4gIGdldCB3aWR0aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5kaW1zWzBdIH1cclxuICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmRpbXNbMV0gfVxyXG5cclxuICBwcml2YXRlIGRlcmVmZXJlbmNlKHJlZmVyZW5jZTogbnVtYmVyKTogVCB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmRleFtyZWZlcmVuY2VdXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZmVyZW5jZSh2YWx1ZTogVCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5pbmRleC5pbmRleE9mKHZhbHVlKVxyXG4gIH1cclxuXHJcbiAgYXQobG9jYXRpb246IFdvcmxkUG9zaXRpb24pOiBUIHtcclxuICAgIGNvbnN0IFt4LCB5XSA9IGxvY2F0aW9uO1xyXG4gICAgcmV0dXJuIHRoaXMuZGVyZWZlcmVuY2UodGhpcy5jZWxsc1t5XVt4XSk7XHJcbiAgfVxyXG5cclxuICBzZXQobG9jYXRpb246IFdvcmxkUG9zaXRpb24sIHZhbHVlOiBUKTogdm9pZCB7XHJcbiAgICBjb25zdCBbeCx5XSA9IGxvY2F0aW9uO1xyXG4gICAgdGhpcy5jZWxsc1t5XSA9IHRoaXMuY2VsbHNbeV0gfHwgW107XHJcbiAgICB0aGlzLmNlbGxzW3ldW3hdID0gdGhpcy5yZWZlcmVuY2UodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZm9yRWFjaFBvc2l0aW9uWFkoZm46ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy53aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgZm4oeCx5KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JFYWNoUG9zaXRpb24oZm46IChwb3NpdGlvbjogV29ybGRQb3NpdGlvbikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy53aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgZm4ocG9zKHgseSkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbGwodmFsdWU6IFQpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9yRWFjaFBvc2l0aW9uKHBvc2l0aW9uID0+IHRoaXMuc2V0KHBvc2l0aW9uLHZhbHVlKSlcclxuICB9XHJcblxyXG4gIGRpc3RyaWJ1dGVSYW5kb21seSh2YWx1ZTogVCwgcmF0ZSA9IDAuMSk6IHZvaWQge1xyXG4gICAgdGhpcy5mb3JFYWNoUG9zaXRpb24ocG9zaXRpb24gPT4ge1xyXG4gICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IHJhdGUpIHtcclxuICAgICAgICB0aGlzLnNldChwb3NpdGlvbiwgdmFsdWUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvY2N1cGllZExvY2F0aW9ucyh2YWx1ZTogVCk6IFdvcmxkUG9zaXRpb25bXSB7XHJcbiAgICBjb25zdCBvY2N1cGllZCA9IFtdXHJcbiAgICB0aGlzLmZvckVhY2hQb3NpdGlvbihwb3NpdGlvbiA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmF0KHBvc2l0aW9uKSA9PT0gdmFsdWUpIHtcclxuICAgICAgICBvY2N1cGllZC5wdXNoKHBvc2l0aW9uKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIG9jY3VwaWVkXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFdvcmxkUG9zaXRpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgcG9zRXEsIGRpc3RhbmNlQmV0d2VlbiwgbmVpZ2hib3JzT2ZQb3NpdGlvblBsdXNEaWFnb25hbHMgfSBmcm9tIFwiLi9Xb3JsZFBvc2l0aW9uXCI7XHJcbmltcG9ydCB7IFBvc2l0aW9uU2V0IH0gZnJvbSBcIi4vUG9zaXRpb25TZXRcIjtcclxuaW1wb3J0IHsgU2ltcGxlR3JpZCB9IGZyb20gXCIuL1NpbXBsZUdyaWRcIjtcclxuXHJcbnR5cGUgTmF2aWdhdGlvblJlc3VsdCA9IHsgcGF0aDogV29ybGRQb3NpdGlvbltdLCBmb3VuZDogYm9vbGVhbiB9XHJcblxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdG9yIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpbXM6IFtudW1iZXIsIG51bWJlcl0sIHByaXZhdGUgaXNCbG9ja2VkOiAocG9zaXRpb246IFdvcmxkUG9zaXRpb24pID0+IGJvb2xlYW4pIHt9XHJcblxyXG4gIGdldCB3aWR0aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5kaW1zWzBdOyB9XHJcbiAgZ2V0IGhlaWdodCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5kaW1zWzFdOyB9XHJcblxyXG4gIHByaXZhdGUgcmVjb25zdHJ1Y3RQYXRoKHByZXY6IFNpbXBsZUdyaWQ8V29ybGRQb3NpdGlvbj4sIGRlc3RpbmF0aW9uOiBXb3JsZFBvc2l0aW9uKTogV29ybGRQb3NpdGlvbltdIHtcclxuICAgIGNvbnN0IHBhdGggPSBbZGVzdGluYXRpb25dXHJcbiAgICBsZXQgY3VycmVudDogV29ybGRQb3NpdGlvbiA9IGRlc3RpbmF0aW9uXHJcbiAgICB3aGlsZSAocHJldi5hdChjdXJyZW50KSkge1xyXG4gICAgICBjdXJyZW50ID0gcHJldi5hdChjdXJyZW50KVxyXG4gICAgICBwYXRoLnVuc2hpZnQoY3VycmVudClcclxuICAgIH0gXHJcbiAgICBwYXRoLnNoaWZ0KClcclxuICAgIHJldHVybiBwYXRoXHJcbiAgfVxyXG5cclxuICBhU3Rhcihzb3VyY2U6IFdvcmxkUG9zaXRpb24sIGRlc3RpbmF0aW9uOiBXb3JsZFBvc2l0aW9uKTogTmF2aWdhdGlvblJlc3VsdCB7IFxyXG4gICAgY29uc3Qgc3RhcnRlZEF0ID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgIGNvbnN0IGZyaW5nZSA9IG5ldyBQb3NpdGlvblNldChbc291cmNlXSlcclxuICAgIGNvbnN0IHByZXYgPSBuZXcgU2ltcGxlR3JpZDxXb3JsZFBvc2l0aW9uPigpXHJcbiAgICBjb25zdCBnU2NvcmUgPSBuZXcgU2ltcGxlR3JpZDxudW1iZXI+KEluZmluaXR5KVxyXG4gICAgY29uc3QgZlNjb3JlID0gbmV3IFNpbXBsZUdyaWQ8bnVtYmVyPihJbmZpbml0eSlcclxuICAgIGNvbnN0IGJ5RlNjb3JlID0gKGE6IFdvcmxkUG9zaXRpb24sIGI6IFdvcmxkUG9zaXRpb24pID0+IHtcclxuICAgICAgY29uc3QgZGEgPSBmU2NvcmUuYXQoYSlcclxuICAgICAgY29uc3QgZGIgPSBmU2NvcmUuYXQoYilcclxuICAgICAgcmV0dXJuIGRhIDwgZGIgPyAtMSA6IDFcclxuICAgIH1cclxuICAgIGNvbnN0IGhldXJpc3RpYyA9IChhOiBXb3JsZFBvc2l0aW9uKTogbnVtYmVyID0+IGRpc3RhbmNlQmV0d2VlbihhLCBkZXN0aW5hdGlvbilcclxuICAgIGdTY29yZS5zZXQoc291cmNlLCAwKVxyXG4gICAgZlNjb3JlLnNldChzb3VyY2UsIGhldXJpc3RpYyhzb3VyY2UpKVxyXG4gICAgd2hpbGUgKCFmcmluZ2UuZW1wdHkoKSkge1xyXG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICBjb25zdCBlbGFwc2VkID0gbm93IC0gc3RhcnRlZEF0IC8vLSBub3dcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJhKiBlbGFwc2VkOiBcIiArIGVsYXBzZWQpXHJcbiAgICAgIGlmIChlbGFwc2VkID4gNTApIHsgY29uc29sZS5sb2coXCJhLXN0YXIgaGl0IHRpbWVvdXRcIik7IGJyZWFrIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGN1cnJlbnQ6IFdvcmxkUG9zaXRpb24gPSBmcmluZ2UuYXJyYXkuc29ydChieUZTY29yZSlbMF1cclxuICAgICAgaWYgKHBvc0VxKGN1cnJlbnQsIGRlc3RpbmF0aW9uKSkge1xyXG4gICAgICAgIHJldHVybiB7IHBhdGg6IHRoaXMucmVjb25zdHJ1Y3RQYXRoKHByZXYsIGN1cnJlbnQpLCBmb3VuZDogdHJ1ZSB9XHJcbiAgICAgIH1cclxuICAgICAgZnJpbmdlLmRlbGV0ZShjdXJyZW50KVxyXG4gICAgICBjb25zdCBuZWlnaGJvcnMgPSBuZWlnaGJvcnNPZlBvc2l0aW9uUGx1c0RpYWdvbmFscyhjdXJyZW50LCB0aGlzLmRpbXMpXHJcbiAgICAgIG5laWdoYm9ycy5maWx0ZXIobmVpZ2hib3IgPT4gIXRoaXMuaXNCbG9ja2VkKG5laWdoYm9yKSkuZm9yRWFjaChuZWlnaGJvciA9PiB7XHJcbiAgICAgICAgY29uc3QgdGVudGF0aXZlR1Njb3JlID0gZ1Njb3JlLmF0KGN1cnJlbnQpICsgZGlzdGFuY2VCZXR3ZWVuKGN1cnJlbnQsIG5laWdoYm9yKVxyXG4gICAgICAgIGlmICh0ZW50YXRpdmVHU2NvcmUgPCBnU2NvcmUuYXQobmVpZ2hib3IpKSB7XHJcbiAgICAgICAgICBwcmV2LnNldChuZWlnaGJvciwgY3VycmVudClcclxuICAgICAgICAgIGdTY29yZS5zZXQobmVpZ2hib3IsIHRlbnRhdGl2ZUdTY29yZSlcclxuICAgICAgICAgIGZTY29yZS5zZXQobmVpZ2hib3IsIGdTY29yZS5hdChuZWlnaGJvcikgKyBoZXVyaXN0aWMobmVpZ2hib3IpKVxyXG4gICAgICAgICAgaWYgKCFmcmluZ2UuaGFzKG5laWdoYm9yKSkge1xyXG4gICAgICAgICAgICBmcmluZ2UuYWRkKG5laWdoYm9yKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwYXRoOiBbXSwgZm91bmQ6IGZhbHNlIH1cclxuICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk5vIHBhdGggZm91bmQhXCIpXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgUGF3blRva2VuIH0gZnJvbSBcIi4uL2FjdG9ycy9QYXduVG9rZW5cIjtcclxuaW1wb3J0IHsgcG9zRXEgfSBmcm9tIFwiLi9Xb3JsZFBvc2l0aW9uXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9HYW1lXCI7XHJcbmltcG9ydCB7IFdvcmxkUG9zaXRpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgQ0VMTF9TSVpFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBJQWN0aXZpdHkgYXMgSUFjdGl2aXR5IH0gZnJvbSBcIi4vSUFjdGl2aXR5XCI7XHJcbmltcG9ydCB7IEN1dFRpbWJlciB9IGZyb20gXCIuL2FjdGl2aXRpZXMvQ3V0VGltYmVyXCI7XHJcbmltcG9ydCB7IEhhdWwgfSBmcm9tIFwiLi9hY3Rpdml0aWVzL0hhdWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXduTWFuYWdlbWVudCB7XHJcbiAgYWN0aXZpdGllczogSUFjdGl2aXR5W11cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhbWU6IEdhbWUpIHtcclxuICAgIHRoaXMuYWN0aXZpdGllcyA9IFtcclxuICAgICAgbmV3IEN1dFRpbWJlcih0aGlzLmdhbWUpLFxyXG4gICAgICBuZXcgSGF1bCh0aGlzLmdhbWUpLFxyXG4gICAgXVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZW5kUGF3blRvUG9zaXRpb24odG9rZW46IFBhd25Ub2tlbiwgcG9zaXRpb246IFdvcmxkUG9zaXRpb24pOiB2b2lkIHtcclxuICAgIGlmICghcG9zRXEodG9rZW4ucGF3bi5wb3MsIHBvc2l0aW9uKSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIi0tLT4gU2VuZCBcIiArIHRva2VuLnBhd24ubmFtZSArIFwiIHRvIFwiICsgcG9zaXRpb24pO1xyXG4gICAgICB0b2tlbi5wYXduLmRlc3QgPSBwb3NpdGlvbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRva2VuLnBhd24uZGVzdCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVBhd24odG9rZW46IFBhd25Ub2tlbik6IHZvaWQge1xyXG4gICAgaWYgKHRva2VuLnBhd24uZGVzdCAmJiAhcG9zRXEodG9rZW4ucGF3bi5kZXN0LCB0b2tlbi5wYXduLnBvcykpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCItLS0+IFBhd24gbmF2aWdhdGVzIHRvIFwiICsgdG9rZW4ucGF3bi5kZXN0KVxyXG4gICAgICB0aGlzLmhhbmRsZU5hdmlnYXRpb24odG9rZW4pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIXRva2VuLnBhd24uYWN0aXZpdHkpIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5nYW1lLnRpY2tzICUgMiA9PT0gMCkge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLmFjdGl2aXRpZXMuc29ydCgoYSxiKSA9PiB0b2tlbi5wcmlvcml0eShhKSA+IHRva2VuLnByaW9yaXR5KGIpID8gLTEgOiAxKSkge1xyXG4gICAgICAgICAgICBpZiAoYWN0aXZpdHkuaXNKb2JBdmFpbGFibGUodG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0+IEEgam9iIGlzIGF2YWlsYWJsZTogXCIgKyBhY3Rpdml0eS50aXRsZSlcclxuICAgICAgICAgICAgICBjb25zdCBqb2JEZXRhaWxzID0gYWN0aXZpdHkuZmluZEpvYih0b2tlbilcclxuICAgICAgICAgICAgICBpZiAoam9iRGV0YWlscykge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0+IEdvdCBqb2IgZGV0YWlsczogXCIgKyBKU09OLnN0cmluZ2lmeShqb2JEZXRhaWxzKSlcclxuICAgICAgICAgICAgICAgIHRva2VuLnBhd24uYWN0aXZpdHkgPSBhY3Rpdml0eS50aXRsZTtcclxuICAgICAgICAgICAgICAgIHRva2VuLnBhd24uYWN0aXZpdHlUYXJnZXQgPSBqb2JEZXRhaWxzLmFjdGl2aXR5VGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGpvYkRldGFpbHMuam9iU3VidHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICB0b2tlbi5wYXduLmpvYlN1YnR5cGUgPSBqb2JEZXRhaWxzLmpvYlN1YnR5cGU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyB0b2tlbi5wYXduLmpvYlN1YnR5cGUgPSB1bmRlZmluZWQ7IH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZFBhd25Ub1Bvc2l0aW9uKHRva2VuLCBqb2JEZXRhaWxzLnRyYXZlbERlc3RpbmF0aW9uKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiLS0tPiBQYXduIFwiICsgdG9rZW4ucGF3bi5uYW1lICsgXCIgaGFzIGFuIGFjdGl2aXR5Li4uXCIpXHJcbiAgICAgICAgdGhpcy5wYXduVG9rZW5Xb3Jrcyh0b2tlbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlTmF2aWdhdGlvbih0b2tlbjogUGF3blRva2VuKSB7XHJcbiAgICBpZiAoIXRva2VuLm1vdmluZykge1xyXG4gICAgICBpZiAodG9rZW4ucGF0aC5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBuZXh0U3RlcCA9IHRva2VuLnBhdGguc2hpZnQoKTtcclxuICAgICAgICB0aGlzLnBhd25Ub2tlbk1vdmVzKHRva2VuLCBuZXh0U3RlcCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0+IENvbXB1dGUgcGF0aCBmcm9tIFwiICsgdG9rZW4ucGF3bi5wb3MgKyBcIiB0byBcIiArIHRva2VuLnBhd24uZGVzdCk7XHJcbiAgICAgICAgdG9rZW4ucGF0aCA9IHRoaXMuZ2FtZS5jb21wdXRlUGF0aCh0b2tlbi5wYXduLnBvcywgdG9rZW4ucGF3bi5kZXN0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBwYXduVG9rZW5Nb3Zlcyh0b2tlbjogUGF3blRva2VuLCB0YXJnZXQ6IFdvcmxkUG9zaXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICghdG9rZW4ubW92aW5nKSB7XHJcbiAgICAgIHRva2VuLm1vdmluZyA9IHRydWVcclxuICAgICAgYXdhaXQgdG9rZW4uYWN0aW9ucy5tb3ZlVG8oXHJcbiAgICAgICAgdGFyZ2V0WzBdICogQ0VMTF9TSVpFLCB0YXJnZXRbMV0gKiBDRUxMX1NJWkUsXHJcbiAgICAgICAgUGF3blRva2VuLnNwZWVkXHJcbiAgICAgICkuYXNQcm9taXNlKClcclxuICAgICAgdG9rZW4ucGF3bi5wb3MgPSB0YXJnZXRcclxuICAgICAgdG9rZW4ubW92aW5nID0gZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgcGF3blRva2VuV29ya3ModG9rZW46IFBhd25Ub2tlbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCItLS0+IFBhd24gd29ya3MgKFwiICsgdG9rZW4ucGF3bi5uYW1lICsgXCIpXCIpXHJcbiAgICBpZiAoIXRva2VuLmludGVyYWN0aW5nKSB7XHJcbiAgICAgIHRva2VuLmludGVyYWN0aW5nID0gdHJ1ZVxyXG4gICAgICBjb25zdCBhY3Rpdml0eU1hbmFnZXIgPSB0aGlzLmFjdGl2aXRpZXMuZmluZChhY3Rpdml0eSA9PiBhY3Rpdml0eS50aXRsZSA9PT0gdG9rZW4ucGF3bi5hY3Rpdml0eSlcclxuICAgICAgYXdhaXQgYWN0aXZpdHlNYW5hZ2VyLnBlcmZvcm0odG9rZW4pXHJcbiAgICAgIHRva2VuLmludGVyYWN0aW5nID0gZmFsc2VcclxuICAgICAgdG9rZW4ucGF3bi5hY3Rpdml0eSA9IHVuZGVmaW5lZFxyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCItLS0+IFBhd24gaXMgYWxyZWFkeSBpbnRlcmFjdGluZz9cIilcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgV29ybGRQb3NpdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBwb3MsIHBvc0VxIH0gZnJvbSBcIi4vV29ybGRQb3NpdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgUG9zaXRpb25TZXQge1xyXG4gIHByaXZhdGUgYXJyOiBXb3JsZFBvc2l0aW9uW10gPSBbXTtcclxuICBjb25zdHJ1Y3RvcihlbnRyaWVzOiBXb3JsZFBvc2l0aW9uW10gPSBbXSkge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChbeCwgeV0pID0+IHRoaXMuYXJyLnB1c2gocG9zKHgsIHkpKSk7XHJcbiAgfVxyXG4gIGdldCBhcnJheSgpOiBXb3JsZFBvc2l0aW9uW10geyByZXR1cm4gdGhpcy5hcnI7IH1cclxuICBhZGQocG9zaXRpb246IFdvcmxkUG9zaXRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuYXJyLnB1c2gocG9zaXRpb24pXHJcbiAgfVxyXG4gIGRlbGV0ZShwb3NpdGlvbjogV29ybGRQb3NpdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5hcnIgPSB0aGlzLmFyci5maWx0ZXIoYW5vdGhlclBvc2l0aW9uID0+ICFwb3NFcShwb3NpdGlvbiwgYW5vdGhlclBvc2l0aW9uKSk7XHJcbiAgfVxyXG4gIGhhcyhwb3NpdGlvbjogV29ybGRQb3NpdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYXJyLmZpbHRlcihwID0+IHBvc0VxKHAsIHBvc2l0aW9uKSkubGVuZ3RoID4gMDtcclxuICB9XHJcbiAgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuYXJyLmxlbmd0aFxyXG4gIH1cclxuICBlbXB0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNpemUoKSA9PT0gMFxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBXb3JsZFBvc2l0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbi8vIEEgdmVyeSBiYXNpYyBncmlkIHRoYXQgZG9lc24ndCB3b3JyeSBhYm91dCBib3VuZHMgb3IgaW5kZXhpbmcgZXRjXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVHcmlkPFQ+IHtcclxuICB2YWx1ZXM6IFRbXVtdID0gW107XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWx1ZVdoZW5VbmRlZmluZWQ6IFQgPSB1bmRlZmluZWQpIHsgfVxyXG4gIHNldChwb3NpdGlvbjogV29ybGRQb3NpdGlvbiwgdmFsdWU6IFQpOiB2b2lkIHtcclxuICAgIGNvbnN0IFtweCwgcHldID0gcG9zaXRpb247XHJcbiAgICB0aGlzLnZhbHVlc1tweV0gPSB0aGlzLnZhbHVlc1tweV0gfHwgW107XHJcbiAgICB0aGlzLnZhbHVlc1tweV1bcHhdID0gdmFsdWU7XHJcbiAgfVxyXG4gIGF0KHBvc2l0aW9uOiBXb3JsZFBvc2l0aW9uKTogVCB7XHJcbiAgICBjb25zdCBbcHgsIHB5XSA9IHBvc2l0aW9uO1xyXG4gICAgdGhpcy52YWx1ZXNbcHldID0gdGhpcy52YWx1ZXNbcHldIHx8IFtdO1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1tweV1bcHhdO1xyXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVXaGVuVW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2FydG9ncmFtIH0gZnJvbSBcIi4uL21vZGVscy9DYXJ0b2dyYW1cIjtcclxuaW1wb3J0IHsgUGF3biwgRGltZW5zaW9ucywgVGVycmFpbiwgVmVnZXRhdGlvbiwgV29ybGRQb3NpdGlvbiwgU2lnaWwsIE1hdGVyaWFsLCBBY3Rpdml0eSB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSBcIi4vR3JpZFwiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0b3IgfSBmcm9tIFwiLi9OYXZpZ2F0b3JcIjtcclxuaW1wb3J0IHsgU2ltcGxlR3JpZCB9IGZyb20gXCIuL1NpbXBsZUdyaWRcIjtcclxuaW1wb3J0IHsgcGljayB9IGZyb20gXCIuLi91dGlsL3BpY2tcIjtcclxuaW1wb3J0IHsgSU5JVElBTF9QQVdOX0NPVU5ULCBOQU1FX0lOSVRJQUxfU1lMTEFCTEVTLCBOQU1FX0ZJTkFMX1NZTExBQkxFUywgRFdBUlZFTl9MQU5HVUFHRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgc2h1ZmZsZSB9IGZyb20gXCIuLi91dGlsL3NodWZmbGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JsZCB7XHJcbiAgcHVibGljIHBhd25zOiBQYXduW11cclxuICBwcml2YXRlIG1hcDogQ2FydG9ncmFtXHJcbiAgcHJpdmF0ZSBuYXY6IE5hdmlnYXRvclxyXG4gIFxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGltZW5zaW9uczogRGltZW5zaW9ucywgcHVibGljIGluaXRpYWxQYXduQ291bnQ6IG51bWJlciA9IElOSVRJQUxfUEFXTl9DT1VOVCkge1xyXG4gICAgdGhpcy5tYXAgPSBuZXcgQ2FydG9ncmFtKGRpbWVuc2lvbnMpO1xyXG4gICAgdGhpcy5uYXYgPSBuZXcgTmF2aWdhdG9yKGRpbWVuc2lvbnMsIHBvc2l0aW9uID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaXNCbG9ja2VkKHBvc2l0aW9uKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcGF3blBvc2l0aW9ucyA9IHRoaXMubWFwLnBpY2tDbGVhckxvY2F0aW9ucyhpbml0aWFsUGF3bkNvdW50KVxyXG4gICAgdGhpcy5wYXducyA9IFtdXHJcbiAgICBjb25zdCBsYW5ndWFnZSA9IERXQVJWRU5fTEFOR1VBR0VcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5pdGlhbFBhd25Db3VudDsgaSsrKSB7XHJcbiAgICAgIC8vIGNvbnN0IHBhd25OYW1lcyA9IFtcclxuICAgICAgY29uc3QgcGF3bk5hbWUgPSBwaWNrKC4uLmxhbmd1YWdlLnN0ZW1zKSArIHBpY2soLi4ubGFuZ3VhZ2Uuc3VmZml4ZXMpXHJcbiAgICAgIC8vICAgcGljayguLi5sYW5ndWFnZS5zdGVtcykgKyBwaWNrKC4uLmxhbmd1YWdlLnN1ZmZpeGVzKSxcclxuICAgICAgLy8gICBwaWNrKC4uLmxhbmd1YWdlLnN0ZW1zKSArIHBpY2soLi4ubGFuZ3VhZ2Uuc3VmZml4ZXMpLFxyXG4gICAgICAvLyBdLnNvcnQoKGEsYikgPT4gYS5sZW5ndGggPj0gYi5sZW5ndGggPyAxIDogLTEpXHJcbiAgICAgIHRoaXMucGF3bnMucHVzaCggXHJcbiAgICAgICAgdGhpcy5tYWtlUGF3bihwYXduTmFtZSwgcGF3blBvc2l0aW9uc1tpXSlcclxuICAgICAgKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHdpZHRoKCk6IG51bWJlciB7IHJldHVybiB0aGlzLmRpbWVuc2lvbnNbMF0gfVxyXG4gIGdldCBoZWlnaHQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuZGltZW5zaW9uc1sxXSB9XHJcblxyXG4gIGdldCB0ZXJyYWluKCk6IEdyaWQ8VGVycmFpbj4geyByZXR1cm4gdGhpcy5tYXAudGVycmFpbiB9XHJcbiAgZ2V0IHZlZ2V0YXRpb24oKTogR3JpZDxWZWdldGF0aW9uPiB7IHJldHVybiB0aGlzLm1hcC52ZWdldGF0aW9uIH1cclxuICBnZXQgc2lnaWxzKCk6IEdyaWQ8U2lnaWw+IHsgcmV0dXJuIHRoaXMubWFwLnNpZ2lscyB9XHJcbiAgZ2V0IHJhd01hdGVyaWFsKCk6IEdyaWQ8TWF0ZXJpYWw+IHsgcmV0dXJuIHRoaXMubWFwLnJhd01hdGVyaWFsIH0gXHJcbiAgZ2V0IHJhd01hdGVyaWFsQ291bnQoKTogU2ltcGxlR3JpZDxudW1iZXI+IHsgcmV0dXJuIHRoaXMubWFwLnJhd01hdGVyaWFsQ291bnQgfSBcclxuXHJcbiAgbWFrZVBhd24gPSAobmFtZTogc3RyaW5nLCBwb3M6IFdvcmxkUG9zaXRpb24pOiBQYXduID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHBvcyxcclxuICAgICAgLy8gcG9zOiB0aGlzLm1hcC5waWNrUmFuZG9tQ2xlYXJMb2NhdGlvbigpLFxyXG4gICAgICBpbnZlbnRvcnk6IFtdLFxyXG4gICAgICBwcmlvcml0aWVzOiBzaHVmZmxlKCdsb2dnaW5nJywgJ2hhdWxpbmcnLCAnYnVpbGRpbmcnKSBhcyBBY3Rpdml0eVtdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JFYWNoUG9zaXRpb24oZm46ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy53aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgZm4oeCx5KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG9ydGVzdFBhdGgoc3JjOiBXb3JsZFBvc2l0aW9uLCBkc3Q6IFdvcmxkUG9zaXRpb24pOiBXb3JsZFBvc2l0aW9uW10ge1xyXG4gICAgY29uc3QgeyBwYXRoIH0gPSB0aGlzLm5hdi5hU3RhcihzcmMsIGRzdClcclxuICAgIHJldHVybiBwYXRoXHJcbiAgfVxyXG5cclxuICBpc0Jsb2NrZWQocG9zaXRpb246IFdvcmxkUG9zaXRpb24pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1hcC52ZWdldGF0aW9uLmF0KHBvc2l0aW9uKSA9PT0gJ3RyZWUnXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgV29ybGRQb3NpdGlvbiwgRGlyZWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcG9zID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogV29ybGRQb3NpdGlvbiA9PiB7XHJcbiAgcmV0dXJuIFt4LCB5XSBhcyBXb3JsZFBvc2l0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGlyZWN0aW9uRnJvbSA9IChzcmM6IFdvcmxkUG9zaXRpb24sIGRzdDogV29ybGRQb3NpdGlvbik6IERpcmVjdGlvbiA9PiB7XHJcbiAgY29uc3QgW3N4LCBzeV0gPSBzcmNcclxuICBjb25zdCBbZHgsIGR5XSA9IGRzdFxyXG4gIGlmIChzeCA9PT0gZHgpIHtcclxuICAgIGlmIChzeSA+IGR5KSB7IHJldHVybiAnbm9ydGgnIH1cclxuICAgIGlmIChzeSA8IGR5KSB7IHJldHVybiAnc291dGgnIH1cclxuICB9IGVsc2UgaWYgKHN5ID09PSBkeSkge1xyXG4gICAgaWYgKHN4ID4gZHgpIHsgcmV0dXJuICd3ZXN0JyB9XHJcbiAgICBpZiAoc3ggPCBkeCkgeyByZXR1cm4gJ2Vhc3QnIH1cclxuICB9XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdQb3NpdGlvbnMgYXJlIG5vdCBuZWlnaGJvcnM6ICcgKyBzcmMgKyAnIC8gJyArIGRzdClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkanVzdFBvc2l0aW9uID0gKHNyYzogV29ybGRQb3NpdGlvbiwgZGlyOiBEaXJlY3Rpb24pOiBXb3JsZFBvc2l0aW9uID0+IHtcclxuICBjb25zdCBbc3gsc3ldID0gc3JjXHJcbiAgaWYgKGRpciA9PT0gJ2Vhc3QnKSB7XHJcbiAgICByZXR1cm4gcG9zKHN4KzEsc3kpXHJcbiAgfSBlbHNlIGlmIChkaXIgPT09ICd3ZXN0Jykge1xyXG4gICAgcmV0dXJuIHBvcyhzeC0xLHN5KVxyXG4gIH0gZWxzZSBpZiAoZGlyID09PSAnbm9ydGgnKSB7XHJcbiAgICByZXR1cm4gcG9zKHN4LHN5LTEpXHJcbiAgfSBlbHNlIGlmIChkaXIgPT09ICdzb3V0aCcpIHtcclxuICAgIHJldHVybiBwb3Moc3gsc3krMSlcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHdpdGhpbkJvdW5kcyA9IChzcmM6IFdvcmxkUG9zaXRpb24sIGRpbXM6IFtudW1iZXIsIG51bWJlcl0pOiBib29sZWFuID0+IHtcclxuICBjb25zdCBbc3gsc3ldID0gc3JjXHJcbiAgY29uc3QgW3csaF0gPSBkaW1zXHJcbiAgcmV0dXJuIHN4ID49IDAgJiYgc3ggPCB3ICYmIHN5ID49IDAgJiYgc3kgPCBoXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuZWlnaGJvcnNPZlBvc2l0aW9uID0gKHNyYzogV29ybGRQb3NpdGlvbiwgZGltczogW251bWJlciwgbnVtYmVyXSk6IFdvcmxkUG9zaXRpb25bXSA9PiB7XHJcbiAgY29uc3QgW3N4LHN5XSA9IHNyY1xyXG4gIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICBwb3Moc3gsIHN5LTEpLCBcclxuICAgIHBvcyhzeC0xLHN5KSwgICAgICAgICAgICAgICAgICBwb3Moc3grMSxzeSksXHJcbiAgICAgICAgICAgICAgICAgICBwb3Moc3gsIHN5KzEpLCBcclxuICBdLmZpbHRlcihwID0+IHdpdGhpbkJvdW5kcyhwLCBkaW1zKSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5laWdoYm9yc09mUG9zaXRpb25QbHVzRGlhZ29uYWxzID0gKHNyYzogV29ybGRQb3NpdGlvbiwgZGltczogW251bWJlciwgbnVtYmVyXSk6IFdvcmxkUG9zaXRpb25bXSA9PiB7XHJcbiAgY29uc3QgW3N4LHN5XSA9IHNyY1xyXG4gIHJldHVybiBbXHJcbiAgICBwb3Moc3gtMSwgc3ktMSksIHBvcyhzeCwgc3ktMSksICBwb3Moc3grMSwgc3ktMSksXHJcbiAgICBwb3Moc3gtMSxzeSksICAgICAgICAgICAgICAgICAgICBwb3Moc3grMSxzeSksXHJcbiAgICBwb3Moc3gtMSxzeSsxKSwgIHBvcyhzeCwgc3krMSksICBwb3Moc3grMSwgc3krMSksXHJcbiAgXS5maWx0ZXIocCA9PiB3aXRoaW5Cb3VuZHMocCwgZGltcykpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3NFcSA9IChhOiBXb3JsZFBvc2l0aW9uLCBiOiBXb3JsZFBvc2l0aW9uKTogYm9vbGVhbiA9PiB7XHJcbiAgaWYgKGEgJiYgYikge1xyXG4gIGNvbnN0IFtheCxheV0gPSBhXHJcbiAgY29uc3QgW2J4LGJ5XSA9IGJcclxuICByZXR1cm4gYXggPT09IGJ4ICYmIGF5ID09PSBieVxyXG4gIH0gZWxzZSB7IHJldHVybiBmYWxzZX1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhdGhFcSA9IChhOiBXb3JsZFBvc2l0aW9uW10sIGI6IFdvcmxkUG9zaXRpb25bXSk6IGJvb2xlYW4gPT4ge1xyXG4gIGlmICghKGEubGVuZ3RoID09PSBiLmxlbmd0aCkpIHsgcmV0dXJuIGZhbHNlIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICghcG9zRXEoYVtpXSwgYltpXSkpIHsgcmV0dXJuIGZhbHNlIH1cclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRpc3RhbmNlQmV0d2VlbiA9IChhOiBXb3JsZFBvc2l0aW9uLCBiOiBXb3JsZFBvc2l0aW9uKTogbnVtYmVyID0+IHtcclxuICBjb25zdCBbYXgsYXldID0gYVxyXG4gIGNvbnN0IFtieCxieV0gPSBiXHJcbiAgY29uc3QgZHggPSBheCAtIGJ4XHJcbiAgY29uc3QgZHkgPSBheSAtIGJ5XHJcbiAgY29uc3QgZCA9IE1hdGguc3FydCgoZHgqZHgpICsgKGR5KmR5KSlcclxuICAvLyBjb25zb2xlLmxvZyhcIkNvbXB1dGUgZGlzdGFuY2UgYmV0d2VlblwiLCBhLCBiLCBkKVxyXG4gIHJldHVybiBkIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYnlEaXN0YW5jZUZyb20gPSAodGFyZ2V0OiBXb3JsZFBvc2l0aW9uKSA9PiAoYTogV29ybGRQb3NpdGlvbiwgYjogV29ybGRQb3NpdGlvbik6IG51bWJlciA9PiB7XHJcbiAgcmV0dXJuIGRpc3RhbmNlQmV0d2Vlbih0YXJnZXQsIGEpID4gZGlzdGFuY2VCZXR3ZWVuKHRhcmdldCwgYikgPyAxIDogLTFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFyZWFDb250YWlucyA9ICh0b3BMZWZ0OiBXb3JsZFBvc2l0aW9uLCBib3R0b21SaWdodDogV29ybGRQb3NpdGlvbiwgdHJpYWxQb3M6IFdvcmxkUG9zaXRpb24pOiBib29sZWFuID0+IHtcclxuICBjb25zdCBbYXgsIGF5XSA9IHRvcExlZnRcclxuICBjb25zdCBbYngsIGJ5XSA9IGJvdHRvbVJpZ2h0XHJcbiAgY29uc3QgW3gseV0gPSB0cmlhbFBvc1xyXG4gIGNvbnN0IGNvbnRhaW5lZCA9IGF4IDw9IHggJiYgeCA8PSBieCAmJiBheSA8PSB5ICYmIHkgPD0gYnlcclxuICAvLyBjb25zb2xlLmxvZyhcIkRvZXMgYXJlYSBcIiArIGF4ICsgXCIsIFwiICsgYXkgKyBcIiB0byBcIiArIGJ4ICsgXCIsIFwiICsgYnkgKyBcIiBjb250YWluIFwiICsgeCArIFwiLCBcIiArIHkgKyBcIj9cIiwgY29udGFpbmVkKVxyXG4gIHJldHVybiBjb250YWluZWRcclxufSIsImltcG9ydCB7IFBhd25Ub2tlbiB9IGZyb20gXCIuLi8uLi9hY3RvcnMvUGF3blRva2VuXCI7XHJcbmltcG9ydCB7IGJ5RGlzdGFuY2VGcm9tLCBuZWlnaGJvcnNPZlBvc2l0aW9uIH0gZnJvbSBcIi4uL1dvcmxkUG9zaXRpb25cIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9HYW1lXCI7XHJcbmltcG9ydCB7IEFjdGl2aXR5LCBKb2JEZXRhaWwgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgUG9zaXRpb25TZXQgfSBmcm9tIFwiLi4vUG9zaXRpb25TZXRcIjtcclxuaW1wb3J0IHsgSUFjdGl2aXR5IH0gZnJvbSBcIi4uL0lBY3Rpdml0eVwiO1xyXG5pbXBvcnQgeyBUUkVFX0NVVF9EVVJBVElPTiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXRUaW1iZXIgaW1wbGVtZW50cyBJQWN0aXZpdHkge1xyXG4gIHRpdGxlOiBBY3Rpdml0eSA9ICdsb2dnaW5nJztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhbWU6IEdhbWUpIHsgfVxyXG5cclxuICBwcml2YXRlIGFzc2lnbmVkVHJlZVBvc2l0aW9uczogUG9zaXRpb25TZXQgPSBuZXcgUG9zaXRpb25TZXQoKTtcclxuXHJcbiAgaXNKb2JBdmFpbGFibGUodG9rZW46IFBhd25Ub2tlbik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgdHJlZVBvc2l0aW9ucyA9IHRoaXMuZ2FtZS5tYXJrZWRUcmVlUG9zaXRpb25zXHJcbiAgICAgIC5maWx0ZXIocG9zID0+ICF0aGlzLmFzc2lnbmVkVHJlZVBvc2l0aW9ucy5oYXMocG9zKSlcclxuICAgICAgLnNvcnQoYnlEaXN0YW5jZUZyb20odG9rZW4ucGF3bi5wb3MpKVxyXG4gICAgICAuZmluZChwb3MgPT4gbmVpZ2hib3JzT2ZQb3NpdGlvbihwb3MsIHRoaXMuZ2FtZS5kaW1zKVxyXG4gICAgICAgIC5maWx0ZXIobiA9PiAhdGhpcy5nYW1lLmlzQmxvY2tlZChuKSlcclxuICAgICAgICAuZmluZChuID0+IHRoaXMuZ2FtZS5jYW5QYXRoQmV0d2Vlbih0b2tlbi5wYXduLnBvcywgbikpXHJcbiAgICAgICk7XHJcbiAgICBjb25zdCBhdmFpbGFibGUgPSB0cmVlUG9zaXRpb25zIC8vLmxlbmd0aCA+IDA7XHJcbiAgICByZXR1cm4gQm9vbGVhbihhdmFpbGFibGUpO1xyXG4gIH1cclxuXHJcbiAgZmluZEpvYih0b2tlbjogUGF3blRva2VuKTogSm9iRGV0YWlsIHtcclxuICAgIC8vIGlmICh0aGlzLmdhbWUudGlja3MgJSA1ICE9PSAwKSByZXR1cm47XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIi0tLT4gRmluZCB0aW1iZXIgam9iIGZvciBcIiArIHRva2VuLnBhd24ubmFtZSlcclxuICAgIGNvbnN0IHRyZWVQb3NpdGlvbnMgPSBbLi4udGhpcy5nYW1lLm1hcmtlZFRyZWVQb3NpdGlvbnNdXHJcbiAgICAgIC5maWx0ZXIocG9zID0+ICF0aGlzLmFzc2lnbmVkVHJlZVBvc2l0aW9ucy5oYXMocG9zKSlcclxuXHJcbiAgICBpZiAodHJlZVBvc2l0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHRyZWVQb3NpdGlvbiA9IHRyZWVQb3NpdGlvbnNcclxuICAgICAgICAuc29ydChieURpc3RhbmNlRnJvbSh0b2tlbi5wYXduLnBvcykpXHJcbiAgICAgICAgLmZpbmQocG9zID0+IHtcclxuICAgICAgICAgIHJldHVybiBuZWlnaGJvcnNPZlBvc2l0aW9uKHBvcywgdGhpcy5nYW1lLmRpbXMpXHJcbiAgICAgICAgICAgIC5maWx0ZXIobiA9PiAhdGhpcy5nYW1lLmlzQmxvY2tlZChuKSlcclxuICAgICAgICAgICAgLmZpbmQobiA9PiB0aGlzLmdhbWUuY2FuUGF0aEJldHdlZW4odG9rZW4ucGF3bi5wb3MsIG4pKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIGlmICh0cmVlUG9zaXRpb24pIHtcclxuICAgICAgICBjb25zdCBuZWlnaGJvciA9IG5laWdoYm9yc09mUG9zaXRpb24odHJlZVBvc2l0aW9uLCB0aGlzLmdhbWUuZGltcylcclxuICAgICAgICAgIC5maWx0ZXIobiA9PiAhdGhpcy5nYW1lLmlzQmxvY2tlZChuKSlcclxuICAgICAgICAgIC5zb3J0KGJ5RGlzdGFuY2VGcm9tKHRva2VuLnBhd24ucG9zKSlcclxuICAgICAgICAgIC5maW5kKG4gPT4gdGhpcy5nYW1lLmNhblBhdGhCZXR3ZWVuKHRva2VuLnBhd24ucG9zLCBuKSlcclxuICAgICAgICBpZiAobmVpZ2hib3IpIHtcclxuICAgICAgICAgIHRoaXMuYXNzaWduZWRUcmVlUG9zaXRpb25zLmFkZCh0cmVlUG9zaXRpb24pO1xyXG4gICAgICAgICAgY29uc3QgdHJhdmVsRGVzdGluYXRpb24gPSBuZWlnaGJvclxyXG4gICAgICAgICAgcmV0dXJuIHsgYWN0aXZpdHlUYXJnZXQ6IHRyZWVQb3NpdGlvbiwgdHJhdmVsRGVzdGluYXRpb24gfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHBlcmZvcm0odG9rZW46IFBhd25Ub2tlbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgYXdhaXQgdG9rZW4uYWN0aW9ucy5kZWxheShUUkVFX0NVVF9EVVJBVElPTikuYXNQcm9taXNlKCk7XHJcbiAgICB0aGlzLmdhbWUuY2hvcFRyZWUodG9rZW4ucGF3bi5hY3Rpdml0eVRhcmdldCk7XHJcbiAgICB0aGlzLmFzc2lnbmVkVHJlZVBvc2l0aW9ucy5kZWxldGUodG9rZW4ucGF3bi5hY3Rpdml0eVRhcmdldCk7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xyXG5pbXBvcnQgeyBJQWN0aXZpdHkgfSBmcm9tIFwiLi4vSUFjdGl2aXR5XCI7XHJcbmltcG9ydCB7IFBhd25Ub2tlbiB9IGZyb20gXCIuLi8uLi9hY3RvcnMvUGF3blRva2VuXCI7XHJcbmltcG9ydCB7IEpvYkRldGFpbCwgQWN0aXZpdHksIFdvcmxkUG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9HYW1lXCI7XHJcbmltcG9ydCB7IGJ5RGlzdGFuY2VGcm9tIH0gZnJvbSBcIi4uL1dvcmxkUG9zaXRpb25cIjtcclxuaW1wb3J0IHsgUG9zaXRpb25TZXQgfSBmcm9tIFwiLi4vUG9zaXRpb25TZXRcIjtcclxuaW1wb3J0IHsgSU5WRU5UT1JZX0xJTUlULCBTVEFDS19NQVggfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGF1bCBpbXBsZW1lbnRzIElBY3Rpdml0eSB7XHJcbiAgdGl0bGU6IEFjdGl2aXR5ID0gXCJoYXVsaW5nXCI7XHJcblxyXG4gIHByaXZhdGUgYXNzaWduZWRJdGVtTG9jYXRpb25zOiBQb3NpdGlvblNldCA9IG5ldyBQb3NpdGlvblNldCgpO1xyXG4gIC8vIHByaXZhdGUgYXNzaWduZWRab25lTG9jYXRpb25zOiBQb3NpdGlvblNldCA9IG5ldyBQb3NpdGlvblNldCgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhbWU6IEdhbWUpIHt9XHJcblxyXG4gIGdldCBvdXRzdGFuZGluZ0l0ZW1Mb2NhdGlvbnMoKTogV29ybGRQb3NpdGlvbltdIHtcclxuICAgIHJldHVybiB0aGlzLmdhbWUucmF3TWF0ZXJpYWxMb2NhdGlvbnMoJ3dvb2QnKS5maWx0ZXIobG9jYXRpb24gPT5cclxuICAgICAgIXRoaXMuZ2FtZS5pc0xvY2F0aW9uV2l0aGluQW55Wm9uZShsb2NhdGlvbilcclxuICAgICkuZmlsdGVyKGxvY2F0aW9uID0+ICF0aGlzLmFzc2lnbmVkSXRlbUxvY2F0aW9ucy5oYXMobG9jYXRpb24pKVxyXG4gIH1cclxuXHJcbiAgZ2V0IGZyZWVab25lTG9jYXRpb25zKCk6IFdvcmxkUG9zaXRpb25bXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nYW1lLmZpbmRVbmZpbGxlZFpvbmVQb3NpdGlvbnMoKVxyXG4gICAgICAvLyAuZmlsdGVyKGxvY2F0aW9uID0+ICF0aGlzLmFzc2lnbmVkWm9uZUxvY2F0aW9ucy5oYXMobG9jYXRpb24pKVxyXG4gIH1cclxuXHJcbiAgaXNKb2JBdmFpbGFibGUodG9rZW46IFBhd25Ub2tlbik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgY2FuR2F0aGVyID0gKHRoaXMub3V0c3RhbmRpbmdJdGVtTG9jYXRpb25zLmxlbmd0aCA+IDAgJiYgIXRoaXMuZ2FtZS5hcmVBbGxab25lc0Z1bGwoKSlcclxuICAgIGNvbnN0IGNhblN0b3JlID0gKCF0aGlzLmdhbWUuYXJlQWxsWm9uZXNGdWxsKCkgJiYgdG9rZW4ucGF3bi5pbnZlbnRvcnkubGVuZ3RoID4gMClcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiLS0tPiBJcyBhIGhhdWxpbmcgam9iIGF2YWlsYWJsZSBmb3IgXCIgKyB0b2tlbi5wYXduLm5hbWUgKyBcIj9cIiwgeyBjYW5HYXRoZXIsIGNhblN0b3JlIH0pO1xyXG4gICAgcmV0dXJuIGNhbkdhdGhlciB8fCBjYW5TdG9yZVxyXG4gIH1cclxuXHJcbiAgZmluZEpvYih0b2tlbjogUGF3blRva2VuKTogSm9iRGV0YWlsIHtcclxuICAgIGNvbnN0IGhhc1Jvb21JbkludmVudG9yeSA9IHRva2VuLnBhd24uaW52ZW50b3J5Lmxlbmd0aCA8IElOVkVOVE9SWV9MSU1JVFxyXG4gICAgLy8gY29uc29sZS5sb2coXCItLS0+IERvZXMgXCIgKyB0b2tlbi5wYXduLm5hbWUgICsgXCIgaGF2ZSByb29tIGluIGludmVudG9yeT8gXCIgKyBoYXNSb29tSW5JbnZlbnRvcnkpXHJcbiAgICBjb25zdCB0aGVyZUV4aXN0T3V0c3RhbmRpbmdJdGVtcyA9IHRoaXMub3V0c3RhbmRpbmdJdGVtTG9jYXRpb25zLmxlbmd0aCA+IDBcclxuICAgIGlmIChoYXNSb29tSW5JbnZlbnRvcnkgJiYgdGhlcmVFeGlzdE91dHN0YW5kaW5nSXRlbXMpIHtcclxuICAgICAgY29uc3QgbmVhcmVzdEFjY2Vzc2libGVJdGVtTG9jYXRpb24gPSB0aGlzLm91dHN0YW5kaW5nSXRlbUxvY2F0aW9uc1xyXG4gICAgICAgIC5zb3J0KGJ5RGlzdGFuY2VGcm9tKHRva2VuLnBhd24ucG9zKSlcclxuICAgICAgICAuZmluZChwb3MgPT4gdGhpcy5nYW1lLmNhblBhdGhCZXR3ZWVuKHBvcywgdG9rZW4ucGF3bi5wb3MpKVxyXG4gICAgICBpZiAobmVhcmVzdEFjY2Vzc2libGVJdGVtTG9jYXRpb24pIHtcclxuICAgICAgICB0aGlzLmFzc2lnbmVkSXRlbUxvY2F0aW9ucy5hZGQobmVhcmVzdEFjY2Vzc2libGVJdGVtTG9jYXRpb24pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGFjdGl2aXR5VGFyZ2V0OiBuZWFyZXN0QWNjZXNzaWJsZUl0ZW1Mb2NhdGlvbixcclxuICAgICAgICAgIHRyYXZlbERlc3RpbmF0aW9uOiBuZWFyZXN0QWNjZXNzaWJsZUl0ZW1Mb2NhdGlvbixcclxuICAgICAgICAgIGpvYlN1YnR5cGU6ICdoYXVsLWdhdGhlcidcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodG9rZW4ucGF3bi5pbnZlbnRvcnkubGVuZ3RoID4gMCkgeyAvL30gJiYgIXRoaXMuZ2FtZS5hcmVBbGxab25lc0Z1bGwoKSkge1xyXG4gICAgICAvLyBmaW5kIGFuIHVuLWZpbGxlZCB6b25lIHNsb3QuLi5cclxuICAgICAgY29uc3QgZnJlZVpvbmVTcGFjZSA9IHRoaXMuZnJlZVpvbmVMb2NhdGlvbnNcclxuICAgICAgICAuc29ydChieURpc3RhbmNlRnJvbSh0b2tlbi5wYXduLnBvcykpXHJcbiAgICAgICAgLmZpbmQocG9zID0+IHRoaXMuZ2FtZS5jYW5QYXRoQmV0d2Vlbihwb3MsIHRva2VuLnBhd24ucG9zKSlcclxuICAgICAgaWYgKGZyZWVab25lU3BhY2UpIHtcclxuICAgICAgICAvLyB0aGlzLmFzc2lnbmVkWm9uZUxvY2F0aW9ucy5hZGQoZnJlZVpvbmVTcGFjZSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgYWN0aXZpdHlUYXJnZXQ6IGZyZWVab25lU3BhY2UsXHJcbiAgICAgICAgICB0cmF2ZWxEZXN0aW5hdGlvbjogZnJlZVpvbmVTcGFjZSxcclxuICAgICAgICAgIGpvYlN1YnR5cGU6ICdoYXVsLXN0b3JlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgcGVyZm9ybSh0b2tlbjogUGF3blRva2VuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodG9rZW4ucGF3bi5qb2JTdWJ0eXBlID09PSAnaGF1bC1nYXRoZXInKSB7XHJcbiAgICAgIGNvbnN0IHsgYWN0aXZpdHlUYXJnZXQgfSA9IHRva2VuLnBhd25cclxuICAgICAgY29uc3QgbWF4VG9BY2NlcHQgPSBJTlZFTlRPUllfTElNSVQgLSB0b2tlbi5wYXduLmludmVudG9yeS5sZW5ndGhcclxuICAgICAgY29uc3QgeyBraW5kLCBhbW91bnQgfSA9IHRoaXMuZ2FtZS5nYXRoZXJSZXNvdXJjZShhY3Rpdml0eVRhcmdldCwgbWF4VG9BY2NlcHQpXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgICAgICB0b2tlbi5wYXduLmludmVudG9yeS5wdXNoKGtpbmQpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hc3NpZ25lZEl0ZW1Mb2NhdGlvbnMuZGVsZXRlKGFjdGl2aXR5VGFyZ2V0KVxyXG4gICAgfSBlbHNlIGlmICh0b2tlbi5wYXduLmpvYlN1YnR5cGUgPT09ICdoYXVsLXN0b3JlJykge1xyXG4gICAgICBjb25zdCB7IGFjdGl2aXR5VGFyZ2V0IH0gPSB0b2tlbi5wYXduXHJcbiAgICAgIGNvbnN0IGtpbmQgPSB0aGlzLmdhbWUucmF3TWF0ZXJpYWxLaW5kQXRMb2NhdGlvbihhY3Rpdml0eVRhcmdldCkgPT09ICdub3RoaW5nJ1xyXG4gICAgICAgID8gdG9rZW4ucGF3bi5pbnZlbnRvcnlbMF1cclxuICAgICAgICA6IHRoaXMuZ2FtZS5yYXdNYXRlcmlhbEtpbmRBdExvY2F0aW9uKGFjdGl2aXR5VGFyZ2V0KVxyXG4gICAgICBjb25zdCBhbW91bnRMb2NhdGlvbkNhbkFjY2VwdCA9IFNUQUNLX01BWCAtIHRoaXMuZ2FtZS5yYXdNYXRlcmlhbENvdW50QXRMb2NhdGlvbihhY3Rpdml0eVRhcmdldClcclxuICAgICAgbGV0IGFtb3VudFRvU3RvcmUgPSB0b2tlbi5wYXduLmludmVudG9yeS5maWx0ZXIoayA9PiBraW5kID09PSBrKS5sZW5ndGhcclxuICAgICAgaWYgKGFtb3VudFRvU3RvcmUgPiBhbW91bnRMb2NhdGlvbkNhbkFjY2VwdCkge1xyXG4gICAgICAgIGFtb3VudFRvU3RvcmUgPSBhbW91bnRMb2NhdGlvbkNhbkFjY2VwdFxyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50VG9TdG9yZTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IHRva2VuLnBhd24uaW52ZW50b3J5LmZpbmRJbmRleChrID0+IGtpbmQgPT09IGspXHJcbiAgICAgICAgdG9rZW4ucGF3bi5pbnZlbnRvcnkgPSB0b2tlbi5wYXduLmludmVudG9yeS5maWx0ZXIoKF8saSkgPT4gaSE9PWluZGV4VG9SZW1vdmUpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5nYW1lLnN0b3JlUmVzb3VyY2Uoa2luZCwgYWN0aXZpdHlUYXJnZXQsIGFtb3VudFRvU3RvcmUpXHJcbiAgICAgIC8vIHRoaXMuYXNzaWduZWRab25lTG9jYXRpb25zLmRlbGV0ZShhY3Rpdml0eVRhcmdldClcclxuICAgIH1cclxuICB9XHJcblxyXG59IiwiZXhwb3J0IGNvbnN0IHBpY2sgPSA8VD4oLi4uZWxlbXM6IFRbXSk6IFQgPT4ge1xyXG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZWxlbXMubGVuZ3RoKSlcclxuICAgIHJldHVybiBlbGVtc1tpbmRleF1cclxufSIsImV4cG9ydCBjb25zdCBzaHVmZmxlID0gPFQ+KC4uLmFycjogVFtdKTogVFtdID0+IGFyci5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAtMSA6IDEpOyIsImV4cG9ydCBjb25zdCB0YWtlOiA8VD4objogbnVtYmVyLCBhcnI6IFRbXSkgPT4gVFtdID0gKG4sIGFycikgPT4ge1xyXG4gIGlmIChuID49IGFyci5sZW5ndGgpIHsgcmV0dXJuIGFyciB9XHJcbiAgY29uc3QgdGFrZW4gPSBbXVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcbiAgICB0YWtlbi5wdXNoKGFycltpXSlcclxuICB9XHJcbiAgcmV0dXJuIHRha2VuXHJcbn0iLCJpbXBvcnQgeyBGcmVlaG9sZEVuZ2luZSB9IGZyb20gXCIuL0ZyZWVob2xkRW5naW5lXCI7XHJcbmltcG9ydCB7IFBsYXkgfSBmcm9tIFwiLi9mcmVlaG9sZC9QbGF5XCI7XHJcbmltcG9ydCB7IFJlc291cmNlcyB9IGZyb20gXCIuL2ZyZWVob2xkL1Jlc291cmNlc1wiO1xyXG5pbXBvcnQgeyBMb2FkZXIsIENvbG9yIH0gZnJvbSBcImV4Y2FsaWJ1clwiO1xyXG5cclxuY29uc29sZS5sb2coXCJGUkVFSE9MRCAtLSBpbmRleFwiKTtcclxuXHJcbmNvbnN0IGZyZWVob2xkID0gbmV3IEZyZWVob2xkRW5naW5lKCk7XHJcbmNvbnN0IHBsYXkgPSBuZXcgUGxheShmcmVlaG9sZCk7XHJcbmZyZWVob2xkLmJhY2tncm91bmRDb2xvciA9IENvbG9yLmZyb21SR0IoLy8zMCwyMDAsMTUwKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMCwxODAsMTQwKSAvL25ldyBDb2xvcig0MCwxMjAsODApO1xyXG5mcmVlaG9sZC5hZGQoJ3BsYXknLCBwbGF5KTtcclxuXHJcbmNvbnN0IGxvYWRlciA9IG5ldyBMb2FkZXIoKTtcclxubG9hZGVyLnN1cHByZXNzUGxheUJ1dHRvbiA9IHRydWVcclxuZm9yIChjb25zdCBrZXkgaW4gUmVzb3VyY2VzKSB7IGxvYWRlci5hZGRSZXNvdXJjZShSZXNvdXJjZXNba2V5XSkgfVxyXG5mcmVlaG9sZC5zdGFydChsb2FkZXIpLnRoZW4oKCkgPT4gZnJlZWhvbGQuZ29Ub1NjZW5lKCdwbGF5JykpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=