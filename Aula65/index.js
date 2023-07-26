function mostraHora () {
    let data = new Date ();

    return data.toLocaleTimeString ('pt-BR', { hour12: false});
}

const timer = setInterval (function(){//colocando o set interval dentro de uma variav
    console.log(mostraHora());
}, 1000);

setTimeout (function(){
    clearInterval(timer);
}, 3000);

setTimeout(function(){
    console.log('Olá mundo!');
}, 5000);

/* setInterval (function(){
    console.log(mostraHora());
}, 1000); */

/* function funcaoDoInterval (){
    console.log(mostraHora());
}

setInterval (funcaoDoInterval, 1000); */ //Vai configurar um intervalo de tempo para que uma função seja executada em determinado momento.

