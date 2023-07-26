//Manipular prototypes de objetos.

//Quando eu crio um objeto literal, como esta abaixo, o JS faz a chamada da função (new Objct). E a função construtora tem atrelada a ela um prototype.

const objA = {
    chaveA: 'A'
    //__proto__: Object.prototype.
};

const objB = {
    chaveB: 'B'
        //__proto__: objA - Como fazer isso..
};

Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);

function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual/100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100));
};

const p1 = new Produto ('Camiseta', 50);
//p1.desconto(100);

//Aproveitando as funções criadas de aumento e desconto para uma outra função no caso p2.
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);

p1.aumento(100);
console.log(p1);
console.log(p2);

const p3 = Object.create(Produto.prototype);
console.log(p3);