/**
 * Aritméticos
 * + Adição / Concatenação
 * - / * 
 * (**) potenciação
 * % Resto da divisão
 * Precedencia
 * () ** * / % + -
 * Incremento = ++
 * Decremento = --
 */
const num1 = '5'; //String
const num2 = 10; // number
console.log (num1 + num2);
//String e number, o sinal de + tem a função de concatenação, o resultado será 510, escreve o 5 e reproduz o 10. Concatenação é a união dos valores.

const num3 = 10; 
const num4 = 3; 
console.log(num3 ** num4);
console.log(num3 % num4);

let contador = 10;
//Operador de incremento ++. Sempre soma mais 1, não se pode usar o contador em uma constante pois não se pode modificar o valor de uma constante. Sempre usar let.
/*contador ++; //2
contador ++; //3
contador ++; //4
contador ++; //5
contador ++; //6
contador ++; //7*/
console.log(contador++);//primeiro ele faz a ação e depois soma, por isso o resultado é 1, ele mostra o valor do contador inicial
console.log(++contador); //Aqui ele faz a contagem e depois mostra o valor final do contador.
//Operador de decremento, ele dubtrai 1 toda vez que o contador é chamado.
console.log(--contador);
const passo = 2;
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);

contador += passo; // contador = contador +passo.
console.log(contador);

contador *= passo; // contador = contador *passo.
console.log(contador);

contador **= passo; // contador = contador elevado a passo.
console.log(contador);
//Tomar cuidado com o tipo de dados que estão sendo usados. NaN - Not a number.
//Parseint(inteiro) ou parsefloal(numero com casa decimal) - transforma em numero uma string. numer transforma em numero. 
const numAleatorio = 10;
const numAleatorio2 = Number('5.3');//Parseint transformaria em 5, e parsefloat consideraria o 5.3
console.log(numAleatorio+numAleatorio2);





