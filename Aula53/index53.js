const elementos = [ 
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];


//vou selecionar meu elemento container do html.
const container = document.querySelector ('.container');
const div = document.createElement('div'); //criando um elemento, no caso uma div.

//Vamos usar o for para percorrer o array elementos.
for(let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos [i];//associação via desestruturação.
    let tagCriada = document.createElement(tag);//criando elemento.
    tagCriada.innerHTML = texto;//a tag ja esta criada e recebendo o texto.
    div.appendChild(tagCriada);
}

container.appendChild(div);

//Selecionamos o conteiner que já existia no html, criamos a div, criamos as tags dentro do for que é um looping que vai ser executado dentro de todos os elementos do array e a cada interação do laço nos criamos uma tag baseada nos elementos do array e depois das tags criadas nos adicionamos elas dentro da div, então a cada interação do laco ele adiciona um elemento do array dentro da div. E por fim eu adiciono no meu conteiner a minha div.