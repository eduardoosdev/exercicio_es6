"use strict";

function aluno(nome, nota) {
  this.nome = nome;
  this.nota = nota;
}
var aluno1 = new aluno("Junio", 8);
var aluno2 = new aluno("Fillipe", 2);
var aluno3 = new aluno("Carol", 7);
var aluno4 = new aluno("Yuji", 10);
var aluno5 = new aluno("Eduardo", 6);
var listaAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5];
var aprovados = [];
function alunoAprovado() {
  for (var _i = 0, _listaAlunos = listaAlunos; _i < _listaAlunos.length; _i++) {
    var _aluno = _listaAlunos[_i];
    if (_aluno.nota >= 6) {
      aprovados.push({
        nome: _aluno.nome,
        nota: _aluno.nota
      });
      console.log(aprovados);
    } else if (_aluno.nota < 6) {
      console.log("aluno ".concat(_aluno.nome, " foi reprovado"));
    }
  }
}
alunoAprovado();