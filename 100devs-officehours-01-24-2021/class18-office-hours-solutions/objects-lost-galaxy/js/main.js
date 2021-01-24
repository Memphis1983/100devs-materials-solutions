//Create a mouse object that has four properties and three methods

let mouse = {
  'brand': 'logitech',
  'ergo':true,
  'model':'mx ergo'
}

mouse.brand = "logitech"
mouse.ergo = true
mouse.model = "mx ergo"
mouse.trackBall = true

mouse.leftClick = function(){
  console.log("Click left")
}
mouse.rightClick = function(){
  console.log("Click right")
}
mouse.scrollWheel = function(){
  console.log("Jump")
}
