//Factory functiom ela retorna um objeto.
//dentro do meu return é parte do meu objeto.
//Metodos ficarao mais em baixo do meu return, e atributos/variaveis dentro do meu objeto ficarao mais em cima do meu return.
//Display esta dentro de um atributo do meu objeto. Com isso posso acessar ele com this.display.
//Clique botões vem para pegar o evento do clique, e quero jogar todos os valores dos botoes no display (mostrar para o usuario qual botão foi selecionado). Criei uma constante el que armazena qual botão foi clicado.
//if(el.classList.contains('btn-num')) - Se o elemento (el) contem a classe btn-num entra dentro desse if.
//Quando um metodo vai ser chamado dentro de outro metodo eu preciso da palavra this. Por exemplo meu método cliqueBotoes precisa ser iniciado dentro do meu inicia, copm isso ele fica como this.cliqueBotoes.
//Erol functions nao muda o comportamento do this. O this fica travado em quem criou o elemento.
//O this varia de acordo com quem está chamando ele.
//Função eval tenta executar minha conta a qualquer custo.**Perigoso**
function criaCalculadora() {

    return {

        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBotoes();
            this.clearDisplay();
            this.pressionaEnter();
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        clearDisplay(){
            this.display.value = '';
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if (!conta){
                    alert('Conta inválida!');
                    return;
                }

                this.display.value = String(conta);

            } catch (e){
                alert('Conta inválida!');
                return;
            }
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },//slice (0, -1), o tamanho da string -1 caractere.

        cliqueBotoes() {
/*             //this -> calculadora
            document.addEventListener('click', function(e) {
                const el = e.target;
                //this -> document */

                document.addEventListener('click', e=> {
                    const el = e.target; //Erol function para meu this não mudar dentro da função.

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
//Pegando do elemento (el), o texto dele, e mando para valor.
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
                this.display.focus();
            });
            //.bind - Falando para minha função usar o meu this, no caso calculadora.
        },
        btnParaDisplay(valor) {
            this.display.value += valor;//Concatenando o que estiver no display + o botão que foi clicado.
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();//metodo da minha calculadora.