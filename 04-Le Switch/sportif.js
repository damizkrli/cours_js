var readline = require("readline-sync");

var sport = readline.questionInt("Quel sport voulez-vous ? (1 - 3) ")

switch (sport){
    case 1 : 
        console.log("Fouteux")
        break;
    case 2 :
        console.log("Bonhommes")
        break;
    case 3 : 
        console.log("Tenisman")
        break;
    default:
        console.log("Aucun")
}