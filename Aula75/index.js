//Factory functions - Funções que retornam objetos.

function criaPessoa1 (nome, sobrenome){
    return{
        nome, sobrenome
    };
}
const p1 = criaPessoa1 ('Nicole', 'Starling');
console.log(p1); //{ nome: 'Nicole', sobrenome: 'Starling' }
//Quando uma funçao está dentro de um objeto chamamos essa funçaõ de metodo.

function criaPessoa (nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,

        nomeCompleto (){
            return `${this.nome} ${this.sobrenome}`;
        },

        fala: function(assunto){//recebo parametros.
            return `${nome} está ${assunto}`;
        },//this.nome, acesso a chave nome.

        altura,
        peso,

        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);//Duas casas decimais.
        }
    };
}

const p2 = criaPessoa('Nicole', 'Starling', 1.61, 62);
console.log(p2.imc());
console.log(p2.fala('falando sobre JS'));
console.log(p2.nomeCompleto());