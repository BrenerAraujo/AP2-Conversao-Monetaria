class Peso extends Moedas{
    conversao(){
        switch(this.moeda2){
            case 1:
                this.valor = this.num * 0.01;
                this.moeda2 = 'Dollar Americano';
                break;
            case 2:
                this.valor = this.num * 0.056;
                this.moeda2 = 'Real Brasileiro';
                break;
            case 3:
                this.valor = this.num * 0.0086;
                this.moeda2 = 'Euro';
                break;
            case 4:
                this.valor = this.num * 0.0073;
                this.moeda2 = 'Libra Esterlina';
                break;
            case 5:
                this.valor = this.num * 0.0092;
                this.moeda2 = 'Franco Suiço';
                break;
            case 6:
                this.valor = this.num;
                this.moeda2 = 'Peso Argentino';
                break;
        }
    }
}