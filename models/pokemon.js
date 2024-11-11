/*const Sequelize = require('sequelize');
const database = require('./db');

class Pokemon {
    constructor(nome, tipo, altura, peso, nivelDePoder, imagem) {
        this.nome = nome;
        this.tipo = tipo;
        this.altura = altura;
        this.peso = peso;
        this.nivelDePoder = nivelDePoder;
        this.imagem = imagem;
    }

    descrever() {
        return `${this.nome} é um Pokémon do tipo ${this.tipo}, com altura de ${this.altura}m, peso de ${this.peso}kg, nível de poder: ${this.nivelDePoder}. Imagem: ${this.imagem}`;
    }
}

const Pokemon = database.define('pokemon', {
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
    tipo: {
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
    nivelDePoder: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imagem: {
        type: Sequelize.IMAGE,
        allowNull: false
    },
})

module.exports = Pokemon;
*/


const Sequelize = require('sequelize');
const database = require('../db');

const Pokemon = database.define('pokemon', {
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
    tipo: {
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
    nivelDePoder: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imagem: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Pokemon;

