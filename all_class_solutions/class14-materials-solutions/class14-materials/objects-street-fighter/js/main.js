//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function Fighterz(punch,kick,taunt,specialMove){
  this.punch = punch
  this.kick = kick
  this.taunt = taunt
  this.specialMove = specialMove
  this.talkTrash = function(){
    alert(`Hey you ${this.taunt}`)
  }
  this.useMove = function(){
    alert(`You can't handle my ${this.specialMove}`)
  }
  this.powerLevel = function(){
    alert('Over 9000')
  }
}
let ryu = new Fighterz('low','high','booger','HADUOKEN')
let chunLi = new Fighterz('high','high','Yall bout to catch these feet','SPINNY KICK THING')

Fighterz.prototype.jump = true
