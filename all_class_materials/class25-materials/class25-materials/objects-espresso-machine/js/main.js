//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine {
  constructor(color, make, model, price) {
    this.color = color;
    this.model = model;
    this.make = make;
    this.price = price;
  }
  start() {
    console.log("Starting to make espresso");
  }

  stop() {
    console.log("Turning off");
  }
  steam() {
    console.log("Building steam");
  }
}

let myCofee = new EspressoMachine("brown", "Gaggia", "Classic Pro", "400");
