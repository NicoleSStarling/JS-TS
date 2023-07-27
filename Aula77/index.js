//Funções construtoras - Cria novos objetos.
//Colnstrutora -> Pessoa (new), inicia com a primeira letra maiuscula, molde para gerar novos objetos. 
//this, atributos ou métodos públicos.

function Pessoa (nome, sobrenome) {
    this.nome = nome;//this se refere a pessoa que esta sendo criada.
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': Sou um método!');
    };
}//Como se fosse um molde.

const p1 = new Pessoa ('Nicole', 'Starling');
const p2 = new Pessoa ('Pedro', 'Henrique');

console.log(p2.nome);
//A palavra new cria um novo objeto vazio, faz o this apontar para o objeto que esta sendo utilizado.
p1.metodo();