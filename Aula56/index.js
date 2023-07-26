//For of
// String     0123456789... indices.
const nome = 'Nicole Starling';//String

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);//Acesso cada letra da string em cada interação do laço.
}

for (let i in nome) {//mesma coisa do anterior escrito de outra forma.
    console.log(nome[i]);//Acesso cada letra da string em cada interação do laço.
}

//Em muitos casos eu preciso do indice, nesses casos será melhor utilizar ou o for classico ou for in, mas para os casos onde eu só quero o valor eu uso o for of.

for ( let valor of nome) {//mesma coisa do anterior escrito de outra forma.
    console.log(valor);//Me retorna o valor.
}

const nomes = ['Nicole', 'Pedro', 'Luiz'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);//Acesso cada nome em cada interação do laço. Os indices em um array é separado por virgula.
}

console.log('#####');

for (let i in nomes) {//mesma coisa do anterior escrito de outra forma.
    console.log(nomes[i]);
}

console.log('#####');

for ( let valor of nomes) {//mesma coisa do anterior escrito de outra forma.
    console.log(valor);//Me retorna o valor.
}

//Para objetos o for of não funciona, pois objeto não é interavel.

//For classico - Geralmente com iteráveis (arrays ou strings).
//For in - Retorna o indice ou a chave (string, array ou objetos).
//For of - Retorna o valor em si (iteraveis, arrays ou strings).