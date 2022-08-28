var readline = require("readline-sync")

var menu = "1/ Ajouter un joueur \n";
menu += "2/ Mofidier un joueur \n"
menu += "3/ Supprimer un joueur \n"
menu += "0/ Quitter le programme"

console.log(menu);

var action = readline.questionInt("Quel est votre choix ? ")

switch (action) {
    case 0:
        console.log("A bientôt")
        break;
    case 1:
        console.log("Vous avez selectionné l'ajout un joueur")
        break;
    case 2:
        console.log("Vous avez selectionné la modification d'un joueur")
        break;
    case 3:
        console.log("Vous avez selectionné la suppresion d'un joueur")
        break;
    default:
        console.log("Merci de choisir une section")
}