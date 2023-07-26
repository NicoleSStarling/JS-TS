const array = [1,2,3];
array.push(4);//Acrescentando 4 no meu array.
array[0]='Nicole';//Trocando meu elemento 1 por Nicole.
console.log(array);
//Eu posso mecher nos elementos dentro do meu arrey, mas não posso reatribuir o valor do meu array. array='Outra coisa', não funciona.

//OBJETOS
//nome,sobrenome e idade são variaveis relacionadas.
const nome01 = 'Nicole';
const sobrenome01 = 'Starling';
const idade01 = '28';

const nome02 = 'Pedro';
const sobrenome02 = 'Alves';
const idade02 = '27';

//Colchetes é um array e chaver é um objeto.
const pessoa1 = {
    nome: 'Nicole',
    sobrenome: 'Starling',
    idade: '28'
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
//Mesmo objetivo do anterior, e não melhora muito, pois ainda se tem que criar muitos const dependendo do numero de pessoas cadastradas.

//Posso criar uma função que cria esses objetos para mim.
//Quando eu crio na função (nome,sobrenome, idade), isso se chama parametro. E quando eu envio um valor para os parametros isso se chama argumento.
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}//Essa função é considerada uma fabrica de objetos.

/*function criaPessoa (nome, sobrenome, idade) {
    return {nome,sobrenome,idade}
}*/ 
//É a mesma coisa da anterior mas como nome sobrenome se repete pode se escrever assim simplificando e sem repetições.

const pessoa3 = criaPessoa('Nicole', 'Starling', '28');
const pessoa4 = criaPessoa('Pedro', 'Alves', '29');
const pessoa5 = criaPessoa('Luiz', 'Antonio', '68');
const pessoa6 = criaPessoa('Junior', 'Castro', '37');
const pessoa7 = criaPessoa('Zaira', 'Vieira', '66');
console.log(pessoa3.nome, pessoa4.nome, pessoa5.nome, pessoa6.nome, pessoa7.nome,);

//Quando a função está dentro de um objeto ela é chamada de método. Funções e métodos executam ações.

const pessoa8 = {
    nome: 'Joaquim',
    sobrenome: 'Pereira',
    idade: 25,

    fala() {//Não preciso da palavra fuction aqui.Metodo fala.
        console.log(`${this.nome} ${this.sobrenome} está falando oi, a minha idade atual é ${this.idade}`);//Nesse contexto this quer dizer pessoa8.
    },

    incrementaIdade (){
        ++this.idade; //++ é um operador de incremento.
    }
}

pessoa8.fala();//Se eu quero que a pessoa8 fala e só escrever assim. A ação que está dentro do meu objeto é executada.
pessoa8.incrementaIdade();//Como se fosse um console.log. Incrementa idade aumenta 1 ano na idade.
pessoa8.fala();



