function aluno (nome, nota)  {
        this.nome = nome;
        this.nota = nota;
}

let aluno1 = new aluno ("Junio", 8);
let aluno2 = new aluno ("Fillipe", 2);
let aluno3 = new aluno ("Carol", 7);
let aluno4 = new aluno ("Yuji", 10);
let aluno5 = new aluno ("Eduardo", 6);
let listaAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

const aprovados = [];

function alunoAprovado() {
    for(const aluno of listaAlunos) {
        if(aluno.nota >= 6) {
            aprovados.push({nome: aluno.nome, nota: aluno.nota});
            console.log(aprovados);
        }else if (aluno.nota < 6) {
            console.log(`aluno ${aluno.nome} foi reprovado`);
        }
    }
}

alunoAprovado();
