(async() => {
    
    const database = require ('./db');
    const Pokemon = require('./models/pokemon');
    const Treinador = require('./models/treinador');
    await database.sync();
    
    console.log(pokemons);

})();