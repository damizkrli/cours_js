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

// var classe = readline.question("Saisissez la classe de l'élève entre A et E : ");
// console.log("Vous avez saisi la classe " + classe);

// if (classe === "A" || classe === "B" || classe === "a" || classe === "b") {
//    console.log('Numéro 1'); 
// } else if(classe === "C" || classe === "D" || classe === "c" || classe === "d") {
//     console.log("Numéro 2");
// } else if(classe === "E" || classe === "F" || classe === "e" || classe === "f") {
//     console.log("Numéro 3");
// } else {
//     console.log("Il n'y a pas d'autre classe.")
// }

// exo 8

// var age = 40;
// var taille = 170;
// var isFrench = false;

// if (age > 16 && taille > 160 && isFrench == true) {
//     console.log("apte")
// } else {
//     console.log("inapte")
// }

// exo 9
var age = 82;
var sexe = false;
var ville = "Paris"

if (age > 80 && ville === "Toulouse" ) {
    if (sexe) {
        console.log("Personne âgée de Toulouse de sexe Masculin")
    } else {
    console.log("Personne âgée de Toulouse de sexe Féminin")
    } 
}  else {
    if (age <= 80 && (ville === "Paris" || ville === "Marseille")) {
        if (sexe) {
    console.log("Personne adulte de Paris ou Marseille de sexe masculin")
        }
    } else {
        console.log("Personne adulte de Paris ou Marseille de sexe féminin")
    }
}

// exo 10 Les ternaires
age = 19;
sportif = false;
sexe = false;

// Vérfier l'age en ternaire
console.log((age>=18) ? "Majeur" : "Mineur")

// vérifier le sexe en ternaire
console.log((sexe) ? "Homme" : "Femme")

// Vérifier sportif en ternaire 
console.log((sportif) ? "Sportif" : "Non-sportif")

// modulo = ce qu'il reste de la division
// console.log(5 % 2) // 1 => impair
// console.log(4 % 2) // 2 => pair
// premierChiffre = readline.questionInt("Saisissez le premier chiffre : ");
// secondChiffre = readline.questionInt("Saisissez le second chiffre : ");
// console.log("Le Modulo est " + premierChiffre % secondChiffre + ".")

// // // vérifier le modulo
// console.log(((premierChiffre % secondChiffre === 0) ? "pair" : "impair"))

// // OU

// var saisie = readline.questionInt("Choisir un nombre : ");
// var parite = (saisie % 2 === 0) ? 'pair' : "impair";
// console.log("Parite : " + parite);

// Est divisible par 
nbDivisibleParQuatre = readline.questionInt("Choisissez un chiffre à diviser par 4 : ");
console.log("Vous avez choisit " + nbDivisibleParQuatre);

isDivisible = (nbDivisibleParQuatre % 4 === 0) ? "Divisible" : "Non Divisible"
console.log(isDivisible);