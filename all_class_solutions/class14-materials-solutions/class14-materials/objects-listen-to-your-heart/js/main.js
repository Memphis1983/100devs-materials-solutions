//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

stopwatch.color = 'black'
stopwatch.brand = 'nike'
stopwatch.shape = 'Circle'
stopwatch.lanyard = true
stopwatch.start = function(){
  alert("starting")
}
stopwatch.stop = function(){
  alert("stopping")
}
stopwatch.pause = function(){
  alert("pausing")
}
