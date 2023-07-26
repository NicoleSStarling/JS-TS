/*
Operadores lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/

/*
Valores avaliados em falso
0
'' , "", ``. Valores vazios.
null / undefined
NaN
Qualquer coisa diferente disso avalia em true.
*/

console.log('Luiz' && 'Maria'); //Retorna o ultimo valor checado.
console.log('Luiz' && NaN && 'Maria' );//Me retorna o valor falso.

function falaOi () {
    return 'Oi';
}
let vaiExecutar = true;
console.log(vaiExecutar && falaOi());

//O || OR precisa de apenas um valor verdadeiro para retornar o valor verdadeiro.

console.log(0 || false || null || 'Nicole Starling' || true); //Ele retorna o primeiro valor verdadeiro, ele retorna Nicole Starling, ele retorna o primeiro pq ele precisa apenas de um valor verdadeiro, e quando ele acha um verdadeiro ele para ai e mostra ele.

