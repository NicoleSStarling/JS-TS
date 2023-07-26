//Classes
//É um modo diferente de escrever uma função construtora.

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando!`);
    }

}

const p1 = new Pessoa('Nicole', 'Starling');
/* const p2 = new Pessoa('Pedro', 'Henrique');
const p3 = new Pessoa('Jacqueline', 'Luzzi');
const p4 = new Pessoa('Davi', 'Luiz'); */
console.log(p1);

function Pessoa2 (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando!`);
};

const p2 = new Pessoa2 ('Davi', 'Luiz');
console.log(p2);
