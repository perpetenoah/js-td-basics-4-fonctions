/*
FONCTIONS - PRÉPA 4 : Date valide - version 2
Écrire un programme JS qui teste si une date entrée par l'utilisateur est une date valide ou pas
- Déclarez deux fonctions :
  - isBissextile retourne true ou false selon que l'année est bissextile ou pas
  - isValid retourne true ou false selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
  avant d'afficher votre message dans la console
*/

// Fonction pour vérifier si une année est bissextile
function isBissextile(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Fonction pour vérifier si une date est valide
function isValid(day, month, isBissextile) {
    if (day > 0) {
        if (month === 'février') {
            return (isBissextile && day <= 29) || (!isBissextile && day <= 28);
        }


        if ((month === 'janvier' ||
                month === 'mars' ||
                month === 'mai' ||
                month === 'juillet' ||
                month === 'aout' ||
                month === 'octobre' ||
                month === 'décembre') &&
            day <= 31) {
            return true
        }
        return day <= 30;

    }
    return false;
}

console.log(isValid(30, 'juin', isBissextile(2020)));

// Demander à l'utilisateur de saisir une date


// Utilisation de la fonction isValid pour vérifier la date

