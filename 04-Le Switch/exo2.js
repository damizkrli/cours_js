var readline = require("readline-sync");

var age = readline.questionInt('Quel est votre âge ? ')

switch (age) {
    case 16:
    case 17:
        console.log("Mineur");
        break;
    case 18:
    case 19:
    case 20:
        console.log("Majeur");
        break;
    case 21:
    case 22:
    case 23:
    case 24:
        console.log("Adulte");
        break;
    default: console.log("Aĝe non prit en compte.")

}

if (age < 18) {
    console.log("Mineur");
} else if (age <= 20) {
    console.log("Majeur");
} else if (age <= 24) {
    console.log("Adulte");
} else {
    console.log("Aĝe non prit en compte.");
}