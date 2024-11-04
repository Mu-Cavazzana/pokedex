const Treinador = require('../models/treinador');
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

const criarTreinador = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).send('Erro ao fazer o upload da imagem.');
    }
    const { nome, equipe, altura, peso, pokemonsEquipe } = req.body;
    const imagem = req.file ? `/uploads/${req.file.filename}` : null;
    const novoTreinador = new Treinador(nome, equipe, altura, peso, pokemonsEquipe, imagem);
    res.render('pokemonView', { treinador: novoTreinador });
  });
};

module.exports = { criarTreinador };
