// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.
// Paisagem, largura > altura.

/* function ePaisagem (l, a) {
    if (l > a) {
        return true;
    } else {
        return false;
    }
}
const paisagem = ePaisagem (1000, 100);
console.log(paisagem); */

const P2 = (l, a) => l > a ? true : false;
console.log(P2(1000, 200));

