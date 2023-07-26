const h1 = document.querySelector('.container h1');
const data = new Date ();

function getDiaSemanaTexto (diaSemana) {
    const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
    return diasSemana [diaSemana];
}

function getNomeMes (numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses [numeroMes];
}


/*function getDiaSemanaTexto (diaSemana) {
let diaSemanaTexto;
switch (diaSemana) {
    case 0:
    diaSemanaTexto = 'Domingo';
    return diaSemanaTexto;
    case 1:
    diaSemanaTexto = 'Segunda-feira';
    return diaSemanaTexto;
    case 2:
    diaSemanaTexto = 'Terça-feira';
    return diaSemanaTexto;
    case 3:
    diaSemanaTexto = 'Quarta-feira';
    return diaSemanaTexto;
    case 4:
    diaSemanaTexto = 'Quinta-feira';
    return diaSemanaTexto;
    case 5:
    diaSemanaTexto = 'Sexta-feira';
    return diaSemanaTexto;
    case 6:
    diaSemanaTexto = 'Sabado';
    return diaSemanaTexto;
    default:
    diaSemanaTexto = '';
    return diaSemanaTexto;
}
}

function getNomeMes (numeroMes) {
    let diaMesTexto;
    switch (numeroMes) {
        case 0:
            diaMesTexto = 'Janeiro';
        return diaMesTexto;
        case 1:
            diaMesTexto = 'Fevereiro';
        return diaMesTexto;
        case 2:
            diaMesTexto = 'Março';
        return diaMesTexto;
        case 3:
            diaMesTexto = 'Abril';
        return diaMesTexto;
        case 4:
            diaMesTexto = 'Maio';
        return diaMesTexto;
        case 5:
            diaMesTexto = 'Junho';
        return diaMesTexto;
        case 6:
            diaMesTexto = 'Julho';
        return diaMesTexto;
        case 7:
            diaMesTexto = 'Agosto';
        return diaMesTexto;
        case 8:
            diaMesTexto = 'Setembro';
        return diaMesTexto;
        case 9:
            diaMesTexto = 'Outubro';
        return diaMesTexto;
        case 10:
            diaMesTexto = 'Novembro';
        return diaMesTexto;
        case 11:
            diaMesTexto = 'Dezembro';
        return diaMesTexto;
        default:
            diaMesTexto = '';
        return diaMesTexto;
    }
    }

    function zeroAEsquerda (num) {
        return num >= 10 ? num : `0${num}`
    }*/

    function criaData(data) {
        const diaSemana = data.getDay();
        const numeroMes = data.getMonth();

        const nomeDia = getDiaSemanaTexto(diaSemana);
        const nomeMes = getNomeMes(numeroMes);
        return `${nomeDia}, ${data.getDate()} de ${nomeMes}` + ` de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;
    }

h1.innerHTML = criaData(data); 

//OUTRA SOLUÇÃO

/* const h1 = document.querySelector('.container h1');
const data = new Date ();
const opcoes = {
    dateStyle : 'full'
}
h1.innerHTML = data.toLocaleDateString('pt-BR',opcoes); */

