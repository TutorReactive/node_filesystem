var Animal = require("./Animal")

class Cat extends Animal {
  constructor(name, eyes, legs) {
    super(name, eyes);
    this.legs = legs;
  }

  sayMyName() {
    super.sayMyName();
  }
}

module.exports = Cat;

//Cat.js