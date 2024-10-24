let petName = "Spotas";
if (petName.length > 3) {
  console.log("Vardas ilgesnis nei 3 raidės.");
} else {
  console.log("Vardas yra 3 raidės ar trumpesnis.");
}

function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

let studentScore = 85;
console.log("Studento įvertinimas: " + getGrade(studentScore));

const readline = require("readline-sync");

let length = parseFloat(readline.question("Įveskite stačiakampio ilgį: "));
let width = parseFloat(readline.question("Įveskite stačiakampio plotį: "));

let perimeter = 2 * (length + width);
console.log("Stačiakampio perimetras yra: " + perimeter);
