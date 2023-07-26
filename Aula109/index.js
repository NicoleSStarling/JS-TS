function rand (min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi (msg, tempo) {
    return new Promise ((resolve, reject) => {
        if(typeof msg !== 'string') reject ('BAD VALUE');
        
        setTimeout (() => {
            resolve(msg.toUpperCase() + '- Passei na promise');
        }, tempo);//A função vai demorar o tempo (escrito) para executar a função.
    });
}

//Promise.all Promise.race Promise.resolve Promise.reject
//Promise.race retorna a primeira a ser executada.
//Promise.resolve entrega uma promessa já resolvida, já tenho os dados em mãos.
//Promise.reject cai sempre no erro.

const promises = [ 
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Outro valor'
];

Promise.all(promises)
    .then(function(valor){
        console.log(valor);
    })
    .catch(function(erro){
        console.log(erro);
    });