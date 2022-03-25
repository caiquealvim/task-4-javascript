// 1.	Crie um script que leia o nome da pessoa e mostre o nome dela em um alert() e no console ///

let nome = prompt ("digite seu nome");
console.log("seu nome é:" + nome);
alert( "seu nome é: " + nome);

// // 2.	Crie um script que leia do usuário dois números e mostre a soma desses dois números.

let numero = parseInt(prompt('digite um numero'));
let numero2 = parseInt(prompt('digite outro numero'));

let resultado = (numero + numero2);

console.log(resultado);

// // 3.	Crie um script que leia duas notas do usuário e calcule a média do aluno.

let nota1 = parseInt(prompt("digita a primeira nota"));
let nota2 = parseInt(prompt("digita a segunda nota"));

let resultado = (nota1 + nota2) / 2;

console.log(resultado);

// // 4.	Crie um programa leia o ano em que o usuário nasceu e diga a idade atual dele.

let idade = parseInt (prompt("o ano que voce nasceu"));
 let resultado = (2022- idade);
 console.log("sua idade é:"  + resultado);

// // 5.	Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

let valor = parseInt (prompt("digite o valor/hora"));
let horas = parseInt (prompt("digite o numero de horas de trabalho"));

let resultado = (valor * horas) * 30;

console.log(resultado);

// // 6.	Faça um script que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.    C = 5 * ((F-32) / 9).
let numero = prompt("digite um numero");

let F= numero;
let C = (5*(F-32)) /9;

console.log("Farenheint", numero);
console.log("Graus", C)

