function areaQuadrado(lado){ //chamada de function declaration 
    return lado * lado;
}

console.log(areaQuadrado(4), areaQuadrado(5) );

function imc(peso, altura){
    var imc = peso/ (altura **2);
    return imc;
}

console.log(imc(80,1.8))  //80 e 1.8 são os argumentos 

function corFav(cor) {
    if(cor == 'azul'){
        return 'Eu gosto do céu';
    } else if (cor == 'verde'){
        return 'eu gosto de mato';
    } else{
        return 'eu nao gosto de cores';
    }
}

//argumentos podem ser funções
//    chamadas de Callback, geralmentte são funções que ocorrem após algum evento 
addEventListener('click', function(){  //a função possui dois argumentos, 'click' que é uma string e a função anonima 
    console.log('Clicou');
});

function imc2(peso,altura){
    const imc = peso / (altura **2);
    console.log(imc);
}

imc2(20, 1.8);

function faltaVisitar(paisesVisitados){
    var totalPaises = 193;
    return `Falta visitar ${totalPaises - paisesVisitados} países`
}

//Hoisting
//   Antes de executar uma função, o JS 'move' todas as funções deckaradas para a memoria 