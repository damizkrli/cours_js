var readline = require("readline-sync");

var season = parseInt(readline.question("Quel mois voulez-vous ? (1 - 12) "));

switch (season) {
    case 1: // saisie === 1 (test le valeur et le type)
        console.log("Janvier");
        break;
    case 2:
        console.log("Février");
        break;
    case 3:
        console.log("Mars");
        break;
    case 4:
        console.log("Avril");
        break;
    case 5:
        console.log("Mai");
        break;
    case 6:
        console.log("Juin");
        break;
    case 7:
        console.log("Juillet");
        break;
    case 8:
        console.log("Août");
        break;
    case 9:
        console.log("Septembre");
        break;
    case 10:
        console.log("Octobre");
        break;
    case 11:
        console.log("Novembre");
        break;
    case 12:
        console.log("Décembre");
        break;
    default:
        console.log("Aucun mois");
}

