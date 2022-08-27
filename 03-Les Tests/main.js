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

if (username.substr(0,1) === "M" || "m") {
    console.log("Bravo");
}