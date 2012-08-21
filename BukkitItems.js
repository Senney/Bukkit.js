/**
 * Sourced from https://github.com/ArtaexMedia/MinecraftItems
 * Credit to ArtaexMedia 
 *
 * Updated by Sean Heintz (http://github.com/Senney) for newer versions of Minecraft
 * Added modifiers to items that have them.
 */
 
var Items = {};
 
Items.GetItem = function(value) {
	if (typeof value == 'number' || !isNaN(value)) {
		return this.Items[value];
	} else {
		for (item in this.Items) {
			if (this.Items[item].name == value) {
				return this.Items[item];
			}
		}
	}
}

Items.GetModifier = function(value, mod) {
	if (!value)
		throw "Requires at least 1 argument."

	var item = this.GetItem(value);
	if (item) {
		if (item.modifier) {
			return mod ? item.modifier[mod] : item.modifier;
		}
	}
	
	return undefined;
}

Items.Items = {
	"0": {
		"id": 0,
		"name": "Air",
		"type": 2
	},
	"1": {
		"id": 1,
		"name": "Stone",
		"type": 2
	},
	"2": {
		"id": 2,
		"name": "Grass",
		"type": 2
	},
	"3": {
		"id": 3,
		"name": "Dirt",
		"type": 2
	},
	"4": {
		"id": 4,
		"name": "Cobblestone",
		"type": 2
	},
	"5": {
		"id": 5,
		"name": "Wood",
		"type": 2,
		"modifier" : {
			"0" : "Normal",
			"1" : "Pine",
			"2" : "Birch",
			"3" : "Jungle"
		}
	},
	"6": {
		"id": 6,
		"name": "Sapling",
		"type": 2,
		"modifier" : { 
			"0" : "Oak",
			"1" : "Spruce",
			"2" : "Birch",
			"3" : "Jungle"
		}
	},
	"7": {
		"id": 7,
		"name": "Bedrock",
		"type": 2
	},
	"8": {
		"id": 8,
		"name": "Water",
		"type": 2
	},
	"9": {
		"id": 9,
		"name": "Stationary Water",
		"type": 2
	},
	"10": {
		"id": 10,
		"name": "Lava",
		"type": 2
	},
	"11": {
		"id": 11,
		"name": "Stationary Lava",
		"type": 2
	},
	"12": {
		"id": 12,
		"name": "Sand",
		"type": 2
	},
	"13": {
		"id": 13,
		"name": "Gravel",
		"type": 2
	},
	"14": {
		"id": 14,
		"name": "Gold Ore",
		"type": 2
	},
	"15": {
		"id": 15,
		"name": "Iron Ore",
		"type": 2
	},
	"16": {
		"id": 16,
		"name": "Coal Ore",
		"type": 2
	},
	"17": {
		"id": 17,
		"name": "Log",
		"type": 2,
		"modifier" : {
			"0" : "Oak",
			"1" : "Spruce",
			"2" : "Birch",
			"3" : "Jungle"
		}
	},
	"18": {
		"id": 18,
		"name": "Leaves",
		"type": 2, 
		"modifier" : {
			"0" : "Oak",
			"1" : "Spruce",
			"2" : "Birch",
			"3" : "Jungle"
		}
	},
	"19": {
		"id": 19,
		"name": "Sponge",
		"type": 2
	},
	"20": {
		"id": 20,
		"name": "Glass",
		"type": 2
	},
	"21": {
		"id": 21,
		"name": "Lapis Ore",
		"type": 2
	},
	"22": {
		"id": 22,
		"name": "Lapis Block",
		"type": 2
	},
	"23": {
		"id": 23,
		"name": "Dispenser",
		"type": 2
	},
	"24": {
		"id": 24,
		"name": "Sandstone",
		"type": 2,
		"modifier" : {
			"0" : "Normal",
			"1" : "Chiseled",
			"2" : "Smooth"
		}
	},
	"25": {
		"id": 25,
		"name": "Note Block",
		"type": 2
	},
	"26": {
		"id": 26,
		"name": "Bed Block",
		"type": 2
	},
	"27": {
		"id": 27,
		"name": "Powered Rail",
		"type": 2
	},
	"28": {
		"id": 28,
		"name": "Detector Rail",
		"type": 2
	},
	"29": {
		"id": 29,
		"name": "Piston Sticky Base",
		"type": 2
	},
	"30": {
		"id": 30,
		"name": "Web",
		"type": 2
	},
	"31": {
		"id": 31,
		"name": "Long Grass",
		"type": 2,	
		"modifier" : {
			"0" : "Dead Shrub",
			"1" : "Tall Grass",
			"2" : "Fern"
		}
	},
	"32": {
		"id": 32,
		"name": "Dead Bush",
		"type": 2
	},
	"33": {
		"id": 33,
		"name": "Piston Base",
		"type": 2
	},
	"34": {
		"id": 34,
		"name": "Piston Extension",
		"type": 2
	},
	"35": {
		"id": 35,
		"name": "Wool",
		"type": 2,
		"modifier" : {
			"0" : "White",
			"1" : "Orange",
			"2" : "Magenta",
			"3" : "Light Blue",
			"4" : "Yellow",
			"5" : "Lime",
			"6" : "Pink",
			"7" : "Gray",
			"8" : "Light Gray",
			"9" : "Cyan",
			"10" : "Purple",
			"11" : "Blue",
			"12" : "Brown",
			"13" : "Green",
			"14" : "Red",
			"15" : "Black"
		}
	},
	"36": {
		"id": 36,
		"name": "Piston Moving Piece",
		"type": 2
	},
	"37": {
		"id": 37,
		"name": "Yellow Flower",
		"type": 2
	},
	"38": {
		"id": 38,
		"name": "Red Rose",
		"type": 2
	},
	"39": {
		"id": 39,
		"name": "Brown Mushroom",
		"type": 2
	},
	"40": {
		"id": 40,
		"name": "Red Mushroom",
		"type": 2
	},
	"41": {
		"id": 41,
		"name": "Gold Block",
		"type": 2
	},
	"42": {
		"id": 42,
		"name": "Iron Block",
		"type": 2
	},
	"43": {
		"id": 43,
		"name": "Double Step",
		"type": 2,
		"modifier" : {
			"0" : "Stone",
			"1" : "Sandstone",
			"2" : "Wood",
			"3" : "Cobblestone",
			"4" : "Brick",
			"5" : "Decorative",
			"6" : "Stone Bricks"
		}
	},
	"44": {
		"id": 44,
		"name": "Step",
		"type": 2,
		"modifier" : {
			"0" : "Stone",
			"1" : "Sandstone",
			"2" : "Wood",
			"3" : "Cobblestone",
			"4" : "Brick",
			"5" : "Decorative",
			"6" : "Stone Bricks"
		}
	},
	"45": {
		"id": 45,
		"name": "Brick",
		"type": 2
	},
	"46": {
		"id": 46,
		"name": "Tnt",
		"type": 2
	},
	"47": {
		"id": 47,
		"name": "Bookshelf",
		"type": 2
	},
	"48": {
		"id": 48,
		"name": "Mossy Cobblestone",
		"type": 2
	},
	"49": {
		"id": 49,
		"name": "Obsidian",
		"type": 2
	},
	"50": {
		"id": 50,
		"name": "Torch",
		"type": 2
	},
	"51": {
		"id": 51,
		"name": "Fire",
		"type": 2
	},
	"52": {
		"id": 52,
		"name": "Mob Spawner",
		"type": 2
	},
	"53": {
		"id": 53,
		"name": "Wood Stairs",
		"type": 2
	},
	"54": {
		"id": 54,
		"name": "Chest",
		"type": 2
	},
	"55": {
		"id": 55,
		"name": "Redstone Wire",
		"type": 2
	},
	"56": {
		"id": 56,
		"name": "Diamond Ore",
		"type": 2
	},
	"57": {
		"id": 57,
		"name": "Diamond Block",
		"type": 2
	},
	"58": {
		"id": 58,
		"name": "Workbench",
		"type": 2
	},
	"59": {
		"id": 59,
		"name": "Crops",
		"type": 2
	},
	"60": {
		"id": 60,
		"name": "Soil",
		"type": 2
	},
	"61": {
		"id": 61,
		"name": "Furnace",
		"type": 2
	},
	"62": {
		"id": 62,
		"name": "Burning Furnace",
		"type": 2
	},
	"63": {
		"id": 63,
		"name": "Sign Post",
		"type": 2
	},
	"64": {
		"id": 64,
		"name": "Wooden Door",
		"type": 2
	},
	"65": {
		"id": 65,
		"name": "Ladder",
		"type": 2
	},
	"66": {
		"id": 66,
		"name": "Rails",
		"type": 2
	},
	"67": {
		"id": 67,
		"name": "Cobblestone Stairs",
		"type": 2
	},
	"68": {
		"id": 68,
		"name": "Wall Sign",
		"type": 2
	},
	"69": {
		"id": 69,
		"name": "Lever",
		"type": 2
	},
	"70": {
		"id": 70,
		"name": "Stone Plate",
		"type": 2
	},
	"71": {
		"id": 71,
		"name": "Iron Door Block",
		"type": 2
	},
	"72": {
		"id": 72,
		"name": "Wood Plate",
		"type": 2
	},
	"73": {
		"id": 73,
		"name": "Redstone Ore",
		"type": 2
	},
	"74": {
		"id": 74,
		"name": "Glowing Redstone Ore",
		"type": 2
	},
	"75": {
		"id": 75,
		"name": "Redstone Torch Off",
		"type": 2
	},
	"76": {
		"id": 76,
		"name": "Redstone Torch On",
		"type": 2
	},
	"77": {
		"id": 77,
		"name": "Stone Button",
		"type": 2
	},
	"78": {
		"id": 78,
		"name": "Snow",
		"type": 2
	},
	"79": {
		"id": 79,
		"name": "Ice",
		"type": 2
	},
	"80": {
		"id": 80,
		"name": "Snow Block",
		"type": 2
	},
	"81": {
		"id": 81,
		"name": "Cactus",
		"type": 2
	},
	"82": {
		"id": 82,
		"name": "Clay",
		"type": 2
	},
	"83": {
		"id": 83,
		"name": "Sugar Cane Block",
		"type": 2
	},
	"84": {
		"id": 84,
		"name": "Jukebox",
		"type": 2
	},
	"85": {
		"id": 85,
		"name": "Fence",
		"type": 2
	},
	"86": {
		"id": 86,
		"name": "Pumpkin",
		"type": 2
	},
	"87": {
		"id": 87,
		"name": "Netherrack",
		"type": 2
	},
	"88": {
		"id": 88,
		"name": "Soul Sand",
		"type": 2
	},
	"89": {
		"id": 89,
		"name": "Glowstone",
		"type": 2
	},
	"90": {
		"id": 90,
		"name": "Portal",
		"type": 2
	},
	"91": {
		"id": 91,
		"name": "Jack O Lantern",
		"type": 2
	},
	"92": {
		"id": 92,
		"name": "Cake Block",
		"type": 2
	},
	"93": {
		"id": 93,
		"name": "Diode Block Off",
		"type": 2
	},
	"94": {
		"id": 94,
		"name": "Diode Block On",
		"type": 2
	},
	"95": {
		"id": 95,
		"name": "Locked Chest",
		"type": 2
	},
	"96": {
		"id": 96,
		"name": "Trap Door",
		"type": 2
	},
	"97": {
		"id": 97,
		"name": "Monster Eggs",
		"type": 2,
		"modifier" : {
			"0" : "Stone",
			"1" : "Cobblestone",
			"2" : "Stone Brick"
		}
	},
	"98": {
		"id": 98,
		"name": "Smooth Brick",
		"type": 2,
		"modifier" : {
			"0" : "Stone",
			"1" : "Cracked",
			"2" : "Mossy",
			"3" : "Chiseled"
		}
	},
	"99": {
		"id": 99,
		"name": "Huge Mushroom 1",
		"type": 2
	},
	"100": {
		"id": 100,
		"name": "Huge Mushroom 2",
		"type": 2
	},
	"101": {
		"id": 101,
		"name": "Iron Fence",
		"type": 2
	},
	"102": {
		"id": 102,
		"name": "Thin Glass",
		"type": 2
	},
	"103": {
		"id": 103,
		"name": "Melon Block",
		"type": 2
	},
	"104": {
		"id": 104,
		"name": "Pumpkin Stem",
		"type": 2
	},
	"105": {
		"id": 105,
		"name": "Melon Stem",
		"type": 2
	},
	"106": {
		"id": 106,
		"name": "Vine",
		"type": 2
	},
	"107": {
		"id": 107,
		"name": "Fence Gate",
		"type": 2
	},
	"108": {
		"id": 108,
		"name": "Brick Stairs",
		"type": 2
	},
	"109": {
		"id": 109,
		"name": "Smooth Stairs",
		"type": 2
	},
	"110": {
		"id": 110,
		"name": "Mycel",
		"type": 2
	},
	"111": {
		"id": 111,
		"name": "Water Lily",
		"type": 2
	},
	"112": {
		"id": 112,
		"name": "Nether Brick",
		"type": 2
	},
	"113": {
		"id": 113,
		"name": "Nether Fence",
		"type": 2
	},
	"114": {
		"id": 114,
		"name": "Nether Brick Stairs",
		"type": 2
	},
	"115": {
		"id": 115,
		"name": "Nether Warts",
		"type": 2
	},
	"116": {
		"id": 116,
		"name": "Enchantment Table",
		"type": 2
	},
	"117": {
		"id": 117,
		"name": "Brewing Stand",
		"type": 2
	},
	"118": {
		"id": 118,
		"name": "Cauldron",
		"type": 2
	},
	"119": {
		"id": 119,
		"name": "Ender Portal",
		"type": 2
	},
	"120": {
		"id": 120,
		"name": "Ender Portal Frame",
		"type": 2
	},
	"121": {
		"id": 121,
		"name": "Ender Stone",
		"type": 2
	},
	"122": {
		"id": 122,
		"name": "Dragon Egg",
		"type": 2
	},
	"123": {
		"id": 123,
		"name": "Redstone Lamp Off",
		"type": 2
	},
	"124": {
		"id": 124,
		"name": "Redstone Lamp On",
		"type": 2
	},
	"125" : {
		"id": 125,
		"name": "Wooden Double Slab",
		"type": 2,
		"modifier" : {
			"0" : "Oak",
			"1" : "Spruce",
			"2" : "Birch",
			"3" : "Jungle"
		}
	},
	"126" : {
		"id": 126,
		"name": "Wooden Slab",
		"type": 2,
		"modifier" : {
			"0" : "Oak",
			"1" : "Spruce",
			"2" : "Birch",
			"3" : "Jungle"
		}
	},
	"127" : {
		"id": 127,
		"name": "Cocoa Plant",
		"type": 2
	},
	"128" : {
		"id": 128,
		"name": "Sandstone Stairs",
		"type": 2
	},
	"129" : {
		"id": 129,
		"name": "Emerald Ore",
		"type": 2
	},
	"130" : {
		"id": 130,
		"name": "Ender Chest",
		"type": 2
	},
	"131" : {
		"id": 131,
		"name": "Tripwire Hook",
		"type": 2
	},
	"132" : {
		"id": 132,
		"name": "Tripwire",
		"type": 2
	},
	"133" : {
		"id": 133,
		"name": "Block of Emerald",
		"type": 2
	},
	"134" : {
		"id": 134,
		"name": "Spruce Wood Stairs",
		"type": 2
	},
	"135" : {
		"id": 135,
		"name": "Birch Wood Stairs",
		"type": 2
	},
	"136" : {
		"id": 136,
		"name": "Jungle Wood Stairs",
		"type": 2
	},
	"137" : {
		"id": 137,
		"name": "Command Block",
		"type": 2
	},
	"138" : {
		"id": 138,
		"name": "Beacon Block",
		"type": 2
	},
	"256": {
		"id": 256,
		"name": "Iron Spade",
		"type": 1
	},
	"257": {
		"id": 257,
		"name": "Iron Pickaxe",
		"type": 1
	},
	"258": {
		"id": 258,
		"name": "Iron Axe",
		"type": 1
	},
	"259": {
		"id": 259,
		"name": "Flint And Steel",
		"type": 1
	},
	"260": {
		"id": 260,
		"name": "Apple",
		"type": 3
	},
	"261": {
		"id": 261,
		"name": "Bow",
		"type": 1
	},
	"262": {
		"id": 262,
		"name": "Arrow",
		"type": 1
	},
	"263": {
		"id": 263,
		"name": "Coal",
		"type": 1
	},
	"264": {
		"id": 264,
		"name": "Diamond",
		"type": 1
	},
	"265": {
		"id": 265,
		"name": "Iron Ingot",
		"type": 1
	},
	"266": {
		"id": 266,
		"name": "Gold Ingot",
		"type": 1
	},
	"267": {
		"id": 267,
		"name": "Iron Sword",
		"type": 1
	},
	"268": {
		"id": 268,
		"name": "Wood Sword",
		"type": 1
	},
	"269": {
		"id": 269,
		"name": "Wood Spade",
		"type": 1
	},
	"270": {
		"id": 270,
		"name": "Wood Pickaxe",
		"type": 1
	},
	"271": {
		"id": 271,
		"name": "Wood Axe",
		"type": 1
	},
	"272": {
		"id": 272,
		"name": "Stone Sword",
		"type": 1
	},
	"273": {
		"id": 273,
		"name": "Stone Spade",
		"type": 1
	},
	"274": {
		"id": 274,
		"name": "Stone Pickaxe",
		"type": 1
	},
	"275": {
		"id": 275,
		"name": "Stone Axe",
		"type": 1
	},
	"276": {
		"id": 276,
		"name": "Diamond Sword",
		"type": 1
	},
	"277": {
		"id": 277,
		"name": "Diamond Spade",
		"type": 1
	},
	"278": {
		"id": 278,
		"name": "Diamond Pickaxe",
		"type": 1
	},
	"279": {
		"id": 279,
		"name": "Diamond Axe",
		"type": 1
	},
	"280": {
		"id": 280,
		"name": "Stick",
		"type": 1
	},
	"281": {
		"id": 281,
		"name": "Bowl",
		"type": 1
	},
	"282": {
		"id": 282,
		"name": "Mushroom Soup",
		"type": 3
	},
	"283": {
		"id": 283,
		"name": "Gold Sword",
		"type": 1
	},
	"284": {
		"id": 284,
		"name": "Gold Spade",
		"type": 1
	},
	"285": {
		"id": 285,
		"name": "Gold Pickaxe",
		"type": 1
	},
	"286": {
		"id": 286,
		"name": "Gold Axe",
		"type": 1
	},
	"287": {
		"id": 287,
		"name": "String",
		"type": 1
	},
	"288": {
		"id": 288,
		"name": "Feather",
		"type": 1
	},
	"289": {
		"id": 289,
		"name": "Sulphur",
		"type": 1
	},
	"290": {
		"id": 290,
		"name": "Wood Hoe",
		"type": 1
	},
	"291": {
		"id": 291,
		"name": "Stone Hoe",
		"type": 1
	},
	"292": {
		"id": 292,
		"name": "Iron Hoe",
		"type": 1
	},
	"293": {
		"id": 293,
		"name": "Diamond Hoe",
		"type": 1
	},
	"294": {
		"id": 294,
		"name": "Gold Hoe",
		"type": 1
	},
	"295": {
		"id": 295,
		"name": "Seeds",
		"type": 1
	},
	"296": {
		"id": 296,
		"name": "Wheat",
		"type": 1
	},
	"297": {
		"id": 297,
		"name": "Bread",
		"type": 3
	},
	"298": {
		"id": 298,
		"name": "Leather Helmet",
		"type": 1
	},
	"299": {
		"id": 299,
		"name": "Leather Chestplate",
		"type": 1
	},
	"300": {
		"id": 300,
		"name": "Leather Leggings",
		"type": 1
	},
	"301": {
		"id": 301,
		"name": "Leather Boots",
		"type": 1
	},
	"302": {
		"id": 302,
		"name": "Chainmail Helmet",
		"type": 1
	},
	"303": {
		"id": 303,
		"name": "Chainmail Chestplate",
		"type": 1
	},
	"304": {
		"id": 304,
		"name": "Chainmail Leggings",
		"type": 1
	},
	"305": {
		"id": 305,
		"name": "Chainmail Boots",
		"type": 1
	},
	"306": {
		"id": 306,
		"name": "Iron Helmet",
		"type": 1
	},
	"307": {
		"id": 307,
		"name": "Iron Chestplate",
		"type": 1
	},
	"308": {
		"id": 308,
		"name": "Iron Leggings",
		"type": 1
	},
	"309": {
		"id": 309,
		"name": "Iron Boots",
		"type": 1
	},
	"310": {
		"id": 310,
		"name": "Diamond Helmet",
		"type": 1
	},
	"311": {
		"id": 311,
		"name": "Diamond Chestplate",
		"type": 1
	},
	"312": {
		"id": 312,
		"name": "Diamond Leggings",
		"type": 1
	},
	"313": {
		"id": 313,
		"name": "Diamond Boots",
		"type": 1
	},
	"314": {
		"id": 314,
		"name": "Gold Helmet",
		"type": 1
	},
	"315": {
		"id": 315,
		"name": "Gold Chestplate",
		"type": 1
	},
	"316": {
		"id": 316,
		"name": "Gold Leggings",
		"type": 1
	},
	"317": {
		"id": 317,
		"name": "Gold Boots",
		"type": 1
	},
	"318": {
		"id": 318,
		"name": "Flint",
		"type": 1
	},
	"319": {
		"id": 319,
		"name": "Pork",
		"type": 3
	},
	"320": {
		"id": 320,
		"name": "Grilled Pork",
		"type": 3
	},
	"321": {
		"id": 321,
		"name": "Painting",
		"type": 1
	},
	"322": {
		"id": 322,
		"name": "Golden Apple",
		"type": 3
	},
	"323": {
		"id": 323,
		"name": "Sign",
		"type": 1
	},
	"324": {
		"id": 324,
		"name": "Wood Door",
		"type": 1
	},
	"325": {
		"id": 325,
		"name": "Bucket",
		"type": 1
	},
	"326": {
		"id": 326,
		"name": "Water Bucket",
		"type": 1
	},
	"327": {
		"id": 327,
		"name": "Lava Bucket",
		"type": 1
	},
	"328": {
		"id": 328,
		"name": "Minecart",
		"type": 1
	},
	"329": {
		"id": 329,
		"name": "Saddle",
		"type": 1
	},
	"330": {
		"id": 330,
		"name": "Iron Door",
		"type": 1
	},
	"331": {
		"id": 331,
		"name": "Redstone",
		"type": 1
	},
	"332": {
		"id": 332,
		"name": "Snow Ball",
		"type": 1
	},
	"333": {
		"id": 333,
		"name": "Boat",
		"type": 1
	},
	"334": {
		"id": 334,
		"name": "Leather",
		"type": 1
	},
	"335": {
		"id": 335,
		"name": "Milk Bucket",
		"type": 1
	},
	"336": {
		"id": 336,
		"name": "Clay Brick",
		"type": 1
	},
	"337": {
		"id": 337,
		"name": "Clay Ball",
		"type": 1
	},
	"338": {
		"id": 338,
		"name": "Sugar Cane",
		"type": 1
	},
	"339": {
		"id": 339,
		"name": "Paper",
		"type": 1
	},
	"340": {
		"id": 340,
		"name": "Book",
		"type": 1
	},
	"341": {
		"id": 341,
		"name": "Slime Ball",
		"type": 1
	},
	"342": {
		"id": 342,
		"name": "Storage Minecart",
		"type": 1
	},
	"343": {
		"id": 343,
		"name": "Powered Minecart",
		"type": 1
	},
	"344": {
		"id": 344,
		"name": "Egg",
		"type": 1
	},
	"345": {
		"id": 345,
		"name": "Compass",
		"type": 1
	},
	"346": {
		"id": 346,
		"name": "Fishing Rod",
		"type": 1
	},
	"347": {
		"id": 347,
		"name": "Watch",
		"type": 1
	},
	"348": {
		"id": 348,
		"name": "Glowstone Dust",
		"type": 1
	},
	"349": {
		"id": 349,
		"name": "Raw Fish",
		"type": 3
	},
	"350": {
		"id": 350,
		"name": "Cooked Fish",
		"type": 3
	},
	"351": {
		"id": 351,
		"name": "/Ink Sack",
		"type": 1,
		"modifier": {
			"0" : "Ink Sac",
			"1" : "Rose Red",
			"2" : "Cactus Green",
			"3" : "Cocoa Beans",
			"4" : "Lapis Lazuli",
			"5" : "Purple",
			"6" : "Cyan",
			"7" : "Light Gray",
			"8" : "Gray",
			"9" : "Pink",
			"10" : "Lime",
			"11" : "Dandelion Yellow",
			"12" : "Light Blue",
			"13" : "Magenta",
			"14" : "Orange",
			"15" : "Bone Meal"
		}
	},
	"352": {
		"id": 352,
		"name": "Bone",
		"type": 1
	},
	"353": {
		"id": 353,
		"name": "Sugar",
		"type": 1
	},
	"354": {
		"id": 354,
		"name": "Cake",
		"type": 1
	},
	"355": {
		"id": 355,
		"name": "Bed",
		"type": 1
	},
	"356": {
		"id": 356,
		"name": "Diode",
		"type": 1
	},
	"357": {
		"id": 357,
		"name": "Cookie",
		"type": 3
	},
	"358": {
		"id": 358,
		"name": "Map",
		"type": 1
	},
	"359": {
		"id": 359,
		"name": "Shears",
		"type": 1
	},
	"360": {
		"id": 360,
		"name": "Melon",
		"type": 3
	},
	"361": {
		"id": 361,
		"name": "Pumpkin Seeds",
		"type": 1
	},
	"362": {
		"id": 362,
		"name": "Melon Seeds",
		"type": 1
	},
	"363": {
		"id": 363,
		"name": "Raw Beef",
		"type": 3
	},
	"364": {
		"id": 364,
		"name": "Cooked Beef",
		"type": 3
	},
	"365": {
		"id": 365,
		"name": "Raw Chicken",
		"type": 3
	},
	"366": {
		"id": 366,
		"name": "Cooked Chicken",
		"type": 3
	},
	"367": {
		"id": 367,
		"name": "Rotten Flesh",
		"type": 3
	},
	"368": {
		"id": 368,
		"name": "Ender Pearl",
		"type": 1
	},
	"369": {
		"id": 369,
		"name": "Blaze Rod",
		"type": 1
	},
	"370": {
		"id": 370,
		"name": "Ghast Tear",
		"type": 1
	},
	"371": {
		"id": 371,
		"name": "Gold Nugget",
		"type": 1
	},
	"372": {
		"id": 372,
		"name": "Nether Stalk",
		"type": 1
	},
	"373": {
		"id": 373,
		"name": "Potion",
		"type": 1
	},
	"374": {
		"id": 374,
		"name": "Glass Bottle",
		"type": 1
	},
	"375": {
		"id": 375,
		"name": "Spider Eye",
		"type": 3
	},
	"376": {
		"id": 376,
		"name": "Fermented Spider Eye",
		"type": 1
	},
	"377": {
		"id": 377,
		"name": "Blaze Powder",
		"type": 1
	},
	"378": {
		"id": 378,
		"name": "Magma Cream",
		"type": 1
	},
	"379": {
		"id": 379,
		"name": "Brewing Stand Item",
		"type": 1
	},
	"380": {
		"id": 380,
		"name": "Cauldron Item",
		"type": 1
	},
	"381": {
		"id": 381,
		"name": "Eye Of Ender",
		"type": 1
	},
	"382": {
		"id": 382,
		"name": "Speckled Melon",
		"type": 1
	},
	"383": {
		"id": 383,
		"name": "Monster Egg",
		"type": 1,
		"modifier": {
			"50" : "Creeper",
			"51" : "Skeleton",
			"52" : "Spider",
			"54" : "Zombie",
			"55" : "Slime",
			"56" : "Ghast",
			"57" : "Pig Zombie",
			"58" : "Enderman",
			"59" : "Cave Spider",
			"60" : "Silverfish",
			"61" : "Blaze",
			"62" : "Magma Cube",
			"90" : "Pig",
			"91" : "Sheep",
			"92" : "Cow",
			"93" : "Chicken",
			"94" : "Squid",
			"95" : "Wolf",
			"96" : "Mooshroom",
			"98" : "Ocelot",
			"99" : "Iron Golem",
			"120" : "Villager",
		}
	},
	"384": {
		"id": 384,
		"name": "Bottle o' Enchanting",
		"type": 1
	},
	"385": {
		"id": 385,
		"name": "Fire Charge",
		"type": 1
	},
	"386" :  {
		"id": 386,
		"name": "Book and Quill",
		"type": 1
	},
	"387" : {
		"id": 387,
		"name": "Written Book",
		"type": 1
	},
	"388" : {
		"id": 388,
		"name": "Emerald",
		"type": 1
	},
	"2256": {
		"id": 2256,
		"name": "Gold Record (13 Disc)",
		"type": 4
	},
	"2257": {
		"id": 2257,
		"name": "Green Record (Cat Disc)",
		"type": 4
	},
	"2258": {
		"id": 2258,
		"name": "Record 3 (blocks Disc)",
		"type": 4
	},
	"2259": {
		"id": 2259,
		"name": "Record 4 (chirp Disc)",
		"type": 4
	},
	"2260": {
		"id": 2260,
		"name": "Record 5 (far Disc)",
		"type": 4
	},
	"2261": {
		"id": 2261,
		"name": "Record 6 (mall Disc)",
		"type": 4
	},
	"2262": {
		"id": 2262,
		"name": "Record 7 (mellohi Disc)",
		"type": 4
	},
	"2263": {
		"id": 2263,
		"name": "Record 8 (stal Disc)",
		"type": 4
	},
	"2264": {
		"id": 2264,
		"name": "Record 9 (strad Disc)",
		"type": 4
	},
	"2265": {
		"id": 2265,
		"name": "Record 10 (ward Disc)",
		"type": 4
	},
	"2266": {
		"id": 2266,
		"name": "Record 11 (11 Disc)",
		"type": 4
	}
};

module.exports = Items;