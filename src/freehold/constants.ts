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

export const SIGIL_AXE = 1

/////////////////////////////

export const INVENTORY_LIMIT = 3
export const STACK_MAX = 50

export const TREE_CUT_DURATION = 50

export const INITIAL_PAWN_COUNT = 15

/////////////////////////////

export const NAME_INITIAL_SYLLABLES = [
  "Adrah", "Amand", "Arath", "Argel", "Atanat", "Arvel", "Arag", "Adel", "Alat", "Alcar", "Aldar", "Alg", "Ameth",
    "Amar", "Amd", "Amar", "Alf", "Aer", "Breg",
  "B", "Bel", "Belecth", "Borom", "Blanc", "Beleph", "Breg", "Briff", "Brytt", "Bucc", "Bung",
  "Calm", "Castam", "Celeb", "Celand", "Calimeht", "Caranth", "Celeg", "Celeph",
  "Da", "Di", "Dais", "Dur", "Deneth", "Dor", "Dud",
  "Earen", "Ecthel", "Egalm", "Eldac", "Edrah", "Earw", "Elgant", "Elan", "Elat", "Erend",
  "Fastr", "Far", "Filib", "Fean",
  "Isengr", "Isumbr",
  "Glo", "Gild", "Gelm", "Gald", "Glorfind", "Gothm", "Griff", "Grim", "Grimb", "Grithn", "Gr",
  "H", "Ham", "Hur", "Hug", "Halfr", "Hald", "Hard", "Holm",
  "T", "Thor", "Tur", "Tarond", "Thar", "Turg", 
  "L", "Lil",
  "Mabl", "Mor", "Mir", 
  "Primr",
  "S", "Snag",
  "R", "Rum",
  "Valand", "Voronw",
  // "Beo", "Gron", "Sam", "Tim",
  // "Gim", "Glo", "El", "Fi", "Fast",
  // "Fea", "Fara", "Bara", "Boro", "Hur",
  // "Tur", "Isild", "Bilb", "Earen", "Bere",
  // "Di", "Bele", "Calmac", "Da", "Arvel", "Fastr",
]

export const NAME_FINAL_SYLLABLES = [
  "ad", "am", "as", "ast", "ard", "an", "anth", "ar", "arn", "acil", "adoc", "akh",
  "e", "eg", "ed", "en", "ert",
  "i", "im", "in", "ir", "il", "ich", "ion", "iel", "ian", "ie", "ida", "ian", "ine", "imbor", "indor", "ily",
  "o", "om", "on", "or", "orn", "oth", "ob", "og", "ose", "olas", "orm",
  "ur", "ung", "und", "ulas",
  "y", "yst",
  //"n", "li", "well", "wise", "sy", "kin",
  //"son", "nor", "ich", "wulf", "in", "im",
  //"dur", "grim", "hil", "dil", "red", "bo",
  //"mir", "il", "or", "ur"
]