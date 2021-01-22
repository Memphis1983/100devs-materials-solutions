setInterval(()=>{
  document.querySelector('div').classList.add('wiggle')
  setTimeout(()=>{
    document.querySelector('div').classList.remove('wiggle')
  },400)
}, 10000)
