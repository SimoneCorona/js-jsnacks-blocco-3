// Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

let arrayNum = []
console.log(arrayNum);

while (arrayNum.length < 10) {
    arrayNum.push(Math.floor((Math.random() * 100) + 1))
}

let evenNum = [] //pari verde
console.log(evenNum);
let oddNum = [] //dispari rosso
console.log(oddNum);

arrayNum.forEach(element => {
    if (element % 2 === 0) {
        evenNum.push(element)
    } else {
        oddNum.push(element)
    }
});


//OUTPUT
document.getElementById("green").innerHTML = evenNum;
document.getElementById("red").innerHTML = oddNum;