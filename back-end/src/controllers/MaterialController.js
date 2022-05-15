import * as Yup from 'yup';

import Material from '../app/models/Material';
import Arquivo from '../app/models/Arquivo';
import Status from '../app/models/Status';

const LIMITE_POR_PAGINA = 20;

/**
 * Controller responsável por Materiais.
 * @author Micael e Manoel
 * @version 1.0.2
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
      mtl_quantidade: Yup.number().integer().min(1).required(),
      mtl_descricao: Yup.string(),
      mtl_codigo: Yup.string().required(),
      mtl_categoria: Yup.number().integer().min(1).required(),
      mtl_status_id: Yup.number().integer().min(1).required(),
    });

    const dadosValidos = await shape.isValid(req.body);

    if (!dadosValidos) {
      return res.status(400).json({ error: 'Dados inválidos!' });
    }
    const {
      mtl_nome,
      mtl_quantidade,
      mtl_descricao,
      mtl_codigo,
      mtl_categoria,
      mtl_status_id,
    } = req.body;

    const oMaterial = await Material.create({
      mtl_nome,
      mtl_quantidade,
      mtl_descricao,
      mtl_codigo,
      mtl_categoria,
      mtl_status_id,
    });

    return res.status(200).json(oMaterial);
  }

  /** Lista todos os materiais.
   * @author Micael
   * @param {iPagina} req requisição
   * @param {*} res resposta ser repassada
   * @returns void
   * @since 1.0.0 Inicial
   * @since 1.0.1 Realizando paginação caso o usuário passe uma página
   */
  async index(req, res) {
    const iPagina = Number(req.query.pagina ? req.query.pagina : 0);
    const iOffSet = (iPagina - 1) * LIMITE_POR_PAGINA;
    // Configurando o limite caso o usuário passe uma pagina válida
    const limiteObject =
      iPagina <= 0
        ? {}
        : {
          limit: LIMITE_POR_PAGINA,
          offset: iOffSet,
        };

    try {
      const materiaisPorPagina = await Material.findAll({
        attributes: [
          'id',
          'mtl_nome',
          'mtl_quantidade',
          'mtl_codigo',
          'mtl_descricao',
          'mtl_categoria',
          'mtl_status_id',
        ],
        include: [
          {
            model: Arquivo,
            as: 'imagem',
            attributes: ['ars_nome', 'ars_path', 'url'],
          },
          {
            model: Status,
            as: 'status',
            attributes: ['sts_status_nome', 'id'],
          },
        ],
        ...limiteObject,
      });
      return res.json(materiaisPorPagina);
    } catch (error) {
      return res.status(500).json({ error: 'Error ao consultar materiais!' });
    }
  }

  /** Remove um material através do id
   * @author Micael
   * @param {id} req
   * @param {*} res
   * @returns JSON
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
      mtl_quantidade: Yup.number().integer().min(1),
      mtl_descricao: Yup.string(),
      mtl_codigo: Yup.string(),
      mtl_categoria: Yup.string(),
      mtl_status_id: Yup.number().integer().min(1),
    });
    const dadosValidos = await schema.isValid({ id: req.params.id });

    if (!dadosValidos) {
      return res.status(400).json({
        error: 'Informações inválidas',
      });
    }

    const material = await Material.findByPk(req.params.id);

    const {
      mtl_nome: nome,
      mtl_quantidade: quantidade,
      mtl_descricao: descricao,
      mtl_codigo: codigo,
      mtl_categoria: categoria,
      mtl_status_id: status_id,
      id_imagem,
    } = await material.update(req.body);

    return res.json({
      mtl_nome: nome,
      mtl_quantidade: quantidade,
      mtl_descricao: descricao,
      mtl_codigo: codigo,
      mtl_categoria: categoria,
      mtl_status_id: status_id,
      id_imagem,
    });
  }
}

export default new MaterialController();
