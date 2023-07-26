const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener ('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
    }
});

function limpaImput () {
    inputTarefa.value = '';
    inputTarefa.focus ();
}

function criaBotaoApagar (li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    //botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'apagar essa tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa (textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);//Faz as tarefas aparecerem na pagina.
    limpaImput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener ('click', function() {//Pegamos o click doo botão.
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});//Quando clica no botão pega o texto que esta no input e joga pra função criaTarefa.

document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains('apagar')){
        el.parentElement.remove();//Remove o botão, remove todo o li.
        salvarTarefas();
    }
});

function salvarTarefas (){//pegar o texto de todos os li que tiver, para salvar.
    const liTarefas = tarefas.querySelectorAll('li');
//quero pegar os textos dentro do li.
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();//Substituindo a palavra apagar para um texto vazio.
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);//Uma string que eu posso converter de volta em um array.
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas () {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);//Convertendo a string de volta em um array.

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();