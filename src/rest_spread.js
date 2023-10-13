function somar () {
    let soma = 0;

    for(let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
}

console.log(somar(10, 20))

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30))

const numeros = [1,2,3,4]
console.log(...numeros)

const timesDeFutebol = ['futebol01', 'futebol02', 'futebol03', 'futebol04'];
const timesDeBasquete = ['basquete01', 'basquete02', 'basquete03', 'basquete04'];

const timesDeEsporte = [...timesDeFutebol, ...timesDeBasquete];

console.log(timesDeEsporte)

const carroDaAndressa = {
    modelo: 'Fit',
    marca: 'Honda',
    motor: 1.5
}

const carroDoMateus = {
    ...carroDaAndressa
}

console.log(carroDaAndressa)

const {motor: motorDoCarroDaAndressa } = carroDaAndressa;
const {motor: motorDoCarroDoMateus } = carroDoMateus;

console.log(motorDoCarroDaAndressa)
console.log(motorDoCarroDoMateus)

const [item1, item2, item3, ...outrosEsposrtes] = timesDeEsporte;

console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosEsposrtes)