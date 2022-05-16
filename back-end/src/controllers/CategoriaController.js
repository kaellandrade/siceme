import * as Yup from 'yup';
import Categoria from '../app/models/Categoria';
/**
 * Controller responsável por Categorias.
 * @author Micael e Manoel
 * @version 1.0.2
 */
class CategoriaController {
  async index(req, res) {
    const categoria = await Categoria.findAll({
      attributes: ['id', 'cta_nome']
    });
    return res.status(200).json(categoria);
  }

  async store(req, res) {
    const shape = Yup.object().shape({
      cta_nome: Yup.string().required(),
    });

    const dadosValidos = await shape.isValid(req.body);

    if (!dadosValidos) {
      return res.status(400).json({ error: 'Dados inválidos!' });
    }
    const { cta_nome } = await Categoria.create(req.body);
    return res.status(200).json({ cta_nome });
  }
}

export default new CategoriaController();
