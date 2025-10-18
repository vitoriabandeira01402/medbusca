const express = require('express');
const router = express.Router();
const {
  criarRemedio,
  buscarRemedios,
  buscarRemedioPorId,
  buscarRemedioPorNome,
  deletarRemedio
} = require('../controllers/remedioController');

router.post('/', criarRemedio);
router.get('/', buscarRemedios);
router.get('/:nome', buscarRemedioPorNome);
router.get('/:id', buscarRemedioPorId);
router.delete('/:id', deletarRemedio);

module.exports = router;