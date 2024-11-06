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

const upload = multer({ storage: storage }).single('foto');

const criarTreinador = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).send('Erro ao fazer o upload da Foto.');
    }
    const { nome, equipe, altura, peso, pokemonsEquipe } = req.body;
    const foto = req.file ? `/uploads/${req.file.filename}` : null;
    const novoTreinador = new Treinador(nome, equipe, altura, peso, pokemonsEquipe, foto);
    res.render('treinadorView', { treinador: novoTreinador });
  });
};

module.exports = { criarTreinador };
