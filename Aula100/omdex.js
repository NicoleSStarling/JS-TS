//Factory functions and Prototypes
const falar = {
    falar(){
        console.log(`${this.nome} está falando.`);
    },
};
    const comer = {
    comer(){
        console.log(`${this.nome} está comendo.`);
    },
};
    const beber = {
    beber(){
        console.log(`${this.nome} está bebendo.`);
    },
};

const pessoaPrototype = {...falar};

function criaPessoa (nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}
const p1 = criaPessoa ('Nicole', 'Starling');
console.log(p1);