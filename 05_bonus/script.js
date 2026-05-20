/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
const actualHour = parseInt(prompt ('Che ore sono? Scrivi l\'orario utilizzando questo formato: (es. 13..14..ecc..)'));


// Dichiara la funzione qui.

const salutation = (name,actualHour) => {
    const greetingText = actualHour <= 13 ? "Buongiorno" : (actualHour <= 17 ? "Buon pomeriggio" : "Buonasera");
    return `${greetingText} ${name}`;
}

// Invoca la funzione qui e stampa il risultato in console

const message = salutation (name,actualHour);
console.log (message);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.



/* VERSIONE ONELINER

return actualHour <= 13 ? `Buongiorno ${name}` : (actualHour <= 17 ? `Buon pomeriggio ${name}` : `Buonasera ${name}`);

*/