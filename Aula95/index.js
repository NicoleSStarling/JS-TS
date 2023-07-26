//Heranca
//E-comerce - Camiseta = cor, caneca = material.(PRODUTO)
//Aumento e desconto

function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta (nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;//Epecificação somente de Camiseta.
}

//Camiseta.prototype.constructor = Camiseta.
Camiseta.prototype = Object.create(Produto.prototype);//O prototype da camiseta vai ser igual ao prototype do produto.
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual/100));
};

function Caneca (nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function (valor){
            if(typeof valor ==! 'number') return;
            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca ('Nicole', 80, 'porcelana', 5);
caneca.estoque = 9;
console.log(caneca);

const produto = new Produto('Generico', 112);

const camiseta = new Camiseta ('Regata', 75, 'preta');
camiseta.aumento(100);
console.log(produto);
console.log(camiseta);

//Camiseta é uma especialização de produto, ou seja, Camiseta herda tudo que tem no produto, mas Camiseta pode ter suas especificações proprias.