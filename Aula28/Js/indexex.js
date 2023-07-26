const numero = Number (prompt('Digite um numero:'));
//numero = Number(numero); colocanto let no lugar de const
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById ('texto');

numeroTitulo.innerHTML = numero;
raiz.innerHTML = `<p> A raiz quadrada é: ${numero ** (1/2)} </p>`;

inteiro.innerHTML = `<p> ${numero} é inteiro:  ${Number.isInteger(numero)} </p>`;

nan.innerHTML = `<p> É NaN:  ${Number.isNaN(numero)} </p>`;

baixo.innerHTML = `<p> Arredondamento para baixo:  ${Math.floor(numero)} </p>`;

cima.innerHTML = `<p> Arredondamento para cima:  ${Math.ceil(numero)} </p>`;

decimais.innerHTML = `<p> Com duas casas decimais:  ${numero.toFixed(2)} </p>`;


