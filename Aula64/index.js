try {
    //Executada quando não há erros.
} catch (e) {
    //É executada quando há erros.
} finally {
    //É executada sempre e pode ser omitido.
}

function retornaHora (data) {
    if (data && ! (data instanceof Date)) {
        throw new TypeError ('Esperando instância de Date.')
    }

    if (!data) {
        data = new Date ();
    }

    return data.toLocaleTimeString ('pt-BR',{hour12: false});
}

const data = new Date ('30-05-1994 08:30:58');
const hora = retornaHora ();
console.log(hora);