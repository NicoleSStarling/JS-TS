// Funções Geradoras - Tem um recurso de pausar o codigo em determinado local.

function* geradora1 (){
    //Código qualquer ...
    yield 'Valor 1';
    //Código qualquer ...
    yield 'Valor 2';
    //Código qualquer...
    yield 'Valor 3';
}
//Da primeira vez que eu chamar a função geradora vai me retornar o valor 1, da segunda o valor 2 e da terceira o valor 3.
const g1 = geradora1();
/* console.log(g1.next());//{ value: 'Valor 1', done: false } - Retornou o valor 1 o done: false significa que ainda tem codigo a ser executado. */

/* console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value); */

for(let valor of g1){
    console.log(valor);
}
//Uma função geradora que delega função a outra função geradora.
function* geradora2 (){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora3 (){
    yield* geradora2();
    yield 3;
    yield 4;
    yield 5;
}

const g3 = geradora3();
for(let valor of g3) {
    console.log(valor);
};
