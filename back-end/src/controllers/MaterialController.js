import * as Yup from 'yup';

import Material from '../app/models/Material';

/**
 * Controller responsável por Materiais.
 * @author Micael
 * @version 1.0.0
 */
class MaterialController {
  /** Cadastra um novo material
   * @author Micael
   * @param {mrl_quantidade, mrl_quantidade} req requisição
   * @param {*} res resposta ser repassada
   * @returns void
   */

  async store(req, res) {
    const shape = Yup.object().shape({
      mtl_nome: Yup.string().required(),
      mtl_quantidade: Yup.number().required(),
    });

    const dadosValidos = await shape.isValid(req.body);

    if (!dadosValidos) {
      return res.status(400).json({ error: 'Dados inválidos!' });
    }

    const { mtl_nome, mtl_quantidade } = req.body;
    return res.body;
  }

  /** Lista todos os materiais.
   * TODO: Realizar paginação.
   * @author Micael
   * @param {*} req requisição
   * @param {*} res resposta ser repassada
   * @returns void
   */
  async index(req, res) {
    const todosMateriais = await Material.findAll();
    return res.status(200).json(todosMateriais);
  }
}

export default new MaterialController();
