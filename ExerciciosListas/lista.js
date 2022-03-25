// 1.	Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.

let minhaLista = [1, 5, 3, 2, 10];
// console.log(minhaLista);



// 3. Faça um Programa que leia 4 notas, mostre as notas e a média na tela.

var notas = [];
var soma = 0;
var media = 0;

for (let i = 0; i < 4; i++) {
  notas.push(parseFloat(prompt("Digite uma nota")));
  soma += notas[i];
}

media = soma / 4;

alert("As notas são: " + notas + " e a média das notas é: " + media);

// 4.	Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.

let lista = []



// 5. Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor ímpar. Imprima os três vetores.

var pares = []
var impares = []
var inteiros = []

for(let i = 0; i < 20; i++){

// Funções 
  inteiros.push(parseInt(prompt("Digite um número")))

  if(inteiros[i] % 2 === 0){
    pares.push(inteiros[i])
  } else{
    impares.push(inteiros[i])
  }
}

console.log("Vetor original: " + inteiros)
console.log("Vetor pares: " + pares)
console.log("Vetor impares3: " + impares)