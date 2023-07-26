let nome = 'João'; // String
//var - substitui let, porém é mais antigo.
let idade; //Declarei uma variavel sem determinar um valor para ela, posteriormente eu declaro. Não inicializei a variavel.
idade = 'Qualquer valor'; //Inicializando minha variável.

console.log(idade); //a variavel entra sem ''.
idade = '28 anos de idade';
console.log(idade);



console.log('João nasceu em 1984');
console.log('Em 2000 João conheceu Maria');
console.log('João casou-se com Maria em 2012');
console.log('Maria teve um filho com João em 2015');
console.log('O filho de João se chama Eduardo.');

console.log(nome, 'nasceu em 1984'); //A variavel é fora das '' e entre virgulas.
console.log('Em 2000' ,nome, 'conheceu Maria');
console.log(nome, 'casou-se com Maria em 2012');
console.log('Maria teve um filho com', nome, 'em 2015');
console.log('O filho de', nome ,'se chama Eduardo.');

//Não podemos criar variáveis com palavras reservadas Ex: let, if, console..
//As variáveis precisam ter nomes significativos para que se possa saber do que se trata aquele valor.
//Não pode começar o nome de uma variável com um número Ex: let 1nome.
//Não podem conter espaços ou traços Ex: let nome-cliente, ou let nome cliente.
//Para colocar nomes compostos nas variáveis se usa o camelCase, primeira palavra com letra minuscula e as seguintes com letras maiusculas. Ex:let nomeCompleto, let nomeCompletoDoCliente
//As variáveis são case-sensitive letra maiuscula e minusculas fazem diferença.
//Não podemos redeclarar variáveis com let. Ex: let idade = '28 anos de idade'; posteriormente para redeclarar se usa apenas idade = 'Qualquer outra idade';
//Não utilizar var e sim sempre let.

