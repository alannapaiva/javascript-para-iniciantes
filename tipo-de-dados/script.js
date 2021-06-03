//Declare uma variavel contento uma string
var nome = 'Alanna';

//declara uma variavel contendo um number 
var idade = 22;

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome);
console.log(typeof idade);

// var time = null;
// console.log(typeof time);

var sobrenome = 'Paiva';
var nomeCompelto = `${nome} ${sobrenome}`; //or var nomeCompelto = nome + ' '+ sobrenome;
console.log(nomeCompelto);

var gols = 1000;
var frase = 'Romario fez ' + gols + ' gols';
console.log(frase);

//Template String
var gols = 1000;
var frase2 = `Romario fez ${gols} gols`;
console.log(frase2);

// Coloque a seguinte frase em uma variável: It's time
var frase3 = 'It\'s\ me';
console.log(frase3);