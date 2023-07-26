//While e Do while
// Quando utilizamos algum for normalmente sabemos qual o tamanho do laço.
//Quando utilizamos o while nos nao sabemos o tamanho do laço.

let i = 0; //Inicializando minha variavel.
//dentro dos parenteses vai a condição e dentro das chaves o que eu preciso realizar.
while (i <= 10) {
console.log(i);
i++; //Atualizando a variavel de controle, se não atualizar vira um laço infinito.
}


//Função que gera um numero aleatorio entre 0 e 50;

function random (min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random (min, max);

while (rand !== 10) {
    rand = random (min, max);
    console.log(rand);
}

console.log('#######');


do {
    rand = random (min, max);
    console.log(rand);
} while (rand !==10);

//do while primeiro eu faço e depois eu checo a condição.