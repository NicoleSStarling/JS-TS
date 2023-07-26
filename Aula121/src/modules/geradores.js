const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;^~{}[]@#$%!?/*+-=|()';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

//Quero imbutir no meu array um caractere a cada volta do meu laço.
//Avaliação de curto circuito, se meu primeiro item for verdadeiro ele passa para a proxima checagem.
export default function geraSenha (qtd, maiusculas, minusculas, numeros, simbolos){
    const senhaArray = [];
    qtd = Number(qtd);

    for (let i = 0; i < qtd; i++) {
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('').slice(0, qtd);
}
