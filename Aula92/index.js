//Métodos uteis para objetos.

/*
Object.values
Object.entries
Object.assign (des, any)
Object.getOwnPropertyDescriptor (o, 'prop')
...(spread)

//Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define varias propriedades)
Object.defineProperty (define uma propriedade)
 */

const produto = { nome: 'Caneca', preco: 1.8};
const outraCoisa = produto; //Esta apontando pro mesmo endereço da memoria que produto.

outraCoisa.nome = 'Nicole';//Se eu altero outraCoisa eu altero produto, e vice versa.
console.log(produto);

//Vamos copiar e não apontar pro mesmo local da memoria.

const produto2 = { nome: 'Caneca', preco: 1.8};
const outraCoisa2 = {...produto}; //Spreed operator, espalho o meu produto dentro de outra coisa.
//Com isso se eu altero um eu nao mexo no outro.
outraCoisa2.nome = 'Pedro';//Troquei o meu nome de outraCoisa2 para pedro mas não alterei o meu produto2 original.
console.log(produto2);

//Usando Object.assign (des, any) para copiar objetos.
const produto3 = {nome:'Produto', preco: 2.8};
const caneca = Object.assign({}, produto, {material: 'porcelana'});//Criei um opbjeto vazio, e copiei tudo que está em produto3 pra dentro desse objeto vazio.

caneca.nome = 'Outra Coisa';
caneca.preco = 28.60;
console.log(produto3);
console.log(caneca);
console.log(Object.keys(produto3));// Ex de Object.keys (retorna as chaves)

//Object.getOwnPropertyDescriptor (o, 'prop').

const produto4 = {nome: 'Davi', preco: 280};
console.log(Object.getOwnPropertyDescriptor(produto4, 'nome'));
/* Essa propriedade me retorna esses valores
os quais eu posso alterar.
{ value: 'Davi', 
writable: true, 
enumerable: true, 
configurable: true } */

console.log(Object.values(produto4));//Exemplo de Object.values, me mostra os valores.
console.log(Object.entries(produto4));//Exemplo de Object.entries, me mostra as chaves e os valores das chaves em objetos diferentes.


