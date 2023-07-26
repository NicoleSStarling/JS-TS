//defineProperty - Define uma propriedade.
//defineProperties - Define mais de uma propriedade.
//Vamos falar sobre congelar parte do codigo deixando o restante livre, na aula passada vimos o freeze que congela o objeto e não consigo fazer mais nada dentro daquele objeto.

//Função construtora que cria um produto.
//A propriedade estoque fique travada, não possa ser alterada..

function Produto (nome, preco, estoque){
/* this.nome = nome;
this.preco = preco; */
//this.estoque = estoque;//Forcar que essa variavel não possa ser alterada.

Object.defineProperty(this, 'estoque', {
    enumerable: true,//mostra o estoque junto das outras.
    value: estoque, //valor da chave.
    writable: false, //O estoque não pode ser alterado.
    configurable: true //Pode reconfiguravel a chave? true ou false.
});

Object.defineProperties(this,{
    nome: {
        enumerable: true,//mostra o estoque junto das outras.
        value: nome, //valor da chave.
        writable: false, //O estoque não pode ser alterado.
        configurable: true //Pode reconfiguravel a chave? true ou false.
    },
    preco: {
        enumerable: true,//mostra o estoque junto das outras.
        value: preco, //valor da chave.
        writable: false, //O estoque não pode ser alterado.
        configurable: true //Pode reconfiguravel a chave? true ou false.
    },
});
}
const p1 = new Produto('Camiseta', 20, 3);//Nome é uma variavel publica, posso acessar de fora do meu objeto.
console.log(p1);

for (let chave in p1){
    console.log(chave);
}