/*
let e var
let eu nao consigo sobrescrever, com isso quando eu declaro uma variavel usando let eu nao consigo sobrescrever. 
Ex: let nome = 'Nicole';
let nome = 'Luiz';
não funciona.
já quando eu declaro uma variavel usando var eu consigo sobrescrever ela.
Ex: var nome = 'Nicole';
var nome = 'Luiz';
o que vale é o ultimo valor dado a variavel declarada por var.
*/

const verdadeira = true;

//Let tem escopo de bloco {...bloco}
//Então se eu subscrevo let dentro de um bloco, vale o que eu declarei dentro daquele bloco.
//Var só tem escopo de função.

let nome = 'Luiz';
var nome2 = 'Nicole';

if (verdadeira) {
    let nome = 'Otávio';
    console.log (nome, nome2);

    if (verdadeira) {
        console.log ('ok');
    }//isso é um bloco aninhado.
}

var sobrenome = 'Starling';

function falaOi () {
    console.log(sobrenome);//Mesmo sendo declarada fora da função eu posso usar dentro da função;
    var nome = 'Luiz';
}

console.log (nome);//Foi declarado dentro da função por isso não aparece.
falaOi();