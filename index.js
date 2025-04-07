const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];

//1. Vypište do stránky všechna čísla.
console.log("Všechna čísla:", numbers);

//2. Vypište do stránky druhé mocniny všech čísel.
const mocniny = numbers.map(num => num ** 2);
console.log("Druhé mocniny všech čísel:", mocniny);

//3. Vypište do stránky pouze záporná čísla
numbers.forEach(number => {
  if (number < 0) {
    console.log("Pouze zaporná čísla:", number);
  }
});

//4. Vypište do stránky absolutní hodnotu všech čísel
const absolutniHodnota = numbers.map(num => Math.abs(num));
console.log("Absolutní hodnoty všech čísel:", absolutniHodnota);

//5. Vypište do stránky pouze sudá čísla
numbers.forEach(number => {
  if (number % 2 === 0) {
    console.log("Pouze sudá čísla:", number)}
});

//6. Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi
numbers.forEach(number => {
  if (Math.abs(number) % 3 === 0) {
    console.log("Absolutní hodnota dělitelná třemi:", number)
  }
});
  
//7. Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5
numbers.forEach(number => {
  const vzdalenost = Math.abs(number - 5);
  console.log(`Číslo ${number} je ${vzdalenost} jednotek daleko od čísla 5.`);
});

//8. Vypište do stránky druhé mocniny vzdáleností všech čísel od čísla 5
numbers.forEach(number => {
  const mocninyVzdalenosti = (Math.abs(number - 5) ** 2);
  console.log(`Druhá mocnina vzdálenosti čísla ${number} od čísla 5 je ${mocninyVzdalenosti}.`);
});

//9. Spočítejte, kolik je v seznamu záporných čísel
const pocetZapornych = numbers.filter(number => number < 0).length;
console.log(`Počet záporných čísel je: ${pocetZapornych}`);

//10. Spočítejte součet všech čísel v poli
let sum = 0;
numbers.forEach(number => {
  sum += number;
});
console.log(`Součet všech čísel v poli je: ${sum}`);

//11. Spočítejte průměr všech čísel v poli
let suma = 0;
numbers.forEach(number => {
  suma += number;
});
const prumer = suma / numbers.length;
console.log(`Průměr všech čísel v poli je: ${prumer}`);

//12. Spočítejte součet všech kladných čísel v poli
let kladneSuma = 0;
 numbers.forEach(number => {
  if (number > 0) {
    kladneSuma += number;
  }
 });
 console.log(`Součet všech kladných čísel v poli je: ${kladneSuma}`);
