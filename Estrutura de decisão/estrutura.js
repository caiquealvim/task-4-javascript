// Estruturas de decisão

// 1.	Faça um Programa que peça dois números e imprima o maior deles.

let numero = parseInt(prompt("digite um numero"));
let numero2 = parseInt(prompt("digite oturo numero"))

console.log(numero);
console.log(numero2);

// 2.	Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

let numero = parseInt(prompt("digite um numero"));

if (numero < 0){
    alert ("negativo")
} else {
    alert ('positivo')
}

// 3.	Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

let letra = prompt("digite uma letra");

if(letra === 'f'){
    alert("feminino")
} else if (letra === 'm'){
    alert ("masculino")
}else{
    alert("sexo invalido")
}

// 4.	Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar

let numero = parseInt(prompt("digite um numero"));
let numero2 = parseInt(prompt("digite outro numero"));

let resultado = (numero + numero2) / 2;

console.log('sua média é: ' + resultado);

// // 1.	A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
if(resultado >= 7){
    alert ('aprovado') 
}

// // 2.	A mensagem "Reprovado", se a média for menor do que sete

if else (resultado <= 7){
    alert ('reprovado')
}
// // 3.	A mensagem "Aprovado com Distinção", se a média for igual a dez

else (resultado === 10){
    alert( "Aprovado com Distinção")
}

// 5.	Faça um Programa que leia três números e mostre o maior e o menor deles.

let number1 = parseInt(prompt("Digite o primeiro numero"))
let number2 = parseInt(prompt("Digite o segundo numero"))
let number3 = parseInt(prompt("Digite o terceiro numero"))

let numMaior = Math.max(number1,number2,number3)
let numMenor = Math.min(number1,number2,number3)

alert("O maior número é: "+numMaior+" e o menor número é: "+numMenor)

// 6.	Faça um Programa que leia dois números e mostre se ele é par ou ímpar.
let num = parseInt(prompt("Digite um numero"))

if ( num % 2==0 ){
    console.log("Este numero é par")
} else{
    console.log("Este numero é impar")
}







