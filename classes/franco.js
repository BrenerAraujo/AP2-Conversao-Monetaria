class Franco extends Moedas{
    conversao(){
        switch(this.moeda2){
            case 1:
                this.valor = this.num * 1.09;
                this.moeda2 = 'Dollar Americano';
                break;
            case 2:
                this.valor = this.num * 6.03;
                this.moeda2 = 'Real Brasileiro';
                break;
            case 3:
                this.valor = this.num * 0.94;
                this.moeda2 = 'Euro';
                break;
            case 4:
                this.valor = this.num * 0.79;
                this.moeda2 = 'Libra Esterlina';
                break;
            case 5:
                this.valor = this.num;
                this.moeda2 = 'Franco Suiço';
                break;
            case 6:
                this.valor = this.num * 108.55;
                this.moeda2 = 'Peso Argentino';
                break;
        }
    }
}