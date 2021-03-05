// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism

class Contractor {
  constructor(name, role) {
    let number = 25;
    this._name = name;
    this._role = role;
  }
  get name() {
    return this._name;
  }
  get role() {
    return this._role;
  }
  sayHello() {
    console.log(`Hello, I am on the ${this._role} team at #100Devs!`);
  }
}
class Front extends Contractor {
  constructor(name, role, tech) {
    super(name, role);
    this._tech = tech;
  }
  get tech() {
    return this._tech;
  }
  sayHello() {
    console.log(
      `Hello, I am on the ${this.role} team at #100Devs and I use ${this._tech}`
    );
  }
}

const bob = new Contractor("Bob", "Front-end");
let simba = new Contractor("Simba", "Front-end", "React");

let machi = new Contractor("The Machine", "Back-end", "Node");

let agency = [bob, simba, machi];

for (person of agency) {
  person.sayHello();
}
