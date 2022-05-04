// 2. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.
const userNumbers = [];
console.log(userNumbers);

let sumNumbers = 0;
// console.log('la somma é' + sumNumbers);

while (sumNumbers < 50) {
    
    let userChoice = parseInt(prompt("Scegli un numero"))
    console.log (userChoice)
    
    userNumbers.push(userChoice)  
   
    sumNumbers += userChoice;
    console.log(userNumbers);
    console.log('la somma é' + sumNumbers);
}

