//Escreva uma função que receba 2 números e retorne o maior deles.

function maiorNumero (x, y) {
    if (x > y){
        return x;
    } else {
        return y;
    }
}
const maior = maiorNumero (1, 2);
console.log(maior);

//function maiorNumero (x, y){ return x > y ? x : y;}
//outro jeito de escrever.

//const max2 = (x, y) => x > y ? x : y; console.log(max2(100,20));
//outro jeito de escrever, mais simplificado.