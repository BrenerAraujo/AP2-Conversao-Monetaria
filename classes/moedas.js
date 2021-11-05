class Moedas {
    valor;
    num;
    moeda2;

    constructor(num, moeda2){
        this.num = num;
        this.moeda2 = moeda2;
    }

    conversao(){};

    getMoeda2(){
        return this.moeda2;
    }

    getValor(){
        return this.valor;
    }

}
