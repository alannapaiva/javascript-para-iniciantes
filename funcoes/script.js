//Crie uma função para verificar se um valor é Truthy
function verificaTrue(valor){
   return !!valor;
}

//Crie uma função matematica que retorne o perímetro de um quadrado
//perimetro é a soma dos quatro lados do quadrado
function perimetroQua(lado){
    return lado*4;
}

//Crie uma função que retorne o seu nome completo
function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`;
}

//Crie uma função que verifica se um numero é par
function isEven(valor){
    if(valor%2==0){
        return 'par';
    } else{
         return 'impar';
    }
}

//Crie uma função que retorna o tipo de dado do argumento passado nela 
function tipoDado(dado){
    return typeof dado;
}

//Mostrar o seu nome completo quando o evento 'scroll' ocorrer
addEventListener('scroll', function(){  //addEventListener é uma função nativa do js, primeiro parametro é oq ocorrer e o segundo é o Callback 
    console.log('Alanna Paiva');
});