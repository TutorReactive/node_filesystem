class Game {
  constructor(numPlayers, name, numFaces, numDice) {
    this.numPlayers = numPlayers;
    this.name = name;
    this.numFaces = numFaces;
    this.numDice = numDice;
  }
}

module.exports = Game;