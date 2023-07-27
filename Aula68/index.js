//Declaração de função (function hoisting)-Eleva as declarações de funções e variaveis declaradas com a palavra var pro topo do JS. eu posso executar antes ou depois de criar ela.
//falaOi(); poderia ter chamado ela antes de ter criado.
function falaOi (){
    console.log('Oi!');
}
falaOi();//Chamai apor criar a função.

//First class objects (Objetos de primeira classe) - Posso tratar as funções como um dado.

const souUmDado = function (){ 
    console.log('Sou um dado.')
};//criei uma variavel e joguei uma função dentro da var. Uma constante recebe uma função como dado.
//souUmDado();

function executaFuncao (funcao){
    console.log('Vou executar sua função abaixo:')
    funcao();
}//Uma função que executa outra função, que recebe uma função como parametro.
executaFuncao(souUmDado);//Minha função executou a função souUmDado.

//Arrow function - Uma declaração de função curta.
const funcaoArrow = () => {
    console.log('Sou uma arrow funtion.')
};
funcaoArrow();

//Dentro de um objeto eu posso ter uma função.
const obj  = {
    falar:function (){
        console.log('Estou falando!')
    }
};
obj.falar();