//Capturar evento de submit do formulario
//Classe é usada para selecionar o formulario
//Alt + shift + A - Para comentar um bloco de codigo.

//Peguei o formulario do HTML.
const form = document.querySelector('#form'); 

 form.addEventListener('submit',function(e){ //evento submit escutador.
        e.preventDefault(); //Preveni o default não deixo o formulario ser enviado.
        const inputPeso = e.target.querySelector('#peso');//A targetpropriedade retorna o elemento onde ocorreu o evento .
        const inputAltura = e.target.querySelector('#altura'); //Capturei os dados do evento, altura e peso.

        const peso = Number (inputPeso.value);//Estou pegando o valor do peso. 
        const altura = Number (inputAltura.value);// Converti os imputs para number.
        //Caso retornar um Nan eu vou para as condições de if.

        if(!peso) { //! eu nego o valor, se é positivo vira negativo e vice versa.
            setResultado('Peso inválido!', false);
            return;//Faz com que a função pare, se meu peso for valido o setResultado e o return não vai ser executado. Ai ele confere a altura.
        } //Caso meu peso não for um number eu retorno Peso invalido.

        if(!altura) {
            setResultado('Altura invalida!',false);
            return;
        }//Caso minha altura não for um number eu retorno Altura invalida.
        //Lembrando que o return para o codigo, então se meu peso for invalido ele nem chega a checar minha altura, ele já retorna peso invalido.

        const imc = getImc (peso,altura);//getImc é uma função que esta logo abaixo que calcula o imc atraves do peso e da altura.
        const nivelImc = getNivelImc(imc);//getNivelImc é uma função para retornar texto.

        const msg = `Seu IMC é ${imc} (${nivelImc}).`;//Mensagem que aparece para o usuario.

        setResultado (msg, true);
/*         console.log('Evento previnido.');
        setResultado ('Olá Mundo! '); */
    }); 

    /*
    Menos do que 18,5 abaixo do peso.
    Entre 18,5 e 24,9 peso normal.
    Entre 25 e 29,9 Sobrepeso.
    Entre 30 e 34,9 Obesidade grau 1.
    Entre 35 e 39,9 Obesidade grau 2.
    Mais do que 40 Obesidade grau 3.
    */

    function getNivelImc (imc){ //Lembrando que os arrays tem niveis, nesse caso 6 niveis.
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        else return nivel[0];

    } //Criei um array com a lista dos niveis de peso, e baseado no imc que eu recebo na função e nos niveis do meu array eu determino em qual faixa de peso a pessoa esta. Chequei de trás pra frente.

    function getImc (peso, altura) { //recebe peso e altura para o calculo.
        const imc = peso / altura **2;//calcula o imc.
        return imc.toFixed(2);//retorna meu imc com duas casas decimais.
    } //Calcula meu IMC.
//O addEventListener()método anexa um manipulador de eventos a um elemento.
//e é um evento, ou pode escrever event ou simplesmente o e.
//O método preventDefault() cancela o evento se for cancelável, significando que a ação padrão que pertence ao evento não ocorrerá.

function criaP () {//A função é somente criar um p (parágrafo).
    const p = document.createElement('p');//Criando um elemento, parágrafo.
    //p.classList.add('paragrafo-resultado');//Colocando uma classe no parágrafo p criado.
    return p;
}

function setResultado (msg, isValid){ //ela recebe uma mensagem e se esse resultado é valido.

    const resultado = document.querySelector('#resultado');//Seleciona a div de resultado.
    resultado.innerHTML = '';//Está zerando o resultado.
    const p = criaP();//Criando P.

    if (isValid) { 
        p.classList.add('paragrafo-resultado');//vem do css.
    } else {
        p.classList.add('bad');//vem do css.
    }//Estou checando se foi enviado como verdadeira ou falsa, se é verdadeira ela é valida ai a classe é a com fundo verde. Se for falsa é a com fundo vermelho.


    resultado.appendChild(p);//Insere um elemento/um filho nessa div, nesse elemento nesse resultado.
    p.innerHTML = msg;//Colocando a mensagem dentro do parágrafo.Seu imc é X e em qual nivel esta.
}
//O querySelector()método retorna o primeiro elemento que corresponde a um seletor CSS.