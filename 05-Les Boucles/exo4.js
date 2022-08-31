// Afficher la factorielle d'un nombre avec saisie au clavier

var readline = require("readline-sync");

var saisie = readline.questionInt("Saisissez un chiffre : ");

result = 1;

for (let i = 1; i <= saisie; i++) {
    console.log(result = result * i)
}