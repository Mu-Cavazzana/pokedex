/*class Treinador {
    constructor(nome, equipe, altura, peso, pokemonsEquipe, foto) {
        this.nome = nome;
        this.equipe = equipe;
        this.altura = altura;
        this.peso = peso;
        this.pokemonsEquipe = pokemonsEquipe;
        this.foto = foto;
    }

    descrever() {
        return `${this.nome} é um Treinador da equipe ${this.equipe}, com altura de ${this.altura}m, peso de ${this.peso}kg, e pokemons da equipe: ${this.pokemonsEquipe}. foto: ${this.foto}`;
    }
}

module.exports = Treinador;

*/

const Sequelize = require('sequelize');
const database = require('../db');

const Treinador = database.define('treinador', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    equipe: {
        type: Sequelize.STRING,
        allowNull: false
    },
    altura: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    peso: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    pokemonsEquipe: {
        type: Sequelize.STRING,
        allowNull: true
    },
    foto: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Treinador;