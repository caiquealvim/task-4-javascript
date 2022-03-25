// 1. Crie uma função que receba um inteiro e diga se ele é “Par” para números pares ou “Ímpar” para números impares.

function parImpar(numero) {
    if (parseInt(numero) % 2 === 0) {
      console.log("este numero " + numero + " é par");
    } else {
      console.log("este numero " + numero + " é ímpar");
    }
  }
  
  parImpar(6);
  parImpar("1");
  parImpar(4);

//   2.	Crie uma função que receba dois números e retorne o resultado da soma entre eles. 

function soma(numero1,numero2){
    return parseInt(numero1) + parseInt(numero2);
}

let resultado = soma(4, 5);
console.log("A soma dos numeros: " + resultado);


// 3. Crie uma função que receba um número e retorne o oposto desse número. Exemplos de retornos:
// negativo(1) // return -1
// negativo(-5) // return 5

function retorno(numero) {
    if (parseInt(numero) > 0) {
      return (numero += -2 * numero);
    } else {
      return (numero -= 2 * numero);
    }
  }
  

  console.log(retorno(4));


  

  console.log(retorno(-40));

  console.log(retorno(6));

  // 4. Crie uma função que receba um array de números, e retorne a soma de todos os números positivos desse array. Exemplos de retornos:
// somaDePositivos([1,-4,7,12]) // 1 + 7 + 12 = 20 -> return 20

function retorno (numeros) {
    let soma = 0;
  
    for (i = 0; i < 4; i++) {
      if (parseInt(numeros[i]) > 0) {
        soma += parseInt(numeros[i]);
      }
    }
  
    return ("A soma dos números é: " + soma);
  }
  
  console.log(retorno([1, -4, 7, 12]));

  // 5. Dado um array de números inteiros, crie uma função que retorne o valor do menor número desse array. Exemplos de outputs:
// Dado [34, 15, 88, -2] sua solução deve retornar o -2
// Dado [34, -500, -1, 100] sua solução deve retornar o -500

function numeroPequeno (numeros){
    let menor = numeros[0];
  
    for (i = 0; i < 4; i++) {
      if (parseInt(numeros[i]) < menor) {
        menor = parseInt(numeros[i]);
      }
    }
  
    return ("O menor número do array é: " + menor);
  }
  
  
  console.log(numeroPequeno ([20, 7, 56, -4]));
  console.log(numeroPequeno ([45, -48, -8, 92]));