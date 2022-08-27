// Exercice 1

var anneeDeConstruction = 2022;

if (anneeDeConstruction <= 2000) {
    console.log("Voiture Polluante");
} else {
    console.log("Voiture Conforme");
}

// Exercice 2

var sexe = true;

if (sexe) { // traduction = est-ce que je suis égale à true
    console.log("homme");
} else {
    console.log("femme");
}

if (!sexe) { // Est-ce que je suis égale à false
    console.log("femme");
} else {
    console.log("homme");
}

// Exercidce 3

username = "matthieu";

if (username.substr(0, 1) === "M" || "m") {
    console.log("Bravo");
}

// Exercice 4
strengh = 2;

if (strengh < 3) {
    console.log("mage");
} else if (strengh < 6) {
    console.log("archer");
} else {
    console.log("guerrier");
}

// ou

if (strengh > 5) {
    console.log("guerrier");
} else if(strengh > 2) {
    console.log("archer");
} else {
    console.log("mage");
}

// ou

if (strengh >= 6) {
    console.log("guerrier");
} else if(strengh >= 3) {
    console.log("archer");
} else {
    console.log("mage");
}

var readline = require("readline-sync");

// var saisie = readline.questionInt("Saisissez un chiffre entre 1 et 12 : ")
// console.log("Vous avez saisi : " + saisie);

// if (saisie === 1) {
//     console.log("Janvier est le %dème mois", saisie)
// } else if(saisie === 2) {
//     console.log("Février est le %dème mois", saisie)
// } else if(saisie === 3) {
//     console.log("Mars est le %dème mois", saisie)
// } else if(saisie === 4) {
//     console.log("Avril est le %dème mois", saisie)
// } else if(saisie === 5) {
//     console.log("Mai est le %dème mois", saisie)
// } else if(saisie === 6) {
//     console.log("Juin est le %dème mois", saisie)
// } else if(saisie === 7) {
//     console.log("Juillet est le %dème mois", saisie)
// } else if(saisie === 8) {
//     console.log("Août est le %dème mois", saisie)
// } else if(saisie === 9) {
//     console.log("Septembre est le %dème mois", saisie)
// } else if(saisie === 10) {
//     console.log("Octobre est le %dème mois", saisie)
// } else if(saisie === 11) {
//     console.log("Novembre est le %dème mois", saisie)
// } else {
//     console.log("Décembre est le %dème mois", saisie)
// } 

// var mois = readline.question("Saisissez un mois de l'année : ");
// console.log("Vous avez entré : " + mois);

// var txt = "le mois de " + mois + " correspond à "
// if (mois === "Janvier") {
//     console.log(txt + "1")
// } else if(mois === "Février") {
//     console.log(txt + "2")
// } else if(mois === "Mars") {
//     console.log(txt + "3")
// } else if(mois === "Avril") {
//     console.log(txt + "4")
// } else if(mois === "Mai") {
//     console.log(txt + "5")
// } else if(mois === "Juin") {
//     console.log(txt + "6")
// } else if(mois === "Juillet") {
//     console.log(txt + "7")
// } else if(mois === "Août") {
//     console.log(txt + "8")
// } else if(mois === "Septembre") {
//     console.log(txt + "9")
// } else if(mois === "Octobre") {
//     console.log(txt + "10")
// } else if(mois === "Novembre") {
//     console.log(txt + "11")
// } else {    
//     console.log(txt + "12")
// }

var classe = readline.question("Saisissez la classe de l'élève entre A et E : ");
console.log("Vous avez saisi la classe " + classe);

if (classe === "A" || classe === "B" || classe === "a" || classe === "b") {
   console.log('Numéro 1'); 
} else if(classe === "C" || classe === "D" || classe === "c" || classe === "d") {
    console.log("Numéro 2");
} else if(classe === "E" || classe === "F" || classe === "e" || classe === "f") {
    console.log("Numéro 3");
} else {
    console.log("Il n'y a pas d'autre classe.")
}