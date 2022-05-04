// 1. Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
const arrayNumber1 = [2, 5, 9, 32];
const arrayNumber2 = [84, 7 ,1, 55, 63, 12];

while (arrayNumber1.length < arrayNumber2.length) {
    let addedNumbers = Math.floor(Math.random() * 100);
    arrayNumber1.push(addedNumbers);
}
console.log(arrayNumber1)
console.log(arrayNumber2);