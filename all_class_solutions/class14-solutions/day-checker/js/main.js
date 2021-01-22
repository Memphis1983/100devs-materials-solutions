//Create a conditonal that checks the day
//If Tuesday or Thursday, tell them they have class
//If Saturday, tell them they have Office Hours
//If Friday and House Turing, they have private office hours
//If Wednesday and House Hopper, tell them they have private office hours
//If Monday and House Hamilton, tell them to book a 1on1
//If any other day or wrong house, tell them to study
document.querySelector('h1').addEventListener('click', dayCheck)

function dayCheck(){
  const whatDay = document.querySelector('#whatDay').value.toLowerCase()
  const whatHouse = document.querySelector('#whatHouse').value.toLowerCase()
  //Create a conditonal that checks the day
  //If Tuesday or Thursday, tell them they have class
  if(whatDay === 'tuesday' || whatDay === 'thursday'){
    console.log('We have class');
  }else if(whatDay === 'saturday'){
    console.log('We have office hours');
  }else if(whatDay === 'friday' && whatHouse === 'turing'){
    console.log('We have private office hours');
  }else if(whatDay === 'wednesday' && whatHouse === 'hopper'){
    console.log('We have private office hours for hopper');
  }else if(whatDay === 'monday' && whatHouse === 'hamilton'){
    console.log('Book a 1on1');
  }else{
    console.log('STUDY');
  }
  //If Saturday, tell them they have Office Hours
  //If Friday and House Turing, they have private office hours
  //If Wednesday and House Hopper, tell them they have private office hours
  //If Monday and House Hamilton, tell them to book a 1on1
  //If any other day or wrong house, tell them to study
}


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
