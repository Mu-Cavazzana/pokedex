document.getElementById('pokemonForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    const nome = formData.get('nome');
    const tipo = formData.get('tipo');
    const altura = formData.get('altura');
    const peso = formData.get('peso');
    const nivelDePoder = formData.get('nivelDePoder');
    const imagem = formData.get('imagem'); 

    const cardContainer = document.getElementById('pokemonCardContainer');
    cardContainer.innerHTML = `
        <div class="pokemon-card">
            <img src="${URL.createObjectURL(imagem)}" alt="${nome}">  <!-- Carregando a imagem -->
            <h5>Pokémon</h5>
            <h2>${nome}</h2>
            <div class="details">
                <p><strong>Tipo:</strong> ${tipo}</p>
                <p><strong>Altura:</strong> ${altura} m</p>
                <p><strong>Peso:</strong> ${peso} kg</p>
                <p><strong>Nível de Poder:</strong> ${nivelDePoder}</p>
            </div>
        </div>
    `;
});

document.getElementById('treinadorForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    const nome = formData.get('nome');
    const equipe = formData.get('equipe');
    const altura = formData.get('altura');
    const peso = formData.get('peso');
    const pokemonsEquipe = formData.get('pokemonsEquipe');
    const foto = formData.get('foto'); 

    const cardContainer = document.getElementById('treinadorCardContainer'); // aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa arrumei senhor 
    cardContainer.innerHTML = `
        <div class="pokemon-card">
            <img src="${URL.createObjectURL(foto)}" alt="${nome}">  <!-- Carregando a imagem -->
            <h5>Treinador(a)</h5>
            <h2>${nome}</h2>
            <div class="details">
                <p><strong>Equipe:</strong> ${equipe}</p>
                <p><strong>Altura:</strong> ${altura} m</p>
                <p><strong>Peso:</strong> ${peso} kg</p>
                <p><strong>Pokémons:</strong> ${pokemonsEquipe}</p>
            </div>
        </div>
    `;
      
});
