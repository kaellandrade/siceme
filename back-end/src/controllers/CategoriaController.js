import Categoria from '../app/models/Categoria';

class CategoriaController {
  async index(req, res) {
    const categoria = await Categoria.findAll({
      attributes: ['id', 'cta_nome']
    });
    return res.status(200).json(categoria);
  }
}

export default new CategoriaController();
