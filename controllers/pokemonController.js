const Pokemon = require('../models/pokemon');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

const upload = multer({ storage: storage }).single('imagem');

const criarPokemon = async (req, res) => {
  upload(req, res, async (err) => {
      if (err) {
          return res.status(500).json({ error: 'Erro ao fazer o upload da imagem.' });
      }

      try {
          const { nome, tipo, altura, peso, nivelDePoder } = req.body;
          const imagem = req.file ? `/uploads/${req.file.filename}` : null;

          // Cria o novo Pokémon no banco de dados
          const novoPokemon = await Pokemon.create({
              nome,
              tipo,
              altura,
              peso,
              nivelDePoder,
              imagem
          });

          res.status(201).json({ message: 'Pokémon criado com sucesso!', pokemon: novoPokemon });
      } catch (error) {
          res.status(500).json({ error: 'Erro ao criar Pokémon' });
      }
  });
};

module.exports = { criarPokemon };
