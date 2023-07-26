/*alert('Mensagem');
alert('Olá mundo !');//não retorna nada especifico 
undefined
confirm('Confirma que deseja apagar');//Pode retornar true ou false
true
const confirma = confirm('Realmente deseja apagar?');// a constante confirma fica com o valor que o usuario responder se ele responder sim por exemplo ela fica com o valor true armazenado.
let num1 = prompt ('Digite um numero') // aparece uma caixinha para que o usuario digite um numero, e a variável num1 fica com o valor que o usuario digitou.
num1 = parseFloat(num1);// faz com que o num1 deixe de ser uma string e vire um numero.
typeof // é usado para saber qual tipo a variável é.*/

let numero1 = prompt ('Digite um numero');
let numero2 = prompt ('Digite outro numero');

numero1 = Number (numero1);
numero2 = Number (numero2);

const resultado = numero1 + numero2;
alert (`O resultado da sua conta foi: ${resultado}`);

