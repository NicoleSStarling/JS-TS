//Função date é uma função construtora. new Date.
//01/01/1970 Timestamp unix ou época unix.
//hora 15:14:27 eu escrevo, 15,14,27.
//O mês em JS começa no 0. vai de 0 a 11.
//a,m,d,h,M,s,ms.
//Dia da semana 0 é domingo.

//const data = new Date(2023, 3, 23, 15, 14, 27);

/* const data = new Date ('1994-05-30 20:20:59');//Formato mais utilizado.
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() +1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); 

console.log(data.toString());*/

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}
//Recebo uma data e exibo a data formatada.
function formataData (data) {
    const dia = zeroAEsquerda (data.getDate());
    const mes = zeroAEsquerda (data.getMonth() +1);
    const ano = zeroAEsquerda (data.getFullYear());
    const hora = zeroAEsquerda (data.getHours());
    const min = zeroAEsquerda (data.getMinutes());
    const seg = zeroAEsquerda (data.getSeconds());

    return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`;

}
const data = new Date ();//new date sem especificação mostra a data atual.
const dataBrasil = formataData(data);
console.log(dataBrasil);