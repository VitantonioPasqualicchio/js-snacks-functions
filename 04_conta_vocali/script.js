/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

const countVowels = (word) => {
    const vowsels = "aeiou";
    const charsArray = word.toLowerCase().split("");
    return charsArray.filter(singleChar => {    
    const isMatch = (vowsels.includes(singleChar));
    return isMatch;
    }
    ).length;
    }

// Invoca la funzione qui e stampa il risultato in console

const message = countVowels (word);
console.log ('Il numero di vocali è:',message);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)