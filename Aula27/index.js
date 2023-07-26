let num1 = 9.58945;
let num2 = Math.floor(num1);//Arredonda para baixo o valor de num1 e da o valor dele arredondado para num2. Sempre numero inteiro.
console.log(num2);
let num3 = Math.ceil(num1);
console.log(num3);//Arredonda para cima o valor de num1 e da esse valor arredondado para num3. Sempre numero inteiro.
let num4 = Math.round(num1);//Arredonda para o numero inteiro mais proximo.
console.log(num4);
console.log(Math.max(1,2,5,9,22,89,90,-50,-98-70,1500));//Me retorna o maior valor da sequencia de numeros.
console.log(Math.min(1,2,5,9,22,89,90,-50,-98,-70,1500));//Me retorna o menor valor da sequencia de numeros.
console.log(Math.random());//Gera um numero aleatorio entre 0 e 1, toda vez que eu executo o programa ele gera um numero aleatorio diferente.
const aleatorio = Math.random();//Da um valor aleatorio para a constante.
console.log(aleatorio);
const aleatorio2 = Math.round(Math.random());//Arredonda o numero aleatorio para um numero inteiro. Quando não especifica sempre é entre 0 e 1.
console.log(aleatorio2);
const aleatorio3 = Math.round(Math.random() * (10-5)+5);//Numero aleatorio entre 5 e 10 arredondado para numero inteiro, para nao ser inteiro tem que tirar o .round.
console.log(aleatorio3);
console.log(Math.PI);
console.log(Math.pow(2,10));//Potenciação, nesse caso é 2 elevado a 10.
console.log(2 ** 10);//Mesma coisa da função pow, é uma potenciação.
let num5 = 9;
console.log(num5 **(1/2));//Raiz quadrada.
console.log(100/0);//Em outras linguagens isso geraria um erro, em Js não da erro e é considerado verdadeiro.