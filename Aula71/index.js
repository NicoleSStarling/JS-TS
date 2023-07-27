const nome = 'Nicole';

function falaNome(){
    console.log(nome);
}
falaNome();

//A funçaõ conhece o local onde foi declarada, tudo que esta declarado dentro dela e o que esta nos vizinhos dela.

function usaFalaNome (){
    falaNome();
}
usaFalaNome();
