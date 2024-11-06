let offset = 0;
const limit = 20;

async function fetchPokemonList() {
    const pokemonListDiv = document.getElementById('pokemonList');
    pokemonListDiv.innerHTML = '';

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
        const data = await response.json();

        data.results.forEach(async (pokemon) => {
            const pokemonData = await fetch(pokemon.url).then(res => res.json());
            const pokemonItem = document.createElement('div');
            pokemonItem.classList.add('pokemon-item');

            pokemonItem.innerHTML = `
                <img src="${pokemonData.sprites.front_default}" alt="${pokemon.name}">
                <p>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
            `;

            pokemonListDiv.appendChild(pokemonItem);
        });

        document.getElementById('prevButton').disabled = offset === 0;
        document.getElementById('nextButton').disabled = !data.next;

    } catch (error) {
        console.error('Erro ao carregar a lista de Pokémon:', error);
    }
}

function previousPage() {
    if (offset > 0) {
        offset -= limit;
        fetchPokemonList();
    }
}

function nextPage() {
    offset += limit;
    fetchPokemonList();
}

window.onload = fetchPokemonList;