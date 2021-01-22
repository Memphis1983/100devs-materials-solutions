const images = document.querySelectorAll('img')
let bodyCount = 0
let timeLeft = 20

Array.from(images).forEach(i => i.addEventListener('click', murder))

function murder(killed){
  killed.target.style.display = 'none'
  bodyCount++
  document.querySelector('#bodyCount').innerText = bodyCount
}

let timer = setInterval(()=>{
  timeLeft--
  document.querySelector('#timeLeft').innerText = timeLeft
  if(timeLeft <= 0){
    clearInterval(timer)
    Array.from(images).forEach(i => i.style.display = 'none')
  }
}, 1000)

timer()
