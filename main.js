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
        this.help = new excalibur_1.Label("actions: (c)ut timber / create (z)one / (d)elete zone / (b)uild wall", 20, 30);
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
exports.INITIAL_PAWN_COUNT = 20;
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

module.exports = __webpack_require__.p + "27181b27e4b780b25b093885d355a6b8.png";

/***/ }),

/***/ "./src/freehold/images/structure.png":
/*!*******************************************!*\
  !*** ./src/freehold/images/structure.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "65dd75d47775004cad7cc4743c187a9c.png";

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
            // update this cell (and all neighbors...)
            if (this.world.plannedStructure.at(position) === 'wall') {
                const neighbors = this.world.plannedStructure.labelledNeighborsAt(position);
                const mask = (neighbors.north === 'wall' ? 1 : 0) * 1 +
                    (neighbors.east === 'wall' ? 1 : 0) * 2 +
                    (neighbors.south === 'wall' ? 1 : 0) * 4 +
                    (neighbors.west === 'wall' ? 1 : 0) * 8;
                const [x, y] = position;
                const cell = this.plannedStructures.getCell(x, y);
                const sprite = new excalibur_1.TileSprite('structure', constants_1.WALL_MASK[mask]);
                cell.clearSprites();
                cell.pushSprite(sprite);
            }
            // }
        }
        // throw new Error("Method not implemented.");
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
                if (!theFringe.has(neighbor)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyZWVob2xkRW5naW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9QbGF5LnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9SZXNvdXJjZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL2FjdG9ycy9QYXduVG9rZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL2FjdG9ycy9TaW5nbGVDZWxsQm94LnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9hY3RvcnMvWm9uZVZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL2NhbnZhcy9TaGFwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvaW1hZ2VzL2ljb25zLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvaW1hZ2VzL21hdHRlci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL2ltYWdlcy9zdHJ1Y3R1cmUtdHJhbnNwYXJlbnQucG5nIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9pbWFnZXMvc3RydWN0dXJlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvaW1hZ2VzL3RlcnJhaW4ucG5nIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9pbWFnZXMvdHJlZXMucG5nIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9tb2RlbHMvQ2FydG9ncmFtLnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9tb2RlbHMvRHJhZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvbW9kZWxzL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL21vZGVscy9HcmlkLnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9tb2RlbHMvTmF2aWdhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC9tb2RlbHMvUGF3bk1hbmFnZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL21vZGVscy9Qb3NpdGlvblNldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvbW9kZWxzL1NpbXBsZUdyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL21vZGVscy9Xb3JsZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvbW9kZWxzL1dvcmxkUG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL21vZGVscy9hY3Rpdml0aWVzL0N1dFRpbWJlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvbW9kZWxzL2FjdGl2aXRpZXMvSGF1bC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZnJlZWhvbGQvdXRpbC9waWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9mcmVlaG9sZC91dGlsL3NodWZmbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZyZWVob2xkL3V0aWwvdGFrZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FB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LENBQUMsQ0FBQztDQUFFO0FBQ25FLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvaW5kZXgudHNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXMgKi9cclxuaW1wb3J0IHsgRW5naW5lLCBEaXNwbGF5TW9kZSwgTG9hZGVyIH0gZnJvbSAnZXhjYWxpYnVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGcmVlaG9sZEVuZ2luZSBleHRlbmRzIEVuZ2luZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcih7IGRpc3BsYXlNb2RlOiBEaXNwbGF5TW9kZS5GdWxsU2NyZWVuIH0pXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnQobG9hZGVyOiBMb2FkZXIpIHsgcmV0dXJuIHN1cGVyLnN0YXJ0KGxvYWRlcikgfVxyXG59XHJcbiIsImltcG9ydCB7IFNjZW5lLCBWZWN0b3IsIEFjdG9yLCBDb2xvciwgSW5wdXQsIExhYmVsLCBTY3JlZW5FbGVtZW50IH0gZnJvbSBcImV4Y2FsaWJ1clwiO1xyXG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vbW9kZWxzL0dhbWVcIjtcclxuaW1wb3J0IHsgV29ybGQgfSBmcm9tIFwiLi9tb2RlbHMvV29ybGRcIjtcclxuaW1wb3J0IHsgV29ybGRQb3NpdGlvbiB9IGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCB7IENFTExfU0laRSwgV09STERfRElNUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBGcmVlaG9sZEVuZ2luZSB9IGZyb20gXCIuLi9GcmVlaG9sZEVuZ2luZVwiO1xyXG5pbXBvcnQgeyBwb3MgfSBmcm9tIFwiLi9tb2RlbHMvV29ybGRQb3NpdGlvblwiO1xyXG5pbXBvcnQgeyBEcmFnIH0gZnJvbSBcIi4vbW9kZWxzL0RyYWdcIjtcclxuaW1wb3J0IHsgU2luZ2xlQ2VsbEJveCB9IGZyb20gXCIuL2FjdG9ycy9TaW5nbGVDZWxsQm94XCI7XHJcbmltcG9ydCB7IFpvbmVWaWV3IH0gZnJvbSBcIi4vYWN0b3JzL1pvbmVWaWV3XCI7XHJcblxyXG5jbGFzcyBIdWQgZXh0ZW5kcyBTY3JlZW5FbGVtZW50IHtcclxuICB0aXRsZTogTGFiZWwgPSBuZXcgTGFiZWwoXCJGcmVlaG9sZCB2MC4wLjFcIiwgMjAsIDIwKVxyXG4gIGhlbHA6IExhYmVsID0gbmV3IExhYmVsKFwiYWN0aW9uczogKGMpdXQgdGltYmVyIC8gY3JlYXRlICh6KW9uZSAvIChkKWVsZXRlIHpvbmUgLyAoYil1aWxkIHdhbGxcIiwgMjAsIDMwKVxyXG4gIGN1cnJlbnRBY3Rpb246IExhYmVsID0gbmV3IExhYmVsKFwiLi4uXCIsIDIwLCA0MClcclxuICBvbkluaXRpYWxpemUoKSB7XHJcbiAgICB0aGlzLnRpdGxlLmNvbG9yID0gQ29sb3IuV2hpdGVcclxuICAgIHRoaXMudGl0bGUuYm9sZCA9IHRydWVcclxuICAgIHRoaXMuYWRkKHRoaXMudGl0bGUpXHJcbiAgICB0aGlzLmN1cnJlbnRBY3Rpb24uY29sb3IgPSBDb2xvci5XaGl0ZVxyXG4gICAgdGhpcy5hZGQodGhpcy5jdXJyZW50QWN0aW9uKVxyXG4gICAgdGhpcy5oZWxwLmNvbG9yID0gQ29sb3IuV2hpdGVcclxuICAgIHRoaXMuYWRkKHRoaXMuaGVscClcclxuICB9XHJcbn1cclxuXHJcbnR5cGUgQWN0aW9uID0gJ2N1dCcgfCAnYnVpbGQnIHwgJ2NyZWF0ZS16b25lJyB8ICdkZWxldGUtem9uZScgfCAnaW5zcGVjdCdcclxuZXhwb3J0IGNsYXNzIFBsYXkgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgZ2FtZTogR2FtZVxyXG4gIGN1cnNvcjogU2luZ2xlQ2VsbEJveFxyXG4gIGN1cnNvcldvcmxkUG9zOiBXb3JsZFBvc2l0aW9uID0gcG9zKC0xLC0xKVxyXG4gIGRyYWc/OiBEcmFnXHJcbiAgZHJhZ0VudmVsb3BlOiBBY3RvclxyXG4gIGN1cnJlbnRBY3Rpb246IEFjdGlvbiA9ICdjdXQnXHJcblxyXG4gIGh1ZDogSHVkO1xyXG4gIHJlZ2lvblZpZXc6IFpvbmVWaWV3XHJcblxyXG4gIGxhc3RNb3VzZUJ1dHRvbjogSW5wdXQuUG9pbnRlckJ1dHRvblxyXG5cclxuICBwYW5PcmlnaW46IFZlY3RvclxyXG4gIHBhbm5pbmc6IGJvb2xlYW5cclxuXHJcbiAgb25Jbml0aWFsaXplKGVuZ2luZTogRnJlZWhvbGRFbmdpbmUpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMuYmFja1xyXG4gICAgY29uc29sZS5sb2coXCJbUGxheS5vbkluaXRpYWxpemVdIEhlbGxvIHdvcmxkIVwiKVxyXG5cclxuICAgIGNvbnN0IHdvcmxkID0gbmV3IFdvcmxkKFdPUkxEX0RJTVMpXHJcbiAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSh3b3JsZClcclxuICAgIHRoaXMuZ2FtZS5zZXR1cCgpXHJcblxyXG4gICAgLy8gdGhpcy5hZGQodGhpcy5nYW1lLnRlcnJhaW4pXHJcbiAgICB0aGlzLmFkZCh0aGlzLmdhbWUudmVnZXRhdGlvbilcclxuICAgIHRoaXMuYWRkKHRoaXMuZ2FtZS5yYXdNYXRlcmlhbHMpXHJcbiAgICB0aGlzLmFkZCh0aGlzLmdhbWUucGxhbm5lZFN0cnVjdHVyZXMpXHJcbiAgICB0aGlzLmFkZCh0aGlzLmdhbWUuc2lnaWxzKVxyXG5cclxuICAgIHRoaXMucmVnaW9uVmlldyA9IG5ldyBab25lVmlldyh0aGlzLmdhbWUsIHRoaXMuY2FtZXJhKVxyXG4gICAgdGhpcy5hZGQodGhpcy5yZWdpb25WaWV3KVxyXG5cclxuICAgIHRoaXMuaHVkID0gbmV3IEh1ZCgpXHJcbiAgICB0aGlzLmFkZCh0aGlzLmh1ZClcclxuICAgIHRoaXMuc2V0QWN0aW9uKCdjdXQnKVxyXG5cclxuICAgIHRoaXMuY2FtZXJhLnBvcyA9XHJcbiAgICAgIG5ldyBWZWN0b3Iod29ybGQucGF3bnNbMF0ucG9zWzBdICogQ0VMTF9TSVpFLCB3b3JsZC5wYXduc1swXS5wb3NbMV0gKiBDRUxMX1NJWkUpO1xyXG4gICAgdGhpcy5jYW1lcmEuem9vbSgyKVxyXG5cclxuICAgIGNvbnN0IG1vdXNlID0gZW5naW5lLmlucHV0LnBvaW50ZXJzLnByaW1hcnlcclxuICAgIG1vdXNlLm9uKCdtb3ZlJywgKGUpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVDdXJzb3JQb3NpdGlvbihlLnBvcylcclxuICAgICAgaWYgKHRoaXMubGFzdE1vdXNlQnV0dG9uID09PSBJbnB1dC5Qb2ludGVyQnV0dG9uLk1pZGRsZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhbm5pbmcpIHtcclxuICAgICAgICAgIHRoaXMuY2FtZXJhLnBvcy5hZGRFcXVhbChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhbk9yaWdpbi5zdWIoIG1vdXNlLmxhc3RXb3JsZFBvcykgIC8vZS5wb3MpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY2FtZXJhLnZlbCA9IG5ldyBWZWN0b3IoMCwwKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBlbmZvcmNlTGluZXMgPSB0aGlzLmN1cnJlbnRBY3Rpb24gPT09ICdidWlsZCdcclxuICAgICAgICB0aGlzLmhhbmRsZUxlZnREcmFnKG1vdXNlLCBlbmZvcmNlTGluZXMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBtb3VzZS5vbigndXAnLCAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmxhc3RNb3VzZUJ1dHRvbiA9PSBJbnB1dC5Qb2ludGVyQnV0dG9uLkxlZnQpIHtcclxuICAgICAgICBjb25zdCBlbmZvcmNlTGluZXMgPSB0aGlzLmN1cnJlbnRBY3Rpb24gPT09ICdidWlsZCdcclxuICAgICAgICBjb25zdCB7IGlzRmluaXNoZWQgfSA9IHRoaXMuaGFuZGxlTGVmdERyYWcobW91c2UsIGVuZm9yY2VMaW5lcylcclxuICAgICAgICBpZihpc0ZpbmlzaGVkKSB7IHJldHVybiB0aGlzLmFwcGx5Q3VycmVudEFjdGlvblRvRHJhZ0FyZWEoKSB9XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5sYXN0TW91c2VCdXR0b24gPT09IElucHV0LlBvaW50ZXJCdXR0b24uTWlkZGxlKSB7XHJcbiAgICAgICAgdGhpcy5wYW5uaW5nID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIG1vdXNlLm9uKCdkb3duJywgKGUpID0+IHtcclxuICAgICAgdGhpcy5sYXN0TW91c2VCdXR0b24gPSBlLmJ1dHRvblxyXG4gICAgICBpZiAoZS5idXR0b24gPT0gSW5wdXQuUG9pbnRlckJ1dHRvbi5MZWZ0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEFjdGlvbiA9PT0gJ2RlbGV0ZS16b25lJykge1xyXG4gICAgICAgICAgdGhpcy5nYW1lLmRlbGV0ZVpvbmVBdCh0aGlzLmN1cnNvcldvcmxkUG9zKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBlbmZvcmNlTGluZXMgPSB0aGlzLmN1cnJlbnRBY3Rpb24gPT09ICdidWlsZCdcclxuICAgICAgICB0aGlzLmhhbmRsZUxlZnREcmFnKG1vdXNlLCBlbmZvcmNlTGluZXMpXHJcbiAgICAgIH0gZWxzZSBpZiAoZS5idXR0b24gPT0gSW5wdXQuUG9pbnRlckJ1dHRvbi5NaWRkbGUpIHtcclxuICAgICAgICB0aGlzLnBhbk9yaWdpbiA9IG1vdXNlLmxhc3RXb3JsZFBvc1xyXG4gICAgICAgIHRoaXMucGFubmluZyA9IHRydWVcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBtb3VzZS5vbignd2hlZWwnLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5kZWx0YVkgPiAwKSB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuem9vbShNYXRoLm1heCh0aGlzLmNhbWVyYS5nZXRab29tKCkgLSAwLjIsIDEpKVxyXG4gICAgICB9IGVsc2UgaWYgKGUuZGVsdGFZIDwgMCkge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnpvb20oTWF0aC5taW4odGhpcy5jYW1lcmEuZ2V0Wm9vbSgpICsgMC4yLCA0KSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLmN1cnNvciA9IG5ldyBTaW5nbGVDZWxsQm94KClcclxuICAgIHRoaXMuYWRkKHRoaXMuY3Vyc29yKVxyXG5cclxuICAgIHRoaXMuZHJhZ0VudmVsb3BlID0gbmV3IEFjdG9yKHsgY29sb3I6IENvbG9yLkdyYXksIG9wYWNpdHk6IDAuMywgYW5jaG9yOiBuZXcgVmVjdG9yKDAsIDApIH0pXHJcbiAgICB0aGlzLmFkZCh0aGlzLmRyYWdFbnZlbG9wZSlcclxuXHJcbiAgICB0aGlzLmdhbWUucGF3blRva2Vucy5mb3JFYWNoKHBhd25Ub2tlbiA9PiB0aGlzLmFkZChwYXduVG9rZW4pKVxyXG4gIH1cclxuXHJcbiAgc2V0QWN0aW9uKGFjdGlvbjogQWN0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLmh1ZC5jdXJyZW50QWN0aW9uLnRleHQgPSBcImN1cnJlbnQgYWN0aW9uIGlzOiBcIiArIGFjdGlvblxyXG4gICAgdGhpcy5jdXJyZW50QWN0aW9uID0gYWN0aW9uXHJcbiAgfVxyXG5cclxuICB1cGRhdGVDdXJzb3JQb3NpdGlvbihwb3NpdGlvbjogVmVjdG9yKTogdm9pZCB7XHJcbiAgICB0aGlzLmN1cnNvcldvcmxkUG9zID0gcG9zKFxyXG4gICAgICBNYXRoLmZsb29yKHBvc2l0aW9uLnggLyBDRUxMX1NJWkUpLCAvLyArIDEsXHJcbiAgICAgIE1hdGguZmxvb3IocG9zaXRpb24ueSAvIENFTExfU0laRSksIC8vICsgMSxcclxuICAgIClcclxuXHJcbiAgICB0aGlzLmN1cnNvci5wb3MgPSBuZXcgVmVjdG9yKFxyXG4gICAgICB0aGlzLmN1cnNvcldvcmxkUG9zWzBdICogQ0VMTF9TSVpFLFxyXG4gICAgICB0aGlzLmN1cnNvcldvcmxkUG9zWzFdICogQ0VMTF9TSVpFLFxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgb25QcmVVcGRhdGUoZW5naW5lOiBGcmVlaG9sZEVuZ2luZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZ2FtZSkgeyB0aGlzLmdhbWUudXBkYXRlKCkgfVxyXG5cclxuICAgIGNvbnN0IGtleXMgPSBlbmdpbmUuaW5wdXQua2V5Ym9hcmRcclxuICAgIGlmIChrZXlzLmlzSGVsZChJbnB1dC5LZXlzLkIpKSB7XHJcbiAgICAgIHRoaXMuc2V0QWN0aW9uKCdidWlsZCcpXHJcbiAgICB9IGVsc2UgaWYgKGtleXMuaXNIZWxkKElucHV0LktleXMuQykpIHtcclxuICAgICAgdGhpcy5zZXRBY3Rpb24oJ2N1dCcpXHJcbiAgICB9IGVsc2UgaWYgKGtleXMuaXNIZWxkKElucHV0LktleXMuWikpIHtcclxuICAgICAgdGhpcy5zZXRBY3Rpb24oJ2NyZWF0ZS16b25lJylcclxuICAgIH0gZWxzZSBpZiAoa2V5cy5pc0hlbGQoSW5wdXQuS2V5cy5EKSkge1xyXG4gICAgICB0aGlzLnNldEFjdGlvbignZGVsZXRlLXpvbmUnKVxyXG4gICAgfSBlbHNlIGlmIChrZXlzLmlzSGVsZChJbnB1dC5LZXlzLkVzYykpIHtcclxuICAgICAgdGhpcy5zZXRBY3Rpb24oJ2luc3BlY3QnKVxyXG4gICAgICB0aGlzLmRyYWcgPSBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcHBseUN1cnJlbnRBY3Rpb25Ub0RyYWdBcmVhKCk6IHZvaWQge1xyXG4gICAgICAgY29uc3QgW29yaWdpblgsIG9yaWdpblldID0gdGhpcy5kcmFnLm1pbmltYVxyXG4gICAgICBjb25zdCBbZGVzdFgsIGRlc3RZXSA9IHRoaXMuZHJhZy5tYXhpbWFcclxuICAgICAgIGlmICh0aGlzLmN1cnJlbnRBY3Rpb24gPT09ICdjdXQnKSB7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tPiBDdXQgdGltYmVyIGZyb20gXCIgKyBvcmlnaW5YICsgXCIsXCIgKyBvcmlnaW5ZICsgXCIgdG8gXCIgKyBkZXN0WCArIFwiLCBcIiArIGRlc3RZKVxyXG4gICAgICAgICBmb3IgKGxldCB4ID0gb3JpZ2luWDsgeCA8PSBkZXN0WDsgeCsrKSB7XHJcbiAgICAgICAgICAgZm9yIChsZXQgeSA9IG9yaWdpblk7IHkgPD0gZGVzdFk7IHkrKykge1xyXG4gICAgICAgICAgICAgdGhpcy5nYW1lLm1hcmtUcmVlKHBvcyh4LCB5KSlcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50QWN0aW9uID09PSAnY3JlYXRlLXpvbmUnKSB7XHJcbiAgICAgICAgIHRoaXMuZ2FtZS5kZWNsYXJlWm9uZShwb3Mob3JpZ2luWCwgb3JpZ2luWSksIHBvcyhkZXN0WCwgZGVzdFkpKVxyXG4gICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRBY3Rpb24gPT09ICdidWlsZCcpIHtcclxuICAgICAgICAgdGhpcy5nYW1lLnBsYW5XYWxsKHBvcyhvcmlnaW5YLCBvcmlnaW5ZKSwgcG9zKGRlc3RYLCBkZXN0WSkpXHJcbiAgICAgICB9XHJcbiBcclxuICAgIC8vICB9XHJcbiAgICAvL31cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlTGVmdERyYWcobW91c2U6IElucHV0LlBvaW50ZXIsIGVuZm9yY2VMaW5lczogYm9vbGVhbik6IHsgaXNGaW5pc2hlZDogYm9vbGVhbiB9IHtcclxuICAgIGxldCBpc0ZpbmlzaGVkID0gZmFsc2VcclxuICAgIGlmIChtb3VzZS5pc0RyYWdTdGFydCkge1xyXG4gICAgICB0aGlzLmRyYWcgPSBuZXcgRHJhZyh0aGlzLmN1cnNvcldvcmxkUG9zLCBlbmZvcmNlTGluZXMpXHJcbiAgICB9IGVsc2UgaWYgKG1vdXNlLmlzRHJhZ0VuZCkge1xyXG4gICAgICB0aGlzLmRyYWdFbnZlbG9wZS52aXNpYmxlID0gZmFsc2VcclxuICAgICAgaXNGaW5pc2hlZD0gdHJ1ZVxyXG4gICAgfSBlbHNlIGlmIChtb3VzZS5pc0RyYWdnaW5nKSB7XHJcbiAgICAgIHRoaXMuZHJhZy5jb250aW51ZSh0aGlzLmN1cnNvcldvcmxkUG9zKVxyXG4gICAgICBjb25zdCBbb3JpZ2luWCwgb3JpZ2luWV0gPSB0aGlzLmRyYWcubWluaW1hXHJcbiAgICAgICBjb25zdCBbZGVzdFgsIGRlc3RZXSA9IHRoaXMuZHJhZy5tYXhpbWFcclxuICAgICAgdGhpcy5kcmFnRW52ZWxvcGUucG9zID0gbmV3IFZlY3RvcihcclxuICAgICAgICAob3JpZ2luWCAqIENFTExfU0laRSksIC8vICsgMSxcclxuICAgICAgICAob3JpZ2luWSAqIENFTExfU0laRSksIC8vICsgMSxcclxuICAgICAgKVxyXG4gICAgICB0aGlzLmRyYWdFbnZlbG9wZS53aWR0aCA9IChkZXN0WCAtIG9yaWdpblggKyAxKSAqIENFTExfU0laRVxyXG4gICAgICB0aGlzLmRyYWdFbnZlbG9wZS5oZWlnaHQgPSAoZGVzdFkgLSBvcmlnaW5ZICsgMSkgKiBDRUxMX1NJWkVcclxuICAgICAgdGhpcy5kcmFnRW52ZWxvcGUudmlzaWJsZSA9IHRydWVcclxuICAgIH1cclxuICAgIC8vIH1cclxuICAgICAgcmV0dXJuIHsgaXNGaW5pc2hlZH1cclxuICB9XHJcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzICovXHJcblxyXG5pbXBvcnQgeyBUZXh0dXJlLCBTcHJpdGVTaGVldCB9IGZyb20gXCJleGNhbGlidXJcIlxyXG5pbXBvcnQgeyBDRUxMX1NJWkUgfSBmcm9tIFwiLi9jb25zdGFudHNcIlxyXG5cclxuY29uc3QgdGVycmFpbiA9IHJlcXVpcmUoJy4vaW1hZ2VzL3RlcnJhaW4ucG5nJylcclxuY29uc3QgdHJlZXMgPSByZXF1aXJlKCcuL2ltYWdlcy90cmVlcy5wbmcnKVxyXG5jb25zdCBpY29ucyA9IHJlcXVpcmUoJy4vaW1hZ2VzL2ljb25zLnBuZycpXHJcbmNvbnN0IG1hdHRlciA9IHJlcXVpcmUoJy4vaW1hZ2VzL21hdHRlci5wbmcnKVxyXG5jb25zdCBzdHJ1Y3R1cmUgPSByZXF1aXJlKCcuL2ltYWdlcy9zdHJ1Y3R1cmUucG5nJylcclxuY29uc3Qgc3RydWN0dXJlVHJhbnNwYXJlbnQgPSByZXF1aXJlKCcuL2ltYWdlcy9zdHJ1Y3R1cmUtdHJhbnNwYXJlbnQucG5nJylcclxuXHJcbmNvbnN0IFJlc291cmNlcyA9IHtcclxuICBUZXJyYWluOiBuZXcgVGV4dHVyZSh0ZXJyYWluKSxcclxuICBUcmVlczogbmV3IFRleHR1cmUodHJlZXMpLFxyXG4gIE1hdHRlcjogbmV3IFRleHR1cmUobWF0dGVyKSxcclxuICBJY29uczogbmV3IFRleHR1cmUoaWNvbnMpLFxyXG4gIFN0cnVjdHVyZTogbmV3IFRleHR1cmUoc3RydWN0dXJlKSxcclxuICBTdHJ1Y3R1cmVUcmFuc3BhcmVudDogbmV3IFRleHR1cmUoc3RydWN0dXJlVHJhbnNwYXJlbnQpLFxyXG59XHJcblxyXG5jb25zdCBzeiA9IENFTExfU0laRVxyXG5jb25zdCBTcHJpdGVTaGVldHMgPSB7XHJcbiAgVGVycmFpbjogbmV3IFNwcml0ZVNoZWV0KFJlc291cmNlcy5UZXJyYWluLCA0LCA0LCBzeiwgc3opLFxyXG4gIFRyZWVzOiBuZXcgU3ByaXRlU2hlZXQoUmVzb3VyY2VzLlRyZWVzLCA0LCA0LCBzeiwgc3opLFxyXG4gIE1hdHRlcjogbmV3IFNwcml0ZVNoZWV0KFJlc291cmNlcy5NYXR0ZXIsIDQsIDQsIHN6LCBzeiksXHJcbiAgSWNvbnM6IG5ldyBTcHJpdGVTaGVldChSZXNvdXJjZXMuSWNvbnMsIDQsIDQsIHN6LCBzeiksXHJcbiAgU3RydWN0dXJlOiBuZXcgU3ByaXRlU2hlZXQoUmVzb3VyY2VzLlN0cnVjdHVyZSwgNCwgNCwgc3osIHN6KSxcclxuICBTdHJ1Y3R1cmVUcmFuc3BhcmVudDogbmV3IFNwcml0ZVNoZWV0KFJlc291cmNlcy5TdHJ1Y3R1cmVUcmFuc3BhcmVudCwgNCwgNCwgc3osIHN6KSxcclxufVxyXG5cclxuZXhwb3J0IHsgUmVzb3VyY2VzLCBTcHJpdGVTaGVldHMgfSIsImltcG9ydCB7IEFjdG9yLCBDb2xvciwgVmVjdG9yIH0gZnJvbSBcImV4Y2FsaWJ1clwiO1xyXG5pbXBvcnQgeyBDRUxMX1NJWkUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IFBhd24sIFdvcmxkUG9zaXRpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgcGljayB9IGZyb20gXCIuLi91dGlsL3BpY2tcIjtcclxuaW1wb3J0IHsgU2hhcGVzIH0gZnJvbSBcIi4uL2NhbnZhcy9TaGFwZXNcIjtcclxuaW1wb3J0IHsgSUFjdGl2aXR5IH0gZnJvbSBcIi4uL21vZGVscy9JQWN0aXZpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXduVG9rZW4gZXh0ZW5kcyBBY3RvciB7XHJcbiAgcHJpb3JpdHkoYTogSUFjdGl2aXR5KSB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXduLnByaW9yaXRpZXMuaW5kZXhPZihhLnRpdGxlKVxyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgfVxyXG4gIG1vdmluZyA9IGZhbHNlO1xyXG4gIGludGVyYWN0aW5nID0gZmFsc2U7XHJcbiAgcGF0aDogV29ybGRQb3NpdGlvbltdID0gW11cclxuICBzdGF0aWMgc3BlZWQgPSAxMjhcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHBhd246IFBhd24pIHtcclxuICAgIHN1cGVyKHtcclxuICAgICAgd2lkdGg6IENFTExfU0laRSxcclxuICAgICAgaGVpZ2h0OiBDRUxMX1NJWkUsXHJcbiAgICAgIGNvbG9yOiBwaWNrKENvbG9yLkJsdWUsIENvbG9yLlJlZCwgQ29sb3IuR3JlZW4sIENvbG9yLlllbGxvdywgQ29sb3IuQ2hhcnRyZXVzZSwgQ29sb3IuTWFnZW50YSksXHJcbiAgICAgIC8vIG9wYWNpdHk6IDAuNSxcclxuICAgICAgYW5jaG9yOiBuZXcgVmVjdG9yKDAuNSwgMC41KSxcclxuICAgICAgcG9zOiBuZXcgVmVjdG9yKHBhd24ucG9zWzBdICogQ0VMTF9TSVpFLCBwYXduLnBvc1sxXSAqIENFTExfU0laRSksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNraW4gPSBDb2xvci5PcmFuZ2UuY2xvbmUoKS5saWdodGVuKDAuNSlcclxuICBnZXQgc2hpcnQoKTogQ29sb3IgeyByZXR1cm4gdGhpcy5jb2xvci5jbG9uZSgpLmRhcmtlbigwLjUpIH1cclxuICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XHJcbiAgICBsZXQge3gsIHl9ID0gdGhpcy5wb3M7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmJ1xyXG5cclxuICAgIGNvbnN0IHRleHRMZW5ndGggPWN0eC5tZWFzdXJlVGV4dCh0aGlzLnBhd24ubmFtZSkud2lkdGhcclxuICAgIGN0eC5maWxsVGV4dCh0aGlzLnBhd24ubmFtZSwgeCAtIHRleHRMZW5ndGgvMiArIENFTExfU0laRS8yLCB5IC0gOClcclxuXHJcbiAgICB4ICs9IENFTExfU0laRS8yXHJcbiAgICB5ICs9IENFTExfU0laRS8yXHJcbiAgICBTaGFwZXMuZWxsaXBzZShjdHgsXHJcbiAgICAgIHgsIHksIC8vICsgQ0VMTF9TSVpFLzQsXHJcbiAgICAgIDIqQ0VMTF9TSVpFLzgsIDIqQ0VMTF9TSVpFLzUsXHJcbiAgICAgIHRoaXMuc2hpcnQpXHJcblxyXG4gICAgU2hhcGVzLmVsbGlwc2UoY3R4LFxyXG4gICAgICB4LCB5IC0gQ0VMTF9TSVpFLzIsXHJcbiAgICAgIENFTExfU0laRS81LCBDRUxMX1NJWkUvNSxcclxuICAgICAgdGhpcy5za2luKVxyXG4gIH1cclxufSIsImltcG9ydCB7IFZlY3RvciwgQWN0b3IsIENvbG9yIH0gZnJvbSBcImV4Y2FsaWJ1clwiO1xyXG5pbXBvcnQgeyBDRUxMX1NJWkUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmV4cG9ydCBjbGFzcyBTaW5nbGVDZWxsQm94IGV4dGVuZHMgQWN0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICBjb2xvcjogQ29sb3IuR3JheSxcclxuICAgICAgd2lkdGg6IENFTExfU0laRSxcclxuICAgICAgaGVpZ2h0OiBDRUxMX1NJWkUsXHJcbiAgICAgIGFuY2hvcjogbmV3IFZlY3RvcigwLCAwKSxcclxuICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZlY3RvciwgQWN0b3IsIENhbWVyYSwgQ29sb3IsIFRyYWl0cyB9IGZyb20gXCJleGNhbGlidXJcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuLi9tb2RlbHMvR2FtZVwiO1xyXG5pbXBvcnQgeyBDRUxMX1NJWkUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHBvcyB9IGZyb20gXCIuLi9tb2RlbHMvV29ybGRQb3NpdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgWm9uZVZpZXcgZXh0ZW5kcyBBY3RvciB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnYW1lOiBHYW1lLCBwcml2YXRlIGNhbWVyYTogQ2FtZXJhKSB7XHJcbiAgICBzdXBlcih7IHBvczogbmV3IFZlY3RvcigwLCAwKSB9KTtcclxuICAgIHRoaXMudHJhaXRzID0gdGhpcy50cmFpdHMuZmlsdGVyKHRyYWl0ID0+ICEodHJhaXQgaW5zdGFuY2VvZiBUcmFpdHMuT2Zmc2NyZWVuQ3VsbGluZykpXHJcbiAgfVxyXG5cclxuICBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XHJcbiAgICB0aGlzLmdhbWUuem9uZXMuZm9yRWFjaCh6b25lID0+IHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJEcmF3IHpvbmUgXCIgKyB6b25lKVxyXG4gICAgICBjb25zdCBbeDAsIHkwXSA9IHpvbmUudG9wTGVmdDtcclxuICAgICAgY29uc3QgW3gxLCB5MV0gPSB6b25lLmJvdHRvbVJpZ2h0O1xyXG5cclxuICAgICAgdGhpcy5ncmlkQWxpZ25lZFJlY3QoY3R4LCB4MCwgeTAsIHgxLCB5MSwgem9uZS5jb2xvcilcclxuXHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZidcclxuICAgICAgLy8gY3R4LlxyXG4gICAgICBmb3IgKGxldCB4PXgwOyB4PD14MTsgeCsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeT15MDsgeTw9eTE7IHkrKykge1xyXG4gICAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLmdhbWUucmF3TWF0ZXJpYWxDb3VudEF0TG9jYXRpb24ocG9zKHgseSkpXHJcbiAgICAgICAgICBjdHguZmlsbFRleHQoXCJ4XCIgKyBjb3VudCwgeCpDRUxMX1NJWkUgKyBDRUxMX1NJWkUvMiwgeSpDRUxMX1NJWkUgKyBDRUxMX1NJWkUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ3JpZEFsaWduZWRSZWN0KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4MDogbnVtYmVyLCB5MDogbnVtYmVyLCB4MTogbnVtYmVyLCB5MTogbnVtYmVyLCBjb2xvcjogQ29sb3IpIHtcclxuXHJcbiAgICAgIGNvbnN0IHggPSB4MCAqIENFTExfU0laRTsgLy8rIHRoaXMuY2FtZXJhLnhcclxuICAgICAgY29uc3QgeSA9IHkwICogQ0VMTF9TSVpFOyAvLysgdGhpcy5jYW1lcmEueVxyXG4gICAgICBjb25zdCB3ID0gKHgxIC0geDAgKyAxKSAqIENFTExfU0laRTtcclxuICAgICAgY29uc3QgaCA9ICh5MSAtIHkwICsgMSkgKiBDRUxMX1NJWkU7XHJcblxyXG4gICAgICBjdHguZmlsbFN0eWxlID0gY29sb3IudG9SR0JBKCk7XHJcbiAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiZXhjYWxpYnVyXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBTaGFwZXMge1xyXG4gIHN0YXRpYyBlbGxpcHNlKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzWDogbnVtYmVyLCByYWRpdXNZOiBudW1iZXIsIGNvbG9yOiBDb2xvcik6IHZvaWQge1xyXG4gICAgY3R4LmJlZ2luUGF0aCgpXHJcbiAgICBjdHguZWxsaXBzZSh4LCB5LCByYWRpdXNYLCByYWRpdXNZLDAsMCwyKk1hdGguUEkpXHJcbiAgICBjdHguY2xvc2VQYXRoKClcclxuXHJcbiAgICAvLyBjb25zdCBvbGRTdHlsZSA9IGN0eC5maWxsU3R5bGVcclxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvci50b1JHQkEoKVxyXG4gICAgY3R4LmZpbGwoKVxyXG4gICAgLy8gY3R4LmZpbGxTdHlsZSA9IG9sZFN0eWxlXHJcbiAgfVxyXG5cclxufSIsImltcG9ydCB7IERpbWVuc2lvbnMsIExhbmd1YWdlIH0gZnJvbSBcIi4vdHlwZXNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IENFTExfU0laRSA9IDE2XHJcblxyXG5leHBvcnQgY29uc3QgTEFORF9JTUFHRVMgID0gWzAsMSwyLDNdXHJcbmV4cG9ydCBjb25zdCBXQVRFUl9JTUFHRVMgPSBbNCw1LDYsN11cclxuXHJcbmV4cG9ydCBjb25zdCBUUkVFX0lNQUdFUyA9IFswLDFdXHJcblxyXG5leHBvcnQgY29uc3QgV09PRF9TVEFDS19JTUFHRVMgPSBbMF1cclxuZXhwb3J0IGNvbnN0IFdPT0RfUElFQ0VfSU1BR0VTID0gWzRdXHJcbi8vIGV4cG9ydCBjb25zdCBJUk9OX1NUQUNLX0lNQUdFUyA9IFsxXVxyXG4vLyBleHBvcnQgY29uc3QgSVJPTl9QSUVDRSA9IFs1XVxyXG5cclxuZXhwb3J0IGNvbnN0IE1BVEVSSUFMX0lNQUdFUyA9IHtcclxuICAnd29vZCc6IFdPT0RfUElFQ0VfSU1BR0VTLFxyXG59XHJcbmV4cG9ydCBjb25zdCBNQVRFUklBTF9TVEFDS19JTUFHRVMgPSB7XHJcbiAgJ3dvb2QnOiBXT09EX1NUQUNLX0lNQUdFUyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFdBTExfTUFTSyA9IFtcclxuICAgICAvLyB3c2VuXHJcbiAgMCwgLy8gMDAwMCAtLSBubyBjb25uZWN0aW9uc1xyXG4gIDksIC8vIDAwMDEgLS0gY29ubmVjdGVkIG5vcnRoXHJcbiAgNCwgLy8gMDAxMCAtLSBjb25uZWN0ZWQgZWFzdFxyXG4gIDE0LC8vIDAwMTEgLS0gY29ubmVjdGVkIG5vcnRoICsgZWFzdFxyXG4gIDEsIC8vIDAxMDAgLS0gY29ubmVjdGVkIHNvdXRoXHJcbiAgOCwgLy8gMDEwMSAtLSBjb25uZWN0ZWQgbm9ydGgtc291dGhcclxuICAxMCwgLy8gMDExMCAtLSBjb25uZWN0ZWQgc291dGggKyBlYXN0XHJcbiAgNywgLy8gMDExMSAtLSBjb25uZWN0ZWQgbm9ydGgtc291dGggKyBlYXN0XHJcbiAgNiwgLy8gMTAwMCAtLSBjb25uZWN0ZWQgd2VzdFxyXG4gIDE1LCAvLyAxMDAxIC0tIGNvbm5lY3RlZCB3ZXN0ICsgbm9ydGhcclxuICAxMiwgLy8gMTAxMCAtLSBjb25uZWN0ZWQgZWFzdC13ZXN0XHJcbiAgMiwgIC8vIDEwMTEgLS0gY29ubmVjdGVkIGVhc3Qtd2VzdCArIG5vcnRoXHJcbiAgMTEsIC8vIDExMDAgLS0gY29ubmVjdGVkIHdlc3QgKyBzb3V0aFxyXG4gIDMsIC8vIDExMDEgLS0gY29ubmVjdGVkIHdlc3QgKyBub3J0aC1zb3V0aFxyXG4gIDEzLCAgLy8gMTExMCAtLSBjb25uZWN0ZWQgZWFzdC13ZXN0ICsgc291dGhcclxuICA1ICAvLyAxMTExIC0tIGFsbCBjb25uZWN0ZWRcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IFNJR0lMX0FYRSA9IDFcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5leHBvcnQgY29uc3QgSU5WRU5UT1JZX0xJTUlUID0gNlxyXG5leHBvcnQgY29uc3QgU1RBQ0tfTUFYID0gOTBcclxuXHJcbmV4cG9ydCBjb25zdCBUUkVFX0NVVF9EVVJBVElPTiA9IDI1MFxyXG5cclxuZXhwb3J0IGNvbnN0IElOSVRJQUxfUEFXTl9DT1VOVCA9IDIwXHJcbmV4cG9ydCBjb25zdCBXT1JMRF9ESU1TID0gWzIwMCwyMDBdIGFzIERpbWVuc2lvbnNcclxuZXhwb3J0IGNvbnN0IFRSRUVfQ09WRVJfUkFUSU8gPSAwLjM1XHJcblxyXG5leHBvcnQgY29uc3QgUEFUSEZJTkRJTkdfVElNRU9VVCA9IDUwMFxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuZXhwb3J0IGNvbnN0IERXQVJWRU5fTEFOR1VBR0U6IExhbmd1YWdlID0ge1xyXG4gIG5hbWU6ICdEd2FydmlzaCcsXHJcbiAgLy8gcHJlZml4ZXM6IFsnQXInLF0sXHJcbiAgc3RlbXM6IFtcclxuICAgICdBemFnaCcsXHJcbiAgICAnQmFsJywgJ0JpZicsICdCb2YnLCAnQm9tYicsICdCb3JuJyxcclxuICAgICdEJywgJ0RvcicsICdEdXInLCdEd2FsJyxcclxuICAgICdGcicsICdGYXInLCAnRnVuZCcsICdGcmVyJywgJ0ZsJywgJ0ZpbCcsXHJcbiAgICAnR2ltbCcsICdHYW0nLCAnR3InLCAnR2wnLCAnR3dhaWgnLFxyXG4gICAgJ0liJyxcclxuICAgICdLaWwnLCAnS2gnLFxyXG4gICAgJ0xvbicsICdMYW5kcm92JyxcclxuICAgICdNJywgJ01lbmVsZCcsXHJcbiAgICAnTicsICdOYScsICdOb3InLCAnTmFydicsXHJcbiAgICAnTycsXHJcbiAgICAnVGVsY2gnLCAnVGhvcicsICdUaHInLCAnVGgnXHJcbiAgXSxcclxuICBzdWZmaXhlczogWydpbicsICdpcycsICdpJywgJ3VuJywgJ2ltJywgJ29yJywgJ2VyaW4nLCAnYXInLCAnYWluJywgJ2FsJ10sXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBFTFZFTl9MQU5HVUFHRTogTGFuZ3VhZ2UgPSB7XHJcbi8vICAgbmFtZTogJ0VsdmlzaCcsXHJcbi8vICAgc3RlbXNcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IE5BTUVfSU5JVElBTF9TWUxMQUJMRVMgPSBbXHJcbi8vICAgXCJBZHJhaFwiLCBcIkFtYW5kXCIsIFwiQXJhdGhcIiwgXCJBcmdlbFwiLCBcIkF0YW5hdFwiLCBcIkFydmVsXCIsIFwiQXJhZ1wiLCBcIkFkZWxcIiwgXCJBbGF0XCIsIFwiQWxjYXJcIiwgXCJBbGRhclwiLCBcIkFsZ1wiLCBcIkFtZXRoXCIsXHJcbi8vICAgICBcIkFtYXJcIiwgXCJBbWRcIiwgXCJBbWFyXCIsIFwiQWxmXCIsIFwiQWVyXCIsIFwiQnJlZ1wiLFxyXG4vLyAgIFwiQlwiLCBcIkJlbFwiLCBcIkJlbGVjdGhcIiwgXCJCb3JvbVwiLCBcIkJsYW5jXCIsIFwiQmVsZXBoXCIsIFwiQnJlZ1wiLCBcIkJyaWZmXCIsIFwiQnJ5dHRcIiwgXCJCdWNjXCIsIFwiQnVuZ1wiLFxyXG4vLyAgIFwiQ2FsbVwiLCBcIkNhc3RhbVwiLCBcIkNlbGViXCIsIFwiQ2VsYW5kXCIsIFwiQ2FsaW1laHRcIiwgXCJDYXJhbnRoXCIsIFwiQ2VsZWdcIiwgXCJDZWxlcGhcIixcclxuLy8gICBcIkRhXCIsIFwiRGlcIiwgXCJEYWlzXCIsIFwiRHVyXCIsIFwiRGVuZXRoXCIsIFwiRG9yXCIsIFwiRHVkXCIsXHJcbi8vICAgXCJFYXJlblwiLCBcIkVjdGhlbFwiLCBcIkVnYWxtXCIsIFwiRWxkYWNcIiwgXCJFZHJhaFwiLCBcIkVhcndcIiwgXCJFbGdhbnRcIiwgXCJFbGFuXCIsIFwiRWxhdFwiLCBcIkVyZW5kXCIsXHJcbi8vICAgXCJGYXN0clwiLCBcIkZhclwiLCBcIkZpbGliXCIsIFwiRmVhblwiLFxyXG4vLyAgIFwiR2xvXCIsIFwiR2lsZFwiLCBcIkdlbG1cIiwgXCJHYWxkXCIsIFwiR2xvcmZpbmRcIiwgXCJHb3RobVwiLCBcIkdyaWZmXCIsIFwiR3JpbVwiLCBcIkdyaW1iXCIsIFwiR3JpdGhuXCIsIFwiR3JcIixcclxuLy8gICBcIkhcIiwgXCJIYW1cIiwgXCJIdXJcIiwgXCJIdWdcIiwgXCJIYWxmclwiLCBcIkhhbGRcIiwgXCJIYXJkXCIsIFwiSG9sbVwiLCBcIkhpbGRcIiwgXCJIaXJcIiwgXCJIZXJpYlwiLCBcIkhpcmdcIiwgXCJIaXJsXCIsIFwiSG9ic1wiLCBcIkhvbGZcIixcclxuLy8gICBcIklcIiwgXCJJcmltXCIsIFwiSXNlbmdyXCIsIFwiSXN1bWJyXCIsIFwiSXNpbG1cIiwgXCJJdm9yd1wiLCBcIkl2XCIsXHJcbi8vICAgXCJKYWdcIiwgXCJKZXNzYW1cIixcclxuLy8gICBcIktoYW1cIiwgXCJLaFwiLCBcIktpbFwiLFxyXG4vLyAgIFwiTFwiLCBcIkxpbFwiLCBcIkxhZ1wiLCBcIkxhbFwiLCBcIkxhbmRyb3ZcIiwgXCJMYXJnXCIsIFwiTGF1clwiLCBcIkxhdmVuZFwiLCBcIkxlbndcIiwgXCJMZVwiLCBcIkxvcmdcIiwgXCJMb3RoXCIsIFwiTHV0aFwiLFxyXG4vLyAgIFwiTWFkXCIsIFwiTWFlZGhyXCIsIFwiTWFnbFwiLCBcIk1hbFwiLCBcIk1haHRcIiwgXCJNYWlyXCIsIFwiTWFsYW5cIiwgXCJNYWx2XCIsIFwiTWFybWFkXCIsIFwiTWVsXCIsIFwiTWluYXNcIixcclxuLy8gICAgIFwiTWFibFwiLCBcIk1vclwiLCBcIk1pclwiLCBcclxuLy8gICBcIk5haFwiLCBcIk5hbFwiLCBcIk5hcnZcIiwgXCJOYXJcIixcclxuLy8gICBcIk9yZ3VsXCIsIFwiT3JcIiwgXCJPcm9waFwiLCBcIk9zc1wiLCBcclxuLy8gICBcIlBhbGFudFwiLCBcIlBhbGxhbmRcIiwgXCJQYW5zXCIsIFwiUGVsZW5kXCIsIFwiUGVuZ29sXCIsIFwiUGVyZWdyXCIsIFwiUHJpbXJcIixcclxuLy8gICBcIlJcIiwgXCJSdW1cIiwgXCJSZWdpblwiLCBcIlJvc1wiLCBcIlJvd1wiLCBcIlJ1ZlwiLFxyXG4vLyAgIFwiU1wiLCBcIlNhZFwiLCBcIlNhZXJcIiwgXCJTYWthbHRoXCIsIFwiU25hZ1wiLCBcIlNhdXJcIiwgXCJTdXJcIiwgXCJTb3JvbnRcIixcclxuLy8gICBcIlRcIiwgXCJUaG9yXCIsIFwiVHVyXCIsIFwiVGFyb25kXCIsIFwiVGhhclwiLCBcIlR1cmdcIiwgIFwiVGFudFwiLCBcIlR1bGtcIiwgXCJUdXJhbWJcIixcclxuLy8gICBcIlVmZlwiLCBcIlVnbFwiLCBcIlVmdGhcIiwgXCJVbHJcIiwgXCJVbHdcIixcclxuLy8gICBcIlZhbGFuZFwiLCBcIlZvcm9ud1wiLCBcIlZhblwiLCBcIlZhbmltZWxkXCIsXHJcbi8vICAgXCJXaWxpYlwiLCBcIldpbGNvbVwiLFxyXG4vLyAgIFwiWWF2XCIsXHJcbi8vICAgXCJaYW1cIiwgXCJaaXJcIiwgXCJaaW1yYWhcIiwgXCJaaW1yYXRoXCJcclxuLy8gICAvLyBcIkJlb1wiLCBcIkdyb25cIiwgXCJTYW1cIiwgXCJUaW1cIixcclxuLy8gICAvLyBcIkdpbVwiLCBcIkdsb1wiLCBcIkVsXCIsIFwiRmlcIiwgXCJGYXN0XCIsXHJcbi8vICAgLy8gXCJGZWFcIiwgXCJGYXJhXCIsIFwiQmFyYVwiLCBcIkJvcm9cIiwgXCJIdXJcIixcclxuLy8gICAvLyBcIlR1clwiLCBcIklzaWxkXCIsIFwiQmlsYlwiLCBcIkVhcmVuXCIsIFwiQmVyZVwiLFxyXG4vLyAgIC8vIFwiRGlcIiwgXCJCZWxlXCIsIFwiQ2FsbWFjXCIsIFwiRGFcIiwgXCJBcnZlbFwiLCBcIkZhc3RyXCIsXHJcbi8vIF1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBOQU1FX0ZJTkFMX1NZTExBQkxFUyA9IFtcclxuLy8gICBcImFkXCIsIFwiYW1cIiwgXCJhc1wiLCBcImFzdFwiLCBcImFyZFwiLCBcImFuXCIsIFwiYW50aFwiLCBcImFyXCIsIFwiYXJuXCIsIFwiYWNpbFwiLCBcImFkb2NcIiwgXCJha2hcIiwgXCJhbGRcIiwgXCJhbmRcIiwgXCJhbFwiLCBcImFjaFwiLCBcImFydGhcIixcclxuLy8gICBcImVcIiwgXCJlZ1wiLCBcImVkXCIsIFwiZW5cIiwgXCJlcnRcIixcclxuLy8gICBcImlcIiwgXCJpbVwiLCBcImluXCIsIFwiaXJcIiwgXCJpbFwiLCBcImljaFwiLCBcImlvblwiLCBcImllbFwiLCBcImlhblwiLCBcImllXCIsIFwiaWRhXCIsIFwiaWFuXCIsIFwiaW5lXCIsIFwiaW1ib3JcIiwgXCJpbmRvclwiLCBcImlseVwiLFxyXG4vLyAgIFwib1wiLCBcIm9tXCIsIFwib25cIiwgXCJvclwiLCBcIm9yblwiLCBcIm90aFwiLCBcIm9iXCIsIFwib2dcIiwgXCJvc2VcIiwgXCJvbGFzXCIsIFwib3JtXCIsIFwib2RoXCIsXHJcbi8vICAgXCJ1clwiLCBcInVuZ1wiLCBcInVuZFwiLCBcInVsYXNcIiwgXCJ1aW5cIiwgXCJ1c1wiLFxyXG4vLyAgIFwieVwiLCBcInlzdFwiLFxyXG4vLyAgIC8vXCJuXCIsIFwibGlcIiwgXCJ3ZWxsXCIsIFwid2lzZVwiLCBcInN5XCIsIFwia2luXCIsXHJcbi8vICAgLy9cInNvblwiLCBcIm5vclwiLCBcImljaFwiLCBcInd1bGZcIiwgXCJpblwiLCBcImltXCIsXHJcbi8vICAgLy9cImR1clwiLCBcImdyaW1cIiwgXCJoaWxcIiwgXCJkaWxcIiwgXCJyZWRcIiwgXCJib1wiLFxyXG4vLyAgIC8vXCJtaXJcIiwgXCJpbFwiLCBcIm9yXCIsIFwidXJcIlxyXG4vLyBdIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMmQ4NTQ4YTA4YzU3ODM1YjIwMTk5MTYzNGY0OGNhMmMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYmUxNGFkODYzZjc2ZjYwZDc2NzUzY2M1NWU5Mjk3ZGIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjcxODFiMjdlNGI3ODBiMjViMDkzODg1ZDM1NWE2YjgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNjVkZDc1ZDQ3Nzc1MDA0Y2FkN2NjNDc0M2MxODdhOWMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzAyNTVkOWQ2MmQ4OWM1ZjhlYzYwMjllNGNjNjQ1ZWQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjM1NTY4OTI0ODc5ZWJiZWE5Mzk4MTg5OTM1M2I2MjkucG5nXCI7IiwiaW1wb3J0IHsgV29ybGRQb3NpdGlvbiwgRGltZW5zaW9ucywgVmVnZXRhdGlvbiwgU2lnaWwsIE1hdGVyaWFsLCBTdHJ1Y3R1cmUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gXCIuL0dyaWRcIjtcclxuaW1wb3J0IHsgcG9zLCBieURpc3RhbmNlRnJvbSB9IGZyb20gXCIuL1dvcmxkUG9zaXRpb25cIjtcclxuaW1wb3J0IHsgcGljayB9IGZyb20gXCIuLi91dGlsL3BpY2tcIjtcclxuaW1wb3J0IHsgU2ltcGxlR3JpZCB9IGZyb20gXCIuL1NpbXBsZUdyaWRcIjtcclxuaW1wb3J0IHsgdGFrZSB9IGZyb20gXCIuLi91dGlsL3Rha2VcIjtcclxuaW1wb3J0IHsgVFJFRV9DT1ZFUl9SQVRJTyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbi8vIHR5cGUgTWF0dGVyID0geyBraW5kOiBNYXRlcmlhbCwgYW1vdW50OiBudW1iZXIgfVxyXG5leHBvcnQgY2xhc3MgQ2FydG9ncmFtIHtcclxuICAvLyB0ZXJyYWluOiBHcmlkPFRlcnJhaW4+XHJcbiAgdmVnZXRhdGlvbjogR3JpZDxWZWdldGF0aW9uPlxyXG5cclxuICByYXdNYXRlcmlhbDogR3JpZDxNYXRlcmlhbD5cclxuICByYXdNYXRlcmlhbENvdW50OiBTaW1wbGVHcmlkPG51bWJlcj5cclxuXHJcbiAgcGxhbm5lZFN0cnVjdHVyZTogR3JpZDxTdHJ1Y3R1cmU+XHJcbiAgcGxhbm5lZFN0cnVjdHVyZU1hdGVyaWFsOiBHcmlkPE1hdGVyaWFsPlxyXG4gIFxyXG4gIHNpZ2lsczogR3JpZDxTaWdpbD5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaW1zOiBEaW1lbnNpb25zKSB7XHJcbiAgICAvLyB0aGlzLnRlcnJhaW4gPSBuZXcgR3JpZDxUZXJyYWluPihkaW1zLCBbJ2xhbmQnLCAnd2F0ZXInXSlcclxuICAgIHRoaXMudmVnZXRhdGlvbiA9IG5ldyBHcmlkPFZlZ2V0YXRpb24+KGRpbXMsIFsnZ3Jhc3MnLCAnZmxvd2VyJywgJ3RyZWUnXSlcclxuXHJcbiAgICB0aGlzLnJhd01hdGVyaWFsID0gbmV3IEdyaWQ8TWF0ZXJpYWw+KGRpbXMsIFsnd29vZCcgXSlcclxuICAgIHRoaXMucmF3TWF0ZXJpYWxDb3VudCA9IG5ldyBTaW1wbGVHcmlkPG51bWJlcj4oMClcclxuXHJcbiAgICB0aGlzLnBsYW5uZWRTdHJ1Y3R1cmUgPSBuZXcgR3JpZDxTdHJ1Y3R1cmU+KGRpbXMsIFxyXG4gICAgICBbICd3YWxsJyBdXHJcbiAgICApXHJcblxyXG4gICAgdGhpcy5wbGFubmVkU3RydWN0dXJlTWF0ZXJpYWwgPSBuZXcgR3JpZDxNYXRlcmlhbD4oZGltcywgWyd3b29kJ10pXHJcblxyXG4gICAgdGhpcy5zaWdpbHMgPSBuZXcgR3JpZDxTaWdpbD4oZGltcywgWydheGUnXSlcclxuXHJcbiAgICAvLyB0aGlzLnRlcnJhaW4uZmlsbCgnbGFuZCcpXHJcbiAgICAvLyB0aGlzLnZlZ2V0YXRpb24uZmlsbCgnbm90aGluZycpXHJcbiAgICB0aGlzLnZlZ2V0YXRpb24uZGlzdHJpYnV0ZVJhbmRvbWx5KCd0cmVlJywgVFJFRV9DT1ZFUl9SQVRJTylcclxuICAgIC8vIHRoaXMucmF3TWF0ZXJpYWwuZmlsbCgnbm90aGluZycpXHJcbiAgICAvLyB0aGlzLnNpZ2lscy5maWxsKCdub3RoaW5nJylcclxuICB9XHJcblxyXG4gIGdldCB3aWR0aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5kaW1zWzBdIH1cclxuICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7IHJldHVybiB0aGlzLmRpbXNbMV0gfVxyXG5cclxuICBnZXQgY2VudGVyKCk6IFdvcmxkUG9zaXRpb24ge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgdGhpcy5kaW1zWzBdIC8gMixcclxuICAgICAgdGhpcy5kaW1zWzFdIC8gMlxyXG4gICAgXSBhcyBXb3JsZFBvc2l0aW9uXHJcbiAgfVxyXG5cclxuICBwaWNrUmFuZG9tQ2xlYXJMb2NhdGlvbigpOiBXb3JsZFBvc2l0aW9uIHtcclxuICAgIGNvbnN0IGxvY2F0aW9uczogV29ybGRQb3NpdGlvbltdID0gW11cclxuICAgIGZvciAobGV0IHk9MDsgeTx0aGlzLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgIGZvciAobGV0IHg9MDsgeDx0aGlzLndpZHRoOyB4KyspIHtcclxuICAgICAgICBpZiAodGhpcy52ZWdldGF0aW9uLmF0KHBvcyh4LHkpKSAhPT0gJ3RyZWUnKSB7XHJcbiAgICAgICAgICBsb2NhdGlvbnMucHVzaChwb3MoeCx5KSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwaWNrKC4uLmxvY2F0aW9ucylcclxuICB9XHJcblxyXG4gIHBpY2tDbGVhckxvY2F0aW9ucyhuOiBudW1iZXIsIG5lYXJQb2ludDogV29ybGRQb3NpdGlvbiA9IHRoaXMuY2VudGVyKTogV29ybGRQb3NpdGlvbltdIHtcclxuICAgIGNvbnN0IGxvY2F0aW9uczogV29ybGRQb3NpdGlvbltdID0gW11cclxuICAgIGZvciAobGV0IHk9MDsgeTx0aGlzLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgIGZvciAobGV0IHg9MDsgeDx0aGlzLndpZHRoOyB4KyspIHtcclxuICAgICAgICBpZiAodGhpcy52ZWdldGF0aW9uLmF0KHBvcyh4LHkpKSAhPT0gJ3RyZWUnKSB7XHJcbiAgICAgICAgICBsb2NhdGlvbnMucHVzaChwb3MoeCx5KSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0YWtlKG4sIGxvY2F0aW9ucy5zb3J0KGJ5RGlzdGFuY2VGcm9tKG5lYXJQb2ludCkpKVxyXG4gIH1cclxufSIsImltcG9ydCB7IERpbWVuc2lvbnMsIFdvcmxkUG9zaXRpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgcG9zIH0gZnJvbSBcIi4vV29ybGRQb3NpdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgRHJhZyB7XHJcbiAgb3JpZ2luOiBXb3JsZFBvc2l0aW9uO1xyXG4gIHByaXZhdGUgZGVzdDogV29ybGRQb3NpdGlvbjtcclxuICBleHRlbnQ6IERpbWVuc2lvbnM7XHJcblxyXG4gIGdldCBkZXN0aW5hdGlvbigpOiBXb3JsZFBvc2l0aW9uIHsgcmV0dXJuIHRoaXMuZGVzdCB8fCB0aGlzLm9yaWdpbiB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiBXb3JsZFBvc2l0aW9uLCBwcml2YXRlIGZvcmNlTGluZXM6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgdGhpcy5vcmlnaW4gPSBwb3NpdGlvbjtcclxuICB9XHJcbiAgY29udGludWUocG9zaXRpb246IFdvcmxkUG9zaXRpb24pOiB2b2lkIHtcclxuICAgIGNvbnN0IG9mZnNldFggPSAwOyAvL3Bvc2l0aW9uWzBdID4gdGhpcy5vcmlnaW5bMF0gPyAwIDogMTtcclxuICAgIGNvbnN0IG9mZnNldFkgPSAwOyAvL3Bvc2l0aW9uWzFdID4gdGhpcy5vcmlnaW5bMV0gPyAwIDogMTtcclxuICAgIHRoaXMuZGVzdCA9IHBvcyhwb3NpdGlvblswXSAtIG9mZnNldFgsIHBvc2l0aW9uWzFdIC0gb2Zmc2V0WSk7XHJcbiAgICB0aGlzLmV4dGVudCA9IFtcclxuICAgICAgdGhpcy5kZXN0WzBdIC0gdGhpcy5vcmlnaW5bMF0sXHJcbiAgICAgIHRoaXMuZGVzdFsxXSAtIHRoaXMub3JpZ2luWzFdXHJcbiAgICBdIGFzIERpbWVuc2lvbnM7XHJcbiAgICBpZiAodGhpcy5mb3JjZUxpbmVzKSB7XHJcbiAgICAgIGlmIChNYXRoLmFicyh0aGlzLmV4dGVudFswXSkgPiBNYXRoLmFicyh0aGlzLmV4dGVudFsxXSkpIHtcclxuICAgICAgICB0aGlzLmRlc3RbMV0gPSB0aGlzLm9yaWdpblsxXVxyXG4gICAgICAgIC8vIHRoaXMuZXh0ZW50WzFdID0gMFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGVzdFswXSA9IHRoaXMub3JpZ2luWzBdXHJcbiAgICAgICAgLy8gdGhpcy5leHRlbnRbMF0gPSAwXHJcbiAgICAgIH1cclxuICAgICAgLy90aGlzLmV4dGVudCA9IFtcclxuICAgICAgLy8gIHRoaXMuZGVzdGluYXRpb25bMF0gLSB0aGlzLm9yaWdpblswXSxcclxuICAgICAgLy8gIHRoaXMuZGVzdGluYXRpb25bMV0gLSB0aGlzLm9yaWdpblsxXVxyXG4gICAgICAvL10gYXMgRGltZW5zaW9ucztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBtaW5pbWEoKTogV29ybGRQb3NpdGlvbiB7XHJcbiAgICBjb25zdCBtaW5pbWFYID0gTWF0aC5taW4odGhpcy5vcmlnaW5bMF0sIHRoaXMuZGVzdGluYXRpb25bMF0pO1xyXG4gICAgY29uc3QgbWluaW1hWSA9IE1hdGgubWluKHRoaXMub3JpZ2luWzFdLCB0aGlzLmRlc3RpbmF0aW9uWzFdKTtcclxuICAgIC8vIGNvbnN0IG1pbmltYVggPSBNYXRoLm1pbih0aGlzLm9yaWdpblswXSwgdGhpcy5vcmlnaW5bMF0gKyB0aGlzLmV4dGVudFswXSk7XHJcbiAgICAvLyBjb25zdCBtaW5pbWFZID0gTWF0aC5taW4odGhpcy5vcmlnaW5bMV0sIHRoaXMub3JpZ2luWzFdICsgdGhpcy5leHRlbnRbMV0pO1xyXG4gICAgcmV0dXJuIHBvcyhtaW5pbWFYLCBtaW5pbWFZKTtcclxuICB9XHJcblxyXG4gIGdldCBtYXhpbWEoKTogV29ybGRQb3NpdGlvbiB7XHJcbiAgICBjb25zdCBtYXhpbWFYID0gTWF0aC5tYXgodGhpcy5vcmlnaW5bMF0sIHRoaXMuZGVzdGluYXRpb25bMF0pO1xyXG4gICAgY29uc3QgbWF4aW1hWSA9IE1hdGgubWF4KHRoaXMub3JpZ2luWzFdLCB0aGlzLmRlc3RpbmF0aW9uWzFdKTtcclxuICAgIC8vIGNvbnN0IG1heGltYVggPSBNYXRoLm1heCh0aGlzLm9yaWdpblswXSwgdGhpcy5vcmlnaW5bMF0gKyB0aGlzLmV4dGVudFswXSk7XHJcbiAgICAvLyBjb25zdCBtYXhpbWFZID0gTWF0aC5tYXgodGhpcy5vcmlnaW5bMV0sIHRoaXMub3JpZ2luWzFdICsgdGhpcy5leHRlbnRbMV0pO1xyXG4gICAgcmV0dXJuIHBvcyhtYXhpbWFYLCBtYXhpbWFZKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgV29ybGQgfSBmcm9tIFwiLi9Xb3JsZFwiO1xyXG5pbXBvcnQgeyBUaWxlTWFwLCBTcHJpdGVTaGVldCwgVGlsZVNwcml0ZSwgQ29sb3IsIElucHV0IH0gZnJvbSBcImV4Y2FsaWJ1clwiO1xyXG5pbXBvcnQgeyBMQU5EX0lNQUdFUywgV0FURVJfSU1BR0VTLCBUUkVFX0lNQUdFUywgQ0VMTF9TSVpFLCBTSUdJTF9BWEUsIFdPT0RfUElFQ0VfSU1BR0VTLCBTVEFDS19NQVgsIE1BVEVSSUFMX0lNQUdFUywgTUFURVJJQUxfU1RBQ0tfSU1BR0VTLCBXQUxMX01BU0sgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwiLi9HcmlkXCI7XHJcbmltcG9ydCB7IFdvcmxkUG9zaXRpb24sIERpbWVuc2lvbnMsIE1hdGVyaWFsLCBJdGVtIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IHBpY2sgfSBmcm9tIFwiLi4vdXRpbC9waWNrXCI7XHJcbmltcG9ydCB7IFBhd25Ub2tlbiB9IGZyb20gXCIuLi9hY3RvcnMvUGF3blRva2VuXCI7XHJcbmltcG9ydCB7IFNwcml0ZVNoZWV0cyB9IGZyb20gXCIuLi9SZXNvdXJjZXNcIjtcclxuaW1wb3J0IHsgcG9zLCBwb3NFcSwgYXJlYUNvbnRhaW5zIH0gZnJvbSBcIi4vV29ybGRQb3NpdGlvblwiO1xyXG5pbXBvcnQgeyBQYXduTWFuYWdlbWVudCB9IGZyb20gXCIuL1Bhd25NYW5hZ2VtZW50XCI7XHJcbmltcG9ydCB7IFBvc2l0aW9uU2V0IH0gZnJvbSBcIi4vUG9zaXRpb25TZXRcIjtcclxuXHJcbnR5cGUgUmVnaW9uID0geyB0b3BMZWZ0OiBXb3JsZFBvc2l0aW9uLCBib3R0b21SaWdodDogV29ybGRQb3NpdGlvbiwgY29sb3I6IENvbG9yIH1cclxuXHJcbi8vIGNsYXNzIFRpbGVNYXBNYW5hZ2VyIHt9XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgcGxhbm5lZFN0cnVjdHVyZXM6IFRpbGVNYXBcclxuICB0ZXJyYWluOiBUaWxlTWFwXHJcbiAgdmVnZXRhdGlvbjogVGlsZU1hcFxyXG4gIHJhd01hdGVyaWFsczogVGlsZU1hcFxyXG4gIHNpZ2lsczogVGlsZU1hcFxyXG5cclxuICB6b25lczogUmVnaW9uW10gPSBbXVxyXG4gIHBhd25Ub2tlbnM6IFBhd25Ub2tlbltdXHJcbiAgbWFya2VkVHJlZVBvc2l0aW9uczogV29ybGRQb3NpdGlvbltdID0gW11cclxuICBwYXduTWFuYWdlcjogUGF3bk1hbmFnZW1lbnQgPSBuZXcgUGF3bk1hbmFnZW1lbnQodGhpcyk7XHJcbiAgdGlja3MgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdvcmxkOiBXb3JsZCkgeyB9XHJcblxyXG4gIHNldHVwKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdmVnZXRhdGlvbkltYWdlTWFwID0geyAndHJlZSc6IFRSRUVfSU1BR0VTIH1cclxuICAgIHRoaXMudmVnZXRhdGlvbiA9IHRoaXMuYXNzZW1ibGVUaWxlcyhcclxuICAgICAgJ3ZlZ2V0YXRpb24nLCBTcHJpdGVTaGVldHMuVHJlZXMsXHJcbiAgICAgIHRoaXMud29ybGQudmVnZXRhdGlvbixcclxuICAgICAgdmVnZXRhdGlvbkltYWdlTWFwXHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgcmF3TWF0ZXJpYWxzSW1hZ2VNYXAgPSB7fVxyXG4gICAgdGhpcy5yYXdNYXRlcmlhbHMgPSB0aGlzLmFzc2VtYmxlVGlsZXMoXHJcbiAgICAgICdtYXR0ZXInLCBTcHJpdGVTaGVldHMuTWF0dGVyLFxyXG4gICAgICB0aGlzLndvcmxkLnJhd01hdGVyaWFsLFxyXG4gICAgICByYXdNYXRlcmlhbHNJbWFnZU1hcFxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IHNpZ2lsSW1hZ2VNYXAgPSB7ICdheGUnOiBbU0lHSUxfQVhFXSB9XHJcbiAgICB0aGlzLnNpZ2lscyA9IHRoaXMuYXNzZW1ibGVUaWxlcyhcclxuICAgICAgJ3NpZ2lscycsIFNwcml0ZVNoZWV0cy5JY29ucyxcclxuICAgICAgdGhpcy53b3JsZC5zaWdpbHMsXHJcbiAgICAgIHNpZ2lsSW1hZ2VNYXBcclxuICAgIClcclxuXHJcbiAgICAvLyBjb25zdCBwbGFubmVkU3RydWN0dXJlSW1hZ2VNYXAgPSB7fVxyXG4gICAgdGhpcy5wbGFubmVkU3RydWN0dXJlcyA9IHRoaXMuYXNzZW1ibGVUaWxlcygnc3RydWN0dXJlJywgU3ByaXRlU2hlZXRzLlN0cnVjdHVyZVRyYW5zcGFyZW50LCB0aGlzLndvcmxkLnBsYW5uZWRTdHJ1Y3R1cmUsIHt9KVxyXG4gICAgLy8gdGhpcy5wbGFubmVkU3RydWN0dXJlcy5cclxuXHJcbiAgICB0aGlzLnBhd25Ub2tlbnMgPSB0aGlzLndvcmxkLnBhd25zLm1hcChwYXduID0+IG5ldyBQYXduVG9rZW4ocGF3bikpXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRpY2tzKytcclxuICAgIGZvciAoY29uc3QgdG9rZW4gb2YgdGhpcy5wYXduVG9rZW5zKSB7XHJcbiAgICAgIHRoaXMucGF3bk1hbmFnZXIudXBkYXRlUGF3bih0b2tlbilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBkaW1zKCk6IERpbWVuc2lvbnMgeyByZXR1cm4gdGhpcy53b3JsZC5kaW1lbnNpb25zIH1cclxuXHJcbiAgcmF3TWF0ZXJpYWxMb2NhdGlvbnMoa2luZDogTWF0ZXJpYWwpOiBXb3JsZFBvc2l0aW9uW10ge1xyXG4gICAgcmV0dXJuIHRoaXMud29ybGQucmF3TWF0ZXJpYWwub2NjdXBpZWRMb2NhdGlvbnMoa2luZClcclxuICB9XHJcblxyXG4gIHJhd01hdGVyaWFsS2luZEF0TG9jYXRpb24obG9jYXRpb246IFdvcmxkUG9zaXRpb24pOiBNYXRlcmlhbCB7XHJcbiAgICByZXR1cm4gdGhpcy53b3JsZC5yYXdNYXRlcmlhbC5hdChsb2NhdGlvbilcclxuICB9XHJcblxyXG4gIHJhd01hdGVyaWFsQ291bnRBdExvY2F0aW9uKGxvY2F0aW9uOiBXb3JsZFBvc2l0aW9uKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLndvcmxkLnJhd01hdGVyaWFsQ291bnQuYXQobG9jYXRpb24pXHJcbiAgfVxyXG5cclxuICBpc0Jsb2NrZWQocG9zaXRpb246IFdvcmxkUG9zaXRpb24pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLndvcmxkLmlzQmxvY2tlZChwb3NpdGlvbilcclxuICB9XHJcblxyXG4gIGNvbXB1dGVQYXRoKHBvczogV29ybGRQb3NpdGlvbiwgZGVzdDogV29ybGRQb3NpdGlvbik6IFdvcmxkUG9zaXRpb25bXSB7XHJcbiAgICByZXR1cm4gdGhpcy53b3JsZC5zaG9ydGVzdFBhdGgocG9zLCBkZXN0KVxyXG4gIH1cclxuXHJcbiAgY2FuUGF0aEJldHdlZW4oYTogV29ybGRQb3NpdGlvbiwgYjogV29ybGRQb3NpdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHBvc0VxKGEsYikgfHwgdGhpcy5jb21wdXRlUGF0aChhLCBiKS5sZW5ndGggPiAwXHJcbiAgfVxyXG5cclxuICBtYXJrVHJlZShwb3NpdGlvbjogV29ybGRQb3NpdGlvbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaW5Cb3VuZHMocG9zaXRpb24pICYmIHRoaXMud29ybGQudmVnZXRhdGlvbi5hdChwb3NpdGlvbikgPT09ICd0cmVlJykge1xyXG4gICAgICB0aGlzLm1hcmtlZFRyZWVQb3NpdGlvbnMucHVzaChwb3NpdGlvbilcclxuICAgICAgY29uc3QgW3gsIHldID0gcG9zaXRpb25cclxuICAgICAgdGhpcy5zaWdpbHMuZ2V0Q2VsbCh4LCB5KS5wdXNoU3ByaXRlKG5ldyBUaWxlU3ByaXRlKCdzaWdpbHMnLCBTSUdJTF9BWEUpKVxyXG4gICAgICB0aGlzLndvcmxkLnNpZ2lscy5zZXQocG9zaXRpb24sICdheGUnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hvcFRyZWUocG9zaXRpb246IFdvcmxkUG9zaXRpb24pOiB2b2lkIHtcclxuICAgIGNvbnN0IFtheCwgYXldID0gcG9zaXRpb25cclxuICAgIHRoaXMudmVnZXRhdGlvbi5nZXRDZWxsKGF4LCBheSkuY2xlYXJTcHJpdGVzKClcclxuICAgIHRoaXMud29ybGQudmVnZXRhdGlvbi51bnNldChwb3NpdGlvbilcclxuXHJcbiAgICB0aGlzLnNpZ2lscy5nZXRDZWxsKGF4LCBheSkuY2xlYXJTcHJpdGVzKClcclxuICAgIHRoaXMud29ybGQuc2lnaWxzLnVuc2V0KHBvc2l0aW9uKVxyXG5cclxuICAgIHRoaXMubWFya2VkVHJlZVBvc2l0aW9ucyA9IHRoaXMubWFya2VkVHJlZVBvc2l0aW9ucy5maWx0ZXIodHJlZVBvcyA9PiAhcG9zRXEodHJlZVBvcywgcG9zaXRpb24pKVxyXG5cclxuICAgIHRoaXMud29ybGQucmF3TWF0ZXJpYWwuc2V0KHBvc2l0aW9uLCAnd29vZCcpXHJcbiAgICB0aGlzLndvcmxkLnJhd01hdGVyaWFsQ291bnQuc2V0KHBvc2l0aW9uLCAxKVxyXG4gICAgdGhpcy5yYXdNYXRlcmlhbHMuZ2V0Q2VsbChheCxheSkucHVzaFNwcml0ZShcclxuICAgICAgbmV3IFRpbGVTcHJpdGUoJ21hdHRlcicsIHBpY2soLi4uV09PRF9QSUVDRV9JTUFHRVMpKSlcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZ2F0aGVyUmVzb3VyY2UocG9zaXRpb246IFdvcmxkUG9zaXRpb24sIG1heFRvUmVtb3ZlOiBudW1iZXIpOiB7IGtpbmQ6IEl0ZW0sIGFtb3VudDogbnVtYmVyIH0ge1xyXG4gICAgY29uc3Qga2luZCA9IHRoaXMud29ybGQucmF3TWF0ZXJpYWwuYXQocG9zaXRpb24pXHJcbiAgICBjb25zdCBhbW91bnRBdFBvc2l0aW9uID0gdGhpcy53b3JsZC5yYXdNYXRlcmlhbENvdW50LmF0KHBvc2l0aW9uKVxyXG4gICAgY29uc3QgYW1vdW50UmVtb3ZlZCA9IE1hdGgubWluKGFtb3VudEF0UG9zaXRpb24sIG1heFRvUmVtb3ZlKVxyXG4gICAgY29uc3QgYW1vdW50UmVtYWluaW5nID0gYW1vdW50QXRQb3NpdGlvbiAtIGFtb3VudFJlbW92ZWRcclxuICAgIHRoaXMud29ybGQucmF3TWF0ZXJpYWxDb3VudC5zZXQocG9zaXRpb24sIGFtb3VudFJlbWFpbmluZylcclxuICAgIGlmIChhbW91bnRSZW1haW5pbmcgPT09IDApIHtcclxuICAgICAgdGhpcy53b3JsZC5yYXdNYXRlcmlhbC51bnNldChwb3NpdGlvbikgLy8sICdub3RoaW5nJylcclxuICAgIH1cclxuICAgIGNvbnN0IFtheCwgYXldID0gcG9zaXRpb25cclxuICAgIHRoaXMucmF3TWF0ZXJpYWxzLmdldENlbGwoYXgsIGF5KS5jbGVhclNwcml0ZXMoKVxyXG4gICAgaWYgKGFtb3VudFJlbWFpbmluZyA+IDApIHtcclxuICAgICAgbGV0IHNwcml0ZSA9IG5ldyBUaWxlU3ByaXRlKCdtYXR0ZXInLCBwaWNrKC4uLk1BVEVSSUFMX0lNQUdFU1traW5kXSkpXHJcbiAgICAgIGlmIChhbW91bnRSZW1haW5pbmcgPiBTVEFDS19NQVggLyAyKSB7XHJcbiAgICAgICAgc3ByaXRlID0gbmV3IFRpbGVTcHJpdGUoJ21hdHRlcicsIHBpY2soLi4uTUFURVJJQUxfU1RBQ0tfSU1BR0VTW2tpbmRdKSlcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJhd01hdGVyaWFscy5nZXRDZWxsKGF4LCBheSkucHVzaFNwcml0ZShzcHJpdGUpXHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBraW5kLCBhbW91bnQ6IGFtb3VudFJlbW92ZWQgfVxyXG4gIH1cclxuXHJcbiAgc3RvcmVSZXNvdXJjZShraW5kOiBNYXRlcmlhbCwgcG9zaXRpb246IFdvcmxkUG9zaXRpb24sIGFtb3VudDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAvLyB3aGF0IGtpbmQgb2YgcmVzb3VyY2UgaXMgaGVyZT8gYWRkIHRvIGl0Li4uXHJcbiAgICBjb25zdCBbYXgsIGF5XSA9IHBvc2l0aW9uXHJcblxyXG4gICAgdGhpcy53b3JsZC5yYXdNYXRlcmlhbC5zZXQocG9zaXRpb24sIGtpbmQpXHJcbiAgICBjb25zdCBjdXJyZW50Q291bnQgPSB0aGlzLndvcmxkLnJhd01hdGVyaWFsQ291bnQuYXQocG9zaXRpb24pXHJcbiAgICBjb25zdCBuZXdBbW91bnQgPSBjdXJyZW50Q291bnQgKyBhbW91bnRcclxuICAgIHRoaXMud29ybGQucmF3TWF0ZXJpYWxDb3VudC5zZXQocG9zaXRpb24sXHJcbiAgICAgIG5ld0Ftb3VudFxyXG4gICAgKVxyXG5cclxuICAgIHRoaXMucmF3TWF0ZXJpYWxzLmdldENlbGwoYXgsIGF5KS5jbGVhclNwcml0ZXMoKVxyXG4gICAgbGV0IHNwcml0ZSA9IG5ldyBUaWxlU3ByaXRlKCdtYXR0ZXInLCBwaWNrKC4uLk1BVEVSSUFMX0lNQUdFU1traW5kXSkpXHJcbiAgICBpZiAobmV3QW1vdW50ID4gU1RBQ0tfTUFYIC8gMikge1xyXG4gICAgICBzcHJpdGUgPSBuZXcgVGlsZVNwcml0ZSgnbWF0dGVyJywgcGljayguLi5NQVRFUklBTF9TVEFDS19JTUFHRVNba2luZF0pKVxyXG4gICAgfVxyXG4gICAgdGhpcy5yYXdNYXRlcmlhbHMuZ2V0Q2VsbChheCwgYXkpLnB1c2hTcHJpdGUoXHJcbiAgICAgIHNwcml0ZVxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcGxhbldhbGwob3JpZ2luOiBXb3JsZFBvc2l0aW9uLCBkZXN0aW5hdGlvbjogV29ybGRQb3NpdGlvbik6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coXCItLS0+IFdvdWxkIGJ1aWxkIHdhbGwgZnJvbSBcIiArIG9yaWdpbiArIFwiIHRvIFwiICsgZGVzdGluYXRpb24pXHJcbiAgICBjb25zdCBwb3NpdGlvbnM6IFBvc2l0aW9uU2V0ID0gbmV3IFBvc2l0aW9uU2V0KClcclxuICAgIGNvbnN0IHRvcExlZnQgPSB0aGlzLmVuZm9yY2VCb3VuZHMob3JpZ2luKVxyXG4gICAgY29uc3QgYm90dG9tUmlnaHQgPSB0aGlzLmVuZm9yY2VCb3VuZHMoZGVzdGluYXRpb24pXHJcbiAgICBmb3IgKGxldCB4ID0gdG9wTGVmdFswXTsgeCA8PSBib3R0b21SaWdodFswXTsgeCsrKSB7XHJcbiAgICAgIGZvciAobGV0IHkgPSB0b3BMZWZ0WzFdOyB5IDw9IGJvdHRvbVJpZ2h0WzFdOyB5KyspIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLT4gQnVpbGRpbmcgd2FsbCBhdCBcIiArIHggKyBcIiwgXCIgKyB5KVxyXG4gICAgICAgIHRoaXMud29ybGQucGxhbm5lZFN0cnVjdHVyZS5zZXQocG9zKHgsIHkpLCAnd2FsbCcpXHJcbiAgICAgICAgcG9zaXRpb25zLmFkZChwb3MoeCwgeSkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IHBvc2l0aW9uIG9mIHBvc2l0aW9ucy5tZXJnZShwb3NpdGlvbnMuZnJpbmdlKS5hcnJheSkge1xyXG4gICAgICAvLyB1cGRhdGUgdGhpcyBjZWxsIChhbmQgYWxsIG5laWdoYm9ycy4uLilcclxuICAgICAgaWYgKHRoaXMud29ybGQucGxhbm5lZFN0cnVjdHVyZS5hdChwb3NpdGlvbikgPT09ICd3YWxsJykge1xyXG4gICAgICAgIGNvbnN0IG5laWdoYm9ycyA9IHRoaXMud29ybGQucGxhbm5lZFN0cnVjdHVyZS5sYWJlbGxlZE5laWdoYm9yc0F0KHBvc2l0aW9uKVxyXG4gICAgICAgIGNvbnN0IG1hc2sgPSAobmVpZ2hib3JzLm5vcnRoID09PSAnd2FsbCcgPyAxIDogMCkgKiAxICtcclxuICAgICAgICAgICAgICAgICAgICAgKG5laWdoYm9ycy5lYXN0ID09PSAnd2FsbCcgPyAxIDogMCkgKiAyICtcclxuICAgICAgICAgICAgICAgICAgICAgKG5laWdoYm9ycy5zb3V0aCA9PT0gJ3dhbGwnID8gMSA6IDApICogNCArXHJcbiAgICAgICAgICAgICAgICAgICAgIChuZWlnaGJvcnMud2VzdCA9PT0gJ3dhbGwnID8gMSA6IDApICogOFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjb25zdCBbeCwgeV0gPSBwb3NpdGlvblxyXG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLnBsYW5uZWRTdHJ1Y3R1cmVzLmdldENlbGwoeCwgeSlcclxuXHJcbiAgICAgICAgY29uc3Qgc3ByaXRlID0gbmV3IFRpbGVTcHJpdGUoJ3N0cnVjdHVyZScsIFdBTExfTUFTS1ttYXNrXSlcclxuICAgICAgICBjZWxsLmNsZWFyU3ByaXRlcygpXHJcbiAgICAgICAgY2VsbC5wdXNoU3ByaXRlKHNwcml0ZSlcclxuICAgICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgfVxyXG5cclxuICBkZWNsYXJlWm9uZSh0b3BMZWZ0OiBXb3JsZFBvc2l0aW9uLCBib3R0b21SaWdodDogV29ybGRQb3NpdGlvbik6IHZvaWQge1xyXG4gICAgdG9wTGVmdCA9IHRoaXMuZW5mb3JjZUJvdW5kcyh0b3BMZWZ0KVxyXG4gICAgYm90dG9tUmlnaHQgPSB0aGlzLmVuZm9yY2VCb3VuZHMoYm90dG9tUmlnaHQpXHJcbiAgICBjb25zdCBjb2xvciA9IG5ldyBDb2xvcihwaWNrKDYwLCA5MCwgMTIwKSwgcGljayg2MCwgOTAsIDEyMCksIHBpY2soNjAsIDkwLCAxMjApLCAwLjUpXHJcbiAgICBpZiAodG9wTGVmdFswXSA8PSBib3R0b21SaWdodFswXSAmJiB0b3BMZWZ0WzFdIDw9IGJvdHRvbVJpZ2h0WzFdKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiLS0tPiBDcmVhdGluZyB6b25lIGZyb20gXCIgKyB0b3BMZWZ0ICsgXCIgdG8gXCIgKyBib3R0b21SaWdodClcclxuICAgICAgdGhpcy56b25lcy5wdXNoKHtcclxuICAgICAgICB0b3BMZWZ0LCBib3R0b21SaWdodCwgY29sb3JcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiLS0tPiBOb3QgY3JlYXRpbmcgem9uZTsgem9uZSBoYWQgbm8gc2l6ZT9cIilcclxuICAgIH1cclxuICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlWm9uZUF0KGxvY2F0aW9uOiBXb3JsZFBvc2l0aW9uKTogdm9pZCB7XHJcbiAgICB0aGlzLnpvbmVzID0gdGhpcy56b25lcy5maWx0ZXIoem9uZSA9PlxyXG4gICAgICAhYXJlYUNvbnRhaW5zKFxyXG4gICAgICAgIHBvcyh6b25lLnRvcExlZnRbMF0sIHpvbmUudG9wTGVmdFsxXSksXHJcbiAgICAgICAgcG9zKHpvbmUuYm90dG9tUmlnaHRbMF0sIHpvbmUuYm90dG9tUmlnaHRbMV0pLFxyXG4gICAgICAgIGxvY2F0aW9uXHJcbiAgICAgIClcclxuICAgIClcclxuICB9XHJcblxyXG4gIGlzTG9jYXRpb25XaXRoaW5Bbnlab25lKGxvY2F0aW9uOiBXb3JsZFBvc2l0aW9uKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBjb250YWluaW5nWm9uZSA9IHRoaXMuem9uZXMuZmluZCh6b25lID0+XHJcbiAgICAgIGFyZWFDb250YWlucyh6b25lLnRvcExlZnQsIHpvbmUuYm90dG9tUmlnaHQsIGxvY2F0aW9uKVxyXG4gICAgKVxyXG5cclxuICAgIGlmIChjb250YWluaW5nWm9uZSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIi0tLT4gWm9uZSBcIiArIGNvbnRhaW5pbmdab25lICsgXCIgY29udGFpbnMgXCIgKyBsb2NhdGlvbilcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiLS0tPiBObyB6b25lIGNvbnRhaW5zIFwiICsgbG9jYXRpb24pXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGFyZUFsbFpvbmVzRnVsbCgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLnpvbmVzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gdHJ1ZSB9XHJcbiAgICBmb3IgKGNvbnN0IHpvbmUgb2YgdGhpcy56b25lcykge1xyXG4gICAgICBmb3IgKGxldCB5ID0gem9uZS50b3BMZWZ0WzFdOyB5IDw9IHpvbmUuYm90dG9tUmlnaHRbMV07IHkrKykge1xyXG4gICAgICAgIGZvciAobGV0IHggPSB6b25lLnRvcExlZnRbMF07IHggPD0gem9uZS5ib3R0b21SaWdodFswXTsgeCsrKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy53b3JsZC5yYXdNYXRlcmlhbENvdW50LmF0KHBvcyh4LCB5KSkgPCBTVEFDS19NQVgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgZmluZFVuZmlsbGVkWm9uZVBvc2l0aW9ucygpOiBXb3JsZFBvc2l0aW9uW10ge1xyXG4gICAgY29uc3QgcG9zaXRpb25zOiBXb3JsZFBvc2l0aW9uW10gPSBbXVxyXG4gICAgZm9yIChjb25zdCB6b25lIG9mIHRoaXMuem9uZXMpIHtcclxuICAgICAgZm9yIChsZXQgeSA9IHpvbmUudG9wTGVmdFsxXTsgeSA8PSB6b25lLmJvdHRvbVJpZ2h0WzFdOyB5KyspIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gem9uZS50b3BMZWZ0WzBdOyB4IDw9IHpvbmUuYm90dG9tUmlnaHRbMF07IHgrKykge1xyXG4gICAgICAgICAgaWYgKHRoaXMud29ybGQucmF3TWF0ZXJpYWxDb3VudC5hdChwb3MoeCwgeSkpIDwgU1RBQ0tfTUFYKSB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICBwb3NpdGlvbnMucHVzaChwb3MoeCwgeSkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG9zaXRpb25zO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbkJvdW5kcyhwb3M6IFdvcmxkUG9zaXRpb24pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IFt4LCB5XSA9IHBvc1xyXG4gICAgcmV0dXJuICh4ID49IDAgJiYgeSA+PSAwICYmIHggPCB0aGlzLndvcmxkLndpZHRoICYmIHkgPCB0aGlzLndvcmxkLmhlaWdodClcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW5mb3JjZUJvdW5kcyhwb3NpdGlvbjogV29ybGRQb3NpdGlvbik6IFdvcmxkUG9zaXRpb24ge1xyXG4gICAgbGV0IFt4LCB5XSA9IHBvc2l0aW9uXHJcbiAgICBpZiAoeCA8IDApIHsgeCA9IDA7IH1cclxuICAgIGlmICh4ID49IHRoaXMud29ybGQud2lkdGgpIHsgeCA9IHRoaXMud29ybGQud2lkdGggLSAxIH1cclxuICAgIGlmICh5IDwgMCkgeyB5ID0gMDsgfVxyXG4gICAgaWYgKHkgPj0gdGhpcy53b3JsZC5oZWlnaHQpIHsgeSA9IHRoaXMud29ybGQuaGVpZ2h0IC0gMSB9XHJcbiAgICByZXR1cm4gcG9zKHgsIHkpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzc2VtYmxlVGlsZXM8VD4oXHJcbiAgICBsYXllck5hbWU6IHN0cmluZyxcclxuICAgIHNwcml0ZXNoZWV0OiBTcHJpdGVTaGVldCxcclxuICAgIGdyaWQ6IEdyaWQ8VD4sXHJcbiAgICBpbWFnZU1hcDogeyBbdmFsdWU6IHN0cmluZ106IG51bWJlcltdIH0sXHJcbiAgKTogVGlsZU1hcCB7XHJcbiAgICBjb25zdCBtYXAgPSBuZXcgVGlsZU1hcChcclxuICAgICAgMCwgMCxcclxuICAgICAgQ0VMTF9TSVpFLCBDRUxMX1NJWkUsXHJcbiAgICAgIHRoaXMud29ybGQuaGVpZ2h0LCB0aGlzLndvcmxkLndpZHRoXHJcbiAgICApXHJcbiAgICBtYXAucmVnaXN0ZXJTcHJpdGVTaGVldChsYXllck5hbWUsIHNwcml0ZXNoZWV0KVxyXG4gICAgdGhpcy53b3JsZC5mb3JFYWNoUG9zaXRpb24oKHgsIHkpID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBncmlkLmF0KHBvcyh4LCB5KSkgYXMgdW5rbm93biBhcyBzdHJpbmdcclxuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09ICdub3RoaW5nJykge1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSBtYXAuZ2V0Q2VsbCh4LCB5KVxyXG4gICAgICAgIGNvbnN0IHNwcml0ZUlkID0gcGljayguLi5pbWFnZU1hcFt2YWx1ZV0pXHJcbiAgICAgICAgY2VsbC5wdXNoU3ByaXRlKG5ldyBUaWxlU3ByaXRlKGxheWVyTmFtZSwgc3ByaXRlSWQpKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIG1hcFxyXG4gIH1cclxufSIsImltcG9ydCB7IFdvcmxkUG9zaXRpb24sIERpbWVuc2lvbnMgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgcG9zIH0gZnJvbSBcIi4vV29ybGRQb3NpdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWQ8VD4ge1xyXG4gIHByaXZhdGUgY2VsbHM6IG51bWJlcltdW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkaW1zOiBEaW1lbnNpb25zLCBwcml2YXRlIGluZGV4OiBUW10pIHsgfVxyXG5cclxuICBnZXQgd2lkdGgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuZGltc1swXSB9XHJcbiAgZ2V0IGhlaWdodCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5kaW1zWzFdIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXJlZmVyZW5jZShyZWZlcmVuY2U6IG51bWJlcik6IFQge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5kZXhbcmVmZXJlbmNlXVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWZlcmVuY2UodmFsdWU6IFQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuaW5kZXguaW5kZXhPZih2YWx1ZSlcclxuICB9XHJcblxyXG4gIGF0KGxvY2F0aW9uOiBXb3JsZFBvc2l0aW9uKTogVCB7XHJcbiAgICBjb25zdCBbeCwgeV0gPSBsb2NhdGlvbjtcclxuICAgIHRoaXMuY2VsbHNbeV0gPSB0aGlzLmNlbGxzW3ldIHx8IFtdO1xyXG4gICAgaWYgKHRoaXMuY2VsbHNbeV1beF0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5kZXJlZmVyZW5jZSh0aGlzLmNlbGxzW3ldW3hdKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldChsb2NhdGlvbjogV29ybGRQb3NpdGlvbiwgdmFsdWU6IFQpOiB2b2lkIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiW0dyaWQuc2V0XSBBdCBsb2NhdGlvbjogXCIgKyBsb2NhdGlvbiArIFwiLCB2YWx1ZTogXCIgKyB2YWx1ZSlcclxuICAgIGNvbnN0IFt4LHldID0gbG9jYXRpb247XHJcbiAgICB0aGlzLmNlbGxzW3ldID0gdGhpcy5jZWxsc1t5XSB8fCBbXTtcclxuICAgIHRoaXMuY2VsbHNbeV1beF0gPSB0aGlzLnJlZmVyZW5jZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB1bnNldChsb2NhdGlvbjogV29ybGRQb3NpdGlvbik6IHZvaWQge1xyXG4gICAgY29uc3QgW3gseV0gPSBsb2NhdGlvbjtcclxuICAgIHRoaXMuY2VsbHNbeV0gPSB0aGlzLmNlbGxzW3ldIHx8IFtdO1xyXG4gICAgdGhpcy5jZWxsc1t5XVt4XSA9IHVuZGVmaW5lZDsgLy90aGlzLnJlZmVyZW5jZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBsYWJlbGxlZE5laWdoYm9yc0F0KGxvY2F0aW9uOiBXb3JsZFBvc2l0aW9uKTogeyBub3J0aDogVCwgc291dGg6IFQsIGVhc3Q6IFQsIHdlc3Q6IFQgfSB7XHJcbiAgICBjb25zdCBbeCx5XSA9IGxvY2F0aW9uO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZWFzdDogdGhpcy5hdChwb3MoeCsxLHkpKSxcclxuICAgICAgd2VzdDogdGhpcy5hdChwb3MoeC0xLHkpKSxcclxuICAgICAgbm9ydGg6IHRoaXMuYXQocG9zKHgseS0xKSksXHJcbiAgICAgIHNvdXRoOiB0aGlzLmF0KHBvcyh4LHkrMSkpLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yRWFjaFBvc2l0aW9uWFkoZm46ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy53aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgZm4oeCx5KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JFYWNoUG9zaXRpb24oZm46IChwb3NpdGlvbjogV29ybGRQb3NpdGlvbikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmhlaWdodDsgeSsrKSB7XHJcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy53aWR0aDsgeCsrKSB7XHJcbiAgICAgICAgZm4ocG9zKHgseSkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbGwodmFsdWU6IFQpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9yRWFjaFBvc2l0aW9uKHBvc2l0aW9uID0+IHRoaXMuc2V0KHBvc2l0aW9uLHZhbHVlKSlcclxuICB9XHJcblxyXG4gIGRpc3RyaWJ1dGVSYW5kb21seSh2YWx1ZTogVCwgcmF0ZSA9IDAuMSk6IHZvaWQge1xyXG4gICAgdGhpcy5mb3JFYWNoUG9zaXRpb24ocG9zaXRpb24gPT4ge1xyXG4gICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IHJhdGUpIHtcclxuICAgICAgICB0aGlzLnNldChwb3NpdGlvbiwgdmFsdWUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBvY2N1cGllZExvY2F0aW9ucyh2YWx1ZTogVCk6IFdvcmxkUG9zaXRpb25bXSB7XHJcbiAgICBjb25zdCBvY2N1cGllZCA9IFtdXHJcbiAgICB0aGlzLmZvckVhY2hQb3NpdGlvbihwb3NpdGlvbiA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmF0KHBvc2l0aW9uKSA9PT0gdmFsdWUpIHtcclxuICAgICAgICBvY2N1cGllZC5wdXNoKHBvc2l0aW9uKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIG9jY3VwaWVkXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFdvcmxkUG9zaXRpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgcG9zRXEsIGRpc3RhbmNlQmV0d2VlbiwgbmVpZ2hib3JzT2ZQb3NpdGlvblBsdXNEaWFnb25hbHMgfSBmcm9tIFwiLi9Xb3JsZFBvc2l0aW9uXCI7XHJcbmltcG9ydCB7IFBvc2l0aW9uU2V0IH0gZnJvbSBcIi4vUG9zaXRpb25TZXRcIjtcclxuaW1wb3J0IHsgU2ltcGxlR3JpZCB9IGZyb20gXCIuL1NpbXBsZUdyaWRcIjtcclxuaW1wb3J0IHsgUEFUSEZJTkRJTkdfVElNRU9VVCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcclxuXHJcbnR5cGUgTmF2aWdhdGlvblJlc3VsdCA9IHsgcGF0aDogV29ybGRQb3NpdGlvbltdLCBmb3VuZDogYm9vbGVhbiB9XHJcblxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdG9yIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpbXM6IFtudW1iZXIsIG51bWJlcl0sIHByaXZhdGUgaXNCbG9ja2VkOiAocG9zaXRpb246IFdvcmxkUG9zaXRpb24pID0+IGJvb2xlYW4pIHt9XHJcblxyXG4gIGdldCB3aWR0aCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5kaW1zWzBdOyB9XHJcbiAgZ2V0IGhlaWdodCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5kaW1zWzFdOyB9XHJcblxyXG4gIHByaXZhdGUgcmVjb25zdHJ1Y3RQYXRoKHByZXY6IFNpbXBsZUdyaWQ8V29ybGRQb3NpdGlvbj4sIGRlc3RpbmF0aW9uOiBXb3JsZFBvc2l0aW9uKTogV29ybGRQb3NpdGlvbltdIHtcclxuICAgIGNvbnN0IHBhdGggPSBbZGVzdGluYXRpb25dXHJcbiAgICBsZXQgY3VycmVudDogV29ybGRQb3NpdGlvbiA9IGRlc3RpbmF0aW9uXHJcbiAgICB3aGlsZSAocHJldi5hdChjdXJyZW50KSkge1xyXG4gICAgICBjdXJyZW50ID0gcHJldi5hdChjdXJyZW50KVxyXG4gICAgICBwYXRoLnVuc2hpZnQoY3VycmVudClcclxuICAgIH0gXHJcbiAgICBwYXRoLnNoaWZ0KClcclxuICAgIHJldHVybiBwYXRoXHJcbiAgfVxyXG5cclxuICBhU3Rhcihzb3VyY2U6IFdvcmxkUG9zaXRpb24sIGRlc3RpbmF0aW9uOiBXb3JsZFBvc2l0aW9uKTogTmF2aWdhdGlvblJlc3VsdCB7IFxyXG4gICAgY29uc3Qgc3RhcnRlZEF0ID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgIGNvbnN0IGZyaW5nZSA9IG5ldyBQb3NpdGlvblNldChbc291cmNlXSlcclxuICAgIGNvbnN0IHByZXYgPSBuZXcgU2ltcGxlR3JpZDxXb3JsZFBvc2l0aW9uPigpXHJcbiAgICBjb25zdCBnU2NvcmUgPSBuZXcgU2ltcGxlR3JpZDxudW1iZXI+KEluZmluaXR5KVxyXG4gICAgY29uc3QgZlNjb3JlID0gbmV3IFNpbXBsZUdyaWQ8bnVtYmVyPihJbmZpbml0eSlcclxuICAgIGNvbnN0IGJ5RlNjb3JlID0gKGE6IFdvcmxkUG9zaXRpb24sIGI6IFdvcmxkUG9zaXRpb24pID0+IHtcclxuICAgICAgY29uc3QgZGEgPSBmU2NvcmUuYXQoYSlcclxuICAgICAgY29uc3QgZGIgPSBmU2NvcmUuYXQoYilcclxuICAgICAgcmV0dXJuIGRhIDwgZGIgPyAtMSA6IDFcclxuICAgIH1cclxuICAgIGNvbnN0IGhldXJpc3RpYyA9IChhOiBXb3JsZFBvc2l0aW9uKTogbnVtYmVyID0+IGRpc3RhbmNlQmV0d2VlbihhLCBkZXN0aW5hdGlvbilcclxuICAgIGdTY29yZS5zZXQoc291cmNlLCAwKVxyXG4gICAgZlNjb3JlLnNldChzb3VyY2UsIGhldXJpc3RpYyhzb3VyY2UpKVxyXG4gICAgd2hpbGUgKCFmcmluZ2UuZW1wdHkoKSkge1xyXG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxyXG4gICAgICBjb25zdCBlbGFwc2VkID0gbm93IC0gc3RhcnRlZEF0IC8vLSBub3dcclxuICAgICAgLy8gY29uc29sZS5sb2coXCJhKiBlbGFwc2VkOiBcIiArIGVsYXBzZWQpXHJcbiAgICAgIGlmIChlbGFwc2VkID4gUEFUSEZJTkRJTkdfVElNRU9VVCkgeyBjb25zb2xlLmxvZyhcImEtc3RhciBoaXQgdGltZW91dFwiKTsgYnJlYWsgfVxyXG4gICAgICBcclxuICAgICAgY29uc3QgY3VycmVudDogV29ybGRQb3NpdGlvbiA9IGZyaW5nZS5hcnJheS5zb3J0KGJ5RlNjb3JlKVswXVxyXG4gICAgICBpZiAocG9zRXEoY3VycmVudCwgZGVzdGluYXRpb24pKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgcGF0aDogdGhpcy5yZWNvbnN0cnVjdFBhdGgocHJldiwgY3VycmVudCksIGZvdW5kOiB0cnVlIH1cclxuICAgICAgfVxyXG4gICAgICBmcmluZ2UuZGVsZXRlKGN1cnJlbnQpXHJcbiAgICAgIGNvbnN0IG5laWdoYm9ycyA9IG5laWdoYm9yc09mUG9zaXRpb25QbHVzRGlhZ29uYWxzKGN1cnJlbnQsIHRoaXMuZGltcylcclxuICAgICAgbmVpZ2hib3JzLmZpbHRlcihuZWlnaGJvciA9PiAhdGhpcy5pc0Jsb2NrZWQobmVpZ2hib3IpKS5mb3JFYWNoKG5laWdoYm9yID0+IHtcclxuICAgICAgICBjb25zdCB0ZW50YXRpdmVHU2NvcmUgPSBnU2NvcmUuYXQoY3VycmVudCkgKyBkaXN0YW5jZUJldHdlZW4oY3VycmVudCwgbmVpZ2hib3IpXHJcbiAgICAgICAgaWYgKHRlbnRhdGl2ZUdTY29yZSA8IGdTY29yZS5hdChuZWlnaGJvcikpIHtcclxuICAgICAgICAgIHByZXYuc2V0KG5laWdoYm9yLCBjdXJyZW50KVxyXG4gICAgICAgICAgZ1Njb3JlLnNldChuZWlnaGJvciwgdGVudGF0aXZlR1Njb3JlKVxyXG4gICAgICAgICAgZlNjb3JlLnNldChuZWlnaGJvciwgZ1Njb3JlLmF0KG5laWdoYm9yKSArIGhldXJpc3RpYyhuZWlnaGJvcikpXHJcbiAgICAgICAgICBpZiAoIWZyaW5nZS5oYXMobmVpZ2hib3IpKSB7XHJcbiAgICAgICAgICAgIGZyaW5nZS5hZGQobmVpZ2hib3IpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHBhdGg6IFtdLCBmb3VuZDogZmFsc2UgfVxyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTm8gcGF0aCBmb3VuZCFcIilcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQYXduVG9rZW4gfSBmcm9tIFwiLi4vYWN0b3JzL1Bhd25Ub2tlblwiO1xyXG5pbXBvcnQgeyBwb3NFcSB9IGZyb20gXCIuL1dvcmxkUG9zaXRpb25cIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL0dhbWVcIjtcclxuaW1wb3J0IHsgV29ybGRQb3NpdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBDRUxMX1NJWkUgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IElBY3Rpdml0eSBhcyBJQWN0aXZpdHkgfSBmcm9tIFwiLi9JQWN0aXZpdHlcIjtcclxuaW1wb3J0IHsgQ3V0VGltYmVyIH0gZnJvbSBcIi4vYWN0aXZpdGllcy9DdXRUaW1iZXJcIjtcclxuaW1wb3J0IHsgSGF1bCB9IGZyb20gXCIuL2FjdGl2aXRpZXMvSGF1bFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhd25NYW5hZ2VtZW50IHtcclxuICBhY3Rpdml0aWVzOiBJQWN0aXZpdHlbXVxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2FtZTogR2FtZSkge1xyXG4gICAgdGhpcy5hY3Rpdml0aWVzID0gW1xyXG4gICAgICBuZXcgQ3V0VGltYmVyKHRoaXMuZ2FtZSksXHJcbiAgICAgIG5ldyBIYXVsKHRoaXMuZ2FtZSksXHJcbiAgICBdXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlbmRQYXduVG9Qb3NpdGlvbih0b2tlbjogUGF3blRva2VuLCBwb3NpdGlvbjogV29ybGRQb3NpdGlvbik6IHZvaWQge1xyXG4gICAgaWYgKCFwb3NFcSh0b2tlbi5wYXduLnBvcywgcG9zaXRpb24pKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiLS0tPiBTZW5kIFwiICsgdG9rZW4ucGF3bi5uYW1lICsgXCIgdG8gXCIgKyBwb3NpdGlvbik7XHJcbiAgICAgIHRva2VuLnBhd24uZGVzdCA9IHBvc2l0aW9uO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9rZW4ucGF3bi5kZXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGF3bih0b2tlbjogUGF3blRva2VuKTogdm9pZCB7XHJcbiAgICBpZiAodG9rZW4ucGF3bi5kZXN0ICYmICFwb3NFcSh0b2tlbi5wYXduLmRlc3QsIHRva2VuLnBhd24ucG9zKSkge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIi0tLT4gUGF3biBuYXZpZ2F0ZXMgdG8gXCIgKyB0b2tlbi5wYXduLmRlc3QpXHJcbiAgICAgIHRoaXMuaGFuZGxlTmF2aWdhdGlvbih0b2tlbilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdG9rZW4ucGF3bi5hY3Rpdml0eSkge1xyXG4gICAgICAgIGlmICh0aGlzLmdhbWUudGlja3MgJSAxNCAhPT0gMCkgeyByZXR1cm4gfVxyXG4gICAgICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLmFjdGl2aXRpZXMuc29ydCgoYSxiKSA9PiB0b2tlbi5wcmlvcml0eShhKSA+IHRva2VuLnByaW9yaXR5KGIpID8gLTEgOiAxKSkge1xyXG4gICAgICAgICAgICBpZiAoYWN0aXZpdHkuaXNKb2JBdmFpbGFibGUodG9rZW4pKSB7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0+IEEgam9iIGlzIGF2YWlsYWJsZTogXCIgKyBhY3Rpdml0eS50aXRsZSlcclxuICAgICAgICAgICAgICBjb25zdCBqb2JEZXRhaWxzID0gYWN0aXZpdHkuZmluZEpvYih0b2tlbilcclxuICAgICAgICAgICAgICBpZiAoam9iRGV0YWlscykge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0+IEdvdCBqb2IgZGV0YWlsczogXCIgKyBKU09OLnN0cmluZ2lmeShqb2JEZXRhaWxzKSlcclxuICAgICAgICAgICAgICAgIHRva2VuLnBhd24uYWN0aXZpdHkgPSBhY3Rpdml0eS50aXRsZTtcclxuICAgICAgICAgICAgICAgIHRva2VuLnBhd24uYWN0aXZpdHlUYXJnZXQgPSBqb2JEZXRhaWxzLmFjdGl2aXR5VGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGpvYkRldGFpbHMuam9iU3VidHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICB0b2tlbi5wYXduLmpvYlN1YnR5cGUgPSBqb2JEZXRhaWxzLmpvYlN1YnR5cGU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyB0b2tlbi5wYXduLmpvYlN1YnR5cGUgPSB1bmRlZmluZWQ7IH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZFBhd25Ub1Bvc2l0aW9uKHRva2VuLCBqb2JEZXRhaWxzLnRyYXZlbERlc3RpbmF0aW9uKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiLS0tPiBQYXduIFwiICsgdG9rZW4ucGF3bi5uYW1lICsgXCIgaGFzIGFuIGFjdGl2aXR5Li4uXCIpXHJcbiAgICAgICAgdGhpcy5wYXduVG9rZW5Xb3Jrcyh0b2tlbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlTmF2aWdhdGlvbih0b2tlbjogUGF3blRva2VuKSB7XHJcbiAgICBpZiAoIXRva2VuLm1vdmluZykge1xyXG4gICAgICBpZiAodG9rZW4ucGF0aC5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBuZXh0U3RlcCA9IHRva2VuLnBhdGguc2hpZnQoKTtcclxuICAgICAgICB0aGlzLnBhd25Ub2tlbk1vdmVzKHRva2VuLCBuZXh0U3RlcCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0+IENvbXB1dGUgcGF0aCBmcm9tIFwiICsgdG9rZW4ucGF3bi5wb3MgKyBcIiB0byBcIiArIHRva2VuLnBhd24uZGVzdCk7XHJcbiAgICAgICAgdG9rZW4ucGF0aCA9IHRoaXMuZ2FtZS5jb21wdXRlUGF0aCh0b2tlbi5wYXduLnBvcywgdG9rZW4ucGF3bi5kZXN0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBwYXduVG9rZW5Nb3Zlcyh0b2tlbjogUGF3blRva2VuLCB0YXJnZXQ6IFdvcmxkUG9zaXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICghdG9rZW4ubW92aW5nKSB7XHJcbiAgICAgIHRva2VuLm1vdmluZyA9IHRydWVcclxuICAgICAgYXdhaXQgdG9rZW4uYWN0aW9ucy5tb3ZlVG8oXHJcbiAgICAgICAgdGFyZ2V0WzBdICogQ0VMTF9TSVpFLCB0YXJnZXRbMV0gKiBDRUxMX1NJWkUsXHJcbiAgICAgICAgUGF3blRva2VuLnNwZWVkXHJcbiAgICAgICkuYXNQcm9taXNlKClcclxuICAgICAgdG9rZW4ucGF3bi5wb3MgPSB0YXJnZXRcclxuICAgICAgdG9rZW4ubW92aW5nID0gZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgcGF3blRva2VuV29ya3ModG9rZW46IFBhd25Ub2tlbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCItLS0+IFBhd24gd29ya3MgKFwiICsgdG9rZW4ucGF3bi5uYW1lICsgXCIpXCIpXHJcbiAgICBpZiAoIXRva2VuLmludGVyYWN0aW5nKSB7XHJcbiAgICAgIHRva2VuLmludGVyYWN0aW5nID0gdHJ1ZVxyXG4gICAgICBjb25zdCBhY3Rpdml0eU1hbmFnZXIgPSB0aGlzLmFjdGl2aXRpZXMuZmluZChhY3Rpdml0eSA9PiBhY3Rpdml0eS50aXRsZSA9PT0gdG9rZW4ucGF3bi5hY3Rpdml0eSlcclxuICAgICAgYXdhaXQgYWN0aXZpdHlNYW5hZ2VyLnBlcmZvcm0odG9rZW4pXHJcbiAgICAgIHRva2VuLmludGVyYWN0aW5nID0gZmFsc2VcclxuICAgICAgdG9rZW4ucGF3bi5hY3Rpdml0eSA9IHVuZGVmaW5lZFxyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCItLS0+IFBhd24gaXMgYWxyZWFkeSBpbnRlcmFjdGluZz9cIilcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgV29ybGRQb3NpdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBwb3MsIHBvc0VxIH0gZnJvbSBcIi4vV29ybGRQb3NpdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgUG9zaXRpb25TZXQge1xyXG4gIHByaXZhdGUgYXJyOiBXb3JsZFBvc2l0aW9uW10gPSBbXTtcclxuICBjb25zdHJ1Y3RvcihlbnRyaWVzOiBXb3JsZFBvc2l0aW9uW10gPSBbXSkge1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChbeCwgeV0pID0+IHRoaXMuYXJyLnB1c2gocG9zKHgsIHkpKSk7XHJcbiAgfVxyXG4gIGdldCBhcnJheSgpOiBXb3JsZFBvc2l0aW9uW10geyByZXR1cm4gdGhpcy5hcnI7IH1cclxuICBhZGQocG9zaXRpb246IFdvcmxkUG9zaXRpb24pOiB2b2lkIHtcclxuICAgIHRoaXMuYXJyLnB1c2gocG9zaXRpb24pXHJcbiAgfVxyXG4gIGRlbGV0ZShwb3NpdGlvbjogV29ybGRQb3NpdGlvbik6IHZvaWQge1xyXG4gICAgdGhpcy5hcnIgPSB0aGlzLmFyci5maWx0ZXIoYW5vdGhlclBvc2l0aW9uID0+ICFwb3NFcShwb3NpdGlvbiwgYW5vdGhlclBvc2l0aW9uKSk7XHJcbiAgfVxyXG4gIGhhcyhwb3NpdGlvbjogV29ybGRQb3NpdGlvbik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYXJyLmZpbHRlcihwID0+IHBvc0VxKHAsIHBvc2l0aW9uKSkubGVuZ3RoID4gMDtcclxuICB9XHJcbiAgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuYXJyLmxlbmd0aFxyXG4gIH1cclxuICBlbXB0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNpemUoKSA9PT0gMFxyXG4gIH1cclxuXHJcbiAgbWVyZ2Uob3RoZXI6IFBvc2l0aW9uU2V0KTogUG9zaXRpb25TZXQge1xyXG4gICAgY29uc3QgbWVyZ2VkID0gbmV3IFBvc2l0aW9uU2V0KClcclxuICAgIGZvciAoY29uc3QgcG9zaXRpb24gb2YgdGhpcy5hcnJheSkge1xyXG4gICAgICBpZiAoIW1lcmdlZC5oYXMocG9zaXRpb24pKSB7XHJcbiAgICAgICAgbWVyZ2VkLmFkZChwb3NpdGlvbilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBwb3NpdGlvbiBvZiBvdGhlci5hcnJheSkge1xyXG4gICAgICBpZiAoIW1lcmdlZC5oYXMocG9zaXRpb24pKSB7XHJcbiAgICAgICAgbWVyZ2VkLmFkZChwb3NpdGlvbilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1lcmdlZDtcclxuICB9XHJcblxyXG4gIGdldCBmcmluZ2UoKTogUG9zaXRpb25TZXQge1xyXG4gICAgY29uc3QgdGhlRnJpbmdlID0gbmV3IFBvc2l0aW9uU2V0KClcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcG9zID0gdGhpcy5hcnJbaV1cclxuICAgICAgZm9yIChjb25zdCBuZWlnaGJvciBvZiBQb3NpdGlvblNldC5uZWlnaGJvcnNPZihwb3MpLmFycmF5KSB7XHJcbiAgICAgICAgaWYgKCF0aGVGcmluZ2UuaGFzKG5laWdoYm9yKSkge1xyXG4gICAgICAgICAgdGhlRnJpbmdlLmFkZChuZWlnaGJvcilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGVGcmluZ2VcclxuICB9XHJcblxyXG4gIHN0YXRpYyBuZWlnaGJvcnNPZihsb2NhdGlvbjogV29ybGRQb3NpdGlvbik6IFBvc2l0aW9uU2V0IHtcclxuICAgIGNvbnN0IFt4LHldID0gbG9jYXRpb25cclxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IG5ldyBQb3NpdGlvblNldCgpO1xyXG4gICAgcG9zaXRpb25zLmFkZChwb3MoeCx5KzEpKVxyXG4gICAgcG9zaXRpb25zLmFkZChwb3MoeCx5LTEpKVxyXG4gICAgcG9zaXRpb25zLmFkZChwb3MoeCsxLHkpKVxyXG4gICAgcG9zaXRpb25zLmFkZChwb3MoeC0xLHkpKVxyXG4gICAgcmV0dXJuIHBvc2l0aW9uc1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBXb3JsZFBvc2l0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbi8vIEEgdmVyeSBiYXNpYyBncmlkIHRoYXQgZG9lc24ndCB3b3JyeSBhYm91dCBib3VuZHMgb3IgaW5kZXhpbmcgZXRjXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVHcmlkPFQ+IHtcclxuICB2YWx1ZXM6IFRbXVtdID0gW107XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2YWx1ZVdoZW5VbmRlZmluZWQ6IFQgPSB1bmRlZmluZWQpIHsgfVxyXG4gIHNldChwb3NpdGlvbjogV29ybGRQb3NpdGlvbiwgdmFsdWU6IFQpOiB2b2lkIHtcclxuICAgIGNvbnN0IFtweCwgcHldID0gcG9zaXRpb247XHJcbiAgICB0aGlzLnZhbHVlc1tweV0gPSB0aGlzLnZhbHVlc1tweV0gfHwgW107XHJcbiAgICB0aGlzLnZhbHVlc1tweV1bcHhdID0gdmFsdWU7XHJcbiAgfVxyXG4gIGF0KHBvc2l0aW9uOiBXb3JsZFBvc2l0aW9uKTogVCB7XHJcbiAgICBjb25zdCBbcHgsIHB5XSA9IHBvc2l0aW9uO1xyXG4gICAgdGhpcy52YWx1ZXNbcHldID0gdGhpcy52YWx1ZXNbcHldIHx8IFtdO1xyXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1tweV1bcHhdO1xyXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmFsdWVXaGVuVW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2FydG9ncmFtIH0gZnJvbSBcIi4uL21vZGVscy9DYXJ0b2dyYW1cIjtcclxuaW1wb3J0IHsgUGF3biwgRGltZW5zaW9ucywgVmVnZXRhdGlvbiwgV29ybGRQb3NpdGlvbiwgU2lnaWwsIE1hdGVyaWFsLCBBY3Rpdml0eSwgU3RydWN0dXJlIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tIFwiLi9HcmlkXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRvciB9IGZyb20gXCIuL05hdmlnYXRvclwiO1xyXG5pbXBvcnQgeyBTaW1wbGVHcmlkIH0gZnJvbSBcIi4vU2ltcGxlR3JpZFwiO1xyXG5pbXBvcnQgeyBwaWNrIH0gZnJvbSBcIi4uL3V0aWwvcGlja1wiO1xyXG5pbXBvcnQgeyBJTklUSUFMX1BBV05fQ09VTlQsIERXQVJWRU5fTEFOR1VBR0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHNodWZmbGUgfSBmcm9tIFwiLi4vdXRpbC9zaHVmZmxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV29ybGQge1xyXG4gIHB1YmxpYyBwYXduczogUGF3bltdXHJcbiAgcHJpdmF0ZSBtYXA6IENhcnRvZ3JhbVxyXG4gIHByaXZhdGUgbmF2OiBOYXZpZ2F0b3JcclxuICBcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGRpbWVuc2lvbnM6IERpbWVuc2lvbnMsIHB1YmxpYyBpbml0aWFsUGF3bkNvdW50OiBudW1iZXIgPSBJTklUSUFMX1BBV05fQ09VTlQpIHtcclxuICAgIHRoaXMubWFwID0gbmV3IENhcnRvZ3JhbShkaW1lbnNpb25zKTtcclxuICAgIHRoaXMubmF2ID0gbmV3IE5hdmlnYXRvcihkaW1lbnNpb25zLCBwb3NpdGlvbiA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmlzQmxvY2tlZChwb3NpdGlvbilcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHBhd25Qb3NpdGlvbnMgPSB0aGlzLm1hcC5waWNrQ2xlYXJMb2NhdGlvbnMoaW5pdGlhbFBhd25Db3VudClcclxuICAgIHRoaXMucGF3bnMgPSBbXVxyXG4gICAgY29uc3QgbGFuZ3VhZ2UgPSBEV0FSVkVOX0xBTkdVQUdFXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluaXRpYWxQYXduQ291bnQ7IGkrKykge1xyXG4gICAgICBjb25zdCBwYXduTmFtZSA9IHBpY2soLi4ubGFuZ3VhZ2Uuc3RlbXMpICsgcGljayguLi5sYW5ndWFnZS5zdWZmaXhlcylcclxuICAgICAgdGhpcy5wYXducy5wdXNoKCBcclxuICAgICAgICB0aGlzLm1ha2VQYXduKHBhd25OYW1lLCBwYXduUG9zaXRpb25zW2ldKVxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgd2lkdGgoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMuZGltZW5zaW9uc1swXSB9XHJcbiAgZ2V0IGhlaWdodCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5kaW1lbnNpb25zWzFdIH1cclxuXHJcbiAgLy8gZ2V0IHRlcnJhaW4oKTogR3JpZDxUZXJyYWluPiB7IHJldHVybiB0aGlzLm1hcC50ZXJyYWluIH1cclxuICBnZXQgdmVnZXRhdGlvbigpOiBHcmlkPFZlZ2V0YXRpb24+IHsgcmV0dXJuIHRoaXMubWFwLnZlZ2V0YXRpb24gfVxyXG4gIGdldCBzaWdpbHMoKTogR3JpZDxTaWdpbD4geyByZXR1cm4gdGhpcy5tYXAuc2lnaWxzIH1cclxuICBnZXQgcmF3TWF0ZXJpYWwoKTogR3JpZDxNYXRlcmlhbD4geyByZXR1cm4gdGhpcy5tYXAucmF3TWF0ZXJpYWwgfSBcclxuICBnZXQgcmF3TWF0ZXJpYWxDb3VudCgpOiBTaW1wbGVHcmlkPG51bWJlcj4geyByZXR1cm4gdGhpcy5tYXAucmF3TWF0ZXJpYWxDb3VudCB9IFxyXG4gIGdldCBwbGFubmVkU3RydWN0dXJlKCk6IEdyaWQ8U3RydWN0dXJlPiB7IHJldHVybiB0aGlzLm1hcC5wbGFubmVkU3RydWN0dXJlIH1cclxuICBnZXQgcGxhbm5lZFN0cnVjdHVyZU1hdGVyaWFsKCk6IEdyaWQ8TWF0ZXJpYWw+IHsgcmV0dXJuIHRoaXMubWFwLnBsYW5uZWRTdHJ1Y3R1cmVNYXRlcmlhbCB9XHJcblxyXG4gIG1ha2VQYXduID0gKG5hbWU6IHN0cmluZywgcG9zOiBXb3JsZFBvc2l0aW9uKTogUGF3biA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBwb3MsXHJcbiAgICAgIC8vIHBvczogdGhpcy5tYXAucGlja1JhbmRvbUNsZWFyTG9jYXRpb24oKSxcclxuICAgICAgaW52ZW50b3J5OiBbXSxcclxuICAgICAgcHJpb3JpdGllczogc2h1ZmZsZSgnbG9nZ2luZycsICdoYXVsaW5nJywgJ2J1aWxkaW5nJykgYXMgQWN0aXZpdHlbXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yRWFjaFBvc2l0aW9uKGZuOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5oZWlnaHQ7IHkrKykge1xyXG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMud2lkdGg7IHgrKykge1xyXG4gICAgICAgIGZuKHgseSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2hvcnRlc3RQYXRoKHNyYzogV29ybGRQb3NpdGlvbiwgZHN0OiBXb3JsZFBvc2l0aW9uKTogV29ybGRQb3NpdGlvbltdIHtcclxuICAgIGNvbnN0IHsgcGF0aCB9ID0gdGhpcy5uYXYuYVN0YXIoc3JjLCBkc3QpXHJcbiAgICByZXR1cm4gcGF0aFxyXG4gIH1cclxuXHJcbiAgaXNCbG9ja2VkKHBvc2l0aW9uOiBXb3JsZFBvc2l0aW9uKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXAudmVnZXRhdGlvbi5hdChwb3NpdGlvbikgPT09ICd0cmVlJ1xyXG4gIH1cclxufSIsImltcG9ydCB7IFdvcmxkUG9zaXRpb24sIERpcmVjdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvcyA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IFdvcmxkUG9zaXRpb24gPT4ge1xyXG4gIHJldHVybiBbeCwgeV0gYXMgV29ybGRQb3NpdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRpcmVjdGlvbkZyb20gPSAoc3JjOiBXb3JsZFBvc2l0aW9uLCBkc3Q6IFdvcmxkUG9zaXRpb24pOiBEaXJlY3Rpb24gPT4ge1xyXG4gIGNvbnN0IFtzeCwgc3ldID0gc3JjXHJcbiAgY29uc3QgW2R4LCBkeV0gPSBkc3RcclxuICBpZiAoc3ggPT09IGR4KSB7XHJcbiAgICBpZiAoc3kgPiBkeSkgeyByZXR1cm4gJ25vcnRoJyB9XHJcbiAgICBpZiAoc3kgPCBkeSkgeyByZXR1cm4gJ3NvdXRoJyB9XHJcbiAgfSBlbHNlIGlmIChzeSA9PT0gZHkpIHtcclxuICAgIGlmIChzeCA+IGR4KSB7IHJldHVybiAnd2VzdCcgfVxyXG4gICAgaWYgKHN4IDwgZHgpIHsgcmV0dXJuICdlYXN0JyB9XHJcbiAgfVxyXG4gIHRocm93IG5ldyBFcnJvcignUG9zaXRpb25zIGFyZSBub3QgbmVpZ2hib3JzOiAnICsgc3JjICsgJyAvICcgKyBkc3QpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhZGp1c3RQb3NpdGlvbiA9IChzcmM6IFdvcmxkUG9zaXRpb24sIGRpcjogRGlyZWN0aW9uKTogV29ybGRQb3NpdGlvbiA9PiB7XHJcbiAgY29uc3QgW3N4LHN5XSA9IHNyY1xyXG4gIGlmIChkaXIgPT09ICdlYXN0Jykge1xyXG4gICAgcmV0dXJuIHBvcyhzeCsxLHN5KVxyXG4gIH0gZWxzZSBpZiAoZGlyID09PSAnd2VzdCcpIHtcclxuICAgIHJldHVybiBwb3Moc3gtMSxzeSlcclxuICB9IGVsc2UgaWYgKGRpciA9PT0gJ25vcnRoJykge1xyXG4gICAgcmV0dXJuIHBvcyhzeCxzeS0xKVxyXG4gIH0gZWxzZSBpZiAoZGlyID09PSAnc291dGgnKSB7XHJcbiAgICByZXR1cm4gcG9zKHN4LHN5KzEpXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB3aXRoaW5Cb3VuZHMgPSAoc3JjOiBXb3JsZFBvc2l0aW9uLCBkaW1zOiBbbnVtYmVyLCBudW1iZXJdKTogYm9vbGVhbiA9PiB7XHJcbiAgY29uc3QgW3N4LHN5XSA9IHNyY1xyXG4gIGNvbnN0IFt3LGhdID0gZGltc1xyXG4gIHJldHVybiBzeCA+PSAwICYmIHN4IDwgdyAmJiBzeSA+PSAwICYmIHN5IDwgaFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmVpZ2hib3JzT2ZQb3NpdGlvbiA9IChzcmM6IFdvcmxkUG9zaXRpb24sIGRpbXM6IFtudW1iZXIsIG51bWJlcl0pOiBXb3JsZFBvc2l0aW9uW10gPT4ge1xyXG4gIGNvbnN0IFtzeCxzeV0gPSBzcmNcclxuICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgICAgcG9zKHN4LCBzeS0xKSwgXHJcbiAgICBwb3Moc3gtMSxzeSksICAgICAgICAgICAgICAgICAgcG9zKHN4KzEsc3kpLFxyXG4gICAgICAgICAgICAgICAgICAgcG9zKHN4LCBzeSsxKSwgXHJcbiAgXS5maWx0ZXIocCA9PiB3aXRoaW5Cb3VuZHMocCwgZGltcykpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBuZWlnaGJvcnNPZlBvc2l0aW9uUGx1c0RpYWdvbmFscyA9IChzcmM6IFdvcmxkUG9zaXRpb24sIGRpbXM6IFtudW1iZXIsIG51bWJlcl0pOiBXb3JsZFBvc2l0aW9uW10gPT4ge1xyXG4gIGNvbnN0IFtzeCxzeV0gPSBzcmNcclxuICByZXR1cm4gW1xyXG4gICAgcG9zKHN4LTEsIHN5LTEpLCBwb3Moc3gsIHN5LTEpLCAgcG9zKHN4KzEsIHN5LTEpLFxyXG4gICAgcG9zKHN4LTEsc3kpLCAgICAgICAgICAgICAgICAgICAgcG9zKHN4KzEsc3kpLFxyXG4gICAgcG9zKHN4LTEsc3krMSksICBwb3Moc3gsIHN5KzEpLCAgcG9zKHN4KzEsIHN5KzEpLFxyXG4gIF0uZmlsdGVyKHAgPT4gd2l0aGluQm91bmRzKHAsIGRpbXMpKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcG9zRXEgPSAoYTogV29ybGRQb3NpdGlvbiwgYjogV29ybGRQb3NpdGlvbik6IGJvb2xlYW4gPT4ge1xyXG4gIGlmIChhICYmIGIpIHtcclxuICBjb25zdCBbYXgsYXldID0gYVxyXG4gIGNvbnN0IFtieCxieV0gPSBiXHJcbiAgcmV0dXJuIGF4ID09PSBieCAmJiBheSA9PT0gYnlcclxuICB9IGVsc2UgeyByZXR1cm4gZmFsc2V9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXRoRXEgPSAoYTogV29ybGRQb3NpdGlvbltdLCBiOiBXb3JsZFBvc2l0aW9uW10pOiBib29sZWFuID0+IHtcclxuICBpZiAoIShhLmxlbmd0aCA9PT0gYi5sZW5ndGgpKSB7IHJldHVybiBmYWxzZSB9XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoIXBvc0VxKGFbaV0sIGJbaV0pKSB7IHJldHVybiBmYWxzZSB9XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkaXN0YW5jZUJldHdlZW4gPSAoYTogV29ybGRQb3NpdGlvbiwgYjogV29ybGRQb3NpdGlvbik6IG51bWJlciA9PiB7XHJcbiAgY29uc3QgW2F4LGF5XSA9IGFcclxuICBjb25zdCBbYngsYnldID0gYlxyXG4gIGNvbnN0IGR4ID0gYXggLSBieFxyXG4gIGNvbnN0IGR5ID0gYXkgLSBieVxyXG4gIGNvbnN0IGQgPSBNYXRoLnNxcnQoKGR4KmR4KSArIChkeSpkeSkpXHJcbiAgLy8gY29uc29sZS5sb2coXCJDb21wdXRlIGRpc3RhbmNlIGJldHdlZW5cIiwgYSwgYiwgZClcclxuICByZXR1cm4gZCBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGJ5RGlzdGFuY2VGcm9tID0gKHRhcmdldDogV29ybGRQb3NpdGlvbikgPT4gKGE6IFdvcmxkUG9zaXRpb24sIGI6IFdvcmxkUG9zaXRpb24pOiBudW1iZXIgPT4ge1xyXG4gIHJldHVybiBkaXN0YW5jZUJldHdlZW4odGFyZ2V0LCBhKSA+IGRpc3RhbmNlQmV0d2Vlbih0YXJnZXQsIGIpID8gMSA6IC0xXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhcmVhQ29udGFpbnMgPSAodG9wTGVmdDogV29ybGRQb3NpdGlvbiwgYm90dG9tUmlnaHQ6IFdvcmxkUG9zaXRpb24sIHRyaWFsUG9zOiBXb3JsZFBvc2l0aW9uKTogYm9vbGVhbiA9PiB7XHJcbiAgY29uc3QgW2F4LCBheV0gPSB0b3BMZWZ0XHJcbiAgY29uc3QgW2J4LCBieV0gPSBib3R0b21SaWdodFxyXG4gIGNvbnN0IFt4LHldID0gdHJpYWxQb3NcclxuICBjb25zdCBjb250YWluZWQgPSBheCA8PSB4ICYmIHggPD0gYnggJiYgYXkgPD0geSAmJiB5IDw9IGJ5XHJcbiAgLy8gY29uc29sZS5sb2coXCJEb2VzIGFyZWEgXCIgKyBheCArIFwiLCBcIiArIGF5ICsgXCIgdG8gXCIgKyBieCArIFwiLCBcIiArIGJ5ICsgXCIgY29udGFpbiBcIiArIHggKyBcIiwgXCIgKyB5ICsgXCI/XCIsIGNvbnRhaW5lZClcclxuICByZXR1cm4gY29udGFpbmVkXHJcbn0iLCJpbXBvcnQgeyBQYXduVG9rZW4gfSBmcm9tIFwiLi4vLi4vYWN0b3JzL1Bhd25Ub2tlblwiO1xyXG5pbXBvcnQgeyBieURpc3RhbmNlRnJvbSwgbmVpZ2hib3JzT2ZQb3NpdGlvbiB9IGZyb20gXCIuLi9Xb3JsZFBvc2l0aW9uXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vR2FtZVwiO1xyXG5pbXBvcnQgeyBBY3Rpdml0eSwgSm9iRGV0YWlsIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IFBvc2l0aW9uU2V0IH0gZnJvbSBcIi4uL1Bvc2l0aW9uU2V0XCI7XHJcbmltcG9ydCB7IElBY3Rpdml0eSB9IGZyb20gXCIuLi9JQWN0aXZpdHlcIjtcclxuaW1wb3J0IHsgVFJFRV9DVVRfRFVSQVRJT04gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3V0VGltYmVyIGltcGxlbWVudHMgSUFjdGl2aXR5IHtcclxuICB0aXRsZTogQWN0aXZpdHkgPSAnbG9nZ2luZyc7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnYW1lOiBHYW1lKSB7IH1cclxuXHJcbiAgcHJpdmF0ZSBhc3NpZ25lZFRyZWVQb3NpdGlvbnM6IFBvc2l0aW9uU2V0ID0gbmV3IFBvc2l0aW9uU2V0KCk7XHJcblxyXG4gIGlzSm9iQXZhaWxhYmxlKHRva2VuOiBQYXduVG9rZW4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHRyZWVQb3NpdGlvbnMgPSB0aGlzLmdhbWUubWFya2VkVHJlZVBvc2l0aW9uc1xyXG4gICAgICAuZmlsdGVyKHBvcyA9PiAhdGhpcy5hc3NpZ25lZFRyZWVQb3NpdGlvbnMuaGFzKHBvcykpXHJcbiAgICAgIC5zb3J0KGJ5RGlzdGFuY2VGcm9tKHRva2VuLnBhd24ucG9zKSlcclxuICAgICAgLmZpbmQocG9zID0+IG5laWdoYm9yc09mUG9zaXRpb24ocG9zLCB0aGlzLmdhbWUuZGltcylcclxuICAgICAgICAuZmlsdGVyKG4gPT4gIXRoaXMuZ2FtZS5pc0Jsb2NrZWQobikpXHJcbiAgICAgICAgLmZpbmQobiA9PiB0aGlzLmdhbWUuY2FuUGF0aEJldHdlZW4odG9rZW4ucGF3bi5wb3MsIG4pKVxyXG4gICAgICApO1xyXG4gICAgY29uc3QgYXZhaWxhYmxlID0gdHJlZVBvc2l0aW9ucyAvLy5sZW5ndGggPiAwO1xyXG4gICAgcmV0dXJuIEJvb2xlYW4oYXZhaWxhYmxlKTtcclxuICB9XHJcblxyXG4gIGZpbmRKb2IodG9rZW46IFBhd25Ub2tlbik6IEpvYkRldGFpbCB7XHJcbiAgICAvLyBpZiAodGhpcy5nYW1lLnRpY2tzICUgNSAhPT0gMCkgcmV0dXJuO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCItLS0+IEZpbmQgdGltYmVyIGpvYiBmb3IgXCIgKyB0b2tlbi5wYXduLm5hbWUpXHJcbiAgICBjb25zdCB0cmVlUG9zaXRpb25zID0gWy4uLnRoaXMuZ2FtZS5tYXJrZWRUcmVlUG9zaXRpb25zXVxyXG4gICAgICAuZmlsdGVyKHBvcyA9PiAhdGhpcy5hc3NpZ25lZFRyZWVQb3NpdGlvbnMuaGFzKHBvcykpXHJcblxyXG4gICAgaWYgKHRyZWVQb3NpdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCB0cmVlUG9zaXRpb24gPSB0cmVlUG9zaXRpb25zXHJcbiAgICAgICAgLnNvcnQoYnlEaXN0YW5jZUZyb20odG9rZW4ucGF3bi5wb3MpKVxyXG4gICAgICAgIC5maW5kKHBvcyA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gbmVpZ2hib3JzT2ZQb3NpdGlvbihwb3MsIHRoaXMuZ2FtZS5kaW1zKVxyXG4gICAgICAgICAgICAuZmlsdGVyKG4gPT4gIXRoaXMuZ2FtZS5pc0Jsb2NrZWQobikpXHJcbiAgICAgICAgICAgIC5maW5kKG4gPT4gdGhpcy5nYW1lLmNhblBhdGhCZXR3ZWVuKHRva2VuLnBhd24ucG9zLCBuKSlcclxuICAgICAgICB9KVxyXG4gICAgICBpZiAodHJlZVBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgbmVpZ2hib3IgPSBuZWlnaGJvcnNPZlBvc2l0aW9uKHRyZWVQb3NpdGlvbiwgdGhpcy5nYW1lLmRpbXMpXHJcbiAgICAgICAgICAuZmlsdGVyKG4gPT4gIXRoaXMuZ2FtZS5pc0Jsb2NrZWQobikpXHJcbiAgICAgICAgICAuc29ydChieURpc3RhbmNlRnJvbSh0b2tlbi5wYXduLnBvcykpXHJcbiAgICAgICAgICAuZmluZChuID0+IHRoaXMuZ2FtZS5jYW5QYXRoQmV0d2Vlbih0b2tlbi5wYXduLnBvcywgbikpXHJcbiAgICAgICAgaWYgKG5laWdoYm9yKSB7XHJcbiAgICAgICAgICB0aGlzLmFzc2lnbmVkVHJlZVBvc2l0aW9ucy5hZGQodHJlZVBvc2l0aW9uKTtcclxuICAgICAgICAgIGNvbnN0IHRyYXZlbERlc3RpbmF0aW9uID0gbmVpZ2hib3JcclxuICAgICAgICAgIHJldHVybiB7IGFjdGl2aXR5VGFyZ2V0OiB0cmVlUG9zaXRpb24sIHRyYXZlbERlc3RpbmF0aW9uIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBwZXJmb3JtKHRva2VuOiBQYXduVG9rZW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGF3YWl0IHRva2VuLmFjdGlvbnMuZGVsYXkoVFJFRV9DVVRfRFVSQVRJT04pLmFzUHJvbWlzZSgpO1xyXG4gICAgdGhpcy5nYW1lLmNob3BUcmVlKHRva2VuLnBhd24uYWN0aXZpdHlUYXJnZXQpO1xyXG4gICAgdGhpcy5hc3NpZ25lZFRyZWVQb3NpdGlvbnMuZGVsZXRlKHRva2VuLnBhd24uYWN0aXZpdHlUYXJnZXQpO1xyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnMgKi9cclxuaW1wb3J0IHsgSUFjdGl2aXR5IH0gZnJvbSBcIi4uL0lBY3Rpdml0eVwiO1xyXG5pbXBvcnQgeyBQYXduVG9rZW4gfSBmcm9tIFwiLi4vLi4vYWN0b3JzL1Bhd25Ub2tlblwiO1xyXG5pbXBvcnQgeyBKb2JEZXRhaWwsIEFjdGl2aXR5LCBXb3JsZFBvc2l0aW9uIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vR2FtZVwiO1xyXG5pbXBvcnQgeyBieURpc3RhbmNlRnJvbSB9IGZyb20gXCIuLi9Xb3JsZFBvc2l0aW9uXCI7XHJcbmltcG9ydCB7IFBvc2l0aW9uU2V0IH0gZnJvbSBcIi4uL1Bvc2l0aW9uU2V0XCI7XHJcbmltcG9ydCB7IElOVkVOVE9SWV9MSU1JVCwgU1RBQ0tfTUFYIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhhdWwgaW1wbGVtZW50cyBJQWN0aXZpdHkge1xyXG4gIHRpdGxlOiBBY3Rpdml0eSA9IFwiaGF1bGluZ1wiO1xyXG5cclxuICBwcml2YXRlIGFzc2lnbmVkSXRlbUxvY2F0aW9uczogUG9zaXRpb25TZXQgPSBuZXcgUG9zaXRpb25TZXQoKTtcclxuICAvLyBwcml2YXRlIGFzc2lnbmVkWm9uZUxvY2F0aW9uczogUG9zaXRpb25TZXQgPSBuZXcgUG9zaXRpb25TZXQoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnYW1lOiBHYW1lKSB7fVxyXG5cclxuICBnZXQgb3V0c3RhbmRpbmdJdGVtTG9jYXRpb25zKCk6IFdvcmxkUG9zaXRpb25bXSB7XHJcbiAgICBjb25zdCB0aW1iZXIgPSB0aGlzLmdhbWUucmF3TWF0ZXJpYWxMb2NhdGlvbnMoJ3dvb2QnKVxyXG4gICAgLy8gY29uc29sZS5sb2coXCItLS0+IE91dHN0YW5kaW5nIHdvb2QgaXMgYXQgXCIsIHRpbWJlcilcclxuICAgIHJldHVybiB0aW1iZXIuZmlsdGVyKGxvY2F0aW9uID0+XHJcbiAgICAgICF0aGlzLmdhbWUuaXNMb2NhdGlvbldpdGhpbkFueVpvbmUobG9jYXRpb24pXHJcbiAgICApLmZpbHRlcihsb2NhdGlvbiA9PiAhdGhpcy5hc3NpZ25lZEl0ZW1Mb2NhdGlvbnMuaGFzKGxvY2F0aW9uKSlcclxuICB9XHJcblxyXG4gIGdldCBmcmVlWm9uZUxvY2F0aW9ucygpOiBXb3JsZFBvc2l0aW9uW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2FtZS5maW5kVW5maWxsZWRab25lUG9zaXRpb25zKClcclxuICAgICAgLy8gLmZpbHRlcihsb2NhdGlvbiA9PiAhdGhpcy5hc3NpZ25lZFpvbmVMb2NhdGlvbnMuaGFzKGxvY2F0aW9uKSlcclxuICB9XHJcblxyXG4gIGlzSm9iQXZhaWxhYmxlKHRva2VuOiBQYXduVG9rZW4pOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGNhbkdhdGhlciA9ICh0aGlzLm91dHN0YW5kaW5nSXRlbUxvY2F0aW9ucy5sZW5ndGggPiAwICYmICF0aGlzLmdhbWUuYXJlQWxsWm9uZXNGdWxsKCkpXHJcbiAgICBjb25zdCBjYW5TdG9yZSA9ICghdGhpcy5nYW1lLmFyZUFsbFpvbmVzRnVsbCgpICYmIHRva2VuLnBhd24uaW52ZW50b3J5Lmxlbmd0aCA+IDApXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIi0tLT4gSXMgYSBoYXVsaW5nIGpvYiBhdmFpbGFibGUgZm9yIFwiICsgdG9rZW4ucGF3bi5uYW1lICsgXCI/XCIsIHsgY2FuR2F0aGVyLCBjYW5TdG9yZSB9KTtcclxuICAgIHJldHVybiBjYW5HYXRoZXIgfHwgY2FuU3RvcmVcclxuICB9XHJcblxyXG4gIGZpbmRKb2IodG9rZW46IFBhd25Ub2tlbik6IEpvYkRldGFpbCB7XHJcbiAgICBjb25zdCBoYXNSb29tSW5JbnZlbnRvcnkgPSB0b2tlbi5wYXduLmludmVudG9yeS5sZW5ndGggPCBJTlZFTlRPUllfTElNSVRcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiLS0tPiBEb2VzIFwiICsgdG9rZW4ucGF3bi5uYW1lICArIFwiIGhhdmUgcm9vbSBpbiBpbnZlbnRvcnk/IFwiICsgaGFzUm9vbUluSW52ZW50b3J5KVxyXG4gICAgY29uc3QgdGhlcmVFeGlzdE91dHN0YW5kaW5nSXRlbXMgPSB0aGlzLm91dHN0YW5kaW5nSXRlbUxvY2F0aW9ucy5sZW5ndGggPiAwXHJcbiAgICBpZiAoaGFzUm9vbUluSW52ZW50b3J5ICYmIHRoZXJlRXhpc3RPdXRzdGFuZGluZ0l0ZW1zKSB7XHJcbiAgICAgIGNvbnN0IG5lYXJlc3RBY2Nlc3NpYmxlSXRlbUxvY2F0aW9uID0gdGhpcy5vdXRzdGFuZGluZ0l0ZW1Mb2NhdGlvbnNcclxuICAgICAgICAuc29ydChieURpc3RhbmNlRnJvbSh0b2tlbi5wYXduLnBvcykpXHJcbiAgICAgICAgLmZpbmQocG9zID0+IHRoaXMuZ2FtZS5jYW5QYXRoQmV0d2Vlbihwb3MsIHRva2VuLnBhd24ucG9zKSlcclxuICAgICAgaWYgKG5lYXJlc3RBY2Nlc3NpYmxlSXRlbUxvY2F0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hc3NpZ25lZEl0ZW1Mb2NhdGlvbnMuYWRkKG5lYXJlc3RBY2Nlc3NpYmxlSXRlbUxvY2F0aW9uKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBhY3Rpdml0eVRhcmdldDogbmVhcmVzdEFjY2Vzc2libGVJdGVtTG9jYXRpb24sXHJcbiAgICAgICAgICB0cmF2ZWxEZXN0aW5hdGlvbjogbmVhcmVzdEFjY2Vzc2libGVJdGVtTG9jYXRpb24sXHJcbiAgICAgICAgICBqb2JTdWJ0eXBlOiAnaGF1bC1nYXRoZXInXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHRva2VuLnBhd24uaW52ZW50b3J5Lmxlbmd0aCA+IDApIHsgLy99ICYmICF0aGlzLmdhbWUuYXJlQWxsWm9uZXNGdWxsKCkpIHtcclxuICAgICAgLy8gZmluZCBhbiB1bi1maWxsZWQgem9uZSBzbG90Li4uXHJcbiAgICAgIGNvbnN0IGZyZWVab25lU3BhY2UgPSB0aGlzLmZyZWVab25lTG9jYXRpb25zXHJcbiAgICAgICAgLnNvcnQoYnlEaXN0YW5jZUZyb20odG9rZW4ucGF3bi5wb3MpKVxyXG4gICAgICAgIC5maW5kKHBvcyA9PiB0aGlzLmdhbWUuY2FuUGF0aEJldHdlZW4ocG9zLCB0b2tlbi5wYXduLnBvcykpXHJcbiAgICAgIGlmIChmcmVlWm9uZVNwYWNlKSB7XHJcbiAgICAgICAgLy8gdGhpcy5hc3NpZ25lZFpvbmVMb2NhdGlvbnMuYWRkKGZyZWVab25lU3BhY2UpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGFjdGl2aXR5VGFyZ2V0OiBmcmVlWm9uZVNwYWNlLFxyXG4gICAgICAgICAgdHJhdmVsRGVzdGluYXRpb246IGZyZWVab25lU3BhY2UsXHJcbiAgICAgICAgICBqb2JTdWJ0eXBlOiAnaGF1bC1zdG9yZSdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHBlcmZvcm0odG9rZW46IFBhd25Ub2tlbik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKHRva2VuLnBhd24uam9iU3VidHlwZSA9PT0gJ2hhdWwtZ2F0aGVyJykge1xyXG4gICAgICBjb25zdCB7IGFjdGl2aXR5VGFyZ2V0IH0gPSB0b2tlbi5wYXduXHJcbiAgICAgIGNvbnN0IG1heFRvQWNjZXB0ID0gSU5WRU5UT1JZX0xJTUlUIC0gdG9rZW4ucGF3bi5pbnZlbnRvcnkubGVuZ3RoXHJcbiAgICAgIGNvbnN0IHsga2luZCwgYW1vdW50IH0gPSB0aGlzLmdhbWUuZ2F0aGVyUmVzb3VyY2UoYWN0aXZpdHlUYXJnZXQsIG1heFRvQWNjZXB0KVxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XHJcbiAgICAgICAgdG9rZW4ucGF3bi5pbnZlbnRvcnkucHVzaChraW5kKVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYXNzaWduZWRJdGVtTG9jYXRpb25zLmRlbGV0ZShhY3Rpdml0eVRhcmdldClcclxuICAgIH0gZWxzZSBpZiAodG9rZW4ucGF3bi5qb2JTdWJ0eXBlID09PSAnaGF1bC1zdG9yZScpIHtcclxuICAgICAgY29uc3QgeyBhY3Rpdml0eVRhcmdldCB9ID0gdG9rZW4ucGF3blxyXG4gICAgICBjb25zdCBraW5kID0gdGhpcy5nYW1lLnJhd01hdGVyaWFsS2luZEF0TG9jYXRpb24oYWN0aXZpdHlUYXJnZXQpIC8vPT09ICdub3RoaW5nJ1xyXG4gICAgICAgID8gdGhpcy5nYW1lLnJhd01hdGVyaWFsS2luZEF0TG9jYXRpb24oYWN0aXZpdHlUYXJnZXQpXHJcbiAgICAgICAgOiB0b2tlbi5wYXduLmludmVudG9yeVswXVxyXG4gICAgICBjb25zdCBhbW91bnRMb2NhdGlvbkNhbkFjY2VwdCA9IFNUQUNLX01BWCAtIHRoaXMuZ2FtZS5yYXdNYXRlcmlhbENvdW50QXRMb2NhdGlvbihhY3Rpdml0eVRhcmdldClcclxuICAgICAgbGV0IGFtb3VudFRvU3RvcmUgPSB0b2tlbi5wYXduLmludmVudG9yeS5maWx0ZXIoayA9PiBraW5kID09PSBrKS5sZW5ndGhcclxuICAgICAgaWYgKGFtb3VudFRvU3RvcmUgPiBhbW91bnRMb2NhdGlvbkNhbkFjY2VwdCkge1xyXG4gICAgICAgIGFtb3VudFRvU3RvcmUgPSBhbW91bnRMb2NhdGlvbkNhbkFjY2VwdFxyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50VG9TdG9yZTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXhUb1JlbW92ZSA9IHRva2VuLnBhd24uaW52ZW50b3J5LmZpbmRJbmRleChrID0+IGtpbmQgPT09IGspXHJcbiAgICAgICAgdG9rZW4ucGF3bi5pbnZlbnRvcnkgPSB0b2tlbi5wYXduLmludmVudG9yeS5maWx0ZXIoKF8saSkgPT4gaSE9PWluZGV4VG9SZW1vdmUpXHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5nYW1lLnN0b3JlUmVzb3VyY2Uoa2luZCwgYWN0aXZpdHlUYXJnZXQsIGFtb3VudFRvU3RvcmUpXHJcbiAgICAgIC8vIHRoaXMuYXNzaWduZWRab25lTG9jYXRpb25zLmRlbGV0ZShhY3Rpdml0eVRhcmdldClcclxuICAgIH1cclxuICB9XHJcblxyXG59IiwiZXhwb3J0IGNvbnN0IHBpY2sgPSA8VD4oLi4uZWxlbXM6IFRbXSk6IFQgPT4ge1xyXG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoZWxlbXMubGVuZ3RoKSlcclxuICAgIHJldHVybiBlbGVtc1tpbmRleF1cclxufSIsImV4cG9ydCBjb25zdCBzaHVmZmxlID0gPFQ+KC4uLmFycjogVFtdKTogVFtdID0+IGFyci5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAtMSA6IDEpOyIsImV4cG9ydCBjb25zdCB0YWtlOiA8VD4objogbnVtYmVyLCBhcnI6IFRbXSkgPT4gVFtdID0gKG4sIGFycikgPT4ge1xyXG4gIGlmIChuID49IGFyci5sZW5ndGgpIHsgcmV0dXJuIGFyciB9XHJcbiAgY29uc3QgdGFrZW4gPSBbXVxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XHJcbiAgICB0YWtlbi5wdXNoKGFycltpXSlcclxuICB9XHJcbiAgcmV0dXJuIHRha2VuXHJcbn0iLCJpbXBvcnQgeyBGcmVlaG9sZEVuZ2luZSB9IGZyb20gXCIuL0ZyZWVob2xkRW5naW5lXCI7XHJcbmltcG9ydCB7IFBsYXkgfSBmcm9tIFwiLi9mcmVlaG9sZC9QbGF5XCI7XHJcbmltcG9ydCB7IFJlc291cmNlcyB9IGZyb20gXCIuL2ZyZWVob2xkL1Jlc291cmNlc1wiO1xyXG5pbXBvcnQgeyBMb2FkZXIsIENvbG9yIH0gZnJvbSBcImV4Y2FsaWJ1clwiO1xyXG5cclxuY29uc29sZS5sb2coXCJGUkVFSE9MRCAtLSBpbmRleFwiKTtcclxuXHJcbmNvbnN0IGZyZWVob2xkID0gbmV3IEZyZWVob2xkRW5naW5lKCk7XHJcbmNvbnN0IHBsYXkgPSBuZXcgUGxheShmcmVlaG9sZCk7XHJcbmZyZWVob2xkLmJhY2tncm91bmRDb2xvciA9IENvbG9yLmZyb21SR0IoLy8zMCwyMDAsMTUwKSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyMCwxODAsMTQwKSAvL25ldyBDb2xvcig0MCwxMjAsODApO1xyXG5mcmVlaG9sZC5hZGQoJ3BsYXknLCBwbGF5KTtcclxuXHJcbmNvbnN0IGxvYWRlciA9IG5ldyBMb2FkZXIoKTtcclxubG9hZGVyLnN1cHByZXNzUGxheUJ1dHRvbiA9IHRydWVcclxuZm9yIChjb25zdCBrZXkgaW4gUmVzb3VyY2VzKSB7IGxvYWRlci5hZGRSZXNvdXJjZShSZXNvdXJjZXNba2V5XSkgfVxyXG5mcmVlaG9sZC5zdGFydChsb2FkZXIpLnRoZW4oKCkgPT4gZnJlZWhvbGQuZ29Ub1NjZW5lKCdwbGF5JykpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=