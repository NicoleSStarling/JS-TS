//Getters e Setters - Fazer um método da função ou do objeto simular que ele é uma propriedade. Uma maneira de proteger a minha propriedade.
//Getters - Obter um valor.
//Setters - Setar (configurar) o valor.

//defineProperty - Getter e Setters

function Produto (nome, preco, estoque){//Função construtora.
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave.
        //value: estoque, //valor definido.
        //writable: true, //pode alterar ou não.
        configurable: true, //configuravel.
        get: function(){ // Pega e mostra o valor.
            return estoquePrivado;
        },
        set: function(valor){ //Configurar
 if(typeof valor !== 'number'){
    console.log('Bad value');
    return;
 }
 estoquePrivado = valor;
        }
    });
}

const p1 = new Produto ('Camiseta', 20, 3);
//console.log(p1);
p1.estoque = 2;
console.log(p1.estoque);