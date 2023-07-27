//Funções recursivas - Uma função que se chama de volta.
function recursiva(max){
    if (max >= 10) return;
    max ++;
    console.log(max);
    recursiva(max);
}

recursiva(0);
//Ela executa o codigo dela e se chama de volta. Criei uma função que recebe um parametro (max), nesse caso eu enviei o 0, estabeleci um limite para quando a função vai parar, ela para em 10, incrementei meu parametro, com max ++, mostro meu maximo na tela e chamo a função de volta. Quando meu max for maior ou igual a 10, minha função retorna e não executa os passos seguintes.