let meuMap = new Map();
meuMap.set("nome", "gian");
meuMap.set("Stack", "Html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome)

console.log(meuMap.size)

console.log(meuMap.has("sobrenome"))

//meuMap.clear()

console.log(meuMap.size)

for (let chave of meuMap.keys()) {
    console.log(chave)
}

for (let valor of meuMap.values()) {
    console.log(valor)
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`)
}

const cpfs = new Set();

cpfs.add('12312312343')
cpfs.add('12212312343')
cpfs.add('12412312343')

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['Batheus Pawden', 'Rogerinho Tormin', 'Junio Septimo']

const arrayComoSet = new Set([...array])

const arraySemDuplicadas = [...arrayComoSet]

console.log(arrayComoSet)
console.log(arraySemDuplicadas)