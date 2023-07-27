//Função construtora.
//Quando se utiliza a palavra new, quer dizer que estamos utilizando o molde da função.

function Calculadora(){
this.display = document.querySelector('.display');


this.inicia = () => {
    this.capturaCliques();//Captura o evento de clique do botão.
    this.capturaEnter();
};

this.capturaEnter = () => {
    this.display.addEventListener('keypress', e => {
        if (e.keyCode === 13) {
            this.realizaConta();
        }
    });
};

this.capturaCliques = () => {
    document.addEventListener('click', e => {
        const el = e.target; //Jogando qual botão esta sendo clicado no el.
        if (el.classList.contains('btn-num')) this.addNumDisplay(el);//Se na lista de classes do botão que está sendo clicado contém a classe btn-num nos adicionamos o numero no display.this.addNumDisplay(el), estou enviando o botão que foi clicado.
        if (el.classList.contains('btn-clear')) this.clear();
        if (el.classList.contains('btn-del')) this.del();
        if (el.classList.contains('btn-eq')) this.realizaConta();
    });
};
this.realizaConta = () => {
    try {
        const conta = eval (this.display.value);

        if(!conta){
            alert('Conta inválida!');
            return;
        }

        this.display.value = conta;
    } catch (e){
        alert ('Conta inválida!');
        return;
    }
}

this.addNumDisplay = el => {
    this.display.value += el.innerText;//Colocando no display o que já estava lá mais o botão que foi clicado.
    this.display.focus();
};

this.clear = () => this.display.value = ''; //Quando a função só tem uma linha pode retirar as chaves ou escrever igual a this.addNumDisplay feita anteriormente.


this.del = () => this.display.value = this.display.value.slice(0, -1);//Apago um numero do meu display por vez.

}



const calculadora = new Calculadora(); //Usa o meu molde para criar um novo objeto de calculadora.
calculadora.inicia();