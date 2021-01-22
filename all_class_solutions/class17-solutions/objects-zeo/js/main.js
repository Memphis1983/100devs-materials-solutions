//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

stopwatch.color = 'black'
stopwatch.brand = 'nike'
stopwatch.shape = 'round'
stopwatch.size = 'large'

stopwatch.start = function(){ console.log('STARTING') }
stopwatch.stop = function(){ console.log('STOPING') }
stopwatch.sayBrand = function(){
  alert(stopwatch.brand)
}
