const Remedio = require('../models/remedio');

const criarRemedio = async (req, res) => {
  try {
    const remedio = new Remedio(req.body);
    const resultado = await remedio.save();
    res.status(201).json({
      success: true,
      data: resultado
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Remédio já cadastrado'
      });
    }
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const buscarRemedios = async (req, res) => {
  try {
    const remedios = await Remedio.find();
    res.json({
      success: true,
      count: remedios.length,
      data: remedios
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const buscarRemedioPorId = async (req, res) => {
  try {
    const remedio = await Remedio.findById(req.params.id);
    if (!remedio) {
      return res.status(404).json({
        success: false,
        message: 'Remédio não encontrado'
      });
    }
    res.json({
      success: true,
      data: remedio
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const deletarRemedio = async (req, res) => {
  try {
    const remedio = await Remedio.findByIdAndDelete(req.params.id);
    
    if (!remedio) {
      return res.status(404).json({
        success: false,
        message: 'Remédio não encontrado'
      });
    }
    
    res.json({
      success: true,
      message: 'Remédio deletado com sucesso'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

const buscarRemedioPorNome = async (req, res) => {
  try {
    const remedio = await Remedio.findOne({ nome: req.params.nome });
    if (!remedio) {
      return res.status(404).json({
        success: false,
        message: 'Remédio não encontrado'
      });
    }
    res.json({
      success: true,
      data: remedio
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  criarRemedio,
  buscarRemedios,
  buscarRemedioPorId,
  buscarRemedioPorNome,
  deletarRemedio
};