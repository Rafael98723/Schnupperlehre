const readline = require("readline-sync");
let points = 0
function sayHello(frage,antwort){
let antwort1 = readline.question(frage);
if (antwort1 === antwort){
      console.log("✅")
      points = points+ 1
}
else{console.log("❌")}
}
sayHello("Was ist 4+5?", "9")
sayHello("Was ist die Hauptstadt der Schweiz?","Bern")
sayHello("Wie lange dauert die Informatiker Lehre?", "4 Jahre")
sayHello("Was ist das grösste Land der Welt?", "Russland")
console.log(points)

if (points === 4){
    console.log ("Super gemacht!")
}