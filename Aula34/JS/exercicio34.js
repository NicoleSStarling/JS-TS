function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    /*form.onsubmit = function (evento) {
        evento.preventDefault();//Previne que o formulario seja enviado e eu perca meus dados anteriores.
        alert (1);
        console.log('Foi enviado!');
    };*/

    //let contador = 1;
    function recebeEventoForm (evento) {
        evento.preventDefault();
        //console.log(`Form não foi enviado! ${contador}`);
        //contador++;
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push ({ //Adicionamos os dados enviados dentro desse objeto que esta dentro do array.
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
    }


    form.addEventListener ('submit', recebeEventoForm); //Form coloca um escutador de eventos no meu formulario.
}
meuEscopo ();