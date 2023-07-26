/*
Entre 0 e 11 - Bom dia 
Entre 12 e 17 - Boa Tarde
Entre 18 e 23 - Boa noite
*/

const hora = 30;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia !');
} else if (hora >=12 && hora <= 17) {
    console.log('Boa tarde !');
} else if (hora >=18 && hora <=23) {
    console.log('Boa noite !');
} else {
    console.log('Olá !');
}

//If pode ser usado sozinho com a condição dele, o else if não pode ser usado sozino.
//Sempre que utilizo a palavra else, preciso de um if antes.
//Posso ter varios else ifs na checagem, inumeros.
//Só posso tem um else na checagem, por ultimo.
//Podemos usar condições sem else if, utilizando apenas if e else.

const tenhoGrana = true;

if(tenhoGrana) {
    console.log('Vou sair de casa'); //Só roda se minha condição for true
} else {
    console.log('Não vou sair de casa'); //Roda se minha condição for false.
}

/*const hora = 10;

if (hora < 12) { //Se a hora for menor que 12 fale bom dia.
    console.log('Bom dia! ');
} else if () { //Se a condição anterior não for atendida verifica essa..
*/