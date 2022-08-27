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

var mois = readline.question("Saisissez un mois de l'année : ");
console.log("Vous avez entré : " + mois);

if (mois === "Janvier") {
    console.log("%s est le 1er mois de l'année", mois)
} else if(mois === "Février") {mois === "Janvier"
    console.log("%s est le 2ème mois de l'année", mois)
} else if(mois === "Mars") {
    console.log("%s est le 3ème mois de l'année", mois)
} else if(mois === "Avril") {
    console.log("%s est le 4 mois de l'année", mois)
} else if(mois === "Mai") {
    console.log("%s est le 5ème mois de l'année", mois)
} else if(mois === "Juin") {
    console.log("%s est le 6ème mois de l'année", mois)
} else if(mois === "Juillet") {
    console.log("%s est le 7ème mois de l'année", mois)
} else if(mois === "Août") {
    console.log("%s est le 8ème mois de l'année", mois)
} else if(mois === "Septembre") {
    console.log("%s est le 9ème mois de l'année", mois)
} else if(mois === "Octobre") {
    console.log("%s est le 10ème mois de l'année", mois)
} else if(mois === "Novembre") {
    console.log("%s est le 11ème mois de l'année", mois)
} else {
    console.log("%s est le 12ème mois de l'année", mois)
}