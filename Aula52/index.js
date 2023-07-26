//FOR classico

/* console.log('Linha 0');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');
console.log('Linha 6'); */

/* for (){ //dentro dos (), se cria uma variavel, criar uma condição para parar o laço e precisa incrementar ou decrementar a variavel de controle.
} */

//i - index, inicializei a variavel, coloquei a condição de parada, i ++ significa que em cada volta do laço sera acrescentado 1 no i.
for (let i = 0; i <= 6; i++) {
    const par = i %2 === 0 ? 'par' : 'ímpar';//verificando se é par ou não.
    console.log(i, par);
    console.log(`Linha ${i}`);
}

const frutas = ['Maça', 'Banana', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}