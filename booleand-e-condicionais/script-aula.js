var possuiGradruacao = false;
var possuiDoutorado = true;

if(possuiGradruacao) {
  console.log('É verdadeiro');
} else if(possuiDoutorado) {
  console.log('Possui Doutorado');
} else {
  console.log('Não possui nada');
}

var nome = '10kg' / 10;

if(nome) {
  console.log(nome);
} else {
  console.log('Nome não existe');
}

if(!possuiGradruacao) {
  console.log(possuiGradruacao);
  console.log('Não possui graduação');
}

var x = 10;

console.log(x !== 11)

// true && true; //true
// true && false; //false
// 'gato' && 'cão'; //cão
// (5-5) && (5+5); //0
// 'gato' && false; //flase
// (5>=5) && (3<6); //true

if((5 - 5) && (5 + 5)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

var condicional = (5 - 10) && (5 + 5);   //operador && retorna o ultimo verdaeiro 
if(condicional) {
  console.log('Verdadeiro', condicional);
} else {
  console.log('Falso');
}

var condicional2 = (5 - 5) || (5 + 5) || (10 - 2); //operador || retorna o primeiro verdadeiro que for executado
console.log(condicional2);

