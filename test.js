const value = window.prompt('Digite um número inteiro:', '10');

const evens = []; // pares
const odds = []; // ímpares

for(let i=1; i<=value; i++) {
    if (i % 2 === 0) {
        evens.push(i);
    } else {
        odds.push(i);
    }
}

console.log('Numeros pares:', evens);
console.log('Numeros ímpares:', odds);