import Categoria from '../app/models/Categoria';

class CategoriaController {
  async index(req, res) {
    const { id, cta_nome } = await Categoria.findByPk(req.params.id);
    return res.status(200).json({ id, cta_nome });
  }
}

export default new CategoriaController();
