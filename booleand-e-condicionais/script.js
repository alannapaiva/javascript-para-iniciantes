// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 22;
var idadePrimo = 21;

if(minhaIdade > idadePrimo) {
  console.log('É maior');
} else 
    if(minhaIdade === idadePrimo) {
        console.log('É igual');
    } else {
      console.log('É menor');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - 's') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Alanna';
var idade = 22;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!empregoFuturo, !!dinheiroNaConta);  // '!!' verifica se os itens são true or false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil>china){
    console.log('Brasil possui mais habitantes!');
} else{
    console.log('China tem mais habitantes!');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
    console.log('Falso');
  }

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {  //tres 'iguais' verifica se as strings e numeros sao iguais 
  console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
  }

var corFavorita = 'Rosa';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Roxo':
    console.log('Olhe para o sol.')
    break;
  case 'Rosa':
    console.log('Olhe para a floresta')
    break;
  default:
    console.log('Feche os olhos.')
}