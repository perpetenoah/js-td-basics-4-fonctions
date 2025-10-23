/*
FONCTIONS - PRÉPA 2 : Le minimum de deux nombres
1. En supposant que la fonction JavaScript Math.min() n'existe pas,
   déclarez la fonction calcMin pour qu'elle retourne
   le plus petit des deux nombres passés en paramètres
2. Utilisez ensuite votre fonction pour calculer
   - le minimum entre 4.5 et 5
   - le minimum entre 19 et 9
   - le minimum entre 1 et 1
N.B. Faites deux versions :
   - en utilisant la syntaxe classique
   - en utilisant une arrow function
*/

// Syntaxe classique
function calcMin(nb1, nb2) {
    if (nb1>nb2){
        return nb2
    } else if (nb2>nb1){
        return nb1;
    } else {
        return 'Les deux nombres sont les mêmes';
    }
}

console.log(calcMin(1,1));
// Utilisation de la fonction calcMin pour calculer le minimum


// Version avec une arrow function
const calcMinArrow = (nb1, nb2) =>{
    if (nb1>nb2){
        return nb2
    } else if (nb2>nb1){
        return nb1;
    } else {
        return 'Les deux nombres sont les mêmes';
    }
}

console.log(calcMinArrow(1,1));
// Utilisation de la fonction calcMinArrow pour calculer le minimum


// Version encore plus concise avec une arrow function
const calcMinConcise = (a, b) => (a < b) ? a : b;

// Utilisation de la fonction calcMinConcise pour calculer le minimum

