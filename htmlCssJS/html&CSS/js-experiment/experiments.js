// const timesToRepeat = 10;
// const character = "x";
// let answer = "";

// for (let i = 0; i < TimesToRepeat; i++) {
//   answer = answer + character;
// }
// console.log(answer);

//console.log("".padStart(timesToRepeat, Character));

function greet(name, lastName, honourary, greetings) {
  return `${greetings} ${honourary} ${lastName}, 'I hope you have an amazing stay at our place, ${name} `;
}
let newSentence = greet("Jack", "Sparrow", "Captain", "Ah-hoy!");
console.log(newSentence);

const string = "hi hello";
string.toUpperCase; // after pressing period in vscode, all the built in functions are displayed

const person = {
  name: "Aditi", //name is the key , Aditi is the value-->
  city: "New Delhi",
  State: "Delhi",
  favouriteFood: "Rasmalai",
  inStress: true,
};
const propertyName = "city";
// You cant have multiple keys of the same name, but same values can be there

console.log(person);
console.log(person.name);
console.log(person.city);
console.log(person[propertyName]);
