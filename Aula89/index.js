//O objeto literal é construido a partir de chaves.

const pessoa = {
    nome: 'Nicole',
    sobrenome: 'Starling'
};//É uma chave que utilizo para acessar um valor dentro do objeto, nome no exemplo é uma chave e Nicole é o valor.
console.log(pessoa['nome']);//Tipo de notação diferente.
console.log(pessoa.sobrenome);

//Construtor de objeto.

const pessoa1 = new Object();
pessoa1.nome = 'Pedro';
pessoa1.sobrenome = 'Henrique';
pessoa1.idade = 29;

pessoa1.falarNome = function(){
    return(`${this.nome} está falando o seu nome.`);
};//Esta atrelado a pessoa 1, então quando usar o this dentro da função ela vai apontar para o objeto pessoa1.
console.log(pessoa1.falarNome());

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
console.log(pessoa1.getDataNascimento());

//delete pessoa1.nome;//Apaga o pessoa1.nome.
/* console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1); */
//Funções e métodos estão dentro do objeto faz com que se tenha acesso as coisas do objeto dentro da função.

for (let chave in pessoa1){
    console.log(chave);
}

//Podemos ter dois tipos de funções que são moldes para criar novos objetos.
//Factory functions / Constructos functions - Padrão para ser seguido.
//Factory functions - Uma função que cria algo.

function criaPessoa (nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto (){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Nicole', 'Starling');
console.log(p1.nomeCompleto);

//Constructos functions - Funções que constroem objetos.
//New cria um objeto vazio {}, e atrela a palavra this dentro dessa função ao objeto.
function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Nicole', 'Starling');
console.log(p2);

//Object.freezer(x); Trava o objeto, ou o this..

