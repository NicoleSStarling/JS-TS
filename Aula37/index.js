/*
Operadores de comparação
> maior que
>= maior que ou igual a 
< menor que 
<= menor que ou igual a 
== igualdade (checa valor) Não se usa!
=== igualdade estrita (checa valor e tipo)
!= diferente (checa valor) Não se usa!
!== diferente estrito (checa valor e tipo)
*/

console.log(10 > 5); // 10 é maior que 5, responde true ou false.
console.log(10 >= 5); //se 10 for maior que 5 ou se forem numeros iguais retorna true, ela é verdadeira se qualquer uma das condições forem verdadeiras.
console.log (10 >= 11); //É false pois nenhuma das condições é verdadeira.
console.log(10 < 11); //10 é menor que 11, retorna true ou false.
console.log(10 <= 9); //10 não é nem menor e nem igual a 9, por isso retorna false, se qualquer uma das condições fossem atendidas retornaria true.
console.log(10 == 10); //Quando os numeros são iguais retorna true, e quando diferentes false. Não é usualmente usados.
console.log(10 === 10); //Quando os numeros são iguais retorna true, e quando diferentes false. Usualmente usados, checa valores e tipos.
console.log(10 != 11); //Se for diferente retorna true e se forem iguais retorna false. Não se usa.
console.log(10 !== 10); //Se for diferente retorna true e se forem iguais retorna false. Usado normalmente.

