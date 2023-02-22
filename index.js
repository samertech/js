// Exercício 01
// Faça um programa que mostre a contagem de 1 a 10.

var contador = 0;


while (contador < 10) {
    contador++
    console.log(contador);

}

// Exercício 02
// Faça um programa que mostre a contagem de 10 a 1.

var contador = 11;


while (contador > 1) {
    contador--
    console.log(contador);

}

// Exercício 03
// Faça um programa que recebe um número inteiro e mostre a contagem de 1 até ele.

const digitado = window.prompt('Digite um número inteiro:', '10');

for (let i = 1; i <= digitado; i++) {
    console.log(i);
}

// Exercício 04
// Faça um programa que mostre todos os números primos de 0 a 100.

function isPrime(n) {
    let dividers = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            dividers++;
        }
    }
    if (dividers === 2) {
        return true;
    } else {
        return false;
    }
}

for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}


// 5. Faça um programa que mostre as tabuadas dos números de 1 a 10 usando laços de repetição.

for (let i = 1; i <= 10; i++) {
    console.log(`Tabuada de ${i}`);
    for (let j = 0; j <= 10; j++) {
        const result = i * j;

        console.log(`${i} x ${j} = ${result}`);

    }
    console.log('')

}

// 6. Faça um programa que recebe um número inteiro e mostre a tabuada desse número.

const target = window.prompt('Digite um número inteiro:', '5');

console.log(`Tabuada de ${target}`);
for (let i = 1; i <= 10; i++) {
    const result = target * i;
    console.log(`${target} x ${i} = ${result}`);
}


// 7. Escreva um programa que recebe um número inteiro e mostre os números pares e ímpares (separados), de 1 até esse inteiro.
// Para saber se um dado numero é par ou ímpar a melhor maneira é usando o operador modulus/resto, % . Que retorna o resto da divisão de dois numeros.
// Se n % 2 der resto zero, o numero é par, e impar caso contrário.


const value = window.prompt('Digite um número inteiro:', '10');

const evens = []; // pares
const odds = []; // ímpares

for (let i = 1; i <= value; i++) {
    if (i % 2 === 0) {
        evens.push(i);
    } else {
        odds.push(i);
    }
}

console.log('Numeros pares:', evens);
console.log('Numeros ímpares:', odds);


// 8. Faça um programa que receba 5 idades, calcule e mostre a média das idades digitadas.

const input = prompt('Digite idades separadas por vírgula:', '10,5,23,18,31');
const values = input.split(',');
console.log('Idades', values);

let total = 0;
for (let i = 0; i < values.length; i++) {
    total += parseInt(values[i]);
}


// 8. Faça um programa que receba 5 idades, calcule e mostre a média das idades digitadas.

const inputt = prompt('Digite idades separadas por vírgula:', '10,5,23,18,31');
const valuess = input.split(',');
console.log('Idades', values);

let totall = 0;
for (let i = 0; i < values.length; i++) {
    total += parseInt(values[i]);
}

const media = total / values.length;
console.log('Média', media);

// 9. Faça um programa que receba a idade de dez pessoas e que calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 anos.

const input3 = prompt('Digite idades separadas por vírgula:', '10,5,23,18,31,50,13,2,80,42');
const values2 = input.split(',');
console.log('Idades', values);

let counter = 0;
for (let i = 0; i < values.length; i++) {
    const age = parseInt(values[i]);
    if (age >= 18) {
        counter++;
    }
}

console.log('Maiores de idade', counter);


// 10. Escreva um programa que lê o tamanho do lado de um quadrado e imprime um quadrado daquele tamanho com asteriscos.

const input2 = prompt('Digite um número inteiro:', '5');

let result = '';
for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= input; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);


// 10. Escreva um programa que lê o tamanho do lado de um quadrado e imprime um quadrado daquele tamanho com asteriscos.

const input1 = prompt('Digite um número inteiro:', '5');

let result1 = '';
for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);