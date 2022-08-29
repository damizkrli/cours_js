var readline = require('readline-sync');

var saisie = readline.questionInt("Saisissez un chiffre : ");

for (let i = 0; i <= 10; i++) {
    console.log(i + " * " + saisie + " = " + i * saisie);
}