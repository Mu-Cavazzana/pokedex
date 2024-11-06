let pokemonNames = [];

async function loadPokemonNames() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
        const data = await response.json();
        pokemonNames = data.results.map(pokemon => pokemon.name);
    } catch (error) {
        console.error('Erro ao carregar os nomes dos Pokémon:', error);
    }
}

function autocompletePokemon() {
    const input = document.getElementById('pokemonName').value.toLowerCase();
    const suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = '';

    if (input.length === 0) return;

    const filteredNames = pokemonNames.filter(name => name.startsWith(input)).slice(0, 5);

    filteredNames.forEach(name => {
        const suggestionItem = document.createElement('li');
        suggestionItem.textContent = name;
        suggestionItem.onclick = () => {
            document.getElementById('pokemonName').value = name;
            suggestionsDiv.innerHTML = '';
        };
        suggestionsDiv.appendChild(suggestionItem);
    });
}

window.onload = loadPokemonNames;

async function searchPokemon() {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const resultDiv = document.getElementById('pokemonResult');

    resultDiv.innerHTML = '';

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if (!response.ok) {
            throw new Error('Pokémon não encontrado');
        }

        const data = await response.json();

        resultDiv.innerHTML = `
            <h2>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <img src="${data.sprites.back_default}" alt="${data.name}">
            <p><strong>Altura:</strong> ${data.height / 10} m</p>
            <p><strong>Peso:</strong> ${data.weight / 10} kg</p>
            <p><strong>Tipo:</strong> ${data.types.map(type => type.type.name).join(', ')}</p>
            <p><strong>Habilidades:</strong> ${data.abilities.map(ability => ability.ability.name).join(', ')}</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p>${error.message}</p>`;
    }
}