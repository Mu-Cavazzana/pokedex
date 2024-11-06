async function searchPokemon() {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const resultDiv = document.getElementById('pokemonResult');

    // Limpa o resultado anterior
    resultDiv.innerHTML = '';

    try {
        // Faz a requisição à PokéAPI
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if (!response.ok) {
            throw new Error('Pokémon não encontrado');
        }

        const data = await response.json();

        // Exibe as informações do Pokémon
        resultDiv.innerHTML = `
            <h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p><strong>Altura:</strong> ${data.height / 10} m</p>
            <p><strong>Peso:</strong> ${data.weight / 10} kg</p>
            <p><strong>Tipo:</strong> ${data.types.map(type => type.type.name).join(', ')}</p>
            <p><strong>Habilidades:</strong> ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p>${error.message}</p>`;
    }
}