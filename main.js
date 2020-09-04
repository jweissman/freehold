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
class Hud extends excalibur_1.ScreenElement {
    constructor() {
        super(...arguments);
        this.title = new excalibur_1.Label("Freehold v0.0.1", 20, 20);
        this.help = new excalibur_1.Label("actions: cut (t)imber / create (z)one / (d)elete zone / (b)uild wall / (c)ancel building", 20, 30);
        this.currentAction = new excalibur_1.Label("...", 20, 40);
    }
    onInitialize() {
        this.title.color = excalibur_1.Color.White;
        this.title.bold = true;
        this.add(this.title);
        this.currentAction.color = excalibur_1.Color.White;
        this.add(this.currentAction);
        this.help.color = excalibur_1.Color.White;
        this.add(this.help);
    }
}
class Play extends excalibur_1.Scene {
    constructor() {
        super(...arguments);
        this.cursorWorldPos = WorldPosition_1.pos(-1, -1);
        this.currentAction = 'cut';
    }
    onInitialize(engine) {
        // this.back
        console.log("[Play.onInitialize] Hello world!");
        const world = new World_1.World(constants_1.WORLD_DIMS);
        this.game = new Game_1.Game(world);
        this.game.setup();
        // this.add(this.game.terrain)
        this.add(this.game.vegetation);
        this.add(this.game.rawMaterials);
        this.add(this.game.plannedStructures);
        this.add(this.game.sigils);
        this.regionView = new ZoneView_1.ZoneView(this.game, this.camera);
        this.add(this.regionView);
        this.hud = new Hud();
        this.add(this.hud);
        this.setAction('cut');
        this.camera.pos =
            new excalibur_1.Vector(world.pawns[0].pos[0] * constants_1.CELL_SIZE, world.pawns[0].pos[1] * constants_1.CELL_SIZE);
        this.camera.zoom(2);
        const mouse = engine.input.pointers.primary;
        mouse.on('move', (e) => {
            this.updateCursorPosition(e.pos);
            if (this.lastMouseButton === excalibur_1.Input.PointerButton.Middle) {
                if (this.panning) {
                    this.camera.pos.addEqual(this.panOrigin.sub(mouse.lastWorldPos) //e.pos)
                    );
                }
                else {
                    this.camera.vel = new excalibur_1.Vector(0, 0);
                }
            }
            else {
                const enforceLines = this.currentAction === 'build';
                this.handleLeftDrag(mouse, enforceLines);
            }
        });
        mouse.on('up', () => {
            if (this.lastMouseButton == excalibur_1.Input.PointerButton.Left) {
                const enforceLines = this.currentAction === 'build';
                const { isFinished } = this.handleLeftDrag(mouse, enforceLines);
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
                if (this.currentAction === 'delete-zone') {
                    this.game.deleteZoneAt(this.cursorWorldPos);
                }
                const enforceLines = this.currentAction === 'build';
                this.handleLeftDrag(mouse, enforceLines);
            }
            else if (e.button == excalibur_1.Input.PointerButton.Middle) {
                this.panOrigin = mouse.lastWorldPos;
                this.panning = true;
            }
        });
        mouse.on('wheel', (e) => {
            if (e.deltaY > 0) {
                this.camera.zoom(Math.max(this.camera.getZoom() - 0.2, 1));
            }
            else if (e.deltaY < 0) {
                this.camera.zoom(Math.min(this.camera.getZoom() + 0.2, 4));
            }
        });
        this.cursor = new SingleCellBox_1.SingleCellBox();
        this.add(this.cursor);
        this.dragEnvelope = new excalibur_1.Actor({ color: excalibur_1.Color.Gray, opacity: 0.3, anchor: new excalibur_1.Vector(0, 0) });
        this.add(this.dragEnvelope);
        this.game.pawnTokens.forEach(pawnToken => this.add(pawnToken));
    }
    setAction(action) {
        this.hud.currentAction.text = "current action is: " + action;
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
        else if (keys.isHeld(excalibur_1.Input.Keys.T)) {
            this.setAction('cut');
        }
        else if (keys.isHeld(excalibur_1.Input.Keys.Z)) {
            this.setAction('create-zone');
        }
        else if (keys.isHeld(excalibur_1.Input.Keys.D)) {
            this.setAction('delete-zone');
        }
        else if (keys.isHeld(excalibur_1.Input.Keys.C)) {
            this.setAction('cancel');
        }
        else if (keys.isHeld(excalibur_1.Input.Keys.Esc)) {
            this.setAction('inspect');
            this.drag = null;
        }
    }
    applyCurrentActionToDragArea() {
        const [originX, originY] = this.drag.minima;
        const [destX, destY] = this.drag.maxima;
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
        else if (this.currentAction === 'cancel') {
            this.game.cancelPlans(WorldPosition_1.pos(originX, originY), WorldPosition_1.pos(destX, destY));
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
const structureTransparent = __webpack_require__(/*! ./images/structure-transparent.png */ "./src/freehold/images/structure-transparent.png");
const Resources = {
    Terrain: new excalibur_1.Texture(terrain),
    Trees: new excalibur_1.Texture(trees),
    Matter: new excalibur_1.Texture(matter),
    Icons: new excalibur_1.Texture(icons),
    Structure: new excalibur_1.Texture(structure),
    StructureTransparent: new excalibur_1.Texture(structureTransparent),
};
exports.Resources = Resources;
const sz = constants_1.CELL_SIZE;
const SpriteSheets = {
    Terrain: new excalibur_1.SpriteSheet(Resources.Terrain, 4, 4, sz, sz),
    Trees: new excalibur_1.SpriteSheet(Resources.Trees, 4, 4, sz, sz),
    Matter: new excalibur_1.SpriteSheet(Resources.Matter, 4, 4, sz, sz),
    Icons: new excalibur_1.SpriteSheet(Resources.Icons, 4, 4, sz, sz),
    Structure: new excalibur_1.SpriteSheet(Resources.Structure, 4, 4, sz, sz),
    StructureTransparent: new excalibur_1.SpriteSheet(Resources.StructureTransparent, 4, 4, sz, sz),
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
            // ctx.
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
exports.DWARVEN_LANGUAGE = exports.PATHFINDING_TIMEOUT = exports.TREE_COVER_RATIO = exports.WORLD_DIMS = exports.INITIAL_PAWN_COUNT = exports.TREE_CUT_DURATION = exports.STACK_MAX = exports.INVENTORY_LIMIT = exports.SIGIL_AXE = exports.WALL_MASK = exports.MATERIAL_STACK_IMAGES = exports.MATERIAL_IMAGES = exports.WOOD_PIECE_IMAGES = exports.WOOD_STACK_IMAGES = exports.TREE_IMAGES = exports.WATER_IMAGES = exports.LAND_IMAGES = exports.CELL_SIZE = void 0;
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
exports.WALL_MASK = [
    // wsen
    0,
    9,
    4,
    14,
    1,
    8,
    10,
    7,
    6,
    15,
    12,
    2,
    11,
    3,
    13,
    5 // 1111 -- all connected
];
exports.SIGIL_AXE = 1;
/////////////////////////////
exports.INVENTORY_LIMIT = 6;
exports.STACK_MAX = 90;
exports.TREE_CUT_DURATION = 250;
exports.INITIAL_PAWN_COUNT = 25;
exports.WORLD_DIMS = [200, 200];
exports.TREE_COVER_RATIO = 0.35;
exports.PATHFINDING_TIMEOUT = 500;
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
// export const NAME_INITIAL_SYLLABLES = [
//   "Adrah", "Amand", "Arath", "Argel", "Atanat", "Arvel", "Arag", "Adel", "Alat", "Alcar", "Aldar", "Alg", "Ameth",
//     "Amar", "Amd", "Amar", "Alf", "Aer", "Breg",
//   "B", "Bel", "Belecth", "Borom", "Blanc", "Beleph", "Breg", "Briff", "Brytt", "Bucc", "Bung",
//   "Calm", "Castam", "Celeb", "Celand", "Calimeht", "Caranth", "Celeg", "Celeph",
//   "Da", "Di", "Dais", "Dur", "Deneth", "Dor", "Dud",
//   "Earen", "Ecthel", "Egalm", "Eldac", "Edrah", "Earw", "Elgant", "Elan", "Elat", "Erend",
//   "Fastr", "Far", "Filib", "Fean",
//   "Glo", "Gild", "Gelm", "Gald", "Glorfind", "Gothm", "Griff", "Grim", "Grimb", "Grithn", "Gr",
//   "H", "Ham", "Hur", "Hug", "Halfr", "Hald", "Hard", "Holm", "Hild", "Hir", "Herib", "Hirg", "Hirl", "Hobs", "Holf",
//   "I", "Irim", "Isengr", "Isumbr", "Isilm", "Ivorw", "Iv",
//   "Jag", "Jessam",
//   "Kham", "Kh", "Kil",
//   "L", "Lil", "Lag", "Lal", "Landrov", "Larg", "Laur", "Lavend", "Lenw", "Le", "Lorg", "Loth", "Luth",
//   "Mad", "Maedhr", "Magl", "Mal", "Maht", "Mair", "Malan", "Malv", "Marmad", "Mel", "Minas",
//     "Mabl", "Mor", "Mir", 
//   "Nah", "Nal", "Narv", "Nar",
//   "Orgul", "Or", "Oroph", "Oss", 
//   "Palant", "Palland", "Pans", "Pelend", "Pengol", "Peregr", "Primr",
//   "R", "Rum", "Regin", "Ros", "Row", "Ruf",
//   "S", "Sad", "Saer", "Sakalth", "Snag", "Saur", "Sur", "Soront",
//   "T", "Thor", "Tur", "Tarond", "Thar", "Turg",  "Tant", "Tulk", "Turamb",
//   "Uff", "Ugl", "Ufth", "Ulr", "Ulw",
//   "Valand", "Voronw", "Van", "Vanimeld",
//   "Wilib", "Wilcom",
//   "Yav",
//   "Zam", "Zir", "Zimrah", "Zimrath"
//   // "Beo", "Gron", "Sam", "Tim",
//   // "Gim", "Glo", "El", "Fi", "Fast",
//   // "Fea", "Fara", "Bara", "Boro", "Hur",
//   // "Tur", "Isild", "Bilb", "Earen", "Bere",
//   // "Di", "Bele", "Calmac", "Da", "Arvel", "Fastr",
// ]
// export const NAME_FINAL_SYLLABLES = [
//   "ad", "am", "as", "ast", "ard", "an", "anth", "ar", "arn", "acil", "adoc", "akh", "ald", "and", "al", "ach", "arth",
//   "e", "eg", "ed", "en", "ert",
//   "i", "im", "in", "ir", "il", "ich", "ion", "iel", "ian", "ie", "ida", "ian", "ine", "imbor", "indor", "ily",
//   "o", "om", "on", "or", "orn", "oth", "ob", "og", "ose", "olas", "orm", "odh",
//   "ur", "ung", "und", "ulas", "uin", "us",
//   "y", "yst",
//   //"n", "li", "well", "wise", "sy", "kin",
//   //"son", "nor", "ich", "wulf", "in", "im",
//   //"dur", "grim", "hil", "dil", "red", "bo",
//   //"mir", "il", "or", "ur"
// ]


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

/***/ "./src/freehold/images/structure-transparent.png":
/*!*******************************************************!*\
  !*** ./src/freehold/images/structure-transparent.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d7939eb1c127ea688b2c0fb7881ad920.png";

/***/ }),

/***/ "./src/freehold/images/structure.png":
/*!*******************************************!*\
  !*** ./src/freehold/images/structure.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5e553165cae92ccdf6ad89364de10d7c.png";

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
        // this.terrain = new Grid<Terrain>(dims, ['land', 'water'])
        this.vegetation = new Grid_1.Grid(dims, ['grass', 'flower', 'tree']);
        this.rawMaterial = new Grid_1.Grid(dims, ['wood']);
        this.rawMaterialCount = new SimpleGrid_1.SimpleGrid(0);
        this.plannedStructure = new Grid_1.Grid(dims, ['wall']);
        this.plannedStructureMaterial = new Grid_1.Grid(dims, ['wood']);
        this.sigils = new Grid_1.Grid(dims, ['axe']);
        // this.terrain.fill('land')
        // this.vegetation.fill('nothing')
        this.vegetation.distributeRandomly('tree', constants_1.TREE_COVER_RATIO);
        // this.rawMaterial.fill('nothing')
        // this.sigils.fill('nothing')
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
const PositionSet_1 = __webpack_require__(/*! ./PositionSet */ "./src/freehold/models/PositionSet.ts");
// class TileMapManager {}
class Game {
    constructor(world) {
        this.world = world;
        this.zones = [];
        this.markedTreePositions = [];
        this.pawnManager = new PawnManagement_1.PawnManagement(this);
        this.ticks = 0;
    }
    setup() {
        const vegetationImageMap = { 'tree': constants_1.TREE_IMAGES };
        this.vegetation = this.assembleTiles('vegetation', Resources_1.SpriteSheets.Trees, this.world.vegetation, vegetationImageMap);
        const rawMaterialsImageMap = {};
        this.rawMaterials = this.assembleTiles('matter', Resources_1.SpriteSheets.Matter, this.world.rawMaterial, rawMaterialsImageMap);
        const sigilImageMap = { 'axe': [constants_1.SIGIL_AXE] };
        this.sigils = this.assembleTiles('sigils', Resources_1.SpriteSheets.Icons, this.world.sigils, sigilImageMap);
        // const plannedStructureImageMap = {}
        this.plannedStructures = this.assembleTiles('structure', Resources_1.SpriteSheets.StructureTransparent, this.world.plannedStructure, {});
        // this.plannedStructures.
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
        this.world.vegetation.unset(position);
        this.sigils.getCell(ax, ay).clearSprites();
        this.world.sigils.unset(position);
        this.markedTreePositions = this.markedTreePositions.filter(treePos => !WorldPosition_1.posEq(treePos, position));
        this.world.rawMaterial.set(position, 'wood');
        this.world.rawMaterialCount.set(position, 1);
        this.rawMaterials.getCell(ax, ay).pushSprite(new excalibur_1.TileSprite('matter', pick_1.pick(...constants_1.WOOD_PIECE_IMAGES)));
    }
    gatherResource(position, maxToRemove) {
        const kind = this.world.rawMaterial.at(position);
        const amountAtPosition = this.world.rawMaterialCount.at(position);
        const amountRemoved = Math.min(amountAtPosition, maxToRemove);
        const amountRemaining = amountAtPosition - amountRemoved;
        this.world.rawMaterialCount.set(position, amountRemaining);
        if (amountRemaining === 0) {
            this.world.rawMaterial.unset(position); //, 'nothing')
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
        const positions = new PositionSet_1.PositionSet();
        const topLeft = this.enforceBounds(origin);
        const bottomRight = this.enforceBounds(destination);
        for (let x = topLeft[0]; x <= bottomRight[0]; x++) {
            for (let y = topLeft[1]; y <= bottomRight[1]; y++) {
                console.log("---> Building wall at " + x + ", " + y);
                this.world.plannedStructure.set(WorldPosition_1.pos(x, y), 'wall');
                positions.add(WorldPosition_1.pos(x, y));
            }
        }
        for (const position of positions.merge(positions.fringe).array) {
            this.paveTile(position, this.world.plannedStructure, this.plannedStructures, 'wall', 'structure', constants_1.WALL_MASK);
        }
    }
    cancelPlans(origin, destination) {
        const positions = new PositionSet_1.PositionSet();
        const topLeft = this.enforceBounds(origin);
        const bottomRight = this.enforceBounds(destination);
        for (let x = topLeft[0]; x <= bottomRight[0]; x++) {
            for (let y = topLeft[1]; y <= bottomRight[1]; y++) {
                console.log("---> Cancel building at " + x + ", " + y);
                this.world.plannedStructure.unset(WorldPosition_1.pos(x, y)); //, 'wall')
                positions.add(WorldPosition_1.pos(x, y));
            }
        }
        for (const position of positions.merge(positions.fringe).array) {
            this.paveTile(position, this.world.plannedStructure, this.plannedStructures, 'wall', 'structure', constants_1.WALL_MASK);
        }
    }
    declareZone(topLeft, bottomRight) {
        topLeft = this.enforceBounds(topLeft);
        bottomRight = this.enforceBounds(bottomRight);
        const color = new excalibur_1.Color(pick_1.pick(60, 90, 120), pick_1.pick(60, 90, 120), pick_1.pick(60, 90, 120), 0.5);
        if (topLeft[0] <= bottomRight[0] && topLeft[1] <= bottomRight[1]) {
            // console.log("---> Creating zone from " + topLeft + " to " + bottomRight)
            this.zones.push({
                topLeft, bottomRight, color
            });
        }
        else {
            // console.log("---> Not creating zone; zone had no size?")
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
    paveTile(position, grid, tilemap, kind, paletteName, bitmask) {
        const [x, y] = position;
        const cell = tilemap.getCell(x, y);
        if (grid.at(position) === kind) {
            const neighbors = grid.labelledNeighborsAt(position);
            const mask = (neighbors.north === kind ? 1 : 0) * 1 +
                (neighbors.east === kind ? 1 : 0) * 2 +
                (neighbors.south === kind ? 1 : 0) * 4 +
                (neighbors.west === kind ? 1 : 0) * 8;
            const sprite = new excalibur_1.TileSprite(paletteName, bitmask[mask]);
            cell.clearSprites();
            cell.pushSprite(sprite);
        }
        else if (grid.at(position) === undefined) {
            cell.clearSprites();
        }
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
        this.cells[y] = this.cells[y] || [];
        if (this.cells[y][x] !== undefined) {
            return this.dereference(this.cells[y][x]);
        }
    }
    set(location, value) {
        // console.log("[Grid.set] At location: " + location + ", value: " + value)
        const [x, y] = location;
        this.cells[y] = this.cells[y] || [];
        this.cells[y][x] = this.reference(value);
    }
    unset(location) {
        const [x, y] = location;
        this.cells[y] = this.cells[y] || [];
        this.cells[y][x] = undefined; //this.reference(value);
    }
    labelledNeighborsAt(location) {
        const [x, y] = location;
        return {
            east: this.at(WorldPosition_1.pos(x + 1, y)),
            west: this.at(WorldPosition_1.pos(x - 1, y)),
            north: this.at(WorldPosition_1.pos(x, y - 1)),
            south: this.at(WorldPosition_1.pos(x, y + 1)),
        };
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
const constants_1 = __webpack_require__(/*! ../constants */ "./src/freehold/constants.ts");
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
            if (elapsed > constants_1.PATHFINDING_TIMEOUT) {
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
                if (this.game.ticks % 14 !== 0) {
                    return;
                }
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
    merge(other) {
        const merged = new PositionSet();
        for (const position of this.array) {
            if (!merged.has(position)) {
                merged.add(position);
            }
        }
        for (const position of other.array) {
            if (!merged.has(position)) {
                merged.add(position);
            }
        }
        return merged;
    }
    get fringe() {
        const theFringe = new PositionSet();
        for (let i = 0; i < this.arr.length; i++) {
            const pos = this.arr[i];
            for (const neighbor of PositionSet.neighborsOf(pos).array) {
                if (!theFringe.has(neighbor) && !this.has(neighbor)) {
                    theFringe.add(neighbor);
                }
            }
        }
        return theFringe;
    }
    static neighborsOf(location) {
        const [x, y] = location;
        const positions = new PositionSet();
        positions.add(WorldPosition_1.pos(x, y + 1));
        positions.add(WorldPosition_1.pos(x, y - 1));
        positions.add(WorldPosition_1.pos(x + 1, y));
        positions.add(WorldPosition_1.pos(x - 1, y));
        return positions;
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
            const pawnName = pick_1.pick(...language.stems) + pick_1.pick(...language.suffixes);
            this.pawns.push(this.makePawn(pawnName, pawnPositions[i]));
        }
    }
    get width() { return this.dimensions[0]; }
    get height() { return this.dimensions[1]; }
    // get terrain(): Grid<Terrain> { return this.map.terrain }
    get vegetation() { return this.map.vegetation; }
    get sigils() { return this.map.sigils; }
    get rawMaterial() { return this.map.rawMaterial; }
    get rawMaterialCount() { return this.map.rawMaterialCount; }
    get plannedStructure() { return this.map.plannedStructure; }
    get plannedStructureMaterial() { return this.map.plannedStructureMaterial; }
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
        const timber = this.game.rawMaterialLocations('wood');
        // console.log("---> Outstanding wood is at ", timber)
        return timber.filter(location => !this.game.isLocationWithinAnyZone(location)).filter(location => !this.assignedItemLocations.has(location));
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
                const kind = this.game.rawMaterialKindAtLocation(activityTarget) //=== 'nothing'
                    ? this.game.rawMaterialKindAtLocation(activityTarget)
                    : token.pawn.inventory[0];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyZWVob2xkRW5naW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9QbGF5LnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9SZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL2FjdG9ycy9QYXduVG9rZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL2FjdG9ycy9TaW5nbGVDZWxsQm94LnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9hY3RvcnMvWm9uZVZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL2NhbnZhcy9TaGFwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvaW1hZ2VzL2ljb25zLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvaW1hZ2VzL21hdHRlci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL2ltYWdlcy9zdHJ1Y3R1cmUtdHJhbnNwYXJlbnQucG5nIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9pbWFnZXMvc3RydWN0dXJlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvaW1hZ2VzL3RlcnJhaW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9pbWFnZXMvdHJlZXMucG5nIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9tb2RlbHMvQ2FydG9ncmFtLnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9tb2RlbHMvRHJhZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvbW9kZWxzL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL21vZGVscy9HcmlkLnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9tb2RlbHMvTmF2aWdhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9tb2RlbHMvUGF3bk1hbmFnZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL21vZGVscy9Qb3NpdGlvblNldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvbW9kZWxzL1NpbXBsZUdyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL21vZGVscy9Xb3JsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvbW9kZWxzL1dvcmxkUG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL21vZGVscy9hY3Rpdml0aWVzL0N1dFRpbWJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvbW9kZWxzL2FjdGl2aXRpZXMvSGF1bC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvdXRpbC9waWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC91dGlsL3NodWZmbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL3V0aWwvdGFrZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FB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QyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUVqQyxNQUFNLFFBQVEsR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztBQUN0QyxNQUFNLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoQyxRQUFRLENBQUMsZUFBZSxHQUFHLGlCQUFLLENBQUMsT0FBTyxDQUFDLGNBQWM7QUFDZCxFQUFFLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFDLHVCQUF1QjtBQUM1RSxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUUzQixNQUFNLE1BQU0sR0FBRyxJQUFJLGtCQUFNLEVBQUUsQ0FBQztBQUM1QixNQUFNLENBQUMsa0JBQWtCLEdBQUcsSUFBSTtBQUNoQyxLQUFLLE1BQU0sR0FBRyxJQUFJLHFCQUFTLEVBQUU7SUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FBRTtBQUNuRSxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LnRzXCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzICovXHJcbmltcG9ydCB7IEVuZ2luZSwgRGlzcGxheU1vZGUsIExvYWRlciB9IGZyb20gJ2V4Y2FsaWJ1cic7XHJcblxyXG5leHBvcnQgY2xhc3MgRnJlZWhvbGRFbmdpbmUgZXh0ZW5kcyBFbmdpbmUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoeyBkaXNwbGF5TW9kZTogRGlzcGxheU1vZGUuRnVsbFNjcmVlbiB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0KGxvYWRlcjogTG9hZGVyKSB7IHJldHVybiBzdXBlci5zdGFydChsb2FkZXIpIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTY2VuZSwgVmVjdG9yLCBBY3RvciwgQ29sb3IsIElucHV0LCBMYWJlbCwgU2NyZWVuRWxlbWVudCB9IGZyb20gXCJleGNhbGlidXJcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL21vZGVscy9HYW1lXCI7XHJcbmltcG9ydCB7IFdvcmxkIH0gZnJvbSBcIi4vbW9kZWxzL1dvcmxkXCI7XHJcbmltcG9ydCB7IFdvcmxkUG9zaXRpb24sIEFjdGlvbiB9IGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCB7IENFTExfU0laRSwgV09STERfRElNUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBGcmVlaG9sZEVuZ2luZSB9IGZyb20gXCIuLi9GcmVlaG9sZEVuZ2luZVwiO1xyXG5pbXBvcnQgeyBwb3MgfSBmcm9tIFwiLi9tb2RlbHMvV29ybGRQb3NpdGlvblwiO1xyXG5pbXBvcnQgeyBEcmFnIH0gZnJvbSBcIi4vbW9kZWxzL0RyYWdcIjtcclxuaW1wb3J0IHsgU2luZ2xlQ2VsbEJveCB9IGZyb20gXCIuL2FjdG9ycy9TaW5nbGVDZWxsQm94XCI7XHJcbmltcG9ydCB7IFpvbmVWaWV3IH0gZnJvbSBcIi4vYWN0b3JzL1pvbmVWaWV3XCI7XHJcblxyXG5jbGFzcyBIdWQgZXh0ZW5kcyBTY3JlZW5FbGVtZW50IHtcclxuICB0aXRsZTogTGFiZWwgPSBuZXcgTGFiZWwoXCJGcmVlaG9sZCB2MC4wLjFcIiwgMjAsIDIwKVxyXG4gIGhlbHA6IExhYmVsID0gbmV3IExhYmVsKFwiYWN0aW9uczogY3V0ICh0KWltYmVyIC8gY3JlYXRlICh6KW9uZSAvIChkKWVsZXRlIHpvbmUgLyAoYil1aWxkIHdhbGwgLyAoYylhbmNlbCBidWlsZGluZ1wiLCAyMCwgMzApXHJcbiAgY3VycmVudEFjdGlvbjogTGFiZWwgPSBuZXcgTGFiZWwoXCIuLi5cIiwgMjAsIDQwKVxyXG4gIG9uSW5pdGlhbGl6ZSgpIHtcclxuICAgIHRoaXMudGl0bGUuY29sb3IgPSBDb2xvci5XaGl0ZVxyXG4gICAgdGhpcy50aXRsZS5ib2xkID0gdHJ1ZVxyXG4gICAgdGhpcy5hZGQodGhpcy50aXRsZSlcclxuICAgIHRoaXMuY3VycmVudEFjdGlvbi5jb2xvciA9IENvbG9yLldoaXRlXHJcbiAgICB0aGlzLmFkZCh0aGlzLmN1cnJlbnRBY3Rpb24pXHJcbiAgICB0aGlzLmhlbHAuY29sb3IgPSBDb2xvci5XaGl0ZVxyXG4gICAgdGhpcy5hZGQodGhpcy5oZWxwKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXkgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgZ2FtZTogR2FtZVxyXG4gIGN1cnNvcjogU2luZ2xlQ2VsbEJveFxyXG4gIGN1cnNvcldvcmxkUG9zOiBXb3JsZFBvc2l0aW9uID0gcG9zKC0xLC0xKVxyXG4gIGRyYWc/OiBEcmFnXHJcbiAgZHJhZ0VudmVsb3BlOiBBY3RvclxyXG4gIGN1cnJlbnRBY3Rpb246IEFjdGlvbiA9ICdjdXQnXHJcblxyXG4gIGh1ZDogSHVkO1xyXG4gIHJlZ2lvblZpZXc6IFpvbmVWaWV3XHJcblxyXG4gIGxhc3RNb3VzZUJ1dHRvbjogSW5wdXQuUG9pbnRlckJ1dHRvblxyXG5cclxuICBwYW5PcmlnaW46IFZlY3RvclxyXG4gIHBhbm5pbmc6IGJvb2xlYW5cclxuXHJcbiAgb25Jbml0aWFsaXplKGVuZ2luZTogRnJlZWhvbGRFbmdpbmUpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMuYmFja1xyXG4gICAgY29uc29sZS5sb2coXCJbUGxheS5vbkluaXRpYWxpemVdIEhlbGxvIHdvcmxkIVwiKVxyXG5cclxuICAgIGNvbnN0IHdvcmxkID0gbmV3IFdvcmxkKFdPUkxEX0RJTVMpXHJcbiAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSh3b3JsZClcclxuICAgIHRoaXMuZ2FtZS5zZXR1cCgpXHJcblxyXG4gICAgLy8gdGhpcy5hZGQodGhpcy5nYW1lLnRlcnJhaW4pXHJcbiAgICB0aGlzLmFkZCh0aGlzLmdhbWUudmVnZXRhdGlvbilcclxuICAgIHRoaXMuYWRkKHRoaXMuZ2FtZS5yYXdNYXRlcmlhbHMpXHJcbiAgICB0aGlzLmFkZCh0aGlzLmdhbWUucGxhbm5lZFN0cnVjdHVyZXMpXHJcbiAgICB0aGlzLmFkZCh0aGlzLmdhbWUuc2lnaWxzKVxyXG5cclxuICAgIHRoaXMucmVnaW9uVmlldyA9IG5ldyBab25lVmlldyh0aGlzLmdhbWUsIHRoaXMuY2FtZXJhKVxyXG4gICAgdGhpcy5hZGQodGhpcy5yZWdpb25WaWV3KVxyXG5cclxuICAgIHRoaXMuaHVkID0gbmV3IEh1ZCgpXHJcbiAgICB0aGlzLmFkZCh0aGlzLmh1ZClcclxuICAgIHRoaXMuc2V0QWN0aW9uKCdjdXQnKVxyXG5cclxuICAgIHRoaXMuY2FtZXJhLnBvcyA9XHJcbiAgICAgIG5ldyBWZWN0b3Iod29ybGQucGF3bnNbMF0ucG9zWzBdICogQ0VMTF9TSVpFLCB3b3JsZC5wYXduc1swXS5wb3NbMV0gKiBDRUxMX1NJWkUpO1xyXG4gICAgdGhpcy5jYW1lcmEuem9vbSgyKVxyXG5cclxuICAgIGNvbnN0IG1vdXNlID0gZW5naW5lLmlucHV0LnBvaW50ZXJzLnByaW1hcnlcclxuICAgIG1vdXNlLm9uKCdtb3ZlJywgKGUpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVDdXJzb3JQb3NpdGlvbihlLnBvcylcclxuICAgICAgaWYgKHRoaXMubGFzdE1vdXNlQnV0dG9uID09PSBJbnB1dC5Qb2ludGVyQnV0dG9uLk1pZGRsZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhbm5pbmcpIHtcclxuICAgICAgICAgIHRoaXMuY2FtZXJhLnBvcy5hZGRFcXVhbChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhbk9yaWdpbi5zdWIoIG1vdXNlLmxhc3RXb3JsZFBvcykgIC8vZS5wb3MpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY2FtZXJhLnZlbCA9IG5ldyBWZWN0b3IoMCwwKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBlbmZvcmNlTGluZXMgPSB0aGlzLmN1cnJlbnRBY3Rpb24gPT09ICdidWlsZCdcclxuICAgICAgICB0aGlzLmhhbmRsZUxlZnREcmFnKG1vdXNlLCBlbmZvcmNlTGluZXMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBtb3VzZS5vbigndXAnLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmxhc3RNb3VzZUJ1dHRvbiA9PSBJbnB1dC5Qb2ludGVyQnV0dG9uLkxlZnQpIHtcclxuICAgICAgICBjb25zdCBlbmZvcmNlTGluZXMgPSB0aGlzLmN1cnJlbnRBY3Rpb24gPT09ICdidWlsZCdcclxuICAgICAgICBjb25zdCB7IGlzRmluaXNoZWQgfSA9IHRoaXMuaGFuZGxlTGVmdERyYWcobW91c2UsIGVuZm9yY2VMaW5lcylcclxuICAgICAgICBpZihpc0ZpbmlzaGVkKSB7IHJldHVybiB0aGlzLmFwcGx5Q3VycmVudEFjdGlvblRvRHJhZ0FyZWEoKSB9XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5sYXN0TW91c2VCdXR0b24gPT09IElucHV0LlBvaW50ZXJCdXR0b24uTWlkZGxlKSB7XHJcbiAgICAgICAgdGhpcy5wYW5uaW5nID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIG1vdXNlLm9uKCdkb3duJywgKGUpID0+IHtcclxuICAgICAgdGhpcy5sYXN0TW91c2VCdXR0b24gPSBlLmJ1dHRvblxyXG4gICAgICBpZiAoZS5idXR0b24gPT0gSW5wdXQuUG9pbnRlckJ1dHRvbi5MZWZ0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFjdGlvbiA9PT0gJ2RlbGV0ZS16b25lJykge1xyXG4gICAgICAgICAgdGhpcy5nYW1lLmRlbGV0ZVpvbmVBdCh0aGlzLmN1cnNvcldvcmxkUG9zKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBlbmZvcmNlTGluZXMgPSB0aGlzLmN1cnJlbnRBY3Rpb24gPT09ICdidWlsZCdcclxuICAgICAgICB0aGlzLmhhbmRsZUxlZnREcmFnKG1vdXNlLCBlbmZvcmNlTGluZXMpXHJcbiAgICAgIH0gZWxzZSBpZiAoZS5idXR0b24gPT0gSW5wdXQuUG9pbnRlckJ1dHRvbi5NaWRkbGUpIHtcclxuICAgICAgICB0aGlzLnBhbk9yaWdpbiA9IG1vdXNlLmxhc3RXb3JsZFBvc1xyXG4gICAgICAgIHRoaXMucGFubmluZyA9IHRydWVcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBtb3VzZS5vbignd2hlZWwnLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5kZWx0YVkgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuem9vbShNYXRoLm1heCh0aGlzLmNhbWVyYS5nZXRab29tKCkgLSAwLjIsIDEpKVxyXG4gICAgICB9IGVsc2UgaWYgKGUuZGVsdGFZIDwgMCkge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnpvb20oTWF0aC5taW4odGhpcy5jYW1lcmEuZ2V0Wm9vbSgpICsgMC4yLCA0KSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLmN1cnNvciA9IG5ldyBTaW5nbGVDZWxsQm94KClcclxuICAgIHRoaXMuYWRkKHRoaXMuY3Vyc29yKVxyXG5cclxuICAgIHRoaXMuZHJhZ0VudmVsb3BlID0gbmV3IEFjdG9yKHsgY29sb3I6IENvbG9yLkdyYXksIG9wYWNpdHk6IDAuMywgYW5jaG9yOiBuZXcgVmVjdG9yKDAsIDApIH0pXHJcbiAgICB0aGlzLmFkZCh0aGlzLmRyYWdFbnZlbG9wZSlcclxuXHJcbiAgICB0aGlzLmdhbWUucGF3blRva2Vucy5mb3JFYWNoKHBhd25Ub2tlbiA9PiB0aGlzLmFkZChwYXduVG9rZW4pKVxyXG4gIH1cclxuXHJcbiAgc2V0QWN0aW9uKGFjdGlvbjogQWN0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLmh1ZC5jdXJyZW50QWN0aW9uLnRleHQgPSBcImN1cnJlbnQgYWN0aW9uIGlzOiBcIiArIGFjdGlvblxyXG4gICAgdGhpcy5jdXJyZW50QWN0aW9uID0gYWN0aW9uXHJcbiAgfVxyXG5cclxuICB1cGRhdGVDdXJzb3JQb3NpdGlvbihwb3NpdGlvbjogVmVjdG9yKTogdm9pZCB7XHJcbiAgICB0aGlzLmN1cnNvcldvcmxkUG9zID0gcG9zKFxyXG4gICAgICBNYXRoLmZsb29yKHBvc2l0aW9uLnggLyBDRUxMX1NJWkUpLCAvLyArIDEsXHJcbiAgICAgIE1hdGguZmxvb3IocG9zaXRpb24ueSAvIENFTExfU0laRSksIC8vICsgMSxcclxuICAgIClcclxuXHJcbiAgICB0aGlzLmN1cnNvci5wb3MgPSBuZXcgVmVjdG9yKFxyXG4gICAgICB0aGlzLmN1cnNvcldvcmxkUG9zWzBdICogQ0VMTF9TSVpFLFxyXG4gICAgICB0aGlzLmN1cnNvcldvcmxkUG9zWzFdICogQ0VMTF9TSVpFLFxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgb25QcmVVcGRhdGUoZW5naW5lOiBGcmVlaG9sZEVuZ2luZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZ2FtZSkgeyB0aGlzLmdhbWUudXBkYXRlKCkgfVxyXG5cclxuICAgIGNvbnN0IGtleXMgPSBlbmdpbmUuaW5wdXQua2V5Ym9hcmRcclxuICAgIGlmIChrZXlzLmlzSGVsZChJbnB1dC5LZXlzLkIpKSB7XHJcbiAgICAgIHRoaXMuc2V0QWN0aW9uKCdidWlsZCcpXHJcbiAgICB9IGVsc2UgaWYgKGtleXMuaXNIZWxkKElucHV0LktleXMuVCkpIHtcclxuICAgICAgdGhpcy5zZXRBY3Rpb24oJ2N1dCcpXHJcbiAgICB9IGVsc2UgaWYgKGtleXMuaXNIZWxkKElucHV0LktleXMuWikpIHtcclxuICAgICAgdGhpcy5zZXRBY3Rpb24oJ2NyZWF0ZS16b25lJylcclxuICAgIH0gZWxzZSBpZiAoa2V5cy5pc0hlbGQoSW5wdXQuS2V5cy5EKSkge1xyXG4gICAgICB0aGlzLnNldEFjdGlvbignZGVsZXRlLXpvbmUnKVxyXG4gICAgfSBlbHNlIGlmIChrZXlzLmlzSGVsZChJbnB1dC5LZXlzLkMpKSB7XHJcbiAgICAgIHRoaXMuc2V0QWN0aW9uKCdjYW5jZWwnKVxyXG4gICAgfSBlbHNlIGlmIChrZXlzLmlzSGVsZChJbnB1dC5LZXlzLkVzYykpIHtcclxuICAgICAgdGhpcy5zZXRBY3Rpb24oJ2luc3BlY3QnKVxyXG4gICAgICB0aGlzLmRyYWcgPSBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcHBseUN1cnJlbnRBY3Rpb25Ub0RyYWdBcmVhKCk6IHZvaWQge1xyXG4gICAgICAgY29uc3QgW29yaWdpblgsIG9yaWdpblldID0gdGhpcy5kcmFnLm1pbmltYVxyXG4gICAgICBjb25zdCBbZGVzdFgsIGRlc3RZXSA9IHRoaXMuZHJhZy5tYXhpbWFcclxuICAgICAgIGlmICh0aGlzLmN1cnJlbnRBY3Rpb24gPT09ICdjdXQnKSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tPiBDdXQgdGltYmVyIGZyb20gXCIgKyBvcmlnaW5YICsgXCIsXCIgKyBvcmlnaW5ZICsgXCIgdG8gXCIgKyBkZXN0WCArIFwiLCBcIiArIGRlc3RZKVxyXG4gICAgICAgICBmb3IgKGxldCB4ID0gb3JpZ2luWDsgeCA8PSBkZXN0WDsgeCsrKSB7XHJcbiAgICAgICAgICAgZm9yIChsZXQgeSA9IG9yaWdpblk7IHkgPD0gZGVzdFk7IHkrKykge1xyXG4gICAgICAgICAgICAgdGhpcy5nYW1lLm1hcmtUcmVlKHBvcyh4LCB5KSlcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50QWN0aW9uID09PSAnY3JlYXRlLXpvbmUnKSB7XHJcbiAgICAgICAgIHRoaXMuZ2FtZS5kZWNsYXJlWm9uZShwb3Mob3JpZ2luWCwgb3JpZ2luWSksIHBvcyhkZXN0WCwgZGVzdFkpKVxyXG4gICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRBY3Rpb24gPT09ICdidWlsZCcpIHtcclxuICAgICAgICAgdGhpcy5nYW1lLnBsYW5XYWxsKHBvcyhvcmlnaW5YLCBvcmlnaW5ZKSwgcG9zKGRlc3RYLCBkZXN0WSkpXHJcbiAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudEFjdGlvbiA9PT0gJ2NhbmNlbCcpIHtcclxuICAgICAgICAgdGhpcy5nYW1lLmNhbmNlbFBsYW5zKHBvcyhvcmlnaW5YLCBvcmlnaW5ZKSwgcG9zKGRlc3RYLCBkZXN0WSkpXHJcbiAgICAgICB9XHJcbiBcclxuICAgIC8vICB9XHJcbiAgICAvL31cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlTGVmdERyYWcobW91c2U6IElucHV0LlBvaW50ZXIsIGVuZm9yY2VMaW5lczogYm9vbGVhbik6IHsgaXNGaW5pc2hlZDogYm9vbGVhbiB9IHtcclxuICAgIGxldCBpc0ZpbmlzaGVkID0gZmFsc2VcclxuICAgIGlmIChtb3VzZS5pc0RyYWdTdGFydCkge1xyXG4gICAgICB0aGlzLmRyYWcgPSBuZXcgRHJhZyh0aGlzLmN1cnNvcldvcmxkUG9zLCBlbmZvcmNlTGluZXMpXHJcbiAgICB9IGVsc2UgaWYgKG1vdXNlLmlzRHJhZ0VuZCkge1xyXG4gICAgICB0aGlzLmRyYWdFbnZlbG9wZS52aXNpYmxlID0gZmFsc2VcclxuICAgICAgaXNGaW5pc2hlZD0gdHJ1ZVxyXG4gICAgfSBlbHNlIGlmIChtb3VzZS5pc0RyYWdnaW5nKSB7XHJcbiAgICAgIHRoaXMuZHJhZy5jb250aW51ZSh0aGlzLmN1cnNvcldvcmxkUG9zKVxyXG4gICAgICBjb25zdCBbb3JpZ2luWCwgb3JpZ2luWV0gPSB0aGlzLmRyYWcubWluaW1hXHJcbiAgICAgICBjb25zdCBbZGVzdFgsIGRlc3RZXSA9IHRoaXMuZHJhZy5tYXhpbWFcclxuICAgICAgdGhpcy5kcmFnRW52ZWxvcGUucG9zID0gbmV3IFZlY3RvcihcclxuICAgICAgICAob3JpZ2luWCAqIENFTExfU0laRSksIC8vICsgMSxcclxuICAgICAgICAob3JpZ2luWSAqIENFTExfU0laRSksIC8vICsgMSxcclxuICAgICAgKVxyXG4gICAgICB0aGlzLmRyYWdFbnZlbG9wZS53aWR0aCA9IChkZXN0WCAtIG9yaWdpblggKyAxKSAqIENFTExfU0laRVxyXG4gICAgICB0aGlzLmRyYWdFbnZlbG9wZS5oZWlnaHQgPSAoZGVzdFkgLSBvcmlnaW5ZICsgMSkgKiBDRUxMX1NJWkVcclxuICAgICAgdGhpcy5kcmFnRW52ZWxvcGUudmlzaWJsZSA9IHRydWVcclxuICAgIH1cclxuICAgIC8vIH1cclxuICAgICAgcmV0dXJuIHsgaXNGaW5pc2hlZH1cclxuICB9XHJcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzICovXHJcblxyXG5pbXBvcnQgeyBUZXh0dXJlLCBTcHJpdGVTaGVldCB9IGZyb20gXCJleGNhbGlidXJcIlxyXG5pbXBvcnQgeyBDRUxMX1NJWkUgfSBmcm9tIFwiLi9jb25zdGFudHNcIlxyXG5cclxuY29uc3QgdGVycmFpbiA9IHJlcXVpcmUoJy4vaW1hZ2VzL3RlcnJhaW4ucG5nJylcclxuY29uc3QgdHJlZXMgPSByZXF1aXJlKCcuL2ltYWdlcy90cmVlcy5wbmcnKVxyXG5jb25zdCBpY29ucyA9IHJlcXVpcmUoJy4vaW1hZ2VzL2ljb25zLnBuZycpXHJcbmNvbnN0IG1hdHRlciA9IHJlcXVpcmUoJy4vaW1hZ2VzL21hdHRlci5wbmcnKVxyXG5jb25zdCBzdHJ1Y3R1cmUgPSByZXF1aXJlKCcuL2ltYWdlcy9zdHJ1Y3R1cmUucG5nJylcclxuY29uc3Qgc3RydWN0dXJlVHJhbnNwYXJlbnQgPSByZXF1aXJlKCcuL2ltYWdlcy9zdHJ1Y3R1cmUtdHJhbnNwYXJlbnQucG5nJylcclxuXHJcbmNvbnN0IFJlc291cmNlcyA9IHtcclxuICBUZXJyYWluOiBuZXcgVGV4dHVyZSh0ZXJyYWluKSxcclxuICBUcmVlczogbmV3IFRleHR1cmUodHJlZXMpLFxyXG4gIE1hdHRlcjogbmV3IFRleHR1cmUobWF0dGVyKSxcclxuICBJY29uczogbmV3IFRleHR1cmUoaWNvbnMpLFxyXG4gIFN0cnVjdHVyZTogbmV3IFRleHR1cmUoc3RydWN0dXJlKSxcclxuICBTdHJ1Y3R1cmVUcmFuc3BhcmVudDogbmV3IFRleHR1cmUoc3RydWN0dXJlVHJhbnNwYXJlbnQpLFxyXG59XHJcblxyXG5jb25zdCBzeiA9IENFTExfU0laRVxyXG5jb25zdCBTcHJpdGVTaGVldHMgPSB7XHJcbiAgVGVycmFpbjogbmV3IFNwcml0ZVNoZWV0KFJlc291cmNlcy5UZXJyYWluLCA0LCA0LCBzeiwgc3opLFxyXG4gIFRyZWVzOiBuZXcgU3ByaXRlU2hlZXQoUmVzb3VyY2VzLlRyZWVzLCA0LCA0LCBzeiwgc3opLFxyXG4gIE1hdHRlcjogbmV3IFNwcml0ZVNoZWV0KFJlc291cmNlcy5NYXR0ZXIsIDQsIDQsIHN6LCBzeiksXHJcbiAgSWNvbnM6IG5ldyBTcHJpdGVTaGVldChSZXNvdXJjZXMuSWNvbnMsIDQsIDQsIHN6LCBzeiksXHJcbiAgU3RydWN0dXJlOiBuZXcgU3ByaXRlU2hlZXQoUmVzb3VyY2VzLlN0cnVjdHVyZSwgNCwgNCwgc3osIHN6KSxcclxuICBTdHJ1Y3R1cmVUcmFuc3BhcmVudDogbmV3IFNwcml0ZVNoZWV0KFJlc291cmNlcy5TdHJ1Y3R1cmVUcmFuc3BhcmVudCwgNCwgNCwgc3osIHN6KSxcclxufVxyXG5cclxuZXhwb3J0IHsgUmVzb3VyY2VzLCBTcHJpdGVTaGVldHMgfSIsImltcG9ydCB7IEFjdG9yLCBDb2xvciwgVmVjdG9yIH0gZnJvbSBcImV4Y2FsaWJ1clwiO1xyXG5pbXBvcnQgeyBDRUxMX1NJWkUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFBhd24sIFdvcmxkUG9zaXRpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgcGljayB9IGZyb20gXCIuLi91dGlsL3BpY2tcIjtcclxuaW1wb3J0IHsgU2hhcGVzIH0gZnJvbSBcIi4uL2NhbnZhcy9TaGFwZXNcIjtcclxuaW1wb3J0IHsgSUFjdGl2aXR5IH0gZnJvbSBcIi4uL21vZGVscy9JQWN0aXZpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXduVG9rZW4gZXh0ZW5kcyBBY3RvciB7XHJcbiAgcHJpb3JpdHkoYTogSUFjdGl2aXR5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXduLnByaW9yaXRpZXMuaW5kZXhPZihhLnRpdGxlKVxyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgfVxyXG4gIG1vdmluZyA9IGZhbHNlO1xyXG4gIGludGVyYWN0aW5nID0gZmFsc2U7XHJcbiAgcGF0aDogV29ybGRQb3NpdGlvbltdID0gW11cclxuICBzdGF0aWMgc3BlZWQgPSAxMjhcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHBhd246IFBhd24pIHtcclxuICAgIHN1cGVyKHtcclxuICAgICAgd2lkdGg6IENFTExfU0laRSxcclxuICAgICAgaGVpZ2h0OiBDRUxMX1NJWkUsXHJcbiAgICAgIGNvbG9yOiBwaWNrKENvbG9yLkJsdWUsIENvbG9yLlJlZCwgQ29sb3IuR3JlZW4sIENvbG9yLlllbGxvdywgQ29sb3IuQ2hhcnRyZXVzZSwgQ29sb3IuTWFnZW50YSksXHJcbiAgICAgIC8vIG9wYWNpdHk6IDAuNSxcclxuICAgICAgYW5jaG9yOiBuZXcgVmVjdG9yKDAuNSwgMC41KSxcclxuICAgICAgcG9zOiBuZXcgVmVjdG9yKHBhd24ucG9zWzBdICogQ0VMTF9TSVpFLCBwYXduLnBvc1sxXSAqIENFTExfU0laRSksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNraW4gPSBDb2xvci5PcmFuZ2UuY2xvbmUoKS5saWdodGVuKDAuNSlcclxuICBnZXQgc2hpcnQoKTogQ29sb3IgeyByZXR1cm4gdGhpcy5jb2xvci5jbG9uZSgpLmRhcmtlbigwLjUpIH1cclxuICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XHJcbiAgICBsZXQge3gsIHl9ID0gdGhpcy5wb3M7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmJ1xyXG5cclxuICAgIGNvbnN0IHRleHRMZW5ndGggPWN0eC5tZWFzdXJlVGV4dCh0aGlzLnBhd24ubmFtZSkud2lkdGhcclxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnBhd24ubmFtZSwgeCAtIHRleHRMZW5ndGgvMiArIENFTExfU0laRS8yLCB5IC0gOClcclxuXHJcbiAgICB4ICs9IENFTExfU0laRS8yXHJcbiAgICB5ICs9IENFTExfU0laRS8yXHJcbiAgICBTaGFwZXMuZWxsaXBzZShjdHgsXHJcbiAgICAgIHgsIHksIC8vICsgQ0VMTF9TSVpFLzQsXHJcbiAgICAgIDIqQ0VMTF9TSVpFLzgsIDIqQ0VMTF9TSVpFLzUsXHJcbiAgICAgIHRoaXMuc2hpcnQpXHJcblxyXG4gICAgU2hhcGVzLmVsbGlwc2UoY3R4LFxyXG4gICAgICB4LCB5IC0gQ0VMTF9TSVpFLzIsXHJcbiAgICAgIENFTExfU0laRS81LCBDRUxMX1NJWkUvNSxcclxuICAgICAgdGhpcy5za2luKVxyXG4gIH1cclxufSIsImltcG9ydCB7IFZlY3RvciwgQWN0b3IsIENvbG9yIH0gZnJvbSBcImV4Y2FsaWJ1clwiO1xyXG5pbXBvcnQgeyBDRUxMX1NJWkUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmV4cG9ydCBjbGFzcyBTaW5nbGVDZWxsQm94IGV4dGVuZHMgQWN0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICBjb2xvcjogQ29sb3IuR3JheSxcclxuICAgICAgd2lkdGg6IENFTExfU0laRSxcclxuICAgICAgaGVpZ2h0OiBDRUxMX1NJWkUsXHJcbiAgICAgIGFuY2hvcjogbmV3IFZlY3RvcigwLCAwKSxcclxuICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvciwgQWN0b3IsIENhbWVyYSwgQ29sb3IsIFRyYWl0cyB9IGZyb20gXCJleGNhbGlidXJcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9tb2RlbHMvR2FtZVwiO1xyXG5pbXBvcnQgeyBDRUxMX1NJWkUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHBvcyB9IGZyb20gXCIuLi9tb2RlbHMvV29ybGRQb3NpdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgWm9uZVZpZXcgZXh0ZW5kcyBBY3RvciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnYW1lOiBHYW1lLCBwcml2YXRlIGNhbWVyYTogQ2FtZXJhKSB7XHJcbiAgICBzdXBlcih7IHBvczogbmV3IFZlY3RvcigwLCAwKSB9KTtcclxuICAgIHRoaXMudHJhaXRzID0gdGhpcy50cmFpdHMuZmlsdGVyKHRyYWl0ID0+ICEodHJhaXQgaW5zdGFuY2VvZiBUcmFpdHMuT2Zmc2NyZWVuQ3VsbGluZykpXHJcbiAgfVxyXG5cclxuICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XHJcbiAgICB0aGlzLmdhbWUuem9uZXMuZm9yRWFjaCh6b25lID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJEcmF3IHpvbmUgXCIgKyB6b25lKVxyXG4gICAgICBjb25zdCBbeDAsIHkwXSA9IHpvbmUudG9wTGVmdDtcclxuICAgICAgY29uc3QgW3gxLCB5MV0gPSB6b25lLmJvdHRvbVJpZ2h0O1xyXG5cclxuICAgICAgdGhpcy5ncmlkQWxpZ25lZFJlY3QoY3R4LCB4MCwgeTAsIHgxLCB5MSwgem9uZS5jb2xvcilcclxuXHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZidcclxuICAgICAgLy8gY3R4LlxyXG4gICAgICBmb3IgKGxldCB4PXgwOyB4PD14MTsgeCsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeT15MDsgeTw9eTE7IHkrKykge1xyXG4gICAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLmdhbWUucmF3TWF0ZXJpYWxDb3VudEF0TG9jYXRpb24ocG9zKHgseSkpXHJcbiAgICAgICAgICBjdHguZmlsbFRleHQoXCJ4XCIgKyBjb3VudCwgeCpDRUxMX1NJWkUgKyBDRUxMX1NJWkUvMiwgeSpDRUxMX1NJWkUgKyBDRUxMX1NJWkUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ3JpZEFsaWduZWRSZWN0KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4MDogbnVtYmVyLCB5MDogbnVtYmVyLCB4MTogbnVtYmVyLCB5MTogbnVtYmVyLCBjb2xvcjogQ29sb3IpIHtcclxuXHJcbiAgICAgIGNvbnN0IHggPSB4MCAqIENFTExfU0laRTsgLy8rIHRoaXMuY2FtZXJhLnhcclxuICAgICAgY29uc3QgeSA9IHkwICogQ0VMTF9TSVpFOyAvLysgdGhpcy5jYW1lcmEueVxyXG4gICAgICBjb25zdCB3ID0gKHgxIC0geDAgKyAxKSAqIENFTExfU0laRTtcclxuICAgICAgY29uc3QgaCA9ICh5MSAtIHkwICsgMSkgKiBDRUxMX1NJWkU7XHJcblxyXG4gICAgICBjdHguZmlsbFN0eWxlID0gY29sb3IudG9SR0JBKCk7XHJcbiAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiZXhjYWxpYnVyXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFwZXMge1xyXG4gIHN0YXRpYyBlbGxpcHNlKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzWDogbnVtYmVyLCByYWRpdXNZOiBudW1iZXIsIGNvbG9yOiBDb2xvcik6IHZvaWQge1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpXHJcbiAgICBjdHguZWxsaXBzZSh4LCB5LCByYWRpdXNYLCByYWRpdXNZLDAsMCwyKk1hdGguUEkpXHJcbiAgICBjdHguY2xvc2VQYXRoKClcclxuXHJcbiAgICAvLyBjb25zdCBvbGRTdHlsZSA9IGN0eC5maWxsU3R5bGVcclxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvci50b1JHQkEoKVxyXG4gICAgY3R4LmZpbGwoKVxyXG4gICAgLy8gY3R4LmZpbGxTdHlsZSA9IG9sZFN0eWxlXHJcbiAgfVxyXG5cclxufSIsImltcG9ydCB7IERpbWVuc2lvbnMsIExhbmd1YWdlIH0gZnJvbSBcIi4vdHlwZXNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IENFTExfU0laRSA9IDE2XHJcblxyXG5leHBvcnQgY29uc3QgTEFORF9JTUFHRVMgID0gWzAsMSwyLDNdXHJcbmV4cG9ydCBjb25zdCBXQVRFUl9JTUFHRVMgPSBbNCw1LDYsN11cclxuXHJcbmV4cG9ydCBjb25zdCBUUkVFX0lNQUdFUyA9IFswLDFdXHJcblxyXG5leHBvcnQgY29uc3QgV09PRF9TVEFDS19JTUFHRVMgPSBbMF1cclxuZXhwb3J0IGNvbnN0IFdPT0RfUElFQ0VfSU1BR0VTID0gWzRdXHJcbi8vIGV4cG9ydCBjb25zdCBJUk9OX1NUQUNLX0lNQUdFUyA9IFsxXVxyXG4vLyBleHBvcnQgY29uc3QgSVJPTl9QSUVDRSA9IFs1XVxyXG5cclxuZXhwb3J0IGNvbnN0IE1BVEVSSUFMX0lNQUdFUyA9IHtcclxuICAnd29vZCc6IFdPT0RfUElFQ0VfSU1BR0VTLFxyXG59XHJcbmV4cG9ydCBjb25zdCBNQVRFUklBTF9TVEFDS19JTUFHRVMgPSB7XHJcbiAgJ3dvb2QnOiBXT09EX1NUQUNLX0lNQUdFUyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFdBTExfTUFTSyA9IFtcclxuICAgICAvLyB3c2VuXHJcbiAgMCwgLy8gMDAwMCAtLSBubyBjb25uZWN0aW9uc1xyXG4gIDksIC8vIDAwMDEgLS0gY29ubmVjdGVkIG5vcnRoXHJcbiAgNCwgLy8gMDAxMCAtLSBjb25uZWN0ZWQgZWFzdFxyXG4gIDE0LC8vIDAwMTEgLS0gY29ubmVjdGVkIG5vcnRoICsgZWFzdFxyXG4gIDEsIC8vIDAxMDAgLS0gY29ubmVjdGVkIHNvdXRoXHJcbiAgOCwgLy8gMDEwMSAtLSBjb25uZWN0ZWQgbm9ydGgtc291dGhcclxuICAxMCwgLy8gMDExMCAtLSBjb25uZWN0ZWQgc291dGggKyBlYXN0XHJcbiAgNywgLy8gMDExMSAtLSBjb25uZWN0ZWQgbm9ydGgtc291dGggKyBlYXN0XHJcbiAgNiwgLy8gMTAwMCAtLSBjb25uZWN0ZWQgd2VzdFxyXG4gIDE1LCAvLyAxMDAxIC0tIGNvbm5lY3RlZCB3ZXN0ICsgbm9ydGhcclxuICAxMiwgLy8gMTAxMCAtLSBjb25uZWN0ZWQgZWFzdC13ZXN0XHJcbiAgMiwgIC8vIDEwMTEgLS0gY29ubmVjdGVkIGVhc3Qtd2VzdCArIG5vcnRoXHJcbiAgMTEsIC8vIDExMDAgLS0gY29ubmVjdGVkIHdlc3QgKyBzb3V0aFxyXG4gIDMsIC8vIDExMDEgLS0gY29ubmVjdGVkIHdlc3QgKyBub3J0aC1zb3V0aFxyXG4gIDEzLCAgLy8gMTExMCAtLSBjb25uZWN0ZWQgZWFzdC13ZXN0ICsgc291dGhcclxuICA1ICAvLyAxMTExIC0tIGFsbCBjb25uZWN0ZWRcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IFNJR0lMX0FYRSA9IDFcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgY29uc3QgSU5WRU5UT1JZX0xJTUlUID0gNlxyXG5leHBvcnQgY29uc3QgU1RBQ0tfTUFYID0gOTBcclxuXHJcbmV4cG9ydCBjb25zdCBUUkVFX0NVVF9EVVJBVElPTiA9IDI1MFxyXG5cclxuZXhwb3J0IGNvbnN0IElOSVRJQUxfUEFXTl9DT1VOVCA9IDI1XHJcbmV4cG9ydCBjb25zdCBXT1JMRF9ESU1TID0gWzIwMCwyMDBdIGFzIERpbWVuc2lvbnNcclxuZXhwb3J0IGNvbnN0IFRSRUVfQ09WRVJfUkFUSU8gPSAwLjM1XHJcblxyXG5leHBvcnQgY29uc3QgUEFUSEZJTkRJTkdfVElNRU9VVCA9IDUwMFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IGNvbnN0IERXQVJWRU5fTEFOR1VBR0U6IExhbmd1YWdlID0ge1xyXG4gIG5hbWU6ICdEd2FydmlzaCcsXHJcbiAgLy8gcHJlZml4ZXM6IFsnQXInLF0sXHJcbiAgc3RlbXM6IFtcclxuICAgICdBemFnaCcsXHJcbiAgICAnQmFsJywgJ0JpZicsICdCb2YnLCAnQm9tYicsICdCb3JuJyxcclxuICAgICdEJywgJ0RvcicsICdEdXInLCdEd2FsJyxcclxuICAgICdGcicsICdGYXInLCAnRnVuZCcsICdGcmVyJywgJ0ZsJywgJ0ZpbCcsXHJcbiAgICAnR2ltbCcsICdHYW0nLCAnR3InLCAnR2wnLCAnR3dhaWgnLFxyXG4gICAgJ0liJyxcclxuICAgICdLaWwnLCAnS2gnLFxyXG4gICAgJ0xvbicsICdMYW5kcm92JyxcclxuICAgICdNJywgJ01lbmVsZCcsXHJcbiAgICAnTicsICdOYScsICdOb3InLCAnTmFydicsXHJcbiAgICAnTycsXHJcbiAgICAnVGVsY2gnLCAnVGhvcicsICdUaHInLCAnVGgnXHJcbiAgXSxcclxuICBzdWZmaXhlczogWydpbicsICdpcycsICdpJywgJ3VuJywgJ2ltJywgJ29yJywgJ2VyaW4nLCAnYXInLCAnYWluJywgJ2FsJ10sXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBFTFZFTl9MQU5HVUFHRTogTGFuZ3VhZ2UgPSB7XHJcbi8vICAgbmFtZTogJ0VsdmlzaCcsXHJcbi8vICAgc3RlbXNcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IE5BTUVfSU5JVElBTF9TWUxMQUJMRVMgPSBbXHJcbi8vICAgXCJBZHJhaFwiLCBcIkFtYW5kXCIsIFwiQXJhdGhcIiwgXCJBcmdlbFwiLCBcIkF0YW5hdFwiLCBcIkFydmVsXCIsIFwiQXJhZ1wiLCBcIkFkZWxcIiwgXCJBbGF0XCIsIFwiQWxjYXJcIiwgXCJBbGRhclwiLCBcIkFsZ1wiLCBcIkFtZXRoXCIsXHJcbi8vICAgICBcIkFtYXJcIiwgXCJBbWRcIiwgXCJBbWFyXCIsIFwiQWxmXCIsIFwiQWVyXCIsIFwiQnJlZ1wiLFxyXG4vLyAgIFwiQlwiLCBcIkJlbFwiLCBcIkJlbGVjdGhcIiwgXCJCb3JvbVwiLCBcIkJsYW5jXCIsIFwiQmVsZXBoXCIsIFwiQnJlZ1wiLCBcIkJyaWZmXCIsIFwiQnJ5dHRcIiwgXCJCdWNjXCIsIFwiQnVuZ1wiLFxyXG4vLyAgIFwiQ2FsbVwiLCBcIkNhc3RhbVwiLCBcIkNlbGViXCIsIFwiQ2VsYW5kXCIsIFwiQ2FsaW1laHRcIiwgXCJDYXJhbnRoXCIsIFwiQ2VsZWdcIiwgXCJDZWxlcGhcIixcclxuLy8gICBcIkRhXCIsIFwiRGlcIiwgXCJEYWlzXCIsIFwiRHVyXCIsIFwiRGVuZXRoXCIsIFwiRG9yXCIsIFwiRHVkXCIsXHJcbi8vICAgXCJFYXJlblwiLCBcIkVjdGhlbFwiLCBcIkVnYWxtXCIsIFwiRWxkYWNcIiwgXCJFZHJhaFwiLCBcIkVhcndcIiwgXCJFbGdhbnRcIiwgXCJFbGFuXCIsIFwiRWxhdFwiLCBcIkVyZW5kXCIsXHJcbi8vICAgXCJGYXN0clwiLCBcIkZhclwiLCBcIkZpbGliXCIsIFwiRmVhblwiLFxyXG4vLyAgIFwiR2xvXCIsIFwiR2lsZFwiLCBcIkdlbG1cIiwgXCJHYWxkXCIsIFwiR2xvcmZpbmRcIiwgXCJHb3RobVwiLCBcIkdyaWZmXCIsIFwiR3JpbVwiLCBcIkdyaW1iXCIsIFwiR3JpdGhuXCIsIFwiR3JcIixcclxuLy8gICBcIkhcIiwgXCJIYW1cIiwgXCJIdXJcIiwgXCJIdWdcIiwgXCJIYWxmclwiLCBcIkhhbGRcIiwgXCJIYXJkXCIsIFwiSG9sbVwiLCBcIkhpbGRcIiwgXCJIaXJcIiwgXCJIZXJpYlwiLCBcIkhpcmdcIiwgXCJIaXJsXCIsIFwiSG9ic1wiLCBcIkhvbGZcIixcclxuLy8gICBcIklcIiwgXCJJcmltXCIsIFwiSXNlbmdyXCIsIFwiSXN1bWJyXCIsIFwiSXNpbG1cIiwgXCJJdm9yd1wiLCBcIkl2XCIsXHJcbi8vICAgXCJKYWdcIiwgXCJKZXNzYW1cIixcclxuLy8gICBcIktoYW1cIiwgXCJLaFwiLCBcIktpbFwiLFxyXG4vLyAgIFwiTFwiLCBcIkxpbFwiLCBcIkxhZ1wiLCBcIkxhbFwiLCBcIkxhbmRyb3ZcIiwgXCJMYXJnXCIsIFwiTGF1clwiLCBcIkxhdmVuZFwiLCBcIkxlbndcIiwgXCJMZVwiLCBcIkxvcmdcIiwgXCJMb3RoXCIsIFwiTHV0aFwiLFxyXG4vLyAgIFwiTWFkXCIsIFwiTWFlZGhyXCIsIFwiTWFnbFwiLCBcIk1hbFwiLCBcIk1haHRcIiwgXCJNYWlyXCIsIFwiTWFsYW5cIiwgXCJNYWx2XCIsIFwiTWFybWFkXCIsIFwiTWVsXCIsIFwiTWluYXNcIixcclxuLy8gICAgIFwiTWFibFwiLCBcIk1vclwiLCBcIk1pclwiLCBcclxuLy8gICBcIk5haFwiLCBcIk5hbFwiLCBcIk5hcnZcIiwgXCJOYXJcIixcclxuLy8gICBcIk9yZ3VsXCIsIFwiT3JcIiwgXCJPcm9waFwiLCBcIk9zc1wiLCBcclxuLy8gICBcIlBhbGFudFwiLCBcIlBhbGxhbmRcIiwgXCJQYW5zXCIsIFwiUGVsZW5kXCIsIFwiUGVuZ29sXCIsIFwiUGVyZWdyXCIsIFwiUHJpbXJcIixcclxuLy8gICBcIlJcIiwgXCJSdW1cIiwgXCJSZWdpblwiLCBcIlJvc1wiLCBcIlJvd1wiLCBcIlJ1ZlwiLFxyXG4vLyAgIFwiU1wiLCBcIlNhZFwiLCBcIlNhZXJcIiwgXCJTYWthbHRoXCIsIFwiU25hZ1wiLCBcIlNhdXJcIiwgXCJTdXJcIiwgXCJTb3JvbnRcIixcclxuLy8gICBcIlRcIiwgXCJUaG9yXCIsIFwiVHVyXCIsIFwiVGFyb25kXCIsIFwiVGhhclwiLCBcIlR1cmdcIiwgIFwiVGFudFwiLCBcIlR1bGtcIiwgXCJUdXJhbWJcIixcclxuLy8gICBcIlVmZlwiLCBcIlVnbFwiLCBcIlVmdGhcIiwgXCJVbHJcIiwgXCJVbHdcIixcclxuLy8gICBcIlZhbGFuZFwiLCBcIlZvcm9ud1wiLCBcIlZhblwiLCBcIlZhbmltZWxkXCIsXHJcbi8vICAgXCJXaWxpYlwiLCBcIldpbGNvbVwiLFxyXG4vLyAgIFwiWWF2XCIsXHJcbi8vICAgXCJaYW1cIiwgXCJaaXJcIiwgXCJaaW1yYWhcIiwgXCJaaW1yYXRoXCJcclxuLy8gICAvLyBcIkJlb1wiLCBcIkdyb25cIiwgXCJTYW1cIiwgXCJUaW1cIixcclxuLy8gICAvLyBcIkdpbVwiLCBcIkdsb1wiLCBcIkVsXCIsIFwiRmlcIiwgXCJGYXN0XCIsXHJcbi8vICAgLy8gXCJGZWFcIiwgXCJGYXJhXCIsIFwiQmFyYVwiLCBcIkJvcm9cIiwgXCJIdXJcIixcclxuLy8gICAvLyBcIlR1clwiLCBcIklzaWxkXCIsIFwiQmlsYlwiLCBcIkVhcmVuXCIsIFwiQmVyZVwiLFxyXG4vLyAgIC8vIFwiRGlcIiwgXCJCZWxlXCIsIFwiQ2FsbWFjXCIsIFwiRGFcIiwgXCJBcnZlbFwiLCBcIkZhc3RyXCIsXHJcbi8vIF1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBOQU1FX0ZJTkFMX1NZTExBQkxFUyA9IFtcclxuLy8gICBcImFkXCIsIFwiYW1cIiwgXCJhc1wiLCBcImFzdFwiLCBcImFyZFwiLCBcImFuXCIsIFwiYW50aFwiLCBcImFyXCIsIFwiYXJuXCIsIFwiYWNpbFwiLCBcImFkb2NcIiwgXCJha2hcIiwgXCJhbGRcIiwgXCJhbmRcIiwgXCJhbFwiLCBcImFjaFwiLCBcImFydGhcIixcclxuLy8gICBcImVcIiwgXCJlZ1wiLCBcImVkXCIsIFwiZW5cIiwgXCJlcnRcIixcclxuLy8gICBcImlcIiwgXCJpbVwiLCBcImluXCIsIFwiaXJcIiwgXCJpbFwiLCBcImljaFwiLCBcImlvblwiLCBcImllbFwiLCBcImlhblwiLCBcImllXCIsIFwiaWRhXCIsIFwiaWFuXCIsIFwiaW5lXCIsIFwiaW1ib3JcIiwgXCJpbmRvclwiLCBcImlseVwiLFxyXG4vLyAgIFwib1wiLCBcIm9tXCIsIFwib25cIiwgXCJvclwiLCBcIm9yblwiLCBcIm90aFwiLCBcIm9iXCIsIFwib2dcIiwgXCJvc2VcIiwgXCJvbGFzXCIsIFwib3JtXCIsIFwib2RoXCIsXHJcbi8vICAgXCJ1clwiLCBcInVuZ1wiLCBcInVuZFwiLCBcInVsYXNcIiwgXCJ1aW5cIiwgXCJ1c1wiLFxyXG4vLyAgIFwieVwiLCBcInlzdFwiLFxyXG4vLyAgIC8vXCJuXCIsIFwibGlcIiwgXCJ3ZWxsXCIsIFwid2lzZVwiLCBcInN5XCIsIFwia2luXCIsXHJcbi8vICAgLy9cInNvblwiLCBcIm5vclwiLCBcImljaFwiLCBcInd1bGZcIiwgXCJpblwiLCBcImltXCIsXHJcbi8vICAgLy9cImR1clwiLCBcImdyaW1cIiwgXCJoaWxcIiwgXCJkaWxcIiwgXCJyZWRcIiwgXCJib1wiLFxyXG4vLyAgIC8vXCJtaXJcIiwgXCJpbFwiLCBcIm9yXCIsIFwidXJcIlxyXG4vLyBdIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMmQ4NTQ4YTA4YzU3ODM1YjIwMTk5MTYzNGY0OGNhMmMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmUxNGFkODYzZjc2ZjYwZDc2NzUzY2M1NWU5Mjk3ZGIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDc5MzllYjFjMTI3ZWE2ODhiMmMwZmI3ODgxYWQ5MjAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNWU1NTMxNjVjYWU5MmNjZGY2YWQ4OTM2NGRlMTBkN2MucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzAyNTVkOWQ2MmQ4OWM1ZjhlYzYwMjllNGNjNjQ1ZWQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjM1NTY4OTI0ODc5ZWJiZWE5Mzk4MTg5OTM1M2I2MjkucG5nXCI7IiwiaW1wb3J0IHsgV29ybGRQb3NpdGlvbiwgRGltZW5zaW9ucywgVmVnZXRhdGlvbiwgU2lnaWwsIE1hdGVyaWFsLCBTdHJ1Y3R1cmUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCIuL0dyaWRcIjtcclxuaW1wb3J0IHsgcG9zLCBieURpc3RhbmNlRnJvbSB9IGZyb20gXCIuL1dvcmxkUG9zaXRpb25cIjtcclxuaW1wb3J0IHsgcGljayB9IGZyb20gXCIuLi91dGlsL3BpY2tcIjtcclxuaW1wb3J0IHsgU2ltcGxlR3JpZCB9IGZyb20gXCIuL1NpbXBsZUdyaWRcIjtcclxuaW1wb3J0IHsgdGFrZSB9IGZyb20gXCIuLi91dGlsL3Rha2VcIjtcclxuaW1wb3J0IHsgVFJFRV9DT1ZFUl9SQVRJTyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbi8vIHR5cGUgTWF0dGVyID0geyBraW5kOiBNYXRlcmlhbCwgYW1vdW50OiBudW1iZXIgfVxyXG5leHBvcnQgY2xhc3MgQ2FydG9ncmFtIHtcclxuICAvLyB0ZXJyYWluOiBHcmlkPFRlcnJhaW4+XHJcbiAgdmVnZXRhdGlvbjogR3JpZDxWZWdldGF0aW9uPlxyXG5cclxuICByYXdNYXRlcmlhbDogR3JpZDxNYXRlcmlhbD5cclxuICByYXdNYXRlcmlhbENvdW50OiBTaW1wbGVHcmlkPG51bWJlcj5cclxuXHJcbiAgcGxhbm5lZFN0cnVjdHVyZTogR3JpZDxTdHJ1Y3R1cmU+XHJcbiAgcGxhbm5lZFN0cnVjdHVyZU1hdGVyaWFsOiBHcmlkPE1hdGVyaWFsPlxyXG4gIFxyXG4gIHNpZ2lsczogR3JpZDxTaWdpbD5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaW1zOiBEaW1lbnNpb25zKSB7XHJcbiAgICAvLyB0aGlzLnRlcnJhaW4gPSBuZXcgR3JpZDxUZXJyYWluPihkaW1zLCBbJ2xhbmQnLCAnd2F0ZXInXSlcclxuICAgIHRoaXMudmVnZXRhdGlvbiA9IG5ldyBHcmlkPFZlZ2V0YXRpb24+KGRpbXMsIFsnZ3Jhc3MnLCAnZmxvd2VyJywgJ3RyZWUnXSlcclxuXHJcbiAgICB0aGlzLnJhd01hdGVyaWFsID0gbmV3IEdyaWQ8TWF0ZXJpYWw+KGRpbXMsIFsnd29vZCcgXSlcclxuICAgIHRoaXMucmF3TWF0ZXJpYWxDb3VudCA9IG5ldyBTaW1wbGVHcmlkPG51bWJlcj4oMClcclxuXHJcbiAgICB0aGlzLnBsYW5uZWRTdHJ1Y3R1cmUgPSBuZXcgR3JpZDxTdHJ1Y3R1cmU+KGRpbXMsIFxyXG4gICAgICBbICd3YWxsJyBdXHJcbiAgICApXHJcblxyXG4gICAgdGhpcy5wbGFubmVkU3RydWN0dXJlTWF0ZXJpYWwgPSBuZXcgR3JpZDxNYXRlcmlhbD4oZGltcywgWyd3b29kJ10pXHJcblxyXG4gICAgdGhpcy5zaWdpbHMgPSBuZXcgR3JpZDxTaWdpbD4oZGltcywgWydheGUnXSlcclxuXHJcbiAgICAvLyB0aGlzLnRlcnJhaW4uZmlsbCgnbGFuZCcpXHJcbiAgICAvLyB0aGlzLnZlZ2V0YXRpb24uZmlsbCgnbm90aGluZycpXHJcbiAgICB0aGlzLnZlZ2V0YXRpb24uZGlzdHJpYnV0ZVJhbmRvbWx5KCd0cmVlJywgVFJFRV9DT1ZFUl9SQVRJTylcclxuICAgIC8vIHRoaXMucmF3TWF0ZXJpYWwuZmlsbCgnbm90aGluZycpXHJcbiAgICAvLyB0aGlzLnNpZ2lscy5maWxsKCdub3RoaW5nJylcclxuICB9XHJcblxyXG4gIGdldCB3aWR0aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5kaW1zWzBdIH1cclxuICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmRpbXNbMV0gfVxyXG5cclxuICBnZXQgY2VudGVyKCk6IFdvcmxkUG9zaXRpb24ge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgdGhpcy5kaW1zWzBdIC8gMixcclxuICAgICAgdGhpcy5kaW1zWzFdIC8gMlxyXG4gICAgXSBhcyBXb3JsZFBvc2l0aW9uXHJcbiAgfVxyXG5cclxuICBwaWNrUmFuZG9tQ2xlYXJMb2NhdGlvbigpOiBXb3JsZFBvc2l0aW9uIHtcclxuICAgIGNvbnN0IGxvY2F0aW9uczogV29ybGRQb3NpdGlvbltdID0gW11cclxuICAgIGZvciAobGV0IHk9MDsgeTx0aGlzLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgIGZvciAobGV0IHg9MDsgeDx0aGlzLndpZHRoOyB4KyspIHtcclxuICAgICAgICBpZiAodGhpcy52ZWdldGF0aW9uLmF0KHBvcyh4LHkpKSAhPT0gJ3RyZWUnKSB7XHJcbiAgICAgICAgICBsb2NhdGlvbnMucHVzaChwb3MoeCx5KSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwaWNrKC4uLmxvY2F0aW9ucylcclxuICB9XHJcblxyXG4gIHBpY2tDbGVhckxvY2F0aW9ucyhuOiBudW1iZXIsIG5lYXJQb2ludDogV29ybGRQb3NpdGlvbiA9IHRoaXMuY2VudGVyKTogV29ybGRQb3NpdGlvbltdIHtcclxuICAgIGNvbnN0IGxvY2F0aW9uczogV29ybGRQb3NpdGlvbltdID0gW11cclxuICAgIGZvciAobGV0IHk9MDsgeTx0aGlzLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgIGZvciAobGV0IHg9MDsgeDx0aGlzLndpZHRoOyB4KyspIHtcclxuICAgICAgICBpZiAodGhpcy52ZWdldGF0aW9uLmF0KHBvcyh4LHkpKSAhPT0gJ3RyZWUnKSB7XHJcbiAgICAgICAgICBsb2NhdGlvbnMucHVzaChwb3MoeCx5KSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0YWtlKG4sIGxvY2F0aW9ucy5zb3J0KGJ5RGlzdGFuY2VGcm9tKG5lYXJQb2ludCkpKVxyXG4gIH1cclxufSIsImltcG9ydCB7IERpbWVuc2lvbnMsIFdvcmxkUG9zaXRpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgcG9zIH0gZnJvbSBcIi4vV29ybGRQb3NpdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgRHJhZyB7XHJcbiAgb3JpZ2luOiBXb3JsZFBvc2l0aW9uO1xyXG4gIHByaXZhdGUgZGVzdDogV29ybGRQb3NpdGlvbjtcclxuICBleHRlbnQ6IERpbWVuc2lvbnM7XHJcblxyXG4gIGdldCBkZXN0aW5hdGlvbigpOiBXb3JsZFBvc2l0aW9uIHsgcmV0dXJuIHRoaXMuZGVzdCB8fCB0aGlzLm9yaWdpbiB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBXb3JsZFBvc2l0aW9uLCBwcml2YXRlIGZvcmNlTGluZXM6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgdGhpcy5vcmlnaW4gPSBwb3NpdGlvbjtcclxuICB9XHJcbiAgY29udGludWUocG9zaXRpb246IFdvcmxkUG9zaXRpb24pOiB2b2lkIHtcclxuICAgIGNvbnN0IG9mZnNldFggPSAwOyAvL3Bvc2l0aW9uWzBdID4gdGhpcy5vcmlnaW5bMF0gPyAwIDogMTtcclxuICAgIGNvbnN0IG9mZnNldFkgPSAwOyAvL3Bvc2l0aW9uWzFdID4gdGhpcy5vcmlnaW5bMV0gPyAwIDogMTtcclxuICAgIHRoaXMuZGVzdCA9IHBvcyhwb3NpdGlvblswXSAtIG9mZnNldFgsIHBvc2l0aW9uWzFdIC0gb2Zmc2V0WSk7XHJcbiAgICB0aGlzLmV4dGVudCA9IFtcclxuICAgICAgdGhpcy5kZXN0WzBdIC0gdGhpcy5vcmlnaW5bMF0sXHJcbiAgICAgIHRoaXMuZGVzdFsxXSAtIHRoaXMub3JpZ2luWzFdXHJcbiAgICBdIGFzIERpbWVuc2lvbnM7XHJcbiAgICBpZiAodGhpcy5mb3JjZUxpbmVzKSB7XHJcbiAgICAgIGlmIChNYXRoLmFicyh0aGlzLmV4dGVudFswXSkgPiBNYXRoLmFicyh0aGlzLmV4dGVudFsxXSkpIHtcclxuICAgICAgICB0aGlzLmRlc3RbMV0gPSB0aGlzLm9yaWdpblsxXVxyXG4gICAgICAgIC8vIHRoaXMuZXh0ZW50WzFdID0gMFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGVzdFswXSA9IHRoaXMub3JpZ2luWzBdXHJcbiAgICAgICAgLy8gdGhpcy5leHRlbnRbMF0gPSAwXHJcbiAgICAgIH1cclxuICAgICAgLy90aGlzLmV4dGVudCA9IFtcclxuICAgICAgLy8gIHRoaXMuZGVzdGluYXRpb25bMF0gLSB0aGlzLm9yaWdpblswXSxcclxuICAgICAgLy8gIHRoaXMuZGVzdGluYXRpb25bMV0gLSB0aGlzLm9yaWdpblsxXVxyXG4gICAgICAvL10gYXMgRGltZW5zaW9ucztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBtaW5pbWEoKTogV29ybGRQb3NpdGlvbiB7XHJcbiAgICBjb25zdCBtaW5pbWFYID0gTWF0aC5taW4odGhpcy5vcmlnaW5bMF0sIHRoaXMuZGVzdGluYXRpb25bMF0pO1xyXG4gICAgY29uc3QgbWluaW1hWSA9IE1hdGgubWluKHRoaXMub3JpZ2luWzFdLCB0aGlzLmRlc3RpbmF0aW9uWzFdKTtcclxuICAgIC8vIGNvbnN0IG1pbmltYVggPSBNYXRoLm1pbih0aGlzLm9yaWdpblswXSwgdGhpcy5vcmlnaW5bMF0gKyB0aGlzLmV4dGVudFswXSk7XHJcbiAgICAvLyBjb25zdCBtaW5pbWFZID0gTWF0aC5taW4odGhpcy5vcmlnaW5bMV0sIHRoaXMub3JpZ2luWzFdICsgdGhpcy5leHRlbnRbMV0pO1xyXG4gICAgcmV0dXJuIHBvcyhtaW5pbWFYLCBtaW5pbWFZKTtcclxuICB9XHJcblxyXG4gIGdldCBtYXhpbWEoKTogV29ybGRQb3NpdGlvbiB7XHJcbiAgICBjb25zdCBtYXhpbWFYID0gTWF0aC5tYXgodGhpcy5vcmlnaW5bMF0sIHRoaXMuZGVzdGluYXRpb25bMF0pO1xyXG4gICAgY29uc3QgbWF4aW1hWSA9IE1hdGgubWF4KHRoaXMub3JpZ2luWzFdLCB0aGlzLmRlc3RpbmF0aW9uWzFdKTtcclxuICAgIC8vIGNvbnN0IG1heGltYVggPSBNYXRoLm1heCh0aGlzLm9yaWdpblswXSwgdGhpcy5vcmlnaW5bMF0gKyB0aGlzLmV4dGVudFswXSk7XHJcbiAgICAvLyBjb25zdCBtYXhpbWFZID0gTWF0aC5tYXgodGhpcy5vcmlnaW5bMV0sIHRoaXMub3JpZ2luWzFdICsgdGhpcy5leHRlbnRbMV0pO1xyXG4gICAgcmV0dXJuIHBvcyhtYXhpbWFYLCBtYXhpbWFZKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgV29ybGQgfSBmcm9tIFwiLi9Xb3JsZFwiO1xyXG5pbXBvcnQgeyBUaWxlTWFwLCBTcHJpdGVTaGVldCwgVGlsZVNwcml0ZSwgQ29sb3IsIElucHV0IH0gZnJvbSBcImV4Y2FsaWJ1clwiO1xyXG5pbXBvcnQgeyBMQU5EX0lNQUdFUywgV0FURVJfSU1BR0VTLCBUUkVFX0lNQUdFUywgQ0VMTF9TSVpFLCBTSUdJTF9BWEUsIFdPT0RfUElFQ0VfSU1BR0VTLCBTVEFDS19NQVgsIE1BVEVSSUFMX0lNQUdFUywgTUFURVJJQUxfU1RBQ0tfSU1BR0VTLCBXQUxMX01BU0sgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwiLi9HcmlkXCI7XHJcbmltcG9ydCB7IFdvcmxkUG9zaXRpb24sIERpbWVuc2lvbnMsIE1hdGVyaWFsLCBJdGVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IHBpY2sgfSBmcm9tIFwiLi4vdXRpbC9waWNrXCI7XHJcbmltcG9ydCB7IFBhd25Ub2tlbiB9IGZyb20gXCIuLi9hY3RvcnMvUGF3blRva2VuXCI7XHJcbmltcG9ydCB7IFNwcml0ZVNoZWV0cyB9IGZyb20gXCIuLi9SZXNvdXJjZXNcIjtcclxuaW1wb3J0IHsgcG9zLCBwb3NFcSwgYXJlYUNvbnRhaW5zIH0gZnJvbSBcIi4vV29ybGRQb3NpdGlvblwiO1xyXG5pbXBvcnQgeyBQYXduTWFuYWdlbWVudCB9IGZyb20gXCIuL1Bhd25NYW5hZ2VtZW50XCI7XHJcbmltcG9ydCB7IFBvc2l0aW9uU2V0IH0gZnJvbSBcIi4vUG9zaXRpb25TZXRcIjtcclxuXHJcbnR5cGUgUmVnaW9uID0geyB0b3BMZWZ0OiBXb3JsZFBvc2l0aW9uLCBib3R0b21SaWdodDogV29ybGRQb3NpdGlvbiwgY29sb3I6IENvbG9yIH1cclxuXHJcbi8vIGNsYXNzIFRpbGVNYXBNYW5hZ2VyIHt9XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgcGxhbm5lZFN0cnVjdHVyZXM6IFRpbGVNYXBcclxuICB0ZXJyYWluOiBUaWxlTWFwXHJcbiAgdmVnZXRhdGlvbjogVGlsZU1hcFxyXG4gIHJhd01hdGVyaWFsczogVGlsZU1hcFxyXG4gIHNpZ2lsczogVGlsZU1hcFxyXG5cclxuICB6b25lczogUmVnaW9uW10gPSBbXVxyXG4gIHBhd25Ub2tlbnM6IFBhd25Ub2tlbltdXHJcbiAgbWFya2VkVHJlZVBvc2l0aW9uczogV29ybGRQb3NpdGlvbltdID0gW11cclxuICBwYXduTWFuYWdlcjogUGF3bk1hbmFnZW1lbnQgPSBuZXcgUGF3bk1hbmFnZW1lbnQodGhpcyk7XHJcbiAgdGlja3MgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdvcmxkOiBXb3JsZCkgeyB9XHJcblxyXG4gIHNldHVwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmVnZXRhdGlvbkltYWdlTWFwID0geyAndHJlZSc6IFRSRUVfSU1BR0VTIH1cclxuICAgIHRoaXMudmVnZXRhdGlvbiA9IHRoaXMuYXNzZW1ibGVUaWxlcyhcclxuICAgICAgJ3ZlZ2V0YXRpb24nLCBTcHJpdGVTaGVldHMuVHJlZXMsXHJcbiAgICAgIHRoaXMud29ybGQudmVnZXRhdGlvbixcclxuICAgICAgdmVnZXRhdGlvbkltYWdlTWFwXHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgcmF3TWF0ZXJpYWxzSW1hZ2VNYXAgPSB7fVxyXG4gICAgdGhpcy5yYXdNYXRlcmlhbHMgPSB0aGlzLmFzc2VtYmxlVGlsZXMoXHJcbiAgICAgICdtYXR0ZXInLCBTcHJpdGVTaGVldHMuTWF0dGVyLFxyXG4gICAgICB0aGlzLndvcmxkLnJhd01hdGVyaWFsLFxyXG4gICAgICByYXdNYXRlcmlhbHNJbWFnZU1hcFxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHNpZ2lsSW1hZ2VNYXAgPSB7ICdheGUnOiBbU0lHSUxfQVhFXSB9XHJcbiAgICB0aGlzLnNpZ2lscyA9IHRoaXMuYXNzZW1ibGVUaWxlcyhcclxuICAgICAgJ3NpZ2lscycsIFNwcml0ZVNoZWV0cy5JY29ucyxcclxuICAgICAgdGhpcy53b3JsZC5zaWdpbHMsXHJcbiAgICAgIHNpZ2lsSW1hZ2VNYXBcclxuICAgIClcclxuXHJcbiAgICAvLyBjb25zdCBwbGFubmVkU3RydWN0dXJlSW1hZ2VNYXAgPSB7fVxyXG4gICAgdGhpcy5wbGFubmVkU3RydWN0dXJlcyA9IHRoaXMuYXNzZW1ibGVUaWxlcygnc3RydWN0dXJlJywgU3ByaXRlU2hlZXRzLlN0cnVjdHVyZVRyYW5zcGFyZW50LCB0aGlzLndvcmxkLnBsYW5uZWRTdHJ1Y3R1cmUsIHt9KVxyXG4gICAgLy8gdGhpcy5wbGFubmVkU3RydWN0dXJlcy5cclxuXHJcbiAgICB0aGlzLnBhd25Ub2tlbnMgPSB0aGlzLndvcmxkLnBhd25zLm1hcChwYXduID0+IG5ldyBQYXduVG9rZW4ocGF3bikpXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRpY2tzKytcclxuICAgIGZvciAoY29uc3QgdG9rZW4gb2YgdGhpcy5wYXduVG9rZW5zKSB7XHJcbiAgICAgIHRoaXMucGF3bk1hbmFnZXIudXBkYXRlUGF3bih0b2tlbilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBkaW1zKCk6IERpbWVuc2lvbnMgeyByZXR1cm4gdGhpcy53b3JsZC5kaW1lbnNpb25zIH1cclxuXHJcbiAgcmF3TWF0ZXJpYWxMb2NhdGlvbnMoa2luZDogTWF0ZXJpYWwpOiBXb3JsZFBvc2l0aW9uW10ge1xyXG4gICAgcmV0dXJuIHRoaXMud29ybGQucmF3TWF0ZXJpYWwub2NjdXBpZWRMb2NhdGlvbnMoa2luZClcclxuICB9XHJcblxyXG4gIHJhd01hdGVyaWFsS2luZEF0TG9jYXRpb24obG9jYXRpb246IFdvcmxkUG9zaXRpb24pOiBNYXRlcmlhbCB7XHJcbiAgICByZXR1cm4gdGhpcy53b3JsZC5yYXdNYXRlcmlhbC5hdChsb2NhdGlvbilcclxuICB9XHJcblxyXG4gIHJhd01hdGVyaWFsQ291bnRBdExvY2F0aW9uKGxvY2F0aW9uOiBXb3JsZFBvc2l0aW9uKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLndvcmxkLnJhd01hdGVyaWFsQ291bnQuYXQobG9jYXRpb24pXHJcbiAgfVxyXG5cclxuICBpc0Jsb2NrZWQocG9zaXRpb246IFdvcmxkUG9zaXRpb24pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLndvcmxkLmlzQmxvY2tlZChwb3NpdGlvbilcclxuICB9XHJcblxyXG4gIGNvbXB1dGVQYXRoKHBvczogV29ybGRQb3NpdGlvbiwgZGVzdDogV29ybGRQb3NpdGlvbik6IFdvcmxkUG9zaXRpb25bXSB7XHJcbiAgICByZXR1cm4gdGhpcy53b3JsZC5zaG9ydGVzdFBhdGgocG9zLCBkZXN0KVxyXG4gIH1cclxuXHJcbiAgY2FuUGF0aEJldHdlZW4oYTogV29ybGRQb3NpdGlvbiwgYjogV29ybGRQb3NpdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHBvc0VxKGEsYikgfHwgdGhpcy5jb21wdXRlUGF0aChhLCBiKS5sZW5ndGggPiAwXHJcbiAgfVxyXG5cclxuICBtYXJrVHJlZShwb3NpdGlvbjogV29ybGRQb3NpdGlvbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5Cb3VuZHMocG9zaXRpb24pICYmIHRoaXMud29ybGQudmVnZXRhdGlvbi5hdChwb3NpdGlvbikgPT09ICd0cmVlJykge1xyXG4gICAgICB0aGlzLm1hcmtlZFRyZWVQb3NpdGlvbnMucHVzaChwb3NpdGlvbilcclxuICAgICAgY29uc3QgW3gsIHldID0gcG9zaXRpb25cclxuICAgICAgdGhpcy5zaWdpbHMuZ2V0Q2VsbCh4LCB5KS5wdXNoU3ByaXRlKG5ldyBUaWxlU3ByaXRlKCdzaWdpbHMnLCBTSUdJTF9BWEUpKVxyXG4gICAgICB0aGlzLndvcmxkLnNpZ2lscy5zZXQocG9zaXRpb24sICdheGUnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hvcFRyZWUocG9zaXRpb246IFdvcmxkUG9zaXRpb24pOiB2b2lkIHtcclxuICAgIGNvbnN0IFtheCwgYXldID0gcG9zaXRpb25cclxuICAgIHRoaXMudmVnZXRhdGlvbi5nZXRDZWxsKGF4LCBheSkuY2xlYXJTcHJpdGVzKClcclxuICAgIHRoaXMud29ybGQudmVnZXRhdGlvbi51bnNldChwb3NpdGlvbilcclxuXHJcbiAgICB0aGlzLnNpZ2lscy5nZXRDZWxsKGF4LCBheSkuY2xlYXJTcHJpdGVzKClcclxuICAgIHRoaXMud29ybGQuc2lnaWxzLnVuc2V0KHBvc2l0aW9uKVxyXG5cclxuICAgIHRoaXMubWFya2VkVHJlZVBvc2l0aW9ucyA9IHRoaXMubWFya2VkVHJlZVBvc2l0aW9ucy5maWx0ZXIodHJlZVBvcyA9PiAhcG9zRXEodHJlZVBvcywgcG9zaXRpb24pKVxyXG5cclxuICAgIHRoaXMud29ybGQucmF3TWF0ZXJpYWwuc2V0KHBvc2l0aW9uLCAnd29vZCcpXHJcbiAgICB0aGlzLndvcmxkLnJhd01hdGVyaWFsQ291bnQuc2V0KHBvc2l0aW9uLCAxKVxyXG4gICAgdGhpcy5yYXdNYXRlcmlhbHMuZ2V0Q2VsbChheCxheSkucHVzaFNwcml0ZShcclxuICAgICAgbmV3IFRpbGVTcHJpdGUoJ21hdHRlcicsIHBpY2soLi4uV09PRF9QSUVDRV9JTUFHRVMpKSlcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZ2F0aGVyUmVzb3VyY2UocG9zaXRpb246IFdvcmxkUG9zaXRpb24sIG1heFRvUmVtb3ZlOiBudW1iZXIpOiB7IGtpbmQ6IEl0ZW0sIGFtb3VudDogbnVtYmVyIH0ge1xyXG4gICAgY29uc3Qga2luZCA9IHRoaXMud29ybGQucmF3TWF0ZXJpYWwuYXQocG9zaXRpb24pXHJcbiAgICBjb25zdCBhbW91bnRBdFBvc2l0aW9uID0gdGhpcy53b3JsZC5yYXdNYXRlcmlhbENvdW50LmF0KHBvc2l0aW9uKVxyXG4gICAgY29uc3QgYW1vdW50UmVtb3ZlZCA9IE1hdGgubWluKGFtb3VudEF0UG9zaXRpb24sIG1heFRvUmVtb3ZlKVxyXG4gICAgY29uc3QgYW1vdW50UmVtYWluaW5nID0gYW1vdW50QXRQb3NpdGlvbiAtIGFtb3VudFJlbW92ZWRcclxuICAgIHRoaXMud29ybGQucmF3TWF0ZXJpYWxDb3VudC5zZXQocG9zaXRpb24sIGFtb3VudFJlbWFpbmluZylcclxuICAgIGlmIChhbW91bnRSZW1haW5pbmcgPT09IDApIHtcclxuICAgICAgdGhpcy53b3JsZC5yYXdNYXRlcmlhbC51bnNldChwb3NpdGlvbikgLy8sICdub3RoaW5nJylcclxuICAgIH1cclxuICAgIGNvbnN0IFtheCwgYXldID0gcG9zaXRpb25cclxuICAgIHRoaXMucmF3TWF0ZXJpYWxzLmdldENlbGwoYXgsIGF5KS5jbGVhclNwcml0ZXMoKVxyXG4gICAgaWYgKGFtb3VudFJlbWFpbmluZyA+IDApIHtcclxuICAgICAgbGV0IHNwcml0ZSA9IG5ldyBUaWxlU3ByaXRlKCdtYXR0ZXInLCBwaWNrKC4uLk1BVEVSSUFMX0lNQUdFU1traW5kXSkpXHJcbiAgICAgIGlmIChhbW91bnRSZW1haW5pbmcgPiBTVEFDS19NQVggLyAyKSB7XHJcbiAgICAgICAgc3ByaXRlID0gbmV3IFRpbGVTcHJpdGUoJ21hdHRlcicsIHBpY2soLi4uTUFURVJJQUxfU1RBQ0tfSU1BR0VTW2tpbmRdKSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJhd01hdGVyaWFscy5nZXRDZWxsKGF4LCBheSkucHVzaFNwcml0ZShzcHJpdGUpXHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBraW5kLCBhbW91bnQ6IGFtb3VudFJlbW92ZWQgfVxyXG4gIH1cclxuXHJcbiAgc3RvcmVSZXNvdXJjZShraW5kOiBNYXRlcmlhbCwgcG9zaXRpb246IFdvcmxkUG9zaXRpb24sIGFtb3VudDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAvLyB3aGF0IGtpbmQgb2YgcmVzb3VyY2UgaXMgaGVyZT8gYWRkIHRvIGl0Li4uXHJcbiAgICBjb25zdCBbYXgsIGF5XSA9IHBvc2l0aW9uXHJcblxyXG4gICAgdGhpcy53b3JsZC5yYXdNYXRlcmlhbC5zZXQocG9zaXRpb24sIGtpbmQpXHJcbiAgICBjb25zdCBjdXJyZW50Q291bnQgPSB0aGlzLndvcmxkLnJhd01hdGVyaWFsQ291bnQuYXQocG9zaXRpb24pXHJcbiAgICBjb25zdCBuZXdBbW91bnQgPSBjdXJyZW50Q291bnQgKyBhbW91bnRcclxuICAgIHRoaXMud29ybGQucmF3TWF0ZXJpYWxDb3VudC5zZXQocG9zaXRpb24sXHJcbiAgICAgIG5ld0Ftb3VudFxyXG4gICAgKVxyXG5cclxuICAgIHRoaXMucmF3TWF0ZXJpYWxzLmdldENlbGwoYXgsIGF5KS5jbGVhclNwcml0ZXMoKVxyXG4gICAgbGV0IHNwcml0ZSA9IG5ldyBUaWxlU3ByaXRlKCdtYXR0ZXInLCBwaWNrKC4uLk1BVEVSSUFMX0lNQUdFU1traW5kXSkpXHJcbiAgICBpZiAobmV3QW1vdW50ID4gU1RBQ0tfTUFYIC8gMikge1xyXG4gICAgICBzcHJpdGUgPSBuZXcgVGlsZVNwcml0ZSgnbWF0dGVyJywgcGljayguLi5NQVRFUklBTF9TVEFDS19JTUFHRVNba2luZF0pKVxyXG4gICAgfVxyXG4gICAgdGhpcy5yYXdNYXRlcmlhbHMuZ2V0Q2VsbChheCwgYXkpLnB1c2hTcHJpdGUoXHJcbiAgICAgIHNwcml0ZVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcGxhbldhbGwob3JpZ2luOiBXb3JsZFBvc2l0aW9uLCBkZXN0aW5hdGlvbjogV29ybGRQb3NpdGlvbik6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coXCItLS0+IFdvdWxkIGJ1aWxkIHdhbGwgZnJvbSBcIiArIG9yaWdpbiArIFwiIHRvIFwiICsgZGVzdGluYXRpb24pXHJcbiAgICBjb25zdCBwb3NpdGlvbnM6IFBvc2l0aW9uU2V0ID0gbmV3IFBvc2l0aW9uU2V0KClcclxuICAgIGNvbnN0IHRvcExlZnQgPSB0aGlzLmVuZm9yY2VCb3VuZHMob3JpZ2luKVxyXG4gICAgY29uc3QgYm90dG9tUmlnaHQgPSB0aGlzLmVuZm9yY2VCb3VuZHMoZGVzdGluYXRpb24pXHJcbiAgICBmb3IgKGxldCB4ID0gdG9wTGVmdFswXTsgeCA8PSBib3R0b21SaWdodFswXTsgeCsrKSB7XHJcbiAgICAgIGZvciAobGV0IHkgPSB0b3BMZWZ0WzFdOyB5IDw9IGJvdHRvbVJpZ2h0WzFdOyB5KyspIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLT4gQnVpbGRpbmcgd2FsbCBhdCBcIiArIHggKyBcIiwgXCIgKyB5KVxyXG4gICAgICAgIHRoaXMud29ybGQucGxhbm5lZFN0cnVjdHVyZS5zZXQocG9zKHgsIHkpLCAnd2FsbCcpXHJcbiAgICAgICAgcG9zaXRpb25zLmFkZChwb3MoeCwgeSkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IHBvc2l0aW9uIG9mIHBvc2l0aW9ucy5tZXJnZShwb3NpdGlvbnMuZnJpbmdlKS5hcnJheSkge1xyXG4gICAgICB0aGlzLnBhdmVUaWxlKHBvc2l0aW9uLCB0aGlzLndvcmxkLnBsYW5uZWRTdHJ1Y3R1cmUsIHRoaXMucGxhbm5lZFN0cnVjdHVyZXMsICd3YWxsJywgJ3N0cnVjdHVyZScsIFdBTExfTUFTSylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNhbmNlbFBsYW5zKG9yaWdpbjogV29ybGRQb3NpdGlvbiwgZGVzdGluYXRpb246IFdvcmxkUG9zaXRpb24pOiB2b2lkIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uczogUG9zaXRpb25TZXQgPSBuZXcgUG9zaXRpb25TZXQoKVxyXG4gICAgY29uc3QgdG9wTGVmdCA9IHRoaXMuZW5mb3JjZUJvdW5kcyhvcmlnaW4pXHJcbiAgICBjb25zdCBib3R0b21SaWdodCA9IHRoaXMuZW5mb3JjZUJvdW5kcyhkZXN0aW5hdGlvbilcclxuICAgIGZvciAobGV0IHggPSB0b3BMZWZ0WzBdOyB4IDw9IGJvdHRvbVJpZ2h0WzBdOyB4KyspIHtcclxuICAgICAgZm9yIChsZXQgeSA9IHRvcExlZnRbMV07IHkgPD0gYm90dG9tUmlnaHRbMV07IHkrKykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tPiBDYW5jZWwgYnVpbGRpbmcgYXQgXCIgKyB4ICsgXCIsIFwiICsgeSlcclxuICAgICAgICB0aGlzLndvcmxkLnBsYW5uZWRTdHJ1Y3R1cmUudW5zZXQocG9zKHgsIHkpKSAvLywgJ3dhbGwnKVxyXG4gICAgICAgIHBvc2l0aW9ucy5hZGQocG9zKHgsIHkpKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBwb3NpdGlvbiBvZiBwb3NpdGlvbnMubWVyZ2UocG9zaXRpb25zLmZyaW5nZSkuYXJyYXkpIHtcclxuICAgICAgdGhpcy5wYXZlVGlsZShwb3NpdGlvbiwgdGhpcy53b3JsZC5wbGFubmVkU3RydWN0dXJlLCB0aGlzLnBsYW5uZWRTdHJ1Y3R1cmVzLCAnd2FsbCcsICdzdHJ1Y3R1cmUnLCBXQUxMX01BU0spXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgZGVjbGFyZVpvbmUodG9wTGVmdDogV29ybGRQb3NpdGlvbiwgYm90dG9tUmlnaHQ6IFdvcmxkUG9zaXRpb24pOiB2b2lkIHtcclxuICAgIHRvcExlZnQgPSB0aGlzLmVuZm9yY2VCb3VuZHModG9wTGVmdClcclxuICAgIGJvdHRvbVJpZ2h0ID0gdGhpcy5lbmZvcmNlQm91bmRzKGJvdHRvbVJpZ2h0KVxyXG4gICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IocGljayg2MCwgOTAsIDEyMCksIHBpY2soNjAsIDkwLCAxMjApLCBwaWNrKDYwLCA5MCwgMTIwKSwgMC41KVxyXG4gICAgaWYgKHRvcExlZnRbMF0gPD0gYm90dG9tUmlnaHRbMF0gJiYgdG9wTGVmdFsxXSA8PSBib3R0b21SaWdodFsxXSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIi0tLT4gQ3JlYXRpbmcgem9uZSBmcm9tIFwiICsgdG9wTGVmdCArIFwiIHRvIFwiICsgYm90dG9tUmlnaHQpXHJcbiAgICAgIHRoaXMuem9uZXMucHVzaCh7XHJcbiAgICAgICAgdG9wTGVmdCwgYm90dG9tUmlnaHQsIGNvbG9yXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIi0tLT4gTm90IGNyZWF0aW5nIHpvbmU7IHpvbmUgaGFkIG5vIHNpemU/XCIpXHJcbiAgICB9XHJcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVpvbmVBdChsb2NhdGlvbjogV29ybGRQb3NpdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy56b25lcyA9IHRoaXMuem9uZXMuZmlsdGVyKHpvbmUgPT5cclxuICAgICAgIWFyZWFDb250YWlucyhcclxuICAgICAgICBwb3Moem9uZS50b3BMZWZ0WzBdLCB6b25lLnRvcExlZnRbMV0pLFxyXG4gICAgICAgIHBvcyh6b25lLmJvdHRvbVJpZ2h0WzBdLCB6b25lLmJvdHRvbVJpZ2h0WzFdKSxcclxuICAgICAgICBsb2NhdGlvblxyXG4gICAgICApXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBpc0xvY2F0aW9uV2l0aGluQW55Wm9uZShsb2NhdGlvbjogV29ybGRQb3NpdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgY29udGFpbmluZ1pvbmUgPSB0aGlzLnpvbmVzLmZpbmQoem9uZSA9PlxyXG4gICAgICBhcmVhQ29udGFpbnMoem9uZS50b3BMZWZ0LCB6b25lLmJvdHRvbVJpZ2h0LCBsb2NhdGlvbilcclxuICAgIClcclxuXHJcbiAgICBpZiAoY29udGFpbmluZ1pvbmUpIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCItLS0+IFpvbmUgXCIgKyBjb250YWluaW5nWm9uZSArIFwiIGNvbnRhaW5zIFwiICsgbG9jYXRpb24pXHJcbiAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIi0tLT4gTm8gem9uZSBjb250YWlucyBcIiArIGxvY2F0aW9uKVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBhcmVBbGxab25lc0Z1bGwoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy56b25lcy5sZW5ndGggPT09IDApIHsgcmV0dXJuIHRydWUgfVxyXG4gICAgZm9yIChjb25zdCB6b25lIG9mIHRoaXMuem9uZXMpIHtcclxuICAgICAgZm9yIChsZXQgeSA9IHpvbmUudG9wTGVmdFsxXTsgeSA8PSB6b25lLmJvdHRvbVJpZ2h0WzFdOyB5KyspIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gem9uZS50b3BMZWZ0WzBdOyB4IDw9IHpvbmUuYm90dG9tUmlnaHRbMF07IHgrKykge1xyXG4gICAgICAgICAgaWYgKHRoaXMud29ybGQucmF3TWF0ZXJpYWxDb3VudC5hdChwb3MoeCwgeSkpIDwgU1RBQ0tfTUFYKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGZpbmRVbmZpbGxlZFpvbmVQb3NpdGlvbnMoKTogV29ybGRQb3NpdGlvbltdIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uczogV29ybGRQb3NpdGlvbltdID0gW11cclxuICAgIGZvciAoY29uc3Qgem9uZSBvZiB0aGlzLnpvbmVzKSB7XHJcbiAgICAgIGZvciAobGV0IHkgPSB6b25lLnRvcExlZnRbMV07IHkgPD0gem9uZS5ib3R0b21SaWdodFsxXTsgeSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeCA9IHpvbmUudG9wTGVmdFswXTsgeCA8PSB6b25lLmJvdHRvbVJpZ2h0WzBdOyB4KyspIHtcclxuICAgICAgICAgIGlmICh0aGlzLndvcmxkLnJhd01hdGVyaWFsQ291bnQuYXQocG9zKHgsIHkpKSA8IFNUQUNLX01BWCkge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgcG9zaXRpb25zLnB1c2gocG9zKHgsIHkpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5Cb3VuZHMocG9zOiBXb3JsZFBvc2l0aW9uKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBbeCwgeV0gPSBwb3NcclxuICAgIHJldHVybiAoeCA+PSAwICYmIHkgPj0gMCAmJiB4IDwgdGhpcy53b3JsZC53aWR0aCAmJiB5IDwgdGhpcy53b3JsZC5oZWlnaHQpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVuZm9yY2VCb3VuZHMocG9zaXRpb246IFdvcmxkUG9zaXRpb24pOiBXb3JsZFBvc2l0aW9uIHtcclxuICAgIGxldCBbeCwgeV0gPSBwb3NpdGlvblxyXG4gICAgaWYgKHggPCAwKSB7IHggPSAwOyB9XHJcbiAgICBpZiAoeCA+PSB0aGlzLndvcmxkLndpZHRoKSB7IHggPSB0aGlzLndvcmxkLndpZHRoIC0gMSB9XHJcbiAgICBpZiAoeSA8IDApIHsgeSA9IDA7IH1cclxuICAgIGlmICh5ID49IHRoaXMud29ybGQuaGVpZ2h0KSB7IHkgPSB0aGlzLndvcmxkLmhlaWdodCAtIDEgfVxyXG4gICAgcmV0dXJuIHBvcyh4LCB5KVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3NlbWJsZVRpbGVzPFQ+KFxyXG4gICAgbGF5ZXJOYW1lOiBzdHJpbmcsXHJcbiAgICBzcHJpdGVzaGVldDogU3ByaXRlU2hlZXQsXHJcbiAgICBncmlkOiBHcmlkPFQ+LFxyXG4gICAgaW1hZ2VNYXA6IHsgW3ZhbHVlOiBzdHJpbmddOiBudW1iZXJbXSB9LFxyXG4gICk6IFRpbGVNYXAge1xyXG4gICAgY29uc3QgbWFwID0gbmV3IFRpbGVNYXAoXHJcbiAgICAgIDAsIDAsXHJcbiAgICAgIENFTExfU0laRSwgQ0VMTF9TSVpFLFxyXG4gICAgICB0aGlzLndvcmxkLmhlaWdodCwgdGhpcy53b3JsZC53aWR0aFxyXG4gICAgKVxyXG4gICAgbWFwLnJlZ2lzdGVyU3ByaXRlU2hlZXQobGF5ZXJOYW1lLCBzcHJpdGVzaGVldClcclxuICAgIHRoaXMud29ybGQuZm9yRWFjaFBvc2l0aW9uKCh4LCB5KSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZ3JpZC5hdChwb3MoeCwgeSkpIGFzIHVua25vd24gYXMgc3RyaW5nXHJcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSAnbm90aGluZycpIHtcclxuICAgICAgICBjb25zdCBjZWxsID0gbWFwLmdldENlbGwoeCwgeSlcclxuICAgICAgICBjb25zdCBzcHJpdGVJZCA9IHBpY2soLi4uaW1hZ2VNYXBbdmFsdWVdKVxyXG4gICAgICAgIGNlbGwucHVzaFNwcml0ZShuZXcgVGlsZVNwcml0ZShsYXllck5hbWUsIHNwcml0ZUlkKSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBtYXBcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcGF2ZVRpbGU8VD4ocG9zaXRpb246IFdvcmxkUG9zaXRpb24sIGdyaWQ6IEdyaWQ8VD4sIHRpbGVtYXA6IFRpbGVNYXAsIGtpbmQ6IFQsIHBhbGV0dGVOYW1lOiBzdHJpbmcsIGJpdG1hc2s6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH0pIHtcclxuICAgIGNvbnN0IFt4LCB5XSA9IHBvc2l0aW9uXHJcbiAgICBjb25zdCBjZWxsID0gdGlsZW1hcC5nZXRDZWxsKHgsIHkpXHJcbiAgICBpZiAoZ3JpZC5hdChwb3NpdGlvbikgPT09IGtpbmQpIHtcclxuICAgICAgY29uc3QgbmVpZ2hib3JzID0gZ3JpZC5sYWJlbGxlZE5laWdoYm9yc0F0KHBvc2l0aW9uKVxyXG4gICAgICBjb25zdCBtYXNrID0gKG5laWdoYm9ycy5ub3J0aCA9PT0ga2luZCA/IDEgOiAwKSAqIDEgK1xyXG4gICAgICAgIChuZWlnaGJvcnMuZWFzdCA9PT0ga2luZCA/IDEgOiAwKSAqIDIgK1xyXG4gICAgICAgIChuZWlnaGJvcnMuc291dGggPT09IGtpbmQgPyAxIDogMCkgKiA0ICtcclxuICAgICAgICAobmVpZ2hib3JzLndlc3QgPT09IGtpbmQgPyAxIDogMCkgKiA4XHJcblxyXG5cclxuXHJcbiAgICAgIGNvbnN0IHNwcml0ZSA9IG5ldyBUaWxlU3ByaXRlKHBhbGV0dGVOYW1lLCBiaXRtYXNrW21hc2tdKVxyXG4gICAgICBjZWxsLmNsZWFyU3ByaXRlcygpXHJcbiAgICAgIGNlbGwucHVzaFNwcml0ZShzcHJpdGUpXHJcbiAgICB9IGVsc2UgaWYgKGdyaWQuYXQocG9zaXRpb24pID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgY2VsbC5jbGVhclNwcml0ZXMoKVxyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IFdvcmxkUG9zaXRpb24sIERpbWVuc2lvbnMgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgcG9zIH0gZnJvbSBcIi4vV29ybGRQb3NpdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWQ8VD4ge1xyXG4gIHByaXZhdGUgY2VsbHM6IG51bWJlcltdW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaW1zOiBEaW1lbnNpb25zLCBwcml2YXRlIGluZGV4OiBUW10pIHsgfVxyXG5cclxuICBnZXQgd2lkdGgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuZGltc1swXSB9XHJcbiAgZ2V0IGhlaWdodCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5kaW1zWzFdIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXJlZmVyZW5jZShyZWZlcmVuY2U6IG51bWJlcik6IFQge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5kZXhbcmVmZXJlbmNlXVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWZlcmVuY2UodmFsdWU6IFQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5kZXguaW5kZXhPZih2YWx1ZSlcclxuICB9XHJcblxyXG4gIGF0KGxvY2F0aW9uOiBXb3JsZFBvc2l0aW9uKTogVCB7XHJcbiAgICBjb25zdCBbeCwgeV0gPSBsb2NhdGlvbjtcclxuICAgIHRoaXMuY2VsbHNbeV0gPSB0aGlzLmNlbGxzW3ldIHx8IFtdO1xyXG4gICAgaWYgKHRoaXMuY2VsbHNbeV1beF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5kZXJlZmVyZW5jZSh0aGlzLmNlbGxzW3ldW3hdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldChsb2NhdGlvbjogV29ybGRQb3NpdGlvbiwgdmFsdWU6IFQpOiB2b2lkIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiW0dyaWQuc2V0XSBBdCBsb2NhdGlvbjogXCIgKyBsb2NhdGlvbiArIFwiLCB2YWx1ZTogXCIgKyB2YWx1ZSlcclxuICAgIGNvbnN0IFt4LHldID0gbG9jYXRpb247XHJcbiAgICB0aGlzLmNlbGxzW3ldID0gdGhpcy5jZWxsc1t5XSB8fCBbXTtcclxuICAgIHRoaXMuY2VsbHNbeV1beF0gPSB0aGlzLnJlZmVyZW5jZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB1bnNldChsb2NhdGlvbjogV29ybGRQb3NpdGlvbik6IHZvaWQge1xyXG4gICAgY29uc3QgW3gseV0gPSBsb2NhdGlvbjtcclxuICAgIHRoaXMuY2VsbHNbeV0gPSB0aGlzLmNlbGxzW3ldIHx8IFtdO1xyXG4gICAgdGhpcy5jZWxsc1t5XVt4XSA9IHVuZGVmaW5lZDsgLy90aGlzLnJlZmVyZW5jZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBsYWJlbGxlZE5laWdoYm9yc0F0KGxvY2F0aW9uOiBXb3JsZFBvc2l0aW9uKTogeyBub3J0aDogVCwgc291dGg6IFQsIGVhc3Q6IFQsIHdlc3Q6IFQgfSB7XHJcbiAgICBjb25zdCBbeCx5XSA9IGxvY2F0aW9uO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZWFzdDogdGhpcy5hdChwb3MoeCsxLHkpKSxcclxuICAgICAgd2VzdDogdGhpcy5hdChwb3MoeC0xLHkpKSxcclxuICAgICAgbm9ydGg6IHRoaXMuYXQocG9zKHgseS0xKSksXHJcbiAgICAgIHNvdXRoOiB0aGlzLmF0KHBvcyh4LHkrMSkpLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yRWFjaFBvc2l0aW9uWFkoZm46ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy53aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgZm4oeCx5KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JFYWNoUG9zaXRpb24oZm46IChwb3NpdGlvbjogV29ybGRQb3NpdGlvbikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy53aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgZm4ocG9zKHgseSkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbGwodmFsdWU6IFQpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9yRWFjaFBvc2l0aW9uKHBvc2l0aW9uID0+IHRoaXMuc2V0KHBvc2l0aW9uLHZhbHVlKSlcclxuICB9XHJcblxyXG4gIGRpc3RyaWJ1dGVSYW5kb21seSh2YWx1ZTogVCwgcmF0ZSA9IDAuMSk6IHZvaWQge1xyXG4gICAgdGhpcy5mb3JFYWNoUG9zaXRpb24ocG9zaXRpb24gPT4ge1xyXG4gICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IHJhdGUpIHtcclxuICAgICAgICB0aGlzLnNldChwb3NpdGlvbiwgdmFsdWUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvY2N1cGllZExvY2F0aW9ucyh2YWx1ZTogVCk6IFdvcmxkUG9zaXRpb25bXSB7XHJcbiAgICBjb25zdCBvY2N1cGllZCA9IFtdXHJcbiAgICB0aGlzLmZvckVhY2hQb3NpdGlvbihwb3NpdGlvbiA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmF0KHBvc2l0aW9uKSA9PT0gdmFsdWUpIHtcclxuICAgICAgICBvY2N1cGllZC5wdXNoKHBvc2l0aW9uKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIG9jY3VwaWVkXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFdvcmxkUG9zaXRpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgcG9zRXEsIGRpc3RhbmNlQmV0d2VlbiwgbmVpZ2hib3JzT2ZQb3NpdGlvblBsdXNEaWFnb25hbHMgfSBmcm9tIFwiLi9Xb3JsZFBvc2l0aW9uXCI7XHJcbmltcG9ydCB7IFBvc2l0aW9uU2V0IH0gZnJvbSBcIi4vUG9zaXRpb25TZXRcIjtcclxuaW1wb3J0IHsgU2ltcGxlR3JpZCB9IGZyb20gXCIuL1NpbXBsZUdyaWRcIjtcclxuaW1wb3J0IHsgUEFUSEZJTkRJTkdfVElNRU9VVCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbnR5cGUgTmF2aWdhdGlvblJlc3VsdCA9IHsgcGF0aDogV29ybGRQb3NpdGlvbltdLCBmb3VuZDogYm9vbGVhbiB9XHJcblxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdG9yIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpbXM6IFtudW1iZXIsIG51bWJlcl0sIHByaXZhdGUgaXNCbG9ja2VkOiAocG9zaXRpb246IFdvcmxkUG9zaXRpb24pID0+IGJvb2xlYW4pIHt9XHJcblxyXG4gIGdldCB3aWR0aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5kaW1zWzBdOyB9XHJcbiAgZ2V0IGhlaWdodCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5kaW1zWzFdOyB9XHJcblxyXG4gIHByaXZhdGUgcmVjb25zdHJ1Y3RQYXRoKHByZXY6IFNpbXBsZUdyaWQ8V29ybGRQb3NpdGlvbj4sIGRlc3RpbmF0aW9uOiBXb3JsZFBvc2l0aW9uKTogV29ybGRQb3NpdGlvbltdIHtcclxuICAgIGNvbnN0IHBhdGggPSBbZGVzdGluYXRpb25dXHJcbiAgICBsZXQgY3VycmVudDogV29ybGRQb3NpdGlvbiA9IGRlc3RpbmF0aW9uXHJcbiAgICB3aGlsZSAocHJldi5hdChjdXJyZW50KSkge1xyXG4gICAgICBjdXJyZW50ID0gcHJldi5hdChjdXJyZW50KVxyXG4gICAgICBwYXRoLnVuc2hpZnQoY3VycmVudClcclxuICAgIH0gXHJcbiAgICBwYXRoLnNoaWZ0KClcclxuICAgIHJldHVybiBwYXRoXHJcbiAgfVxyXG5cclxuICBhU3Rhcihzb3VyY2U6IFdvcmxkUG9zaXRpb24sIGRlc3RpbmF0aW9uOiBXb3JsZFBvc2l0aW9uKTogTmF2aWdhdGlvblJlc3VsdCB7IFxyXG4gICAgY29uc3Qgc3RhcnRlZEF0ID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgIGNvbnN0IGZyaW5nZSA9IG5ldyBQb3NpdGlvblNldChbc291cmNlXSlcclxuICAgIGNvbnN0IHByZXYgPSBuZXcgU2ltcGxlR3JpZDxXb3JsZFBvc2l0aW9uPigpXHJcbiAgICBjb25zdCBnU2NvcmUgPSBuZXcgU2ltcGxlR3JpZDxudW1iZXI+KEluZmluaXR5KVxyXG4gICAgY29uc3QgZlNjb3JlID0gbmV3IFNpbXBsZUdyaWQ8bnVtYmVyPihJbmZpbml0eSlcclxuICAgIGNvbnN0IGJ5RlNjb3JlID0gKGE6IFdvcmxkUG9zaXRpb24sIGI6IFdvcmxkUG9zaXRpb24pID0+IHtcclxuICAgICAgY29uc3QgZGEgPSBmU2NvcmUuYXQoYSlcclxuICAgICAgY29uc3QgZGIgPSBmU2NvcmUuYXQoYilcclxuICAgICAgcmV0dXJuIGRhIDwgZGIgPyAtMSA6IDFcclxuICAgIH1cclxuICAgIGNvbnN0IGhldXJpc3RpYyA9IChhOiBXb3JsZFBvc2l0aW9uKTogbnVtYmVyID0+IGRpc3RhbmNlQmV0d2VlbihhLCBkZXN0aW5hdGlvbilcclxuICAgIGdTY29yZS5zZXQoc291cmNlLCAwKVxyXG4gICAgZlNjb3JlLnNldChzb3VyY2UsIGhldXJpc3RpYyhzb3VyY2UpKVxyXG4gICAgd2hpbGUgKCFmcmluZ2UuZW1wdHkoKSkge1xyXG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICBjb25zdCBlbGFwc2VkID0gbm93IC0gc3RhcnRlZEF0IC8vLSBub3dcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJhKiBlbGFwc2VkOiBcIiArIGVsYXBzZWQpXHJcbiAgICAgIGlmIChlbGFwc2VkID4gUEFUSEZJTkRJTkdfVElNRU9VVCkgeyBjb25zb2xlLmxvZyhcImEtc3RhciBoaXQgdGltZW91dFwiKTsgYnJlYWsgfVxyXG4gICAgICBcclxuICAgICAgY29uc3QgY3VycmVudDogV29ybGRQb3NpdGlvbiA9IGZyaW5nZS5hcnJheS5zb3J0KGJ5RlNjb3JlKVswXVxyXG4gICAgICBpZiAocG9zRXEoY3VycmVudCwgZGVzdGluYXRpb24pKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgcGF0aDogdGhpcy5yZWNvbnN0cnVjdFBhdGgocHJldiwgY3VycmVudCksIGZvdW5kOiB0cnVlIH1cclxuICAgICAgfVxyXG4gICAgICBmcmluZ2UuZGVsZXRlKGN1cnJlbnQpXHJcbiAgICAgIGNvbnN0IG5laWdoYm9ycyA9IG5laWdoYm9yc09mUG9zaXRpb25QbHVzRGlhZ29uYWxzKGN1cnJlbnQsIHRoaXMuZGltcylcclxuICAgICAgbmVpZ2hib3JzLmZpbHRlcihuZWlnaGJvciA9PiAhdGhpcy5pc0Jsb2NrZWQobmVpZ2hib3IpKS5mb3JFYWNoKG5laWdoYm9yID0+IHtcclxuICAgICAgICBjb25zdCB0ZW50YXRpdmVHU2NvcmUgPSBnU2NvcmUuYXQoY3VycmVudCkgKyBkaXN0YW5jZUJldHdlZW4oY3VycmVudCwgbmVpZ2hib3IpXHJcbiAgICAgICAgaWYgKHRlbnRhdGl2ZUdTY29yZSA8IGdTY29yZS5hdChuZWlnaGJvcikpIHtcclxuICAgICAgICAgIHByZXYuc2V0KG5laWdoYm9yLCBjdXJyZW50KVxyXG4gICAgICAgICAgZ1Njb3JlLnNldChuZWlnaGJvciwgdGVudGF0aXZlR1Njb3JlKVxyXG4gICAgICAgICAgZlNjb3JlLnNldChuZWlnaGJvciwgZ1Njb3JlLmF0KG5laWdoYm9yKSArIGhldXJpc3RpYyhuZWlnaGJvcikpXHJcbiAgICAgICAgICBpZiAoIWZyaW5nZS5oYXMobmVpZ2hib3IpKSB7XHJcbiAgICAgICAgICAgIGZyaW5nZS5hZGQobmVpZ2hib3IpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHBhdGg6IFtdLCBmb3VuZDogZmFsc2UgfVxyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTm8gcGF0aCBmb3VuZCFcIilcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQYXduVG9rZW4gfSBmcm9tIFwiLi4vYWN0b3JzL1Bhd25Ub2tlblwiO1xyXG5pbXBvcnQgeyBwb3NFcSB9IGZyb20gXCIuL1dvcmxkUG9zaXRpb25cIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL0dhbWVcIjtcclxuaW1wb3J0IHsgV29ybGRQb3NpdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBDRUxMX1NJWkUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IElBY3Rpdml0eSBhcyBJQWN0aXZpdHkgfSBmcm9tIFwiLi9JQWN0aXZpdHlcIjtcclxuaW1wb3J0IHsgQ3V0VGltYmVyIH0gZnJvbSBcIi4vYWN0aXZpdGllcy9DdXRUaW1iZXJcIjtcclxuaW1wb3J0IHsgSGF1bCB9IGZyb20gXCIuL2FjdGl2aXRpZXMvSGF1bFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhd25NYW5hZ2VtZW50IHtcclxuICBhY3Rpdml0aWVzOiBJQWN0aXZpdHlbXVxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2FtZTogR2FtZSkge1xyXG4gICAgdGhpcy5hY3Rpdml0aWVzID0gW1xyXG4gICAgICBuZXcgQ3V0VGltYmVyKHRoaXMuZ2FtZSksXHJcbiAgICAgIG5ldyBIYXVsKHRoaXMuZ2FtZSksXHJcbiAgICBdXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlbmRQYXduVG9Qb3NpdGlvbih0b2tlbjogUGF3blRva2VuLCBwb3NpdGlvbjogV29ybGRQb3NpdGlvbik6IHZvaWQge1xyXG4gICAgaWYgKCFwb3NFcSh0b2tlbi5wYXduLnBvcywgcG9zaXRpb24pKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiLS0tPiBTZW5kIFwiICsgdG9rZW4ucGF3bi5uYW1lICsgXCIgdG8gXCIgKyBwb3NpdGlvbik7XHJcbiAgICAgIHRva2VuLnBhd24uZGVzdCA9IHBvc2l0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9rZW4ucGF3bi5kZXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGF3bih0b2tlbjogUGF3blRva2VuKTogdm9pZCB7XHJcbiAgICBpZiAodG9rZW4ucGF3bi5kZXN0ICYmICFwb3NFcSh0b2tlbi5wYXduLmRlc3QsIHRva2VuLnBhd24ucG9zKSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIi0tLT4gUGF3biBuYXZpZ2F0ZXMgdG8gXCIgKyB0b2tlbi5wYXduLmRlc3QpXHJcbiAgICAgIHRoaXMuaGFuZGxlTmF2aWdhdGlvbih0b2tlbilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdG9rZW4ucGF3bi5hY3Rpdml0eSkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWUudGlja3MgJSAxNCAhPT0gMCkgeyByZXR1cm4gfVxyXG4gICAgICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLmFjdGl2aXRpZXMuc29ydCgoYSxiKSA9PiB0b2tlbi5wcmlvcml0eShhKSA+IHRva2VuLnByaW9yaXR5KGIpID8gLTEgOiAxKSkge1xyXG4gICAgICAgICAgICBpZiAoYWN0aXZpdHkuaXNKb2JBdmFpbGFibGUodG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0+IEEgam9iIGlzIGF2YWlsYWJsZTogXCIgKyBhY3Rpdml0eS50aXRsZSlcclxuICAgICAgICAgICAgICBjb25zdCBqb2JEZXRhaWxzID0gYWN0aXZpdHkuZmluZEpvYih0b2tlbilcclxuICAgICAgICAgICAgICBpZiAoam9iRGV0YWlscykge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0+IEdvdCBqb2IgZGV0YWlsczogXCIgKyBKU09OLnN0cmluZ2lmeShqb2JEZXRhaWxzKSlcclxuICAgICAgICAgICAgICAgIHRva2VuLnBhd24uYWN0aXZpdHkgPSBhY3Rpdml0eS50aXRsZTtcclxuICAgICAgICAgICAgICAgIHRva2VuLnBhd24uYWN0aXZpdHlUYXJnZXQgPSBqb2JEZXRhaWxzLmFjdGl2aXR5VGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGpvYkRldGFpbHMuam9iU3VidHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICB0b2tlbi5wYXduLmpvYlN1YnR5cGUgPSBqb2JEZXRhaWxzLmpvYlN1YnR5cGU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyB0b2tlbi5wYXduLmpvYlN1YnR5cGUgPSB1bmRlZmluZWQ7IH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZFBhd25Ub1Bvc2l0aW9uKHRva2VuLCBqb2JEZXRhaWxzLnRyYXZlbERlc3RpbmF0aW9uKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiLS0tPiBQYXduIFwiICsgdG9rZW4ucGF3bi5uYW1lICsgXCIgaGFzIGFuIGFjdGl2aXR5Li4uXCIpXHJcbiAgICAgICAgdGhpcy5wYXduVG9rZW5Xb3Jrcyh0b2tlbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlTmF2aWdhdGlvbih0b2tlbjogUGF3blRva2VuKSB7XHJcbiAgICBpZiAoIXRva2VuLm1vdmluZykge1xyXG4gICAgICBpZiAodG9rZW4ucGF0aC5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBuZXh0U3RlcCA9IHRva2VuLnBhdGguc2hpZnQoKTtcclxuICAgICAgICB0aGlzLnBhd25Ub2tlbk1vdmVzKHRva2VuLCBuZXh0U3RlcCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0+IENvbXB1dGUgcGF0aCBmcm9tIFwiICsgdG9rZW4ucGF3bi5wb3MgKyBcIiB0byBcIiArIHRva2VuLnBhd24uZGVzdCk7XHJcbiAgICAgICAgdG9rZW4ucGF0aCA9IHRoaXMuZ2FtZS5jb21wdXRlUGF0aCh0b2tlbi5wYXduLnBvcywgdG9rZW4ucGF3bi5kZXN0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBwYXduVG9rZW5Nb3Zlcyh0b2tlbjogUGF3blRva2VuLCB0YXJnZXQ6IFdvcmxkUG9zaXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICghdG9rZW4ubW92aW5nKSB7XHJcbiAgICAgIHRva2VuLm1vdmluZyA9IHRydWVcclxuICAgICAgYXdhaXQgdG9rZW4uYWN0aW9ucy5tb3ZlVG8oXHJcbiAgICAgICAgdGFyZ2V0WzBdICogQ0VMTF9TSVpFLCB0YXJnZXRbMV0gKiBDRUxMX1NJWkUsXHJcbiAgICAgICAgUGF3blRva2VuLnNwZWVkXHJcbiAgICAgICkuYXNQcm9taXNlKClcclxuICAgICAgdG9rZW4ucGF3bi5wb3MgPSB0YXJnZXRcclxuICAgICAgdG9rZW4ubW92aW5nID0gZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgcGF3blRva2VuV29ya3ModG9rZW46IFBhd25Ub2tlbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCItLS0+IFBhd24gd29ya3MgKFwiICsgdG9rZW4ucGF3bi5uYW1lICsgXCIpXCIpXHJcbiAgICBpZiAoIXRva2VuLmludGVyYWN0aW5nKSB7XHJcbiAgICAgIHRva2VuLmludGVyYWN0aW5nID0gdHJ1ZVxyXG4gICAgICBjb25zdCBhY3Rpdml0eU1hbmFnZXIgPSB0aGlzLmFjdGl2aXRpZXMuZmluZChhY3Rpdml0eSA9PiBhY3Rpdml0eS50aXRsZSA9PT0gdG9rZW4ucGF3bi5hY3Rpdml0eSlcclxuICAgICAgYXdhaXQgYWN0aXZpdHlNYW5hZ2VyLnBlcmZvcm0odG9rZW4pXHJcbiAgICAgIHRva2VuLmludGVyYWN0aW5nID0gZmFsc2VcclxuICAgICAgdG9rZW4ucGF3bi5hY3Rpdml0eSA9IHVuZGVmaW5lZFxyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCItLS0+IFBhd24gaXMgYWxyZWFkeSBpbnRlcmFjdGluZz9cIilcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgV29ybGRQb3NpdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBwb3MsIHBvc0VxIH0gZnJvbSBcIi4vV29ybGRQb3NpdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgUG9zaXRpb25TZXQge1xyXG4gIHByaXZhdGUgYXJyOiBXb3JsZFBvc2l0aW9uW10gPSBbXTtcclxuICBjb25zdHJ1Y3RvcihlbnRyaWVzOiBXb3JsZFBvc2l0aW9uW10gPSBbXSkge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChbeCwgeV0pID0+IHRoaXMuYXJyLnB1c2gocG9zKHgsIHkpKSk7XHJcbiAgfVxyXG4gIGdldCBhcnJheSgpOiBXb3JsZFBvc2l0aW9uW10geyByZXR1cm4gdGhpcy5hcnI7IH1cclxuICBhZGQocG9zaXRpb246IFdvcmxkUG9zaXRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuYXJyLnB1c2gocG9zaXRpb24pXHJcbiAgfVxyXG4gIGRlbGV0ZShwb3NpdGlvbjogV29ybGRQb3NpdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5hcnIgPSB0aGlzLmFyci5maWx0ZXIoYW5vdGhlclBvc2l0aW9uID0+ICFwb3NFcShwb3NpdGlvbiwgYW5vdGhlclBvc2l0aW9uKSk7XHJcbiAgfVxyXG4gIGhhcyhwb3NpdGlvbjogV29ybGRQb3NpdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYXJyLmZpbHRlcihwID0+IHBvc0VxKHAsIHBvc2l0aW9uKSkubGVuZ3RoID4gMDtcclxuICB9XHJcbiAgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuYXJyLmxlbmd0aFxyXG4gIH1cclxuICBlbXB0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNpemUoKSA9PT0gMFxyXG4gIH1cclxuXHJcbiAgbWVyZ2Uob3RoZXI6IFBvc2l0aW9uU2V0KTogUG9zaXRpb25TZXQge1xyXG4gICAgY29uc3QgbWVyZ2VkID0gbmV3IFBvc2l0aW9uU2V0KClcclxuICAgIGZvciAoY29uc3QgcG9zaXRpb24gb2YgdGhpcy5hcnJheSkge1xyXG4gICAgICBpZiAoIW1lcmdlZC5oYXMocG9zaXRpb24pKSB7XHJcbiAgICAgICAgbWVyZ2VkLmFkZChwb3NpdGlvbilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBwb3NpdGlvbiBvZiBvdGhlci5hcnJheSkge1xyXG4gICAgICBpZiAoIW1lcmdlZC5oYXMocG9zaXRpb24pKSB7XHJcbiAgICAgICAgbWVyZ2VkLmFkZChwb3NpdGlvbilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1lcmdlZDtcclxuICB9XHJcblxyXG4gIGdldCBmcmluZ2UoKTogUG9zaXRpb25TZXQge1xyXG4gICAgY29uc3QgdGhlRnJpbmdlID0gbmV3IFBvc2l0aW9uU2V0KClcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcG9zID0gdGhpcy5hcnJbaV1cclxuICAgICAgZm9yIChjb25zdCBuZWlnaGJvciBvZiBQb3NpdGlvblNldC5uZWlnaGJvcnNPZihwb3MpLmFycmF5KSB7XHJcbiAgICAgICAgaWYgKCF0aGVGcmluZ2UuaGFzKG5laWdoYm9yKSAmJiAhdGhpcy5oYXMobmVpZ2hib3IpKSB7XHJcbiAgICAgICAgICB0aGVGcmluZ2UuYWRkKG5laWdoYm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoZUZyaW5nZVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIG5laWdoYm9yc09mKGxvY2F0aW9uOiBXb3JsZFBvc2l0aW9uKTogUG9zaXRpb25TZXQge1xyXG4gICAgY29uc3QgW3gseV0gPSBsb2NhdGlvblxyXG4gICAgY29uc3QgcG9zaXRpb25zID0gbmV3IFBvc2l0aW9uU2V0KCk7XHJcbiAgICBwb3NpdGlvbnMuYWRkKHBvcyh4LHkrMSkpXHJcbiAgICBwb3NpdGlvbnMuYWRkKHBvcyh4LHktMSkpXHJcbiAgICBwb3NpdGlvbnMuYWRkKHBvcyh4KzEseSkpXHJcbiAgICBwb3NpdGlvbnMuYWRkKHBvcyh4LTEseSkpXHJcbiAgICByZXR1cm4gcG9zaXRpb25zXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFdvcmxkUG9zaXRpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuLy8gQSB2ZXJ5IGJhc2ljIGdyaWQgdGhhdCBkb2Vzbid0IHdvcnJ5IGFib3V0IGJvdW5kcyBvciBpbmRleGluZyBldGNcclxuZXhwb3J0IGNsYXNzIFNpbXBsZUdyaWQ8VD4ge1xyXG4gIHZhbHVlczogVFtdW10gPSBbXTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbHVlV2hlblVuZGVmaW5lZDogVCA9IHVuZGVmaW5lZCkgeyB9XHJcbiAgc2V0KHBvc2l0aW9uOiBXb3JsZFBvc2l0aW9uLCB2YWx1ZTogVCk6IHZvaWQge1xyXG4gICAgY29uc3QgW3B4LCBweV0gPSBwb3NpdGlvbjtcclxuICAgIHRoaXMudmFsdWVzW3B5XSA9IHRoaXMudmFsdWVzW3B5XSB8fCBbXTtcclxuICAgIHRoaXMudmFsdWVzW3B5XVtweF0gPSB2YWx1ZTtcclxuICB9XHJcbiAgYXQocG9zaXRpb246IFdvcmxkUG9zaXRpb24pOiBUIHtcclxuICAgIGNvbnN0IFtweCwgcHldID0gcG9zaXRpb247XHJcbiAgICB0aGlzLnZhbHVlc1tweV0gPSB0aGlzLnZhbHVlc1tweV0gfHwgW107XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW3B5XVtweF07XHJcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZVdoZW5VbmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDYXJ0b2dyYW0gfSBmcm9tIFwiLi4vbW9kZWxzL0NhcnRvZ3JhbVwiO1xyXG5pbXBvcnQgeyBQYXduLCBEaW1lbnNpb25zLCBWZWdldGF0aW9uLCBXb3JsZFBvc2l0aW9uLCBTaWdpbCwgTWF0ZXJpYWwsIEFjdGl2aXR5LCBTdHJ1Y3R1cmUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCIuL0dyaWRcIjtcclxuaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSBcIi4vTmF2aWdhdG9yXCI7XHJcbmltcG9ydCB7IFNpbXBsZUdyaWQgfSBmcm9tIFwiLi9TaW1wbGVHcmlkXCI7XHJcbmltcG9ydCB7IHBpY2sgfSBmcm9tIFwiLi4vdXRpbC9waWNrXCI7XHJcbmltcG9ydCB7IElOSVRJQUxfUEFXTl9DT1VOVCwgRFdBUlZFTl9MQU5HVUFHRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgc2h1ZmZsZSB9IGZyb20gXCIuLi91dGlsL3NodWZmbGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXb3JsZCB7XHJcbiAgcHVibGljIHBhd25zOiBQYXduW11cclxuICBwcml2YXRlIG1hcDogQ2FydG9ncmFtXHJcbiAgcHJpdmF0ZSBuYXY6IE5hdmlnYXRvclxyXG4gIFxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGltZW5zaW9uczogRGltZW5zaW9ucywgcHVibGljIGluaXRpYWxQYXduQ291bnQ6IG51bWJlciA9IElOSVRJQUxfUEFXTl9DT1VOVCkge1xyXG4gICAgdGhpcy5tYXAgPSBuZXcgQ2FydG9ncmFtKGRpbWVuc2lvbnMpO1xyXG4gICAgdGhpcy5uYXYgPSBuZXcgTmF2aWdhdG9yKGRpbWVuc2lvbnMsIHBvc2l0aW9uID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuaXNCbG9ja2VkKHBvc2l0aW9uKVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcGF3blBvc2l0aW9ucyA9IHRoaXMubWFwLnBpY2tDbGVhckxvY2F0aW9ucyhpbml0aWFsUGF3bkNvdW50KVxyXG4gICAgdGhpcy5wYXducyA9IFtdXHJcbiAgICBjb25zdCBsYW5ndWFnZSA9IERXQVJWRU5fTEFOR1VBR0VcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5pdGlhbFBhd25Db3VudDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHBhd25OYW1lID0gcGljayguLi5sYW5ndWFnZS5zdGVtcykgKyBwaWNrKC4uLmxhbmd1YWdlLnN1ZmZpeGVzKVxyXG4gICAgICB0aGlzLnBhd25zLnB1c2goIFxyXG4gICAgICAgIHRoaXMubWFrZVBhd24ocGF3bk5hbWUsIHBhd25Qb3NpdGlvbnNbaV0pXHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCB3aWR0aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5kaW1lbnNpb25zWzBdIH1cclxuICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmRpbWVuc2lvbnNbMV0gfVxyXG5cclxuICAvLyBnZXQgdGVycmFpbigpOiBHcmlkPFRlcnJhaW4+IHsgcmV0dXJuIHRoaXMubWFwLnRlcnJhaW4gfVxyXG4gIGdldCB2ZWdldGF0aW9uKCk6IEdyaWQ8VmVnZXRhdGlvbj4geyByZXR1cm4gdGhpcy5tYXAudmVnZXRhdGlvbiB9XHJcbiAgZ2V0IHNpZ2lscygpOiBHcmlkPFNpZ2lsPiB7IHJldHVybiB0aGlzLm1hcC5zaWdpbHMgfVxyXG4gIGdldCByYXdNYXRlcmlhbCgpOiBHcmlkPE1hdGVyaWFsPiB7IHJldHVybiB0aGlzLm1hcC5yYXdNYXRlcmlhbCB9IFxyXG4gIGdldCByYXdNYXRlcmlhbENvdW50KCk6IFNpbXBsZUdyaWQ8bnVtYmVyPiB7IHJldHVybiB0aGlzLm1hcC5yYXdNYXRlcmlhbENvdW50IH0gXHJcbiAgZ2V0IHBsYW5uZWRTdHJ1Y3R1cmUoKTogR3JpZDxTdHJ1Y3R1cmU+IHsgcmV0dXJuIHRoaXMubWFwLnBsYW5uZWRTdHJ1Y3R1cmUgfVxyXG4gIGdldCBwbGFubmVkU3RydWN0dXJlTWF0ZXJpYWwoKTogR3JpZDxNYXRlcmlhbD4geyByZXR1cm4gdGhpcy5tYXAucGxhbm5lZFN0cnVjdHVyZU1hdGVyaWFsIH1cclxuXHJcbiAgbWFrZVBhd24gPSAobmFtZTogc3RyaW5nLCBwb3M6IFdvcmxkUG9zaXRpb24pOiBQYXduID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHBvcyxcclxuICAgICAgLy8gcG9zOiB0aGlzLm1hcC5waWNrUmFuZG9tQ2xlYXJMb2NhdGlvbigpLFxyXG4gICAgICBpbnZlbnRvcnk6IFtdLFxyXG4gICAgICBwcmlvcml0aWVzOiBzaHVmZmxlKCdsb2dnaW5nJywgJ2hhdWxpbmcnLCAnYnVpbGRpbmcnKSBhcyBBY3Rpdml0eVtdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JFYWNoUG9zaXRpb24oZm46ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy53aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgZm4oeCx5KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaG9ydGVzdFBhdGgoc3JjOiBXb3JsZFBvc2l0aW9uLCBkc3Q6IFdvcmxkUG9zaXRpb24pOiBXb3JsZFBvc2l0aW9uW10ge1xyXG4gICAgY29uc3QgeyBwYXRoIH0gPSB0aGlzLm5hdi5hU3RhcihzcmMsIGRzdClcclxuICAgIHJldHVybiBwYXRoXHJcbiAgfVxyXG5cclxuICBpc0Jsb2NrZWQocG9zaXRpb246IFdvcmxkUG9zaXRpb24pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1hcC52ZWdldGF0aW9uLmF0KHBvc2l0aW9uKSA9PT0gJ3RyZWUnXHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgV29ybGRQb3NpdGlvbiwgRGlyZWN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcG9zID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogV29ybGRQb3NpdGlvbiA9PiB7XHJcbiAgcmV0dXJuIFt4LCB5XSBhcyBXb3JsZFBvc2l0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZGlyZWN0aW9uRnJvbSA9IChzcmM6IFdvcmxkUG9zaXRpb24sIGRzdDogV29ybGRQb3NpdGlvbik6IERpcmVjdGlvbiA9PiB7XHJcbiAgY29uc3QgW3N4LCBzeV0gPSBzcmNcclxuICBjb25zdCBbZHgsIGR5XSA9IGRzdFxyXG4gIGlmIChzeCA9PT0gZHgpIHtcclxuICAgIGlmIChzeSA+IGR5KSB7IHJldHVybiAnbm9ydGgnIH1cclxuICAgIGlmIChzeSA8IGR5KSB7IHJldHVybiAnc291dGgnIH1cclxuICB9IGVsc2UgaWYgKHN5ID09PSBkeSkge1xyXG4gICAgaWYgKHN4ID4gZHgpIHsgcmV0dXJuICd3ZXN0JyB9XHJcbiAgICBpZiAoc3ggPCBkeCkgeyByZXR1cm4gJ2Vhc3QnIH1cclxuICB9XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdQb3NpdGlvbnMgYXJlIG5vdCBuZWlnaGJvcnM6ICcgKyBzcmMgKyAnIC8gJyArIGRzdClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkanVzdFBvc2l0aW9uID0gKHNyYzogV29ybGRQb3NpdGlvbiwgZGlyOiBEaXJlY3Rpb24pOiBXb3JsZFBvc2l0aW9uID0+IHtcclxuICBjb25zdCBbc3gsc3ldID0gc3JjXHJcbiAgaWYgKGRpciA9PT0gJ2Vhc3QnKSB7XHJcbiAgICByZXR1cm4gcG9zKHN4KzEsc3kpXHJcbiAgfSBlbHNlIGlmIChkaXIgPT09ICd3ZXN0Jykge1xyXG4gICAgcmV0dXJuIHBvcyhzeC0xLHN5KVxyXG4gIH0gZWxzZSBpZiAoZGlyID09PSAnbm9ydGgnKSB7XHJcbiAgICByZXR1cm4gcG9zKHN4LHN5LTEpXHJcbiAgfSBlbHNlIGlmIChkaXIgPT09ICdzb3V0aCcpIHtcclxuICAgIHJldHVybiBwb3Moc3gsc3krMSlcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHdpdGhpbkJvdW5kcyA9IChzcmM6IFdvcmxkUG9zaXRpb24sIGRpbXM6IFtudW1iZXIsIG51bWJlcl0pOiBib29sZWFuID0+IHtcclxuICBjb25zdCBbc3gsc3ldID0gc3JjXHJcbiAgY29uc3QgW3csaF0gPSBkaW1zXHJcbiAgcmV0dXJuIHN4ID49IDAgJiYgc3ggPCB3ICYmIHN5ID49IDAgJiYgc3kgPCBoXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuZWlnaGJvcnNPZlBvc2l0aW9uID0gKHNyYzogV29ybGRQb3NpdGlvbiwgZGltczogW251bWJlciwgbnVtYmVyXSk6IFdvcmxkUG9zaXRpb25bXSA9PiB7XHJcbiAgY29uc3QgW3N4LHN5XSA9IHNyY1xyXG4gIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAgICBwb3Moc3gsIHN5LTEpLCBcclxuICAgIHBvcyhzeC0xLHN5KSwgICAgICAgICAgICAgICAgICBwb3Moc3grMSxzeSksXHJcbiAgICAgICAgICAgICAgICAgICBwb3Moc3gsIHN5KzEpLCBcclxuICBdLmZpbHRlcihwID0+IHdpdGhpbkJvdW5kcyhwLCBkaW1zKSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5laWdoYm9yc09mUG9zaXRpb25QbHVzRGlhZ29uYWxzID0gKHNyYzogV29ybGRQb3NpdGlvbiwgZGltczogW251bWJlciwgbnVtYmVyXSk6IFdvcmxkUG9zaXRpb25bXSA9PiB7XHJcbiAgY29uc3QgW3N4LHN5XSA9IHNyY1xyXG4gIHJldHVybiBbXHJcbiAgICBwb3Moc3gtMSwgc3ktMSksIHBvcyhzeCwgc3ktMSksICBwb3Moc3grMSwgc3ktMSksXHJcbiAgICBwb3Moc3gtMSxzeSksICAgICAgICAgICAgICAgICAgICBwb3Moc3grMSxzeSksXHJcbiAgICBwb3Moc3gtMSxzeSsxKSwgIHBvcyhzeCwgc3krMSksICBwb3Moc3grMSwgc3krMSksXHJcbiAgXS5maWx0ZXIocCA9PiB3aXRoaW5Cb3VuZHMocCwgZGltcykpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3NFcSA9IChhOiBXb3JsZFBvc2l0aW9uLCBiOiBXb3JsZFBvc2l0aW9uKTogYm9vbGVhbiA9PiB7XHJcbiAgaWYgKGEgJiYgYikge1xyXG4gIGNvbnN0IFtheCxheV0gPSBhXHJcbiAgY29uc3QgW2J4LGJ5XSA9IGJcclxuICByZXR1cm4gYXggPT09IGJ4ICYmIGF5ID09PSBieVxyXG4gIH0gZWxzZSB7IHJldHVybiBmYWxzZX1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhdGhFcSA9IChhOiBXb3JsZFBvc2l0aW9uW10sIGI6IFdvcmxkUG9zaXRpb25bXSk6IGJvb2xlYW4gPT4ge1xyXG4gIGlmICghKGEubGVuZ3RoID09PSBiLmxlbmd0aCkpIHsgcmV0dXJuIGZhbHNlIH1cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICghcG9zRXEoYVtpXSwgYltpXSkpIHsgcmV0dXJuIGZhbHNlIH1cclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRpc3RhbmNlQmV0d2VlbiA9IChhOiBXb3JsZFBvc2l0aW9uLCBiOiBXb3JsZFBvc2l0aW9uKTogbnVtYmVyID0+IHtcclxuICBjb25zdCBbYXgsYXldID0gYVxyXG4gIGNvbnN0IFtieCxieV0gPSBiXHJcbiAgY29uc3QgZHggPSBheCAtIGJ4XHJcbiAgY29uc3QgZHkgPSBheSAtIGJ5XHJcbiAgY29uc3QgZCA9IE1hdGguc3FydCgoZHgqZHgpICsgKGR5KmR5KSlcclxuICAvLyBjb25zb2xlLmxvZyhcIkNvbXB1dGUgZGlzdGFuY2UgYmV0d2VlblwiLCBhLCBiLCBkKVxyXG4gIHJldHVybiBkIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYnlEaXN0YW5jZUZyb20gPSAodGFyZ2V0OiBXb3JsZFBvc2l0aW9uKSA9PiAoYTogV29ybGRQb3NpdGlvbiwgYjogV29ybGRQb3NpdGlvbik6IG51bWJlciA9PiB7XHJcbiAgcmV0dXJuIGRpc3RhbmNlQmV0d2Vlbih0YXJnZXQsIGEpID4gZGlzdGFuY2VCZXR3ZWVuKHRhcmdldCwgYikgPyAxIDogLTFcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFyZWFDb250YWlucyA9ICh0b3BMZWZ0OiBXb3JsZFBvc2l0aW9uLCBib3R0b21SaWdodDogV29ybGRQb3NpdGlvbiwgdHJpYWxQb3M6IFdvcmxkUG9zaXRpb24pOiBib29sZWFuID0+IHtcclxuICBjb25zdCBbYXgsIGF5XSA9IHRvcExlZnRcclxuICBjb25zdCBbYngsIGJ5XSA9IGJvdHRvbVJpZ2h0XHJcbiAgY29uc3QgW3gseV0gPSB0cmlhbFBvc1xyXG4gIGNvbnN0IGNvbnRhaW5lZCA9IGF4IDw9IHggJiYgeCA8PSBieCAmJiBheSA8PSB5ICYmIHkgPD0gYnlcclxuICAvLyBjb25zb2xlLmxvZyhcIkRvZXMgYXJlYSBcIiArIGF4ICsgXCIsIFwiICsgYXkgKyBcIiB0byBcIiArIGJ4ICsgXCIsIFwiICsgYnkgKyBcIiBjb250YWluIFwiICsgeCArIFwiLCBcIiArIHkgKyBcIj9cIiwgY29udGFpbmVkKVxyXG4gIHJldHVybiBjb250YWluZWRcclxufSIsImltcG9ydCB7IFBhd25Ub2tlbiB9IGZyb20gXCIuLi8uLi9hY3RvcnMvUGF3blRva2VuXCI7XHJcbmltcG9ydCB7IGJ5RGlzdGFuY2VGcm9tLCBuZWlnaGJvcnNPZlBvc2l0aW9uIH0gZnJvbSBcIi4uL1dvcmxkUG9zaXRpb25cIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9HYW1lXCI7XHJcbmltcG9ydCB7IEFjdGl2aXR5LCBKb2JEZXRhaWwgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgUG9zaXRpb25TZXQgfSBmcm9tIFwiLi4vUG9zaXRpb25TZXRcIjtcclxuaW1wb3J0IHsgSUFjdGl2aXR5IH0gZnJvbSBcIi4uL0lBY3Rpdml0eVwiO1xyXG5pbXBvcnQgeyBUUkVFX0NVVF9EVVJBVElPTiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXRUaW1iZXIgaW1wbGVtZW50cyBJQWN0aXZpdHkge1xyXG4gIHRpdGxlOiBBY3Rpdml0eSA9ICdsb2dnaW5nJztcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhbWU6IEdhbWUpIHsgfVxyXG5cclxuICBwcml2YXRlIGFzc2lnbmVkVHJlZVBvc2l0aW9uczogUG9zaXRpb25TZXQgPSBuZXcgUG9zaXRpb25TZXQoKTtcclxuXHJcbiAgaXNKb2JBdmFpbGFibGUodG9rZW46IFBhd25Ub2tlbik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgdHJlZVBvc2l0aW9ucyA9IHRoaXMuZ2FtZS5tYXJrZWRUcmVlUG9zaXRpb25zXHJcbiAgICAgIC5maWx0ZXIocG9zID0+ICF0aGlzLmFzc2lnbmVkVHJlZVBvc2l0aW9ucy5oYXMocG9zKSlcclxuICAgICAgLnNvcnQoYnlEaXN0YW5jZUZyb20odG9rZW4ucGF3bi5wb3MpKVxyXG4gICAgICAuZmluZChwb3MgPT4gbmVpZ2hib3JzT2ZQb3NpdGlvbihwb3MsIHRoaXMuZ2FtZS5kaW1zKVxyXG4gICAgICAgIC5maWx0ZXIobiA9PiAhdGhpcy5nYW1lLmlzQmxvY2tlZChuKSlcclxuICAgICAgICAuZmluZChuID0+IHRoaXMuZ2FtZS5jYW5QYXRoQmV0d2Vlbih0b2tlbi5wYXduLnBvcywgbikpXHJcbiAgICAgICk7XHJcbiAgICBjb25zdCBhdmFpbGFibGUgPSB0cmVlUG9zaXRpb25zIC8vLmxlbmd0aCA+IDA7XHJcbiAgICByZXR1cm4gQm9vbGVhbihhdmFpbGFibGUpO1xyXG4gIH1cclxuXHJcbiAgZmluZEpvYih0b2tlbjogUGF3blRva2VuKTogSm9iRGV0YWlsIHtcclxuICAgIC8vIGlmICh0aGlzLmdhbWUudGlja3MgJSA1ICE9PSAwKSByZXR1cm47XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIi0tLT4gRmluZCB0aW1iZXIgam9iIGZvciBcIiArIHRva2VuLnBhd24ubmFtZSlcclxuICAgIGNvbnN0IHRyZWVQb3NpdGlvbnMgPSBbLi4udGhpcy5nYW1lLm1hcmtlZFRyZWVQb3NpdGlvbnNdXHJcbiAgICAgIC5maWx0ZXIocG9zID0+ICF0aGlzLmFzc2lnbmVkVHJlZVBvc2l0aW9ucy5oYXMocG9zKSlcclxuXHJcbiAgICBpZiAodHJlZVBvc2l0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHRyZWVQb3NpdGlvbiA9IHRyZWVQb3NpdGlvbnNcclxuICAgICAgICAuc29ydChieURpc3RhbmNlRnJvbSh0b2tlbi5wYXduLnBvcykpXHJcbiAgICAgICAgLmZpbmQocG9zID0+IHtcclxuICAgICAgICAgIHJldHVybiBuZWlnaGJvcnNPZlBvc2l0aW9uKHBvcywgdGhpcy5nYW1lLmRpbXMpXHJcbiAgICAgICAgICAgIC5maWx0ZXIobiA9PiAhdGhpcy5nYW1lLmlzQmxvY2tlZChuKSlcclxuICAgICAgICAgICAgLmZpbmQobiA9PiB0aGlzLmdhbWUuY2FuUGF0aEJldHdlZW4odG9rZW4ucGF3bi5wb3MsIG4pKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIGlmICh0cmVlUG9zaXRpb24pIHtcclxuICAgICAgICBjb25zdCBuZWlnaGJvciA9IG5laWdoYm9yc09mUG9zaXRpb24odHJlZVBvc2l0aW9uLCB0aGlzLmdhbWUuZGltcylcclxuICAgICAgICAgIC5maWx0ZXIobiA9PiAhdGhpcy5nYW1lLmlzQmxvY2tlZChuKSlcclxuICAgICAgICAgIC5zb3J0KGJ5RGlzdGFuY2VGcm9tKHRva2VuLnBhd24ucG9zKSlcclxuICAgICAgICAgIC5maW5kKG4gPT4gdGhpcy5nYW1lLmNhblBhdGhCZXR3ZWVuKHRva2VuLnBhd24ucG9zLCBuKSlcclxuICAgICAgICBpZiAobmVpZ2hib3IpIHtcclxuICAgICAgICAgIHRoaXMuYXNzaWduZWRUcmVlUG9zaXRpb25zLmFkZCh0cmVlUG9zaXRpb24pO1xyXG4gICAgICAgICAgY29uc3QgdHJhdmVsRGVzdGluYXRpb24gPSBuZWlnaGJvclxyXG4gICAgICAgICAgcmV0dXJuIHsgYWN0aXZpdHlUYXJnZXQ6IHRyZWVQb3NpdGlvbiwgdHJhdmVsRGVzdGluYXRpb24gfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHBlcmZvcm0odG9rZW46IFBhd25Ub2tlbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgYXdhaXQgdG9rZW4uYWN0aW9ucy5kZWxheShUUkVFX0NVVF9EVVJBVElPTikuYXNQcm9taXNlKCk7XHJcbiAgICB0aGlzLmdhbWUuY2hvcFRyZWUodG9rZW4ucGF3bi5hY3Rpdml0eVRhcmdldCk7XHJcbiAgICB0aGlzLmFzc2lnbmVkVHJlZVBvc2l0aW9ucy5kZWxldGUodG9rZW4ucGF3bi5hY3Rpdml0eVRhcmdldCk7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xyXG5pbXBvcnQgeyBJQWN0aXZpdHkgfSBmcm9tIFwiLi4vSUFjdGl2aXR5XCI7XHJcbmltcG9ydCB7IFBhd25Ub2tlbiB9IGZyb20gXCIuLi8uLi9hY3RvcnMvUGF3blRva2VuXCI7XHJcbmltcG9ydCB7IEpvYkRldGFpbCwgQWN0aXZpdHksIFdvcmxkUG9zaXRpb24gfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9HYW1lXCI7XHJcbmltcG9ydCB7IGJ5RGlzdGFuY2VGcm9tIH0gZnJvbSBcIi4uL1dvcmxkUG9zaXRpb25cIjtcclxuaW1wb3J0IHsgUG9zaXRpb25TZXQgfSBmcm9tIFwiLi4vUG9zaXRpb25TZXRcIjtcclxuaW1wb3J0IHsgSU5WRU5UT1JZX0xJTUlULCBTVEFDS19NQVggfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGF1bCBpbXBsZW1lbnRzIElBY3Rpdml0eSB7XHJcbiAgdGl0bGU6IEFjdGl2aXR5ID0gXCJoYXVsaW5nXCI7XHJcblxyXG4gIHByaXZhdGUgYXNzaWduZWRJdGVtTG9jYXRpb25zOiBQb3NpdGlvblNldCA9IG5ldyBQb3NpdGlvblNldCgpO1xyXG4gIC8vIHByaXZhdGUgYXNzaWduZWRab25lTG9jYXRpb25zOiBQb3NpdGlvblNldCA9IG5ldyBQb3NpdGlvblNldCgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhbWU6IEdhbWUpIHt9XHJcblxyXG4gIGdldCBvdXRzdGFuZGluZ0l0ZW1Mb2NhdGlvbnMoKTogV29ybGRQb3NpdGlvbltdIHtcclxuICAgIGNvbnN0IHRpbWJlciA9IHRoaXMuZ2FtZS5yYXdNYXRlcmlhbExvY2F0aW9ucygnd29vZCcpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIi0tLT4gT3V0c3RhbmRpbmcgd29vZCBpcyBhdCBcIiwgdGltYmVyKVxyXG4gICAgcmV0dXJuIHRpbWJlci5maWx0ZXIobG9jYXRpb24gPT5cclxuICAgICAgIXRoaXMuZ2FtZS5pc0xvY2F0aW9uV2l0aGluQW55Wm9uZShsb2NhdGlvbilcclxuICAgICkuZmlsdGVyKGxvY2F0aW9uID0+ICF0aGlzLmFzc2lnbmVkSXRlbUxvY2F0aW9ucy5oYXMobG9jYXRpb24pKVxyXG4gIH1cclxuXHJcbiAgZ2V0IGZyZWVab25lTG9jYXRpb25zKCk6IFdvcmxkUG9zaXRpb25bXSB7XHJcbiAgICByZXR1cm4gdGhpcy5nYW1lLmZpbmRVbmZpbGxlZFpvbmVQb3NpdGlvbnMoKVxyXG4gICAgICAvLyAuZmlsdGVyKGxvY2F0aW9uID0+ICF0aGlzLmFzc2lnbmVkWm9uZUxvY2F0aW9ucy5oYXMobG9jYXRpb24pKVxyXG4gIH1cclxuXHJcbiAgaXNKb2JBdmFpbGFibGUodG9rZW46IFBhd25Ub2tlbik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgY2FuR2F0aGVyID0gKHRoaXMub3V0c3RhbmRpbmdJdGVtTG9jYXRpb25zLmxlbmd0aCA+IDAgJiYgIXRoaXMuZ2FtZS5hcmVBbGxab25lc0Z1bGwoKSlcclxuICAgIGNvbnN0IGNhblN0b3JlID0gKCF0aGlzLmdhbWUuYXJlQWxsWm9uZXNGdWxsKCkgJiYgdG9rZW4ucGF3bi5pbnZlbnRvcnkubGVuZ3RoID4gMClcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiLS0tPiBJcyBhIGhhdWxpbmcgam9iIGF2YWlsYWJsZSBmb3IgXCIgKyB0b2tlbi5wYXduLm5hbWUgKyBcIj9cIiwgeyBjYW5HYXRoZXIsIGNhblN0b3JlIH0pO1xyXG4gICAgcmV0dXJuIGNhbkdhdGhlciB8fCBjYW5TdG9yZVxyXG4gIH1cclxuXHJcbiAgZmluZEpvYih0b2tlbjogUGF3blRva2VuKTogSm9iRGV0YWlsIHtcclxuICAgIGNvbnN0IGhhc1Jvb21JbkludmVudG9yeSA9IHRva2VuLnBhd24uaW52ZW50b3J5Lmxlbmd0aCA8IElOVkVOVE9SWV9MSU1JVFxyXG4gICAgLy8gY29uc29sZS5sb2coXCItLS0+IERvZXMgXCIgKyB0b2tlbi5wYXduLm5hbWUgICsgXCIgaGF2ZSByb29tIGluIGludmVudG9yeT8gXCIgKyBoYXNSb29tSW5JbnZlbnRvcnkpXHJcbiAgICBjb25zdCB0aGVyZUV4aXN0T3V0c3RhbmRpbmdJdGVtcyA9IHRoaXMub3V0c3RhbmRpbmdJdGVtTG9jYXRpb25zLmxlbmd0aCA+IDBcclxuICAgIGlmIChoYXNSb29tSW5JbnZlbnRvcnkgJiYgdGhlcmVFeGlzdE91dHN0YW5kaW5nSXRlbXMpIHtcclxuICAgICAgY29uc3QgbmVhcmVzdEFjY2Vzc2libGVJdGVtTG9jYXRpb24gPSB0aGlzLm91dHN0YW5kaW5nSXRlbUxvY2F0aW9uc1xyXG4gICAgICAgIC5zb3J0KGJ5RGlzdGFuY2VGcm9tKHRva2VuLnBhd24ucG9zKSlcclxuICAgICAgICAuZmluZChwb3MgPT4gdGhpcy5nYW1lLmNhblBhdGhCZXR3ZWVuKHBvcywgdG9rZW4ucGF3bi5wb3MpKVxyXG4gICAgICBpZiAobmVhcmVzdEFjY2Vzc2libGVJdGVtTG9jYXRpb24pIHtcclxuICAgICAgICB0aGlzLmFzc2lnbmVkSXRlbUxvY2F0aW9ucy5hZGQobmVhcmVzdEFjY2Vzc2libGVJdGVtTG9jYXRpb24pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGFjdGl2aXR5VGFyZ2V0OiBuZWFyZXN0QWNjZXNzaWJsZUl0ZW1Mb2NhdGlvbixcclxuICAgICAgICAgIHRyYXZlbERlc3RpbmF0aW9uOiBuZWFyZXN0QWNjZXNzaWJsZUl0ZW1Mb2NhdGlvbixcclxuICAgICAgICAgIGpvYlN1YnR5cGU6ICdoYXVsLWdhdGhlcidcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodG9rZW4ucGF3bi5pbnZlbnRvcnkubGVuZ3RoID4gMCkgeyAvL30gJiYgIXRoaXMuZ2FtZS5hcmVBbGxab25lc0Z1bGwoKSkge1xyXG4gICAgICAvLyBmaW5kIGFuIHVuLWZpbGxlZCB6b25lIHNsb3QuLi5cclxuICAgICAgY29uc3QgZnJlZVpvbmVTcGFjZSA9IHRoaXMuZnJlZVpvbmVMb2NhdGlvbnNcclxuICAgICAgICAuc29ydChieURpc3RhbmNlRnJvbSh0b2tlbi5wYXduLnBvcykpXHJcbiAgICAgICAgLmZpbmQocG9zID0+IHRoaXMuZ2FtZS5jYW5QYXRoQmV0d2Vlbihwb3MsIHRva2VuLnBhd24ucG9zKSlcclxuICAgICAgaWYgKGZyZWVab25lU3BhY2UpIHtcclxuICAgICAgICAvLyB0aGlzLmFzc2lnbmVkWm9uZUxvY2F0aW9ucy5hZGQoZnJlZVpvbmVTcGFjZSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgYWN0aXZpdHlUYXJnZXQ6IGZyZWVab25lU3BhY2UsXHJcbiAgICAgICAgICB0cmF2ZWxEZXN0aW5hdGlvbjogZnJlZVpvbmVTcGFjZSxcclxuICAgICAgICAgIGpvYlN1YnR5cGU6ICdoYXVsLXN0b3JlJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgcGVyZm9ybSh0b2tlbjogUGF3blRva2VuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodG9rZW4ucGF3bi5qb2JTdWJ0eXBlID09PSAnaGF1bC1nYXRoZXInKSB7XHJcbiAgICAgIGNvbnN0IHsgYWN0aXZpdHlUYXJnZXQgfSA9IHRva2VuLnBhd25cclxuICAgICAgY29uc3QgbWF4VG9BY2NlcHQgPSBJTlZFTlRPUllfTElNSVQgLSB0b2tlbi5wYXduLmludmVudG9yeS5sZW5ndGhcclxuICAgICAgY29uc3QgeyBraW5kLCBhbW91bnQgfSA9IHRoaXMuZ2FtZS5nYXRoZXJSZXNvdXJjZShhY3Rpdml0eVRhcmdldCwgbWF4VG9BY2NlcHQpXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyBpKyspIHtcclxuICAgICAgICB0b2tlbi5wYXduLmludmVudG9yeS5wdXNoKGtpbmQpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hc3NpZ25lZEl0ZW1Mb2NhdGlvbnMuZGVsZXRlKGFjdGl2aXR5VGFyZ2V0KVxyXG4gICAgfSBlbHNlIGlmICh0b2tlbi5wYXduLmpvYlN1YnR5cGUgPT09ICdoYXVsLXN0b3JlJykge1xyXG4gICAgICBjb25zdCB7IGFjdGl2aXR5VGFyZ2V0IH0gPSB0b2tlbi5wYXduXHJcbiAgICAgIGNvbnN0IGtpbmQgPSB0aGlzLmdhbWUucmF3TWF0ZXJpYWxLaW5kQXRMb2NhdGlvbihhY3Rpdml0eVRhcmdldCkgLy89PT0gJ25vdGhpbmcnXHJcbiAgICAgICAgPyB0aGlzLmdhbWUucmF3TWF0ZXJpYWxLaW5kQXRMb2NhdGlvbihhY3Rpdml0eVRhcmdldClcclxuICAgICAgICA6IHRva2VuLnBhd24uaW52ZW50b3J5WzBdXHJcbiAgICAgIGNvbnN0IGFtb3VudExvY2F0aW9uQ2FuQWNjZXB0ID0gU1RBQ0tfTUFYIC0gdGhpcy5nYW1lLnJhd01hdGVyaWFsQ291bnRBdExvY2F0aW9uKGFjdGl2aXR5VGFyZ2V0KVxyXG4gICAgICBsZXQgYW1vdW50VG9TdG9yZSA9IHRva2VuLnBhd24uaW52ZW50b3J5LmZpbHRlcihrID0+IGtpbmQgPT09IGspLmxlbmd0aFxyXG4gICAgICBpZiAoYW1vdW50VG9TdG9yZSA+IGFtb3VudExvY2F0aW9uQ2FuQWNjZXB0KSB7XHJcbiAgICAgICAgYW1vdW50VG9TdG9yZSA9IGFtb3VudExvY2F0aW9uQ2FuQWNjZXB0XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnRUb1N0b3JlOyBpKyspIHtcclxuICAgICAgICBjb25zdCBpbmRleFRvUmVtb3ZlID0gdG9rZW4ucGF3bi5pbnZlbnRvcnkuZmluZEluZGV4KGsgPT4ga2luZCA9PT0gaylcclxuICAgICAgICB0b2tlbi5wYXduLmludmVudG9yeSA9IHRva2VuLnBhd24uaW52ZW50b3J5LmZpbHRlcigoXyxpKSA9PiBpIT09aW5kZXhUb1JlbW92ZSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmdhbWUuc3RvcmVSZXNvdXJjZShraW5kLCBhY3Rpdml0eVRhcmdldCwgYW1vdW50VG9TdG9yZSlcclxuICAgICAgLy8gdGhpcy5hc3NpZ25lZFpvbmVMb2NhdGlvbnMuZGVsZXRlKGFjdGl2aXR5VGFyZ2V0KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0iLCJleHBvcnQgY29uc3QgcGljayA9IDxUPiguLi5lbGVtczogVFtdKTogVCA9PiB7XHJcbiAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChlbGVtcy5sZW5ndGgpKVxyXG4gICAgcmV0dXJuIGVsZW1zW2luZGV4XVxyXG59IiwiZXhwb3J0IGNvbnN0IHNodWZmbGUgPSA8VD4oLi4uYXJyOiBUW10pOiBUW10gPT4gYXJyLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSA+IDAuNSA/IC0xIDogMSk7IiwiZXhwb3J0IGNvbnN0IHRha2U6IDxUPihuOiBudW1iZXIsIGFycjogVFtdKSA9PiBUW10gPSAobiwgYXJyKSA9PiB7XHJcbiAgaWYgKG4gPj0gYXJyLmxlbmd0aCkgeyByZXR1cm4gYXJyIH1cclxuICBjb25zdCB0YWtlbiA9IFtdXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcclxuICAgIHRha2VuLnB1c2goYXJyW2ldKVxyXG4gIH1cclxuICByZXR1cm4gdGFrZW5cclxufSIsImltcG9ydCB7IEZyZWVob2xkRW5naW5lIH0gZnJvbSBcIi4vRnJlZWhvbGRFbmdpbmVcIjtcclxuaW1wb3J0IHsgUGxheSB9IGZyb20gXCIuL2ZyZWVob2xkL1BsYXlcIjtcclxuaW1wb3J0IHsgUmVzb3VyY2VzIH0gZnJvbSBcIi4vZnJlZWhvbGQvUmVzb3VyY2VzXCI7XHJcbmltcG9ydCB7IExvYWRlciwgQ29sb3IgfSBmcm9tIFwiZXhjYWxpYnVyXCI7XHJcblxyXG5jb25zb2xlLmxvZyhcIkZSRUVIT0xEIC0tIGluZGV4XCIpO1xyXG5cclxuY29uc3QgZnJlZWhvbGQgPSBuZXcgRnJlZWhvbGRFbmdpbmUoKTtcclxuY29uc3QgcGxheSA9IG5ldyBQbGF5KGZyZWVob2xkKTtcclxuZnJlZWhvbGQuYmFja2dyb3VuZENvbG9yID0gQ29sb3IuZnJvbVJHQigvLzMwLDIwMCwxNTApIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwLDE4MCwxNDApIC8vbmV3IENvbG9yKDQwLDEyMCw4MCk7XHJcbmZyZWVob2xkLmFkZCgncGxheScsIHBsYXkpO1xyXG5cclxuY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcigpO1xyXG5sb2FkZXIuc3VwcHJlc3NQbGF5QnV0dG9uID0gdHJ1ZVxyXG5mb3IgKGNvbnN0IGtleSBpbiBSZXNvdXJjZXMpIHsgbG9hZGVyLmFkZFJlc291cmNlKFJlc291cmNlc1trZXldKSB9XHJcbmZyZWVob2xkLnN0YXJ0KGxvYWRlcikudGhlbigoKSA9PiBmcmVlaG9sZC5nb1RvU2NlbmUoJ3BsYXknKSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==