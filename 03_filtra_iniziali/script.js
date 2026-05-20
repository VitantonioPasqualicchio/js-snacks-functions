/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
console.log ('Nomi in elenco: ',names);

const letterToSearch = prompt('Inserisci l\'iniziale dei nomi da cercare:').toLowerCase();
console.log ('Lettera inserita: ',letterToSearch);

// Dichiara la funzione qui.

const filterByLetter = (names, letterToSearch) => names.filter(singleName => {
    console.log (singleName.toLowerCase().at(0));
    const isMatch = (singleName.toLowerCase().at(0) === letterToSearch);
    return isMatch;
}
);

// Invoca la funzione qui e stampa il risultato in console

const message = filterByLetter (names, letterToSearch);
console.log (message);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]