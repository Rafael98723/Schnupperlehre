class Person{
  constructor(name, age = 10) {
    this.name = name;
    this.age = age;
  }
}

let name
let age


function sayHello() {
const readline = require("readline-sync");

name = readline.question("Wie heisst du? ");
console.log("Hallo " + name)

age = readline.question("Wie alt bist du?");
console.log("Dein alter ist" + age)

const user = new Person(name, age);
console.log(user.name)
}
sayHello()

console.log("Du heisst " + user + " und dein alter ist " + age)

function whatAge(){
if (user === "Fritz") {
  console.log("Schön, dass du da bist!")
}
if (age < 10) {
  console.log("Du bist ein Kind");
} else if (age < 18) {
  console.log("Du bist ein Teenager");
} else  if(age < 50)
  console.log("Du bist ein Erwachsener");
else {
  console.log("Du bist ein Opa");
}
}
whatAge()
