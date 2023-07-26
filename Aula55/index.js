//For in - lê os índices ou chaves do objeto.
//Arrays simples podem ser visto sendo chamados de vetores.
const frutas = ['pera', 'maçã', 'uva'];

/* for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]); //mostrando as frutas.
}  */

for (let indice in frutas) {
    //console.log(i); //lendo os indices do array. 0,1,2.
    console.log(frutas[indice]); //mostrando o que esta escrito no array.
}

const pessoa = {
    nome : 'Nicole',
    sobrenome : 'Starling',
    idade : 28
};

for (let chaves in pessoa) {
    console.log(chaves);//pego o que esta nas chaves. Nome, Sobrenome e idade.
}

console.log(pessoa.nome);//mostrando o nome da pessoa.

console.log(pessoa['nome'], pessoa ['sobrenome'], pessoa ['idade']);//Outro jeito de mostrar os dados da pessoa.

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);//mostra o nome da chave e o valor dela.
}