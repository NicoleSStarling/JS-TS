//Prototypes - Base que o JS usa para fazer heranca e trabalhar com programação orientada a objeto.

/*
JavaScript é baseado em prototipos para passar propriedades e metodos de um objeto para outro.

Definição de protótipo.
Protótipo é o termo usado para definir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um prototipo (_proto_) que vem da propriedade prototype da função construtora que foi usada para cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no proprio objeto e depois a cadeia de prototipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

//Construtora -> molde (classe).
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
/*     this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; */
}
//Prototype é um objeto que já esta automaticamente atrelado a função.

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
};//é mais eficiente do que deixar dentro da função construtora.

//Instancia da função construtora. 
const pessoa1 = new Pessoa ('Nicole', 'Starling');//<- Pessoa = Função construtora.
const data = new Date();

console.dir(pessoa1);//Mostra no navegador
console.dir(data);