/*
Primitivos - String, number, boolean, undefined, null (bigint,symbol)

Referência (valores mutaveis) - Arrays, objetos, funções.
*/
let a = 'A';
let b = a; //Cópia.
console.log(a,b);
//a e b são variáveis independentes, b só depende de a para pegar seu valor em um primeiro momento, se posteriormente eu trocar o valor de a para C o valor de b vai continuar sendo A.

let c = [1,2,3];
let d = c;
//Nesse caso d aponta para o mesmo lugar da memoria que c. Com isso se eu altero o valor de a ou o balor de b eu altero ambos.
let e = [...c]; //Aqui o valor de c foi copiado para e. O valor de e é independente.
console.log(c,d);

c.push(4);//alterei apenas o valor de c, e mesmo assim d foi alterado, mostrando 1,2,3,4.
console.log(c,d); 

d.pop();//Exclui o ultimo valor de d e o ultimo valor de c também foi excluido pois ambos apontam para o mesmo valor da memoria.
console.log(c,d);

//Os valores de referencia apontam para o mesmo lugar da memoria e os primitivos não.

//Arrays são colchetes e objetos são chaves.
const x = {
    nome : 'Luiz',
    sobrenome : 'Otavio'
};

const y = x;
const w = {...x};//Eu fiz uma copia que não aponta para o mesmo lugar na memoria de x, então quando eu altero o valor de x eu nao mudo o valor de w.

x.nome = 'João';//É um dado passado por referência, com isso quando eu mudo x eu mudo também o valor de y.

console.log (y);
console.log(w);
