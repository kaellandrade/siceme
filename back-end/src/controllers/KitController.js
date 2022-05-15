import * as Yup from 'yup';
import Kit from '../app/models/Kit';
import Arquivo from '../app/models/Arquivo';
import db from '../database/index';
import MaterialKit from '../app/models/MaterialKit';

/**
 * Controller responsável por Materiais.
 * @author Manoel
 * @version 1.0.0
 */
class KitController {
  /**
   * Realizando a composição dos kits.
   * @param {ktt_nome,ktt_codigo,ktt_categoria,ktt_array_materiais} req
   * @param {*} res
   * @returns void
   * @since 1.0.1
   */
  async store(req, res) {
    const schema = Yup.object().shape({
      ktt_nome: Yup.string().required(),
      ktt_codigo: Yup.string().required(),
      ktt_categoria: Yup.number().min(1).required(),
      ktt_array_materiais: Yup.array().min(1).required(),
    });

    const dadosValidos = await schema.isValid(req.body);

    if (!dadosValidos) {
      return res.status(400).json({ error: 'Dados inválidos!' });
    }

    const trans = await db.sequelize.transaction();
    const { ktt_array_materiais } = req.body;

    try {
      const { id, ktt_nome, ktt_codigo, ktt_categoria } = await Kit.create(
        req.body,
        { transaction: trans },
      );
      const composicao = ktt_array_materiais.map((id_mtl_material) => ({
        id_mtl_material,
        id_ktt_kit: id,
      }));

      await MaterialKit.bulkCreate(composicao, { transaction: trans });

      await trans.commit();

      return res.json({
        id,
        ktt_nome,
        ktt_codigo,
        ktt_categoria,
      });
    } catch (error) {
      await trans.rollback();
      return res
        .status(400)
        .json({ error: 'Erro ao salvar!', message: error.errors });
    }
  }

  async index(req, res) {
    const todosKits = await Kit.findAll({
      attribuites: ['id', 'ktt_nome', 'ktt_codigo', 'ktt_categoria'],
      include: [
        {
          model: Arquivo,
          as: 'imagem',
          attribuites: ['ars_nome', 'ars_path', 'url'],
        },
        {
          model: MaterialKit,
          as: 'has_id_kit',
          // attribuites: ['id_ktt_kit'],
        },
      ],
    });
    return res.json(todosKits);
  }

  async delete(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    const dadosValidos = await schema.isValid({ id: req.params.id });

    if (!dadosValidos) {
      return res
        .status(400)
        .json({ error: 'ID do kit inválido ou não fornecido' });
    }

    const deletado = await Kit.destroy({
      where: { id: req.params.id },
    });

    return res
      .status(200)
      .json(
        deletado
          ? { message: 'Kit deletado com sucesso' }
          : { message: `Não existe Kit com ID ${req.params.id}` },
      );
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      ktt_nome: Yup.string(),
      ktt_codigo: Yup.string(),
      ktt_categoria: Yup.number().min(1),
    });

    const dadosValidos = await schema.isValid({ id: req.params.id });

    if (!dadosValidos) {
      return res.status(400).json({
        error: 'Informações inválidas',
      });
    }

    const kit = await Kit.findByPk(req.params.id);

    const {
      ktt_nome: nome,
      ktt_codigo: codigo,
      ktt_categoria: categoria,
      id_imagem,
    } = await kit.update(req.body);

    return res.json({
      ktt_nome: nome,
      ktt_codigo: codigo,
      ktt_categoria: categoria,
      id_imagem,
    });
  }
}

export default new KitController();
