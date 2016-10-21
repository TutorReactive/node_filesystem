var Monopoly = require("./Monopoly");

var game = new Monopoly(2, "Monopoly", 6, 2, 2);

game.numPlayersFunc();
console.log(game.numProperties);