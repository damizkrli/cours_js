/**
 * Commentaire 
 * sur plusieures
 * lignes.
 */
var score = 10;
// console.log('Le "score" est de : ' + score);
// score += 10; // On ajoute à la variable score son ancienne valeur + 10
// console.log('Le "score" est de : ' + score);

// Exercices : 
// Rajouter 3 x la valeur 10 à score
console.log(score);
score += score;
console.log(score);
score += score + 10;
console.log(score);

// multiplier le score par 3
score *= 3;
console.log(score);

// permuter les valeurs de variable
var prenom = "Gaston";
var nom = "Matthieu";

var tmp = prenom;
var prenom = nom;
var prenom = tmp;


console.log(nom + ' ' + prenom);


// console.log("Prénom : " + prenom + ' - Nom : ' + nom);