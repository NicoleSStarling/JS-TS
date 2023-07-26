const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);//acessando todos os estilos computados de css do body.
const backgroundColorBody = estilosBody.backgroundColor;//peguei especificamente a cor de fundo do body.
console.log(backgroundColorBody);//mostrei qual a cor de fundo do body.

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;//colocando o fundo do meu paragrafo igual ao fundo do meu body.
    p.style.color = '#FFFFFF';
}