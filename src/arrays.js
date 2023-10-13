const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let  i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfiil na rede social : ${nomeDaRedeSocial}`)
})

const alunos = ['Victor', 'Eduardo', 'Andressa', 'Isa']

const alunos2 = alunos.map(function(itemAtual) {
    itemAtual = {
        nome: itemAtual,
        curso: 'Frontend'
    }

    return itemAtual;
})

console.log(alunos2);

const numeros = [1, 2, 3, 4, 5]
const dobroDosNumeros = numeros.map(function(numeroAtual) {
    numeroAtual = numeroAtual * 2;
    return numeroAtual;
})

console.log(dobroDosNumeros);

const indiceAluno = alunos2.findIndex(function(item) {
    return item.nome == 'Gibby';
})

console.log(indiceAluno);

alunos2.push ({
    nome: 'Lucio',
    curso: 'Backend'
})

const todosAlunosFront = alunos2.every(function(item) {
    return item.curso === 'Frontend'
})

console.log(todosAlunosFront);

const existeAlunoBackend = alunos2.some(function(item) {
    return item.curso === 'Backend' && item.curso === 'Frontend'
})

console.log(existeAlunoBackend);

function filtraAlunosBackend(aluno) {
    return aluno.curso === 'Backend';
}

const alunosBackend2 = (aluno, indice) => aluno.curso === 'Backend';

const alunosBackend = alunos2.filter(filtraAlunosBackend)

console.log(alunosBackend);

const nums = [10, 20 , 30 , 10];

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma);

let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}

console.log(somaComFor);

const nomeDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome}`;
    return acumulador;
}, '')

console.log(nomeDosAlunos)