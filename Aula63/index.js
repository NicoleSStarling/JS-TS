//Tratando e lançando os erros.
//Qualquer codigo que possa gerar um erro pode vir dentro do bloco try e se o erro ocorrer cai dentro do bloco catch.

try {
    console.log(naoExisto);//variavel naoExisto não foi declarada.
} catch (err) {//captura o meu erro.
    console.log('naoExisto não existe.')
}

function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number' ) {
        throw ('x e y precisam ser numeros.')
    }
    return x + y;
}

console.log(soma(1, 2));