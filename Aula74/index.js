//IIFE -> immediately invoked function expression 

function qualquerCoisa (){
    console.log(123456);
}
qualquerCoisa();//Minha função é executada imediatamente.

//Quando eu crio uma IIFE, é uma função anonima, ela não tem nome, ela é invocada imediatamente quando é criada.

(function() {
    console.log(123456);
    const nome = 'Nicole';
})();//Será executada imediatamente. E não está no escopo global do meu codigo.
const nome = 'Pedro';
//Como a minha constante nome Nicole esta protegida por uma função anonima, ela não tem conflito com minha constante nome Pedro que está fora da minha função.