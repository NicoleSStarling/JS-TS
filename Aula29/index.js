//Arrays pode ser considerado uma lista ou uma coleção de coisas.Por exemplo colocar em uma variaver uma lista de alunos.

const alunos = ['Luiz', 'Maria', 'João']; //Isso é um array. Deixar o mais organizado possivel, colocar um tipo de dado apenas por array, strings ou numeros ou bloeanos, sempre separados.

console.log(typeof alunos);//Array é considerado um objeto.
console.log(alunos instanceof Array);//Pergunto diretamente se é um array, se retornar true é um array se retornar false não é um array.

/*alunos.push('Luiza'); //Adicionados na lista de alunos.
alunos.push('Nicole');
alunos.push('Pedro');

console.log(alunos[5]);//me mostra o item 5 da lista
console.log(alunos.slice(0,3));//Me mostra a fatia da array, me mostra entre 0 e 3.
console.log(alunos.slice(0,-2));//tira os dois ultimos elementos da lista e me mostra o restante.*/


//            0123456789.. são indexados
const nome = 'Nicole Starling'

//                   0        1       2
const alunos2 = ['Luiz', 'Maria', 'João'];//Os arrays também são indexados, porem de maneira diferente das string, eles são indexados por elementos.

//console.log(alunos);//Exibe o array completo.
//console.log(nome[0]);//Acessado a primeira letra da string nome;
//console.log(alunos2[0]);//Exibe somente o primeiro item da lista do array.
//alunos2 [0] ='Eduardo';//Modifica o item da lista.
//alunos2[3] ='Nicole';//Acrescenta item na lista, quando se sabe quantos itens tem.

//delete alunos2 [1];//deleta o indice 1 porem mantem os outros em seus devidos indices, fica o indice 1 vazio sem nenhum nome nele.
//console.log(alunos2);

//console.log(alunos2[50]);//Undefined quando não exite o item que eu estou pedindo pra mostrar.

//alunos2.pop();//Excluo o ultimo item da lista.

/*const removido = alunos2.pop();//da para a constante variavel o nome que foi removido.
console.log(removido);//mostra o nome que foi removido.
console.log(alunos2);//mostra a lista sem o nome.*/

/*alunos2.shift();//Remove o primeiro item da lista.
const removido = alunos2.shift();//da para a constante variavel o nome que foi removido.
console.log(removido);//mostra o nome que foi removido.
console.log(alunos2);//mostra a lista sem o nome.*/

//alunos2.unshift('Pedro');//Adiciona item na lista no inicio da lista arrastando os itens restantes para o fim da lista.

        /*alunos2[alunos2.length] = 'Pedro';//Adiciona item no array no fim da lista.
        alunos2[alunos2.length] = 'Paulo';
        alunos2[alunos2.length] = 'Henrique';*/
//alunos2.push('Pedro');//Push é uma função que adiciona item na lista como feito anteriormente.

//console.log(alunos2);

//console.log(alunos2.length);//Para saber o tamanho do array.
