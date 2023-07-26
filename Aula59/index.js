//BREAK E CONTINUE 
//Permite que se tenha controle de quando pular um elemento ou quebrar um laço e terminar o laço a qualquer momento. Funciona em todos os laços.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* for(let numero of numeros) {
    console.log(numeros);//mostra cada iteração do laço, ou seja de 1 a 9.
} */

//Pode ser que eu queira pular alguma das iterações.Pular a parte do codigo que executa a ação dentro da iteração.

for(let numero of numeros) {

    if(numero === 2 || numero === 5){
        continue;//Pula para a proxima iteração sem executar o restante do codigo que vem abaixo, ou seja não mostra o numero 2.
    }
    
    if(numero === 7) {
        continue; //Eu posso colocar um ou dentro do mesmo if ou criar outro if.
    }

    if(numero === 8) {
        console.log('8 encontrado, saindo do laço.')
        break; //Quebra o laço assim que encontro o meu numero 8.
    }//Como eu também não mostro o numero 7 o meu codigo executa até o numero 6, ele quebra antes de mostrar o 8.

    console.log(numero);//mostra cada iteração do laço, ou seja de 1 a 9.
} 

//A partir do momento que meu codigo encontra a palavra break ele para de executar o restante, então se tiver mais de um brak no codigo ele não executa. Já o continue ele continua executando o codigo só não mostra aquele momento do codigo, então eu posso ter mais de um continue dentro do meu codigo e será executado normalmente.

//Atualizar a variavel de controle sempre antes do break ou do continue! Para não virar um looping infinito.