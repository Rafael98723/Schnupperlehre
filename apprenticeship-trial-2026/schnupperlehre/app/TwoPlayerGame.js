class Player {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health
  }
}
const readline = require("readline-sync");
let name1
let name2
function startGame(){
name1 = readline.question("Wie heisst du? ");
console.log("Hallo " + name1)
name2 = readline.question("Wie heisst du? ");
console.log("Hallo " + name2)

const player1 = new Player(name1, 100);
console.log(player1.name)
const player2 = new Player(name2, 100);
console.log(player2.name)

console.log(player1.health, player2.health)

while (player1.health >0||player2.health >0) {
  fight(player1, player2) 
  if (player2.health <1) {
    console.log("Player 1 won!")
  }
  fight(player2, player1)
  if (player1.health <1) {
console.log("PLayer 2 won!")
  }
}



}
function fight(attacker, opponent){
  atackOrHeal = readline.question("Atack or heal? ");
if (atackOrHeal === "A"){
  let random= Math.floor(Math.random() * 20) + 5;
  opponent.health = opponent.health - random
  console.log("The opponent has" + opponent.health + " health")
  console.log("The opponent has dealt " + random + " damage")
}
if (atackOrHeal === "H"){
  let random= Math.floor(Math.random() * 15) +5;
  attacker.health = attacker.health + random
  console.log("You have healed yourself for" + random)
}
}
startGame()