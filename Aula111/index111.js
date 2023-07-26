//XMLHttpRequest
//GET representa buscar algum conteudo na internet. Padrão do navegador.

/*const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status <300) {
            obj.success(xhr.responseText);
        } else {
            obj.error(xhr.statusText);
        }
    })
};*/

const request = obj => {
    return new Promise ((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status <300) {
            resolve(xhr.responseText);
        } else {
            reject(xhr.statusText);
        }
    });
});
};

//Vou adicionar um evento no documento todo. Pegar qualquer clique em qualquer parte do documento.
//Dentro da função eu verifico qual elemento está sendo clicado, se for umlink ai sim eu executo a ação de carregar a página.
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase(); //Quero saber qual a tag que está sendo clicada se é um link ou outra coisa.


//Vou checar se minha tag é um "a". "a" é um link.
//Tenho que prevenir o evento, ou seja, quando clicar no link ele não redireciona imediatamente - e.preventDefault().
    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

//Recebi o link que foi clicado na minha função carregaPagina.
//Vou pegar o link que esta sendo clicado. Se é pagina 1, 2 ou 3.
//Chamo minha função criada anteriormente, request e dentro dessa função eu preciso mandar um objeto, que tem um metodo, uma url, status e calback de error ou success.
async function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href,
    };

    const response = await request(objConfig);
    carregaResultado(response);
}


function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;

}
