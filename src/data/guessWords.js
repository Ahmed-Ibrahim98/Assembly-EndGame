const WORD_LIST = [
    "apple", "beach", "brain", "bread", "brush", "chair", "chest", "chord", "click", "clock",
    "cloud", "dance", "diary", "drink", "earth", "flute", "fruit", "ghost", "glass", "grape",
    "green", "heart", "house", "juice", "light", "lemon", "money", "music", "night", "ocean",
    "party", "piano", "pilot", "plane", "phone", "pizza", "plant", "radio", "river", "robot",
    "shirt", "shoes", "smile", "snake", "space", "spoon", "storm", "table", "tiger", "toast",
    "touch", "train", "truck", "voice", "water", "watch", "whale", "world", "write", "youth",
    "bridge", "castle", "camera", "garden", "island", "jungle", "market", "mirror", "monkey", "orange",
    "parrot", "pencil", "planet", "pocket", "rabbit", "rocket", "shadow", "silver", "spirit", "summer",
    "target", "ticket", "travel", "tunnel", "window", "winter", "wizard", "active", "bright", "button",
    "coffee", "dragon", "energy", "flight", "forest", "hockey", "nature", "player", "school", "yellow"
];

export default function randomWord() {
    return WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
}