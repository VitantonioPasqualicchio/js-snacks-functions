/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

// Dichiaro la funzione di trasformazione per il singolo elemento
const estraiIniziale = singleName => singleName.at(0);

// Passo la funzione come argomento dentro .map()
const getInitials = names => names.map(estraiIniziale);

// Invoca la funzione qui e stampa il risultato in console

const message = getInitials(names);
console.log (message);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]