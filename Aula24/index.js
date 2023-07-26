
let umaString = "Um \"texto\"";//Forma de colocar "", dentro de outras "".

console.log (umaString); //Mostra Um "texto".

//                 01234567 
let outraString = "Um texto";
//As strings são indexadas.

console.log(outraString[4]); //Mostra o caracter em uma posiçaõ especifica do indice, no caso a posição 4, vai retornar o E.

console.log(outraString.charAt(6));// A função charAt tem a mesma função do colchete na anterior, nesse caso vai retornar T.

console.log(outraString.concat(' em um lindo dia.'));
console.log(outraString + ' em um lindo dia.');
console.log(`${outraString} em um lindo dia.`);
//As três formas anteriores são usadas para concatenar, a melhor e mais usada é a terceira.

console.log(outraString.indexOf('texto')); //Mostra em qual indice comeca a palavra texto, nesse caso comeca no 3.

console.log(outraString.replace('Um', 'Outro'));//a função .replace troca uma palavra pela outra palavra solicitada, nesse caso se retorna Outro texto no lugar de Um texto apresentado anteriormente.

let string2 = 'O rato roeu a roupa do rei de roma.';
console.log(string2.length); //Me mostra o tamanho da string, nesse caso 34.

console.log(string2.slice(2, 6)); //Me mostra o que esta escrito na string entre os caracteres 2 e 6 do texto, nesse caso, rato.

console.log(string2.slice(-5));//Me mostra de trás para frente, roma.

console.log(string2.split(' '));//Divide a string de a cordo com o desejado, letra, espaço..

console.log(string2.toUpperCase());//Passa tudo para maiuscula.
console.log(string2.toLocaleLowerCase());//Passa tudo para minuscula.

