/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import * as Yup from 'yup';
import Kit from '../app/models/Kit';
import Arquivo from '../app/models/Arquivo';
import Material from '../app/models/Material';

/**
 * Controller responsável por Materiais.
 * @author Manoel
 * @version 1.0.0
 */
class KitController {
  async store(req, res) {
    const schema = Yup.object().shape({
      ktt_nome: Yup.string().required(),
      ktt_codigo: Yup.string().required(),
      ktt_quantidade: Yup.number().integer().min(1).required(),
      ktt_categoria: Yup.string().required(),
      ktt_subcategoria: Yup.string().required(),
    });

    const dadosValidos = await schema.isValid(req.body);

    if (!dadosValidos) {
      return res.status(400).json({ error: 'Dados inválidos!' });
    }

    try {
      const {
        id,
        ktt_nome,
        ktt_codigo,
        ktt_quantidade,
        ktt_categoria,
        ktt_subcategoria,
      } = await Kit.create(req.body);

      return res.json({
        id,
        ktt_nome,
        ktt_codigo,
        ktt_quantidade,
        ktt_categoria,
        ktt_subcategoria,
      });
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao salvar!' });
    }
  }

  async index(req, res) {
    const todosKits = await Kit.findAll({
      attribuites: [
        'id',
        'ktt_nome',
        'ktt_codigo',
        'ktt_quantidade',
        'ktt_categoria',
        'ktt_subcategoria',
      ],
      include: [
        {
          model: Arquivo,
          as: 'imagem',
          attribuites: ['ars_nome', 'ars_path', 'url'],
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
          ? { message: 'Material deletado com sucesso' }
          : { message: `Não existe material com ID ${req.params.id}` },
      );
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      ktt_nome: Yup.string(),
      ktt_codigo: Yup.string(),
      ktt_quantidade: Yup.number().integer().min(1),
      ktt_categoria: Yup.string(),
      ktt_subcategoria: Yup.string(),
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
      ktt_quantidade: quantidade,
      ktt_categoria: categoria,
      ktt_subcategoria: subcategoria,
      id_imagem,
    } = await kit.update(req.body);

    return res.json({
      ktt_nome: nome,
      ktt_codigo: codigo,
      ktt_quantidade: quantidade,
      ktt_categoria: categoria,
      ktt_subcategoria: subcategoria,
      id_imagem,
    });
  }
}

export default new KitController();
