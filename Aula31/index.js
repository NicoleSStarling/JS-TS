//Funções executam ações.
function saudacao (nome) {//Os parametros são colocados dentro dos parenteses.Por exemplo nome é um parametro.
    console.log(`Bom dia ${nome}!`);
    return 123456;
}
saudacao ('Nicole'); //Estou chamando a função e quero que ela seja executada. Quando eu chamo a função eu coloco no parenteses o que eu quero que esteja no parametro, nesse caso o nome.
saudacao ('Pedro');//A função é reutilizavel eu posso mudar apenas o parametro.
saudacao ('Luiz');

const variavel = saudacao ('Luiz'); //Estou salvando em variavel o valor a ela estipulado. Só que ela não retorna nada, somente exibe algo na tela.
console.log(variavel);//Se ela não retorna nada exibe undefined.

function saudacao2 (nome2) {//Os parametros são colocados dentro dos parenteses.Por exemplo nome é um parametro.
    return `Bom dia ${nome2}!`;
}
const variavel2 = saudacao2 ('Luiz'); 
console.log(variavel2);//Ela vai retornar Bom dia Luiz.

/*function soma(x,y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2,2));
console.log(soma(10,12));
console.log(soma(21,3));*/

function soma(x=1,y=1) { //caso eu nao envie um parametro para x e y, ele usa os valores pre determinados.Se eu mando os parametros ele usa o que eu mandei.
    const resultado = x + y;
    return resultado;
}
const resultado = soma();
console.log(resultado);

const raiz = function(n){
    return n ** 0.5;
}; //Nesse caso eu preciso colocar o ponto e virgula para fechar.
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

//const raiz = n => n ** 0.5; 
//Outro jeito de escrever exatamente a função anterior.

const subtracao = (s,h) =>{ //funçaõ como as anteriores.
    const result = s - h;
    return result;
};

const result = subtracao (8,2);
console.log(result);

