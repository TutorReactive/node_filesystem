var Game = require("./Game");

class Monopoly extends Game {
  constructor(numPlayers, name, numFaces, numDice, numProperties) {
    super(numPlayers, name, numFaces, numDice);
    this.numProperties = numProperties;
  }

  numPlayersFunc() {
    console.log(this.numPlayers);
  }
}

module.exports = Monopoly;