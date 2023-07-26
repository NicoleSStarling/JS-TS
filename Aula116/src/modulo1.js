const nome = 'Nicole';
const sobrenome = 'Starling';
const idade = '29';

function soma (x, y){
    return x +y;
}
//Cada modulo tem seu 'mundo', nada que esta dentro do modulo está disponivel para ninguém, para fora do arquivo, não consigo usar outro arquivo para importar coisas de dentro do meu modulo. Para que isso funcione, eu preciso exportar.
//E a maneira mais simples de eu exportar, é eu exportar pelo nome das coisas que eu quero exportar. No exemplo abaixo eu quero exportar o nome.
//export {nome};
//Agora eu posso importar em outro modulo o nome.

export {nome, sobrenome, idade, soma};