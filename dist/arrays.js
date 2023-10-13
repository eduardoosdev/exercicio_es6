"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfiil na rede social : ").concat(nomeDaRedeSocial));
});
var alunos = ['Victor', 'Eduardo', 'Andressa', 'Isa'];
var alunos2 = alunos.map(function (itemAtual) {
  itemAtual = {
    nome: itemAtual,
    curso: 'Frontend'
  };
  return itemAtual;
});
console.log(alunos2);
var numeros = [1, 2, 3, 4, 5];
var dobroDosNumeros = numeros.map(function (numeroAtual) {
  numeroAtual = numeroAtual * 2;
  return numeroAtual;
});
console.log(dobroDosNumeros);
var indiceAluno = alunos2.findIndex(function (item) {
  return item.nome == 'Gibby';
});
console.log(indiceAluno);
alunos2.push({
  nome: 'Lucio',
  curso: 'Backend'
});
var todosAlunosFront = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosAlunosFront);
var existeAlunoBackend = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frontend';
});
console.log(existeAlunoBackend);
function filtraAlunosBackend(aluno) {
  return aluno.curso === 'Backend';
}
var alunosBackend2 = function alunosBackend2(aluno, indice) {
  return aluno.curso === 'Backend';
};
var alunosBackend = alunos2.filter(filtraAlunosBackend);
console.log(alunosBackend);
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);
var nomeDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome);
  return acumulador;
}, '');
console.log(nomeDosAlunos);