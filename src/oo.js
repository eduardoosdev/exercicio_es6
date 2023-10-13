// function Pokemon (nome, tipo) {
//     this.nome = nome;
//     this.tipo = tipo;
// }

// const pikachu = new Pokemon("Pikachu", "elétrico")

class Pokemon {
    hp = 100;

    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque() {
        this.hp -= 10;
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', 'Elétrico')
    }
    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`)
    }
}

const pikachuDoAsh = new Pikachu()
pikachuDoAsh.recebeuAtaque();
console.log(pikachuDoAsh.hp)
pikachuDoAsh.atacar()

const pikachu = new Pokemon('raichu', 'fada-elétrico');
//pikachu.atacar('cauda de ferro')

console.log(pikachu);
console.log(pikachuDoAsh);

console.log(pikachuDoAsh instanceof Pikachu)
console.log(pikachuDoAsh instanceof Pokemon)