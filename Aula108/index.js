//Promisses - Promessa, muitas vezes buscamos recursos onde nao temos noção de quando esses recursos vão retornar. Ex: Pede dados de um usuario em ua API, você não tem a noção exata de quando esses dados vão voltar para serem trabalhados dentro do codigo.

function rand (min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
//Resolve - Esse codigo executou com sucesso então resolve ele pra mim.
//Reject - Deu um erro no código então rejeita pra mim.
//São parametros.
function esperaAi (msg, tempo) {
    return new Promise ((resolve, reject) => {
        if(typeof msg !== 'string') reject ('BAD VALUE');
        
        setTimeout (() => {
            resolve(msg);
        }, tempo);//A função vai demorar o tempo (escrito) para executar a função.
    });
}

esperaAi('Frase 1', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 2', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    return esperaAi (1994, rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
})
.catch( e => {
    console.log('ERRO:', e);
});
