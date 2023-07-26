// Atribuição via desestruturação

/* let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b,c,a];
[a,b,c] = letras;

console.log(a,b,c);

//               0       1     2     3     4     5     6     7     8.... indices
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]; //valores */

/* const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(resto); */

/* const [um, , três, , cinco, , sete] = numeros;//pulei variaveis usando apenas espaço e virgulas.
console.log(um, três, cinco); */

//...rest - usado no sentido de pegar o resto.
//...spread - usado no sentido de espalhar ou distribuir algo.

// Atribuição via desestruturação usando OBJETOS
// Lembrando que em objetos se usa chaves.

const pessoa = {
nome: 'Nicole',
sobrenome: 'Starling',
idade: '28',
endereco: {
    quadra: '208',
    lote: '11',
    residencial: 'Canto do Sabia',
    apartamento: '206'
}
};

/* const nome = pessoa.nome;//Peguei o nome e joguei ele em uma variavel.
console.log(nome); */

//Atribuição via desestruturação
const {nome, sobrenome, idade} = pessoa;
console.log(nome, sobrenome, idade);
