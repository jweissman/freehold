import { Dimensions, Language } from "./types"

export const CELL_SIZE = 16

export const LAND_IMAGES  = [0,1,2,3]
export const WATER_IMAGES = [4,5,6,7]

export const TREE_IMAGES = [0,1]

export const WOOD_STACK_IMAGES = [0]
export const WOOD_PIECE_IMAGES = [4]
// export const IRON_STACK_IMAGES = [1]
// export const IRON_PIECE = [5]

export const MATERIAL_IMAGES = {
  'wood': WOOD_PIECE_IMAGES,
}
export const MATERIAL_STACK_IMAGES = {
  'wood': WOOD_STACK_IMAGES,
}

export const WALL_MASK = [
     // wsen
  0, // 0000 -- no connections
  9, // 0001 -- connected north
  4, // 0010 -- connected east
  14,// 0011 -- connected north + east
  1, // 0100 -- connected south
  8, // 0101 -- connected north-south
  10, // 0110 -- connected south + east
  7, // 0111 -- connected north-south + east
  6, // 1000 -- connected west
  15, // 1001 -- connected west + north
  12, // 1010 -- connected east-west
  2,  // 1011 -- connected east-west + north
  11, // 1100 -- connected west + south
  3, // 1101 -- connected west + north-south
  13,  // 1110 -- connected east-west + south
  5  // 1111 -- all connected
]

export const SIGIL_AXE = 1

/////////////////////////////

export const INVENTORY_LIMIT = 6
export const STACK_MAX = 90

export const TREE_CUT_DURATION = 250

export const INITIAL_PAWN_COUNT = 20
export const WORLD_DIMS = [200,200] as Dimensions
export const TREE_COVER_RATIO = 0.35

export const PATHFINDING_TIMEOUT = 500
/////////////////////////////

export const DWARVEN_LANGUAGE: Language = {
  name: 'Dwarvish',
  // prefixes: ['Ar',],
  stems: [
    'Azagh',
    'Bal', 'Bif', 'Bof', 'Bomb', 'Born',
    'D', 'Dor', 'Dur','Dwal',
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
}

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