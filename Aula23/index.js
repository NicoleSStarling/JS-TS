let varA = ('A'); //B
let varB = ('B'); //C
let varC = ('C'); //A

let varx; // Declarei sem inicializar.

varx = varA;//variavel temporária.
varA = varB;
varB = varC;
varC = varx;

console.log(varA, varB, varC);//Mostrei na tela.
