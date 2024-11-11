const { Sequelize } = require('sequelize');

// Configuração da conexão com o banco de dados PostgreSQL
const sequelize = new Sequelize('pokedex', 'postgres', 'postgres', {
    host: 'localhost', // ou o host do seu servidor de banco de dados
    dialect: 'postgres',
    logging: false, // Define como `true` para ver as queries no console
});

module.exports = sequelize;

sequelize
    .authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados bem-sucedida.');
    })
    .catch((err) => {
        console.error('Erro ao conectar com o banco de dados:', err);
    });