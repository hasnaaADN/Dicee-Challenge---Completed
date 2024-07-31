// Génère un nombre aléatoire entre 1 et 6 pour le premier dé
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Le résultat sera un entier entre 1 et 6

// Crée une chaîne de caractères représentant le nom du fichier image correspondant au premier dé
var randomDiceImage = "dice" + randomNumber1 + ".png"; // Par exemple, "dice3.png" si randomNumber1 est 3

// Génère le chemin complet du fichier image correspondant au premier dé
var randomImageSource = "images/" + randomDiceImage; // Par exemple, "images/dice3.png"

// Sélectionne le premier élément <img> dans le document (dans une page où il y a deux images de dés)
var image1 = document.querySelectorAll("img")[0];

// Modifie l'attribut "src" du premier élément <img> pour qu'il affiche l'image correspondant au premier dé
image1.setAttribute("src", randomImageSource);


// Répète le même processus pour le second dé
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Génère un nombre aléatoire entre 1 et 6 pour le second dé

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // Crée la chaîne de caractères représentant le fichier image du second dé

// Modifie l'attribut "src" du second élément <img> pour qu'il affiche l'image correspondant au second dé
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// Compare les deux nombres aléatoires pour déterminer le vainqueur
if (randomNumber1 > randomNumber2) {
  // Si le premier nombre est plus grand, le joueur 1 gagne
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  // Si le second nombre est plus grand, le joueur 2 gagne
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  // Si les deux nombres sont égaux, c'est une égalité
  document.querySelector("h1").innerHTML = "Draw!";
}
