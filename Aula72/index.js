//closures é a habilidade da funçao de acessar seu escopo lexico.

function retornaFuncao (nome){
    return function (){
        return nome;
    }
}

const funcao = retornaFuncao ('Nicole');
const funcao2 = retornaFuncao ('Pedro');
console.log(funcao);

console.log(funcao(), funcao2());