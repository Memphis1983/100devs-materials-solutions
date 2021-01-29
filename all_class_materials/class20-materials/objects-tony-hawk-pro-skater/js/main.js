//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function TonyHawkProSkaterCharacter(chName, specialTrick, sponsor, stance ) {
  this.characterName = chName
  this.sponsor = sponsor
  this.specialTrick = specialTrick
  this.stance = stance
  this.grind = function() { alert("5050"); };
  this.flip = function() { alert("Kickflip Underflip")};
  this.taunt = function() {alert("FIRSTTT TRRRYYYYY!")}
}

let kareemCampbell = new TonyHawkProSkaterCharacter("Kareem", "Element", "Lazerflip", "Goofy")
