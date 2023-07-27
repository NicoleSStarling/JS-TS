//A função definida com a palavra function tem uma variavel especial que chama arguments que sustenta todos os argumentos enviados.
function funcao (){
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);

function funcao2 (a, b, c, d, e, f){
    console.log(a, b, c, d, e, f);
}
funcao2(1, 2, 3);

function funcao3 (a, b = 0){// Do mesmo jeito que fiz embaixo eu coloquei um valor padrão para b, caso eu não envie um valor para ele.
    //b = b || 0;//b está assumindo 0 como valor padrão caso eu não envie nenhum valor para ele.
    console.log(a + b);
}
funcao3 (2);//mandei apenas o valor de a.

function funcao4 ({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
let obj = {nome:'Luiz', sobrenome:'Otávio', idade: 20};
funcao4(obj);

function conta(operador, acumulador, ...numeros){
    console.log(operador, acumulador, numeros);
}
conta('+', 0, 20, 30, 40, 50);

function conta2(operador, acumulador,...numeros){
    for (let numero of numeros){
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta2('+', 0, 20, 30, 40, 50);