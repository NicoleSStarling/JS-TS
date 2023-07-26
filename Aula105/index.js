//Métodos de instância e estáticos. São métodos que pode se utilizar na classe sem instanciar. São como se fosse funções que estão dentro da classe.

class ControleRemoto {
    constructor (tv){
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume (){
        this.volume += 2;
    }

//Métodos de instância.
    diminuirVolume (){
        this.volume -= 2;
    }

    //Métodos estáticos.Vai trocar a pilha de todos os controles.
     static trocaPilha (){
        console.log('Ok, vou trocar!');
    }
}

const c1 = new ControleRemoto ('LG');
c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();
//c1.trocaPilha(); Não consigo acessar ele assim por ser estatico.
ControleRemoto.trocaPilha();//É estático de troca pilha.
console.log(c1);

const c2 = new ControleRemoto('Sansung');
c2.aumentarVolume();
c2.diminuirVolume();
c2.aumentarVolume();
console.log(c2);


