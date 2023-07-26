//Não podemos criar constantes com palavras reservadas Ex: let, if, console..
//As constantes precisam ter nomes significativos para que se possa saber do que se trata aquele valor.
//Não pode começar o nome de uma constante com um número Ex: let 1nome.
//Não podem conter espaços ou traços Ex: let nome-cliente, ou let nome cliente.
//Para colocar nomes compostos nas constantes se usa o camelCase, primeira palavra com letra minuscula e as seguintes com letras maiusculas. Ex:let nomeCompleto, let nomeCompletoDoCliente
//As constantes são case-sensitive letra maiuscula e minusculas fazem diferença.
//Não se pode modificar o valor de uma constante.
//Não utilizar var e sim sempre const.

const nome = 'Nicole';
console.log(nome);

//Operadores aritméticos basicos : + - * /.

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;

console.log(resultado);

const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);
let resultadoTriplicado = resultado * 3;
console.log(resultadoTriplicado);
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultadoTriplicado);
//O valor da variável let é o ultimo valor a ela atribuido, o primeiro valor é perdido.
//Dentro de "", é uma STRING (texto), fora de "", é um NUMBER (número).

console.log(typeof resultadoDuplicado);

//typeof é usado para saber o tipo da variável/constante.
//Quando se coloca um numero dentro de "" ele vira uma string, podendo atrapalhar operações aritmeticas.

