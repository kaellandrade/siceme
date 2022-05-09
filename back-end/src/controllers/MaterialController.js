import * as Yup from 'yup';

import Material from '../app/models/Material';

/**
 * Controller responsável por Materiais.
 * @author Micael e Manoel
 * @version 1.0.1
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

    const oMaterial = await Material.create({ mtl_nome, mtl_quantidade });

    return res.status(200).json(oMaterial);
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

  /** Remove um material através do id
   * @author Micael
   * @param {id} req requisição
   * @param {*} res resposta ser repassada
   * @returns void
   */
  async delete(req, res) {
    const shape = Yup.object().shape({
      id: Yup.number().required(),
    });

    const dadosValidos = await shape.isValid({ id: req.params.id });
    if (!dadosValidos) {
      return res
        .status(400)
        .json({ error: 'Id do material inválido ou não fornecido.' });
    }

    const bDeletado = await Material.destroy({
      where: { id: req.params.id },
    });

    return res
      .status(200)
      .json(
        bDeletado
          ? { mensagem: 'Material deletado com sucesso' }
          : { mensagem: `Não existe material com id ${req.params.id}` },
      );
  }

  /** Atualização de um material
   * @author Manoel
   * @param {*} req requisição
   * @param {*} res resposta ser repassada
   * @returns void
   */
  async update(req, res) {
    const schema = Yup.object().shape({
      mtl_nome: Yup.string(),
      mtl_quantidade: Yup.number().integer(),
      id_imagem: Yup.number().integer(),
    });
    const dadosValidos = await schema.isValid({ id: req.params.id });

    if (!dadosValidos) {
      return res.status(400).json({
        erro: 'Informações inválidas',
      });
    }

    const material = await Material.findByPk(req.params.id);

    const { mtl_nome: nome, mtl_quantidade: quantidade } =
      await material.update(req.body);

    return res.json({
      mtl_nome: nome,
      mtl_quantidade: quantidade,
    });
  }
}

export default new MaterialController();
