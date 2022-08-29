var readline = require('readline-sync');

var saisie = readline.questionInt("Saisissez un chiffre : ");

for (let i = 10 ; i >= 1; i--) {
    console.log(i + " * " + saisie + " = " + i * saisie);
}