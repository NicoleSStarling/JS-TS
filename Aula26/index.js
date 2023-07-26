//IEEE 754-2008 PADRÃO PARA PRECISAO DOS NUMEROS

let num1 = 1500;
let num2 = 2.5;

console.log(num1 + num2);
console.log(num1.toString() + num2); //Transformando num1 em uma string para fazer a concatenação. Logo ira retornar 12.5 e não 3.5 como a anterior.
console.log(typeof num1); //A função toString não transforma o tipo do num 1, somente usa temporariamente como uma string, ela continua sendo um numero.
        /*num1 = num1.toString(); //Nesse caso eu alterei o tipo para sempre.
    console.log(typeof num1); //Ela se torna uma String fixa.*/
console.log (num1.toString(2));//Ele me mostra a representação binaria dele

let num3 = 10.895365897;
console.log (num3.toFixed(2));//Arredondamento de casas decimais. Lembrando que eu nao altero o numero, somente arredondo temporariamente, em contas quando eu chamo a variável ainda é utilizado o valor sem arredondar.
console.log(Number.isInteger(num1));//Essa função me retorna V ou F, se ela é ou não um numero inteiro.Nesse caso ele é um numero inteiro então retorna TRUE.
console.log(Number.isInteger(num3));//Nesse caso retorna falso pois meu num3 não é um numero inteiro.
let temp = num1 - 'Olá';
console.log(temp); //Não retorna pois não é um numero, retorna NaN.
console.log(Number.isNaN(temp));//Ele me responde se é uma conta valida ou não, nesse caso não é uma conta valida então me retorna um TRUE, de essa conta não é valida. No caso é falso quando a conta funciona.

let num4 = 0.7;
let num5 = 0.1;

console.log(num4 + num5);//Imprecisão

//num4 += num5; // num1 = num1 + num2. 0.8
//num4 += num5; //0.9
//num4 += num5; //1.0

            /*num4 = parseFloat(num4.toFixed(2));//parseFloat ou Number resolve o problema da imprecisão da conta.
        console.log(num4); //Me mostra o valor da conta.
    console.log(Number.isInteger(num4));//Me fala se é ou não um numero inteiro.*/

num4 = ((num4 * 100) + (num5 * 100))/100;
num4 = ((num4 * 100) + (num5 * 100))/100;
num4 = ((num4 * 100) + (num5 * 100))/100;
console.log(num4);



