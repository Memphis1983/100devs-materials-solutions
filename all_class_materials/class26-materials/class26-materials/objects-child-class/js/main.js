//Create an a class and extend it - Can be anything you would like it to be!
class Website {
  constructor(name) {
    this.name = name
  }
  makeWebsite() {
    console.log(`${this.name} creates a new website`)
  }
}

class Ecommerce extends Website {
  constructor(name, type) {
    super(name)
    this.type = type
  }
}

let amazon = new Ecommerce("Amazon", "Shopping");
