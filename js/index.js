// Iteration 1: Names and Input
//1.1
let hacker1  = "John";
//1.2
console.log(`The driver's name is ${hacker1}`);
//1.3
let hacker2 = "Mary";
//1.4
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
//2.1
let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
    console.log(`The driver has the longest name, it has ${hacker1Length} characters`);
} else if (hacker2Length > hacker1Length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length}
        characters.`);
} else if (hacker1Length === hacker2Length) {
    console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`);
} else {
    console.log("Something is wrong with these names")
}

// Iteration 3: Loops
//3.1
let hackerToUpperCase = "";

for (i=0; i<hacker1Length; i++) {
  hackerToUpperCase += hacker1[i].toUpperCase();
}
let hackerToUpperCaseWithSpace = hackerToUpperCase.split("").join(" ");
console.log(hackerToUpperCaseWithSpace);

//3.2
let hacker2Reverse = ""

for (i=hacker2Length - 1; i>=0; i--) {
    hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);

//3.3


