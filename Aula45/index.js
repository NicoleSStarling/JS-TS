/* Operação ternaria
? :
(condição) ? 'Valor para verdadeiro' : 'Valor para falso';
*/

//Supondo um site com usuarios comuns e usuarios vip, onde comuns são abaixo de 1000 pontos e os vips possuem mais de 1000 pontos.
const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP!' : 'Usuario normal!';
console.log(nivelUsuario);

//A linha acima faz exatamente a mesma coisa do if e else abaixo. A constante nivelUsuario verifica, pontuacaoUsuario é maior ou igual a 1000, o ponto de interrogação verifica se for verdadeiro ele é um usuario Vip, e os dois pontos verifica se ele nao tem mais de 1000 pontos.

/* if (pontuacaoUsuario >= 1000) {
    console.log('Usuario VIP!');
} else {
    console.log ('Usuario normal!');
} */

//A operação ternaria faz as vezes do if e else quando são somente os dois com intuito de simplificar o codigo.

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

//Estou setando um valor padrão para a variavel corPadrao, primeiro se checa se o usuario indicou uma cor, se não usa a cor padrão.

console.log(nivelUsuario,corPadrao);