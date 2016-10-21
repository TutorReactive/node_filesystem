class Animal {
  constructor(name, eyes) {
    this.name = name;
    this.eyes = eyes;
  }

  sayMyName() {
    console.log(this.name);
  }

  numberOfEyes() {
    console.log(this.eyes);
  }
}

module.exports = Animal; //

//Animal.js