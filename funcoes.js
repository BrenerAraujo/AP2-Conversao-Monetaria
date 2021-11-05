function calc_result(){
    var moeda1 = document.querySelector('select#moeda1');
    var num = document.querySelector('input#numtxt');
    var moeda2 = document.querySelector('select#moeda2');
    var resultado = document.querySelector('div#resultado');

    if (num.value.length == 0) {
        alert('Por favor digite o valor que deseja fazer a coversão');
    } else {
        var moeda1 = Number(moeda1.value);
        var num = Number(num.value);
        var moeda2 = Number(moeda2.value);

        resultado.innerHTML = '';
        switch(moeda1){
            case 1:
                var obj = new Dollar(num, moeda2);
                moeda1 = 'Dollar Americano';
                break;
            case 2:
                var obj = new Real(num, moeda2);
                moeda1 = 'Real Brasileiro';
                break;
            case 3:
                var obj = new Euro(num, moeda2);
                moeda1 = 'Euro';
                break;
            case 4:
                var obj = new Libra(num, moeda2);
                moeda1 = 'Libra Esterlina';
                break;
            case 5:
                var obj = new Franco(num, moeda2);
                moeda1 = 'Fraco Suiço';
                break;
            case 6:
                var obj = new Peso(num, moeda2);
                moeda1 = 'Peso Argentino';
                break;
        }
        obj.conversao();
        resultado.innerHTML = '<p class="moeda1">' + num + ' ' + moeda1 + ' é igual a</p>';
        resultado.innerHTML += '<p>' + obj.getValor().toFixed(2).replace('.', ',') + ' ' + obj.getMoeda2() + '</p>';
    }
}
