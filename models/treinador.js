class Treinador {
    constructor(nome, equipe, altura, peso, pokemonsEquipe, imagem) {
        this.nome = nome;
        this.equipe = equipe;
        this.altura = altura;
        this.peso = peso;
        this.pokemonsEquipe = pokemonsEquipe;
        this.imagem = imagem;
    }

    descrever() {
        return `${this.nome} é um Treinador da equipe ${this.equipe}, com altura de ${this.altura}m, peso de ${this.peso}kg, e pokemons da equipe: ${this.pokemonsEquipe}. Imagem: ${this.imagem}`;
    }
}

module.exports = Treinador;

